'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
// Fallback local data if Supabase fails or is disconnected
import localSyllabus from '@/data/syllabusLocal';
import localQuestions from '@/data/questionsLocal';

// We will cache the syllabus tree in memory to avoid repeated DB calls
let cachedSyllabus = null;

/**
 * Hook to fetch the syllabus (either from Supabase or fallback)
 */
export function useSyllabus() {
  const [syllabus, setSyllabus] = useState(cachedSyllabus);
  const [loading, setLoading] = useState(!cachedSyllabus);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedSyllabus) return;

    async function fetchSyllabus() {
      if (!supabase) {
        cachedSyllabus = localSyllabus;
        setSyllabus(localSyllabus);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.from('syllabus').select('*');
        if (error) throw error;

        // Build the tree
        const tree = {
          biology: { id: 'biology', name: 'Biology', icon: '🧬', color: 'biology', chapters: [] },
          physics: { id: 'physics', name: 'Physics', icon: '⚛️', color: 'physics', chapters: [] },
          chemistry: { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'chemistry', chapters: [] },
          mathematics: { id: 'mathematics', name: 'Mathematics', icon: '📐', color: 'physics', chapters: [] },
        };

        const nodeMap = {};
        // First pass: create node objects
        data.forEach(row => {
          nodeMap[row.id] = { ...row, children: [] };
        });

        // Second pass: attach to parents or root
        data.forEach(row => {
          const node = nodeMap[row.id];
          if (row.parent_id) {
            if (nodeMap[row.parent_id]) {
              nodeMap[row.parent_id].children.push(node);
            }
          } else {
            // Root level chapters (e.g. bio-1)
            if (tree[row.subject]) {
              tree[row.subject].chapters.push(node);
            }
          }
        });

        // Sort chapters by ID (or however they are ordered)
        Object.values(tree).forEach(sub => {
          sub.chapters.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
        });

        cachedSyllabus = tree;
        setSyllabus(tree);
      } catch (err) {
        console.error('Failed to fetch syllabus from Supabase, using local fallback:', err);
        cachedSyllabus = localSyllabus;
        setSyllabus(localSyllabus);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSyllabus();
  }, []);

  return { syllabus, loading, error };
}

/**
 * Hook to fetch questions by topics
 */
export function useQuestionsByTopics(topicIds) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!topicIds || topicIds.length === 0) {
      setQuestions([]);
      setLoading(false);
      return;
    }

    async function fetchQuestions() {
      setLoading(true);
      if (!supabase) {
        const filtered = localQuestions.filter(q => topicIds.includes(q.topic));
        setQuestions(filtered);
        setLoading(false);
        return;
      }

      try {
        // We use an IN clause. If it's a huge array, we might need to chunk it, but usually a practice session is < 100 topics
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .in('topic_id', Array.from(topicIds));
          
        if (error) throw error;
        setQuestions(data || []);
      } catch (err) {
        console.error('Failed to fetch questions from Supabase, using local fallback:', err);
        const filtered = localQuestions.filter(q => topicIds.includes(q.topic));
        setQuestions(filtered);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [topicIds]); // Expects an array or stringified array

  return { questions, loading };
}

/**
 * Hook to fetch all questions (for flashcards, mock tests, etc.)
 */
export function useAllQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      if (!supabase) {
        setQuestions(localQuestions);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.from('questions').select('*').limit(1000);
        if (error) throw error;
        setQuestions(data || []);
      } catch (err) {
        console.error('Failed to fetch all questions, using fallback:', err);
        setQuestions(localQuestions);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { questions, loading };
}

'use client';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
// Fallbacks
import localSyllabus from '@/data/syllabusLocal';
import localQuestions from '@/data/questionsLocal';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [syllabus, setSyllabus] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!supabase) {
        setSyllabus(localSyllabus);
        setQuestions(localQuestions);
        setLoading(false);
        return;
      }

      try {
        // Fetch syllabus
        const { data: sylData, error: sylError } = await supabase.from('syllabus').select('*');
        if (sylError) throw sylError;

        const tree = {
          biology: { id: 'biology', name: 'Biology', icon: '🧬', color: 'biology', chapters: [] },
          physics: { id: 'physics', name: 'Physics', icon: '⚛️', color: 'physics', chapters: [] },
          chemistry: { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'chemistry', chapters: [] },
          mathematics: { id: 'mathematics', name: 'Mathematics', icon: '📐', color: 'physics', chapters: [] },
        };

        const nodeMap = {};
        sylData.forEach(row => {
          nodeMap[row.id] = { ...row, children: [] };
        });

        sylData.forEach(row => {
          const node = nodeMap[row.id];
          if (row.parent_id) {
            if (nodeMap[row.parent_id]) nodeMap[row.parent_id].children.push(node);
          } else {
            if (tree[row.subject]) tree[row.subject].chapters.push(node);
          }
        });

        Object.values(tree).forEach(sub => {
          sub.chapters.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
        });

        setSyllabus(tree);

        // Fetch questions
        const { data: qData, error: qError } = await supabase.from('questions').select('*').limit(2000);
        if (qError) throw qError;
        setQuestions(qData || []);
      } catch (err) {
        console.error('Failed to fetch from Supabase, using local fallback:', err);
        setSyllabus(localSyllabus);
        setQuestions(localQuestions);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Helper functions
  const findTopicById = (topicId) => {
    if (!topicId || !syllabus) return null;
    for (const subject of Object.values(syllabus)) {
      const searchNode = (nodes) => {
        for (const node of nodes) {
          if (node.id === topicId) return { ...node, subject: subject.id, subjectName: subject.name };
          if (node.children) {
            const found = searchNode(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      const found = searchNode(subject.chapters);
      if (found) return found;
    }
    return null;
  };

  const getQuestionsByTopics = (topicIds) => {
    if (!topicIds || topicIds.length === 0) return questions;
    return questions.filter(q => topicIds.includes(q.topic_id)); // Map to new DB column topic_id
  };

  const value = useMemo(() => ({
    syllabus,
    questions,
    loading,
    findTopicById,
    getQuestionsByTopics,
  }), [syllabus, questions, loading]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}

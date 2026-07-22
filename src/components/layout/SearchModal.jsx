'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '@/context/DataContext';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ topics: [], questions: [] });
  const inputRef = useRef(null);
  const router = useRouter();
  
  const { syllabus, questions } = useData();

  const searchSyllabus = useCallback((q) => {
    if (!q || !syllabus) return [];
    const lower = q.toLowerCase();
    const results = [];
    Object.values(syllabus).forEach(sub => {
      const searchNode = (nodes) => {
        nodes.forEach(node => {
          if (node.name.toLowerCase().includes(lower)) results.push({ ...node, subject: sub.id });
          if (node.children) searchNode(node.children);
        });
      };
      searchNode(sub.chapters);
    });
    return results.slice(0, 15);
  }, [syllabus]);

  const searchQuestions = useCallback((q) => {
    if (!q || !questions) return [];
    const lower = q.toLowerCase();
    return questions.filter(ques => {
      if (ques.question_text && ques.question_text.toLowerCase().includes(lower)) return true;
      return false;
    }).slice(0, 15);
  }, [questions]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) setQuery('');
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) { setResults({ topics: [], questions: [] }); return; }
    const topics = searchSyllabus(query);
    const questions = searchQuestions(query);
    setResults({ topics, questions });
  }, [query]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const goToTopic = (topic) => {
    onClose();
    router.push(`/subject/${topic.subject}?highlight=${topic.id}`);
  };

  const goToPractice = (topicId) => {
    onClose();
    router.push(`/practice?topics=${topicId}`);
  };

  const subjectColors = { biology: 'var(--biology)', physics: 'var(--physics)', chemistry: 'var(--chemistry)' };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal__input-wrap">
          <span className="search-modal__icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search chapters, topics, questions, PYQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal__input"
            id="search-input"
          />
          <button className="search-modal__close" onClick={onClose}>ESC</button>
        </div>

        {query.length >= 2 && (
          <div className="search-modal__results">
            {results.topics.length > 0 && (
              <div className="search-modal__section">
                <h4 className="search-modal__section-title">📚 Topics</h4>
                {results.topics.map((topic) => (
                  <button
                    key={topic.id}
                    className="search-modal__result-item"
                    onClick={() => goToTopic(topic)}
                  >
                    <span className="search-modal__result-icon">{topic.subjectIcon}</span>
                    <div className="search-modal__result-text">
                      <span className="search-modal__result-name">{topic.name}</span>
                      <span className="search-modal__result-path">
                        {topic.path.join(' → ')}
                      </span>
                    </div>
                    <span
                      className="search-modal__result-badge"
                      style={{ background: subjectColors[topic.subject] + '22', color: subjectColors[topic.subject] }}
                    >
                      {topic.questionCount} Q
                    </span>
                  </button>
                ))}
              </div>
            )}

            {results.questions.length > 0 && (
              <div className="search-modal__section">
                <h4 className="search-modal__section-title">❓ Questions</h4>
                {results.questions.map((q) => (
                  <button
                    key={q.id}
                    className="search-modal__result-item"
                    onClick={() => goToPractice(q.topic)}
                  >
                    <span className="search-modal__result-icon">
                      {q.isPYQ ? '📋' : '📝'}
                    </span>
                    <div className="search-modal__result-text">
                      <span className="search-modal__result-name">{q.question}</span>
                      <span className="search-modal__result-path">
                        {q.difficulty} · {q.isPYQ ? `PYQ ${q.year}` : 'Practice'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {results.topics.length === 0 && results.questions.length === 0 && (
              <div className="search-modal__empty">
                <span style={{ fontSize: '2rem' }}>🔎</span>
                <p>No results found for &ldquo;{query}&rdquo;</p>
              </div>
            )}
          </div>
        )}

        {query.length < 2 && (
          <div className="search-modal__hints">
            <p>Try searching for:</p>
            <div className="search-modal__hint-tags">
              {['Epithelial Tissue', 'Mole Concept', 'Newton', 'Mitosis', 'Redox', 'Photosynthesis'].map((hint) => (
                <button key={hint} className="search-modal__hint-tag" onClick={() => setQuery(hint)}>
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

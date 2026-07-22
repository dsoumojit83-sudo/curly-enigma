'use client';

import { useState, useEffect } from 'react';
import { getNotes, saveNote, deleteNote } from '@/lib/storage';
import { useData } from '@/context/DataContext';

export default function NotesPage() { const { findTopicById, loading } = useData();
  if (loading) return null;
  const [notes, setNotes] = useState({});
  const [activeNote, setActiveNote] = useState(null);
  const [editText, setEditText] = useState('');
  const [newTopicId, setNewTopicId] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); setNotes(getNotes()); }, []);

  const noteEntries = Object.entries(notes).filter(([, v]) => v && v.trim());

  const handleSave = () => {
    if (!activeNote) return;
    saveNote(activeNote, editText);
    setNotes(getNotes());
  };

  const handleDelete = (topicId) => {
    if (confirm('Delete this note?')) {
      deleteNote(topicId);
      setNotes(getNotes());
      if (activeNote === topicId) { setActiveNote(null); setEditText(''); }
    }
  };

  const handleNew = () => {
    const id = newTopicId.trim() || `note-${Date.now()}`;
    saveNote(id, '');
    setNotes(getNotes());
    setActiveNote(id);
    setEditText('');
    setNewTopicId('');
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>📝 My Notes</h1>
        <p>Personal notes organized by topic. Write formulas, tricks, and key points.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }} className="notes-layout animate-fade-in-up stagger-1">
        {/* Sidebar */}
        <div className="glass-card" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
            <h3 style={{ fontWeight: 700, fontSize: '0.95rem' }}>📋 Notes ({noteEntries.length})</h3>
            <button className="btn btn--sm btn--primary" onClick={handleNew}>+ New</button>
          </div>

          {noteEntries.length === 0 && (
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', textAlign: 'center', padding: 'var(--space-xl) 0' }}>
              No notes yet. Create one!
            </p>
          )}

          {noteEntries.map(([topicId, content]) => {
            const topicInfo = findTopicById(topicId);
            return (
              <button
                key={topicId}
                className={`list-item list-item--hover ${activeNote === topicId ? 'list-item--active' : ''}`}
                onClick={() => { setActiveNote(topicId); setEditText(content); }}
                style={{ width: '100%', textAlign: 'left', marginBottom: '4px' }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>
                    {topicInfo?.name || topicId}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
                    {content.substring(0, 50)}...
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Editor */}
        <div className="glass-card">
          {activeNote ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  ✏️ {findTopicById(activeNote)?.name || activeNote}
                </h3>
                <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                  <button className="btn btn--sm btn--primary" onClick={handleSave}>💾 Save</button>
                  <button className="btn btn--sm btn--ghost" onClick={() => handleDelete(activeNote)}>🗑️</button>
                </div>
              </div>
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Write your notes here... Use formulas, key points, memory tricks, comparisons..."
                style={{
                  width: '100%', minHeight: '400px', padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)', color: 'var(--text-primary)',
                  fontFamily: 'inherit', fontSize: '0.95rem', lineHeight: 1.7, resize: 'vertical',
                }}
              />
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-2xl)', color: 'var(--text-tertiary)' }}>
              <span style={{ fontSize: '3rem' }}>📝</span>
              <p style={{ marginTop: 'var(--space-md)' }}>Select a note from the sidebar or create a new one.</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}

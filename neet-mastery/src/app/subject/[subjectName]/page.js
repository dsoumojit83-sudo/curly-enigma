'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import syllabus from '@/data/syllabus';

/* ── Recursive Topic Tree Node ── */
function TopicNode({ node, depth = 0, selectedTopics, onToggle, expandedNodes, onExpand }) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedTopics.has(node.id);

  // Check if all leaf children are selected
  const allChildrenSelected = hasChildren && checkAllSelected(node, selectedTopics);
  const someChildrenSelected = hasChildren && checkSomeSelected(node, selectedTopics);

  const handleCheckbox = (e) => {
    e.stopPropagation();
    onToggle(node, !isSelected);
  };

  const handleExpand = () => {
    if (hasChildren) {
      onExpand(node.id);
    }
  };

  const depthColors = [
    'var(--primary)',
    'var(--biology)',
    'var(--physics)',
    'var(--chemistry)',
  ];
  const borderColor = depthColors[depth % depthColors.length];

  return (
    <li className="topic-tree__item" style={{
      borderLeftWidth: depth > 0 ? '3px' : '1px',
      borderLeftColor: depth > 0 ? borderColor : 'var(--border)',
    }}>
      <div className="topic-tree__header" onClick={handleExpand}>
        {/* Expand/Collapse arrow */}
        {hasChildren ? (
          <span className={`topic-tree__chevron ${isExpanded ? 'topic-tree__chevron--open' : ''}`}>
            ▶
          </span>
        ) : (
          <span style={{ width: '12px' }} />
        )}

        {/* Checkbox */}
        <input
          type="checkbox"
          className="topic-tree__checkbox"
          checked={isSelected || allChildrenSelected}
          ref={(el) => {
            if (el) el.indeterminate = someChildrenSelected && !allChildrenSelected;
          }}
          onChange={handleCheckbox}
          id={`topic-${node.id}`}
        />

        {/* Label */}
        <span className="topic-tree__label" style={{ fontWeight: depth === 0 ? 600 : 500 }}>
          {node.name}
        </span>

        {/* Question count badge */}
        {node.questionCount && (
          <span className="topic-tree__count">
            {node.questionCount} Q
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <ul className="topic-tree__children topic-tree">
          {node.children.map((child) => (
            <TopicNode
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedTopics={selectedTopics}
              onToggle={onToggle}
              expandedNodes={expandedNodes}
              onExpand={onExpand}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/* ── Helpers to check nested selections ── */
function getAllLeafIds(node) {
  if (!node.children || node.children.length === 0) return [node.id];
  return node.children.flatMap(getAllLeafIds);
}

function checkAllSelected(node, selectedTopics) {
  const leafIds = getAllLeafIds(node);
  return leafIds.every((id) => selectedTopics.has(id));
}

function checkSomeSelected(node, selectedTopics) {
  const leafIds = getAllLeafIds(node);
  return leafIds.some((id) => selectedTopics.has(id));
}

/* ── Main Subject Page ── */
export default function SubjectPage() {
  const params = useParams();
  const subjectName = params.subjectName;
  const subject = syllabus[subjectName];

  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = useCallback((node, shouldSelect) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      const leafIds = getAllLeafIds(node);

      if (shouldSelect) {
        leafIds.forEach((id) => next.add(id));
      } else {
        leafIds.forEach((id) => next.delete(id));
        // Also remove the parent if it was selected
        next.delete(node.id);
      }
      return next;
    });
  }, []);

  const handleExpand = useCallback((id) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const expandAll = () => {
    const allIds = new Set();
    const collect = (nodes) => {
      nodes.forEach((n) => {
        allIds.add(n.id);
        if (n.children) collect(n.children);
      });
    };
    if (subject) collect(subject.chapters);
    setExpandedNodes(allIds);
  };

  const collapseAll = () => {
    setExpandedNodes(new Set());
  };

  const selectAll = () => {
    const allLeafIds = new Set();
    const collect = (nodes) => {
      nodes.forEach((n) => {
        if (!n.children || n.children.length === 0) {
          allLeafIds.add(n.id);
        } else {
          collect(n.children);
        }
      });
    };
    if (subject) collect(subject.chapters);
    setSelectedTopics(allLeafIds);
  };

  const clearSelection = () => {
    setSelectedTopics(new Set());
  };

  if (!subject) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-3xl)' }}>
        <h1>Subject not found</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-md)' }}>
          Please select a valid subject from the homepage.
        </p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: 'var(--space-lg)' }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  const totalSelected = selectedTopics.size;

  return (
    <div className="container">
      {/* ── Header ── */}
      <div className="animate-fade-in-up" style={{ marginBottom: 'var(--space-xl)' }}>
        <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
          <span style={{ fontSize: '2.5rem' }}>{subject.icon}</span>
          <div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800 }}>
              {subject.name}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Select topics you&apos;ve studied to start practicing
            </p>
          </div>
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="glass-card animate-fade-in-up stagger-1" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-xl)',
        padding: 'var(--space-md) var(--space-lg)',
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
          <button className="btn btn--ghost btn--sm" onClick={expandAll} id="expand-all-btn">📂 Expand All</button>
          <button className="btn btn--ghost btn--sm" onClick={collapseAll} id="collapse-all-btn">📁 Collapse</button>
          <button className="btn btn--ghost btn--sm" onClick={selectAll} id="select-all-btn">☑️ Select All</button>
          <button className="btn btn--ghost btn--sm" onClick={clearSelection} id="clear-btn">✕ Clear</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: totalSelected > 0 ? 'var(--success)' : 'var(--text-tertiary)',
          }}>
            {totalSelected} topic{totalSelected !== 1 ? 's' : ''} selected
          </span>

          {totalSelected > 0 && (
            <Link
              href={`/practice?subject=${subjectName}&topics=${[...selectedTopics].join(',')}`}
              className="btn btn--primary btn--sm"
              id="start-practice-btn"
            >
              🚀 Practice Selected ({totalSelected})
            </Link>
          )}
        </div>
      </div>

      {/* ── Topic Search ── */}
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <input
          type="text"
          placeholder={`Search within ${subject.name}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="topic-search-input"
          style={{
            width: '100%',
            maxWidth: '480px',
            padding: '10px 16px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
      </div>

      {/* ── Topic Tree ── */}
      <ul className="topic-tree animate-fade-in-up stagger-2" id="topic-tree">
        {subject.chapters.map((chapter) => (
          <TopicNode
            key={chapter.id}
            node={chapter}
            depth={0}
            selectedTopics={selectedTopics}
            onToggle={handleToggle}
            expandedNodes={expandedNodes}
            onExpand={handleExpand}
          />
        ))}
      </ul>

      {/* ── Floating Practice Button (mobile) ── */}
      {totalSelected > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 'var(--space-lg)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
        }}
          className="animate-scale-in"
        >
          <Link
            href={`/practice?subject=${subjectName}&topics=${[...selectedTopics].join(',')}`}
            className="btn btn--primary btn--lg"
            style={{ boxShadow: 'var(--shadow-lg)' }}
            id="floating-practice-btn"
          >
            🚀 Start Practice — {totalSelected} Topics
          </Link>
        </div>
      )}
    </div>
  );
}

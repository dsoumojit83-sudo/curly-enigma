/**
 * NEET Mastery — Unified Storage Engine
 * Handles all user data in localStorage.
 * When Supabase is connected, this acts as a cache layer.
 */
import { supabase } from './supabase';

const PREFIX = 'neetmastery_';

let inMemoryFallback = {};

function get(key, fallback = null) {
  if (typeof window === 'undefined') return fallback;
  if (inMemoryFallback[key] !== undefined) return inMemoryFallback[key];
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function set(key, value) {
  if (typeof window === 'undefined') return;
  try { 
    localStorage.setItem(PREFIX + key, JSON.stringify(value)); 
    inMemoryFallback[key] = value;
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      console.warn('localStorage quota exceeded. Falling back to in-memory storage.');
      inMemoryFallback[key] = value;
    }
  }
}

function remove(key) {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PREFIX + key);
}

/* ── User Profile ── */
export function getProfile() {
  return get('profile', { name: 'Guest', email: '', avatar: '', mode: 'neet' });
}
export function setProfile(profile) { set('profile', profile); }

/* ── Mode (NEET / JEE) ── */
export function getMode() { return get('mode', 'neet'); }
export function setMode(mode) { set('mode', mode); }

/* ── Progress per micro-topic ── */
export function getTopicProgress(topicId) {
  const all = get('progress', {});
  return all[topicId] || { correct: 0, wrong: 0, total: 0, accuracy: 0, lastPracticed: null, mastery: 0 };
}

export function saveAnswer(topicId, isCorrect) {
  const all = get('progress', {});
  const prev = all[topicId] || { correct: 0, wrong: 0, total: 0, accuracy: 0, lastPracticed: null, mastery: 0 };
  prev.correct += isCorrect ? 1 : 0;
  prev.wrong += isCorrect ? 0 : 1;
  prev.total += 1;
  prev.accuracy = Math.round((prev.correct / prev.total) * 100);
  prev.mastery = Math.min(100, Math.round((prev.correct / Math.max(prev.total, 1)) * 100 * Math.min(prev.total / 5, 1)));
  prev.lastPracticed = new Date().toISOString();
  all[topicId] = prev;
  set('progress', all);

  // Background sync with Supabase if logged in
  if (supabase) {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase.from('user_progress').upsert({
          user_id: user.id,
          topic_id: topicId,
          correct: prev.correct,
          wrong: prev.wrong,
          total: prev.total,
          mastery: prev.mastery,
          last_practiced: prev.lastPracticed
        }).then(({ error }) => {
          if (error) console.error('Failed to sync progress:', error);
        }).catch(err => console.error('Network error during progress sync:', err));
      }
    }).catch(err => console.error('Failed to get user for sync:', err));
  }

  return prev;
}

export function getAllProgress() { return get('progress', {}); }

/* ── Streak ── */
export function getStreak() {
  const data = get('streak', { count: 0, lastDate: null });
  const today = new Date().toISOString().split('T')[0];
  if (data.lastDate === today) return data;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (data.lastDate === yesterday) return data;
  if (data.lastDate !== today && data.lastDate !== yesterday) {
    return { count: 0, lastDate: data.lastDate };
  }
  return data;
}

export function recordPracticeToday() {
  const today = new Date().toISOString().split('T')[0];
  const data = get('streak', { count: 0, lastDate: null });
  if (data.lastDate === today) return data;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newCount = data.lastDate === yesterday ? data.count + 1 : 1;
  const updated = { count: newCount, lastDate: today };
  set('streak', updated);
  return updated;
}

/* ── Practice History (for heatmap) ── */
export function recordPracticeSession(topicIds, questionsCount) {
  const history = get('practiceHistory', []);
  history.push({
    date: new Date().toISOString(),
    topics: topicIds,
    questions: questionsCount,
  });
  // Keep last 90 days
  const cutoff = Date.now() - 90 * 86400000;
  const filtered = history.filter(h => new Date(h.date).getTime() > cutoff);
  set('practiceHistory', filtered);
}

export function getPracticeHistory() { return get('practiceHistory', []); }

export function getHeatmapData() {
  const history = getPracticeHistory();
  const map = {};
  history.forEach(h => {
    const day = h.date.split('T')[0];
    map[day] = (map[day] || 0) + h.questions;
  });
  return map;
}

/* ── Bookmarks ── */
export function getBookmarks() { return get('bookmarks', []); }
export function toggleBookmark(questionId) {
  const bm = get('bookmarks', []);
  const idx = bm.indexOf(questionId);
  if (idx >= 0) bm.splice(idx, 1);
  else bm.push(questionId);
  set('bookmarks', bm);
  return bm;
}
export function isBookmarked(questionId) {
  return get('bookmarks', []).includes(questionId);
}

/* ── Favourites (topics) ── */
export function getFavourites() { return get('favourites', []); }
export function toggleFavourite(topicId) {
  const fav = get('favourites', []);
  const idx = fav.indexOf(topicId);
  if (idx >= 0) fav.splice(idx, 1);
  else fav.push(topicId);
  set('favourites', fav);
  return fav;
}
export function isFavourite(topicId) {
  return get('favourites', []).includes(topicId);
}

/* ── Notes ── */
export function getNotes() { return get('notes', {}); }
export function getNote(topicId) { return get('notes', {})[topicId] || ''; }
export function saveNote(topicId, content) {
  const notes = get('notes', {});
  notes[topicId] = content;
  set('notes', notes);
}
export function deleteNote(topicId) {
  const notes = get('notes', {});
  delete notes[topicId];
  set('notes', notes);
}

/* ── Resume Practice Session ── */
export function saveSession(session) { set('currentSession', session); }
export function getSession() { return get('currentSession', null); }
export function clearSession() { remove('currentSession'); }

/* ── Recently Practiced Topics ── */
export function addRecentTopic(topicId, topicName, subjectId) {
  const recent = get('recentTopics', []);
  const filtered = recent.filter(r => r.id !== topicId);
  filtered.unshift({ id: topicId, name: topicName, subject: subjectId, time: Date.now() });
  set('recentTopics', filtered.slice(0, 10));
}
export function getRecentTopics() { return get('recentTopics', []); }

/* ── Today's Stats ── */
export function getTodayStats() {
  const today = new Date().toISOString().split('T')[0];
  return get(`stats_${today}`, { questions: 0, correct: 0, wrong: 0, topicsCovered: [] });
}
export function updateTodayStats(isCorrect, topicId) {
  const today = new Date().toISOString().split('T')[0];
  const stats = get(`stats_${today}`, { questions: 0, correct: 0, wrong: 0, topicsCovered: [] });
  stats.questions += 1;
  stats.correct += isCorrect ? 1 : 0;
  stats.wrong += isCorrect ? 0 : 1;
  if (!stats.topicsCovered.includes(topicId)) stats.topicsCovered.push(topicId);
  set(`stats_${today}`, stats);
  return stats;
}

/* ── Overall Stats ── */
export function getOverallStats() {
  const progress = getAllProgress();
  const values = Object.values(progress);
  const totalQ = values.reduce((s, p) => s + p.total, 0);
  const totalCorrect = values.reduce((s, p) => s + p.correct, 0);
  const accuracy = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
  const streak = getStreak();
  return { totalQuestions: totalQ, accuracy, streak: streak.count, topicsMastered: values.filter(p => p.mastery >= 80).length };
}

/* ── Discussions ── */
export function getDiscussions(questionId) {
  const all = get('discussions', {});
  return all[questionId] || [];
}
export function addDiscussion(questionId, text, author = 'You') {
  const all = get('discussions', {});
  if (!all[questionId]) all[questionId] = [];
  all[questionId].push({ text, author, time: new Date().toISOString(), id: Date.now().toString() });
  set('discussions', all);
  return all[questionId];
}

/* ── Flashcard Progress ── */
export function getFlashcardProgress(questionId) {
  const all = get('flashcards', {});
  return all[questionId] || { interval: 1, nextReview: null, ease: 2.5 };
}
export function updateFlashcard(questionId, quality) {
  // quality: 0-5 (0=forgot, 5=perfect)
  const all = get('flashcards', {});
  const card = all[questionId] || { interval: 1, nextReview: null, ease: 2.5 };
  if (quality >= 3) {
    card.interval = Math.round(card.interval * card.ease);
    card.ease = Math.max(1.3, card.ease + 0.1 * (quality - 3));
  } else {
    card.interval = 1;
    card.ease = Math.max(1.3, card.ease - 0.2);
  }
  card.nextReview = new Date(Date.now() + card.interval * 86400000).toISOString();
  all[questionId] = card;
  set('flashcards', all);
  return card;
}
export function getFlashcardsDue() {
  const all = get('flashcards', {});
  const now = new Date().toISOString();
  return Object.entries(all)
    .filter(([, card]) => !card.nextReview || card.nextReview <= now)
    .map(([id]) => id);
}

/* ── Revision Scheduler ── */
export function getTopicsDueForRevision() {
  const progress = getAllProgress();
  const now = Date.now();
  const topics = [];
  for (const [topicId, data] of Object.entries(progress)) {
    if (!data.lastPracticed) continue;
    const daysSince = Math.floor((now - new Date(data.lastPracticed).getTime()) / 86400000);
    let dueIn = 1;
    if (data.mastery >= 80) dueIn = 14;
    else if (data.mastery >= 60) dueIn = 7;
    else if (data.mastery >= 40) dueIn = 3;
    else dueIn = 1;
    if (daysSince >= dueIn) {
      topics.push({ topicId, daysSince, mastery: data.mastery, accuracy: data.accuracy, dueIn });
    }
  }
  return topics.sort((a, b) => b.daysSince - a.daysSince);
}

/* ── Weak & Strong Topics ── */
export function getWeakTopics(limit = 5) {
  const progress = getAllProgress();
  return Object.entries(progress)
    .filter(([, d]) => d.total >= 2)
    .sort(([, a], [, b]) => a.accuracy - b.accuracy)
    .slice(0, limit)
    .map(([id, d]) => ({ id, name: id, ...d }));
}

export function getStrongTopics(limit = 5) {
  const progress = getAllProgress();
  return Object.entries(progress)
    .filter(([, d]) => d.total >= 2)
    .sort(([, a], [, b]) => b.accuracy - a.accuracy)
    .slice(0, limit)
    .map(([id, d]) => ({ id, name: id, ...d }));
}

/* ── Subject Stats (for dashboard) ── */
export function getSubjectStats() {
  const progress = getAllProgress();
  const result = { biology: { questions: 0, correct: 0, chapters: 0 }, physics: { questions: 0, correct: 0, chapters: 0 }, chemistry: { questions: 0, correct: 0, chapters: 0 } };
  const chaptersTracked = { biology: new Set(), physics: new Set(), chemistry: new Set() };
  for (const [topicId, data] of Object.entries(progress)) {
    let subject = null;
    if (topicId.startsWith('bio-')) subject = 'biology';
    else if (topicId.startsWith('phy-')) subject = 'physics';
    else if (topicId.startsWith('chem-')) subject = 'chemistry';
    if (!subject) continue;
    result[subject].questions += data.total;
    result[subject].correct += data.correct;
    const chapterId = topicId.split('-').slice(0, 2).join('-');
    chaptersTracked[subject].add(chapterId);
  }
  result.biology.chapters = chaptersTracked.biology.size;
  result.physics.chapters = chaptersTracked.physics.size;
  result.chemistry.chapters = chaptersTracked.chemistry.size;
  return result;
}

/* ── Daily History (for heatmap) ── */
export function getDailyHistory() {
  const history = getPracticeHistory();
  const map = {};
  history.forEach(h => {
    const day = h.date.split('T')[0];
    if (!map[day]) map[day] = { date: day, questions: 0 };
    map[day].questions += h.questions;
  });
  return Object.values(map).sort((a, b) => a.date.localeCompare(b.date));
}

/* ── Mock Test Results ── */
export function saveMockTestResult(result) {
  const results = get('mockTestResults', []);
  results.push({ ...result, date: new Date().toISOString() });
  set('mockTestResults', results.slice(-20));
}
export function getMockTestResults() { return get('mockTestResults', []); }

/* ── Settings ── */
export function getSettings() {
  return get('settings', { dailyGoal: 30, notifications: true, sound: true, difficulty: 'mixed' });
}
export function updateSettings(partial) {
  const settings = getSettings();
  set('settings', { ...settings, ...partial });
}

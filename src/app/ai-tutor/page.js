'use client';

import { useState } from 'react';

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm your NEET AI Tutor 🤖. Ask me anything about Biology, Physics, or Chemistry from NCERT. I can explain concepts, solve problems, and give you memory tricks!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    "Explain the difference between SN1 and SN2 reactions",
    "What is Hardy-Weinberg equilibrium?",
    "How does the sliding filament theory work?",
    "Derive the lens formula",
    "Explain Le Chatelier's principle with examples",
    "What are the types of epithelial tissue?",
  ];

  const generateResponse = (question) => {
    // Offline AI responses for common topics
    const q = question.toLowerCase();

    if (q.includes('sn1') && q.includes('sn2')) {
      return "**SN1 vs SN2 Reactions:**\n\n" +
        "**SN1 (Substitution Nucleophilic Unimolecular):**\n" +
        "• Two-step mechanism → carbocation intermediate\n" +
        "• Rate depends on [substrate] only → Rate = k[RX]\n" +
        "• Favoured by: 3° > 2° > 1° substrates\n" +
        "• Gives racemic mixture (loss of configuration)\n" +
        "• Polar protic solvents favour SN1\n\n" +
        "**SN2 (Substitution Nucleophilic Bimolecular):**\n" +
        "• One-step mechanism → backside attack\n" +
        "• Rate depends on both → Rate = k[RX][Nu⁻]\n" +
        "• Favoured by: methyl > 1° > 2° (no 3°)\n" +
        "• Gives Walden inversion (complete inversion)\n" +
        "• Polar aprotic solvents favour SN2\n\n" +
        "💡 **Memory Trick:** SN1 = '1 step at a time' (slow ionization first). SN2 = '2 things collide' (simultaneous).";
    }

    if (q.includes('hardy') || q.includes('weinberg')) {
      return "**Hardy-Weinberg Equilibrium:**\n\n" +
        "States that allele and genotype frequencies remain constant in a population if no evolution is occurring.\n\n" +
        "**Mathematical Expression:**\n" +
        "p + q = 1 (allele frequencies)\n" +
        "p² + 2pq + q² = 1 (genotype frequencies)\n\n" +
        "**Five Conditions (no evolution):**\n" +
        "1. No mutation\n2. No migration (gene flow)\n3. Random mating\n4. Large population (no genetic drift)\n5. No natural selection\n\n" +
        "💡 **Memory Trick:** 'No MMDS' — No Mutation, Migration, Drift, Selection.\n\n" +
        "Any deviation from these conditions → evolution is occurring!";
    }

    if (q.includes('sliding filament')) {
      return "**Sliding Filament Theory of Muscle Contraction:**\n\n" +
        "**Steps:**\n" +
        "1. Nerve impulse reaches neuromuscular junction\n" +
        "2. Ca²⁺ ions released from sarcoplasmic reticulum\n" +
        "3. Ca²⁺ binds to troponin → tropomyosin shifts\n" +
        "4. Active sites on actin exposed\n" +
        "5. Myosin heads (cross-bridges) bind to actin\n" +
        "6. Power stroke: myosin pulls actin toward center\n" +
        "7. ATP binds → myosin detaches\n" +
        "8. ATP hydrolysis → myosin resets → cycle repeats\n\n" +
        "**Key Changes During Contraction:**\n" +
        "• I-band ↓ (decreases)\n• H-zone ↓ (decreases)\n• A-band → NO CHANGE\n• Sarcomere length ↓\n\n" +
        "💡 **Memory:** 'HI decrease, A stays' — H-zone and I-band shrink, A-band stays same.";
    }

    if (q.includes('epithelial')) {
      return "**Types of Epithelial Tissue:**\n\n" +
        "**Simple Epithelium (single layer):**\n" +
        "• **Squamous** — Flat cells → blood vessels, alveoli (diffusion)\n" +
        "• **Cuboidal** — Cube-shaped → kidney tubules, salivary ducts (secretion/absorption)\n" +
        "• **Columnar** — Tall cells → stomach, intestine (absorption/secretion)\n" +
        "• **Ciliated** — With cilia → trachea, fallopian tubes (movement)\n\n" +
        "**Compound Epithelium (multiple layers):**\n" +
        "• **Stratified squamous** — Skin, mouth, pharynx (protection)\n" +
        "• **Transitional** — Urinary bladder (stretching)\n\n" +
        "**Glandular Epithelium:**\n" +
        "• **Unicellular** — Goblet cells\n• **Multicellular** — Salivary glands\n\n" +
        "💡 **Memory:** 'Simple for function, Compound for protection'";
    }

    if (q.includes('le chatelier') || q.includes('chatelier')) {
      return "**Le Chatelier's Principle:**\n\n" +
        "'If a system at equilibrium is disturbed, it shifts to oppose the change.'\n\n" +
        "**Effects:**\n\n" +
        "**1. Concentration:**\n" +
        "• Add reactant → shifts forward (→)\n" +
        "• Add product → shifts backward (←)\n\n" +
        "**2. Pressure (for gases):**\n" +
        "• Increase pressure → shifts toward fewer moles\n" +
        "• Example: N₂ + 3H₂ ⇌ 2NH₃ — high pressure favours NH₃ (4 mol → 2 mol)\n\n" +
        "**3. Temperature:**\n" +
        "• Increase temp → favours endothermic direction\n" +
        "• Decrease temp → favours exothermic direction\n\n" +
        "**4. Catalyst:** No shift! Reaches equilibrium faster, but no change in position.\n\n" +
        "💡 **Memory:** Le Chatelier = 'Le Stubborn' — system always opposes what you do!";
    }

    return "Great question! 🤔\n\n" +
      "Here's what I can help you with:\n\n" +
      "• **Concept explanations** — Ask 'Explain [topic]'\n" +
      "• **Comparisons** — Ask 'Difference between X and Y'\n" +
      "• **Memory tricks** — Ask 'Memory trick for [topic]'\n" +
      "• **Problem solving** — Ask 'Solve [problem]'\n\n" +
      "Try one of the quick questions below, or ask about any NCERT topic! 📚\n\n" +
      "🔒 *Full AI responses will be available when connected to a backend API.*";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const response = generateResponse(userMsg.text);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>🤖 AI Tutor</h1>
        <p>Ask doubts, get instant explanations with memory tricks.</p>
      </div>

      {/* Chat Area */}
      <div className="glass-card animate-fade-in-up stagger-1" style={{ height: '55vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              padding: 'var(--space-sm) var(--space-md)',
              borderRadius: 'var(--radius-lg)',
              background: msg.role === 'user' ? 'var(--primary)' : 'var(--bg-secondary)',
              color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
            }}>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: 'flex-start', padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-secondary)', fontSize: '0.9rem' }}>
              <span className="typing-dots">🤔 Thinking</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ borderTop: '1px solid var(--border-color)', padding: 'var(--space-sm)', display: 'flex', gap: 'var(--space-sm)' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask any NEET question..."
            style={{ flex: 1, padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.9rem' }}
            id="ai-input"
          />
          <button className="btn btn--primary" onClick={handleSend} disabled={loading || !input.trim()}>Send</button>
        </div>
      </div>

      {/* Quick Questions */}
      <div style={{ marginTop: 'var(--space-md)' }}>
        <h4 style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
          ⚡ Quick Questions
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
          {quickQuestions.map((qq) => (
            <button key={qq} className="btn btn--sm btn--outline" onClick={() => { setInput(qq); }} style={{ fontSize: '0.8rem' }}>
              {qq}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}

/**
 * NEET Mastery — Real NEET-Pattern Question Bank
 * 100+ questions across Biology, Physics, Chemistry
 * Each question has: all 4 option explanations, memory tricks, NCERT refs
 */

const questions = [
  // ═══════════════════════════════════════════════
  // BIOLOGY QUESTIONS (40+)
  // ═══════════════════════════════════════════════

  // ── Chapter: Structural Organisation in Animals ──
  {
    id: 'q1', topic: 'bio-7-1-1-1',
    question: 'Squamous epithelium is found in:',
    options: ['Lining of blood vessels', 'Inner lining of stomach', 'Lining of kidney tubules', 'Lining of trachea'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 7, Page 103',
    explanation: {
      correct: 'Squamous epithelium lines blood vessels (endothelium) and air sacs of lungs. These flat, scale-like cells allow rapid diffusion and filtration.',
      whyWrong: ['', 'Stomach lining has columnar epithelium with goblet cells for mucus secretion.', 'Kidney tubules are lined by cuboidal epithelium for absorption and secretion.', 'Trachea is lined by ciliated columnar epithelium to move mucus upward.'],
      memoryTrick: 'SQUAMOUS = SQUAre + thIN → Flat cells for flat surfaces (blood vessels, lungs)',
      comparison: 'Squamous (flat, diffusion) vs Cuboidal (cube, secretion) vs Columnar (tall, absorption)',
      keyPoint: 'Squamous epithelium allows passage of materials by diffusion — found where rapid exchange occurs.',
    },
  },
  {
    id: 'q2', topic: 'bio-7-1-1-2',
    question: 'Cuboidal epithelium with brush border is found in:',
    options: ['Proximal convoluted tubule of nephron', 'Fallopian tube', 'Bile duct', 'Stomach lining'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 7, Page 104',
    explanation: {
      correct: 'PCT of nephron has cuboidal epithelium with brush border (microvilli) to increase surface area for reabsorption of water, glucose, and ions.',
      whyWrong: ['', 'Fallopian tube has ciliated columnar epithelium to move the ovum.', 'Bile duct has columnar epithelium.', 'Stomach has simple columnar epithelium with mucus-secreting goblet cells.'],
      memoryTrick: 'PCT = "Proximal Cuboidal with Tiny brush" — cuboidal + microvilli for absorption',
      keyPoint: 'Brush border = microvilli = increased surface area for absorption. Found in PCT and intestinal villi.',
    },
  },
  {
    id: 'q3', topic: 'bio-7-1-1-3',
    question: 'Compound epithelium is found in:',
    options: ['Pharynx', 'Alveoli', 'PCT of nephron', 'Stomach'],
    correct: 0, difficulty: 'Medium', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 7, Page 103',
    explanation: {
      correct: 'Compound epithelium (stratified) is found in pharynx, buccal cavity, and skin. Multiple layers provide protection against mechanical and chemical stress.',
      whyWrong: ['', 'Alveoli have simple squamous epithelium for gas exchange.', 'PCT has simple cuboidal epithelium.', 'Stomach has simple columnar epithelium.'],
      memoryTrick: 'Compound = Multiple layers = Protection. Think: places that get RUBBED (skin, mouth, throat)',
      keyPoint: 'Compound epithelium provides protection. Simple epithelium allows absorption/secretion.',
    },
  },
  {
    id: 'q4', topic: 'bio-7-1-1-4',
    question: 'Ciliated epithelium is found in:',
    options: ['Inner lining of fallopian tubes', 'Inner lining of blood vessels', 'Lining of ureter', 'Lining of alimentary canal'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 7, Page 104',
    explanation: {
      correct: 'Ciliated epithelium lines the fallopian tubes (oviducts), trachea, and nasal passage. Cilia create wave-like motion to move particles or ovum along the surface.',
      whyWrong: ['', 'Blood vessels have squamous endothelium for smooth blood flow.', 'Ureter has transitional epithelium that stretches.', 'Alimentary canal has columnar epithelium with microvilli.'],
      memoryTrick: 'CILIA = "Cleaning In Lungs & In Oviducts Always" — moves mucus up, moves ovum along.',
      keyPoint: 'Cilia are motile extensions that help in movement of substances on the epithelial surface.',
    },
  },
  {
    id: 'q5', topic: 'bio-7-1-2-1',
    question: 'Tendons connect:',
    options: ['Muscles to bones', 'Bones to bones', 'Muscles to muscles', 'Bones to cartilage'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2017,
    ncertRef: 'Class 11, Chapter 7, Page 105',
    explanation: {
      correct: 'Tendons are dense regular connective tissue made of white collagen fibres. They connect skeletal muscles to bones and transmit force.',
      whyWrong: ['', 'Ligaments connect bones to bones at joints.', 'There is no specific connective tissue connecting muscles to muscles.', 'Perichondrium covers cartilage but doesn\'t connect it to bone specifically.'],
      memoryTrick: 'TEN-don = TENse muscle-bone connection. LIGA-ment = LIGAture between bones.',
      comparison: 'Tendon (muscle→bone, collagen, white, inelastic) vs Ligament (bone→bone, elastin, yellow, elastic)',
      keyPoint: 'Tendons are inelastic; ligaments are slightly elastic. Both are dense connective tissue.',
    },
  },
  {
    id: 'q6', topic: 'bio-7-1-2-2',
    question: 'Which cartilage is present at the end of long bones?',
    options: ['Hyaline cartilage', 'Elastic cartilage', 'Fibrocartilage', 'Calcified cartilage'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 7, Page 106',
    explanation: {
      correct: 'Hyaline cartilage covers the ends of long bones (articular cartilage), tracheal rings, and nose tip. It provides smooth, low-friction surface for joint movement.',
      whyWrong: ['', 'Elastic cartilage is found in ear pinna and epiglottis — provides flexibility.', 'Fibrocartilage is found in intervertebral discs — provides tensile strength.', 'Calcified cartilage occurs in aging — not normal at bone ends.'],
      memoryTrick: 'HY-aline = HY (joints, nose) → smooth surface. ELASTIC = EAR. FIBRO = FIBRes in discs.',
      keyPoint: 'Hyaline cartilage is the most common cartilage type and forms the embryonic skeleton.',
    },
  },
  {
    id: 'q7', topic: 'bio-7-1-2-3',
    question: 'Blood is a type of:',
    options: ['Connective tissue', 'Epithelial tissue', 'Muscular tissue', 'Neural tissue'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2016,
    ncertRef: 'Class 11, Chapter 7, Page 107',
    explanation: {
      correct: 'Blood is a fluid connective tissue. Its matrix (plasma) is liquid, and it contains formed elements (RBCs, WBCs, platelets). It connects and transports materials between all body tissues.',
      whyWrong: ['', 'Epithelial tissue covers surfaces — blood flows inside vessels.', 'Muscular tissue contracts — blood cells don\'t contract.', 'Neural tissue transmits impulses — not blood\'s function.'],
      memoryTrick: 'Blood CONNECTS organs by TRANSPORTING — hence connective tissue!',
      keyPoint: 'Connective tissue is characterized by abundant ECM. In blood, the ECM is liquid plasma.',
    },
  },

  // ── Chapter: Biological Classification ──
  {
    id: 'q8', topic: 'bio-2-1-1',
    question: 'Which of the following is NOT a characteristic of bacteria?',
    options: ['Membrane-bound nucleus', 'Cell wall with peptidoglycan', 'Circular DNA', 'Ribosomes of 70S type'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 2, Page 18',
    explanation: {
      correct: 'Bacteria are prokaryotes — they lack a membrane-bound nucleus. Their DNA lies free in the cytoplasm in a region called the nucleoid.',
      whyWrong: ['', 'Most bacterial cell walls contain peptidoglycan (murein).', 'Bacteria have circular, double-stranded DNA.', 'Bacterial ribosomes are 70S (50S + 30S subunits).'],
      memoryTrick: 'Pro-karyote = Pro (before) + Karyon (nucleus) → No true nucleus!',
      keyPoint: 'The absence of a membrane-bound nucleus is the defining feature that distinguishes prokaryotes from eukaryotes.',
    },
  },
  {
    id: 'q9', topic: 'bio-2-1-2',
    question: 'Archaebacteria are found in:',
    options: ['Hot springs and salt lakes', 'Fresh water only', 'Only in soil', 'Deep ocean trenches only'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 2, Page 19',
    explanation: {
      correct: 'Archaebacteria are extremophiles — found in extreme environments like hot springs (thermophiles), salt lakes (halophiles), and marshy areas (methanogens).',
      whyWrong: ['', 'They are found in extreme, not just freshwater environments.', 'While some live in soil, they\'re characterized by extreme habitats.', 'They exist in multiple extreme environments, not just deep ocean.'],
      memoryTrick: 'ARCHAE = "Ancient & Harsh" — these bacteria survive in extreme conditions since ancient times.',
      keyPoint: 'Methanogens in cattle gut produce methane (biogas). Halophiles live in Great Salt Lake, Dead Sea.',
    },
  },
  {
    id: 'q10', topic: 'bio-2-2-1',
    question: 'Dinoflagellates are mostly:',
    options: ['Marine and photosynthetic', 'Freshwater and parasitic', 'Terrestrial and saprophytic', 'Marine and heterotrophic'],
    correct: 0, difficulty: 'Medium', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 2, Page 21',
    explanation: {
      correct: 'Dinoflagellates are mostly marine and photosynthetic protists. They have two flagella and cell walls made of cellulose plates. Some cause "red tide" (e.g., Gonyaulax).',
      whyWrong: ['', 'They are predominantly marine, not freshwater.', 'They are aquatic, not terrestrial.', 'Most are photosynthetic, though some are heterotrophic.'],
      memoryTrick: 'DINO-flagellates = "Dancing IN the Ocean" — marine protists with two flagella spinning in water.',
      keyPoint: 'Red tide = excessive dinoflagellate bloom → toxins kill marine life. Example: Gonyaulax.',
    },
  },
  {
    id: 'q11', topic: 'bio-2-3-1',
    question: 'Asexual reproduction in Rhizopus occurs by:',
    options: ['Sporangiospores', 'Conidia', 'Budding', 'Basidiospores'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 11, Chapter 2, Page 23',
    explanation: {
      correct: 'Rhizopus (bread mould) belongs to Phycomycetes and reproduces asexually by non-motile sporangiospores formed inside sporangia on sporangiophores.',
      whyWrong: ['', 'Conidia are produced by Ascomycetes (e.g., Aspergillus, Penicillium).', 'Budding occurs in yeast, not Rhizopus.', 'Basidiospores are produced by Basidiomycetes (e.g., mushrooms).'],
      memoryTrick: 'RHIZOPUS = Produces spores in RHIZO-sporangia (sac-like structure on bread).',
      comparison: 'Phycomycetes: sporangiospores | Ascomycetes: conidia | Basidiomycetes: basidiospores',
      keyPoint: 'Phycomycetes (Zygomycetes) form spores in sporangia. This is different from conidia which form at tips of conidiophores.',
    },
  },
  {
    id: 'q12', topic: 'bio-2-3-2',
    question: 'Which of the following produces basidiospores?',
    options: ['Agaricus (Mushroom)', 'Rhizopus', 'Penicillium', 'Alternaria'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 2, Page 24',
    explanation: {
      correct: 'Agaricus (mushroom) belongs to Basidiomycetes. They produce basidiospores exogenously on club-shaped basidia. The basidiocarp (fruiting body) is the mushroom we see.',
      whyWrong: ['', 'Rhizopus produces sporangiospores (Phycomycetes).', 'Penicillium produces conidia (Ascomycetes).', 'Alternaria produces conidia (Deuteromycetes).'],
      memoryTrick: 'BASIDIO = "BASI-cally mushrooms" — Agaricus, Puccinia (rust), Ustilago (smut).',
      keyPoint: 'Basidiomycetes: most common edible/poisonous mushrooms. Grow in soil, on logs, and tree stumps.',
    },
  },
  {
    id: 'q13', topic: 'bio-2-4-2',
    question: 'Viroids differ from viruses in:',
    options: ['Not having a protein coat', 'Having DNA instead of RNA', 'Being larger in size', 'Having cell wall'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 2, Page 26',
    explanation: {
      correct: 'Viroids are smallest known infectious agents — they consist of only a free RNA molecule without any protein coat. Discovered by T.O. Diener (1971) in potato spindle tuber disease.',
      whyWrong: ['', 'Viroids have RNA, not DNA. They are single-stranded circular RNA molecules.', 'Viroids are smaller than viruses (5-10x smaller), not larger.', 'Viroids have no cell wall — they are just naked RNA.'],
      memoryTrick: 'VIROID = Virus + void (protein) = RNA without protein coat. PRION = Proteinaceous INfection (protein without nucleic acid).',
      comparison: 'Virus: DNA/RNA + protein coat | Viroid: only RNA | Prion: only protein',
      keyPoint: 'Viroids cause plant diseases. Prions cause animal diseases (mad cow disease, CJD).',
    },
  },

  // ── Chapter: Cell Biology ──
  {
    id: 'q14', topic: 'bio-8-2-3',
    question: 'The inner membrane of mitochondria is folded into:',
    options: ['Cristae', 'Cisternae', 'Thylakoids', 'Lamellae'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 8, Page 137',
    explanation: {
      correct: 'The inner membrane of mitochondria forms finger-like folds called cristae, which increase surface area for oxidative phosphorylation (ETC and ATP synthesis).',
      whyWrong: ['', 'Cisternae are flat membrane sacs in the Golgi apparatus and ER.', 'Thylakoids are membrane discs inside chloroplasts.', 'Lamellae are stromal thylakoids connecting grana in chloroplasts.'],
      memoryTrick: 'CRISTAE = "CRISps inside mitochondria" — folded like ridges for max ATP production.',
      comparison: 'Cristae (mitochondria) vs Thylakoids (chloroplast) — both increase surface area for energy reactions.',
      keyPoint: 'Cristae contain oxysomes (F0-F1 particles) where ATP synthesis occurs.',
    },
  },
  {
    id: 'q15', topic: 'bio-8-2-2',
    question: 'The Golgi apparatus is involved in:',
    options: ['Packaging and modification of proteins', 'Protein synthesis', 'Lipid digestion', 'DNA replication'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2017,
    ncertRef: 'Class 11, Chapter 8, Page 135',
    explanation: {
      correct: 'Golgi apparatus (dictyosome in plants) modifies, packages, and dispatches proteins and lipids received from the ER. It also forms lysosomes.',
      whyWrong: ['', 'Protein synthesis occurs at ribosomes (free or on RER).', 'Lipid digestion occurs in the intestine with bile salts and lipase.', 'DNA replication occurs in the nucleus during S phase.'],
      memoryTrick: 'GOLGI = "GOds Logistics Gathers Items" — the cell\'s post office, packaging and shipping.',
      keyPoint: 'Golgi has a cis face (receiving from ER) and trans face (shipping to cell membrane).',
    },
  },

  // ── Chapter: Biomolecules ──
  {
    id: 'q16', topic: 'bio-9-4-2',
    question: 'Enzymes speed up reactions by:',
    options: ['Lowering activation energy', 'Increasing temperature', 'Providing activation energy', 'Increasing substrate concentration'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 9, Page 155',
    explanation: {
      correct: 'Enzymes are biological catalysts that lower the activation energy (Ea) of reactions by forming an enzyme-substrate complex. They don\'t alter the equilibrium.',
      whyWrong: ['', 'Enzymes work at body temperature; they don\'t increase temperature.', 'They lower, not provide, activation energy.', 'They don\'t change substrate concentration; they act on available substrate.'],
      memoryTrick: 'Enzymes = "Energy lowerers" → They create a shortcut path with lower energy barrier.',
      keyPoint: 'The lock-and-key model (Fischer) and induced-fit model (Koshland) explain enzyme specificity.',
    },
  },

  // ── Chapter: Cell Division ──
  {
    id: 'q17', topic: 'bio-10-2-1',
    question: 'During which phase of mitosis do chromosomes align at the metaphase plate?',
    options: ['Metaphase', 'Prophase', 'Anaphase', 'Telophase'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 10, Page 165',
    explanation: {
      correct: 'During metaphase, chromosomes align at the cell equator (metaphase plate). Spindle fibres attach to kinetochores of centromeres. This ensures equal separation.',
      whyWrong: ['', 'During prophase, chromosomes condense but are not yet aligned.', 'During anaphase, centromeres split and chromatids move to poles.', 'During telophase, chromosomes decondense and nuclear envelope reforms.'],
      memoryTrick: 'PMAT: Prophase (prepare), Metaphase (middle), Anaphase (apart), Telophase (two nuclei)',
      keyPoint: 'Metaphase is the best stage to study chromosome morphology because chromosomes are maximally condensed.',
    },
  },
  {
    id: 'q18', topic: 'bio-10-3-1',
    question: 'Crossing over occurs during:',
    options: ['Pachytene of Prophase I', 'Zygotene of Prophase I', 'Diplotene of Prophase I', 'Metaphase I'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 10, Page 167',
    explanation: {
      correct: 'Crossing over occurs during pachytene (thick stage) when homologous chromosomes form bivalents and exchange genetic material at chiasmata via recombination.',
      whyWrong: ['', 'Zygotene is when synapsis (pairing) begins — crossing over hasn\'t started yet.', 'Diplotene is when chiasmata become visible as chromosomes start to separate.', 'Metaphase I involves alignment of bivalents, not crossing over.'],
      memoryTrick: 'Prophase I stages: "Lazy Zebras Play During Dark" → Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis.',
      keyPoint: 'Crossing over = recombination = source of genetic variation. Occurs between non-sister chromatids.',
    },
  },

  // ── Chapter: Genetics ──
  {
    id: 'q19', topic: 'bio-24-1-2',
    question: 'A cross between tall (Tt) and dwarf (tt) pea plants will produce:',
    options: ['50% tall, 50% dwarf', '100% tall', '75% tall, 25% dwarf', '100% dwarf'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 5, Page 75',
    explanation: {
      correct: 'Tt × tt is a test cross. The gametes from Tt are T and t; from tt are t and t. Offspring: Tt (tall) and tt (dwarf) in a 1:1 ratio = 50% tall, 50% dwarf.',
      whyWrong: ['', '100% tall would occur only in TT × Tt or TT × tt crosses.', '3:1 ratio occurs in Tt × Tt (monohybrid cross between two heterozygotes).', '100% dwarf would occur only in tt × tt.'],
      memoryTrick: 'Test cross = Cross with homozygous recessive (tt). It TESTS whether the tall plant is TT or Tt.',
      comparison: 'Tt × tt → 1:1 (test cross) | Tt × Tt → 3:1 (monohybrid) | TT × tt → all tall (100%)',
      keyPoint: 'If test cross gives all tall offspring → parent was TT. If 1:1 → parent was Tt.',
    },
  },
  {
    id: 'q20', topic: 'bio-24-2-2',
    question: 'A person with blood group AB has:',
    options: ['Both A and B antigens on RBCs', 'Only antigen A on RBCs', 'Neither antigen on RBCs', 'Anti-A and anti-B antibodies in plasma'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 5, Page 78',
    explanation: {
      correct: 'Blood group AB has both antigen A and antigen B on the surface of red blood cells, and NO antibodies in the plasma. AB is the universal recipient.',
      whyWrong: ['', 'Only antigen A is found in blood group A.', 'Neither antigen is found in blood group O.', 'AB has NO antibodies. Having both would cause self-agglutination.'],
      memoryTrick: 'AB = "All Both" antigens, "Absolutely no" antibodies. O = "Only" antibodies, "nO" antigens.',
      comparison: 'A: antigen A, anti-B | B: antigen B, anti-A | AB: both antigens, no antibodies | O: no antigens, both antibodies',
      keyPoint: 'AB = universal recipient (can receive all). O = universal donor (can give to all).',
    },
  },

  // ── Molecular Biology ──
  {
    id: 'q21', topic: 'bio-25-1-3',
    question: "In Griffith's experiment, the transforming principle was:",
    options: ['DNA', 'RNA', 'Protein', 'Lipid'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2017,
    ncertRef: 'Class 12, Chapter 6, Page 96',
    explanation: {
      correct: 'Griffith (1928) showed that heat-killed S-strain bacteria transformed live R-strain into virulent S-strain. Later, Avery, MacLeod & McCarty (1944) proved the transforming principle was DNA.',
      whyWrong: ['', 'RNA was not identified as the transforming agent.', 'Protein was initially suspected but ruled out by enzyme treatment experiments.', 'Lipids have no genetic information.'],
      memoryTrick: 'Griffith = "GRab the DNA" → DNA transforms bacteria. Avery proved it. Hershey-Chase confirmed it.',
      keyPoint: 'Griffith discovered transformation. Avery identified DNA as the transforming molecule.',
    },
  },
  {
    id: 'q22', topic: 'bio-25-3-2',
    question: 'The genetic code is:',
    options: ['Universal and degenerate', 'Universal and non-degenerate', 'Not universal but degenerate', 'Ambiguous and overlapping'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 6, Page 107',
    explanation: {
      correct: 'The genetic code is universal (same codons code for same amino acids in almost all organisms) and degenerate (most amino acids are coded by more than one codon, e.g., leucine has 6 codons).',
      whyWrong: ['', 'The code IS degenerate — 61 codons code for only 20 amino acids.', 'It IS universal (with minor exceptions like mitochondrial DNA).', 'The code is unambiguous (one codon = one amino acid) and non-overlapping.'],
      memoryTrick: 'Genetic code is "U-CAN-DO" → Universal, Comma-less, Ambiguity-free, Non-overlapping, Degenerate, One direction (5\'→3\')',
      keyPoint: 'Degenerate ≠ ambiguous. Degenerate = multiple codons → one amino acid. Ambiguous would mean one codon → multiple amino acids (this doesn\'t happen).',
    },
  },

  // ── Ecology ──
  {
    id: 'q23', topic: 'bio-33-2-2',
    question: 'In an ecosystem, the 10% law of energy transfer was given by:',
    options: ['Lindeman', 'Odum', 'Tansley', 'Haeckel'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 14, Page 254',
    explanation: {
      correct: 'Lindeman (1942) gave the 10% law: only 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through respiration.',
      whyWrong: ['', 'E.P. Odum is the father of modern ecology but didn\'t give the 10% law.', 'A.G. Tansley coined the term "ecosystem" (1935).', 'Ernst Haeckel coined the term "ecology" (1866).'],
      memoryTrick: 'LINDEman = "LINe of 10%" → 10% energy passes in a LINE through trophic levels.',
      keyPoint: 'Food chain rarely has >4-5 trophic levels because so little energy remains (10% of 10% of 10%...).',
    },
  },

  // ── Biotechnology ──
  {
    id: 'q24', topic: 'bio-30-1-1',
    question: 'The first restriction enzyme to be isolated was:',
    options: ['Hind II', 'EcoRI', 'BamHI', 'Hind III'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 11, Page 197',
    explanation: {
      correct: 'Hind II was the first restriction endonuclease isolated from Haemophilus influenzae Rd. It cuts DNA at a specific point within the recognition sequence.',
      whyWrong: ['', 'EcoRI (from E. coli RY13) was discovered later and is more commonly used.', 'BamHI (from Bacillus amyloliquefaciens) was discovered after Hind II.', 'Hind III is a different enzyme from the same bacterium, discovered later.'],
      memoryTrick: 'Hind II = "FIRST HIstory-making eNDonuclease" — Hind II came first, then EcoRI became popular.',
      keyPoint: 'Restriction enzymes are "molecular scissors" of genetic engineering. Named after the organism they come from.',
    },
  },

  // ── Evolution ──
  {
    id: 'q25', topic: 'bio-26-2-1',
    question: 'Homologous organs indicate:',
    options: ['Divergent evolution', 'Convergent evolution', 'Parallel evolution', 'Coevolution'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 7, Page 131',
    explanation: {
      correct: 'Homologous organs (same origin, different function) indicate divergent evolution — organisms with a common ancestor evolved differently to adapt to different environments.',
      whyWrong: ['', 'Convergent evolution is shown by analogous organs (different origin, same function).', 'Parallel evolution is similar evolution in related but distinct lineages.', 'Coevolution is mutual evolution of interacting species.'],
      memoryTrick: 'HOMO = same origin = DIVerge apart. ANALOGOUS = different origin = CONverge together.',
      comparison: 'Homologous (arm of human, flipper of whale) vs Analogous (wing of bird, wing of insect)',
      keyPoint: 'Homologous organs are evidence for evolution from a common ancestor.',
    },
  },

  // ── Human Reproduction ──
  {
    id: 'q26', topic: 'bio-22-2-2',
    question: 'During the menstrual cycle, which hormone causes ovulation?',
    options: ['LH surge', 'FSH alone', 'Progesterone', 'Estrogen alone'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 3, Page 52',
    explanation: {
      correct: 'A sudden surge of LH (Luteinizing Hormone) from the anterior pituitary triggers ovulation around day 14 of the menstrual cycle. This is called the LH peak.',
      whyWrong: ['', 'FSH stimulates follicle development but doesn\'t directly trigger ovulation.', 'Progesterone is secreted AFTER ovulation by the corpus luteum.', 'Estrogen rises before ovulation but it\'s the LH surge that triggers the actual release.'],
      memoryTrick: 'LH = "Lets the egg out Here!" → LH surge = ovulation. FSH = "Follicle Starts Here" → follicle growth.',
      keyPoint: 'High estrogen from mature follicle triggers positive feedback → LH surge → ovulation.',
    },
  },

  // ── Immunity ──
  {
    id: 'q27', topic: 'bio-27-2-1',
    question: 'The first line of defence in the human body is:',
    options: ['Skin and mucous membranes', 'Antibodies', 'T-lymphocytes', 'Phagocytes'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 8, Page 152',
    explanation: {
      correct: 'Skin and mucous membranes form the first line of defence (innate immunity). Skin acts as a physical barrier; mucus traps microbes; tears contain lysozyme.',
      whyWrong: ['', 'Antibodies are part of the third line of defence (adaptive/specific immunity).', 'T-lymphocytes are part of cell-mediated immunity (third line).', 'Phagocytes are part of the second line of defence (innate but internal).'],
      memoryTrick: '1st line: SKIN barrier | 2nd line: SOLDIERS inside (WBCs, phagocytes) | 3rd line: SPECIFIC army (antibodies, T-cells)',
      keyPoint: 'Innate immunity is non-specific and present from birth. Adaptive immunity is specific and develops after exposure.',
    },
  },

  // More Biology questions
  {
    id: 'q28', topic: 'bio-11-2-1',
    question: 'In photosynthesis, the light reactions occur in:',
    options: ['Thylakoid membranes', 'Stroma of chloroplast', 'Cytoplasm', 'Mitochondrial matrix'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 13, Page 212',
    explanation: {
      correct: 'Light reactions (photochemical phase) occur in the thylakoid membranes where photosystems I and II, ETC, and ATP synthase are located.',
      whyWrong: ['', 'Stroma is where dark reactions (Calvin cycle) occur.', 'Photosynthesis occurs in chloroplasts, not cytoplasm.', 'Mitochondria are for cellular respiration, not photosynthesis.'],
      memoryTrick: 'LIGHT needs membranes (thylakoids) | DARK needs space (stroma)',
      keyPoint: 'Thylakoids trap light energy; stroma uses that energy (ATP, NADPH) to fix CO2.',
    },
  },
  {
    id: 'q29', topic: 'bio-12-1-1',
    question: 'The net gain of ATP in glycolysis is:',
    options: ['2 ATP', '4 ATP', '36 ATP', '38 ATP'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2017,
    ncertRef: 'Class 11, Chapter 14, Page 226',
    explanation: {
      correct: 'Glycolysis produces 4 ATP total but uses 2 ATP in the preparatory phase, so the NET gain is 2 ATP per molecule of glucose.',
      whyWrong: ['', '4 ATP is the gross production, not the net gain.', '36 ATP is the total from complete aerobic respiration.', '38 ATP is the theoretical maximum for complete glucose oxidation.'],
      memoryTrick: 'Glycolysis: "Invest 2, Get 4, Keep 2" → Net = 2 ATP + 2 NADH + 2 Pyruvate',
      keyPoint: 'Glycolysis occurs in the cytoplasm and doesn\'t need oxygen — it\'s common to both aerobic and anaerobic respiration.',
    },
  },
  {
    id: 'q30', topic: 'bio-15-2-2',
    question: 'During a cardiac cycle, the "lub" sound is produced when:',
    options: ['Tricuspid and bicuspid valves close', 'Semilunar valves close', 'Atria contract', 'Ventricles relax'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 18, Page 289',
    explanation: {
      correct: 'The first heart sound "lub" is produced by the closure of atrioventricular valves (tricuspid and bicuspid/mitral) at the start of ventricular systole.',
      whyWrong: ['', 'Closure of semilunar valves produces the second heart sound "dub" at the start of ventricular diastole.', 'Atrial contraction pushes blood into ventricles but doesn\'t produce the "lub" sound.', 'Ventricular relaxation causes "dub", not "lub".'],
      memoryTrick: 'LUB = Leaves (valves) close Up Below (AV valves close) | DUB = Doors close Up (semilunar valves close)',
      keyPoint: 'Lub (S1) is louder and longer. Dub (S2) is softer and shorter.',
    },
  },

  // ═══════════════════════════════════════════════
  // PHYSICS QUESTIONS (30+)
  // ═══════════════════════════════════════════════

  // ── Units & Measurements ──
  {
    id: 'q31', topic: 'phy-2-2-1',
    question: 'The dimensional formula of Planck\'s constant is:',
    options: ['[ML²T⁻¹]', '[MLT⁻¹]', '[ML²T⁻²]', '[ML²T⁻³]'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 2, Page 33',
    explanation: {
      correct: 'Planck\'s constant h has units of J·s = kg·m²·s⁻¹, so dimensional formula is [ML²T⁻¹]. It relates energy (E = hν) to frequency.',
      whyWrong: ['', '[MLT⁻¹] is the dimension of momentum.', '[ML²T⁻²] is the dimension of energy or work.', '[ML²T⁻³] is the dimension of power.'],
      memoryTrick: 'h = E/ν → [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. Think: Energy × Time = Action.',
      keyPoint: 'h = 6.626 × 10⁻³⁴ J·s. Angular momentum is also quantized in units of ħ = h/2π.',
    },
  },
  {
    id: 'q32', topic: 'phy-2-3-1',
    question: 'If the percentage errors in measurements of length, breadth, and height of a cuboid are 1%, 2%, and 3% respectively, the percentage error in volume is:',
    options: ['6%', '3%', '2%', '1%'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 2, Page 37',
    explanation: {
      correct: 'Volume = l × b × h. For multiplication, percentage errors add up: 1% + 2% + 3% = 6%.',
      whyWrong: ['', '3% would be if we averaged the errors, which is incorrect.', '2% is the error in breadth alone.', '1% is the error in length alone.'],
      memoryTrick: 'For Z = A^a × B^b × C^c: %error in Z = a(%error in A) + b(%error in B) + c(%error in C)',
      keyPoint: 'Addition/subtraction: absolute errors add. Multiplication/division: relative errors add.',
    },
  },

  // ── Motion ──
  {
    id: 'q33', topic: 'phy-3-3-1',
    question: 'A ball is thrown vertically upward with velocity 20 m/s. The maximum height reached is (g = 10 m/s²):',
    options: ['20 m', '10 m', '40 m', '30 m'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 3, Page 52',
    explanation: {
      correct: 'Using v² = u² - 2gh, at maximum height v = 0: 0 = (20)² - 2(10)h → h = 400/20 = 20 m.',
      whyWrong: ['', '10 m would require u = √(2×10×10) = √200 ≈ 14.14 m/s.', '40 m would require u = √(2×10×40) = √800 ≈ 28.3 m/s.', '30 m would require u = √(2×10×30) = √600 ≈ 24.5 m/s.'],
      memoryTrick: 'At max height, v = 0. Use h = u²/2g. Quick: h = (20)²/(2×10) = 400/20 = 20 m.',
      keyPoint: 'Time to reach max height: t = u/g = 20/10 = 2 s. Total time of flight = 2t = 4 s.',
    },
  },
  {
    id: 'q34', topic: 'phy-4-2-1',
    question: 'A projectile is fired at 30° with a velocity of 40 m/s. The range is (g = 10 m/s²):',
    options: ['80√3 m', '40√3 m', '160 m', '80 m'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 4, Page 72',
    explanation: {
      correct: 'Range R = u²sin(2θ)/g = (40)²sin(60°)/10 = 1600 × (√3/2)/10 = 80√3 m ≈ 138.6 m.',
      whyWrong: ['', '40√3 would give half the actual range.', '160 m would be the range at 45° (R = u²/g = 1600/10).', '80 m doesn\'t account for the sin(60°) factor correctly.'],
      memoryTrick: 'Range formula: R = u²sin(2θ)/g. Maximum range at θ = 45°.',
      keyPoint: 'Complementary angles (30° & 60°, 20° & 70°) give the same range.',
    },
  },

  // ── Laws of Motion ──
  {
    id: 'q35', topic: 'phy-5-1-2',
    question: 'A force of 10 N acts on a body of mass 2 kg. The acceleration produced is:',
    options: ['5 m/s²', '10 m/s²', '20 m/s²', '2 m/s²'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 5, Page 92',
    explanation: {
      correct: 'Using Newton\'s second law: F = ma → a = F/m = 10/2 = 5 m/s².',
      whyWrong: ['', '10 m/s² would occur if mass were 1 kg.', '20 m/s² would occur if mass were 0.5 kg.', '2 m/s² would occur if force were 4 N.'],
      memoryTrick: 'F = ma is the most fundamental equation. Always check units: N = kg × m/s².',
      keyPoint: 'Newton\'s second law: acceleration is directly proportional to force and inversely proportional to mass.',
    },
  },
  {
    id: 'q36', topic: 'phy-5-2-1',
    question: 'The coefficient of static friction is generally:',
    options: ['Greater than kinetic friction', 'Less than kinetic friction', 'Equal to kinetic friction', 'Zero'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 5, Page 99',
    explanation: {
      correct: 'Static friction coefficient (μs) is always greater than kinetic friction coefficient (μk). More force is needed to START motion than to MAINTAIN it.',
      whyWrong: ['', 'Kinetic friction is always less than static friction.', 'They are not equal — starting motion requires more force.', 'Friction is never zero on real surfaces.'],
      memoryTrick: 'STATIC = STUCK (more force to unstick) | KINETIC = KEEP moving (less friction once moving)',
      keyPoint: 'μs > μk > μrolling. Rolling friction is least, which is why wheels are efficient.',
    },
  },

  // ── Work & Energy ──
  {
    id: 'q37', topic: 'phy-6-1-2',
    question: 'The kinetic energy of a body is doubled. Its momentum becomes:',
    options: ['√2 times', '2 times', '4 times', 'Same'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 6, Page 115',
    explanation: {
      correct: 'KE = p²/2m. If KE doubles: 2KE = p\'²/2m → p\' = √(2) × p. Momentum becomes √2 times.',
      whyWrong: ['', 'If p doubled, KE would become 4 times (not 2 times).', 'If p became 4 times, KE would become 16 times.', 'Momentum cannot stay the same if KE changes (for same mass).'],
      memoryTrick: 'KE ∝ p² → If KE × n, then p × √n. Useful: KE doubles → p × √2.',
      keyPoint: 'Two key relations: KE = ½mv² and KE = p²/2m. Use whichever is convenient.',
    },
  },

  // ── Gravitation ──
  {
    id: 'q38', topic: 'phy-8-2-2',
    question: 'The escape velocity from Earth\'s surface is approximately:',
    options: ['11.2 km/s', '7.9 km/s', '3.2 km/s', '15.8 km/s'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 8, Page 192',
    explanation: {
      correct: 'Escape velocity ve = √(2gR) = √(2 × 9.8 × 6400000) ≈ 11.2 km/s. At this speed, an object escapes Earth\'s gravitational field.',
      whyWrong: ['', '7.9 km/s is the orbital velocity for a satellite near Earth\'s surface.', '3.2 km/s is too low — the object would fall back.', '15.8 km/s is the escape velocity from a much larger planet.'],
      memoryTrick: 'Escape = √2 × Orbital. Orbital ≈ 8 km/s. Escape ≈ 8 × √2 ≈ 11.2 km/s.',
      keyPoint: 'Escape velocity is independent of the mass of the escaping object!',
    },
  },

  // ── Electrostatics ──
  {
    id: 'q39', topic: 'phy-16-1-1',
    question: 'Two charges of +2μC and -2μC are placed 10 cm apart. The force between them is (k = 9 × 10⁹):',
    options: ['3.6 N', '0.36 N', '36 N', '360 N'],
    correct: 0, difficulty: 'Medium', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 1, Page 10',
    explanation: {
      correct: 'F = kq₁q₂/r² = 9×10⁹ × 2×10⁻⁶ × 2×10⁻⁶ / (0.1)² = 9×10⁹ × 4×10⁻¹² / 0.01 = 36×10⁻³/0.01 = 3.6 N.',
      whyWrong: ['', '0.36 N would be if the distance were about 31.6 cm.', '36 N would be if the distance were 1 cm.', '360 N would be if the distance were about 0.316 cm.'],
      memoryTrick: 'Coulomb\'s law: F = kq₁q₂/r². Remember: r is in metres, q in coulombs.',
      keyPoint: 'Coulomb\'s law is analogous to Newton\'s gravitational law but can be attractive or repulsive.',
    },
  },
  {
    id: 'q40', topic: 'phy-17-2-1',
    question: 'The capacitance of a parallel plate capacitor increases when:',
    options: ['A dielectric is inserted between plates', 'The distance between plates increases', 'The area of plates decreases', 'The charge on plates decreases'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 2, Page 64',
    explanation: {
      correct: 'C = κε₀A/d. Inserting a dielectric (κ > 1) increases capacitance. The dielectric reduces the effective electric field between plates.',
      whyWrong: ['', 'Increasing distance d decreases C (C ∝ 1/d).', 'Decreasing area A decreases C (C ∝ A).', 'Capacitance is independent of charge — it depends only on geometry and dielectric.'],
      memoryTrick: 'C = κε₀A/d. Area ↑ C↑, distance ↑ C↓, dielectric ↑ C↑.',
      keyPoint: 'Capacitance is a property of the capacitor, NOT of the charge stored.',
    },
  },

  // ── Current Electricity ──
  {
    id: 'q41', topic: 'phy-18-1-3',
    question: 'Three resistors of 3Ω each are connected in parallel. The equivalent resistance is:',
    options: ['1 Ω', '3 Ω', '9 Ω', '6 Ω'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 3, Page 99',
    explanation: {
      correct: '1/R = 1/3 + 1/3 + 1/3 = 3/3 = 1 → R = 1 Ω. For n identical resistors R in parallel: R_eq = R/n = 3/3 = 1 Ω.',
      whyWrong: ['', '3 Ω is each individual resistance, not the parallel combination.', '9 Ω would be the series combination (3 + 3 + 3).', '6 Ω is not obtained from any combination of three 3Ω resistors.'],
      memoryTrick: 'Parallel: n identical resistors of R → R/n. Series: n identical → nR.',
      keyPoint: 'Parallel resistance is always LESS than the smallest individual resistance.',
    },
  },

  // ── Optics ──
  {
    id: 'q42', topic: 'phy-24-1-1',
    question: 'Total internal reflection occurs when light passes from:',
    options: ['Denser to rarer medium at angle > critical angle', 'Rarer to denser medium', 'Denser to rarer medium at angle < critical angle', 'Any two media at any angle'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 9, Page 316',
    explanation: {
      correct: 'TIR occurs when light travels from a denser medium (higher n) to a rarer medium (lower n) at an angle greater than the critical angle. All light is reflected back.',
      whyWrong: ['', 'Rarer to denser: refraction always occurs (bends toward normal). No TIR possible.', 'At angle < critical angle, light refracts (passes through). TIR doesn\'t occur.', 'TIR requires specific conditions — not at any angle or any media.'],
      memoryTrick: 'TIR needs: Dense→Rare + angle > θc. Think: diamond sparkles because light gets TRAPPED inside.',
      keyPoint: 'Critical angle: sin(θc) = n₂/n₁ (where n₁ > n₂). For glass-air: θc ≈ 42°.',
    },
  },

  // ── Modern Physics ──
  {
    id: 'q43', topic: 'phy-26-1-1',
    question: 'In the photoelectric effect, the kinetic energy of emitted electrons depends on:',
    options: ['Frequency of incident light', 'Intensity of incident light', 'Speed of light', 'Temperature of metal'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 11, Page 387',
    explanation: {
      correct: 'KE = hν - φ. The maximum KE of photoelectrons depends on the frequency (ν) of incident light, not its intensity. Higher frequency = more energy per photon.',
      whyWrong: ['', 'Intensity affects the NUMBER of electrons emitted, not their kinetic energy.', 'Speed of light is constant and doesn\'t affect KE.', 'Temperature has minimal effect on photoelectric emission.'],
      memoryTrick: 'Einstein\'s equation: KE_max = hν - φ. Frequency → Energy. Intensity → Number.',
      keyPoint: 'Below threshold frequency, no electrons are emitted regardless of intensity. This proved light is quantized.',
    },
  },
  {
    id: 'q44', topic: 'phy-27-1-2',
    question: 'In Bohr\'s model, the energy of an electron in nth orbit is proportional to:',
    options: ['1/n²', 'n²', '1/n', 'n'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 12, Page 397',
    explanation: {
      correct: 'In Bohr\'s model, En = -13.6/n² eV for hydrogen. Energy is inversely proportional to n². As n increases, energy becomes less negative (closer to zero).',
      whyWrong: ['', 'Radius is proportional to n² (rn = 0.529n² Å), not energy.', '1/n is not a Bohr model relation for energy.', 'Velocity is proportional to 1/n, not n.'],
      memoryTrick: 'Bohr\'s model: E ∝ 1/n², r ∝ n², v ∝ 1/n. Ground state (n=1) has most negative energy.',
      keyPoint: 'E₁ = -13.6 eV (ground state). E∞ = 0 (ionization). Negative sign means electron is bound.',
    },
  },

  // ── Semiconductor ──
  {
    id: 'q45', topic: 'phy-29-1-2',
    question: 'In a p-n junction diode, the depletion region is formed due to:',
    options: ['Diffusion of charge carriers across the junction', 'Drift of charge carriers', 'External voltage', 'Temperature difference'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 14, Page 470',
    explanation: {
      correct: 'When p-type and n-type semiconductors are joined, electrons diffuse from n→p and holes from p→n. This creates immobile ions near the junction = depletion region.',
      whyWrong: ['', 'Drift occurs due to the barrier potential opposing diffusion — it doesn\'t create the depletion region.', 'Depletion region forms without any external voltage (it\'s a natural process).', 'Temperature difference is not the cause.'],
      memoryTrick: 'DEPLETION = "Depleted" of free carriers. Electrons and holes cancelled each other at the junction.',
      keyPoint: 'Depletion region has an internal electric field (barrier potential ~0.3V for Ge, ~0.7V for Si).',
    },
  },

  // ── Waves ──
  {
    id: 'q46', topic: 'phy-15-2-3',
    question: 'The apparent frequency of a whistle increases as a train approaches. This is called:',
    options: ['Doppler effect', 'Photoelectric effect', 'Compton effect', 'Zeeman effect'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 15, Page 385',
    explanation: {
      correct: 'The Doppler effect describes the change in frequency (pitch) of a wave when the source and observer are in relative motion. Approaching = higher frequency.',
      whyWrong: ['', 'Photoelectric effect is emission of electrons by light.', 'Compton effect is X-ray scattering by electrons.', 'Zeeman effect is splitting of spectral lines in a magnetic field.'],
      memoryTrick: 'DOPPLER = "D for approaching = pitch goes UP" (higher frequency when source approaches).',
      keyPoint: 'Approaching: apparent frequency increases. Receding: apparent frequency decreases.',
    },
  },

  // ═══════════════════════════════════════════════
  // CHEMISTRY QUESTIONS (30+)
  // ═══════════════════════════════════════════════

  // ── Basic Concepts ──
  {
    id: 'q47', topic: 'chem-1-2-1',
    question: 'The number of moles of CO₂ in 44 g of CO₂ is:',
    options: ['1 mol', '2 mol', '0.5 mol', '44 mol'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 1, Page 13',
    explanation: {
      correct: 'Moles = mass/molar mass = 44/44 = 1 mol. Molar mass of CO₂ = 12 + 2(16) = 44 g/mol.',
      whyWrong: ['', '2 mol would require 88 g of CO₂.', '0.5 mol would be 22 g of CO₂.', '44 mol would require 44 × 44 = 1936 g of CO₂.'],
      memoryTrick: 'n = m/M. "n moles = mass divided by Molar mass". Always calculate M first.',
      keyPoint: '1 mole of any substance contains 6.022 × 10²³ particles (Avogadro\'s number).',
    },
  },
  {
    id: 'q48', topic: 'chem-1-2-4',
    question: 'In the reaction N₂ + 3H₂ → 2NH₃, if 1 mole of N₂ reacts with 1 mole of H₂, the limiting reagent is:',
    options: ['H₂', 'N₂', 'NH₃', 'None, both are excess'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 1, Page 18',
    explanation: {
      correct: 'The reaction needs 3 mol H₂ per mol N₂. With only 1 mol H₂, hydrogen is the limiting reagent — it runs out first. Only 1/3 mol of N₂ will react.',
      whyWrong: ['', 'N₂ is in excess — we have 1 mol but only need 1/3 mol.', 'NH₃ is the product, not a reagent.', 'H₂ is definitely limiting — we need 3 mol but only have 1 mol.'],
      memoryTrick: 'Limiting reagent = the one that runs out first. Compare moles to stoichiometric ratio.',
      keyPoint: 'Amount of product is always determined by the limiting reagent, not the excess reagent.',
    },
  },

  // ── Atomic Structure ──
  {
    id: 'q49', topic: 'chem-2-2-1',
    question: 'The maximum number of electrons in a shell with principal quantum number n = 3 is:',
    options: ['18', '8', '32', '2'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 2, Page 47',
    explanation: {
      correct: 'Maximum electrons in a shell = 2n². For n = 3: 2(3)² = 2 × 9 = 18.',
      whyWrong: ['', '8 is the max for n = 2 (2 × 4 = 8).', '32 is the max for n = 4 (2 × 16 = 32).', '2 is the max for n = 1 (2 × 1 = 2).'],
      memoryTrick: '2n² rule: n=1→2, n=2→8, n=3→18, n=4→32. Shell capacity doubles-ish each level.',
      keyPoint: 'The M shell (n=3) has subshells 3s, 3p, 3d with 2 + 6 + 10 = 18 electrons total.',
    },
  },
  {
    id: 'q50', topic: 'chem-2-3-1',
    question: 'The electronic configuration of Cr (Z=24) is:',
    options: ['[Ar] 3d⁵ 4s¹', '[Ar] 3d⁴ 4s²', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s² 4p¹'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 2, Page 60',
    explanation: {
      correct: 'Chromium has an anomalous configuration: [Ar] 3d⁵ 4s¹ instead of expected [Ar] 3d⁴ 4s². Half-filled 3d⁵ provides extra stability due to symmetric distribution.',
      whyWrong: ['', '[Ar] 3d⁴ 4s² is the expected configuration but NOT the actual one.', '[Ar] 3d⁶ 4s⁰ is not correct for Cr.', '4p orbitals are not filled in Cr.'],
      memoryTrick: 'Cr and Cu are exceptions: Cr = [Ar]3d⁵4s¹, Cu = [Ar]3d¹⁰4s¹. Half-filled and fully-filled d orbitals are extra stable!',
      keyPoint: 'Extra stability of half-filled (d⁵) and fully-filled (d¹⁰) explains these anomalies.',
    },
  },

  // ── Chemical Bonding ──
  {
    id: 'q51', topic: 'chem-4-2-1',
    question: 'The shape of SF₆ molecule is:',
    options: ['Octahedral', 'Tetrahedral', 'Square planar', 'Trigonal bipyramidal'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 4, Page 111',
    explanation: {
      correct: 'SF₆ has 6 bond pairs and 0 lone pairs around the central S atom. According to VSEPR theory, 6 electron pairs arrange octahedrally. sp³d² hybridization.',
      whyWrong: ['', 'Tetrahedral is for 4 bond pairs (like CH₄).', 'Square planar is for 4 bond pairs + 2 lone pairs (like XeF₄).', 'Trigonal bipyramidal is for 5 bond pairs (like PCl₅).'],
      memoryTrick: 'Count electron pairs around central atom: 2=linear, 3=trigonal planar, 4=tetrahedral, 5=TBP, 6=octahedral.',
      keyPoint: 'SF₆ is octahedral with 90° bond angles. S uses sp³d² hybrid orbitals (expanded octet).',
    },
  },

  // ── Thermodynamics ──
  {
    id: 'q52', topic: 'chem-5-2-2',
    question: 'For a spontaneous process at constant temperature and pressure:',
    options: ['ΔG < 0', 'ΔG > 0', 'ΔG = 0', 'ΔH > 0 always'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 6, Page 170',
    explanation: {
      correct: 'A process is spontaneous when Gibbs free energy change is negative (ΔG < 0). This means the process can occur on its own without external input.',
      whyWrong: ['', 'ΔG > 0 means the process is non-spontaneous (needs energy input).', 'ΔG = 0 means the system is at equilibrium.', 'ΔH > 0 (endothermic) can still be spontaneous if TΔS is large enough.'],
      memoryTrick: 'ΔG = ΔH - TΔS. Spontaneous = negative G. "Going down in free energy."',
      keyPoint: 'An endothermic reaction (ΔH > 0) can be spontaneous if entropy increase (TΔS) is large enough.',
    },
  },

  // ── Equilibrium ──
  {
    id: 'q53', topic: 'chem-6-2-1',
    question: 'The pH of pure water at 25°C is:',
    options: ['7', '0', '14', '1'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 7, Page 201',
    explanation: {
      correct: 'Pure water is neutral. [H⁺] = [OH⁻] = 10⁻⁷ M at 25°C. pH = -log[H⁺] = -log(10⁻⁷) = 7.',
      whyWrong: ['', 'pH 0 means [H⁺] = 1 M — that\'s a very strong acid.', 'pH 14 means [H⁺] = 10⁻¹⁴ M — that\'s a very strong base.', 'pH 1 means [H⁺] = 0.1 M — that\'s a strong acid.'],
      memoryTrick: 'pH 7 = neutral. pH < 7 = acidic. pH > 7 = basic. "pH 7 = Pure H₂O."',
      keyPoint: 'Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C. This is the ionic product of water.',
    },
  },

  // ── Organic Chemistry ──
  {
    id: 'q54', topic: 'chem-11-1-1',
    question: 'The IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃ is:',
    options: ['2-Methylbutane', 'Isopentane', '2-Ethylpropane', 'Neopentane'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 12, Page 322',
    explanation: {
      correct: 'The longest chain has 4 carbons (butane). A methyl group is at position 2. IUPAC name: 2-Methylbutane.',
      whyWrong: ['', 'Isopentane is the common name, not IUPAC.', '2-Ethylpropane violates IUPAC rules — choose the longest chain first.', 'Neopentane is (CH₃)₄C = 2,2-dimethylpropane, a different compound.'],
      memoryTrick: 'IUPAC naming: 1. Longest chain → parent. 2. Number from nearest substituent. 3. Name substituents.',
      keyPoint: 'Always select the longest continuous carbon chain as the parent chain, not necessarily the straight chain.',
    },
  },
  {
    id: 'q55', topic: 'chem-11-2-2',
    question: "According to Markownikoff's rule, in HBr addition to propene, the major product is:",
    options: ['2-Bromopropane', '1-Bromopropane', '1,2-Dibromopropane', 'Propane'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 13, Page 345',
    explanation: {
      correct: "Markownikoff's rule: In HX addition to unsymmetrical alkenes, H goes to the carbon with MORE hydrogens, and X goes to the carbon with FEWER hydrogens. So Br goes to C-2: 2-Bromopropane.",
      whyWrong: ['', '1-Bromopropane would be the anti-Markownikoff product (formed with HBr + peroxide).', '1,2-Dibromopropane would form from Br₂ addition, not HBr.', 'Propane would form by hydrogenation (H₂/Pt), not HBr addition.'],
      memoryTrick: "Markownikoff = \"Rich get Richer\" — the carbon with more H's gets even more H.",
      keyPoint: "Anti-Markownikoff (Kharasch effect) occurs with HBr + peroxide via free radical mechanism.",
    },
  },

  // ── Electrochemistry ──
  {
    id: 'q56', topic: 'chem-15-1-1',
    question: 'In a galvanic cell, oxidation occurs at:',
    options: ['Anode', 'Cathode', 'Both electrodes', 'Electrolyte'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 3, Page 68',
    explanation: {
      correct: 'In a galvanic (voltaic) cell, oxidation occurs at the anode (negative terminal) and reduction at the cathode (positive terminal). Electrons flow from anode to cathode.',
      whyWrong: ['', 'Reduction occurs at the cathode, not oxidation.', 'Each electrode has a specific half-reaction — not both.', 'Electrolyte conducts ions but reactions occur at electrodes.'],
      memoryTrick: '"AN OX" and "RED CAT" → ANode = OXidation, REDuction at CAThode. Also: "LEO says GER" → Lose Electrons Oxidation, Gain Electrons Reduction.',
      keyPoint: 'Galvanic cell: spontaneous (ΔG < 0). Electrolytic cell: non-spontaneous (needs external voltage).',
    },
  },

  // ── Solutions ──
  {
    id: 'q57', topic: 'chem-14-2-3',
    question: 'The depression in freezing point is a:',
    options: ['Colligative property', 'Intensive property', 'Extensive property', 'Chemical property'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 2, Page 46',
    explanation: {
      correct: 'Depression in freezing point (ΔTf) is a colligative property — it depends only on the NUMBER of solute particles, not their nature.',
      whyWrong: ['', 'Intensive properties (like density, temperature) don\'t depend on amount.', 'Extensive properties (like mass, volume) depend on amount of substance.', 'It\'s a physical property, not a chemical change.'],
      memoryTrick: 'COLLIGATIVE = "Collective count" → depends on NUMBER of particles. ΔTf = Kf × m × i.',
      keyPoint: 'All 4 colligative properties: vapour pressure lowering, boiling point elevation, freezing point depression, osmotic pressure.',
    },
  },

  // ── Chemical Kinetics ──
  {
    id: 'q58', topic: 'chem-16-1-2',
    question: 'The half-life of a first-order reaction is:',
    options: ['Independent of initial concentration', 'Directly proportional to concentration', 'Inversely proportional to concentration', 'Proportional to square of concentration'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 4, Page 105',
    explanation: {
      correct: 'For first-order reactions, t₁/₂ = 0.693/k. The half-life depends only on the rate constant, NOT on initial concentration. This is unique to first-order kinetics.',
      whyWrong: ['', 'For zero-order, t₁/₂ = [A₀]/2k (proportional to concentration).', 'For second-order, t₁/₂ = 1/k[A₀] (inversely proportional).', 'No common reaction order has this dependence.'],
      memoryTrick: 'First-order t₁/₂ = 0.693/k. Radioactive decay is first-order — half-life is constant regardless of amount.',
      keyPoint: 'This is why radioactive dating works — the half-life doesn\'t change with the amount of isotope remaining.',
    },
  },

  // ── Coordination Chemistry ──
  {
    id: 'q59', topic: 'chem-21-1-1',
    question: 'The coordination number of cobalt in [Co(NH₃)₆]³⁺ is:',
    options: ['6', '3', '4', '12'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 9, Page 237',
    explanation: {
      correct: 'Coordination number is the number of ligand donor atoms directly bonded to the central metal. Co is bonded to 6 NH₃ molecules (monodentate), so CN = 6.',
      whyWrong: ['', '3 is the oxidation state of Co, not the coordination number.', '4 would be for tetrahedral complexes like [CoCl₄]²⁻.', '12 would count the total atoms in NH₃, which is incorrect.'],
      memoryTrick: 'Coordination Number = number of BONDS to central metal. Each NH₃ has 1 lone pair = 1 bond = monodentate.',
      keyPoint: 'CN 6 = octahedral geometry. CN 4 = tetrahedral or square planar.',
    },
  },

  // ── d-Block Elements ──
  {
    id: 'q60', topic: 'chem-20-1-2',
    question: 'Transition metals show variable oxidation states because:',
    options: ['(n-1)d and ns electrons have similar energies', 'They have large atomic size', 'They are all metals', 'They have high melting points'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 8, Page 213',
    explanation: {
      correct: 'In transition metals, the (n-1)d and ns orbitals are close in energy. Both can participate in bonding, allowing multiple oxidation states (e.g., Mn: +2 to +7).',
      whyWrong: ['', 'Atomic size doesn\'t directly cause variable oxidation states.', 'Being metals doesn\'t explain variable oxidation states — Na is a metal with only +1.', 'High melting points are a consequence of bonding, not a cause of variable oxidation states.'],
      memoryTrick: 'D-block = "D for Different oxidation states" because d and s electrons are close in energy and both participate.',
      keyPoint: 'Mn shows max oxidation states (+7) in 3d series because all 5d + 2s electrons can participate.',
    },
  },

  // ── Haloalkanes ──
  {
    id: 'q61', topic: 'chem-22-1-2',
    question: 'SN1 reaction is favoured by:',
    options: ['Tertiary alkyl halides', 'Primary alkyl halides', 'Methyl halides', 'Vinyl halides'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 10, Page 269',
    explanation: {
      correct: 'SN1 proceeds through carbocation intermediate. Tertiary carbocations are most stable (hyperconjugation + inductive effect), so 3° alkyl halides favour SN1.',
      whyWrong: ['', 'Primary alkyl halides favour SN2 (no steric hindrance, unstable 1° carbocation).', 'Methyl halides strongly favour SN2 (least steric hindrance, most unstable carbocation).', 'Vinyl halides don\'t undergo SN1 or SN2 easily (sp² carbon).'],
      memoryTrick: 'SN1: "1 step at a time" → carbocation forms first. Stability: 3° > 2° > 1° > methyl.',
      comparison: 'SN1: 3° favoured, unimolecular, racemization | SN2: 1°/methyl favoured, bimolecular, inversion',
      keyPoint: 'SN1 gives racemic mixture. SN2 gives Walden inversion (100% configuration change).',
    },
  },

  // ── More Chemistry ──
  {
    id: 'q62', topic: 'chem-24-1-4',
    question: "Tollens' reagent is used to distinguish between:",
    options: ['Aldehydes and ketones', 'Alkanes and alkenes', 'Acids and bases', 'Alcohols and phenols'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 12, Page 337',
    explanation: {
      correct: "Tollens' reagent [Ag(NH₃)₂]⁺ (ammoniacal AgNO₃) gives a silver mirror with aldehydes but NOT with ketones. Aldehydes are more easily oxidized than ketones.",
      whyWrong: ['', 'Alkanes/alkenes are distinguished by bromine water test.', 'Acids/bases are distinguished by pH indicators.', "Alcohols/phenols are distinguished by FeCl₃ test (phenols give purple colour)."],
      memoryTrick: "Tollens' = Silver mirror test → ALDE-hydes give SILVER mirror. Ketones say NO.",
      comparison: "Tollens' (silver mirror) and Fehling's (red ppt) both test for aldehydes. Ketones fail both.",
      keyPoint: "RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓ (silver mirror) + 4NH₃ + 2H₂O",
    },
  },

  // ── Solid State ──
  {
    id: 'q63', topic: 'chem-13-1-1',
    question: 'The packing efficiency of BCC (body-centered cubic) structure is:',
    options: ['68%', '74%', '52.4%', '90%'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 1, Page 7',
    explanation: {
      correct: 'BCC has 2 atoms per unit cell. Packing efficiency = (volume of atoms/volume of unit cell) × 100 = 68%. BCC has atoms at corners and one at the body center.',
      whyWrong: ['', '74% is the packing efficiency of FCC/HCP (most efficient).', '52.4% is the packing efficiency of simple cubic (SC).', '90% exceeds any crystal packing efficiency.'],
      memoryTrick: 'SC = 52.4% | BCC = 68% | FCC/HCP = 74%. Remember: "Simple Bad, FCC Fantastic."',
      keyPoint: 'Atoms per unit cell: SC = 1, BCC = 2, FCC = 4. CN: SC = 6, BCC = 8, FCC = 12.',
    },
  },

  // ── Amines ──
  {
    id: 'q64', topic: 'chem-25-1-2',
    question: 'The order of basicity of amines in aqueous solution is:',
    options: ['Secondary > Primary > Tertiary', 'Tertiary > Secondary > Primary', 'Primary > Secondary > Tertiary', 'All are equally basic'],
    correct: 0, difficulty: 'Hard', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 13, Page 363',
    explanation: {
      correct: 'In aqueous solution, basicity order is 2° > 1° > 3° (for simple aliphatic amines). Tertiary amines have steric hindrance that prevents proper solvation of the protonated form.',
      whyWrong: ['', 'This would be the gas-phase order where solvation doesn\'t matter.', 'Primary amines have less +I effect than secondary.', 'They have different basicities due to inductive effect and solvation.'],
      memoryTrick: 'In water: 2° wins (good +I effect + good solvation). 3° loses solvation. Gas phase: 3° > 2° > 1° (pure +I effect).',
      keyPoint: 'Basicity in water ≠ basicity in gas phase. Solvation plays a crucial role in aqueous solution.',
    },
  },

  // ── Polymers ──
  {
    id: 'q65', topic: 'chem-27-1-2',
    question: 'Nylon-6,6 is an example of:',
    options: ['Condensation polymer', 'Addition polymer', 'Natural polymer', 'Copolymer of addition type'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 15, Page 410',
    explanation: {
      correct: 'Nylon-6,6 is formed by condensation of hexamethylenediamine and adipic acid with loss of water molecules. It\'s a polyamide.',
      whyWrong: ['', 'Addition polymers (like polythene) form without loss of small molecules.', 'Nylon is synthetic, not natural (natural polymers: cellulose, silk, protein).', 'Copolymer of addition type would be like SBR rubber.'],
      memoryTrick: 'Nylon-6,6 = 6 carbons in each monomer (hexamethylenediamine + adipic acid). "6 and 6 condense together."',
      keyPoint: '6,6 refers to 6 carbons in diamine and 6 carbons in diacid. Nylon-6 is from caprolactam only.',
    },
  },

  // ── Surface Chemistry ──
  {
    id: 'q66', topic: 'chem-17-1-1',
    question: 'Physical adsorption is characterized by:',
    options: ['Low enthalpy of adsorption (20-40 kJ/mol)', 'High enthalpy of adsorption (200-400 kJ/mol)', 'Highly specific', 'Irreversible process'],
    correct: 0, difficulty: 'Medium', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 5, Page 117',
    explanation: {
      correct: 'Physical adsorption involves weak van der Waals forces, has low enthalpy (20-40 kJ/mol), is reversible, non-specific, and favoured by low temperature.',
      whyWrong: ['', 'High enthalpy is characteristic of chemical adsorption (chemisorption, 80-240 kJ/mol).', 'Physical adsorption is non-specific — any gas can be adsorbed on any solid.', 'Physical adsorption is easily reversible (just heat to desorb).'],
      memoryTrick: 'Physical = "Physically weak" (van der Waals). Chemical = "Chemically strong" (covalent bonds).',
      comparison: 'Physisorption: low ΔH, reversible, multilayer, low T | Chemisorption: high ΔH, irreversible, monolayer, high T',
      keyPoint: 'Physical adsorption increases with increase in pressure and decrease in temperature.',
    },
  },

  // Additional questions to reach 100+
  {
    id: 'q67', topic: 'bio-19-1-1',
    question: 'The master gland of the endocrine system is:',
    options: ['Pituitary gland', 'Thyroid gland', 'Adrenal gland', 'Pancreas'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2017,
    ncertRef: 'Class 11, Chapter 22, Page 335',
    explanation: {
      correct: 'The pituitary gland is called the "master gland" because it controls other endocrine glands by secreting tropic hormones (TSH, ACTH, FSH, LH, GH, etc.).',
      whyWrong: ['', 'Thyroid is controlled by TSH from the pituitary.', 'Adrenal is controlled by ACTH from the pituitary.', 'Pancreas has both endocrine and exocrine functions but doesn\'t control other glands.'],
      memoryTrick: 'Pituitary = "Master" (controls all). But Hypothalamus = "Master of the Master" (controls pituitary)!',
      keyPoint: 'Anterior pituitary: GH, TSH, ACTH, FSH, LH, PRL. Posterior pituitary: ADH (vasopressin), oxytocin.',
    },
  },
  {
    id: 'q68', topic: 'bio-16-2-1',
    question: 'The ascending limb of loop of Henle is:',
    options: ['Impermeable to water', 'Permeable to water', 'Secretes urea', 'Absorbs glucose'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 11, Chapter 19, Page 296',
    explanation: {
      correct: 'The ascending limb of the loop of Henle is impermeable to water but actively transports NaCl out. This creates the concentration gradient in the medulla (countercurrent multiplier).',
      whyWrong: ['', 'The descending limb is permeable to water (not ascending).', 'Urea recycling occurs in the collecting duct.', 'Glucose reabsorption occurs in the PCT, not loop of Henle.'],
      memoryTrick: 'Descending = "water Descends out" (permeable to water). Ascending = "salt Ascends out" (impermeable to water, transports salt).',
      keyPoint: 'This countercurrent mechanism concentrates urine. Desert animals have longer loops for more concentrated urine.',
    },
  },
  {
    id: 'q69', topic: 'phy-12-1-4',
    question: 'The efficiency of a Carnot engine operating between 600 K and 300 K is:',
    options: ['50%', '25%', '75%', '100%'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 12, Page 305',
    explanation: {
      correct: 'Carnot efficiency η = 1 - T_cold/T_hot = 1 - 300/600 = 1 - 0.5 = 0.5 = 50%.',
      whyWrong: ['', '25% would require T_cold/T_hot = 0.75 (e.g., 450K/600K).', '75% would require T_cold/T_hot = 0.25 (e.g., 150K/600K).', '100% efficiency violates the second law of thermodynamics.'],
      memoryTrick: 'η = 1 - T_C/T_H. Temperatures MUST be in Kelvin! Higher T difference = more efficient.',
      keyPoint: 'No real engine can exceed Carnot efficiency. 100% efficiency requires T_cold = 0 K (impossible).',
    },
  },
  {
    id: 'q70', topic: 'phy-21-1-2',
    question: "Lenz's law is a consequence of conservation of:",
    options: ['Energy', 'Charge', 'Momentum', 'Mass'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 6, Page 208',
    explanation: {
      correct: "Lenz's law states that induced current opposes the change that produces it. This is a direct consequence of conservation of energy — if it aided the cause, we'd get energy from nothing.",
      whyWrong: ['', 'Charge conservation applies but is not what Lenz\'s law directly illustrates.', 'Momentum conservation is Newton\'s third law, not related to electromagnetic induction.', 'Mass conservation is separate from electromagnetic phenomena.'],
      memoryTrick: "Lenz's law = \"Lazy law\" — the induced current is lazy and opposes the change (wants to maintain status quo).",
      keyPoint: 'The negative sign in Faraday\'s law (ε = -dΦ/dt) represents Lenz\'s law.',
    },
  },

  // More to reach 100+
  {
    id: 'q71', topic: 'bio-34-1-2',
    question: 'The species-area relationship was given by:',
    options: ['Alexander von Humboldt', 'Robert May', 'Paul Ehrlich', 'Edward Wilson'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 15, Page 264',
    explanation: {
      correct: 'Alexander von Humboldt described the species-area relationship: log S = log C + Z log A, where S = species richness, A = area, Z = slope (typically 0.1-0.3).',
      whyWrong: ['', 'Robert May estimated global species diversity at ~7 million.', 'Paul Ehrlich gave the Rivet Popper hypothesis about species loss.', 'Edward Wilson coined the term "biodiversity".'],
      memoryTrick: 'Humboldt = "Humble Area" → species-area relationship. Z = 0.1-0.3 for normal areas, 0.6-1.2 for islands.',
      keyPoint: 'On a log-log scale, the species-area relationship is linear. Larger areas support more species.',
    },
  },
  {
    id: 'q72', topic: 'chem-4-2-2',
    question: 'The hybridization of carbon in ethylene (C₂H₄) is:',
    options: ['sp²', 'sp³', 'sp', 'sp³d'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 4, Page 116',
    explanation: {
      correct: 'In ethylene, each carbon forms 2 C-H bonds and 1 C=C bond (3 sigma bonds). 3 electron domains → sp² hybridization with 120° bond angles. One unhybridized p orbital forms π bond.',
      whyWrong: ['', 'sp³ is for 4 sigma bonds (like in methane or ethane).', 'sp is for 2 sigma bonds (like in acetylene or CO₂).', 'sp³d requires d orbitals — not available for carbon.'],
      memoryTrick: 'Count sigma bonds: sp³ = 4σ, sp² = 3σ, sp = 2σ. Ethylene: C makes 3σ → sp².',
      keyPoint: 'sp² carbons are trigonal planar (120°). The π bond restricts rotation → cis/trans isomerism possible.',
    },
  },
  {
    id: 'q73', topic: 'phy-22-1-2',
    question: 'At resonance in an LCR circuit:',
    options: ['Impedance is minimum', 'Impedance is maximum', 'Current is minimum', 'Voltage across L and C add up'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 7, Page 244',
    explanation: {
      correct: 'At resonance, XL = XC (inductive and capacitive reactances cancel). Impedance Z = R (minimum). Current I = V/R (maximum). The circuit behaves purely resistive.',
      whyWrong: ['', 'Impedance is minimum (= R), not maximum.', 'Current is maximum at resonance, not minimum.', 'VL and VC are equal but opposite — they cancel each other.'],
      memoryTrick: 'Resonance: XL = XC → they cancel → Z = R → I is MAX. Like a swing at its natural frequency!',
      keyPoint: 'Resonance frequency: f₀ = 1/(2π√LC). This is used in radio tuning to select stations.',
    },
  },
  {
    id: 'q74', topic: 'bio-30-2-1',
    question: 'PCR (Polymerase Chain Reaction) requires:',
    options: ['Taq polymerase, primers, dNTPs, template DNA', 'Only DNA ligase', 'Only restriction enzymes', 'RNA polymerase and ribosomes'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 11, Page 203',
    explanation: {
      correct: 'PCR needs: template DNA, two primers (forward & reverse), Taq polymerase (heat-stable), dNTPs (building blocks), and buffer with Mg²⁺.',
      whyWrong: ['', 'DNA ligase joins fragments but isn\'t the key enzyme in PCR.', 'Restriction enzymes cut DNA — they\'re used in cloning, not PCR.', 'RNA polymerase makes RNA. PCR amplifies DNA using DNA polymerase.'],
      memoryTrick: 'PCR = "Photocopy of DNA." Needs: Template (original), Primers (start points), Taq (copying enzyme), dNTPs (ink).',
      keyPoint: 'PCR cycle: Denaturation (95°C) → Annealing (55°C) → Extension (72°C). Taq polymerase survives 95°C because it\'s from Thermus aquaticus (hot springs bacterium).',
    },
  },
  {
    id: 'q75', topic: 'chem-3-2-2',
    question: 'Ionization energy generally increases:',
    options: ['Across a period (left to right)', 'Down a group', 'With increasing atomic size', 'With decreasing nuclear charge'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 3, Page 85',
    explanation: {
      correct: 'Across a period, nuclear charge increases while atomic size decreases → electrons are held more tightly → ionization energy increases left to right.',
      whyWrong: ['', 'Down a group, IE decreases (larger size, more shielding, easier to remove electron).', 'Larger atoms have LOWER IE (outermost electron is farther from nucleus).', 'Decreasing nuclear charge means lower IE, not higher.'],
      memoryTrick: 'IE: ↑ across period (more protons pull harder), ↓ down group (electrons farther away).',
      keyPoint: 'Exceptions: Be > B and N > O due to extra stability of fully-filled and half-filled subshells.',
    },
  },

  // More questions to complete 100+
  {
    id: 'q76', topic: 'bio-8-1-1',
    question: 'Which of the following is absent in prokaryotic cells?',
    options: ['Membrane-bound organelles', 'Ribosomes', 'Cell wall', 'DNA'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 8, Page 131',
    explanation: {
      correct: 'Prokaryotic cells lack membrane-bound organelles like mitochondria, ER, Golgi, nucleus. They have a simpler internal organization.',
      whyWrong: ['', 'Prokaryotes have 70S ribosomes for protein synthesis.', 'Most prokaryotes have cell walls (peptidoglycan in bacteria).', 'Prokaryotes have DNA — it\'s just not enclosed in a nucleus (nucleoid region).'],
      memoryTrick: 'PRO-karyotes = PRImitive = No membrane-bound organelles. EU-karyotes = "EU (good/true)" = True nucleus + organelles.',
      keyPoint: 'Key prokaryote features: 70S ribosomes, circular DNA, no histones (mostly), binary fission.',
    },
  },
  {
    id: 'q77', topic: 'phy-25-1-1',
    question: "In Young's double slit experiment, the fringe width depends on:",
    options: ['Wavelength of light used', 'Color of the slit', 'Material of the screen', 'Thickness of the slits'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 10, Page 362',
    explanation: {
      correct: 'Fringe width β = λD/d, where λ = wavelength, D = distance to screen, d = slit separation. It directly depends on wavelength.',
      whyWrong: ['', 'Color of the slit doesn\'t matter — it\'s the wavelength of incident light.', 'Screen material doesn\'t affect fringe width.', 'Slit thickness affects intensity, not fringe spacing.'],
      memoryTrick: 'β = λD/d. "Bigger Lambda → Bigger fringes." Red light (long λ) gives wider fringes than violet (short λ).',
      keyPoint: 'This experiment proved the wave nature of light. Constructive interference at path diff = nλ.',
    },
  },
  {
    id: 'q78', topic: 'chem-6-1-2',
    question: "According to Le Chatelier's principle, increasing pressure shifts equilibrium toward:",
    options: ['Side with fewer moles of gas', 'Side with more moles of gas', 'Forward direction always', 'Reverse direction always'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 7, Page 189',
    explanation: {
      correct: "Le Chatelier's principle: increasing pressure shifts equilibrium toward the side with fewer moles of gas to reduce pressure. The system opposes the change.",
      whyWrong: ['', 'More moles would increase pressure further — system opposes change.', 'Direction depends on stoichiometry, not always forward.', 'Direction depends on stoichiometry, not always reverse.'],
      memoryTrick: "Le Chatelier = \"Le Stubborn\" — the system always opposes the change you make.",
      keyPoint: 'For N₂ + 3H₂ ⇌ 2NH₃: increasing pressure favours forward (4 moles → 2 moles).',
    },
  },
  {
    id: 'q79', topic: 'bio-13-2-1',
    question: 'Auxin is primarily produced in:',
    options: ['Shoot tips', 'Root tips', 'Mature leaves', 'Old stems'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 15, Page 249',
    explanation: {
      correct: 'Auxin (IAA - Indole-3-acetic acid) is primarily synthesized in the shoot apical meristem, young leaves, and developing seeds. It moves basipetally (from tip downward).',
      whyWrong: ['', 'Root tips produce auxin in small amounts but are not the primary source.', 'Mature leaves produce minimal auxin.', 'Old stems don\'t actively produce significant auxin.'],
      memoryTrick: 'Auxin = "AUx tip" → produced at the growing tip, moves downward. Promotes cell elongation.',
      keyPoint: 'Auxin causes phototropism: more auxin on shaded side → more elongation → plant bends toward light.',
    },
  },
  {
    id: 'q80', topic: 'phy-29-3-1',
    question: 'The Boolean expression for a NAND gate is:',
    options: ['Y = (A·B)\'', 'Y = A·B', 'Y = A+B', 'Y = (A+B)\''],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 14, Page 491',
    explanation: {
      correct: 'NAND = NOT + AND. Output Y = (A·B)\' = NOT(A AND B). Output is LOW only when both inputs are HIGH.',
      whyWrong: ['', 'Y = A·B is AND gate output.', 'Y = A+B is OR gate output.', 'Y = (A+B)\' is NOR gate output.'],
      memoryTrick: 'NAND = "Not AND." NOR = "Not OR." NAND and NOR are universal gates (can make any other gate).',
      keyPoint: 'NAND gate is called a universal gate because any logic gate can be built using only NAND gates.',
    },
  },

  // Remaining questions to reach 100+
  {
    id: 'q81', topic: 'bio-21-3-2',
    question: 'Double fertilisation is unique to:',
    options: ['Angiosperms', 'Gymnosperms', 'Pteridophytes', 'Bryophytes'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 2, Page 33',
    explanation: {
      correct: 'Double fertilisation is exclusive to angiosperms: one sperm fuses with egg (zygote, 2n) and another fuses with polar nuclei (endosperm, 3n).',
      whyWrong: ['', 'Gymnosperms have single fertilisation only.', 'Pteridophytes need water for fertilisation; no double fertilisation.', 'Bryophytes also need water; no double fertilisation.'],
      memoryTrick: '"Double the fun in ANGIO" — Angiosperms have double fertilisation. One sperm + egg = baby, other sperm + 2 polar nuclei = food (endosperm).',
      keyPoint: 'Triple fusion: sperm (n) + 2 polar nuclei (n+n) = Primary Endosperm Nucleus (3n). Discovered by Nawaschin.',
    },
  },
  {
    id: 'q82', topic: 'chem-15-2-2',
    question: "Kohlrausch's law states that at infinite dilution:",
    options: ['Each ion contributes independently to conductance', 'Conductance becomes zero', 'All electrolytes behave identically', 'Strong and weak electrolytes have same conductance'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 3, Page 78',
    explanation: {
      correct: "At infinite dilution, each ion migrates independently. Λ°m = λ°+ + λ°- (molar conductivity = sum of individual ionic conductivities). This is Kohlrausch's law.",
      whyWrong: ['', 'Conductance is maximum (not zero) at infinite dilution for strong electrolytes.', 'Different electrolytes have different Λ°m values.', 'Weak electrolytes are only fully dissociated at infinite dilution.'],
      memoryTrick: "Kohlrausch = \"Individual contribution\" — at infinite dilution, ions don't interact, each contributes independently.",
      keyPoint: "Used to find Λ°m of weak electrolytes: Λ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) - Λ°m(NaCl).",
    },
  },
  {
    id: 'q83', topic: 'phy-14-1-1',
    question: 'The time period of a simple pendulum depends on:',
    options: ['Length and acceleration due to gravity', 'Mass of the bob', 'Amplitude (for small angles)', 'Material of the string'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 14, Page 354',
    explanation: {
      correct: 'T = 2π√(L/g). Time period depends ONLY on length (L) and acceleration due to gravity (g), NOT on mass or amplitude (for small oscillations).',
      whyWrong: ['', 'Mass doesn\'t appear in the formula — heavy and light bobs have the same period.', 'For small angles (<15°), amplitude doesn\'t affect period (isochronous).', 'String material doesn\'t affect period as long as it\'s inextensible.'],
      memoryTrick: 'T = 2π√(L/g). "Time depends on Length and gravity." Mass and amplitude don\'t matter!',
      keyPoint: 'On the moon (g = 1.63 m/s²), a pendulum swings ~2.5× slower than on Earth.',
    },
  },
  {
    id: 'q84', topic: 'bio-25-3-4',
    question: 'The lac operon in E. coli is regulated by:',
    options: ['Lactose (inducer) and repressor protein', 'Only by RNA polymerase', 'Only by glucose', 'DNA polymerase'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 6, Page 113',
    explanation: {
      correct: 'The lac operon is negatively regulated by the repressor protein (product of lacI gene). Lactose (converted to allolactose) acts as an inducer — it inactivates the repressor, allowing transcription.',
      whyWrong: ['', 'RNA polymerase transcribes genes but doesn\'t regulate the operon.', 'Glucose affects regulation through catabolite repression but is not the primary regulator.', 'DNA polymerase replicates DNA, doesn\'t regulate gene expression.'],
      memoryTrick: 'Lac operon: "No Lactose = Locked (repressor ON). Lactose present = Unlocked (repressor OFF)."',
      keyPoint: 'The lac operon has structural genes (lacZ, lacY, lacA), promoter, operator, and regulatory gene (lacI). It was proposed by Jacob and Monod.',
    },
  },
  {
    id: 'q85', topic: 'chem-7-1-1',
    question: 'The oxidation number of Mn in KMnO₄ is:',
    options: ['+7', '+4', '+2', '+6'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 8, Page 253',
    explanation: {
      correct: 'In KMnO₄: K = +1, O = -2 each (4 oxygens = -8). Total = 0. So: +1 + Mn + (-8) = 0 → Mn = +7.',
      whyWrong: ['', '+4 is the oxidation state of Mn in MnO₂.', '+2 is the oxidation state of Mn in MnCl₂.', '+6 is the oxidation state of Mn in K₂MnO₄.'],
      memoryTrick: 'For calculating: assign known values (K=+1, O=-2), total = charge of species. Solve for unknown.',
      keyPoint: 'KMnO₄ is a strong oxidizing agent because Mn⁷⁺ easily gets reduced (gains electrons).',
    },
  },

  // Final batch to reach 100+
  {
    id: 'q86', topic: 'bio-17-3-2',
    question: 'In the sliding filament theory of muscle contraction:',
    options: ['Actin filaments slide over myosin filaments', 'Myosin filaments shorten', 'Both actin and myosin shorten', 'The sarcomere lengthens'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 11, Chapter 20, Page 310',
    explanation: {
      correct: 'During muscle contraction, thin (actin) filaments slide over thick (myosin) filaments toward the center of the sarcomere. Neither actin nor myosin actually shortens — they SLIDE.',
      whyWrong: ['', 'Myosin filaments don\'t shorten — actin slides over them.', 'Neither filament changes length — only the sarcomere shortens.', 'The sarcomere shortens during contraction, not lengthens.'],
      memoryTrick: 'Think of sliding doors: the door (actin) slides, the track (myosin) stays. H-zone and I-band decrease; A-band stays same.',
      keyPoint: 'The sequence: nerve impulse → Ca²⁺ release → troponin shifts → myosin binds actin → power stroke → ATP breaks bond → repeat.',
    },
  },
  {
    id: 'q87', topic: 'phy-18-2-1',
    question: "Kirchhoff's first law (junction rule) is based on conservation of:",
    options: ['Charge', 'Energy', 'Momentum', 'Mass'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 3, Page 104',
    explanation: {
      correct: "Kirchhoff's junction rule: total current entering a junction = total current leaving. This is based on conservation of charge (charge cannot accumulate at a point).",
      whyWrong: ['', "Conservation of energy is the basis for Kirchhoff's second law (loop/voltage rule).", 'Momentum conservation applies to mechanics, not circuits.', 'Mass conservation doesn\'t directly apply to current flow.'],
      memoryTrick: "KCL (Kirchhoff's Current Law) = Charge conservation. KVL (Kirchhoff's Voltage Law) = Energy conservation.",
      keyPoint: 'ΣI_in = ΣI_out at any junction. ΣV = 0 around any closed loop.',
    },
  },
  {
    id: 'q88', topic: 'chem-13-2-1',
    question: 'Schottky defect is observed in ionic crystals when:',
    options: ['Equal number of cations and anions are missing', 'Cations occupy interstitial sites', 'Anions occupy cation positions', 'Extra cations are added'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 1, Page 13',
    explanation: {
      correct: 'In Schottky defect, equal numbers of cations and anions are missing from lattice sites, maintaining electrical neutrality. It decreases density.',
      whyWrong: ['', 'Cations in interstitial sites is Frenkel defect, not Schottky.', 'Anions in cation positions would be a substitutional defect.', 'Extra cations would cause metal excess defect.'],
      memoryTrick: 'SCHOTTKY = "Shot away" — ions are missing. FRENKEL = "Frank shifted" — ion displaced to interstitial site.',
      comparison: 'Schottky: pairs missing, density ↓ (NaCl, KCl) | Frenkel: ion displaced, density same (AgCl, ZnS)',
      keyPoint: 'Schottky defect: seen in crystals where cation and anion are similar in size (NaCl). Frenkel: size difference is large (AgBr).',
    },
  },
  {
    id: 'q89', topic: 'bio-32-2-2',
    question: 'The logistic growth equation is:',
    options: ['dN/dt = rN(K-N)/K', 'dN/dt = rN', 'dN/dt = N/K', 'dN/dt = rK'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2021,
    ncertRef: 'Class 12, Chapter 13, Page 234',
    explanation: {
      correct: 'The logistic (Verhulst-Pearl) equation is dN/dt = rN(K-N)/K where N = population size, r = intrinsic growth rate, K = carrying capacity.',
      whyWrong: ['', 'dN/dt = rN is exponential growth (J-shaped curve) — assumes unlimited resources.', 'dN/dt = N/K doesn\'t represent any standard growth model.', 'dN/dt = rK is constant, not population-dependent.'],
      memoryTrick: 'Logistic = "Limited resources" → S-shaped curve. When N = K, growth = 0 (population stabilizes). When N << K, growth ≈ exponential.',
      keyPoint: 'Logistic growth shows sigmoid (S-shaped) curve. Growth rate is maximum at N = K/2.',
    },
  },
  {
    id: 'q90', topic: 'chem-16-2-1',
    question: 'The Arrhenius equation is:',
    options: ['k = Ae^(-Ea/RT)', 'k = A + Ea/RT', 'k = Ea/RT', 'k = A × Ea × T'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 4, Page 111',
    explanation: {
      correct: 'k = Ae^(-Ea/RT) where k = rate constant, A = pre-exponential factor, Ea = activation energy, R = gas constant, T = temperature in Kelvin.',
      whyWrong: ['', 'This is not the correct mathematical form.', 'This would make k decrease with T, which is wrong.', 'This doesn\'t have the exponential relationship.'],
      memoryTrick: 'Arrhenius: "A Rate Rises with Heat Exponentially, Not Linearly, If Uniformly Supplied" → k = Ae^(-Ea/RT).',
      keyPoint: 'Plot of ln(k) vs 1/T gives a straight line with slope = -Ea/R. Higher T → higher k → faster reaction.',
    },
  },
  {
    id: 'q91', topic: 'phy-28-1-2',
    question: 'The binding energy per nucleon is maximum for:',
    options: ['Fe-56', 'U-238', 'He-4', 'H-1'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 13, Page 441',
    explanation: {
      correct: 'Iron-56 (Fe-56) has the highest binding energy per nucleon (~8.8 MeV). This makes it the most stable nucleus. Both fusion and fission move toward Fe.',
      whyWrong: ['', 'U-238 has lower BE/nucleon (~7.6 MeV) — it undergoes fission to become more stable.', 'He-4 has high BE/nucleon (~7.1 MeV) but not the highest.', 'H-1 has zero BE/nucleon (single proton, nothing to bind).'],
      memoryTrick: 'IRON = "IRON-clad stability" — most stable nucleus in the universe.',
      keyPoint: 'Light nuclei fuse → more stable. Heavy nuclei fission → more stable. Both converge toward Fe.',
    },
  },
  {
    id: 'q92', topic: 'bio-27-1-1',
    question: 'The causative agent of malaria is:',
    options: ['Plasmodium', 'Entamoeba', 'Wuchereria', 'Ascaris'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2017,
    ncertRef: 'Class 12, Chapter 8, Page 147',
    explanation: {
      correct: 'Malaria is caused by Plasmodium (a protozoan parasite) and transmitted by the female Anopheles mosquito. Species: P. vivax, P. falciparum, P. malariae, P. ovale.',
      whyWrong: ['', 'Entamoeba histolytica causes amoebiasis (amoebic dysentery).', 'Wuchereria bancrofti causes filariasis (elephantiasis).', 'Ascaris lumbricoides causes ascariasis (roundworm infection).'],
      memoryTrick: 'PLASModium in PLASMa → Malaria. Female Anopheles = vector. Plasmodium falciparum = most dangerous species.',
      keyPoint: 'Malaria cycle: sporozoites (liver) → merozoites (RBCs) → gametocytes → mosquito → sporozoites.',
    },
  },
  {
    id: 'q93', topic: 'chem-20-1-4',
    question: 'KMnO₄ acts as a powerful:',
    options: ['Oxidizing agent', 'Reducing agent', 'Dehydrating agent', 'Bleaching agent only'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 8, Page 224',
    explanation: {
      correct: 'KMnO₄ (potassium permanganate) is a powerful oxidizing agent. Mn goes from +7 to +2 (acidic), +4 (neutral), or +6 (alkaline), gaining electrons.',
      whyWrong: ['', 'A reducing agent donates electrons — KMnO₄ accepts electrons.', 'KMnO₄ is not primarily a dehydrating agent (H₂SO₄ is).', 'While it can bleach, its primary role is as an oxidizer.'],
      memoryTrick: 'KMnO₄: purple → colourless (in acidic medium). Colour change indicates it gained electrons = oxidizing agent.',
      keyPoint: 'In acidic medium: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. n-factor = 5.',
    },
  },
  {
    id: 'q94', topic: 'phy-7-2-1',
    question: 'Moment of inertia depends on:',
    options: ['Mass distribution about the axis of rotation', 'Angular velocity', 'Linear velocity', 'Torque applied'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 11, Chapter 7, Page 167',
    explanation: {
      correct: 'Moment of inertia (I) depends on mass of the body AND how that mass is distributed relative to the axis of rotation. I = Σmr². Farther the mass from axis, greater the I.',
      whyWrong: ['', 'Angular velocity doesn\'t affect I — it\'s a property of the body and axis.', 'Linear velocity doesn\'t determine I.', 'Torque causes angular acceleration but doesn\'t change I.'],
      memoryTrick: 'I = Σmr². Think of I as "rotational mass." Heavier and farther from axis = harder to spin.',
      keyPoint: 'I is analogous to mass in translational motion. τ = Iα (like F = ma).',
    },
  },
  {
    id: 'q95', topic: 'bio-22-1-1',
    question: 'Sertoli cells are found in:',
    options: ['Seminiferous tubules of testis', 'Ovary', 'Fallopian tube', 'Uterus'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 3, Page 44',
    explanation: {
      correct: 'Sertoli cells (nurse cells) are found in the seminiferous tubules of the testis. They provide nourishment to developing spermatocytes and secrete inhibin.',
      whyWrong: ['', 'Ovary has follicle cells and theca cells, not Sertoli cells.', 'Fallopian tubes have ciliated epithelium.', 'Uterus has endometrial cells.'],
      memoryTrick: 'Sertoli = "SERvant to sperm" — they nourish and support developing sperm cells.',
      keyPoint: 'Leydig cells (interstitial cells) in testis produce testosterone. Sertoli cells nourish sperm + secrete inhibin.',
    },
  },
  {
    id: 'q96', topic: 'chem-14-2-4',
    question: "The van't Hoff factor (i) for NaCl is approximately:",
    options: ['2', '1', '3', '0.5'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 2, Page 54',
    explanation: {
      correct: "NaCl dissociates into Na⁺ and Cl⁻ (2 particles). The van't Hoff factor i = number of particles after dissociation / number before = 2/1 = 2.",
      whyWrong: ['', 'i = 1 is for non-electrolytes (glucose, urea) that don\'t dissociate.', 'i = 3 would be for CaCl₂ (Ca²⁺ + 2Cl⁻ = 3 particles).', 'i < 1 indicates association (like acetic acid in benzene).'],
      memoryTrick: "van't Hoff factor = total particles after dissolution. NaCl → 2, CaCl₂ → 3, glucose → 1, Al₂(SO₄)₃ → 5.",
      keyPoint: 'i modifies all colligative property formulas: ΔTf = i × Kf × m, π = iCRT, etc.',
    },
  },
  {
    id: 'q97', topic: 'phy-10-1-3',
    question: "A body floats in water with 2/3 of its volume submerged. Its density is:",
    options: ['667 kg/m³', '1000 kg/m³', '1500 kg/m³', '333 kg/m³'],
    correct: 0, difficulty: 'Medium', isPYQ: false, year: null,
    ncertRef: 'Class 11, Chapter 10, Page 257',
    explanation: {
      correct: "For floating: fraction submerged = ρ_body/ρ_water. So ρ_body = (2/3) × 1000 = 667 kg/m³.",
      whyWrong: ['', '1000 kg/m³ is water\'s density — the body would be fully submerged (neutral buoyancy).', '1500 kg/m³ would cause the body to sink.', '333 kg/m³ would mean only 1/3 is submerged.'],
      memoryTrick: 'Fraction submerged = density of object / density of liquid. Ice floats 90% submerged because its density is 0.9 × water.',
      keyPoint: "Archimedes' principle: buoyant force = weight of displaced fluid. Floating: buoyant force = weight of body.",
    },
  },
  {
    id: 'q98', topic: 'bio-31-1-2',
    question: 'Golden rice is genetically modified to be rich in:',
    options: ['Beta-carotene (Vitamin A precursor)', 'Vitamin C', 'Iron', 'Protein'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 12, Chapter 12, Page 213',
    explanation: {
      correct: 'Golden rice is genetically engineered to produce beta-carotene (provitamin A) in the endosperm. It was developed to combat Vitamin A deficiency in developing countries.',
      whyWrong: ['', 'Vitamin C enrichment was not the goal of Golden rice.', 'Iron fortification is done in crops like iron-rich beans, not Golden rice.', 'Protein enrichment was not the primary goal.'],
      memoryTrick: 'GOLDEN = GOLD colour = beta-CAROTENE (orange/yellow pigment → Vitamin A). Rice is golden because of carotene!',
      keyPoint: 'Golden rice was developed by Ingo Potrykus and Peter Beyer using genes from daffodil and Erwinia bacteria.',
    },
  },
  {
    id: 'q99', topic: 'chem-23-2-2',
    question: 'Phenol reacts with bromine water to give:',
    options: ['2,4,6-tribromophenol (white precipitate)', 'Monobromophenol', 'No reaction', 'Bromobenzene'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2018,
    ncertRef: 'Class 12, Chapter 11, Page 308',
    explanation: {
      correct: 'Phenol reacts with bromine water (aqueous Br₂) to give 2,4,6-tribromophenol (white precipitate). The -OH group strongly activates the ring for electrophilic substitution.',
      whyWrong: ['', 'Monobromophenol forms with Br₂/CS₂ (anhydrous), not bromine water.', 'Phenol is highly reactive with bromine water — it reacts instantly.', 'Bromobenzene forms from benzene + Br₂/FeBr₃, not from phenol.'],
      memoryTrick: 'Phenol + Br₂ water → WHITE precipitate (tribromophenol). This is used as a test for phenol!',
      keyPoint: '-OH activates ortho and para positions strongly. In aqueous Br₂, all three positions get brominated.',
    },
  },
  {
    id: 'q100', topic: 'phy-19-2-1',
    question: 'The magnetic field at the centre of a circular loop carrying current I and of radius R is:',
    options: ['μ₀I/2R', 'μ₀I/R', 'μ₀I/2πR', '2μ₀I/R'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 4, Page 139',
    explanation: {
      correct: 'Using Biot-Savart law, the magnetic field at the centre of a circular loop: B = μ₀I/2R. This is a standard result.',
      whyWrong: ['', 'μ₀I/R is incorrect by a factor of 2.', 'μ₀I/2πR is the field due to a long straight wire at distance R.', '2μ₀I/R overestimates the field.'],
      memoryTrick: 'Circle center: B = μ₀I/2R. Straight wire at distance R: B = μ₀I/2πR. Remember: circle has π built in, wire has 2πR.',
      keyPoint: 'For N turns: B = μ₀NI/2R. More turns = stronger field.',
    },
  },
  {
    id: 'q101', topic: 'bio-29-1-2',
    question: 'Penicillin was discovered by:',
    options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Edward Jenner'],
    correct: 0, difficulty: 'Easy', isPYQ: false, year: null,
    ncertRef: 'Class 12, Chapter 10, Page 183',
    explanation: {
      correct: 'Alexander Fleming (1928) discovered penicillin from the mould Penicillium notatum. He noticed that bacterial growth was inhibited around the mould colony.',
      whyWrong: ['', 'Louis Pasteur developed pasteurization and germ theory.', 'Robert Koch identified causative agents of TB and anthrax.', 'Edward Jenner developed the smallpox vaccine.'],
      memoryTrick: 'FLEMING = "FLUNG a MOULD" → discovered penicillin by accident from mould (Penicillium).',
      keyPoint: 'Penicillin was the first antibiotic. Later developed for mass production by Florey and Chain.',
    },
  },
  {
    id: 'q102', topic: 'chem-5-1-3',
    question: "Hess's law states that:",
    options: ['Total enthalpy change is independent of the path', 'Enthalpy depends on temperature only', 'Heat is always absorbed in reactions', 'Entropy always increases'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 6, Page 163',
    explanation: {
      correct: "Hess's law: the total enthalpy change for a reaction is the same whether it occurs in one step or multiple steps. Enthalpy is a state function (path-independent).",
      whyWrong: ['', 'Enthalpy depends on pressure and composition too, not just temperature.', 'Heat can be absorbed (endothermic) or released (exothermic).', 'Entropy may increase or decrease for a system; it always increases for the universe.'],
      memoryTrick: "Hess = \"HEat is a State function\" → doesn't matter how you get there, ΔH is the same.",
      keyPoint: "Hess's law is used to calculate ΔH for reactions that can't be measured directly.",
    },
  },
  {
    id: 'q103', topic: 'phy-13-1-2',
    question: 'The ratio of RMS speed to average speed of gas molecules is:',
    options: ['√(3/8π) × √π ≈ 1.085', '1', '2', '0.5'],
    correct: 0, difficulty: 'Hard', isPYQ: true, year: 2021,
    ncertRef: 'Class 11, Chapter 13, Page 333',
    explanation: {
      correct: 'v_rms = √(3kT/m), v_avg = √(8kT/πm). Ratio = v_rms/v_avg = √(3π/8) ≈ 1.085.',
      whyWrong: ['', 'They are not equal — RMS speed is always slightly higher than average speed.', 'The ratio is approximately 1.085, not 2.', 'The ratio is greater than 1, not 0.5.'],
      memoryTrick: 'Speed ordering: v_mp < v_avg < v_rms. Ratio: 1 : 1.128 : 1.224 (for most probable : average : RMS).',
      keyPoint: 'Most probable (√(2kT/m)) < Average (√(8kT/πm)) < RMS (√(3kT/m)). "MAP" order.',
    },
  },
  {
    id: 'q104', topic: 'bio-26-3-1',
    question: 'Hardy-Weinberg equilibrium holds when:',
    options: ['No evolution is occurring (no selection, mutation, migration, drift)', 'Natural selection is strong', 'Population is very small', 'Mutations are frequent'],
    correct: 0, difficulty: 'Medium', isPYQ: true, year: 2020,
    ncertRef: 'Class 12, Chapter 7, Page 136',
    explanation: {
      correct: 'Hardy-Weinberg equilibrium (p² + 2pq + q² = 1) holds when: no mutations, no selection, random mating, large population, no migration. These conditions mean no evolution.',
      whyWrong: ['', 'Natural selection causes allele frequency changes — violates equilibrium.', 'Small populations experience genetic drift — violates equilibrium.', 'Frequent mutations change allele frequencies — violates equilibrium.'],
      memoryTrick: 'H-W conditions: "No MMDS" — No Mutation, Migration, Drift (small pop), Selection. If all met = no evolution.',
      keyPoint: 'p + q = 1 (allele frequencies). p² + 2pq + q² = 1 (genotype frequencies). Any deviation = evolution occurring.',
    },
  },
  {
    id: 'q105', topic: 'chem-11-3-2',
    question: 'Friedel-Crafts alkylation of benzene requires:',
    options: ['Anhydrous AlCl₃ as catalyst', 'KMnO₄ as catalyst', 'H₂SO₄ as catalyst', 'No catalyst'],
    correct: 0, difficulty: 'Easy', isPYQ: true, year: 2019,
    ncertRef: 'Class 11, Chapter 13, Page 357',
    explanation: {
      correct: 'Friedel-Crafts reactions use anhydrous AlCl₃ (Lewis acid) as catalyst. In alkylation, an alkyl group is introduced to benzene. AlCl₃ generates the electrophile (carbocation).',
      whyWrong: ['', 'KMnO₄ is an oxidizing agent, not a Friedel-Crafts catalyst.', 'H₂SO₄ is used in sulfonation, not in Friedel-Crafts reaction.', 'The reaction requires a Lewis acid catalyst.'],
      memoryTrick: 'Friedel-Crafts = "FC" = "For Carbocation" → AlCl₃ helps generate R⁺ (carbocation) electrophile.',
      keyPoint: 'Friedel-Crafts doesn\'t work with deactivated rings (nitrobenzene) or with vinyl/aryl halides.',
    },
  },
];

export default questions;

/**
 * Helper: Get questions by topic IDs
 */
export function getQuestionsByTopics(topicIds) {
  if (!topicIds || topicIds.length === 0) return questions;
  return questions.filter(q => topicIds.includes(q.topic));
}

/**
 * Helper: Get questions by subject
 */
export function getQuestionsBySubject(subjectPrefix) {
  return questions.filter(q => q.topic.startsWith(subjectPrefix));
}

/**
 * Helper: Get PYQ questions
 */
export function getPYQQuestions() {
  return questions.filter(q => q.isPYQ);
}

/**
 * Helper: Get questions by difficulty
 */
export function getQuestionsByDifficulty(difficulty) {
  return questions.filter(q => q.difficulty === difficulty);
}

/**
 * Helper: Search questions by text
 */
export function searchQuestions(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return questions.filter(ques =>
    ques.question.toLowerCase().includes(q) ||
    ques.options.some(opt => opt.toLowerCase().includes(q))
  ).slice(0, 20);
}

/**
 * Helper: Get a question by ID
 */
export function getQuestionById(id) {
  return questions.find(q => q.id === id);
}

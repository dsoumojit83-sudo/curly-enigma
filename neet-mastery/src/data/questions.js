/**
 * Sample questions database
 * Each question is tagged with the micro-topic ID so the
 * Confidence Learning Mode can filter precisely.
 */

const questions = [
  // ─── Epithelial Tissue: Squamous ───
  {
    id: 'q1',
    topicId: 'bio-ch5-t1-s1-m1',
    text: 'Simple squamous epithelium is found in which of the following?',
    options: [
      'Inner lining of blood vessels (endothelium)',
      'Lining of stomach',
      'Skin epidermis',
      'Trachea lining',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    yearAsked: 2019,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 105',
    isPYQ: true,
    explanation: {
      correct: 'Simple squamous epithelium lines blood vessels (called endothelium) and body cavities (called mesothelium). These are thin, flat cells that allow rapid diffusion and filtration.',
      whyWrong: [
        null,
        'The stomach is lined by simple columnar epithelium which secretes mucus to protect the stomach wall from HCl acid.',
        'Skin epidermis has stratified squamous epithelium (keratinized) which is multi-layered for protection against abrasion.',
        'The trachea is lined by pseudostratified ciliated columnar epithelium with goblet cells for trapping dust.',
      ],
      ncertHighlight: 'Endothelium (blood vessels) and Mesothelium (body cavities) are classic NCERT examples of simple squamous epithelium.',
      memoryTrick: '💡 "Endo-Meso-Squamo" — Endothelium, Mesothelium = Simple Squamous. Remember: flat cells for flat surfaces that need quick exchange!',
      comparison: {
        headers: ['Feature', 'Simple Squamous', 'Stratified Squamous'],
        rows: [
          ['Layers', 'Single layer', 'Multiple layers'],
          ['Function', 'Diffusion, filtration', 'Protection against abrasion'],
          ['Location', 'Blood vessels, alveoli', 'Skin, mouth, esophagus'],
          ['Thickness', 'Very thin', 'Thick'],
        ],
      },
      relatedConcepts: ['Columnar Epithelium', 'Cuboidal Epithelium', 'Stratified Epithelium'],
    },
  },
  {
    id: 'q2',
    topicId: 'bio-ch5-t1-s1-m1',
    text: 'Which epithelium is involved in forming a diffusion boundary in the lungs?',
    options: [
      'Cuboidal epithelium',
      'Simple squamous epithelium',
      'Columnar epithelium',
      'Transitional epithelium',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    yearAsked: 2021,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 105',
    isPYQ: true,
    explanation: {
      correct: 'Simple squamous epithelium lines the alveoli of the lungs. These extremely thin, flat cells create a minimal diffusion barrier, facilitating rapid gas exchange (O₂ and CO₂) between alveolar air and blood capillaries.',
      whyWrong: [
        'Cuboidal epithelium is found in kidney tubules and salivary gland ducts. It is involved in secretion and absorption, not gas exchange.',
        null,
        'Columnar epithelium lines the intestine for absorption and secretion. Too thick for efficient gas exchange.',
        'Transitional epithelium is found in the urinary bladder. It allows stretching — not suited for gas diffusion.',
      ],
      ncertHighlight: 'The alveoli are lined by simple squamous epithelium for maximum gas exchange efficiency. This is a frequently asked NEET concept.',
      memoryTrick: '💡 Thin = Fast exchange. Alveoli need FASTEST exchange → thinnest epithelium → Simple Squamous!',
      relatedConcepts: ['Alveolar structure', 'Respiratory membrane', 'Gas exchange mechanism'],
    },
  },

  // ─── Epithelial Tissue: Cuboidal ───
  {
    id: 'q3',
    topicId: 'bio-ch5-t1-s1-m2',
    text: 'Cuboidal epithelium with brush border is found in:',
    options: [
      'Proximal convoluted tubule of nephron',
      'Inner lining of blood vessels',
      'Fallopian tube',
      'Stomach lining',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    yearAsked: 2020,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 106',
    isPYQ: true,
    explanation: {
      correct: 'The proximal convoluted tubule (PCT) of the nephron is lined by cuboidal epithelium with a brush border (microvilli). These microvilli increase the surface area for reabsorption of nutrients, ions, and water from the glomerular filtrate.',
      whyWrong: [
        null,
        'Blood vessels are lined by simple squamous epithelium (endothelium), not cuboidal.',
        'The Fallopian tube is lined by ciliated columnar epithelium. Cilia help in the movement of the ovum.',
        'The stomach lining has simple columnar epithelium with mucus-secreting goblet cells.',
      ],
      ncertHighlight: 'Brush border (microvilli) on cuboidal cells in PCT = increased surface area for reabsorption. This is a key NCERT point.',
      memoryTrick: '💡 PCT = "Please Collect Things" → Proximal Convoluted Tubule reabsorbs things using its brush border!',
      relatedConcepts: ['Nephron structure', 'Reabsorption in kidney', 'Microvilli function'],
    },
  },

  // ─── Epithelial Tissue: Columnar ───
  {
    id: 'q4',
    topicId: 'bio-ch5-t1-s1-m3',
    text: 'Simple columnar epithelium is found lining the:',
    options: [
      'Blood vessels',
      'Skin surface',
      'Stomach and intestine',
      'Urinary bladder',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    yearAsked: 2018,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 106',
    isPYQ: true,
    explanation: {
      correct: 'Simple columnar epithelium lines the stomach and intestine. In the stomach, it secretes mucus for protection. In the intestine, it aids in absorption and secretion of digestive enzymes.',
      whyWrong: [
        'Blood vessels are lined by simple squamous epithelium (endothelium).',
        'The skin surface is covered by stratified squamous keratinized epithelium for protection.',
        null,
        'The urinary bladder is lined by transitional epithelium that can stretch when the bladder fills.',
      ],
      ncertHighlight: 'Columnar epithelium is modified in different regions: mucus-secreting in the stomach, absorptive with microvilli in the intestine.',
      memoryTrick: '💡 "Columns in the Gut" — Tall columnar cells stand like columns in your stomach and intestine, working hard to absorb and secrete!',
      comparison: {
        headers: ['Feature', 'Squamous', 'Cuboidal', 'Columnar'],
        rows: [
          ['Shape', 'Flat', 'Cube-like', 'Tall, pillar-like'],
          ['Main Function', 'Diffusion', 'Secretion', 'Absorption & Secretion'],
          ['Location', 'Blood vessels', 'Kidney tubules', 'Stomach, Intestine'],
        ],
      },
      relatedConcepts: ['Goblet cells', 'Intestinal villi', 'Mucus secretion'],
    },
  },

  // ─── Epithelial Tissue: Ciliated ───
  {
    id: 'q5',
    topicId: 'bio-ch5-t1-s1-m4',
    text: 'Ciliated epithelium is found in:',
    options: [
      'Bile duct',
      'Fallopian tubes',
      'Proximal convoluted tubule',
      'Stomach lining',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    yearAsked: 2017,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 107',
    isPYQ: true,
    explanation: {
      correct: 'Ciliated epithelium is found in the Fallopian tubes (oviducts), where the cilia beat rhythmically to help move the ovum from the ovary toward the uterus. It is also found in the trachea and bronchi.',
      whyWrong: [
        'The bile duct is lined by simple cuboidal/columnar epithelium, not ciliated.',
        null,
        'The PCT has cuboidal epithelium with brush border (microvilli), not cilia. Microvilli ≠ Cilia.',
        'The stomach lining has simple columnar epithelium that secretes mucus.',
      ],
      ncertHighlight: 'Key distinction: Cilia are for movement of substances (mucus, ovum), while Microvilli (brush border) are for absorption. Do NOT confuse them!',
      memoryTrick: '💡 "Cilia = Sweeper" — Cilia sweep things along! In Fallopian tubes they sweep the egg, in trachea they sweep mucus & dust upward.',
      comparison: {
        headers: ['Feature', 'Cilia', 'Microvilli (Brush Border)'],
        rows: [
          ['Structure', 'Longer, fewer, motile', 'Shorter, numerous, non-motile'],
          ['Function', 'Move substances along surface', 'Increase absorption area'],
          ['Location', 'Trachea, Fallopian tubes', 'PCT of kidney, Intestine'],
          ['Arrangement', '9+2 microtubule pattern', 'Core of actin filaments'],
        ],
      },
      relatedConcepts: ['Pseudostratified epithelium', 'Tracheal lining', 'Ovum transport'],
    },
  },

  // ─── Connective Tissue: Loose ───
  {
    id: 'q6',
    topicId: 'bio-ch5-t1-s2-m1',
    text: 'Mast cells are associated with which type of connective tissue?',
    options: [
      'Dense regular connective tissue',
      'Loose (areolar) connective tissue',
      'Adipose tissue',
      'Cartilage',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    yearAsked: 2022,
    ncertRef: 'NCERT Class 11, Chapter 7, Page 108',
    isPYQ: true,
    explanation: {
      correct: 'Mast cells are found in loose (areolar) connective tissue. They secrete histamine and serotonin during allergic reactions and inflammatory responses. Areolar tissue also contains fibroblasts, macrophages, and collagen fibers.',
      whyWrong: [
        'Dense regular connective tissue (found in tendons and ligaments) mainly contains tightly packed collagen fibers with fibroblasts.',
        null,
        'Adipose tissue is specialized for fat storage. Its main cells are adipocytes, not mast cells.',
        'Cartilage contains chondrocytes embedded in a solid matrix. Mast cells are not a feature of cartilage.',
      ],
      ncertHighlight: 'Areolar tissue is the most widely distributed connective tissue. It contains mast cells, macrophages, and fibroblasts — this is a frequently tested NCERT fact.',
      memoryTrick: '💡 "ALARM" — Areolar has Lots of Assorted Roaming Mast cells! It\'s the "packing material" of the body.',
      relatedConcepts: ['Histamine release', 'Inflammatory response', 'Types of connective tissue cells'],
    },
  },

  // ─── Physics: Distance vs Displacement ───
  {
    id: 'q7',
    topicId: 'phy-ch3-t1-s1',
    text: 'A person walks 40 m towards east, then 30 m towards north. The displacement of the person is:',
    options: [
      '70 m',
      '50 m',
      '35 m',
      '10 m',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    yearAsked: 2019,
    ncertRef: 'NCERT Class 11, Chapter 3, Page 42',
    isPYQ: false,
    explanation: {
      correct: 'Displacement is the shortest straight-line distance from the initial to the final position. Using the Pythagorean theorem: √(40² + 30²) = √(1600 + 900) = √2500 = 50 m. The direction is North-East (at angle tan⁻¹(30/40) ≈ 37° from East).',
      whyWrong: [
        '70 m is the total distance traveled (40 + 30), not the displacement. Distance ≠ Displacement.',
        null,
        '35 m is the arithmetic mean of 40 and 30, which has no physical significance here.',
        '10 m is the difference (40 − 30), which is incorrect for perpendicular paths.',
      ],
      ncertHighlight: 'Distance is scalar (total path length), Displacement is vector (shortest path). For perpendicular paths, use Pythagoras theorem.',
      memoryTrick: '💡 "3-4-5 Triangle" — Whenever you see 30 and 40 (or 3 and 4), the hypotenuse is 50 (or 5). This Pythagorean triplet appears frequently in NEET!',
      comparison: {
        headers: ['Property', 'Distance', 'Displacement'],
        rows: [
          ['Type', 'Scalar', 'Vector'],
          ['Value', 'Always positive', 'Can be zero or negative'],
          ['Path dependent?', 'Yes', 'No'],
          ['In this problem', '70 m', '50 m North-East'],
        ],
      },
      relatedConcepts: ['Vector addition', 'Pythagoras theorem', 'Scalar vs Vector'],
    },
  },

  // ─── Chemistry: Mole Concept ───
  {
    id: 'q8',
    topicId: 'chem-ch1-t3-s1',
    text: 'The number of molecules in 36 g of water (H₂O) is:',
    options: [
      '6.022 × 10²³',
      '12.044 × 10²³',
      '3.011 × 10²³',
      '18.066 × 10²³',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    yearAsked: 2020,
    ncertRef: 'NCERT Class 11, Chapter 1, Page 14',
    isPYQ: false,
    explanation: {
      correct: 'Molar mass of H₂O = 2(1) + 16 = 18 g/mol. Number of moles = 36/18 = 2 moles. Number of molecules = 2 × 6.022 × 10²³ = 12.044 × 10²³ molecules.',
      whyWrong: [
        '6.022 × 10²³ would be the answer for 18 g of water (1 mole), not 36 g.',
        null,
        '3.011 × 10²³ is half of Avogadro\'s number, which would correspond to 9 g of water (0.5 moles).',
        '18.066 × 10²³ would correspond to 3 moles (54 g), not 2 moles.',
      ],
      ncertHighlight: 'Always calculate: Moles = Given mass / Molar mass. Then multiply by Avogadro\'s number (6.022 × 10²³) to get the number of molecules.',
      memoryTrick: '💡 Step-by-step formula: Mass → Moles → Molecules. Think "M-M-M": Mass divided by Molar mass = Moles, Moles × NA = Molecules!',
      relatedConcepts: ['Avogadro\'s number', 'Molar mass calculation', 'Mole-molecule conversion'],
    },
  },

  // ─── Physics: F=ma ───
  {
    id: 'q9',
    topicId: 'phy-ch4-t2-s2',
    text: 'A force of 5 N acts on a body of mass 2 kg. The acceleration produced is:',
    options: [
      '10 m/s²',
      '2.5 m/s²',
      '7 m/s²',
      '0.4 m/s²',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    yearAsked: null,
    ncertRef: 'NCERT Class 11, Chapter 5, Page 96',
    isPYQ: false,
    explanation: {
      correct: 'Using Newton\'s Second Law: F = ma → a = F/m = 5/2 = 2.5 m/s². The direction of acceleration is the same as the direction of the applied force.',
      whyWrong: [
        '10 m/s² would be the answer if F = 20 N or m = 0.5 kg. Check your division.',
        null,
        '7 m/s² doesn\'t correspond to any meaningful calculation with these values.',
        '0.4 m/s² would be m/F (2/5), which is the inverse of the correct formula.',
      ],
      ncertHighlight: 'F = ma is the most fundamental equation in mechanics. Acceleration is directly proportional to force and inversely proportional to mass.',
      memoryTrick: '💡 "Force Makes Acceleration" — F = m × a. Rearrange for any unknown: a = F/m, m = F/a.',
      relatedConcepts: ['Newton\'s Laws', 'Impulse-Momentum theorem', 'Free body diagrams'],
    },
  },

  // ─── Chemistry: Bohr Model ───
  {
    id: 'q10',
    topicId: 'chem-ch2-t1-s3',
    text: 'According to Bohr\'s model, the energy of an electron in the nth orbit of hydrogen atom is given by:',
    options: [
      'Eₙ = −13.6/n eV',
      'Eₙ = −13.6/n² eV',
      'Eₙ = −13.6 × n² eV',
      'Eₙ = +13.6/n² eV',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    yearAsked: 2021,
    ncertRef: 'NCERT Class 11, Chapter 2, Page 48',
    isPYQ: true,
    explanation: {
      correct: 'In Bohr\'s model, the energy of an electron in the nth orbit is Eₙ = −13.6/n² eV (for hydrogen). The negative sign indicates that the electron is bound to the nucleus. As n increases, energy becomes less negative (closer to zero).',
      whyWrong: [
        '−13.6/n would not have the correct dependence on the principal quantum number. The energy depends on n², not n.',
        null,
        '−13.6 × n² would mean energy becomes more negative with higher orbits, which contradicts the fact that outer orbits have higher (less negative) energy.',
        '+13.6/n² would imply the electron is free (positive energy), but bound electrons always have negative total energy.',
      ],
      ncertHighlight: 'Eₙ = −13.6 Z²/n² eV is the general formula. For hydrogen, Z = 1, so Eₙ = −13.6/n². Ground state (n=1) energy = −13.6 eV.',
      memoryTrick: '💡 "Negative Thirteen Point Six over n-Squared" — remember it as a fraction: the energy gets LESS negative (higher) as you go to outer orbits.',
      relatedConcepts: ['Hydrogen spectrum', 'Energy levels', 'Ionization energy'],
    },
  },
];

export default questions;

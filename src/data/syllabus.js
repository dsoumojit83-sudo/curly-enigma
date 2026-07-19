/**
 * NCERT Syllabus Hierarchy for NEET
 * Structure: Subject -> Chapter -> Topic -> Subtopic -> Micro-topic
 *
 * Each node has:
 * - id: unique identifier
 * - name: display name
 * - children: nested sub-topics (if any)
 * - questionCount: number of questions available
 */

const syllabus = {
  biology: {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: 'biology',
    chapters: [
      {
        id: 'bio-ch1',
        name: 'The Living World',
        questionCount: 45,
        children: [
          {
            id: 'bio-ch1-t1',
            name: 'What is Living?',
            questionCount: 12,
            children: [
              { id: 'bio-ch1-t1-s1', name: 'Characteristics of Living Organisms', questionCount: 6 },
              { id: 'bio-ch1-t1-s2', name: 'Growth, Reproduction & Metabolism', questionCount: 6 },
            ],
          },
          {
            id: 'bio-ch1-t2',
            name: 'Taxonomical Aids',
            questionCount: 15,
            children: [
              { id: 'bio-ch1-t2-s1', name: 'Herbarium', questionCount: 4 },
              { id: 'bio-ch1-t2-s2', name: 'Botanical Gardens', questionCount: 3 },
              { id: 'bio-ch1-t2-s3', name: 'Museum & Zoological Parks', questionCount: 4 },
              { id: 'bio-ch1-t2-s4', name: 'Keys: Taxonomic Keys', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch1-t3',
            name: 'Taxonomy & Systematics',
            questionCount: 18,
            children: [
              { id: 'bio-ch1-t3-s1', name: 'Classification & Nomenclature', questionCount: 8 },
              { id: 'bio-ch1-t3-s2', name: 'Binomial Nomenclature Rules', questionCount: 5 },
              { id: 'bio-ch1-t3-s3', name: 'Taxonomic Hierarchy', questionCount: 5 },
            ],
          },
        ],
      },
      {
        id: 'bio-ch2',
        name: 'Biological Classification',
        questionCount: 60,
        children: [
          {
            id: 'bio-ch2-t1',
            name: 'Kingdom Monera',
            questionCount: 20,
            children: [
              { id: 'bio-ch2-t1-s1', name: 'Bacteria: Shape & Structure', questionCount: 8 },
              { id: 'bio-ch2-t1-s2', name: 'Archaebacteria', questionCount: 4 },
              { id: 'bio-ch2-t1-s3', name: 'Eubacteria', questionCount: 4 },
              { id: 'bio-ch2-t1-s4', name: 'Cyanobacteria (Blue-Green Algae)', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch2-t2',
            name: 'Kingdom Protista',
            questionCount: 15,
            children: [
              { id: 'bio-ch2-t2-s1', name: 'Chrysophytes (Diatoms)', questionCount: 4 },
              { id: 'bio-ch2-t2-s2', name: 'Dinoflagellates', questionCount: 3 },
              { id: 'bio-ch2-t2-s3', name: 'Euglenoids', questionCount: 4 },
              { id: 'bio-ch2-t2-s4', name: 'Slime Moulds', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch2-t3',
            name: 'Kingdom Fungi',
            questionCount: 15,
            children: [
              { id: 'bio-ch2-t3-s1', name: 'Phycomycetes', questionCount: 4 },
              { id: 'bio-ch2-t3-s2', name: 'Ascomycetes', questionCount: 4 },
              { id: 'bio-ch2-t3-s3', name: 'Basidiomycetes', questionCount: 4 },
              { id: 'bio-ch2-t3-s4', name: 'Deuteromycetes', questionCount: 3 },
            ],
          },
          {
            id: 'bio-ch2-t4',
            name: 'Viruses, Viroids & Lichens',
            questionCount: 10,
            children: [
              { id: 'bio-ch2-t4-s1', name: 'Virus Structure & Types', questionCount: 4 },
              { id: 'bio-ch2-t4-s2', name: 'Viroids', questionCount: 3 },
              { id: 'bio-ch2-t4-s3', name: 'Lichens', questionCount: 3 },
            ],
          },
        ],
      },
      {
        id: 'bio-ch3',
        name: 'Plant Kingdom',
        questionCount: 55,
        children: [
          {
            id: 'bio-ch3-t1',
            name: 'Algae',
            questionCount: 18,
            children: [
              { id: 'bio-ch3-t1-s1', name: 'Chlorophyceae (Green Algae)', questionCount: 6 },
              { id: 'bio-ch3-t1-s2', name: 'Phaeophyceae (Brown Algae)', questionCount: 6 },
              { id: 'bio-ch3-t1-s3', name: 'Rhodophyceae (Red Algae)', questionCount: 6 },
            ],
          },
          {
            id: 'bio-ch3-t2',
            name: 'Bryophytes',
            questionCount: 12,
            children: [
              { id: 'bio-ch3-t2-s1', name: 'Liverworts', questionCount: 4 },
              { id: 'bio-ch3-t2-s2', name: 'Mosses', questionCount: 4 },
              { id: 'bio-ch3-t2-s3', name: 'Life Cycle of Bryophytes', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch3-t3',
            name: 'Pteridophytes',
            questionCount: 10,
            children: [
              { id: 'bio-ch3-t3-s1', name: 'Classification of Pteridophytes', questionCount: 5 },
              { id: 'bio-ch3-t3-s2', name: 'Life Cycle & Alternation of Generations', questionCount: 5 },
            ],
          },
          {
            id: 'bio-ch3-t4',
            name: 'Gymnosperms',
            questionCount: 8,
            children: [
              { id: 'bio-ch3-t4-s1', name: 'Characteristics & Examples', questionCount: 4 },
              { id: 'bio-ch3-t4-s2', name: 'Life Cycle of Pinus', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch3-t5',
            name: 'Angiosperms',
            questionCount: 7,
            children: [
              { id: 'bio-ch3-t5-s1', name: 'Monocots vs Dicots', questionCount: 4 },
              { id: 'bio-ch3-t5-s3', name: 'Double Fertilization', questionCount: 3 },
            ],
          },
        ],
      },
      {
        id: 'bio-ch4',
        name: 'Animal Kingdom',
        questionCount: 70,
        children: [
          {
            id: 'bio-ch4-t1',
            name: 'Basis of Classification',
            questionCount: 12,
            children: [
              { id: 'bio-ch4-t1-s1', name: 'Levels of Organisation', questionCount: 4 },
              { id: 'bio-ch4-t1-s2', name: 'Symmetry', questionCount: 4 },
              { id: 'bio-ch4-t1-s3', name: 'Coelom & Segmentation', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch4-t2',
            name: 'Phylum Porifera',
            questionCount: 8,
            children: [
              { id: 'bio-ch4-t2-s1', name: 'Canal System & Spicules', questionCount: 4 },
              { id: 'bio-ch4-t2-s2', name: 'Examples of Sponges', questionCount: 4 },
            ],
          },
          {
            id: 'bio-ch4-t3',
            name: 'Phylum Cnidaria',
            questionCount: 10,
            children: [
              { id: 'bio-ch4-t3-s1', name: 'Cnidocytes & Body Forms', questionCount: 5 },
              { id: 'bio-ch4-t3-s2', name: 'Examples (Hydra, Jellyfish, Corals)', questionCount: 5 },
            ],
          },
          {
            id: 'bio-ch4-t4',
            name: 'Phylum Chordata',
            questionCount: 20,
            children: [
              { id: 'bio-ch4-t4-s1', name: 'Class Pisces', questionCount: 5 },
              { id: 'bio-ch4-t4-s2', name: 'Class Amphibia', questionCount: 5 },
              { id: 'bio-ch4-t4-s3', name: 'Class Reptilia', questionCount: 5 },
              { id: 'bio-ch4-t4-s4', name: 'Class Mammalia', questionCount: 5 },
            ],
          },
        ],
      },
      {
        id: 'bio-ch5',
        name: 'Structural Organisation in Animals',
        questionCount: 50,
        children: [
          {
            id: 'bio-ch5-t1',
            name: 'Animal Tissues',
            questionCount: 30,
            children: [
              {
                id: 'bio-ch5-t1-s1',
                name: 'Epithelial Tissue',
                questionCount: 15,
                children: [
                  { id: 'bio-ch5-t1-s1-m1', name: 'Squamous Epithelium', questionCount: 4 },
                  { id: 'bio-ch5-t1-s1-m2', name: 'Cuboidal Epithelium', questionCount: 4 },
                  { id: 'bio-ch5-t1-s1-m3', name: 'Columnar Epithelium', questionCount: 4 },
                  { id: 'bio-ch5-t1-s1-m4', name: 'Ciliated Epithelium', questionCount: 3 },
                ],
              },
              {
                id: 'bio-ch5-t1-s2',
                name: 'Connective Tissue',
                questionCount: 10,
                children: [
                  { id: 'bio-ch5-t1-s2-m1', name: 'Loose Connective Tissue', questionCount: 3 },
                  { id: 'bio-ch5-t1-s2-m2', name: 'Dense Connective Tissue', questionCount: 3 },
                  { id: 'bio-ch5-t1-s2-m3', name: 'Cartilage & Bone', questionCount: 4 },
                ],
              },
              {
                id: 'bio-ch5-t1-s3',
                name: 'Muscle Tissue',
                questionCount: 5,
                children: [
                  { id: 'bio-ch5-t1-s3-m1', name: 'Skeletal Muscle', questionCount: 2 },
                  { id: 'bio-ch5-t1-s3-m2', name: 'Smooth Muscle', questionCount: 1 },
                  { id: 'bio-ch5-t1-s3-m3', name: 'Cardiac Muscle', questionCount: 2 },
                ],
              },
            ],
          },
          {
            id: 'bio-ch5-t2',
            name: 'Organ & Organ Systems',
            questionCount: 10,
            children: [
              { id: 'bio-ch5-t2-s1', name: 'Morphology of Earthworm', questionCount: 5 },
              { id: 'bio-ch5-t2-s2', name: 'Morphology of Cockroach', questionCount: 5 },
            ],
          },
          {
            id: 'bio-ch5-t3',
            name: 'Morphology of Frog',
            questionCount: 10,
            children: [
              { id: 'bio-ch5-t3-s1', name: 'External & Internal Anatomy', questionCount: 5 },
              { id: 'bio-ch5-t3-s2', name: 'Digestive & Reproductive System', questionCount: 5 },
            ],
          },
        ],
      },
    ],
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: 'physics',
    chapters: [
      {
        id: 'phy-ch1',
        name: 'Physical World',
        questionCount: 20,
        children: [
          {
            id: 'phy-ch1-t1',
            name: 'Scope & Excitement of Physics',
            questionCount: 8,
            children: [
              { id: 'phy-ch1-t1-s1', name: 'Fundamental Forces in Nature', questionCount: 4 },
              { id: 'phy-ch1-t1-s2', name: 'Conservation Laws', questionCount: 4 },
            ],
          },
          {
            id: 'phy-ch1-t2',
            name: 'Physics & Technology',
            questionCount: 12,
            children: [
              { id: 'phy-ch1-t2-s1', name: 'Nature of Physical Laws', questionCount: 6 },
              { id: 'phy-ch1-t2-s2', name: 'Unification of Forces', questionCount: 6 },
            ],
          },
        ],
      },
      {
        id: 'phy-ch2',
        name: 'Units and Measurements',
        questionCount: 40,
        children: [
          {
            id: 'phy-ch2-t1',
            name: 'SI Units',
            questionCount: 12,
            children: [
              { id: 'phy-ch2-t1-s1', name: 'Fundamental & Derived Units', questionCount: 6 },
              { id: 'phy-ch2-t1-s2', name: 'System of Units', questionCount: 6 },
            ],
          },
          {
            id: 'phy-ch2-t2',
            name: 'Dimensional Analysis',
            questionCount: 15,
            children: [
              { id: 'phy-ch2-t2-s1', name: 'Dimensional Formulae', questionCount: 5 },
              { id: 'phy-ch2-t2-s2', name: 'Dimensional Equations', questionCount: 5 },
              { id: 'phy-ch2-t2-s3', name: 'Applications of Dimensional Analysis', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch2-t3',
            name: 'Errors in Measurement',
            questionCount: 13,
            children: [
              { id: 'phy-ch2-t3-s1', name: 'Systematic Errors', questionCount: 4 },
              { id: 'phy-ch2-t3-s2', name: 'Random Errors', questionCount: 4 },
              { id: 'phy-ch2-t3-s3', name: 'Significant Figures', questionCount: 5 },
            ],
          },
        ],
      },
      {
        id: 'phy-ch3',
        name: 'Motion in a Straight Line',
        questionCount: 45,
        children: [
          {
            id: 'phy-ch3-t1',
            name: 'Position, Path Length & Displacement',
            questionCount: 10,
            children: [
              { id: 'phy-ch3-t1-s1', name: 'Distance vs Displacement', questionCount: 5 },
              { id: 'phy-ch3-t1-s2', name: 'Frame of Reference', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch3-t2',
            name: 'Speed & Velocity',
            questionCount: 15,
            children: [
              { id: 'phy-ch3-t2-s1', name: 'Average & Instantaneous Speed', questionCount: 5 },
              { id: 'phy-ch3-t2-s2', name: 'Average & Instantaneous Velocity', questionCount: 5 },
              { id: 'phy-ch3-t2-s3', name: 'Speed vs Velocity', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch3-t3',
            name: 'Equations of Motion',
            questionCount: 20,
            children: [
              { id: 'phy-ch3-t3-s1', name: 'First Equation (v = u + at)', questionCount: 5 },
              { id: 'phy-ch3-t3-s2', name: 'Second Equation (s = ut + ½at²)', questionCount: 5 },
              { id: 'phy-ch3-t3-s3', name: 'Third Equation (v² = u² + 2as)', questionCount: 5 },
              { id: 'phy-ch3-t3-s4', name: 'Free Fall Problems', questionCount: 5 },
            ],
          },
        ],
      },
      {
        id: 'phy-ch4',
        name: 'Laws of Motion',
        questionCount: 50,
        children: [
          {
            id: 'phy-ch4-t1',
            name: "Newton's First Law",
            questionCount: 10,
            children: [
              { id: 'phy-ch4-t1-s1', name: 'Inertia & Its Types', questionCount: 5 },
              { id: 'phy-ch4-t1-s2', name: 'Galileo\'s Law of Inertia', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch4-t2',
            name: "Newton's Second Law",
            questionCount: 15,
            children: [
              { id: 'phy-ch4-t2-s1', name: 'Force and Momentum', questionCount: 5 },
              { id: 'phy-ch4-t2-s2', name: 'F = ma Problems', questionCount: 5 },
              { id: 'phy-ch4-t2-s3', name: 'Impulse', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch4-t3',
            name: "Newton's Third Law",
            questionCount: 10,
            children: [
              { id: 'phy-ch4-t3-s1', name: 'Action-Reaction Pairs', questionCount: 5 },
              { id: 'phy-ch4-t3-s2', name: 'Applications & Examples', questionCount: 5 },
            ],
          },
          {
            id: 'phy-ch4-t4',
            name: 'Friction',
            questionCount: 15,
            children: [
              { id: 'phy-ch4-t4-s1', name: 'Types of Friction', questionCount: 5 },
              { id: 'phy-ch4-t4-s2', name: 'Laws of Friction', questionCount: 5 },
              { id: 'phy-ch4-t4-s3', name: 'Rolling Friction & Circular Motion', questionCount: 5 },
            ],
          },
        ],
      },
    ],
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    color: 'chemistry',
    chapters: [
      {
        id: 'chem-ch1',
        name: 'Some Basic Concepts of Chemistry',
        questionCount: 50,
        children: [
          {
            id: 'chem-ch1-t1',
            name: 'Importance of Chemistry',
            questionCount: 8,
            children: [
              { id: 'chem-ch1-t1-s1', name: 'Chemistry in Everyday Life', questionCount: 4 },
              { id: 'chem-ch1-t1-s2', name: 'Nature of Matter', questionCount: 4 },
            ],
          },
          {
            id: 'chem-ch1-t2',
            name: 'Laws of Chemical Combination',
            questionCount: 15,
            children: [
              { id: 'chem-ch1-t2-s1', name: 'Law of Conservation of Mass', questionCount: 4 },
              { id: 'chem-ch1-t2-s2', name: 'Law of Definite Proportions', questionCount: 4 },
              { id: 'chem-ch1-t2-s3', name: 'Law of Multiple Proportions', questionCount: 4 },
              { id: 'chem-ch1-t2-s4', name: "Gay Lussac's Law & Avogadro's Law", questionCount: 3 },
            ],
          },
          {
            id: 'chem-ch1-t3',
            name: 'Mole Concept',
            questionCount: 20,
            children: [
              { id: 'chem-ch1-t3-s1', name: 'Molar Mass & Moles', questionCount: 5 },
              { id: 'chem-ch1-t3-s2', name: 'Percentage Composition', questionCount: 5 },
              { id: 'chem-ch1-t3-s3', name: 'Empirical & Molecular Formula', questionCount: 5 },
              { id: 'chem-ch1-t3-s4', name: 'Stoichiometry & Limiting Reagent', questionCount: 5 },
            ],
          },
        ],
      },
      {
        id: 'chem-ch2',
        name: 'Structure of Atom',
        questionCount: 55,
        children: [
          {
            id: 'chem-ch2-t1',
            name: 'Atomic Models',
            questionCount: 18,
            children: [
              { id: 'chem-ch2-t1-s1', name: "Thomson's Model", questionCount: 3 },
              { id: 'chem-ch2-t1-s2', name: "Rutherford's Model", questionCount: 5 },
              { id: 'chem-ch2-t1-s3', name: "Bohr's Model", questionCount: 5 },
              { id: 'chem-ch2-t1-s4', name: 'Quantum Mechanical Model', questionCount: 5 },
            ],
          },
          {
            id: 'chem-ch2-t2',
            name: 'Quantum Numbers',
            questionCount: 15,
            children: [
              { id: 'chem-ch2-t2-s1', name: 'Principal Quantum Number (n)', questionCount: 4 },
              { id: 'chem-ch2-t2-s2', name: 'Azimuthal Quantum Number (l)', questionCount: 4 },
              { id: 'chem-ch2-t2-s3', name: 'Magnetic Quantum Number (ml)', questionCount: 4 },
              { id: 'chem-ch2-t2-s4', name: 'Spin Quantum Number (ms)', questionCount: 3 },
            ],
          },
          {
            id: 'chem-ch2-t3',
            name: 'Electronic Configuration',
            questionCount: 22,
            children: [
              { id: 'chem-ch2-t3-s1', name: 'Aufbau Principle', questionCount: 5 },
              { id: 'chem-ch2-t3-s2', name: "Pauli's Exclusion Principle", questionCount: 5 },
              { id: 'chem-ch2-t3-s3', name: "Hund's Rule of Maximum Multiplicity", questionCount: 6 },
              { id: 'chem-ch2-t3-s4', name: 'Anomalous Configurations (Cr, Cu)', questionCount: 6 },
            ],
          },
        ],
      },
      {
        id: 'chem-ch3',
        name: 'Chemical Bonding and Molecular Structure',
        questionCount: 60,
        children: [
          {
            id: 'chem-ch3-t1',
            name: 'Ionic Bond',
            questionCount: 15,
            children: [
              { id: 'chem-ch3-t1-s1', name: 'Lattice Energy', questionCount: 5 },
              { id: 'chem-ch3-t1-s2', name: 'Born-Haber Cycle', questionCount: 5 },
              { id: 'chem-ch3-t1-s3', name: 'Properties of Ionic Compounds', questionCount: 5 },
            ],
          },
          {
            id: 'chem-ch3-t2',
            name: 'Covalent Bond',
            questionCount: 20,
            children: [
              { id: 'chem-ch3-t2-s1', name: 'Lewis Dot Structures', questionCount: 5 },
              { id: 'chem-ch3-t2-s2', name: 'Formal Charge', questionCount: 5 },
              { id: 'chem-ch3-t2-s3', name: 'Resonance', questionCount: 5 },
              { id: 'chem-ch3-t2-s4', name: 'Polarity of Bonds', questionCount: 5 },
            ],
          },
          {
            id: 'chem-ch3-t3',
            name: 'VSEPR Theory',
            questionCount: 15,
            children: [
              { id: 'chem-ch3-t3-s1', name: 'Linear & Trigonal Planar', questionCount: 5 },
              { id: 'chem-ch3-t3-s2', name: 'Tetrahedral & Octahedral', questionCount: 5 },
              { id: 'chem-ch3-t3-s3', name: 'Effect of Lone Pairs', questionCount: 5 },
            ],
          },
          {
            id: 'chem-ch3-t4',
            name: 'Hybridization',
            questionCount: 10,
            children: [
              { id: 'chem-ch3-t4-s1', name: 'sp, sp², sp³ Hybridization', questionCount: 5 },
              { id: 'chem-ch3-t4-s2', name: 'sp³d, sp³d² Hybridization', questionCount: 5 },
            ],
          },
        ],
      },
    ],
  },
};

export default syllabus;

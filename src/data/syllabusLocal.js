/**
 * COMPLETE NCERT Syllabus for NEET
 * All 96 chapters across Biology, Physics, Chemistry
 * Structure: Subject -> Chapter -> Topic -> Subtopic -> Micro-topic
 */

const syllabus = {
  biology: {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: 'biology',
    chapters: [
      // ─── CLASS 11 ───
      {
        id: 'bio-1', name: 'The Living World', class: 11, questionCount: 45,
        children: [
          { id: 'bio-1-1', name: 'What is Living?', questionCount: 15, children: [
            { id: 'bio-1-1-1', name: 'Characteristics of Living Organisms', questionCount: 5 },
            { id: 'bio-1-1-2', name: 'Growth & Reproduction', questionCount: 5 },
            { id: 'bio-1-1-3', name: 'Metabolism & Consciousness', questionCount: 5 },
          ]},
          { id: 'bio-1-2', name: 'Biodiversity', questionCount: 10, children: [
            { id: 'bio-1-2-1', name: 'Number of Species Known', questionCount: 5 },
            { id: 'bio-1-2-2', name: 'Nomenclature Rules', questionCount: 5 },
          ]},
          { id: 'bio-1-3', name: 'Taxonomic Categories', questionCount: 10, children: [
            { id: 'bio-1-3-1', name: 'Taxonomic Hierarchy', questionCount: 5 },
            { id: 'bio-1-3-2', name: 'Species to Kingdom', questionCount: 5 },
          ]},
          { id: 'bio-1-4', name: 'Taxonomical Aids', questionCount: 10, children: [
            { id: 'bio-1-4-1', name: 'Herbarium & Botanical Gardens', questionCount: 5 },
            { id: 'bio-1-4-2', name: 'Museum, Keys & Flora', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-2', name: 'Biological Classification', class: 11, questionCount: 60,
        children: [
          { id: 'bio-2-1', name: 'Kingdom Monera', questionCount: 20, children: [
            { id: 'bio-2-1-1', name: 'Bacteria: Shape & Structure', questionCount: 5 },
            { id: 'bio-2-1-2', name: 'Archaebacteria', questionCount: 5 },
            { id: 'bio-2-1-3', name: 'Eubacteria & Cyanobacteria', questionCount: 5 },
            { id: 'bio-2-1-4', name: 'Mycoplasma', questionCount: 5 },
          ]},
          { id: 'bio-2-2', name: 'Kingdom Protista', questionCount: 15, children: [
            { id: 'bio-2-2-1', name: 'Chrysophytes & Dinoflagellates', questionCount: 5 },
            { id: 'bio-2-2-2', name: 'Euglenoids & Slime Moulds', questionCount: 5 },
            { id: 'bio-2-2-3', name: 'Protozoans', questionCount: 5 },
          ]},
          { id: 'bio-2-3', name: 'Kingdom Fungi', questionCount: 15, children: [
            { id: 'bio-2-3-1', name: 'Phycomycetes & Ascomycetes', questionCount: 5 },
            { id: 'bio-2-3-2', name: 'Basidiomycetes & Deuteromycetes', questionCount: 5 },
            { id: 'bio-2-3-3', name: 'Lichens', questionCount: 5 },
          ]},
          { id: 'bio-2-4', name: 'Viruses, Viroids & Prions', questionCount: 10, children: [
            { id: 'bio-2-4-1', name: 'Virus Structure & TMV', questionCount: 5 },
            { id: 'bio-2-4-2', name: 'Viroids & Prions', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-3', name: 'Plant Kingdom', class: 11, questionCount: 55,
        children: [
          { id: 'bio-3-1', name: 'Algae', questionCount: 18, children: [
            { id: 'bio-3-1-1', name: 'Chlorophyceae (Green Algae)', questionCount: 6 },
            { id: 'bio-3-1-2', name: 'Phaeophyceae (Brown Algae)', questionCount: 6 },
            { id: 'bio-3-1-3', name: 'Rhodophyceae (Red Algae)', questionCount: 6 },
          ]},
          { id: 'bio-3-2', name: 'Bryophytes', questionCount: 12, children: [
            { id: 'bio-3-2-1', name: 'Liverworts & Mosses', questionCount: 6 },
            { id: 'bio-3-2-2', name: 'Life Cycle of Bryophytes', questionCount: 6 },
          ]},
          { id: 'bio-3-3', name: 'Pteridophytes', questionCount: 10, children: [
            { id: 'bio-3-3-1', name: 'Classification & Examples', questionCount: 5 },
            { id: 'bio-3-3-2', name: 'Alternation of Generations', questionCount: 5 },
          ]},
          { id: 'bio-3-4', name: 'Gymnosperms & Angiosperms', questionCount: 15, children: [
            { id: 'bio-3-4-1', name: 'Gymnosperms: Characteristics', questionCount: 5 },
            { id: 'bio-3-4-2', name: 'Angiosperms: Monocots vs Dicots', questionCount: 5 },
            { id: 'bio-3-4-3', name: 'Plant Life Cycles', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-4', name: 'Animal Kingdom', class: 11, questionCount: 70,
        children: [
          { id: 'bio-4-1', name: 'Basis of Classification', questionCount: 12, children: [
            { id: 'bio-4-1-1', name: 'Levels of Organisation & Symmetry', questionCount: 6 },
            { id: 'bio-4-1-2', name: 'Coelom, Segmentation & Notochord', questionCount: 6 },
          ]},
          { id: 'bio-4-2', name: 'Non-Chordata', questionCount: 30, children: [
            { id: 'bio-4-2-1', name: 'Porifera & Cnidaria', questionCount: 8 },
            { id: 'bio-4-2-2', name: 'Ctenophora & Platyhelminthes', questionCount: 6 },
            { id: 'bio-4-2-3', name: 'Nematoda & Annelida', questionCount: 8 },
            { id: 'bio-4-2-4', name: 'Arthropoda & Mollusca', questionCount: 8 },
          ]},
          { id: 'bio-4-3', name: 'Chordata', questionCount: 28, children: [
            { id: 'bio-4-3-1', name: 'Protochordata', questionCount: 4 },
            { id: 'bio-4-3-2', name: 'Pisces & Amphibia', questionCount: 8 },
            { id: 'bio-4-3-3', name: 'Reptilia & Aves', questionCount: 8 },
            { id: 'bio-4-3-4', name: 'Mammalia', questionCount: 8 },
          ]},
        ],
      },
      {
        id: 'bio-5', name: 'Morphology of Flowering Plants', class: 11, questionCount: 50,
        children: [
          { id: 'bio-5-1', name: 'Root System', questionCount: 10, children: [
            { id: 'bio-5-1-1', name: 'Types of Roots', questionCount: 5 },
            { id: 'bio-5-1-2', name: 'Root Modifications', questionCount: 5 },
          ]},
          { id: 'bio-5-2', name: 'Stem', questionCount: 10, children: [
            { id: 'bio-5-2-1', name: 'Stem Characteristics', questionCount: 5 },
            { id: 'bio-5-2-2', name: 'Stem Modifications', questionCount: 5 },
          ]},
          { id: 'bio-5-3', name: 'Leaf', questionCount: 10, children: [
            { id: 'bio-5-3-1', name: 'Venation & Phyllotaxy', questionCount: 5 },
            { id: 'bio-5-3-2', name: 'Leaf Modifications', questionCount: 5 },
          ]},
          { id: 'bio-5-4', name: 'Flower, Fruit & Seed', questionCount: 20, children: [
            { id: 'bio-5-4-1', name: 'Flower Parts & Floral Formula', questionCount: 7 },
            { id: 'bio-5-4-2', name: 'Types of Fruits', questionCount: 7 },
            { id: 'bio-5-4-3', name: 'Seed Structure', questionCount: 6 },
          ]},
        ],
      },
      {
        id: 'bio-6', name: 'Anatomy of Flowering Plants', class: 11, questionCount: 45,
        children: [
          { id: 'bio-6-1', name: 'Tissue System', questionCount: 20, children: [
            { id: 'bio-6-1-1', name: 'Meristematic Tissues', questionCount: 5 },
            { id: 'bio-6-1-2', name: 'Simple Permanent Tissues', questionCount: 5 },
            { id: 'bio-6-1-3', name: 'Complex Permanent Tissues', questionCount: 5 },
            { id: 'bio-6-1-4', name: 'Epidermis & Vascular Bundles', questionCount: 5 },
          ]},
          { id: 'bio-6-2', name: 'Anatomy of Monocot & Dicot', questionCount: 15, children: [
            { id: 'bio-6-2-1', name: 'Dicot & Monocot Root', questionCount: 5 },
            { id: 'bio-6-2-2', name: 'Dicot & Monocot Stem', questionCount: 5 },
            { id: 'bio-6-2-3', name: 'Dicot & Monocot Leaf', questionCount: 5 },
          ]},
          { id: 'bio-6-3', name: 'Secondary Growth', questionCount: 10, children: [
            { id: 'bio-6-3-1', name: 'Vascular Cambium Activity', questionCount: 5 },
            { id: 'bio-6-3-2', name: 'Heartwood & Sapwood', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-7', name: 'Structural Organisation in Animals', class: 11, questionCount: 55,
        children: [
          { id: 'bio-7-1', name: 'Animal Tissues', questionCount: 30, children: [
            { id: 'bio-7-1-1', name: 'Epithelial Tissue', questionCount: 12, children: [
              { id: 'bio-7-1-1-1', name: 'Squamous Epithelium', questionCount: 3 },
              { id: 'bio-7-1-1-2', name: 'Cuboidal Epithelium', questionCount: 3 },
              { id: 'bio-7-1-1-3', name: 'Columnar Epithelium', questionCount: 3 },
              { id: 'bio-7-1-1-4', name: 'Ciliated & Glandular Epithelium', questionCount: 3 },
            ]},
            { id: 'bio-7-1-2', name: 'Connective Tissue', questionCount: 10, children: [
              { id: 'bio-7-1-2-1', name: 'Loose & Dense Connective', questionCount: 4 },
              { id: 'bio-7-1-2-2', name: 'Cartilage & Bone', questionCount: 3 },
              { id: 'bio-7-1-2-3', name: 'Blood & Lymph', questionCount: 3 },
            ]},
            { id: 'bio-7-1-3', name: 'Muscle & Neural Tissue', questionCount: 8, children: [
              { id: 'bio-7-1-3-1', name: 'Skeletal, Smooth & Cardiac Muscle', questionCount: 4 },
              { id: 'bio-7-1-3-2', name: 'Neurons & Neuroglia', questionCount: 4 },
            ]},
          ]},
          { id: 'bio-7-2', name: 'Cockroach Morphology & Anatomy', questionCount: 15, children: [
            { id: 'bio-7-2-1', name: 'External Morphology', questionCount: 5 },
            { id: 'bio-7-2-2', name: 'Digestive & Respiratory System', questionCount: 5 },
            { id: 'bio-7-2-3', name: 'Circulatory & Reproductive System', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-8', name: 'Cell: The Unit of Life', class: 11, questionCount: 55,
        children: [
          { id: 'bio-8-1', name: 'Cell Theory & Types', questionCount: 10, children: [
            { id: 'bio-8-1-1', name: 'Prokaryotic vs Eukaryotic', questionCount: 5 },
            { id: 'bio-8-1-2', name: 'Plant Cell vs Animal Cell', questionCount: 5 },
          ]},
          { id: 'bio-8-2', name: 'Cell Organelles', questionCount: 30, children: [
            { id: 'bio-8-2-1', name: 'Cell Membrane & Cell Wall', questionCount: 5 },
            { id: 'bio-8-2-2', name: 'ER, Golgi & Lysosomes', questionCount: 8 },
            { id: 'bio-8-2-3', name: 'Mitochondria & Plastids', questionCount: 8 },
            { id: 'bio-8-2-4', name: 'Ribosomes & Cytoskeleton', questionCount: 5 },
            { id: 'bio-8-2-5', name: 'Nucleus & Chromosomes', questionCount: 4 },
          ]},
          { id: 'bio-8-3', name: 'Centrosome, Cilia & Flagella', questionCount: 15, children: [
            { id: 'bio-8-3-1', name: 'Centrosome & Centrioles', questionCount: 5 },
            { id: 'bio-8-3-2', name: 'Cilia & Flagella: 9+2 Pattern', questionCount: 5 },
            { id: 'bio-8-3-3', name: 'Microbodies: Peroxisomes', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-9', name: 'Biomolecules', class: 11, questionCount: 50,
        children: [
          { id: 'bio-9-1', name: 'Carbohydrates', questionCount: 10, children: [
            { id: 'bio-9-1-1', name: 'Mono, Di & Polysaccharides', questionCount: 5 },
            { id: 'bio-9-1-2', name: 'Structural & Storage Polysaccharides', questionCount: 5 },
          ]},
          { id: 'bio-9-2', name: 'Proteins', questionCount: 12, children: [
            { id: 'bio-9-2-1', name: 'Amino Acids & Peptide Bonds', questionCount: 6 },
            { id: 'bio-9-2-2', name: 'Primary to Quaternary Structure', questionCount: 6 },
          ]},
          { id: 'bio-9-3', name: 'Lipids & Nucleic Acids', questionCount: 12, children: [
            { id: 'bio-9-3-1', name: 'Fatty Acids & Lipid Types', questionCount: 6 },
            { id: 'bio-9-3-2', name: 'DNA vs RNA Structure', questionCount: 6 },
          ]},
          { id: 'bio-9-4', name: 'Enzymes', questionCount: 16, children: [
            { id: 'bio-9-4-1', name: 'Enzyme Classification', questionCount: 5 },
            { id: 'bio-9-4-2', name: 'Enzyme Action & Factors', questionCount: 6 },
            { id: 'bio-9-4-3', name: 'Inhibitors & Cofactors', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-10', name: 'Cell Cycle and Cell Division', class: 11, questionCount: 45,
        children: [
          { id: 'bio-10-1', name: 'Cell Cycle', questionCount: 10, children: [
            { id: 'bio-10-1-1', name: 'Interphase: G1, S, G2', questionCount: 5 },
            { id: 'bio-10-1-2', name: 'M Phase Overview', questionCount: 5 },
          ]},
          { id: 'bio-10-2', name: 'Mitosis', questionCount: 15, children: [
            { id: 'bio-10-2-1', name: 'Prophase & Metaphase', questionCount: 5 },
            { id: 'bio-10-2-2', name: 'Anaphase & Telophase', questionCount: 5 },
            { id: 'bio-10-2-3', name: 'Cytokinesis', questionCount: 5 },
          ]},
          { id: 'bio-10-3', name: 'Meiosis', questionCount: 20, children: [
            { id: 'bio-10-3-1', name: 'Meiosis I: Reduction Division', questionCount: 7 },
            { id: 'bio-10-3-2', name: 'Meiosis II: Equational Division', questionCount: 7 },
            { id: 'bio-10-3-3', name: 'Significance of Meiosis', questionCount: 6 },
          ]},
        ],
      },
      {
        id: 'bio-11', name: 'Photosynthesis in Higher Plants', class: 11, questionCount: 50,
        children: [
          { id: 'bio-11-1', name: 'Photosynthesis Overview', questionCount: 8, children: [
            { id: 'bio-11-1-1', name: 'Site of Photosynthesis', questionCount: 4 },
            { id: 'bio-11-1-2', name: 'Photosynthetic Pigments', questionCount: 4 },
          ]},
          { id: 'bio-11-2', name: 'Light Reactions', questionCount: 18, children: [
            { id: 'bio-11-2-1', name: 'Photosystem I & II', questionCount: 6 },
            { id: 'bio-11-2-2', name: 'Electron Transport Chain', questionCount: 6 },
            { id: 'bio-11-2-3', name: 'Chemiosmosis & ATP Synthesis', questionCount: 6 },
          ]},
          { id: 'bio-11-3', name: 'Dark Reactions (Calvin Cycle)', questionCount: 14, children: [
            { id: 'bio-11-3-1', name: 'C3 Pathway (Calvin Cycle)', questionCount: 7 },
            { id: 'bio-11-3-2', name: 'C4 Pathway & CAM', questionCount: 7 },
          ]},
          { id: 'bio-11-4', name: 'Photorespiration & Factors', questionCount: 10, children: [
            { id: 'bio-11-4-1', name: 'Photorespiration', questionCount: 5 },
            { id: 'bio-11-4-2', name: 'Factors Affecting Photosynthesis', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-12', name: 'Respiration in Plants', class: 11, questionCount: 40,
        children: [
          { id: 'bio-12-1', name: 'Glycolysis', questionCount: 12, children: [
            { id: 'bio-12-1-1', name: 'Steps of Glycolysis', questionCount: 6 },
            { id: 'bio-12-1-2', name: 'Net Gain of ATP', questionCount: 6 },
          ]},
          { id: 'bio-12-2', name: 'Krebs Cycle', questionCount: 14, children: [
            { id: 'bio-12-2-1', name: 'Steps of TCA Cycle', questionCount: 7 },
            { id: 'bio-12-2-2', name: 'Products of Krebs Cycle', questionCount: 7 },
          ]},
          { id: 'bio-12-3', name: 'ETC & Oxidative Phosphorylation', questionCount: 8, children: [
            { id: 'bio-12-3-1', name: 'Electron Transport Chain', questionCount: 4 },
            { id: 'bio-12-3-2', name: 'Total ATP Yield', questionCount: 4 },
          ]},
          { id: 'bio-12-4', name: 'Fermentation', questionCount: 6, children: [
            { id: 'bio-12-4-1', name: 'Anaerobic Respiration Types', questionCount: 3 },
            { id: 'bio-12-4-2', name: 'RQ (Respiratory Quotient)', questionCount: 3 },
          ]},
        ],
      },
      {
        id: 'bio-13', name: 'Plant Growth and Development', class: 11, questionCount: 35,
        children: [
          { id: 'bio-13-1', name: 'Growth', questionCount: 12, children: [
            { id: 'bio-13-1-1', name: 'Phases of Growth', questionCount: 6 },
            { id: 'bio-13-1-2', name: 'Growth Rate & Conditions', questionCount: 6 },
          ]},
          { id: 'bio-13-2', name: 'Plant Hormones', questionCount: 18, children: [
            { id: 'bio-13-2-1', name: 'Auxins & Gibberellins', questionCount: 6 },
            { id: 'bio-13-2-2', name: 'Cytokinins & Ethylene', questionCount: 6 },
            { id: 'bio-13-2-3', name: 'Abscisic Acid', questionCount: 6 },
          ]},
          { id: 'bio-13-3', name: 'Photoperiodism & Vernalisation', questionCount: 5, children: [
            { id: 'bio-13-3-1', name: 'SDP, LDP & Day-Neutral', questionCount: 3 },
            { id: 'bio-13-3-2', name: 'Vernalisation', questionCount: 2 },
          ]},
        ],
      },
      {
        id: 'bio-14', name: 'Breathing and Exchange of Gases', class: 11, questionCount: 40,
        children: [
          { id: 'bio-14-1', name: 'Respiratory Organs', questionCount: 10, children: [
            { id: 'bio-14-1-1', name: 'Human Respiratory System', questionCount: 5 },
            { id: 'bio-14-1-2', name: 'Mechanism of Breathing', questionCount: 5 },
          ]},
          { id: 'bio-14-2', name: 'Exchange of Gases', questionCount: 10, children: [
            { id: 'bio-14-2-1', name: 'Partial Pressure & Diffusion', questionCount: 5 },
            { id: 'bio-14-2-2', name: 'Alveolar Gas Exchange', questionCount: 5 },
          ]},
          { id: 'bio-14-3', name: 'Transport of Gases', questionCount: 12, children: [
            { id: 'bio-14-3-1', name: 'Oxygen Transport & Haemoglobin', questionCount: 6 },
            { id: 'bio-14-3-2', name: 'CO2 Transport & Bohr Effect', questionCount: 6 },
          ]},
          { id: 'bio-14-4', name: 'Regulation & Disorders', questionCount: 8, children: [
            { id: 'bio-14-4-1', name: 'Regulation of Respiration', questionCount: 4 },
            { id: 'bio-14-4-2', name: 'Asthma, Emphysema, Occupational Diseases', questionCount: 4 },
          ]},
        ],
      },
      {
        id: 'bio-15', name: 'Body Fluids and Circulation', class: 11, questionCount: 45,
        children: [
          { id: 'bio-15-1', name: 'Blood', questionCount: 15, children: [
            { id: 'bio-15-1-1', name: 'Plasma & Formed Elements', questionCount: 5 },
            { id: 'bio-15-1-2', name: 'Blood Groups & Coagulation', questionCount: 5 },
            { id: 'bio-15-1-3', name: 'Lymph', questionCount: 5 },
          ]},
          { id: 'bio-15-2', name: 'Heart', questionCount: 18, children: [
            { id: 'bio-15-2-1', name: 'Human Heart Structure', questionCount: 6 },
            { id: 'bio-15-2-2', name: 'Cardiac Cycle', questionCount: 6 },
            { id: 'bio-15-2-3', name: 'ECG & Double Circulation', questionCount: 6 },
          ]},
          { id: 'bio-15-3', name: 'Disorders', questionCount: 12, children: [
            { id: 'bio-15-3-1', name: 'Hypertension & CAD', questionCount: 6 },
            { id: 'bio-15-3-2', name: 'Heart Failure & Angina', questionCount: 6 },
          ]},
        ],
      },
      {
        id: 'bio-16', name: 'Excretory Products and Their Elimination', class: 11, questionCount: 40,
        children: [
          { id: 'bio-16-1', name: 'Human Excretory System', questionCount: 12, children: [
            { id: 'bio-16-1-1', name: 'Kidney Structure & Nephron', questionCount: 6 },
            { id: 'bio-16-1-2', name: 'Urine Formation', questionCount: 6 },
          ]},
          { id: 'bio-16-2', name: 'Function of Tubules', questionCount: 14, children: [
            { id: 'bio-16-2-1', name: 'PCT, Loop of Henle & DCT', questionCount: 7 },
            { id: 'bio-16-2-2', name: 'Counter Current Mechanism', questionCount: 7 },
          ]},
          { id: 'bio-16-3', name: 'Regulation & Disorders', questionCount: 14, children: [
            { id: 'bio-16-3-1', name: 'ADH, ANF & Renin-Angiotensin', questionCount: 7 },
            { id: 'bio-16-3-2', name: 'Dialysis & Kidney Transplant', questionCount: 7 },
          ]},
        ],
      },
      {
        id: 'bio-17', name: 'Locomotion and Movement', class: 11, questionCount: 40,
        children: [
          { id: 'bio-17-1', name: 'Types of Movement', questionCount: 8, children: [
            { id: 'bio-17-1-1', name: 'Amoeboid, Ciliary & Muscular', questionCount: 4 },
            { id: 'bio-17-1-2', name: 'Skeletal System Overview', questionCount: 4 },
          ]},
          { id: 'bio-17-2', name: 'Skeletal System', questionCount: 16, children: [
            { id: 'bio-17-2-1', name: 'Axial Skeleton', questionCount: 5 },
            { id: 'bio-17-2-2', name: 'Appendicular Skeleton', questionCount: 5 },
            { id: 'bio-17-2-3', name: 'Joints & Types', questionCount: 6 },
          ]},
          { id: 'bio-17-3', name: 'Muscle Contraction', questionCount: 16, children: [
            { id: 'bio-17-3-1', name: 'Structure of Sarcomere', questionCount: 5 },
            { id: 'bio-17-3-2', name: 'Sliding Filament Theory', questionCount: 6 },
            { id: 'bio-17-3-3', name: 'Muscular Disorders', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-18', name: 'Neural Control and Coordination', class: 11, questionCount: 50,
        children: [
          { id: 'bio-18-1', name: 'Neural System', questionCount: 15, children: [
            { id: 'bio-18-1-1', name: 'Neuron Structure & Types', questionCount: 5 },
            { id: 'bio-18-1-2', name: 'Nerve Impulse & Synapse', questionCount: 5 },
            { id: 'bio-18-1-3', name: 'Reflex Arc', questionCount: 5 },
          ]},
          { id: 'bio-18-2', name: 'Brain', questionCount: 20, children: [
            { id: 'bio-18-2-1', name: 'Forebrain: Cerebrum & Thalamus', questionCount: 7 },
            { id: 'bio-18-2-2', name: 'Midbrain & Hindbrain', questionCount: 7 },
            { id: 'bio-18-2-3', name: 'Cranial & Spinal Nerves', questionCount: 6 },
          ]},
          { id: 'bio-18-3', name: 'Sensory Organs', questionCount: 15, children: [
            { id: 'bio-18-3-1', name: 'Eye: Structure & Vision', questionCount: 5 },
            { id: 'bio-18-3-2', name: 'Ear: Hearing & Balance', questionCount: 5 },
            { id: 'bio-18-3-3', name: 'Taste, Smell & Skin Receptors', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-19', name: 'Chemical Coordination and Integration', class: 11, questionCount: 45,
        children: [
          { id: 'bio-19-1', name: 'Endocrine Glands', questionCount: 25, children: [
            { id: 'bio-19-1-1', name: 'Hypothalamus & Pituitary', questionCount: 7 },
            { id: 'bio-19-1-2', name: 'Thyroid & Parathyroid', questionCount: 6 },
            { id: 'bio-19-1-3', name: 'Adrenal Glands', questionCount: 6 },
            { id: 'bio-19-1-4', name: 'Pancreas (Islets of Langerhans)', questionCount: 6 },
          ]},
          { id: 'bio-19-2', name: 'Hormones & Mechanism', questionCount: 12, children: [
            { id: 'bio-19-2-1', name: 'Hormone Action Mechanism', questionCount: 6 },
            { id: 'bio-19-2-2', name: 'Feedback Regulation', questionCount: 6 },
          ]},
          { id: 'bio-19-3', name: 'Disorders', questionCount: 8, children: [
            { id: 'bio-19-3-1', name: 'Diabetes, Goitre, Dwarfism', questionCount: 4 },
            { id: 'bio-19-3-2', name: 'Addison\'s, Cushing\'s, Acromegaly', questionCount: 4 },
          ]},
        ],
      },
      // ─── CLASS 12 ───
      {
        id: 'bio-20', name: 'Reproduction in Organisms', class: 12, questionCount: 30,
        children: [
          { id: 'bio-20-1', name: 'Asexual Reproduction', questionCount: 12, children: [
            { id: 'bio-20-1-1', name: 'Binary Fission & Budding', questionCount: 4 },
            { id: 'bio-20-1-2', name: 'Fragmentation & Regeneration', questionCount: 4 },
            { id: 'bio-20-1-3', name: 'Vegetative Propagation', questionCount: 4 },
          ]},
          { id: 'bio-20-2', name: 'Sexual Reproduction', questionCount: 18, children: [
            { id: 'bio-20-2-1', name: 'Pre-fertilisation Events', questionCount: 6 },
            { id: 'bio-20-2-2', name: 'Fertilisation & Post-fertilisation', questionCount: 6 },
            { id: 'bio-20-2-3', name: 'Gametogenesis', questionCount: 6 },
          ]},
        ],
      },
      {
        id: 'bio-21', name: 'Sexual Reproduction in Flowering Plants', class: 12, questionCount: 50,
        children: [
          { id: 'bio-21-1', name: 'Stamen & Microsporogenesis', questionCount: 12, children: [
            { id: 'bio-21-1-1', name: 'Microsporangium Structure', questionCount: 6 },
            { id: 'bio-21-1-2', name: 'Pollen Grain Development', questionCount: 6 },
          ]},
          { id: 'bio-21-2', name: 'Pistil & Megasporogenesis', questionCount: 12, children: [
            { id: 'bio-21-2-1', name: 'Ovule Structure', questionCount: 6 },
            { id: 'bio-21-2-2', name: 'Embryo Sac Development', questionCount: 6 },
          ]},
          { id: 'bio-21-3', name: 'Pollination & Fertilisation', questionCount: 16, children: [
            { id: 'bio-21-3-1', name: 'Types of Pollination', questionCount: 5 },
            { id: 'bio-21-3-2', name: 'Double Fertilisation', questionCount: 6 },
            { id: 'bio-21-3-3', name: 'Post-fertilisation: Endosperm & Embryo', questionCount: 5 },
          ]},
          { id: 'bio-21-4', name: 'Seed & Fruit Development', questionCount: 10, children: [
            { id: 'bio-21-4-1', name: 'Seed Dormancy & Apomixis', questionCount: 5 },
            { id: 'bio-21-4-2', name: 'Polyembryony & Parthenocarpy', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-22', name: 'Human Reproduction', class: 12, questionCount: 50,
        children: [
          { id: 'bio-22-1', name: 'Male Reproductive System', questionCount: 15, children: [
            { id: 'bio-22-1-1', name: 'Testes & Spermatogenesis', questionCount: 8 },
            { id: 'bio-22-1-2', name: 'Male Accessory Glands', questionCount: 7 },
          ]},
          { id: 'bio-22-2', name: 'Female Reproductive System', questionCount: 15, children: [
            { id: 'bio-22-2-1', name: 'Ovary & Oogenesis', questionCount: 8 },
            { id: 'bio-22-2-2', name: 'Menstrual Cycle', questionCount: 7 },
          ]},
          { id: 'bio-22-3', name: 'Fertilisation & Pregnancy', questionCount: 20, children: [
            { id: 'bio-22-3-1', name: 'Fertilisation & Implantation', questionCount: 7 },
            { id: 'bio-22-3-2', name: 'Embryo Development', questionCount: 7 },
            { id: 'bio-22-3-3', name: 'Parturition & Lactation', questionCount: 6 },
          ]},
        ],
      },
      {
        id: 'bio-23', name: 'Reproductive Health', class: 12, questionCount: 30,
        children: [
          { id: 'bio-23-1', name: 'Reproductive Health Problems', questionCount: 10, children: [
            { id: 'bio-23-1-1', name: 'STDs & Prevention', questionCount: 5 },
            { id: 'bio-23-1-2', name: 'Infertility & ART', questionCount: 5 },
          ]},
          { id: 'bio-23-2', name: 'Birth Control', questionCount: 12, children: [
            { id: 'bio-23-2-1', name: 'Natural & Barrier Methods', questionCount: 4 },
            { id: 'bio-23-2-2', name: 'IUDs & Hormonal Methods', questionCount: 4 },
            { id: 'bio-23-2-3', name: 'Surgical Methods (MTP)', questionCount: 4 },
          ]},
          { id: 'bio-23-3', name: 'Amniocentesis & Population', questionCount: 8, children: [
            { id: 'bio-23-3-1', name: 'Amniocentesis & Ethics', questionCount: 4 },
            { id: 'bio-23-3-2', name: 'Population Explosion', questionCount: 4 },
          ]},
        ],
      },
      {
        id: 'bio-24', name: 'Principles of Inheritance and Variation', class: 12, questionCount: 60,
        children: [
          { id: 'bio-24-1', name: "Mendel's Laws", questionCount: 20, children: [
            { id: 'bio-24-1-1', name: 'Law of Dominance', questionCount: 5 },
            { id: 'bio-24-1-2', name: 'Law of Segregation', questionCount: 5 },
            { id: 'bio-24-1-3', name: 'Law of Independent Assortment', questionCount: 5 },
            { id: 'bio-24-1-4', name: 'Monohybrid & Dihybrid Cross', questionCount: 5 },
          ]},
          { id: 'bio-24-2', name: 'Beyond Mendelian Genetics', questionCount: 20, children: [
            { id: 'bio-24-2-1', name: 'Incomplete Dominance & Co-dominance', questionCount: 5 },
            { id: 'bio-24-2-2', name: 'Multiple Alleles (Blood Groups)', questionCount: 5 },
            { id: 'bio-24-2-3', name: 'Pleiotropy & Polygenic Inheritance', questionCount: 5 },
            { id: 'bio-24-2-4', name: 'Linkage & Recombination', questionCount: 5 },
          ]},
          { id: 'bio-24-3', name: 'Sex Determination & Chromosomal Disorders', questionCount: 20, children: [
            { id: 'bio-24-3-1', name: 'Sex Determination Mechanisms', questionCount: 5 },
            { id: 'bio-24-3-2', name: 'Sex-linked Inheritance', questionCount: 5 },
            { id: 'bio-24-3-3', name: 'Down, Turner & Klinefelter Syndrome', questionCount: 5 },
            { id: 'bio-24-3-4', name: 'Pedigree Analysis', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-25', name: 'Molecular Basis of Inheritance', class: 12, questionCount: 55,
        children: [
          { id: 'bio-25-1', name: 'DNA Structure', questionCount: 15, children: [
            { id: 'bio-25-1-1', name: 'DNA Double Helix & Watson-Crick Model', questionCount: 5 },
            { id: 'bio-25-1-2', name: 'Packaging of DNA: Nucleosome', questionCount: 5 },
            { id: 'bio-25-1-3', name: 'Hershey-Chase & Griffith Experiment', questionCount: 5 },
          ]},
          { id: 'bio-25-2', name: 'DNA Replication', questionCount: 10, children: [
            { id: 'bio-25-2-1', name: 'Semiconservative Replication', questionCount: 5 },
            { id: 'bio-25-2-2', name: 'Enzymes of Replication', questionCount: 5 },
          ]},
          { id: 'bio-25-3', name: 'Transcription & Translation', questionCount: 20, children: [
            { id: 'bio-25-3-1', name: 'Transcription Process', questionCount: 5 },
            { id: 'bio-25-3-2', name: 'Genetic Code & Codons', questionCount: 5 },
            { id: 'bio-25-3-3', name: 'Translation Process', questionCount: 5 },
            { id: 'bio-25-3-4', name: 'Lac Operon & Gene Regulation', questionCount: 5 },
          ]},
          { id: 'bio-25-4', name: 'Human Genome Project', questionCount: 10, children: [
            { id: 'bio-25-4-1', name: 'HGP Goals & Methodology', questionCount: 5 },
            { id: 'bio-25-4-2', name: 'DNA Fingerprinting', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-26', name: 'Evolution', class: 12, questionCount: 40,
        children: [
          { id: 'bio-26-1', name: 'Origin of Life', questionCount: 10, children: [
            { id: 'bio-26-1-1', name: 'Theories of Origin', questionCount: 5 },
            { id: 'bio-26-1-2', name: 'Miller-Urey Experiment', questionCount: 5 },
          ]},
          { id: 'bio-26-2', name: 'Evidence of Evolution', questionCount: 15, children: [
            { id: 'bio-26-2-1', name: 'Homologous & Analogous Organs', questionCount: 5 },
            { id: 'bio-26-2-2', name: 'Adaptive Radiation', questionCount: 5 },
            { id: 'bio-26-2-3', name: 'Fossils & Embryology', questionCount: 5 },
          ]},
          { id: 'bio-26-3', name: 'Mechanisms of Evolution', questionCount: 15, children: [
            { id: 'bio-26-3-1', name: 'Natural Selection & Hardy-Weinberg', questionCount: 5 },
            { id: 'bio-26-3-2', name: 'Genetic Drift & Gene Flow', questionCount: 5 },
            { id: 'bio-26-3-3', name: 'Human Evolution Timeline', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-27', name: 'Human Health and Diseases', class: 12, questionCount: 45,
        children: [
          { id: 'bio-27-1', name: 'Common Diseases', questionCount: 20, children: [
            { id: 'bio-27-1-1', name: 'Typhoid, Pneumonia, Malaria', questionCount: 7 },
            { id: 'bio-27-1-2', name: 'Amoebiasis, Ascariasis, Filariasis', questionCount: 7 },
            { id: 'bio-27-1-3', name: 'Ringworm & Dengue', questionCount: 6 },
          ]},
          { id: 'bio-27-2', name: 'Immunity', questionCount: 15, children: [
            { id: 'bio-27-2-1', name: 'Innate vs Adaptive Immunity', questionCount: 5 },
            { id: 'bio-27-2-2', name: 'Antibodies & Vaccination', questionCount: 5 },
            { id: 'bio-27-2-3', name: 'AIDS & HIV', questionCount: 5 },
          ]},
          { id: 'bio-27-3', name: 'Cancer & Drugs', questionCount: 10, children: [
            { id: 'bio-27-3-1', name: 'Cancer: Types & Causes', questionCount: 5 },
            { id: 'bio-27-3-2', name: 'Drugs & Alcohol Abuse', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-28', name: 'Strategies for Enhancement in Food Production', class: 12, questionCount: 25,
        children: [
          { id: 'bio-28-1', name: 'Animal Husbandry', questionCount: 10, children: [
            { id: 'bio-28-1-1', name: 'Dairy & Poultry Farming', questionCount: 5 },
            { id: 'bio-28-1-2', name: 'Apiculture & Fisheries', questionCount: 5 },
          ]},
          { id: 'bio-28-2', name: 'Plant Breeding', questionCount: 10, children: [
            { id: 'bio-28-2-1', name: 'Breeding for Disease Resistance', questionCount: 5 },
            { id: 'bio-28-2-2', name: 'Single Cell Protein & Tissue Culture', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-29', name: 'Microbes in Human Welfare', class: 12, questionCount: 30,
        children: [
          { id: 'bio-29-1', name: 'Microbes in Food & Industry', questionCount: 15, children: [
            { id: 'bio-29-1-1', name: 'Fermented Foods & Beverages', questionCount: 5 },
            { id: 'bio-29-1-2', name: 'Industrial Products (Antibiotics, Enzymes)', questionCount: 5 },
            { id: 'bio-29-1-3', name: 'Biogas & Sewage Treatment', questionCount: 5 },
          ]},
          { id: 'bio-29-2', name: 'Biocontrol & Biofertilisers', questionCount: 15, children: [
            { id: 'bio-29-2-1', name: 'Biocontrol Agents', questionCount: 5 },
            { id: 'bio-29-2-2', name: 'Biofertilisers: Rhizobium, Mycorrhiza', questionCount: 5 },
            { id: 'bio-29-2-3', name: 'Cyclosporin A & Statins', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-30', name: 'Biotechnology: Principles and Processes', class: 12, questionCount: 35,
        children: [
          { id: 'bio-30-1', name: 'Genetic Engineering', questionCount: 15, children: [
            { id: 'bio-30-1-1', name: 'Restriction Enzymes & Vectors', questionCount: 5 },
            { id: 'bio-30-1-2', name: 'rDNA Technology Steps', questionCount: 5 },
            { id: 'bio-30-1-3', name: 'Cloning Vectors (pBR322, Ti plasmid)', questionCount: 5 },
          ]},
          { id: 'bio-30-2', name: 'PCR & Gel Electrophoresis', questionCount: 12, children: [
            { id: 'bio-30-2-1', name: 'PCR Steps & Applications', questionCount: 6 },
            { id: 'bio-30-2-2', name: 'Agarose Gel Electrophoresis', questionCount: 6 },
          ]},
          { id: 'bio-30-3', name: 'Bioreactors', questionCount: 8, children: [
            { id: 'bio-30-3-1', name: 'Stirred-Tank Bioreactors', questionCount: 4 },
            { id: 'bio-30-3-2', name: 'Downstream Processing', questionCount: 4 },
          ]},
        ],
      },
      {
        id: 'bio-31', name: 'Biotechnology and Its Applications', class: 12, questionCount: 30,
        children: [
          { id: 'bio-31-1', name: 'Biotech in Agriculture', questionCount: 12, children: [
            { id: 'bio-31-1-1', name: 'Bt Cotton & Bt Corn', questionCount: 4 },
            { id: 'bio-31-1-2', name: 'Golden Rice & RNAi', questionCount: 4 },
            { id: 'bio-31-1-3', name: 'Pest Resistant Plants', questionCount: 4 },
          ]},
          { id: 'bio-31-2', name: 'Biotech in Medicine', questionCount: 12, children: [
            { id: 'bio-31-2-1', name: 'Insulin Production (Humulin)', questionCount: 4 },
            { id: 'bio-31-2-2', name: 'Gene Therapy', questionCount: 4 },
            { id: 'bio-31-2-3', name: 'ELISA & Transgenic Animals', questionCount: 4 },
          ]},
          { id: 'bio-31-3', name: 'Ethical Issues', questionCount: 6, children: [
            { id: 'bio-31-3-1', name: 'Bioethics & Biopiracy', questionCount: 3 },
            { id: 'bio-31-3-2', name: 'Patent Issues & GMO Debate', questionCount: 3 },
          ]},
        ],
      },
      {
        id: 'bio-32', name: 'Organisms and Populations', class: 12, questionCount: 30,
        children: [
          { id: 'bio-32-1', name: 'Organisms & Environment', questionCount: 15, children: [
            { id: 'bio-32-1-1', name: 'Abiotic Factors & Adaptations', questionCount: 5 },
            { id: 'bio-32-1-2', name: 'Responses to Environment', questionCount: 5 },
            { id: 'bio-32-1-3', name: 'Adaptations (Morphological, Physiological)', questionCount: 5 },
          ]},
          { id: 'bio-32-2', name: 'Populations', questionCount: 15, children: [
            { id: 'bio-32-2-1', name: 'Population Attributes & Growth', questionCount: 5 },
            { id: 'bio-32-2-2', name: 'Exponential & Logistic Growth', questionCount: 5 },
            { id: 'bio-32-2-3', name: 'Population Interactions', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-33', name: 'Ecosystem', class: 12, questionCount: 35,
        children: [
          { id: 'bio-33-1', name: 'Structure & Function', questionCount: 10, children: [
            { id: 'bio-33-1-1', name: 'Producers, Consumers & Decomposers', questionCount: 5 },
            { id: 'bio-33-1-2', name: 'Food Chains & Food Webs', questionCount: 5 },
          ]},
          { id: 'bio-33-2', name: 'Productivity & Energy Flow', questionCount: 15, children: [
            { id: 'bio-33-2-1', name: 'GPP, NPP & Secondary Productivity', questionCount: 5 },
            { id: 'bio-33-2-2', name: 'Energy Flow (10% Law)', questionCount: 5 },
            { id: 'bio-33-2-3', name: 'Ecological Pyramids', questionCount: 5 },
          ]},
          { id: 'bio-33-3', name: 'Nutrient Cycling & Succession', questionCount: 10, children: [
            { id: 'bio-33-3-1', name: 'Carbon & Phosphorus Cycle', questionCount: 5 },
            { id: 'bio-33-3-2', name: 'Ecological Succession', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-34', name: 'Biodiversity and Conservation', class: 12, questionCount: 30,
        children: [
          { id: 'bio-34-1', name: 'Biodiversity', questionCount: 15, children: [
            { id: 'bio-34-1-1', name: 'Types of Biodiversity', questionCount: 5 },
            { id: 'bio-34-1-2', name: 'Species-Area Relationship', questionCount: 5 },
            { id: 'bio-34-1-3', name: 'Causes of Biodiversity Loss', questionCount: 5 },
          ]},
          { id: 'bio-34-2', name: 'Conservation', questionCount: 15, children: [
            { id: 'bio-34-2-1', name: 'In-situ Conservation', questionCount: 5 },
            { id: 'bio-34-2-2', name: 'Ex-situ Conservation', questionCount: 5 },
            { id: 'bio-34-2-3', name: 'Biodiversity Hotspots', questionCount: 5 },
          ]},
        ],
      },
      {
        id: 'bio-35', name: 'Environmental Issues', class: 12, questionCount: 30,
        children: [
          { id: 'bio-35-1', name: 'Pollution', questionCount: 15, children: [
            { id: 'bio-35-1-1', name: 'Air Pollution & Ozone Depletion', questionCount: 5 },
            { id: 'bio-35-1-2', name: 'Water Pollution & Eutrophication', questionCount: 5 },
            { id: 'bio-35-1-3', name: 'Solid Waste & Radioactive Waste', questionCount: 5 },
          ]},
          { id: 'bio-35-2', name: 'Global Issues', questionCount: 15, children: [
            { id: 'bio-35-2-1', name: 'Greenhouse Effect & Global Warming', questionCount: 5 },
            { id: 'bio-35-2-2', name: 'Deforestation & Desertification', questionCount: 5 },
            { id: 'bio-35-2-3', name: 'Chipko & JFM', questionCount: 5 },
          ]},
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
      // ─── CLASS 11 ───
      { id: 'phy-1', name: 'Physical World', class: 11, questionCount: 15, children: [
        { id: 'phy-1-1', name: 'Scope of Physics', questionCount: 8, children: [
          { id: 'phy-1-1-1', name: 'Fundamental Forces', questionCount: 4 },
          { id: 'phy-1-1-2', name: 'Conservation Laws', questionCount: 4 },
        ]},
      ]},
      { id: 'phy-2', name: 'Units and Measurements', class: 11, questionCount: 40, children: [
        { id: 'phy-2-1', name: 'SI Units', questionCount: 12, children: [
          { id: 'phy-2-1-1', name: 'Fundamental & Derived Units', questionCount: 6 },
          { id: 'phy-2-1-2', name: 'System of Units', questionCount: 6 },
        ]},
        { id: 'phy-2-2', name: 'Dimensional Analysis', questionCount: 15, children: [
          { id: 'phy-2-2-1', name: 'Dimensional Formulae', questionCount: 5 },
          { id: 'phy-2-2-2', name: 'Applications of Dimensional Analysis', questionCount: 5 },
          { id: 'phy-2-2-3', name: 'Limitations', questionCount: 5 },
        ]},
        { id: 'phy-2-3', name: 'Errors in Measurement', questionCount: 13, children: [
          { id: 'phy-2-3-1', name: 'Systematic & Random Errors', questionCount: 5 },
          { id: 'phy-2-3-2', name: 'Significant Figures', questionCount: 4 },
          { id: 'phy-2-3-3', name: 'Error Propagation', questionCount: 4 },
        ]},
      ]},
      { id: 'phy-3', name: 'Motion in a Straight Line', class: 11, questionCount: 45, children: [
        { id: 'phy-3-1', name: 'Position & Displacement', questionCount: 10, children: [
          { id: 'phy-3-1-1', name: 'Distance vs Displacement', questionCount: 5 },
          { id: 'phy-3-1-2', name: 'Frame of Reference', questionCount: 5 },
        ]},
        { id: 'phy-3-2', name: 'Speed & Velocity', questionCount: 15, children: [
          { id: 'phy-3-2-1', name: 'Average & Instantaneous Speed', questionCount: 5 },
          { id: 'phy-3-2-2', name: 'Velocity-Time Graphs', questionCount: 5 },
          { id: 'phy-3-2-3', name: 'Relative Motion', questionCount: 5 },
        ]},
        { id: 'phy-3-3', name: 'Equations of Motion', questionCount: 20, children: [
          { id: 'phy-3-3-1', name: 'Three Equations of Motion', questionCount: 7 },
          { id: 'phy-3-3-2', name: 'Free Fall Problems', questionCount: 7 },
          { id: 'phy-3-3-3', name: 'Motion Graphs Analysis', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-4', name: 'Motion in a Plane', class: 11, questionCount: 45, children: [
        { id: 'phy-4-1', name: 'Vectors', questionCount: 15, children: [
          { id: 'phy-4-1-1', name: 'Vector Addition & Subtraction', questionCount: 5 },
          { id: 'phy-4-1-2', name: 'Resolution of Vectors', questionCount: 5 },
          { id: 'phy-4-1-3', name: 'Dot & Cross Product', questionCount: 5 },
        ]},
        { id: 'phy-4-2', name: 'Projectile Motion', questionCount: 15, children: [
          { id: 'phy-4-2-1', name: 'Range, Height & Time of Flight', questionCount: 8 },
          { id: 'phy-4-2-2', name: 'Projectile on Incline', questionCount: 7 },
        ]},
        { id: 'phy-4-3', name: 'Circular Motion', questionCount: 15, children: [
          { id: 'phy-4-3-1', name: 'Uniform Circular Motion', questionCount: 5 },
          { id: 'phy-4-3-2', name: 'Centripetal Acceleration', questionCount: 5 },
          { id: 'phy-4-3-3', name: 'Banking of Roads', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-5', name: 'Laws of Motion', class: 11, questionCount: 50, children: [
        { id: 'phy-5-1', name: "Newton's Laws", questionCount: 25, children: [
          { id: 'phy-5-1-1', name: 'First Law & Inertia', questionCount: 5 },
          { id: 'phy-5-1-2', name: 'F = ma Problems', questionCount: 8 },
          { id: 'phy-5-1-3', name: 'Third Law & Action-Reaction', questionCount: 5 },
          { id: 'phy-5-1-4', name: 'Impulse & Momentum', questionCount: 7 },
        ]},
        { id: 'phy-5-2', name: 'Friction', questionCount: 15, children: [
          { id: 'phy-5-2-1', name: 'Types of Friction', questionCount: 5 },
          { id: 'phy-5-2-2', name: 'Laws of Friction Problems', questionCount: 5 },
          { id: 'phy-5-2-3', name: 'Circular Motion & Friction', questionCount: 5 },
        ]},
        { id: 'phy-5-3', name: 'Connected Bodies', questionCount: 10, children: [
          { id: 'phy-5-3-1', name: 'Pulley & Incline Problems', questionCount: 5 },
          { id: 'phy-5-3-2', name: 'Apparent Weight in Lift', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-6', name: 'Work, Energy and Power', class: 11, questionCount: 45, children: [
        { id: 'phy-6-1', name: 'Work & Energy', questionCount: 20, children: [
          { id: 'phy-6-1-1', name: 'Work Done by Force', questionCount: 5 },
          { id: 'phy-6-1-2', name: 'Kinetic & Potential Energy', questionCount: 8 },
          { id: 'phy-6-1-3', name: 'Work-Energy Theorem', questionCount: 7 },
        ]},
        { id: 'phy-6-2', name: 'Conservation of Energy', questionCount: 15, children: [
          { id: 'phy-6-2-1', name: 'Conservative & Non-Conservative Forces', questionCount: 5 },
          { id: 'phy-6-2-2', name: 'Energy Conservation Problems', questionCount: 5 },
          { id: 'phy-6-2-3', name: 'Collisions (Elastic & Inelastic)', questionCount: 5 },
        ]},
        { id: 'phy-6-3', name: 'Power', questionCount: 10, children: [
          { id: 'phy-6-3-1', name: 'Power & Efficiency', questionCount: 5 },
          { id: 'phy-6-3-2', name: 'Power in Rotational Motion', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-7', name: 'System of Particles and Rotational Motion', class: 11, questionCount: 50, children: [
        { id: 'phy-7-1', name: 'Centre of Mass', questionCount: 15, children: [
          { id: 'phy-7-1-1', name: 'Centre of Mass Calculation', questionCount: 5 },
          { id: 'phy-7-1-2', name: 'Motion of COM', questionCount: 5 },
          { id: 'phy-7-1-3', name: 'COM of Continuous Bodies', questionCount: 5 },
        ]},
        { id: 'phy-7-2', name: 'Rotational Mechanics', questionCount: 20, children: [
          { id: 'phy-7-2-1', name: 'Moment of Inertia', questionCount: 7 },
          { id: 'phy-7-2-2', name: 'Torque & Angular Momentum', questionCount: 7 },
          { id: 'phy-7-2-3', name: 'Rolling Motion', questionCount: 6 },
        ]},
        { id: 'phy-7-3', name: 'Equilibrium', questionCount: 15, children: [
          { id: 'phy-7-3-1', name: 'Equilibrium of Rigid Bodies', questionCount: 5 },
          { id: 'phy-7-3-2', name: 'Parallel Axes Theorem', questionCount: 5 },
          { id: 'phy-7-3-3', name: 'Perpendicular Axes Theorem', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-8', name: 'Gravitation', class: 11, questionCount: 40, children: [
        { id: 'phy-8-1', name: 'Universal Gravitation', questionCount: 15, children: [
          { id: 'phy-8-1-1', name: "Newton's Law of Gravitation", questionCount: 5 },
          { id: 'phy-8-1-2', name: 'Gravitational Field & Potential', questionCount: 5 },
          { id: 'phy-8-1-3', name: 'Acceleration due to Gravity Variations', questionCount: 5 },
        ]},
        { id: 'phy-8-2', name: 'Orbital Motion', questionCount: 15, children: [
          { id: 'phy-8-2-1', name: "Kepler's Laws", questionCount: 5 },
          { id: 'phy-8-2-2', name: 'Orbital Velocity & Escape Velocity', questionCount: 5 },
          { id: 'phy-8-2-3', name: 'Satellites & Geostationary Orbit', questionCount: 5 },
        ]},
        { id: 'phy-8-3', name: 'Gravitational PE', questionCount: 10, children: [
          { id: 'phy-8-3-1', name: 'Gravitational Potential Energy', questionCount: 5 },
          { id: 'phy-8-3-2', name: 'Binding Energy of Satellite', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-9', name: 'Mechanical Properties of Solids', class: 11, questionCount: 30, children: [
        { id: 'phy-9-1', name: 'Stress & Strain', questionCount: 15, children: [
          { id: 'phy-9-1-1', name: 'Types of Stress & Strain', questionCount: 5 },
          { id: 'phy-9-1-2', name: "Hooke's Law & Moduli of Elasticity", questionCount: 5 },
          { id: 'phy-9-1-3', name: 'Stress-Strain Curve', questionCount: 5 },
        ]},
        { id: 'phy-9-2', name: 'Elastic Moduli Applications', questionCount: 15, children: [
          { id: 'phy-9-2-1', name: "Young's, Bulk & Shear Modulus", questionCount: 5 },
          { id: 'phy-9-2-2', name: "Poisson's Ratio", questionCount: 5 },
          { id: 'phy-9-2-3', name: 'Elastic Potential Energy', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-10', name: 'Mechanical Properties of Fluids', class: 11, questionCount: 35, children: [
        { id: 'phy-10-1', name: 'Fluid Statics', questionCount: 15, children: [
          { id: 'phy-10-1-1', name: "Pascal's Law & Hydraulic Lift", questionCount: 5 },
          { id: 'phy-10-1-2', name: 'Atmospheric Pressure & Barometer', questionCount: 5 },
          { id: 'phy-10-1-3', name: "Archimedes' Principle & Buoyancy", questionCount: 5 },
        ]},
        { id: 'phy-10-2', name: 'Fluid Dynamics', questionCount: 12, children: [
          { id: 'phy-10-2-1', name: "Bernoulli's Theorem", questionCount: 6 },
          { id: 'phy-10-2-2', name: 'Equation of Continuity', questionCount: 6 },
        ]},
        { id: 'phy-10-3', name: 'Viscosity & Surface Tension', questionCount: 8, children: [
          { id: 'phy-10-3-1', name: 'Viscosity & Stokes Law', questionCount: 4 },
          { id: 'phy-10-3-2', name: 'Surface Tension & Capillarity', questionCount: 4 },
        ]},
      ]},
      { id: 'phy-11', name: 'Thermal Properties of Matter', class: 11, questionCount: 30, children: [
        { id: 'phy-11-1', name: 'Temperature & Heat', questionCount: 15, children: [
          { id: 'phy-11-1-1', name: 'Temperature Scales & Thermometers', questionCount: 5 },
          { id: 'phy-11-1-2', name: 'Thermal Expansion', questionCount: 5 },
          { id: 'phy-11-1-3', name: 'Specific Heat & Calorimetry', questionCount: 5 },
        ]},
        { id: 'phy-11-2', name: 'Heat Transfer', questionCount: 15, children: [
          { id: 'phy-11-2-1', name: 'Conduction & Convection', questionCount: 5 },
          { id: 'phy-11-2-2', name: 'Radiation & Stefan-Boltzmann Law', questionCount: 5 },
          { id: 'phy-11-2-3', name: 'Change of State & Latent Heat', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-12', name: 'Thermodynamics', class: 11, questionCount: 40, children: [
        { id: 'phy-12-1', name: 'Laws of Thermodynamics', questionCount: 20, children: [
          { id: 'phy-12-1-1', name: 'Zeroth & First Law', questionCount: 5 },
          { id: 'phy-12-1-2', name: 'Thermodynamic Processes', questionCount: 5 },
          { id: 'phy-12-1-3', name: 'Second Law & Entropy', questionCount: 5 },
          { id: 'phy-12-1-4', name: 'Carnot Engine & Efficiency', questionCount: 5 },
        ]},
        { id: 'phy-12-2', name: 'Heat Engines & Refrigerators', questionCount: 20, children: [
          { id: 'phy-12-2-1', name: 'PV Diagrams & Work Done', questionCount: 7 },
          { id: 'phy-12-2-2', name: 'Isothermal & Adiabatic Processes', questionCount: 7 },
          { id: 'phy-12-2-3', name: 'COP of Refrigerator', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-13', name: 'Kinetic Theory', class: 11, questionCount: 25, children: [
        { id: 'phy-13-1', name: 'Kinetic Theory of Gases', questionCount: 15, children: [
          { id: 'phy-13-1-1', name: 'Ideal Gas Equation', questionCount: 5 },
          { id: 'phy-13-1-2', name: 'RMS, Average & Most Probable Speed', questionCount: 5 },
          { id: 'phy-13-1-3', name: 'Degrees of Freedom & Law of Equipartition', questionCount: 5 },
        ]},
        { id: 'phy-13-2', name: 'Mean Free Path', questionCount: 10, children: [
          { id: 'phy-13-2-1', name: 'Mean Free Path Formula', questionCount: 5 },
          { id: 'phy-13-2-2', name: 'Specific Heat of Gases (Cp, Cv)', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-14', name: 'Oscillations', class: 11, questionCount: 40, children: [
        { id: 'phy-14-1', name: 'SHM', questionCount: 25, children: [
          { id: 'phy-14-1-1', name: 'SHM: Displacement, Velocity, Acceleration', questionCount: 8 },
          { id: 'phy-14-1-2', name: 'Energy in SHM', questionCount: 5 },
          { id: 'phy-14-1-3', name: 'Springs & Pendulum', questionCount: 7 },
          { id: 'phy-14-1-4', name: 'Time Period & Frequency', questionCount: 5 },
        ]},
        { id: 'phy-14-2', name: 'Damped & Forced Oscillations', questionCount: 15, children: [
          { id: 'phy-14-2-1', name: 'Damped Oscillations', questionCount: 5 },
          { id: 'phy-14-2-2', name: 'Forced Oscillations & Resonance', questionCount: 5 },
          { id: 'phy-14-2-3', name: 'Coupled Oscillations', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-15', name: 'Waves', class: 11, questionCount: 40, children: [
        { id: 'phy-15-1', name: 'Wave Motion', questionCount: 15, children: [
          { id: 'phy-15-1-1', name: 'Transverse & Longitudinal Waves', questionCount: 5 },
          { id: 'phy-15-1-2', name: 'Wave Equation & Speed', questionCount: 5 },
          { id: 'phy-15-1-3', name: 'Superposition Principle', questionCount: 5 },
        ]},
        { id: 'phy-15-2', name: 'Standing Waves & Beats', questionCount: 15, children: [
          { id: 'phy-15-2-1', name: 'Standing Waves in Strings', questionCount: 5 },
          { id: 'phy-15-2-2', name: 'Standing Waves in Pipes', questionCount: 5 },
          { id: 'phy-15-2-3', name: 'Beats & Doppler Effect', questionCount: 5 },
        ]},
      ]},
      // ─── CLASS 12 ───
      { id: 'phy-16', name: 'Electric Charges and Fields', class: 12, questionCount: 45, children: [
        { id: 'phy-16-1', name: 'Electrostatics', questionCount: 25, children: [
          { id: 'phy-16-1-1', name: "Coulomb's Law", questionCount: 7 },
          { id: 'phy-16-1-2', name: 'Electric Field & Field Lines', questionCount: 6 },
          { id: 'phy-16-1-3', name: 'Electric Dipole', questionCount: 6 },
          { id: 'phy-16-1-4', name: "Gauss's Law & Applications", questionCount: 6 },
        ]},
      ]},
      { id: 'phy-17', name: 'Electrostatic Potential and Capacitance', class: 12, questionCount: 45, children: [
        { id: 'phy-17-1', name: 'Electrostatic Potential', questionCount: 20, children: [
          { id: 'phy-17-1-1', name: 'Potential due to Point Charge & Dipole', questionCount: 7 },
          { id: 'phy-17-1-2', name: 'Equipotential Surfaces', questionCount: 7 },
          { id: 'phy-17-1-3', name: 'Potential Energy of Charges', questionCount: 6 },
        ]},
        { id: 'phy-17-2', name: 'Capacitance', questionCount: 25, children: [
          { id: 'phy-17-2-1', name: 'Parallel Plate Capacitor', questionCount: 7 },
          { id: 'phy-17-2-2', name: 'Capacitors in Series & Parallel', questionCount: 6 },
          { id: 'phy-17-2-3', name: 'Dielectrics & Energy Stored', questionCount: 6 },
          { id: 'phy-17-2-4', name: 'Van de Graaff Generator', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-18', name: 'Current Electricity', class: 12, questionCount: 50, children: [
        { id: 'phy-18-1', name: "Ohm's Law & Resistance", questionCount: 20, children: [
          { id: 'phy-18-1-1', name: "Ohm's Law & V-I Characteristics", questionCount: 5 },
          { id: 'phy-18-1-2', name: 'Resistivity & Temperature Dependence', questionCount: 5 },
          { id: 'phy-18-1-3', name: 'Resistors in Series & Parallel', questionCount: 5 },
          { id: 'phy-18-1-4', name: 'EMF & Internal Resistance', questionCount: 5 },
        ]},
        { id: 'phy-18-2', name: 'Circuit Analysis', questionCount: 20, children: [
          { id: 'phy-18-2-1', name: "Kirchhoff's Laws", questionCount: 7 },
          { id: 'phy-18-2-2', name: 'Wheatstone Bridge & Metre Bridge', questionCount: 7 },
          { id: 'phy-18-2-3', name: 'Potentiometer', questionCount: 6 },
        ]},
        { id: 'phy-18-3', name: 'Thermal & Electrical Energy', questionCount: 10, children: [
          { id: 'phy-18-3-1', name: 'Drift Velocity & Mobility', questionCount: 5 },
          { id: 'phy-18-3-2', name: 'Electrical Energy & Power', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-19', name: 'Moving Charges and Magnetism', class: 12, questionCount: 45, children: [
        { id: 'phy-19-1', name: 'Magnetic Force', questionCount: 20, children: [
          { id: 'phy-19-1-1', name: 'Force on Moving Charge (Lorentz Force)', questionCount: 7 },
          { id: 'phy-19-1-2', name: 'Cyclotron', questionCount: 6 },
          { id: 'phy-19-1-3', name: 'Force on Current-Carrying Conductor', questionCount: 7 },
        ]},
        { id: 'phy-19-2', name: 'Magnetic Field Sources', questionCount: 25, children: [
          { id: 'phy-19-2-1', name: 'Biot-Savart Law', questionCount: 6 },
          { id: 'phy-19-2-2', name: "Ampere's Circuital Law", questionCount: 6 },
          { id: 'phy-19-2-3', name: 'Solenoid & Toroid', questionCount: 7 },
          { id: 'phy-19-2-4', name: 'Moving Coil Galvanometer', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-20', name: 'Magnetism and Matter', class: 12, questionCount: 25, children: [
        { id: 'phy-20-1', name: 'Magnetism', questionCount: 15, children: [
          { id: 'phy-20-1-1', name: 'Bar Magnet & Magnetic Dipole', questionCount: 5 },
          { id: 'phy-20-1-2', name: "Earth's Magnetism", questionCount: 5 },
          { id: 'phy-20-1-3', name: 'Magnetic Properties of Materials', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-21', name: 'Electromagnetic Induction', class: 12, questionCount: 40, children: [
        { id: 'phy-21-1', name: "Faraday's Laws", questionCount: 20, children: [
          { id: 'phy-21-1-1', name: 'Magnetic Flux & EMF', questionCount: 7 },
          { id: 'phy-21-1-2', name: "Lenz's Law", questionCount: 7 },
          { id: 'phy-21-1-3', name: 'Motional EMF', questionCount: 6 },
        ]},
        { id: 'phy-21-2', name: 'Inductance', questionCount: 20, children: [
          { id: 'phy-21-2-1', name: 'Self & Mutual Inductance', questionCount: 7 },
          { id: 'phy-21-2-2', name: 'AC Generator', questionCount: 7 },
          { id: 'phy-21-2-3', name: 'Eddy Currents', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-22', name: 'Alternating Current', class: 12, questionCount: 40, children: [
        { id: 'phy-22-1', name: 'AC Circuits', questionCount: 25, children: [
          { id: 'phy-22-1-1', name: 'AC Voltage & Current (RMS, Peak)', questionCount: 6 },
          { id: 'phy-22-1-2', name: 'LCR Circuit & Resonance', questionCount: 7 },
          { id: 'phy-22-1-3', name: 'Power in AC (Power Factor)', questionCount: 6 },
          { id: 'phy-22-1-4', name: 'Impedance & Phasor Diagrams', questionCount: 6 },
        ]},
        { id: 'phy-22-2', name: 'Transformers', questionCount: 15, children: [
          { id: 'phy-22-2-1', name: 'Transformer Working & Efficiency', questionCount: 5 },
          { id: 'phy-22-2-2', name: 'Step-Up & Step-Down', questionCount: 5 },
          { id: 'phy-22-2-3', name: 'LC Oscillations', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-23', name: 'Electromagnetic Waves', class: 12, questionCount: 20, children: [
        { id: 'phy-23-1', name: 'EM Spectrum', questionCount: 15, children: [
          { id: 'phy-23-1-1', name: 'Displacement Current & Maxwell Equations', questionCount: 5 },
          { id: 'phy-23-1-2', name: 'EM Spectrum & Properties', questionCount: 5 },
          { id: 'phy-23-1-3', name: 'Applications of EM Waves', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-24', name: 'Ray Optics and Optical Instruments', class: 12, questionCount: 50, children: [
        { id: 'phy-24-1', name: 'Reflection & Refraction', questionCount: 25, children: [
          { id: 'phy-24-1-1', name: "Snell's Law & TIR", questionCount: 7 },
          { id: 'phy-24-1-2', name: 'Lens & Mirror Formulae', questionCount: 6 },
          { id: 'phy-24-1-3', name: 'Refraction through Prism', questionCount: 6 },
          { id: 'phy-24-1-4', name: 'Dispersion & Scattering', questionCount: 6 },
        ]},
        { id: 'phy-24-2', name: 'Optical Instruments', questionCount: 25, children: [
          { id: 'phy-24-2-1', name: 'Human Eye & Defects', questionCount: 7 },
          { id: 'phy-24-2-2', name: 'Microscope (Simple & Compound)', questionCount: 6 },
          { id: 'phy-24-2-3', name: 'Telescope (Reflecting & Refracting)', questionCount: 6 },
          { id: 'phy-24-2-4', name: 'Power of Lens & Combination', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-25', name: 'Wave Optics', class: 12, questionCount: 40, children: [
        { id: 'phy-25-1', name: 'Interference & Diffraction', questionCount: 25, children: [
          { id: 'phy-25-1-1', name: "Young's Double Slit Experiment", questionCount: 8 },
          { id: 'phy-25-1-2', name: 'Single Slit Diffraction', questionCount: 6 },
          { id: 'phy-25-1-3', name: "Huygens' Principle", questionCount: 5 },
          { id: 'phy-25-1-4', name: 'Resolving Power', questionCount: 6 },
        ]},
        { id: 'phy-25-2', name: 'Polarisation', questionCount: 15, children: [
          { id: 'phy-25-2-1', name: 'Polarisation by Reflection & Refraction', questionCount: 5 },
          { id: 'phy-25-2-2', name: "Brewster's Law & Malus' Law", questionCount: 5 },
          { id: 'phy-25-2-3', name: 'Polaroids & Applications', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-26', name: 'Dual Nature of Radiation and Matter', class: 12, questionCount: 35, children: [
        { id: 'phy-26-1', name: 'Photoelectric Effect', questionCount: 20, children: [
          { id: 'phy-26-1-1', name: "Einstein's Photoelectric Equation", questionCount: 7 },
          { id: 'phy-26-1-2', name: 'Work Function & Threshold Frequency', questionCount: 7 },
          { id: 'phy-26-1-3', name: 'Photocell & Applications', questionCount: 6 },
        ]},
        { id: 'phy-26-2', name: 'Matter Waves', questionCount: 15, children: [
          { id: 'phy-26-2-1', name: 'de Broglie Wavelength', questionCount: 5 },
          { id: 'phy-26-2-2', name: 'Davisson-Germer Experiment', questionCount: 5 },
          { id: 'phy-26-2-3', name: 'Wave-Particle Duality', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-27', name: 'Atoms', class: 12, questionCount: 30, children: [
        { id: 'phy-27-1', name: 'Atomic Models', questionCount: 15, children: [
          { id: 'phy-27-1-1', name: "Rutherford's Model & Alpha Scattering", questionCount: 5 },
          { id: 'phy-27-1-2', name: "Bohr's Model & Energy Levels", questionCount: 5 },
          { id: 'phy-27-1-3', name: 'Hydrogen Spectrum Series', questionCount: 5 },
        ]},
      ]},
      { id: 'phy-28', name: 'Nuclei', class: 12, questionCount: 30, children: [
        { id: 'phy-28-1', name: 'Nuclear Physics', questionCount: 18, children: [
          { id: 'phy-28-1-1', name: 'Nuclear Size, Density & Forces', questionCount: 6 },
          { id: 'phy-28-1-2', name: 'Mass Defect & Binding Energy', questionCount: 6 },
          { id: 'phy-28-1-3', name: 'Radioactivity & Decay Laws', questionCount: 6 },
        ]},
        { id: 'phy-28-2', name: 'Nuclear Reactions', questionCount: 12, children: [
          { id: 'phy-28-2-1', name: 'Nuclear Fission', questionCount: 6 },
          { id: 'phy-28-2-2', name: 'Nuclear Fusion', questionCount: 6 },
        ]},
      ]},
      { id: 'phy-29', name: 'Semiconductor Electronics', class: 12, questionCount: 40, children: [
        { id: 'phy-29-1', name: 'Semiconductors', questionCount: 15, children: [
          { id: 'phy-29-1-1', name: 'Intrinsic & Extrinsic Semiconductors', questionCount: 5 },
          { id: 'phy-29-1-2', name: 'p-n Junction & Diode', questionCount: 5 },
          { id: 'phy-29-1-3', name: 'Diode as Rectifier', questionCount: 5 },
        ]},
        { id: 'phy-29-2', name: 'Special Diodes & Transistors', questionCount: 15, children: [
          { id: 'phy-29-2-1', name: 'Zener Diode & LED', questionCount: 5 },
          { id: 'phy-29-2-2', name: 'Transistor Action (npn, pnp)', questionCount: 5 },
          { id: 'phy-29-2-3', name: 'Transistor as Amplifier & Switch', questionCount: 5 },
        ]},
        { id: 'phy-29-3', name: 'Logic Gates', questionCount: 10, children: [
          { id: 'phy-29-3-1', name: 'AND, OR, NOT, NAND, NOR Gates', questionCount: 5 },
          { id: 'phy-29-3-2', name: 'Combination of Gates', questionCount: 5 },
        ]},
      ]},
    ],
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    color: 'chemistry',
    chapters: [
      // ─── CLASS 11 ───
      { id: 'chem-1', name: 'Some Basic Concepts of Chemistry', class: 11, questionCount: 50, children: [
        { id: 'chem-1-1', name: 'Laws of Chemical Combination', questionCount: 15, children: [
          { id: 'chem-1-1-1', name: 'Law of Conservation & Definite Proportions', questionCount: 5 },
          { id: 'chem-1-1-2', name: 'Law of Multiple Proportions', questionCount: 5 },
          { id: 'chem-1-1-3', name: "Gay Lussac's & Avogadro's Law", questionCount: 5 },
        ]},
        { id: 'chem-1-2', name: 'Mole Concept', questionCount: 20, children: [
          { id: 'chem-1-2-1', name: 'Molar Mass & Moles', questionCount: 5 },
          { id: 'chem-1-2-2', name: 'Percentage Composition', questionCount: 5 },
          { id: 'chem-1-2-3', name: 'Empirical & Molecular Formula', questionCount: 5 },
          { id: 'chem-1-2-4', name: 'Stoichiometry & Limiting Reagent', questionCount: 5 },
        ]},
        { id: 'chem-1-3', name: 'Concentration Terms', questionCount: 15, children: [
          { id: 'chem-1-3-1', name: 'Molarity & Molality', questionCount: 5 },
          { id: 'chem-1-3-2', name: 'Mole Fraction & ppm', questionCount: 5 },
          { id: 'chem-1-3-3', name: 'Normality', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-2', name: 'Structure of Atom', class: 11, questionCount: 55, children: [
        { id: 'chem-2-1', name: 'Atomic Models', questionCount: 18, children: [
          { id: 'chem-2-1-1', name: "Thomson's & Rutherford's Model", questionCount: 6 },
          { id: 'chem-2-1-2', name: "Bohr's Model", questionCount: 6 },
          { id: 'chem-2-1-3', name: 'Quantum Mechanical Model', questionCount: 6 },
        ]},
        { id: 'chem-2-2', name: 'Quantum Numbers', questionCount: 15, children: [
          { id: 'chem-2-2-1', name: 'n, l, ml, ms Quantum Numbers', questionCount: 5 },
          { id: 'chem-2-2-2', name: 'Shapes of Orbitals', questionCount: 5 },
          { id: 'chem-2-2-3', name: 'Nodes & Probability', questionCount: 5 },
        ]},
        { id: 'chem-2-3', name: 'Electronic Configuration', questionCount: 22, children: [
          { id: 'chem-2-3-1', name: 'Aufbau & Pauli Exclusion', questionCount: 6 },
          { id: 'chem-2-3-2', name: "Hund's Rule", questionCount: 5 },
          { id: 'chem-2-3-3', name: 'Anomalous Configurations (Cr, Cu)', questionCount: 5 },
          { id: 'chem-2-3-4', name: 'Photoelectric Effect & Spectra', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-3', name: 'Classification of Elements and Periodicity', class: 11, questionCount: 40, children: [
        { id: 'chem-3-1', name: 'Periodic Table', questionCount: 15, children: [
          { id: 'chem-3-1-1', name: 'Modern Periodic Law & Table', questionCount: 5 },
          { id: 'chem-3-1-2', name: 'Blocks (s, p, d, f)', questionCount: 5 },
          { id: 'chem-3-1-3', name: 'Nomenclature of Elements > 100', questionCount: 5 },
        ]},
        { id: 'chem-3-2', name: 'Periodic Properties', questionCount: 25, children: [
          { id: 'chem-3-2-1', name: 'Atomic & Ionic Radii', questionCount: 5 },
          { id: 'chem-3-2-2', name: 'Ionisation Energy', questionCount: 5 },
          { id: 'chem-3-2-3', name: 'Electron Affinity', questionCount: 5 },
          { id: 'chem-3-2-4', name: 'Electronegativity', questionCount: 5 },
          { id: 'chem-3-2-5', name: 'Metallic & Non-Metallic Character', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-4', name: 'Chemical Bonding and Molecular Structure', class: 11, questionCount: 60, children: [
        { id: 'chem-4-1', name: 'Ionic & Covalent Bonds', questionCount: 20, children: [
          { id: 'chem-4-1-1', name: 'Ionic Bond & Lattice Energy', questionCount: 5 },
          { id: 'chem-4-1-2', name: 'Lewis Structures & Formal Charge', questionCount: 5 },
          { id: 'chem-4-1-3', name: 'Resonance & Bond Parameters', questionCount: 5 },
          { id: 'chem-4-1-4', name: 'Polarity & Dipole Moment', questionCount: 5 },
        ]},
        { id: 'chem-4-2', name: 'VSEPR & Hybridization', questionCount: 25, children: [
          { id: 'chem-4-2-1', name: 'VSEPR Theory & Shapes', questionCount: 7 },
          { id: 'chem-4-2-2', name: 'sp, sp², sp³ Hybridization', questionCount: 6 },
          { id: 'chem-4-2-3', name: 'sp³d, sp³d² Hybridization', questionCount: 6 },
          { id: 'chem-4-2-4', name: 'MOT: Bond Order', questionCount: 6 },
        ]},
        { id: 'chem-4-3', name: 'Hydrogen Bonding', questionCount: 15, children: [
          { id: 'chem-4-3-1', name: 'Intermolecular Forces', questionCount: 5 },
          { id: 'chem-4-3-2', name: 'Types of H-Bonding', questionCount: 5 },
          { id: 'chem-4-3-3', name: 'Coordinate Bond & Back Bonding', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-5', name: 'Thermodynamics', class: 11, questionCount: 45, children: [
        { id: 'chem-5-1', name: 'First Law & Enthalpy', questionCount: 20, children: [
          { id: 'chem-5-1-1', name: 'System, Surroundings & Processes', questionCount: 5 },
          { id: 'chem-5-1-2', name: 'Internal Energy & Enthalpy', questionCount: 5 },
          { id: 'chem-5-1-3', name: "Hess's Law", questionCount: 5 },
          { id: 'chem-5-1-4', name: 'Bond Enthalpy & Lattice Enthalpy', questionCount: 5 },
        ]},
        { id: 'chem-5-2', name: 'Entropy & Free Energy', questionCount: 15, children: [
          { id: 'chem-5-2-1', name: 'Entropy & Second Law', questionCount: 5 },
          { id: 'chem-5-2-2', name: 'Gibbs Free Energy', questionCount: 5 },
          { id: 'chem-5-2-3', name: 'Spontaneity Criteria', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-6', name: 'Equilibrium', class: 11, questionCount: 50, children: [
        { id: 'chem-6-1', name: 'Chemical Equilibrium', questionCount: 25, children: [
          { id: 'chem-6-1-1', name: 'Equilibrium Constant (Kc, Kp)', questionCount: 7 },
          { id: 'chem-6-1-2', name: "Le Chatelier's Principle", questionCount: 6 },
          { id: 'chem-6-1-3', name: 'Relationship between Kc & Kp', questionCount: 6 },
          { id: 'chem-6-1-4', name: 'ICE Table Problems', questionCount: 6 },
        ]},
        { id: 'chem-6-2', name: 'Ionic Equilibrium', questionCount: 25, children: [
          { id: 'chem-6-2-1', name: 'Acids, Bases & pH', questionCount: 7 },
          { id: 'chem-6-2-2', name: 'Buffer Solutions', questionCount: 6 },
          { id: 'chem-6-2-3', name: 'Solubility Product (Ksp)', questionCount: 6 },
          { id: 'chem-6-2-4', name: 'Common Ion Effect', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-7', name: 'Redox Reactions', class: 11, questionCount: 30, children: [
        { id: 'chem-7-1', name: 'Redox Concepts', questionCount: 20, children: [
          { id: 'chem-7-1-1', name: 'Oxidation Number Rules', questionCount: 7 },
          { id: 'chem-7-1-2', name: 'Types of Redox Reactions', questionCount: 7 },
          { id: 'chem-7-1-3', name: 'Balancing Redox Equations', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-8', name: 'Hydrogen', class: 11, questionCount: 20, children: [
        { id: 'chem-8-1', name: 'Hydrogen', questionCount: 15, children: [
          { id: 'chem-8-1-1', name: 'Position, Isotopes & Properties', questionCount: 5 },
          { id: 'chem-8-1-2', name: 'Water & Heavy Water', questionCount: 5 },
          { id: 'chem-8-1-3', name: 'Hydrogen Peroxide', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-9', name: 's-Block Elements', class: 11, questionCount: 35, children: [
        { id: 'chem-9-1', name: 'Alkali Metals', questionCount: 18, children: [
          { id: 'chem-9-1-1', name: 'Properties of Group 1', questionCount: 6 },
          { id: 'chem-9-1-2', name: 'NaOH, Na₂CO₃, NaHCO₃', questionCount: 6 },
          { id: 'chem-9-1-3', name: 'Anomalous Properties of Li', questionCount: 6 },
        ]},
        { id: 'chem-9-2', name: 'Alkaline Earth Metals', questionCount: 17, children: [
          { id: 'chem-9-2-1', name: 'Properties of Group 2', questionCount: 6 },
          { id: 'chem-9-2-2', name: 'CaO, Ca(OH)₂, CaSO₄, CaCO₃', questionCount: 5 },
          { id: 'chem-9-2-3', name: 'Anomalous Properties of Be', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-10', name: 'p-Block Elements (Class 11)', class: 11, questionCount: 40, children: [
        { id: 'chem-10-1', name: 'Group 13 (Boron Family)', questionCount: 15, children: [
          { id: 'chem-10-1-1', name: 'Boron: Properties & Compounds', questionCount: 5 },
          { id: 'chem-10-1-2', name: 'Aluminium & Its Compounds', questionCount: 5 },
          { id: 'chem-10-1-3', name: 'Borax, Boric Acid, BF₃', questionCount: 5 },
        ]},
        { id: 'chem-10-2', name: 'Group 14 (Carbon Family)', questionCount: 15, children: [
          { id: 'chem-10-2-1', name: 'Allotropes of Carbon', questionCount: 5 },
          { id: 'chem-10-2-2', name: 'CO, CO₂ & Silicon', questionCount: 5 },
          { id: 'chem-10-2-3', name: 'Silicones & Zeolites', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-11', name: 'Hydrocarbons', class: 11, questionCount: 50, children: [
        { id: 'chem-11-1', name: 'Alkanes', questionCount: 15, children: [
          { id: 'chem-11-1-1', name: 'IUPAC Nomenclature', questionCount: 5 },
          { id: 'chem-11-1-2', name: 'Conformations of Ethane', questionCount: 5 },
          { id: 'chem-11-1-3', name: 'Reactions of Alkanes', questionCount: 5 },
        ]},
        { id: 'chem-11-2', name: 'Alkenes & Alkynes', questionCount: 20, children: [
          { id: 'chem-11-2-1', name: 'Preparation & Properties of Alkenes', questionCount: 5 },
          { id: 'chem-11-2-2', name: "Markownikoff's & Anti-Markownikoff's", questionCount: 5 },
          { id: 'chem-11-2-3', name: 'Preparation & Properties of Alkynes', questionCount: 5 },
          { id: 'chem-11-2-4', name: 'Acidic Nature of Alkynes', questionCount: 5 },
        ]},
        { id: 'chem-11-3', name: 'Aromatic Hydrocarbons', questionCount: 15, children: [
          { id: 'chem-11-3-1', name: 'Benzene Structure & Aromaticity', questionCount: 5 },
          { id: 'chem-11-3-2', name: 'EAS Reactions', questionCount: 5 },
          { id: 'chem-11-3-3', name: 'Directive Effects', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-12', name: 'Environmental Chemistry', class: 11, questionCount: 15, children: [
        { id: 'chem-12-1', name: 'Environmental Pollution', questionCount: 15, children: [
          { id: 'chem-12-1-1', name: 'Air, Water & Soil Pollution', questionCount: 5 },
          { id: 'chem-12-1-2', name: 'Ozone Depletion & Green Chemistry', questionCount: 5 },
          { id: 'chem-12-1-3', name: 'Industrial Waste & Strategies', questionCount: 5 },
        ]},
      ]},
      // ─── CLASS 12 ───
      { id: 'chem-13', name: 'Solid State', class: 12, questionCount: 35, children: [
        { id: 'chem-13-1', name: 'Crystal Structures', questionCount: 20, children: [
          { id: 'chem-13-1-1', name: 'Unit Cells (SC, BCC, FCC)', questionCount: 7 },
          { id: 'chem-13-1-2', name: 'Packing Efficiency & Voids', questionCount: 7 },
          { id: 'chem-13-1-3', name: 'Density Calculations', questionCount: 6 },
        ]},
        { id: 'chem-13-2', name: 'Defects', questionCount: 15, children: [
          { id: 'chem-13-2-1', name: 'Schottky & Frenkel Defects', questionCount: 5 },
          { id: 'chem-13-2-2', name: 'Electrical & Magnetic Properties', questionCount: 5 },
          { id: 'chem-13-2-3', name: 'Band Theory of Metals', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-14', name: 'Solutions', class: 12, questionCount: 40, children: [
        { id: 'chem-14-1', name: 'Types & Concentration', questionCount: 12, children: [
          { id: 'chem-14-1-1', name: 'Types of Solutions & Solubility', questionCount: 6 },
          { id: 'chem-14-1-2', name: "Henry's Law & Raoult's Law", questionCount: 6 },
        ]},
        { id: 'chem-14-2', name: 'Colligative Properties', questionCount: 28, children: [
          { id: 'chem-14-2-1', name: 'Relative Lowering of Vapour Pressure', questionCount: 7 },
          { id: 'chem-14-2-2', name: 'Boiling Point Elevation', questionCount: 7 },
          { id: 'chem-14-2-3', name: 'Freezing Point Depression', questionCount: 7 },
          { id: 'chem-14-2-4', name: 'Osmotic Pressure & van\'t Hoff Factor', questionCount: 7 },
        ]},
      ]},
      { id: 'chem-15', name: 'Electrochemistry', class: 12, questionCount: 40, children: [
        { id: 'chem-15-1', name: 'Electrochemical Cells', questionCount: 20, children: [
          { id: 'chem-15-1-1', name: 'Galvanic Cell & Nernst Equation', questionCount: 7 },
          { id: 'chem-15-1-2', name: 'EMF & Standard Electrode Potential', questionCount: 7 },
          { id: 'chem-15-1-3', name: 'Electrolytic Cell & Faraday Laws', questionCount: 6 },
        ]},
        { id: 'chem-15-2', name: 'Conductance', questionCount: 20, children: [
          { id: 'chem-15-2-1', name: 'Molar & Equivalent Conductivity', questionCount: 7 },
          { id: 'chem-15-2-2', name: 'Kohlrausch Law', questionCount: 7 },
          { id: 'chem-15-2-3', name: 'Batteries & Corrosion', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-16', name: 'Chemical Kinetics', class: 12, questionCount: 40, children: [
        { id: 'chem-16-1', name: 'Rate of Reaction', questionCount: 20, children: [
          { id: 'chem-16-1-1', name: 'Rate Law & Order of Reaction', questionCount: 7 },
          { id: 'chem-16-1-2', name: 'Zero & First Order Kinetics', questionCount: 7 },
          { id: 'chem-16-1-3', name: 'Half-Life & Rate Constant', questionCount: 6 },
        ]},
        { id: 'chem-16-2', name: 'Factors & Theory', questionCount: 20, children: [
          { id: 'chem-16-2-1', name: 'Arrhenius Equation & Ea', questionCount: 7 },
          { id: 'chem-16-2-2', name: 'Collision Theory', questionCount: 7 },
          { id: 'chem-16-2-3', name: 'Temperature Coefficient', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-17', name: 'Surface Chemistry', class: 12, questionCount: 25, children: [
        { id: 'chem-17-1', name: 'Adsorption & Catalysis', questionCount: 15, children: [
          { id: 'chem-17-1-1', name: 'Physical vs Chemical Adsorption', questionCount: 5 },
          { id: 'chem-17-1-2', name: 'Homogeneous & Heterogeneous Catalysis', questionCount: 5 },
          { id: 'chem-17-1-3', name: 'Enzyme Catalysis', questionCount: 5 },
        ]},
        { id: 'chem-17-2', name: 'Colloids & Emulsions', questionCount: 10, children: [
          { id: 'chem-17-2-1', name: 'Types of Colloids & Tyndall Effect', questionCount: 5 },
          { id: 'chem-17-2-2', name: 'Coagulation & Emulsions', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-18', name: 'General Principles of Isolation of Elements', class: 12, questionCount: 20, children: [
        { id: 'chem-18-1', name: 'Metallurgy', questionCount: 15, children: [
          { id: 'chem-18-1-1', name: 'Concentration of Ores', questionCount: 5 },
          { id: 'chem-18-1-2', name: 'Extraction: Reduction Methods', questionCount: 5 },
          { id: 'chem-18-1-3', name: 'Refining: Electrolytic & Zone', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-19', name: 'p-Block Elements (Class 12)', class: 12, questionCount: 45, children: [
        { id: 'chem-19-1', name: 'Group 15 (Nitrogen Family)', questionCount: 15, children: [
          { id: 'chem-19-1-1', name: 'NH₃, HNO₃ & Oxides of Nitrogen', questionCount: 5 },
          { id: 'chem-19-1-2', name: 'Phosphorus & Its Compounds', questionCount: 5 },
          { id: 'chem-19-1-3', name: 'PCl₃, PCl₅ & Phosphine', questionCount: 5 },
        ]},
        { id: 'chem-19-2', name: 'Group 16 (Oxygen Family)', questionCount: 10, children: [
          { id: 'chem-19-2-1', name: 'Ozone, SO₂ & H₂SO₄', questionCount: 5 },
          { id: 'chem-19-2-2', name: 'Sulphur Allotropes & Compounds', questionCount: 5 },
        ]},
        { id: 'chem-19-3', name: 'Group 17 (Halogens)', questionCount: 10, children: [
          { id: 'chem-19-3-1', name: 'HCl, HF & Interhalogen Compounds', questionCount: 5 },
          { id: 'chem-19-3-2', name: 'Oxoacids of Halogens', questionCount: 5 },
        ]},
        { id: 'chem-19-4', name: 'Group 18 (Noble Gases)', questionCount: 10, children: [
          { id: 'chem-19-4-1', name: 'Properties & Xenon Compounds', questionCount: 5 },
          { id: 'chem-19-4-2', name: 'Uses of Noble Gases', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-20', name: 'd and f Block Elements', class: 12, questionCount: 40, children: [
        { id: 'chem-20-1', name: 'Transition Elements', questionCount: 25, children: [
          { id: 'chem-20-1-1', name: 'Electronic Configuration & Properties', questionCount: 7 },
          { id: 'chem-20-1-2', name: 'Variable Oxidation States', questionCount: 6 },
          { id: 'chem-20-1-3', name: 'Colour, Magnetic & Catalytic Properties', questionCount: 6 },
          { id: 'chem-20-1-4', name: 'KMnO₄ & K₂Cr₂O₇', questionCount: 6 },
        ]},
        { id: 'chem-20-2', name: 'Lanthanoids & Actinoids', questionCount: 15, children: [
          { id: 'chem-20-2-1', name: 'Lanthanoid Contraction', questionCount: 5 },
          { id: 'chem-20-2-2', name: 'Actinoids: Properties', questionCount: 5 },
          { id: 'chem-20-2-3', name: 'Comparison: 3d vs 4f', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-21', name: 'Coordination Compounds', class: 12, questionCount: 40, children: [
        { id: 'chem-21-1', name: 'Coordination Chemistry', questionCount: 25, children: [
          { id: 'chem-21-1-1', name: 'Werner Theory & IUPAC Naming', questionCount: 7 },
          { id: 'chem-21-1-2', name: 'Coordination Number & Isomerism', questionCount: 6 },
          { id: 'chem-21-1-3', name: 'VBT: Hybridization in Complexes', questionCount: 6 },
          { id: 'chem-21-1-4', name: 'CFT: Crystal Field Splitting', questionCount: 6 },
        ]},
        { id: 'chem-21-2', name: 'Applications', questionCount: 15, children: [
          { id: 'chem-21-2-1', name: 'Importance in Biology & Medicine', questionCount: 5 },
          { id: 'chem-21-2-2', name: 'Stability of Complexes', questionCount: 5 },
          { id: 'chem-21-2-3', name: 'Organometallic Compounds', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-22', name: 'Haloalkanes and Haloarenes', class: 12, questionCount: 35, children: [
        { id: 'chem-22-1', name: 'Haloalkanes', questionCount: 20, children: [
          { id: 'chem-22-1-1', name: 'Nomenclature & Classification', questionCount: 5 },
          { id: 'chem-22-1-2', name: 'SN1 & SN2 Mechanisms', questionCount: 5 },
          { id: 'chem-22-1-3', name: 'Elimination Reactions (E1, E2)', questionCount: 5 },
          { id: 'chem-22-1-4', name: 'Grignard Reagent & Wurtz Reaction', questionCount: 5 },
        ]},
        { id: 'chem-22-2', name: 'Haloarenes', questionCount: 15, children: [
          { id: 'chem-22-2-1', name: 'Preparation & Properties', questionCount: 5 },
          { id: 'chem-22-2-2', name: 'Nucleophilic Substitution in Arenes', questionCount: 5 },
          { id: 'chem-22-2-3', name: 'DDT, BHC, Freons', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-23', name: 'Alcohols, Phenols and Ethers', class: 12, questionCount: 40, children: [
        { id: 'chem-23-1', name: 'Alcohols', questionCount: 15, children: [
          { id: 'chem-23-1-1', name: 'Classification & Preparation', questionCount: 5 },
          { id: 'chem-23-1-2', name: 'Chemical Reactions', questionCount: 5 },
          { id: 'chem-23-1-3', name: 'Distinction Tests (Lucas Test)', questionCount: 5 },
        ]},
        { id: 'chem-23-2', name: 'Phenols', questionCount: 15, children: [
          { id: 'chem-23-2-1', name: 'Acidity & Preparation', questionCount: 5 },
          { id: 'chem-23-2-2', name: 'Electrophilic Substitution', questionCount: 5 },
          { id: 'chem-23-2-3', name: 'Kolbe, Reimer-Tiemann Reactions', questionCount: 5 },
        ]},
        { id: 'chem-23-3', name: 'Ethers', questionCount: 10, children: [
          { id: 'chem-23-3-1', name: 'Williamson Synthesis', questionCount: 5 },
          { id: 'chem-23-3-2', name: 'Reactions of Ethers', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-24', name: 'Aldehydes, Ketones and Carboxylic Acids', class: 12, questionCount: 50, children: [
        { id: 'chem-24-1', name: 'Aldehydes & Ketones', questionCount: 25, children: [
          { id: 'chem-24-1-1', name: 'Preparation Methods', questionCount: 5 },
          { id: 'chem-24-1-2', name: 'Nucleophilic Addition Reactions', questionCount: 7 },
          { id: 'chem-24-1-3', name: 'Aldol, Cannizzaro, Cross Aldol', questionCount: 7 },
          { id: 'chem-24-1-4', name: 'Distinction Tests (Tollens, Fehling)', questionCount: 6 },
        ]},
        { id: 'chem-24-2', name: 'Carboxylic Acids', questionCount: 25, children: [
          { id: 'chem-24-2-1', name: 'Preparation & Acidity', questionCount: 7 },
          { id: 'chem-24-2-2', name: 'Reactions: Esterification, HVZ', questionCount: 6 },
          { id: 'chem-24-2-3', name: 'Effect of Substituents on Acidity', questionCount: 6 },
          { id: 'chem-24-2-4', name: 'Derivatives of Carboxylic Acids', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-25', name: 'Amines', class: 12, questionCount: 30, children: [
        { id: 'chem-25-1', name: 'Amines', questionCount: 20, children: [
          { id: 'chem-25-1-1', name: 'Classification & Preparation', questionCount: 5 },
          { id: 'chem-25-1-2', name: 'Basicity of Amines', questionCount: 5 },
          { id: 'chem-25-1-3', name: 'Diazonium Salts & Reactions', questionCount: 5 },
          { id: 'chem-25-1-4', name: 'Carbylamine & Hofmann Tests', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-26', name: 'Biomolecules', class: 12, questionCount: 30, children: [
        { id: 'chem-26-1', name: 'Carbohydrates & Proteins', questionCount: 18, children: [
          { id: 'chem-26-1-1', name: 'Glucose & Fructose Structure', questionCount: 6 },
          { id: 'chem-26-1-2', name: 'Amino Acids & Protein Structure', questionCount: 6 },
          { id: 'chem-26-1-3', name: 'Enzymes & Vitamins', questionCount: 6 },
        ]},
        { id: 'chem-26-2', name: 'Nucleic Acids & Hormones', questionCount: 12, children: [
          { id: 'chem-26-2-1', name: 'DNA & RNA Structure', questionCount: 6 },
          { id: 'chem-26-2-2', name: 'Hormones & Their Functions', questionCount: 6 },
        ]},
      ]},
      { id: 'chem-27', name: 'Polymers', class: 12, questionCount: 20, children: [
        { id: 'chem-27-1', name: 'Polymers', questionCount: 15, children: [
          { id: 'chem-27-1-1', name: 'Classification & Types', questionCount: 5 },
          { id: 'chem-27-1-2', name: 'Addition & Condensation Polymers', questionCount: 5 },
          { id: 'chem-27-1-3', name: 'Nylon, Bakelite, Teflon, PVC', questionCount: 5 },
        ]},
      ]},
      { id: 'chem-28', name: 'Chemistry in Everyday Life', class: 12, questionCount: 20, children: [
        { id: 'chem-28-1', name: 'Drugs & Chemicals', questionCount: 15, children: [
          { id: 'chem-28-1-1', name: 'Drugs: Classification & Action', questionCount: 5 },
          { id: 'chem-28-1-2', name: 'Soaps & Detergents', questionCount: 5 },
          { id: 'chem-28-1-3', name: 'Food Preservatives & Sweeteners', questionCount: 5 },
        ]},
      ]},
    ],
  },
};

export default syllabus;

/**
 * Helper: Find a topic node by ID across the entire syllabus
 */
export function findTopicById(id) {
  for (const subject of Object.values(syllabus)) {
    const result = searchNode(subject.chapters, id);
    if (result) return { ...result, subject: subject.id, subjectName: subject.name };
  }
  return null;
}

function searchNode(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = searchNode(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Helper: Get all leaf topic IDs from a node
 */
export function getAllLeafIds(node) {
  if (!node.children || node.children.length === 0) return [node.id];
  return node.children.flatMap(getAllLeafIds);
}

/**
 * Helper: Search syllabus by query string
 */
export function searchSyllabus(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results = [];

  for (const subject of Object.values(syllabus)) {
    const searchInNodes = (nodes, path = []) => {
      for (const node of nodes) {
        const currentPath = [...path, node.name];
        if (node.name.toLowerCase().includes(q)) {
          results.push({
            id: node.id,
            name: node.name,
            path: currentPath,
            subject: subject.id,
            subjectName: subject.name,
            subjectIcon: subject.icon,
            questionCount: node.questionCount,
          });
        }
        if (node.children) searchInNodes(node.children, currentPath);
      }
    };
    searchInNodes(subject.chapters);
  }

  return results.slice(0, 20);
}

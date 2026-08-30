import { experienceImages } from './experienceImages.js';

export const experienceCategories = [
  {
    key: 'academic',
    label: 'Academic Experience',
    description:
      'Robotics competitions and innovation work that turned technical practice into real event experience.',
    emptyMessage: 'Technical experience will be added here.',
  },
  {
    key: 'non-academic',
    label: 'Non-Academic Experience',
    description:
      'Club involvement, committee work, and music achievements developed beyond the classroom.',
    emptyMessage: 'Activities and achievements will be added here.',
  },
];

export const studentModeExperiences = [
  {
    name: 'BrainMedDL',
    description:
      'A Colab-ready CNN study that classifies brain-tumor MRI images across four categories, with augmentation, training curves, and confusion-matrix evaluation.',
    stack: ['Python', 'TensorFlow', 'Keras', 'scikit-learn'],
    github: 'https://github.com/RexCrowSS1/BrainMedDL',
    demo: '',
    category: 'academic',
    status: 'Deep Learning Notebook',
  },
  {
    name: 'HeartMLDecisionTree',
    description:
      'A decision-tree classification study on the Cleveland heart-disease dataset, tuned with GridSearchCV and evaluated on a held-out test split.',
    stack: ['Python', 'scikit-learn', 'pandas', 'Jupyter'],
    github: 'https://github.com/RexCrowSS1/HeartMLDecisionTree',
    demo: '',
    category: 'academic',
    status: 'Machine Learning Notebook',
  },
  {
    name: 'ETH-Predict',
    description:
      'A CNN-LSTM time-series experiment for forecasting ETH closing prices from Yahoo Finance data, with hyperparameter search and regression metrics.',
    stack: ['Python', 'TensorFlow', 'yfinance', 'scikit-optimize'],
    github: 'https://github.com/RexCrowSS1/ETH-Predict',
    demo: '',
    category: 'academic',
    status: 'Time-Series Notebook',
  },
  {
    name: 'airbnb_predict',
    description:
      'An end-to-end Airbnb price-prediction pipeline that engineers roughly 105 features and blends LightGBM and CatBoost with leakage-aware validation.',
    stack: ['Python', 'LightGBM', 'CatBoost', 'scikit-learn'],
    github: 'https://github.com/RexCrowSS1/airbnb_predict',
    demo: '',
    category: 'academic',
    status: 'Machine Learning Notebook',
  },
  {
    name: 'AIpic-or-not',
    description:
      'A CNN image-classification notebook that distinguishes AI-generated artwork from real images and evaluates performance with classification metrics and a confusion matrix.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Kaggle'],
    github: 'https://github.com/RexCrowSS1/AIpic-or-not',
    demo: '',
    category: 'academic',
    status: 'Deep Learning Notebook',
  },
  {
    name: 'predict_user_expense',
    description:
      'A C++ command-line expense tracker that forecasts future spending with moving averages and flags over-budget days using a simple decision stump.',
    stack: ['C++', 'STL', 'CSV', 'Time Series'],
    github: 'https://github.com/RexCrowSS1/predict_user_expense',
    demo: '',
    category: 'academic',
    status: 'CLI Prototype',
  },
  {
    name: 'sayyidina',
    description:
      'A dual-mode personal portfolio that presents computer science work and beyond-the-classroom experience through animated, responsive storytelling.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/RexCrowSS1/sayyidina',
    demo: 'https://sayyidina.vercel.app',
    category: 'academic',
    status: 'Live Portfolio',
  },
  {
    name: 'ugm-cs-26Bot',
    description:
      'A role-gated Discord utility bot for composing and publishing styled embed announcements through slash commands.',
    stack: ['Python', 'discord.py', 'Discord API', 'python-dotenv'],
    github: 'https://github.com/RexCrowSS1/ugm-cs-26Bot',
    demo: '',
    category: 'non-academic',
    status: 'Discord Utility',
  },
  {
    name: 'AICompanion',
    description:
      'A local-first AI companion with intent and mood detection, persistent conversation memory, a FastAPI/PostgreSQL backend, and optional Ollama-powered replies.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Ollama'],
    github: 'https://github.com/RexCrowSS1/AICompanion',
    demo: 'https://eclpsassist.vercel.app/',
    category: 'academic',
    status: 'Live AI App',
  },
  {
    name: 'AIUlik',
    description:
      'An MP3 analysis web app that separates vocals, transcribes timestamped lyrics, detects chord progressions, and synchronizes chords with playback.',
    stack: ['FastAPI', 'React', 'Demucs', 'Whisper'],
    github: 'https://github.com/RexCrowSS1/AIUlik',
    demo: '',
    category: 'academic',
    status: 'Audio AI Prototype',
  },
  {
    name: 'foto-kita-blur-mac',
    description:
      'A real-time webcam experiment that recognizes hand gestures with MediaPipe and applies blur or text overlays through OpenCV.',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/RexCrowSS1/foto-kita-blur-mac',
    demo: '',
    category: 'non-academic',
    status: 'Computer Vision Utility',
  },
  {
    name: 'archive-x',
    description:
      'An interactive developer knowledge archive covering core languages, web development, APIs, data mining, machine learning, and deep learning.',
    stack: ['React', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    github: 'https://github.com/RexCrowSS1/archive-x',
    demo: 'https://archive-x-indol.vercel.app',
    category: 'academic',
    status: 'Live Knowledge Base',
  },
  {
    name: 'Eclps-Assistance',
    description:
      'A feature-rich Discord bot with Ollama-backed conversational memory, personalized tone, YouTube music queues, and community utility commands.',
    stack: ['Python', 'discord.py', 'Ollama', 'yt-dlp'],
    github: 'https://github.com/RexCrowSS1/Eclps-Assistance',
    demo: '',
    category: 'non-academic',
    status: 'Discord Bot',
  },
  {
    name: 'ELibra',
    description:
      'A polished digital reading-hub prototype with a bookshelf, mood-based discovery, and book-club navigation.',
    stack: ['React', 'Tailwind CSS', 'React Router', 'Vite'],
    github: 'https://github.com/RexCrowSS1/ELibra',
    demo: '',
    category: 'academic',
    status: 'Web UI Prototype',
  },
  {
    name: 'sayyidinaa',
    description:
      'An animation-rich frontend developer portfolio with scroll-reactive storytelling, project and skills showcases, and a contact section.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    github: 'https://github.com/RexCrowSS1/sayyidinaa',
    demo: 'https://sayyidinaa.vercel.app',
    category: 'academic',
    status: 'Live Portfolio',
  },
  {
    name: 'sayyidinaa-porto',
    description:
      'A cinematic horizontal-scroll portfolio organized into animated About, Projects, Skills, and Contact scenes.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/RexCrowSS1/sayyidinaa-porto',
    demo: 'https://sayyidinaa-porto.vercel.app',
    category: 'academic',
    status: 'Live Portfolio',
  },
];

export const nonStudentModeExperiences = [
  {
    name: 'Robotics Competition — Padang',
    image: experienceImages.roboticsPadang,
    imageAlt: 'Robotics team at the Politeknik Negeri Padang competition venue',
    description:
      'Participated in a robotics competition in Padang, working through robot preparation, testing, and team coordination under competition conditions.',
    stack: ['Robotics', 'Testing', 'Problem Solving', 'Teamwork'],
    github: '',
    demo: '',
    category: 'academic',
    status: 'Competition',
  },
  {
    name: 'Robotics Competition — Yogyakarta',
    image: experienceImages.roboticsJogja,
    imageAlt: 'Robotics competition in Yogyakarta',
    description:
      'Took part in a robotics competition in Yogyakarta, gaining practical experience in preparation, troubleshooting, and making decisions with a team during the event.',
    stack: ['Robotics', 'Troubleshooting', 'Decision Making', 'Teamwork'],
    github: '',
    demo: '',
    category: 'academic',
    status: 'Competition',
  },
  {
    name: 'Robotics Competition — Solo',
    image: experienceImages.roboticsSolo,
    imageAlt: 'Robotics competition in Solo',
    description:
      'Participated in a robotics competition in Solo, applying technical preparation while adapting to the pace and challenges of a live competition.',
    stack: ['Robotics', 'Technical Preparation', 'Adaptability', 'Teamwork'],
    github: '',
    demo: '',
    category: 'academic',
    status: 'Competition',
  },
  {
    name: 'AI Tourism 2.0 Chatbot',
    image: experienceImages.aiTourismInnovation,
    imageAlt: 'AI tourism chatbot team holding a GINECO 2024 bronze award certificate',
    description:
      'Developed an AI tourism chatbot for an innovation competition. The project explored how conversational technology could make tourism information easier to access.',
    stack: ['Artificial Intelligence', 'Chatbot', 'Tourism', 'Innovation'],
    github: '',
    demo: '',
    category: 'academic',
    status: 'Innovation Competition',
  },
  {
    name: 'Robotics Club Member',
    image: experienceImages.roboticsClubMember,
    imageAlt: 'Robotics club members posing together at an outdoor monument',
    description:
      'Joined a robotics club to practice building, testing, and solving technical problems with other members while preparing for competitions and club activities.',
    stack: ['Collaboration', 'Technical Practice', 'Problem Solving', 'Commitment'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: 'Club Experience',
  },
  {
    name: 'Lembu Robotic Competition Committee',
    image: experienceImages.lembuRoboticCommittee,
    imageAlt: 'Committee coordinating participants at Lembu Robotic Competition',
    description:
      'Served on the committee for Lembu Robotic Competition, a national-scale robotics event, supporting its preparation, coordination, and event-day execution.',
    stack: ['Event Coordination', 'Communication', 'Teamwork', 'Responsibility'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: 'National Event Committee',
  },
  {
    name: 'National Band Competition',
    image: experienceImages.nationalBandCompetition,
    imageAlt: 'National band competition team holding certificates, medals, and trophies',
    description:
      'Performed as part of a band and won first place at a national-level competition. The result came from consistent rehearsal, musical coordination, and trust between members.',
    stack: ['1st Place', 'Band Performance', 'Musical Collaboration', 'Discipline'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: 'National 1st Place',
  },
  {
    name: 'Biznet Band Competition',
    image: experienceImages.biznetBandCompetition,
    imageAlt: 'Third-place Biznet band competition performance',
    description:
      'Won third place in a band competition organized by Biznet, contributing through rehearsal, live performance, and coordination with the other band members.',
    stack: ['3rd Place', 'Live Performance', 'Teamwork', 'Stage Experience'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: '3rd Place',
  },
  {
    name: 'PekanRaya Band Competition',
    image: experienceImages.pekanRayaBandCompetition,
    imageAlt: 'Band members in front of the PekanRaya competition stage',
    description:
      'Participated in the PekanRaya Band Competition, contributing through rehearsal, musical arrangement, and a coordinated live performance with the band.',
    stack: ['Band Performance', 'Live Music', 'Musical Collaboration', 'Stage Experience'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: 'Participant',
  },
  {
    name: 'Band Competition ArtFest',
    image: experienceImages.artFestBandCompetition,
    imageAlt: 'Band performing on the Achievers ArtFest 2025 stage',
    description:
      'Participated in the ArtFest band competition, preparing the set with the band and performing live on stage in front of an event audience.',
    stack: ['Band Performance', 'Live Music', 'Stage Coordination', 'Teamwork'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: 'Participant',
  },
  {
    name: 'FLS2N Solo Guitar 2024',
    image: experienceImages.fls2nSoloGuitar2024,
    imageAlt: 'FLS2N Solo Guitar 2024 second runner-up holding a medal and trophy',
    description:
      'Earned 2nd Runner-up at the regency level in the 2024 FLS2N Solo Guitar category, representing focused preparation and confidence in an individual performance.',
    stack: ['2nd Runner-up', 'Regency Level', 'Solo Guitar', 'FLS2N 2024'],
    github: '',
    demo: '',
    category: 'non-academic',
    status: '2nd Runner-up — Regency',
  },
];

// Backward-compatible aliases. The two mode datasets remain fully independent.
export const studentExperiences = studentModeExperiences;
export const nonStudentExperiences = nonStudentModeExperiences;
export const experiences = [
  ...studentModeExperiences,
  ...nonStudentModeExperiences,
];

import { motion } from 'framer-motion';

const items = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience', modeAware: true },
  { label: 'Skills', alternateLabel: 'Soft Skills', target: 'skills' },
  { label: 'Journey', alternateLabel: 'Highlights', target: 'journey' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar({ activeSection, onNavigate, studentMode }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-50 px-3 md:px-6"
    >
      <div className="portfolio-container nav-shell">
        <button
          onClick={() => onNavigate('hero')}
          className="brand-mark"
          aria-label="Go to top"
          data-cursor
        >
          Sayyidina<span aria-hidden="true">.</span>
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          {items.map((item) => (
            <button
              key={item.target}
              onClick={() => onNavigate(item.target)}
              className={activeSection === item.target ? 'is-active' : ''}
              data-cursor
            >
              {item.modeAware && studentMode
                ? 'Projects'
                : (!studentMode && item.alternateLabel) || item.label}
            </button>
          ))}
        </nav>
        <motion.div
          className={`nav-status${studentMode ? '' : ' is-non-academic'}`}
          aria-label="Current focus"
          animate={{ y: [0, -3, 0], rotate: studentMode ? 0 : -1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            key={studentMode ? 'student' : 'builder'}
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24 }}
          >
            {studentMode ? 'Student / CS / AI' : 'People / Growth / Impact'}
          </motion.span>
        </motion.div>
      </div>
    </motion.header>
  );
}

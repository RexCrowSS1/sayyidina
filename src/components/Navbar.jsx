import { motion } from 'framer-motion';

const items = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Journey', target: 'journey' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar({ activeSection, onNavigate }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-50 px-3 md:px-6"
    >
      <div className="container nav-shell">
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
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav-status" aria-label="Current focus">
          CS / AI / Web
        </div>
      </div>
    </motion.header>
  );
}

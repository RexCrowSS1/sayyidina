import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import heroBackdrop from '../assets/anime-cyber-campus-clean.jpg';
import profile from '../assets/myprofile.jpeg';

const aboutContent = {
  student: {
    title: 'Curious by default, practical when it is time to learn.',
    paragraphs: [
      'I am learning how to organize and communicate with social and technical systems.',
      'My current focus is building stronger frontend habits, understanding practical AI workflows, and improving how I present ideas through clean, confident interfaces.',
    ],
    label: 'Current learning interests',
    interests: [
      'Computer Science fundamentals',
      'AI-assisted products',
      'Fast and responsive web interfaces',
      'Creative digital experiments',
    ],
    mindset: 'Student mindset',
    cycle: 'learn / make / refine',
  },
  nonstud: {
    title: 'Trying all the things, building mindset what matters.',
    paragraphs: [
      'I joined couples of clubs and organizations to explore the intersection of different fields and create meaningful projects.',
    ],
    label: 'Current development focus',
    interests: [
      'Production robotics',
      'Music and sound design',
      'Responsive product experiences',
      'Creative technical solutions',
    ],
    mindset: 'Social mindset',
    cycle: 'plan / build / ship',
  },
};

export default function Hero({
  scrollContainerRef,
  onContact,
  onExperience,
  studentMode,
  onToggleStudentMode,
}) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const content = studentMode ? aboutContent.student : aboutContent.nonstud;
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const starY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const cyberY = useTransform(scrollYProgress, [0, 1], [0, 68]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.42, 0.34, 0.16]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.88, 0.72]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const profileRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <div
        aria-hidden="true"
        className="hero-backdrop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(247, 237, 211, 0.82) 0%, rgba(247, 237, 211, 0.46) 43%, rgba(8, 20, 31, 0.14) 100%), url(${heroBackdrop})`,
        }}
      />
      <motion.div
        className="hero-starfield"
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : starY }}
      />
      <motion.div
        className="hero-cyber-lines"
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : cyberY, opacity: reduceMotion ? undefined : lineOpacity }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-ambient"
        animate={reduceMotion ? undefined : { opacity: [0.34, 0.58, 0.34], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: reduceMotion ? 0 : ambientY }}
      />
      <motion.div
        className="hero-softwash"
        aria-hidden="true"
        style={{ opacity: reduceMotion ? 1 : washOpacity }}
      />
      <div className="hero-halftone" aria-hidden="true" />

      <div className="portfolio-container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <motion.div
            key={`sticker-${studentMode}`}
            className="sticker sticker-signal"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {studentMode ? 'Student Portfolio' : 'Builder Portfolio'}
          </motion.div>
          <motion.div
            key={`hero-text-${studentMode}`}
            className={`hero-mode-copy${studentMode ? ' is-student' : ''}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title">
              Sayyidina
              <span>Anshari Ahmad</span>
            </h1>
            <p className="hero-headline">{content.title}</p>
            <p className="hero-description">{content.paragraphs.join(' ')}</p>
          </motion.div>

          <div className="hero-actions">
            <motion.button
              type="button"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExperience}
              className="btn-brutal"
              data-cursor
            >
              {studentMode ? 'View Projects' : 'View Experience'}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContact}
              className="btn-brutal btn-brutal-light"
              data-cursor
            >
              Contact Me
            </motion.button>
          </div>

          <motion.div
            key={`hero-tags-${studentMode}`}
            className="hero-tags"
            aria-label="Focus areas"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
          >
            {content.interests.map((item) => (
              <motion.span
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, rotate: 3, y: 36 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            y: reduceMotion ? 0 : profileY,
            rotateZ: reduceMotion ? 0 : profileRotate,
          }}
          className="profile-block"
        >
          <div className="profile-frame">
            <img
              src={profile}
              alt="Portrait of Sayyidina Anshari Ahmad"
              className="profile-image"
            />
          </div>
          <div className="profile-meta">
            <span>Based in Indonesia</span>
            <motion.button
              type="button"
              className={`student-mode-toggle${studentMode ? ' is-on' : ''}`}
              onClick={onToggleStudentMode}
              aria-pressed={studentMode}
              aria-label={`Turn student mode ${studentMode ? 'off' : 'on'}`}
              whileHover={{ x: 2, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              data-cursor
            >
              <span className="student-mode-label">Student mode</span>
              <span className="student-mode-switch" aria-hidden="true">
                <motion.span
                  className="student-mode-knob"
                  animate={{ x: studentMode ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 520, damping: 30 }}
                />
              </span>
              <span className="student-mode-state">{studentMode ? 'ON' : 'OFF'}</span>
            </motion.button>
          </div>
          <div className="profile-note">
            <span className="profile-note-index">01</span>
            <motion.p
              key={`profile-note-${studentMode}`}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {content.mindset}: {content.cycle}.
            </motion.p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

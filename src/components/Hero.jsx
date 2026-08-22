import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import heroBackdrop from '../assets/anime-cyber-campus-clean.avif';
import profile from '../assets/myprofile.avif';
import nonStudentProfile from '../assets/nonstudent-profile.avif';

const heroContent = {
  student: {
    eyebrow: 'Personal Portfolio',
    headline: 'Computer Science Student / AI & Web Developer Enthusiast',
    description:
      'I enjoy building sharp, practical web experiences where computer science, AI ideas, and expressive interfaces meet. The goal is simple: make digital projects feel useful, fast, and unmistakably personal.',
    tags: ['React', 'AI Tools', 'Frontend', 'Creative Code'],
    note: 'Focused on learning, building, and shipping small digital experiments with taste and discipline.',
  },
  nonstud: {
    eyebrow: 'Beyond The Classroom',
    headline: 'Collaborator / Creative Builder / Organization Enthusiast',
    description:
      'I grow through teamwork, organizations, and hands-on initiatives. I enjoy connecting people and ideas, taking responsibility, and turning shared goals into meaningful results.',
    tags: ['Communication', 'Teamwork', 'Leadership', 'Adaptability'],
    note: 'Focused on contributing with empathy, taking initiative, and growing through every collaboration.',
  },
};

export default function Hero({
  scrollContainerRef,
  onContact,
  onExperience,
  studentMode,
  onToggleStudentMode,
}) {
  const content = studentMode ? heroContent.student : heroContent.nonstud;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const rawBackgroundY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const backgroundY = useSpring(rawBackgroundY, { stiffness: 42, damping: 24, mass: 0.8 });
  const starY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const cyberY = useTransform(scrollYProgress, [0, 1], [0, 68]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.9, 0.72]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.42, 0.34, 0.16]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.88, 0.72]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const profileRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const backdropGradient = studentMode
    ? 'linear-gradient(90deg, rgba(247, 237, 211, 0.82) 0%, rgba(247, 237, 211, 0.46) 43%, rgba(8, 20, 31, 0.14) 100%)'
    : 'linear-gradient(90deg, rgba(11, 14, 16, 0.97) 0%, rgba(11, 14, 16, 0.88) 46%, rgba(11, 14, 16, 0.58) 100%)';

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <m.div
        aria-hidden="true"
        className="hero-backdrop"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1.015, 1.035, 1.015],
                x: [0, -10, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage: `${backdropGradient}, url(${heroBackdrop})`,
          y: reduceMotion ? 0 : backgroundY,
          opacity: reduceMotion ? 1 : backgroundOpacity,
        }}
      />
      <m.div
        className="hero-starfield"
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : starY }}
      />
      <m.div
        className="hero-cyber-lines"
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : cyberY, opacity: reduceMotion ? undefined : lineOpacity }}
      />
      <m.div
        aria-hidden="true"
        className="hero-ambient"
        animate={reduceMotion ? undefined : { opacity: [0.34, 0.58, 0.34], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: reduceMotion ? 0 : ambientY }}
      />
      <m.div
        className="hero-softwash"
        aria-hidden="true"
        style={{ opacity: reduceMotion ? 1 : washOpacity }}
      />
      <div className="hero-halftone" aria-hidden="true" />

      <div className="portfolio-container hero-grid">
        <m.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <div className="sticker sticker-signal">{content.eyebrow}</div>
          <div>
            <h1 className="hero-title">
              Sayyidina
              <span>Anshari Ahmad</span>
            </h1>
            <p className="hero-headline">
              {content.headline}
            </p>
            <p className="hero-description">{content.description}</p>
          </div>

          <div className="hero-actions">
            <m.button
              type="button"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExperience}
              className="btn-brutal"
              data-cursor
            >
              View Experience
            </m.button>
            <m.button
              type="button"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContact}
              className="btn-brutal btn-brutal-light"
              data-cursor
            >
              Contact Me
            </m.button>
          </div>

          <div className="hero-tags" aria-label="Focus areas">
            {content.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </m.div>

        <m.aside
          initial={{ opacity: 0, rotate: 3, y: 36 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            y: reduceMotion ? 0 : profileY,
            rotateZ: reduceMotion ? 0 : profileRotate,
          }}
          className="profile-block"
        >
          <div className={`profile-frame${studentMode ? '' : ' is-non-student'}`}>
            <m.img
              src={profile}
              alt={studentMode ? 'Portrait of Sayyidina Anshari Ahmad' : ''}
              aria-hidden={!studentMode}
              className="profile-image profile-image-student"
              decoding="async"
              initial={false}
              animate={{
                opacity: studentMode ? 1 : 0,
                scale: studentMode ? 1 : 1.035,
              }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            />
            <m.img
              src={nonStudentProfile}
              alt={studentMode ? '' : 'Sayyidina Anshari Ahmad performing guitar on stage'}
              aria-hidden={studentMode}
              className="profile-image profile-image-non-student"
              decoding="async"
              initial={false}
              animate={{
                opacity: studentMode ? 0 : 1,
                scale: studentMode ? 1.035 : 1,
              }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="profile-meta">
            <span>Based in Indonesia</span>
            <m.button
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
                <m.span
                  className="student-mode-knob"
                  animate={{ x: studentMode ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 520, damping: 30 }}
                />
              </span>
              <span className="student-mode-state">{studentMode ? 'ON' : 'OFF'}</span>
            </m.button>
          </div>
          <div className="profile-note">
            <span className="profile-note-index">01</span>
            <p>{content.note}</p>
          </div>
        </m.aside>
      </div>
    </section>
  );
}

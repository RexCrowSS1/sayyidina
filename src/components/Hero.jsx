import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import heroBackdrop from '../assets/anime-cyber-campus-clean.jpg';
import profile from '../assets/myprofile.jpeg';

export default function Hero({ scrollContainerRef, onContact, onProjects }) {
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

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <motion.div
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
          backgroundImage: `linear-gradient(90deg, rgba(247, 237, 211, 0.82) 0%, rgba(247, 237, 211, 0.46) 43%, rgba(8, 20, 31, 0.14) 100%), url(${heroBackdrop})`,
          y: reduceMotion ? 0 : backgroundY,
          opacity: reduceMotion ? 1 : backgroundOpacity,
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

      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <div className="sticker sticker-signal">Personal Portfolio</div>
          <div>
            <h1 className="hero-title">
              Sayyidina
              <span>Anshari Ahmad</span>
            </h1>
            <p className="hero-headline">
              Computer Science Student / AI & Web Developer Enthusiast
            </p>
            <p className="hero-description">
              I enjoy building sharp, practical web experiences where computer science,
              AI ideas, and expressive interfaces meet. The goal is simple: make digital
              projects feel useful, fast, and unmistakably personal.
            </p>
          </div>

          <div className="hero-actions">
            <motion.button
              type="button"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onProjects}
              className="btn-brutal"
              data-cursor
            >
              View Projects
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

          <div className="hero-tags" aria-label="Focus areas">
            {['React', 'AI Tools', 'Frontend', 'Creative Code'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
            <strong>Student mode: ON</strong>
          </div>
          <div className="profile-note">
            <span className="profile-note-index">01</span>
            <p>
              Focused on learning, building, and shipping small digital experiments
              with taste and discipline.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

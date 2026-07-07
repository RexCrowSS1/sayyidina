import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import heroBackdrop from '../assets/anime-cyber-campus.jpg';
import profile from '../assets/myprofile.jpeg';

export default function Hero({ onContact, onProjects }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const profileRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <motion.div
        aria-hidden="true"
        className="hero-backdrop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(247, 237, 211, 0.94) 0%, rgba(247, 237, 211, 0.76) 42%, rgba(8, 20, 31, 0.5) 100%), url(${heroBackdrop})`,
          y: reduceMotion ? 0 : backgroundY,
        }}
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

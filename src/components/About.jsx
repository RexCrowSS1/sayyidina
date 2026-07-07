import { motion } from 'framer-motion';

const interests = [
  'Computer Science fundamentals',
  'AI-assisted products',
  'Fast and responsive web interfaces',
  'Creative digital experiments',
];

export default function About() {
  return (
    <section id="about" className="section-shell section-about">
      <div className="container">
        <div className="section-grid">
          <motion.div
            initial={{ opacity: 0, y: 36, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-intro"
          >
            <div className="sticker sticker-coral">About Me</div>
            <h2>Curious by default, practical when it is time to ship.</h2>
            <p>
              I am a Computer Science student interested in the overlap between AI,
              web development, and creative digital products. I like the process of
              taking a rough idea, breaking it into systems, and shaping it into
              something people can actually use.
            </p>
            <p>
              My current focus is building stronger frontend habits, understanding
              practical AI workflows, and improving how I present ideas through clean,
              confident interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 42, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotate: 0 }}
            className="brutal-card about-card"
          >
            <div className="card-label">Current interests</div>
            <ul className="interest-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
            <div className="about-split">
              <span>Builder mindset</span>
              <strong>learn / make / refine</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

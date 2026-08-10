import { motion } from 'framer-motion';

const aboutContent = {
  student: {
    title: 'Curious by default, practical when it is time to learn.',
    paragraphs: [
      'I am a Computer Science student interested in the overlap between AI, web development, and creative digital products. I like the process of taking a rough idea, breaking it into systems, and shaping it into something people can actually use.',
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

export default function About({ studentMode }) {
  const content = studentMode ? aboutContent.student : aboutContent.nonstud;

  return (
    <section id="about" className="section-shell section-about">
      <div className="portfolio-container">
        <div className="section-grid">
          <motion.div
            initial={{ opacity: 0, y: 36, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-intro"
          >
            <div className="sticker sticker-coral">About Me</div>
            <motion.h2 key={`title-${studentMode}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {content.title}
            </motion.h2>
            <div className="about-paragraphs">
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${studentMode}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 42, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotate: 0 }}
            className="brutal-card about-card"
          >
            <div className="card-label">{content.label}</div>
            <ul className="interest-list">
              {content.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
            <div className="about-split">
              <span>{content.mindset}</span>
              <strong>{content.cycle}</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

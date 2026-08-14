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
    title: 'The work beyond the coursework.',
    paragraphs: [
      'I take part in clubs, organizations, communities, and collaborative projects outside class.',
      'That work has taught me how to listen, communicate clearly, take responsibility, and keep a team moving.',
    ],
    label: 'Core soft skills',
    interests: [
      'Communication and active listening',
      'Team collaboration',
      'Leadership and initiative',
      'Adaptability and responsibility',
    ],
    mindset: 'Growth mindset',
    cycle: 'listen / act / improve',
  },
};

export default function About({ studentMode }) {
  const content = studentMode ? aboutContent.student : aboutContent.nonstud;

  return (
    <section
      id="about"
      className={`section-shell section-about${studentMode ? '' : ' is-non-student'}`}
    >
      <div className="portfolio-container">
        <div className="section-grid">
          <motion.div
            initial={{ opacity: 0, y: 36, rotateX: studentMode ? 6 : 0 }}
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
            initial={{ opacity: 0, y: 42, rotate: studentMode ? -2 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: studentMode ? -6 : -3, rotate: 0 }}
            className="brutal-card about-card"
          >
            <div className="card-label">{content.label}</div>
            <ul className="interest-list">
              {content.interests.map((interest, index) => (
                <li key={interest}>
                  <span className="interest-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{interest}</span>
                </li>
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

import { motion } from 'framer-motion';
import { contactLinks } from '../data/contact.js';

export default function Contact({ studentMode }) {
  return (
    <section
      id="contact"
      className={`section-shell section-contact${studentMode ? '' : ' is-non-student'}`}
    >
      <div className="portfolio-container">
        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-intro"
          >
            <div className="sticker sticker-coral">Contact</div>
            <h2>
              {studentMode
                ? 'Have an idea, internship lead, or build challenge?'
                : 'Have a project or activity in mind?'}
            </h2>
            <p>
              {studentMode
                ? 'I am open to learning opportunities, collaborations, and small product experiments.'
                : 'I am open to organization work, community projects, and creative collaborations.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, rotate: studentMode ? 2 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="contact-card"
          >
            {contactLinks.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="contact-row"
                  data-cursor
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ) : (
                <div key={item.label} className="contact-row contact-row-disabled">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

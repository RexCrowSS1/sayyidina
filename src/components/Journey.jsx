import { motion } from 'framer-motion';
import { journeyItems } from '../data/journey.js';

export default function Journey() {
  return (
    <section id="journey" className="section-shell section-journey">
      <div className="container">
        <div className="section-heading">
          <div className="sticker sticker-signal">Learning Journey</div>
          <h2>Small steps, stronger systems.</h2>
          <p>
            A compact view of where my learning energy is going right now.
          </p>
        </div>

        <div className="timeline">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.marker}
              initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42, rotateY: index % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.68, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="timeline-card"
            >
              <div className="timeline-marker">{item.marker}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

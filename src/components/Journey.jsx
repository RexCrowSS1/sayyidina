import { m } from 'framer-motion';
import { achievementItems, journeyItems } from '../data/journey.js';

export default function Journey({ studentMode }) {
  const items = studentMode ? journeyItems : achievementItems;

  return (
    <section
      id="journey"
      className={`section-shell section-journey${studentMode ? '' : ' is-non-student'}`}
    >
      <div className="portfolio-container">
        <div className="section-heading">
          <div className="sticker sticker-signal">
            {studentMode ? 'Learning Journey' : 'Selected Highlights'}
          </div>
          <h2>{studentMode ? 'Small steps, stronger systems.' : 'Beyond class, in concrete terms.'}</h2>
          <p>
            {studentMode
              ? 'A compact view of where my learning energy is going right now.'
              : 'Robotics competitions, a national event committee, an AI tourism project, and music achievements.'}
          </p>
        </div>

        <div className="timeline">
          {items.map((item, index) => (
            <m.div
              key={item.marker}
              initial={studentMode
                ? { opacity: 0, x: index % 2 === 0 ? -42 : 42, rotateY: index % 2 === 0 ? -8 : 8 }
                : { opacity: 0, y: 28 }}
              whileInView={studentMode
                ? { opacity: 1, x: 0 }
                : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.68, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="timeline-card"
            >
              <div className="timeline-marker">{item.marker}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

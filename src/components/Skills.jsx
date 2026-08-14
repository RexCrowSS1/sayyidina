import { motion } from 'framer-motion';
import { nonStudentSkillCategories, studentSkillCategories } from '../data/skills.js';

export default function Skills({ studentMode }) {
  const categories = studentMode ? studentSkillCategories : nonStudentSkillCategories;

  return (
    <section
      id="skills"
      className={`section-shell section-skills${studentMode ? '' : ' is-non-student'}`}
    >
      <div className="portfolio-container">
        <div className="section-heading">
          <div className="sticker sticker-cyan">
            {studentMode ? 'Technical Skills' : 'Soft Skills'}
          </div>
          <h2>
            {studentMode
              ? 'A toolkit for building, testing ideas, and learning faster.'
              : 'How I work with people.'}
          </h2>
          <p>
            {studentMode
              ? 'The badges below are grouped by how they usually show up in a project: interface, server logic, AI exploration, workflow, and data.'
              : 'Skills practiced through organizations, group work, and independent projects.'}
          </p>
        </div>

        <div className={`skills-grid${studentMode ? '' : ' is-soft-skills'}`}>
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 36,
                rotate: studentMode ? (index % 2 === 0 ? 1.5 : -1.5) : 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="skill-panel"
            >
              <span className="skill-panel-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{category.title}</h3>
              <div className="skill-badge-list">
                {category.items.map((skill) => (
                  <motion.span key={skill} whileHover={{ x: 4, y: -3 }} className="skill-badge">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

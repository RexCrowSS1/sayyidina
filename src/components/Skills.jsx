import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-skills">
      <div className="container">
        <div className="section-heading">
          <div className="sticker sticker-cyan">Skills</div>
          <h2>A toolkit for building, testing ideas, and learning faster.</h2>
          <p>
            The badges below are grouped by how they usually show up in a project:
            interface, server logic, AI exploration, workflow, and data.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 36, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="skill-panel"
            >
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

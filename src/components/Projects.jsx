import { motion } from 'framer-motion';
import {
  experienceCategories,
  nonStudentModeExperiences,
  studentModeExperiences,
} from '../data/experience.js';

export default function Experience({ studentMode }) {
  if (studentMode) {
    return (
      <section id="experience" className="section-shell section-projects">
        <motion.div
          key="student-projects"
          className="portfolio-container"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-heading">
            <div className="sticker sticker-signal">Projects</div>
            <h2>Ideas become real through building.</h2>
            <p>
              A collection of practical projects created while learning computer
              science, AI, frontend development, and creative technology.
            </p>
          </div>

          <div className="project-grid">
            {studentModeExperiences.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 48, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
                className="project-card"
              >
                <div className="project-topline">
                  <span>{project.status}</span>
                  <span>#{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stack-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" data-cursor>
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" data-cursor>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-shell section-projects is-non-student">
      <div className="portfolio-container">
        <div className="section-heading">
          <div className="sticker sticker-signal">Experience</div>
          <h2>Work done with people, not just tools.</h2>
          <p>
            Selected academic and independent work, grouped by where it happened.
          </p>
        </div>

        <div className="experience-groups">
          {experienceCategories.map((category, categoryIndex) => {
            const categoryExperiences = nonStudentModeExperiences.filter(
              (experience) => experience.category === category.key,
            );

            return (
              <motion.div
                className={`experience-group experience-group-${category.key}`}
                key={category.key}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.42,
                  delay: categoryIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="experience-group-heading">
                  <span className="experience-group-count">
                    {String(categoryIndex + 1).padStart(2, '0')} /{' '}
                    {String(categoryExperiences.length).padStart(2, '0')}
                  </span>
                  <h3>{category.label}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="project-grid">
                  {categoryExperiences.length === 0 && (
                    <div className="experience-empty-state">
                      <span>Coming soon</span>
                      <p>{category.emptyMessage}</p>
                    </div>
                  )}
                  {categoryExperiences.map((experience, index) => (
                    <motion.article
                      key={`${category.key}-${experience.name || index}`}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -5 }}
                      className="project-card"
                    >
                      <div className="experience-image-frame">
                        {experience.image ? (
                          <img
                            src={experience.image}
                            alt={experience.imageAlt || `Preview of ${experience.name}`}
                            className="experience-image"
                            loading="lazy"
                          />
                        ) : (
                          <div className="experience-image-placeholder" aria-hidden="true">
                            <span>Image</span>
                            <strong>Add project image</strong>
                          </div>
                        )}
                      </div>
                      <div className="project-topline">
                        <span>{experience.status}</span>
                        <span>#{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3>{experience.name || 'Untitled Experience'}</h3>
                      <p>{experience.description}</p>
                      <div className="stack-list" aria-label={`${experience.name} skills and tools`}>
                        {experience.stack.map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                      <div className="project-links">
                        {experience.github && (
                          <a href={experience.github} target="_blank" rel="noreferrer" data-cursor>
                            GitHub
                          </a>
                        )}
                        {experience.demo && (
                          <a href={experience.demo} target="_blank" rel="noreferrer" data-cursor>
                            Live Demo
                          </a>
                        )}
                        {!experience.github && !experience.demo && (
                          <span className="project-link-unavailable">Documentation coming soon</span>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { experiences } from '../data/projects.js';

const groups = [
  {
    key: 'academic',
    label: 'Academic Experience',
    description: 'Coursework-driven exploration, technical learning, and applied computer science practice.',
  },
  {
    key: 'non-academic',
    label: 'Non-Academic Experience',
    description: 'Independent experiments and community-focused builds developed beyond formal coursework.',
  },
];

export default function Experience({ studentMode }) {
  const orderedGroups = studentMode ? groups : [...groups].reverse();

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
            {experiences.map((project, index) => (
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
    <section id="experience" className="section-shell section-projects">
      <div className="portfolio-container">
        <div className="section-heading">
          <div className="sticker sticker-signal">Experience</div>
          <h2>Learning in class, building beyond it.</h2>
          <p>
            A collection of academic exploration and independent experience shaped
            through practical projects, experiments, and continuous learning.
          </p>
        </div>

        <div className="experience-groups">
          {orderedGroups.map((group, groupIndex) => {
            const groupExperiences = experiences.filter((item) => item.category === group.key);

            return (
              <motion.div
                className="experience-group"
                key={`${group.key}-${studentMode}`}
                layout
                initial={{ opacity: 0, x: studentMode ? -28 : 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  layout: { type: 'spring', stiffness: 260, damping: 28 },
                  opacity: { duration: 0.3, delay: groupIndex * 0.08 },
                  x: { duration: 0.42, delay: groupIndex * 0.08 },
                }}
              >
                <div className="experience-group-heading">
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="project-grid">
                  {groupExperiences.map((experience, index) => (
                    <motion.article
                      key={experience.name}
                      initial={{ opacity: 0, y: 48, rotate: index % 2 === 0 ? -2 : 2 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
                      className="project-card"
                    >
                      <div className="project-topline">
                        <span>{experience.status}</span>
                        <span>#{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3>{experience.name}</h3>
                      <p>{experience.description}</p>
                      <div className="stack-list" aria-label={`${experience.name} skills and tools`}>
                        {experience.stack.map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                      <div className="project-links">
                        <a href={experience.github} target="_blank" rel="noreferrer" data-cursor>
                          GitHub
                        </a>
                        {experience.demo && (
                          <a href={experience.demo} target="_blank" rel="noreferrer" data-cursor>
                            Live Demo
                          </a>
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

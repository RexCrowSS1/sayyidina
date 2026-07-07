import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-projects">
      <div className="container">
        <div className="section-heading">
          <div className="sticker sticker-signal">Projects</div>
          <h2>Real work goes here. No imaginary case studies.</h2>
          <p>
            I checked the repository for available project data. Since there are no
            real project entries yet, these cards stay as placeholders until actual
            GitHub, demo, or case-study details are added.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.name}-${index}`}
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
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" data-cursor>
                    GitHub
                  </a>
                ) : (
                  <span aria-disabled="true">GitHub TBA</span>
                )}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" data-cursor>
                    Live Demo
                  </a>
                ) : (
                  <span aria-disabled="true">Demo TBA</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * Projects — Horizontal gallery with 3D tilt cards,
 * pixel hover preview, and brutalist panel styling.
 */

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with React, Node.js, and Stripe. User auth, product management, and real-time order tracking.',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/username-anda/ecommerce-platform',
    live: '#',
    color: '#8b5cf6',
    year: '2024',
  },
  {
    title: 'Discord Super Chat Bot',
    description: 'A responsive Super Chat bot for Discord with music, AI prompts, and a full game system serving thousands of users.',
    tech: ['Node.js', 'Discord.js', 'Firebase', 'AI'],
    github: 'https://github.com/RexCrowSS1/Eclps-Assistance',
    live: '#',
    color: '#6366f1',
    year: '2024',
  },
  {
    title: 'Chat Bot AI 5.0',
    description: 'An intelligent chatbot that helps tourists find the best places to stay, eat, and explore based on their current location.',
    tech: ['Python', 'TensorFlow', 'React', 'Maps API'],
    github: 'https://github.com/username-anda/chatbot-ai',
    live: '#',
    color: '#f43f5e',
    year: '2023',
  },
];
const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const ArrowIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

/**
 * ProjectCard — 3D tilt card with glassmorphism
 */
function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { stiffness: 150, damping: 20 });
  const my = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(my, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mx, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="brutal-card h-full p-7 flex flex-col group relative overflow-hidden"
        data-cursor-hover
      >
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header row */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="flex justify-between items-start mb-6"
        >
          <span className="text-sm font-medium text-muted font-[var(--font-display)]">
            {project.year}
          </span>
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="text-muted hover:text-accent elastic-all"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="text-muted hover:text-accent elastic-all"
            >
              <ArrowIcon />
            </motion.a>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{ transform: 'translateZ(25px)' }}
          className="text-xl font-bold text-text mb-3 group-hover:text-accent elastic-all"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{ transform: 'translateZ(15px)' }}
          className="text-muted text-sm mb-8 flex-grow leading-relaxed"
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <ul
          style={{ transform: 'translateZ(10px)' }}
          className="flex flex-wrap gap-2 text-xs font-medium"
        >
          {project.tech.map((tech, i) => (
            <li
              key={i}
              className="px-3 py-1.5 border border-text text-text elastic-all hover:border-accent hover:text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

/**
 * HoverImagePreview — Floating image that follows cursor with lag.
 * Activated by project list item hover.
 */
function HoverImagePreview() {
  const [activeProject, setActiveProject] = useState(null);
  const previewRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let raf;
    const animate = () => {
      const ease = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;
      if (previewRef.current) {
        previewRef.current.style.left = `${currentPos.current.x + 20}px`;
        previewRef.current.style.top = `${currentPos.current.y - 110}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { previewRef, activeProject, setActiveProject };
}

/**
 * ProjectListItem — Text-based list with hover-to-reveal behavior
 */
function ProjectListItem({ project, index, onHover, onLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className="group border-b border-surface/10 py-6 flex items-center justify-between elastic-all hover:pl-4"
      data-cursor-hover
    >
      <div className="flex items-center gap-6">
        <span className="text-sm font-mono text-muted w-8">
          0{index + 1}
        </span>
        <h4 className="text-xl md:text-2xl font-bold text-text group-hover:text-accent elastic-all">
          {project.title}
        </h4>
      </div>
      <motion.div
        className="text-muted group-hover:text-accent elastic-all"
        whileHover={{ rotate: 45 }}
      >
        <ArrowIcon size={20} />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { previewRef, activeProject, setActiveProject } = HoverImagePreview();

  // Generate gradient previews for projects (since we don't have real images)
  const projectGradients = [
    '#111111',
    '#333333',
    '#111111',
  ];

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[35rem] h-[35rem] -z-10" style={{ backgroundColor: 'rgba(17, 17, 17, 0.05)', border: '4px solid rgba(17, 17, 17, 0.1)' }} />

      <div className="container mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            02 — Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text tracking-tight mb-16 leading-[1.1] brutal-title"
        >
          Some things<br />
          <span className="text-accent">I've built.</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Hover-to-reveal list */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-muted mb-8"
          >
            All projects
          </motion.h3>
          {projects.map((project, index) => (
            <ProjectListItem
              key={index}
              project={project}
              index={index}
              onHover={setActiveProject}
              onLeave={() => setActiveProject(null)}
            />
          ))}

          {/* Floating preview */}
          <div
            ref={previewRef}
            className={`hover-preview ${activeProject !== null ? 'is-visible' : ''}`}
          >
            <div
              className="w-full h-full flex items-center justify-center text-text font-bold text-xl"
              style={{
                background: activeProject !== null ? projectGradients[activeProject] : projectGradients[0],
              }}
            >
              {activeProject !== null && projects[activeProject]?.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

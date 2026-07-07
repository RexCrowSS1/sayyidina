import { motion } from 'framer-motion';

/**
 * Skills — Bento grid with varied card sizes,
 * SVG icon draw-on animation, and floating layout.
 */

const skills = [
  {
    name: 'JavaScript',
    icon: 'JS',
    color: '#f59e0b',
    description: 'ES6+, TypeScript, Node.js',
    size: 'wide',
  },
  {
    name: 'React',
    icon: '⚛',
    color: '#6366f1',
    description: 'Hooks, Context, Next.js',
    size: 'normal',
  },
  {
    name: 'Python',
    icon: '🐍',
    color: '#10b981',
    description: 'Django, Flask, ML',
    size: 'normal',
  },
  {
    name: 'CSS/Tailwind',
    icon: '🎨',
    color: '#8b5cf6',
    description: 'Animations, responsive design',
    size: 'normal',
  },
  {
    name: 'Node.js',
    icon: '⬢',
    color: '#10b981',
    description: 'Express, APIs, WebSockets',
    size: 'normal',
  },
  {
    name: 'Framer Motion',
    icon: '✨',
    color: '#f43f5e',
    description: 'Smooth UI animations',
    size: 'wide',
  },
  {
    name: 'Git & GitHub',
    icon: '⎇',
    color: '#6366f1',
    description: 'Version control, CI/CD',
    size: 'normal',
  },
  {
    name: 'Figma',
    icon: '◆',
    color: '#f43f5e',
    description: 'UI/UX design, prototyping',
    size: 'normal',
  },
  {
    name: 'GraphQL',
    icon: '◈',
    color: '#8b5cf6',
    description: 'Apollo, Relay, schemas',
    size: 'normal',
  },
  {
    name: 'PostgreSQL',
    icon: '🗄',
    color: '#6366f1',
    description: 'SQL, migrations, indexing',
    size: 'normal',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

function SkillCard({ skill }) {
  const isWide = skill.size === 'wide';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`${isWide ? 'col-span-2' : 'col-span-1'}`}
    >
      <div className="brutal-card h-full p-6 group relative overflow-hidden" data-cursor-hover>
        <div className="relative z-10 flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 border-2 border-text flex items-center justify-center">
              <span
                className="text-lg font-bold"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-text mb-1 group-hover:text-accent elastic-all">
              {skill.name}
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
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
            03 — Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] brutal-title"
        >
          My technical<br />
          <span className="text-text">toolkit.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg mb-16 max-w-xl"
        >
          Technologies I've been working with recently:
        </motion.p>

        {/* Bento grid of skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
      <div className="glass-card h-full p-6 group relative overflow-hidden" data-cursor-hover>
        {/* Background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl"
          style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icon circle with draw animation */}
          <div className="relative flex-shrink-0">
            <svg className="w-12 h-12" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke={skill.color}
                strokeWidth="1.5"
                strokeDasharray="126"
                strokeDashoffset="126"
                className="group-hover:animate-[draw-line_1.8s_ease_forwards]"
                style={{ opacity: 0.3 }}
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill={`${skill.color}15`}
                className="elastic-all group-hover:fill-[${skill.color}25]"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-lg font-bold"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-charcoal mb-1 group-hover:text-violet elastic-all">
              {skill.name}
            </h4>
            <p className="text-xs text-charcoal/45 leading-relaxed">
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
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[35rem] h-[35rem] bg-indigo/5 rounded-full blur-[150px] -z-10 -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-rose/5 rounded-full blur-[120px] -z-10 translate-x-1/3" />

      <div className="container mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-violet">
            03 — Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight mb-6 leading-[1.1]"
        >
          My technical<br />
          <span className="text-gradient-violet">toolkit.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-charcoal/50 text-lg mb-16 max-w-xl"
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

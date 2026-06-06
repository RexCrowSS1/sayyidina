import { motion } from 'framer-motion';
import { useSplitText } from '../hooks/useSplitText';
import profileImage from '../Myprofile.png';

/**
 * About — Bento grid layout with split text animation,
 * glassmorphism cards, and parallax profile image.
 */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

function SplitHeading({ text }) {
  const { chars } = useSplitText(text);
  return (
    <span>
      {chars.map(({ char, index }) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -60 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.6,
            delay: index * 0.03,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="split-char"
          style={{ perspective: '600px' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Built' },
  { number: '5+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Soft gradient accent */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-violet/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo/5 rounded-full blur-[120px] -z-10" />

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
            01 — About
          </span>
        </motion.div>

        {/* Split text heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight mb-16 leading-[1.1]">
          <SplitHeading text="Crafting digital" />
          <br />
          <span className="text-gradient-violet">
            <SplitHeading text="experiences." />
          </span>
        </h2>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bento-grid"
        >
          {/* Profile image — tall card */}
          <motion.div variants={itemVariants} className="bento-item-tall bento-item-wide md:col-span-2 row-span-2">
            <div className="glass-card h-full p-3 group">
              <div className="relative rounded-2xl overflow-hidden h-full">
                <img
                  src={profileImage}
                  alt="Sayyidina Anshari Ahmad"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Bio text — wide card */}
          <motion.div variants={itemVariants} className="bento-item-wide col-span-2">
            <div className="glass-card h-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Sayyidina Anshari Ahmad
              </h3>
              <p className="text-charcoal/60 leading-relaxed text-base">
                Hello! I'm a passionate developer who enjoys creating things that
                live on the internet. My interest in web development started when
                I participated in IT competitions — hacking together HTML & CSS taught
                me a lot about building for the web.
              </p>
            </div>
          </motion.div>

          {/* Story card */}
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="glass-card h-full p-8 flex flex-col justify-center">
              <p className="text-charcoal/60 leading-relaxed text-base">
                Fast-forward to today, and I've had the privilege of working at an
                advertising agency, a start-up, a huge corporation, and a student-led
                design studio. My main focus is building accessible, inclusive products
                and digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="col-span-1 md:col-span-1">
              <div className="glass-card h-full p-6 flex flex-col items-center justify-center text-center group" data-cursor-hover>
                <span className="text-3xl md:text-4xl font-bold text-gradient-violet mb-2 transition-transform duration-500 group-hover:scale-110">
                  {stat.number}
                </span>
                <span className="text-sm text-charcoal/50 font-medium">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Location card */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="glass-card h-full p-6 flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-2">📍</span>
              <span className="text-sm text-charcoal/50 font-medium">
                Indonesia
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

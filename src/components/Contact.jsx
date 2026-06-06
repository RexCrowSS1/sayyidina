import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';
import { useSplitText } from '../hooks/useSplitText';

/**
 * Contact — Card-stack peel reveal section with dramatic typography,
 * magnetic CTA button, and minimal footer.
 * Dark themed to contrast with the lighter sections above.
 */

function SplitHeading({ text, className = '' }) {
  const { chars } = useSplitText(text);
  return (
    <span className={className}>
      {chars.map(({ char, index }) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 60, rotateX: -60 }}
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

const MailIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function MagneticButton({ children, href, className = '' }) {
  const magnetic = useMagnetic(0.35);

  return (
    <motion.a
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      href={href}
      data-magnetic
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-[#0f0a1a] text-[#f5f0eb]"
    >
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-violet/10 rounded-full blur-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo/8 rounded-full blur-[150px] -z-10 animate-float-slow" />
      <div className="absolute top-0 right-0 w-[25rem] h-[25rem] bg-rose/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-violet-light/70">
            04 — Contact
          </span>
        </motion.div>

        {/* Large dramatic heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
          <SplitHeading text="Let's create" />
          <br />
          <span className="bg-gradient-to-r from-violet-light via-indigo to-rose bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }}>
            <SplitHeading text="together." />
          </span>
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="text-[#f5f0eb]/50 mb-14 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Although I'm not currently looking for new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-24"
        >
          <MagneticButton
            href="mailto:hello@example.com"
            className="relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold text-[#f5f0eb] border-2 border-violet/40 hover:border-violet hover:bg-violet/10 elastic-all animate-pulse-glow"
          >
            Say Hello <MailIcon />
          </MagneticButton>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-[#f5f0eb]/30 text-sm">
            Designed & Built by Sayyidina Anshari Ahmad
          </p>
          {/* SESUDAH DIUBAH */}
          <div className="flex gap-8 text-sm">
            {[
              { name: 'GitHub', url: 'https://github.com/RexCrowSS1' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/username-anda' },
              { name: 'Instagram', url: 'https://www.instagram.com/ahmadd.ri' }
            ].map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ y: -3 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="text-[#f5f0eb]/40 hover:text-violet-light elastic-all"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

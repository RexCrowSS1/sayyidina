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
      className="relative py-32 px-6 overflow-hidden bg-dark text-surface"
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="brutal-label mb-8 inline-block">04 — Contact</div>

        {/* Large dramatic heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05] brutal-title text-text uppercase">
          <SplitHeading text="Let's create" />
          <br />
          <span className="text-accent">
            <SplitHeading text="together." />
          </span>
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="text-muted mb-14 text-lg leading-relaxed max-w-xl mx-auto"
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
            className="brutal-button"
          >
            Say Hello <MailIcon />
          </MagneticButton>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-text/20 mb-10" />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-muted text-sm">
            Designed & built by Sayyidina Anshari Ahmad
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
                className="text-muted hover:text-text elastic-all"
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

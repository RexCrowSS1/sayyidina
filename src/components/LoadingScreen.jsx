import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * LoadingScreen — A premium animated loading screen.
 * 
 * Shows a centered animated logo with a staggered letter reveal,
 * a smooth progress bar, and a cinematic exit animation
 * (scale up + fade out) before revealing the main page.
 */

const LOADING_DURATION = 4000; // ms before exit begins

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Animate progress from 0 → 100 over the loading duration
    const startTime = Date.now();
    let raf;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / LOADING_DURATION, 1);
      // Ease-out curve for more natural feel
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased * 100);

      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Start exit animation
        setIsExiting(true);
        setTimeout(() => onComplete(), 800); // Wait for exit anim
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  const name = 'RIRI | SAYYIDINA';
  const parts = name.split('|').map(s => s.trim());
  const leftPart = parts[0] || '';
  const rightPart = parts[1] || '';

  return (
    <AnimatePresence>
      {!isExiting ? null : null}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.15,
          filter: 'blur(10px)',
          transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        }}
        animate={isExiting ? {
          opacity: 0,
          scale: 1.15,
          filter: 'blur(10px)',
          transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        } : {}}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
        style={{ background: 'var(--color-dark)', color: 'var(--color-surface)' }}
      >
        <div className="absolute w-[30rem] h-[30rem]" style={{ backgroundColor: 'rgba(255, 204, 0, 0.08)', filter: 'blur(100px)' }} />

        {/* Logo / Name reveal */}
        <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4">
          <div className="flex items-center justify-center overflow-hidden">
            {/* Left Part */}
            <div className="flex items-center gap-[1px] md:gap-[2px]">
              {leftPart.split('').map((letter, i) => (
                <motion.span
                  key={`left-${i}`}
                  initial={{ y: 60, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-text inline-block"
                  style={{ fontFamily: 'var(--font-display)', perspective: '600px' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.span
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + leftPart.length * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-6 sm:h-8 md:h-12 w-[2px] bg-surface/20 block mx-3 sm:mx-4 md:mx-6"
              style={{ originY: 0.5 }}
            />

            {/* Right Part */}
            <div className="flex items-center gap-[1px] md:gap-[2px]">
              {rightPart.split('').map((letter, i) => (
                <motion.span
                  key={`right-${i}`}
                  initial={{ y: 60, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + (leftPart.length + 1 + i) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-text inline-block"
                  style={{ fontFamily: 'var(--font-display)', perspective: '600px' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-sm tracking-[0.3em] uppercase text-surface/70 font-medium"
          >
            Portfolio
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '160px' }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="relative h-[2px] rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)', width: 160 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: 'var(--color-accent)',
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs font-mono text-muted"
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

import { useSplitText } from './hooks/useSplitText';
import { useMagnetic } from './hooks/useMagnetic';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   HERO SECTION — Inline component for the opening scroll phase
   Handles the dramatic intro with letter animations
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  const { chars: nameChars } = useSplitText('SAYYIDINA');
  const magneticCTA = useMagnetic(0.3);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Layered background orbs */}
      <div className="absolute top-[15%] -left-[10%] w-[45rem] h-[45rem] bg-violet/8 rounded-full blur-[150px] animate-float-slow -z-10" />
      <div className="absolute bottom-[10%] -right-[10%] w-[35rem] h-[35rem] bg-indigo/6 rounded-full blur-[120px] animate-float -z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[60%] w-[20rem] h-[20rem] bg-rose/5 rounded-full blur-[80px] animate-float-slow -z-10" style={{ animationDelay: '1s' }} />

      {/* Floating geometric dots */}
      {[
        { top: '20%', right: '15%', size: 'w-3 h-3', color: 'bg-violet/40', anim: 'animate-float' },
        { top: '30%', left: '10%', size: 'w-2 h-2', color: 'bg-indigo/30', anim: 'animate-float-slow' },
        { bottom: '25%', right: '25%', size: 'w-4 h-4', color: 'bg-rose/20', anim: 'animate-float' },
        { top: '60%', left: '20%', size: 'w-1.5 h-1.5', color: 'bg-emerald/30', anim: 'animate-float-slow' },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} rounded-full ${dot.color} ${dot.anim} -z-10`}
          style={{ top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom, animationDelay: `${i * 0.7}s` }}
        />
      ))}

      {/* Main content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card !rounded-full text-sm mb-10 text-charcoal/70"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse shadow-lg shadow-emerald/50" />
            Available for new opportunities
          </motion.div>

          {/* Letter-by-letter name reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight text-charcoal mb-4 leading-[0.95]">
            <span className="overflow-hidden flex flex-wrap">
              {nameChars.map(({ char, index }) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="split-char"
                  style={{ perspective: '600px' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="text-charcoal/50">Building </span>
              <span className="text-gradient-violet animate-shimmer" style={{ backgroundSize: '200% auto' }}>
                digital experiences
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-charcoal/50 mb-12 max-w-2xl leading-relaxed"
          >
            I'm a frontend developer specializing in building exceptional digital
            products. Currently focused on creating accessible, human-centered experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              ref={magneticCTA.ref}
              onMouseMove={magneticCTA.onMouseMove}
              onMouseLeave={magneticCTA.onMouseLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              data-magnetic
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-charcoal text-cream rounded-full font-semibold shadow-xl shadow-charcoal/15 hover:shadow-2xl hover:shadow-charcoal/25 elastic-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              data-magnetic
              className="inline-flex items-center gap-2.5 px-8 py-4 glass-card !rounded-full font-semibold text-charcoal hover:bg-white/70 elastic-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-charcoal/30 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border-2 border-charcoal/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-charcoal/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN APP — Orchestrates the full scroll experience
   ═══════════════════════════════════════════════════════ */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [marqueeSpeed, setMarqueeSpeed] = useState(1);
  const mainRef = useRef(null);

  // ─── Lock body scroll during loading ───
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

  // ─── Scroll progress for the progress bar ───
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // ─── Fluid background color morph based on scroll ───
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.45, 0.65, 0.82, 1.0],
    [
      '#f5f0eb', // cream (hero)
      '#f5f0eb', // cream (about)
      '#ede9fe', // lavender (projects)
      '#f5f0eb', // cream (skills)
      '#1a1025', // deep violet (contact transition)
      '#0f0a1a', // dark (contact)
    ]
  );

  // ─── Track active section with IntersectionObserver ───
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ─── GSAP ScrollTrigger: Marquee speed linked to scroll velocity ───
  useEffect(() => {
    // Track scroll velocity and adjust marquee speed
    let lastScrollTop = 0;
    let velocityTimeout;

    const handleScroll = () => {
      const st = window.scrollY;
      const velocity = Math.abs(st - lastScrollTop);
      lastScrollTop = st;

      // Map velocity (0-100) to speed (1-4)
      const speed = 1 + Math.min(velocity / 30, 3);
      setMarqueeSpeed(speed);

      // Decay back to normal speed
      clearTimeout(velocityTimeout);
      velocityTimeout = setTimeout(() => setMarqueeSpeed(1), 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(velocityTimeout);
    };
  }, []);

  // ─── GSAP: Card-stack peel reveal for Contact section ───
  useEffect(() => {
    const skillsEl = document.getElementById('skills');
    const contactEl = document.getElementById('contact');
    if (!skillsEl || !contactEl) return;

    // Create a subtle "peel" effect: Skills section lifts up
    // revealing the Contact section underneath
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: contactEl,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        onUpdate: (self) => {
          // Subtle rotation and lift on skills section
          const progress = self.progress;
          gsap.set(skillsEl, {
            rotationX: progress * 3,
            transformOrigin: 'center bottom',
            transformPerspective: 1200,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // ─── GSAP: Parallax on sections ───
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal for sections as they enter viewport
      gsap.utils.toArray('.section-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── Loading Screen ─── */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Custom cursor (hidden on mobile) */}
      <CustomCursor activeSection={activeSection} />

      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* ═══ Main content with fluid background ═══ */}
      <motion.main
        ref={mainRef}
        style={{ backgroundColor: bgColor }}
        className="relative transition-colors duration-0"
      >
        {/* ─── Phase 1: Hero intro ─── */}
        <HeroSection />

        {/* ─── Kinetic marquee (background texture) ─── */}
        <Marquee speed={marqueeSpeed} className="py-12 opacity-60" />

        {/* ─── Phase 2: About (Typography reveal) ─── */}
        <div className="section-reveal">
          <About />
        </div>

        {/* ─── Marquee again between sections ─── */}
        <Marquee speed={marqueeSpeed} className="py-8 opacity-40" />

        {/* ─── Phase 3: Projects (Bento + hover reveals) ─── */}
        <div className="section-reveal">
          <Projects />
        </div>

        {/* ─── Phase 3 continued: Skills ─── */}
        <div className="section-reveal">
          <Skills />
        </div>

        {/* ─── Marquee before final section ─── */}
        <Marquee speed={marqueeSpeed} className="py-8 opacity-30" />

        {/* ─── Phase 4: Contact (Card-stack peel) ─── */}
        <Contact />
      </motion.main>
    </>
  );
}

export default App;

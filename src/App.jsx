import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';

const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'contact'];
const topCanvas = '#f3ead5';
const bottomCanvas = '#111111';

export default function App() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: scrollContainer, rootMargin: '-42% 0px -48% 0px', threshold: 0 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return undefined;

    let frameId = 0;
    let activeCanvas = '';

    const setTopCanvas = () => {
      if (activeCanvas === 'top') return;
      activeCanvas = 'top';
      document.documentElement.classList.remove('is-at-bottom');
      document.documentElement.style.setProperty('--overscroll-canvas', topCanvas);
      document.documentElement.style.backgroundColor = topCanvas;
      document.body.style.backgroundColor = topCanvas;
    };

    const setBottomCanvas = () => {
      if (activeCanvas === 'bottom') return;
      activeCanvas = 'bottom';
      document.documentElement.classList.add('is-at-bottom');
      document.documentElement.style.setProperty('--overscroll-canvas', bottomCanvas);
      document.documentElement.style.backgroundColor = bottomCanvas;
      document.body.style.backgroundColor = bottomCanvas;
    };

    const updateCanvasColor = () => {
      const maxScroll = Math.max(0, scrollContainer.scrollHeight - scrollContainer.clientHeight);
      const distanceFromBottom = maxScroll - scrollContainer.scrollTop;
      const bottomEnterDistance = 180;
      const bottomLeaveDistance = 320;
      const shouldUseBottomCanvas =
        activeCanvas === 'bottom'
          ? distanceFromBottom <= bottomLeaveDistance
          : distanceFromBottom <= bottomEnterDistance;

      if (shouldUseBottomCanvas) {
        setBottomCanvas();
        return;
      }

      setTopCanvas();
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateCanvasColor();
      });
    };

    updateCanvasColor();
    scrollContainer.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      scrollContainer.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
      document.documentElement.classList.remove('is-at-bottom');
      document.documentElement.style.removeProperty('--overscroll-canvas');
      document.documentElement.style.removeProperty('background-color');
      document.body.style.removeProperty('background-color');
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-root relative overflow-x-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar activeSection={activeSection} onNavigate={scrollTo} />
      <div ref={scrollContainerRef} className="app-scroll-shell">
        <InteractiveBackground />
        <main id="content" className="site-content relative z-10">
          <Hero
            scrollContainerRef={scrollContainerRef}
            onContact={() => scrollTo('contact')}
            onProjects={() => scrollTo('projects')}
          />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
      <CustomCursor />
    </div>
  );
}

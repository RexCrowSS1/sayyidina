import { useEffect, useRef, useState } from 'react';
import { domAnimation, LazyMotion, m, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';

const sections = ['hero', 'about', 'experience', 'skills', 'journey', 'contact'];
const canvasColors = {
  student: { top: '#f3ead5', bottom: '#111111' },
  nonStudent: { top: '#0b0e10', bottom: '#050607' },
};

export default function App() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [studentMode, setStudentMode] = useState(true);
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

    const { top: topCanvas, bottom: bottomCanvas } = studentMode
      ? canvasColors.student
      : canvasColors.nonStudent;

    document.documentElement.classList.toggle('is-non-student-theme', !studentMode);

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
      document.documentElement.classList.remove('is-non-student-theme');
      document.documentElement.style.removeProperty('--overscroll-canvas');
      document.documentElement.style.removeProperty('background-color');
      document.body.style.removeProperty('background-color');
    };
  }, [studentMode]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className={`site-root relative overflow-x-hidden${studentMode ? '' : ' is-non-student-mode'}`}
      >
        <m.div className="scroll-progress" style={{ scaleX }} />
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollTo}
          studentMode={studentMode}
        />
        <div ref={scrollContainerRef} className="app-scroll-shell">
          <InteractiveBackground />
          <main id="content" className="site-content relative z-10">
            <Hero
              scrollContainerRef={scrollContainerRef}
              onContact={() => scrollTo('contact')}
              onExperience={() => scrollTo('experience')}
              studentMode={studentMode}
              onToggleStudentMode={() => setStudentMode((isOn) => !isOn)}
            />
            <About studentMode={studentMode} />
            <Experience studentMode={studentMode} />
            <Skills studentMode={studentMode} />
            <Journey studentMode={studentMode} />
            <Contact studentMode={studentMode} />
          </main>
          <Footer />
        </div>
        <CustomCursor />
      </div>
    </LazyMotion>
  );
}

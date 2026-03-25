import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCinematicScroll } from './hooks/useCinematicScroll';

function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal();
  useCinematicScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        // Force-activate hero after loader
        const hero = document.querySelector('#home');
        if (hero) {
          hero.classList.remove('is-below', 'is-above');
          hero.classList.add('is-active');
        }
        // Trigger scroll spy
        window.dispatchEvent(new Event('scroll'));
      }, 120);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Loader />}

      <div
        className={`relative w-full ${
          loading ? 'h-screen overflow-hidden opacity-0' : 'opacity-100 transition-opacity duration-700'
        }`}
      >
        {/* ── Premium animated background ────────────────────── */}
        <div
          className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-animated-mesh"
          aria-hidden="true"
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '3.5rem 3.5rem',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)'
            }}
          />

          {/* Light-mode soft blobs (hidden in dark) */}
          <div className="dark:hidden absolute -top-[15%] -left-[10%] w-[55%] h-[55%] rounded-full blur-[140px] animate-blob"
            style={{ background: 'rgba(96, 165, 250, 0.18)' }} />
          <div className="dark:hidden absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[160px] animate-blob"
            style={{ background: 'rgba(167, 139, 250, 0.16)', animationDelay: '3s' }} />
          <div className="dark:hidden absolute top-[40%] right-[5%] w-[30%] h-[30%] rounded-full blur-[100px] animate-blob"
            style={{ background: 'rgba(244, 114, 182, 0.12)', animationDelay: '6s' }} />

          {/* Dark-mode vivid blobs (hidden in light) */}
          <div className="hidden dark:block absolute -top-[15%] -left-[10%] w-[55%] h-[55%] rounded-full blur-[140px] animate-blob"
            style={{ background: 'rgba(99, 102, 241, 0.20)' }} />
          <div className="hidden dark:block absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[160px] animate-blob"
            style={{ background: 'rgba(139, 92, 246, 0.18)', animationDelay: '3s' }} />
          <div className="hidden dark:block absolute top-[40%] right-[5%] w-[30%] h-[30%] rounded-full blur-[100px] animate-blob"
            style={{ background: 'rgba(236, 72, 153, 0.12)', animationDelay: '6s' }} />
        </div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

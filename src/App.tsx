import { useEffect } from 'react';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { SelectedWork } from './components/sections/SelectedWork';
import { VagAgency } from './components/sections/VagAgency';
import { Experiments } from './components/sections/Experiments';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Intersection Observer for reveal animations on scroll
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#F3F3F6] selection:bg-[#00F0FF] selection:text-black">
      {/* Noise Texture & Custom Cursor Overlay */}
      <GrainOverlay />
      <CustomCursor />

      {/* Fixed Minimal Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        <Hero />
        
        <div className="reveal-on-scroll">
          <About />
        </div>

        <div className="reveal-on-scroll">
          <SelectedWork />
        </div>

        <div className="reveal-on-scroll">
          <VagAgency />
        </div>

        <div className="reveal-on-scroll">
          <Experiments />
        </div>

        <div className="reveal-on-scroll">
          <Achievements />
        </div>

        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;

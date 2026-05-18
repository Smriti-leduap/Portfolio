import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Loader from './components/Loader';


const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedProject) return;

      const sections = ['home', 'about-me', 'works', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLoadingStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen relative transition-colors duration-500 font-display">
      <Loader isVisible={isLoading} />
      
   <div className="fixed inset-0 z-0">
  <div
    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
      theme === 'dark' ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ backgroundImage: "url('/bg-dark.png')" }}
  />

  <div
    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
      theme === 'light' ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ backgroundImage: "url('/bg-light.png')" }}
  />

  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/10'}`} />
</div>

      <div className={`relative z-10 flex flex-col ${selectedProject ? 'h-screen overflow-hidden' : ''}`}>
        {!selectedProject && (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
            
            <section id="home" className="h-screen w-full px-10 md:px-32">
              <Hero onLoadingStart={handleLoadingStart} />
            </section>

            <About />
            <Projects onViewDetails={setSelectedProject} onLoadingStart={handleLoadingStart} />
            <Contact />

            <Footer activeSection={activeSection} scrollProgress={scrollProgress} />
          </>
        )}

        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;

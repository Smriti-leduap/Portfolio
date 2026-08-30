import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Loader from './components/Loader';
import giftAvatar from './assets/gift avatar.png';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEasterEggVisible, setIsEasterEggVisible] = useState(false);
  const [hasClaimedReward, setHasClaimedReward] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [rewardStep, setRewardStep] = useState(0);

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
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener?.('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener?.('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!isEasterEggVisible || hasClaimedReward) {
      setRewardStep(0);
      return;
    }

    if (prefersReducedMotion) {
      setRewardStep(2);
      return;
    }

    const firstDelay = setTimeout(() => setRewardStep(1), 1400);
    const secondDelay = setTimeout(() => setRewardStep(2), 3600);

    return () => {
      clearTimeout(firstDelay);
      clearTimeout(secondDelay);
    };
  }, [isEasterEggVisible, hasClaimedReward, prefersReducedMotion]);

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

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12;
      setIsEasterEggVisible(!selectedProject && isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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

  const handleClaimReward = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setHasClaimedReward(true);
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

      {!selectedProject && (
        <div
          className={`fixed bottom-8 left-[-36px] z-50 w-[390px] max-w-[calc(100vw-24px)] transition-all duration-700 ease-out ${
            isEasterEggVisible ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
          } ${prefersReducedMotion ? 'transition-none' : ''} md:bottom-10 md:left-[-36px]`}
          aria-live="polite"
        >
          <div className="relative flex items-end justify-end gap-3 md:gap-5 overflow-visible">
            <div className="relative order-0 flex flex-col items-center justify-end overflow-visible">
              {!hasClaimedReward ? (
                <div
                  className={`relative z-20 flex flex-col items-center justify-end transition-all duration-700 ease-out ${
                    isEasterEggVisible ? 'translate-y-3 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <div
                    className={`relative z-20 mb-0 w-auto max-w-[230px] rounded-[18px] border border-violet-300/60 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 px-3 py-2 text-white shadow-[0_18px_40px_rgba(76,29,149,0.35)] backdrop-blur-md transition-all duration-700 ease-out dark:border-violet-300/20 ${
                      isEasterEggVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-95 -rotate-1 opacity-0'
                    }`}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-white md:text-sm">YOU'VE COME SO FAR</p>
                    <p className="mt-1 text-[11px] font-medium text-violet-50 md:text-xs">Here is your little reward</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClaimReward}
                    style={{ pointerEvents: isEasterEggVisible ? 'auto' : 'none' }}
                    className={`relative z-20 mb-0 mt-2 cursor-pointer rounded-full border border-amber-300/50 bg-yellow-400 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-black shadow-[0_18px_35px_rgba(251,191,36,0.3)] transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 active:scale-[0.98] ${
                      isEasterEggVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-75 opacity-0'
                    }`}
                  >
                    CLAIM YOUR REWARD
                  </button>
                </div>
              ) : (
                <div className="mb-1 mt-4 w-[250px] rounded-[26px] border border-violet-400/40 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 px-4 py-3 text-white shadow-[0_18px_40px_rgba(76,29,149,0.35)] backdrop-blur-md dark:border-violet-300/20">
                  <div className="space-y-2">
                    <p className="text-base font-black uppercase tracking-[0.18em] text-white md:text-lg">FOOLED YOU! 😈</p>
                    <p className="text-sm font-medium text-violet-50 md:text-base">It’s my resume.</p>
                    <p className="text-[11px] leading-relaxed text-violet-100 md:text-xs">
                      Since you’re already here, you might as well take it with you.
                    </p>
                  </div>
                </div>
              )}

              <img
                src={giftAvatar}
                alt="Cartoon character holding a gift"
                className={`relative z-0 h-[14.5rem] w-auto -translate-y-5 drop-shadow-[0_12px_18px_rgba(15,23,42,0.18)] transition-all duration-700 ease-out reward-float ${
                  isEasterEggVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                } md:h-[18rem]`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


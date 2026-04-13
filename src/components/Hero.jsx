import React, { useState, useEffect } from 'react';
import bgDark from '../assets/bg-dark.png';
import bgLight from '../assets/bg-light.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const roles = ["graphic designer", "programmer"];
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const pauseTime = 6000;

  // Detect theme
  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsDarkTheme(root.classList.contains('dark'));

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (typedText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">

      

     
      {/* Content */}
      <div className="relative z-10 animate-[fadeIn_1s_ease-out] px-6 md:px-10">
        <p className="text-sm md:text-base font-black tracking-[0.3em] dark:text-white/90 text-indigo-950 uppercase mb-1">
          HI, I'M
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-[-0.05em] leading-[0.8] dark:text-white text-indigo-950 mb-8 font-display">
          SMRITI
        </h1>

        <div className="max-w-xl space-y-8">
          <p className="text-base md:text-lg font-medium dark:text-white text-indigo-950/70 leading-relaxed font-display min-h-[120px]">
            I am Smriti Paudel, a{" "}
            <span className="dark:text-yellow-400 text-indigo-950 font-black border-r-4 border-black dark:border-yellow-400 pr-2 animate-pulse">
              {typedText}
            </span>.
            {roleIndex === 0
              ? " I believe design is more than just visuals; it's storytelling. I enjoy exploring colors, typography, and layout to create designs that are both aesthetically pleasing and purposeful."
              : " I specialize in building robust and scalable web applications. I love turning complex problems into elegant code, focusing on performance, clean architecture, and creating seamless digital experiences that solve real-world problems."}
          </p>

          <div className="pt-2">
            <p className="text-sm font-bold dark:text-white/50 text-indigo-950/50 mb-3 font-display">
              Welcome to my portfolio.
            </p>

            <a href="#works" className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="w-4 h-4 rounded-full border border-black dark:border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
              </div>

              <span className="text-xs font-black tracking-widest uppercase dark:text-white text-indigo-950 group-hover:underline underline-offset-8 transition-all">
                Take A Look Around
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
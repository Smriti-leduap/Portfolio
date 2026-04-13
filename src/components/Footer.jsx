import React from 'react';

const Footer = ({ activeSection, scrollProgress }) => {
  const getSectionNum = () => {
    switch(activeSection) {
      case 'home': return '01';
      case 'works': return '02';
      case 'contact': return '03';
      case 'about-me': return '01';
      default: return '01';
    }
  };

  const num = getSectionNum();

  return (
    <footer className="fixed bottom-0 left-0 w-full px-10 py-6 flex justify-center items-center z-40 pointer-events-none">
      {/* Center Pagination Only */}
      <div className="flex justify-center items-center gap-6 pointer-events-auto bg-black/5 dark:bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-black/10 dark:border-white/10">
        <span className="text-[10px] font-black tracking-widest text-indigo-950 dark:text-white">{num}</span>
        <div className="w-48 h-[1px] bg-indigo-950/10 dark:bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-indigo-950 dark:bg-white transition-all duration-500 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <span className="text-[10px] font-black tracking-widest text-indigo-950 dark:text-white">03</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
         
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-yellow-400 border-r-indigo-600 dark:border-r-yellow-400 animate-spin"></div>
          
         
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-indigo-400 dark:border-b-yellow-300 animate-spin" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-l-indigo-500 dark:border-l-yellow-400 animate-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>


        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.2em] dark:text-white/70 text-indigo-950/70 uppercase animate-pulse">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;

import React from 'react';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' },
    { name: 'About Me', id: 'about-me' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-8 z-50">
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-12">
          {links.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className={`text-sm font-bold tracking-widest transition-all duration-300 pb-1 border-b-2 ${
                  activeSection === link.id 
                    ? 'border-black dark:border-white text-black dark:text-white' 
                    : 'border-transparent dark:text-white/50 text-black/50 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-0 flex justify-end">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-indigo-600 fill-current" viewBox="0 0 24 24">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

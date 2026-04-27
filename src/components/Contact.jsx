import React from 'react';

const Contact = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/smriti_paudel1/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 2.618-4.803 6.11-.001 1.056-.002 2.032-.002 4.819 0 2.786.001 3.762.002 4.819.023 3.49 0.444 5.91 4.803 6.11 1.28.058 1.688.072 4.947.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 4.782-2.618 4.803-6.11 0.001-1.056.002-2.032.002-4.819 0-2.786-.001-3.762-.002-4.819-.023-3.49-0.444-5.91-4.803-6.11-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c0.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s0.644-1.44 1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Smriti-leduap',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@_muffin_0_',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-8 md:px-20 flex flex-col justify-center items-center backdrop-blur-lg">
      <div className="max-w-4xl w-full text-center">
        <h3 className="text-sm font-bold tracking-[0.2em] mb-4 dark:text-white/70 text-indigo-950/70 uppercase">
          Get in Touch
        </h3>
        <h2 className="text-6xl md:text-8xl font-black mb-16 dark:text-white text-indigo-950 tracking-widest leading-none">
          LET'S WORK<br />TOGETHER
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16">
          <a href="mailto:smpaudel138@gmail.com" className="text-2xl font-light dark:text-white text-indigo-950 hover:text-yellow-400 transition-colors tracking-widest border-b border-white/10 pb-2">
            smpaudel138@gmail.com
          </a>

          <div className="flex space-x-10">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 transform hover:scale-125 dark:text-white/40 text-indigo-950/40 dark:hover:text-yellow-400 hover:text-black"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center dark:text-white/40 text-indigo-950/40 text-[10px] tracking-[0.4em] uppercase">
          <p>© 2026 SMRITI PORTFOLIO</p>
          <p>DESIGNED IN SPACE</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="min-h-screen py-24 px-8 md:px-20 flex flex-col justify-center backdrop-blur-sm">
      <div className="max-w-4xl">
        <h3 className="text-sm font-bold tracking-[0.2em] mb-4 dark:text-white/60 text-indigo-950/60 uppercase">
          About Me
        </h3>
        <h2 className="text-6xl font-black mb-12 dark:text-white text-indigo-950 tracking-widest leading-none">
          GRAPHIC DESIGNER &<br />CODER
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg leading-relaxed dark:text-white text-indigo-950/80 font-light">
            I bridge the gap between aesthetics and function. As a designer, I craft visual identities and
            user experiences. As a coder, I bring those visions to life with clean, efficient code.
            I specialize in branding, social media strategy, and frontend web development.
          </p>

          <div className="space-y-10">
            <div>
              <h4 className="dark:text-white text-indigo-950 font-bold mb-6 tracking-widest text-sm uppercase">Design Skills</h4>
              <div className="flex flex-wrap gap-4">
                {['Figma', 'Adobe Illustrator', 'Photoshop', 'CorelDraw'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-indigo-950/5 dark:bg-white/10 border border-indigo-950/10 dark:border-white/20 rounded-full dark:text-white text-indigo-950 text-xs tracking-widest hover:bg-indigo-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="dark:text-white text-indigo-950 font-bold mb-6 tracking-widest text-sm uppercase">Coding Skills</h4>
              <div className="flex flex-wrap gap-4">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS','Python'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-indigo-950/5 dark:bg-white/10 border border-indigo-950/10 dark:border-white/20 rounded-full dark:text-white text-indigo-950 text-xs tracking-widest hover:bg-indigo-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

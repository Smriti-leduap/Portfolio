import React from 'react';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  const handleBack = () => {
    onBack();
    setTimeout(() => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const storyCards = Array.isArray(project.details)
    ? [
        { title: 'Problem', content: project.details[0] },
        { title: 'Research → Insight', content: project.details[1] },
        { title: 'Decision', content: project.details[2] },
        { title: 'Iteration', content: project.details[3] },
        { title: 'Final Solution + Outcome / Learning', content: `${project.details[4]} ${project.details[5]}` },
      ]
    : [{ title: 'Project Story', content: project.details }];

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-zinc-950 overflow-y-auto animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-24">
        <button
          onClick={handleBack}
          className="flex items-center gap-4 text-xs font-black tracking-widest uppercase mb-16 group dark:text-white text-indigo-950"
        >
          <div className="w-10 h-[1px] bg-indigo-950/20 dark:bg-white/20 group-hover:w-16 transition-all"></div>
          Back to Works
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24 self-start space-y-12">
            <div className="rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-2xl">
              <img src={project.detailImage || project.image} alt={project.title} className="w-full h-auto" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.additionalImages?.map((img, i) => (
                <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <img src={img} alt={`${project.title} view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-0 pb-12">
            <div className="mb-8">
              <p className="text-xs font-black tracking-[0.4em] uppercase text-yellow-500 mb-6">{project.category}</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white text-indigo-950 leading-[0.9]">
                {project.titleLines
                  ? project.titleLines.map((line, i) => <div key={i}>{line}</div>)
                  : project.title
                }
              </h1>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black tracking-[0.2em] uppercase dark:text-white/40 text-indigo-950/40">The Story & Process</h3>

              <div className="relative">
                {storyCards.map((card, index) => (
                  <div
                    key={index}
                    className="sticky top-24 rounded-[28px] border border-violet-200/80 bg-violet-100/90 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.10)] backdrop-blur-sm dark:border-violet-800/70 dark:bg-violet-950/50"
                    style={{
                      zIndex: index + 1,
                      marginTop: index === 0 ? 0 : '-1.6rem',
                    }}
                  >
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">
                      {card.title}
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-indigo-950 dark:text-violet-50">
                      {card.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {project.url && !project.url.startsWith('#') && (
              <div className="pt-8 pb-10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 rounded-full bg-indigo-950 dark:bg-white text-white dark:text-black text-xs font-black tracking-widest uppercase hover:scale-105 transition-transform text-center inline-block"
                >
                  Launch Live Site
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-32 pt-24 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-xs font-black tracking-[0.3em] uppercase dark:text-white/20 text-indigo-950/20 italic">
          <span>SMRITI PORTFOLIO</span>
          <span>DESIGNED IN SPACE</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import React, { useCallback, useMemo, useState } from 'react';
import ezImg from '../assets/ez-crossword.png';
import ezImg2 from '../assets/ez-2.png';
import ezImg3 from '../assets/ez-3.png';
import mountainFullImg from '../assets/mountain-full.png';
import mountainImg from '../assets/nepal-mountain.png';
import mountainImg2 from '../assets/mountain-2.png';
import mountainImg3 from '../assets/mountain-3.png';
import nepsorImg from '../assets/nepsor.png';
import nepsorImg2 from '../assets/nepsor-2.png';
import nepsorImg3 from '../assets/nepsor-3.png';
import trinathImg from '../assets/trinath.webp';
import trinathFrontImg from '../assets/trinathfront.webp';
import verdantImg from '../assets/verdant.png';
import verdantFrontImg from '../assets/verdant1.png';
import dealscoutFrontImg from '../assets/dealscout.png';
import dealscoutImg2 from '../assets/dealscout2.png';
import dealscoutImg3 from '../assets/dealscout3.png';

import nepsorSocialMediaImg from '../assets/poster.png';
import nepsorSocialMediaImg1 from '../assets/poster1.png';
import nepsorSocialMediaImg2 from '../assets/poster2.png';
import nepsorSocialMediaImg3 from '../assets/poster3.png';
import nepsorSocialMediaImg4 from '../assets/poster4.png';
import nepsorSocialMediaImg5 from '../assets/poster5.png';
import nepsorSocialMediaImg6 from '../assets/poster6.png';
import illustrationImg1 from '../assets/illustration1.png';
import illustrationImg2 from '../assets/illustration2.png';
import illustrationImg3 from '../assets/illustration3.png';
import illustrationImg4 from '../assets/illustration4.png';
import illustrationImg5 from '../assets/illustration5.png';
import illustrationImg6 from '../assets/illustration6.png';
import illustrationImg7 from '../assets/illustration7.png';
import ascolHackfestImg from '../assets/ascol.jpg';
import ascolHackfestImg1 from '../assets/ascol1.jpg';
import ascolHackfestImg2 from '../assets/ascol2.jpg';
import ascolHackfestImg3 from '../assets/ascol3.jpg';
import ascolHackfestImg4 from '../assets/ascol4.jpg';
import ascolHackfestImg5 from '../assets/ascol5.jpg';
import ascolHackfestImg6 from '../assets/ascol6.jpg';
import ascolHackfestImg7 from '../assets/ascol7.jpg';
import ascolHackfestImg8 from '../assets/ascol8.jpg';




const ProjectCard = React.memo(({ title, titleLines, category, url, image, detailImage, details, additionalImages, onViewDetails }) => {
  const showProjectLink = Boolean(url) && title !== 'DEALSCOUT';

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-500">
      <div className="aspect-[4/3] w-full bg-black/5 dark:bg-white/10 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center dark:text-white/20 text-indigo-950/20 italic group-hover:scale-110 transition-transform duration-700">
            [{title} Image]
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
          <button
            onClick={() => onViewDetails({ title, titleLines, category, image, detailImage, details, url, additionalImages })}
            className="w-40 py-3 rounded-full bg-white text-black text-[10px] font-black tracking-widest uppercase hover:bg-yellow-400 transition-colors"
          >
            View Details
          </button>
          {showProjectLink && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 py-3 rounded-full border border-white/40 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View Project
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] tracking-[0.3em] uppercase text-yellow-400 mb-2">{category}</p>
        <h4 className="text-xl font-bold tracking-widest text-white">{title}</h4>
      </div>
    </div>
  );
});

const projects = {
    designer: [
      {
        title: 'EZ CROSSWORD',
        category: 'UI/UX',
        url: 'https://ez-crossword.vercel.app/',
        image: ezImg,
        additionalImages: [ezImg2, ezImg3],
        details: [
          "Problem: The user needed a crossword experience that felt quick, calm, and easy to navigate without visual clutter or unnecessary friction.",
          "Research → Insight: I learned that players care more about readability and speed than decorative complexity. When the interface is too busy, it interrupts focus and makes a simple game feel tiring.",
          "Decision: I chose a minimal grid, large tap targets, and a soft lavender palette because the experience needed to feel gentle and easy on the eyes. Based on the need for quick scanning, I also reduced extra UI and kept the most important actions close to the board.",
          "Iteration: Before, the layout felt crowded and distracting. After testing, I learned that players wanted less noise and more clarity. I simplified the hierarchy, widened spacing, and focused attention on the puzzle itself.",
          "Final Solution: The final design keeps the crossword at the center, with clean typography and a calm visual system that supports long sessions without fatigue.",
          "Outcome / Learning: The result is a more focused and accessible experience. I learned that a strong UX for games often comes from restraint: removing friction makes the product feel more enjoyable, not less sophisticated."
        ]
      },
      {
        title: 'NEPAL MOUNTAIN ASSISTANCE',
        category: 'UI/UX',
        url: 'https://nepalmountainassistance.com/',
        image: mountainImg,
        detailImage: mountainFullImg,
        additionalImages: [mountainImg2, mountainImg3],
        details: [
          "Problem: The audience needed to trust the service quickly, especially when they were planning high-risk trekking trips and rescue support.",
          "Research → Insight: I learned that people scanning a trekking service want confidence, clarity, and safety information before they look at anything else. Visual luxury alone was not enough; the information had to feel reliable.",
          "Decision: I chose a premium dark palette with orange accents because it communicated urgency and trust without feeling chaotic. Based on the need for quick decision-making, I created a clear hierarchy so safety details and booking actions appeared before decorative content.",
          "Iteration: Before, the site risked feeling visually impressive but harder to navigate. After reviewing the information flow, I learned that users needed the most critical details to appear immediately. I tightened the layout and pushed important service information higher in the page.",
          "Final Solution: The final design combines strong imagery with clear information architecture, making the trip feel exciting while still reassuring users that the company is credible and prepared.",
          "Outcome / Learning: The project reinforced that premium design works best when it supports trust, not just aesthetics. I learned that for high-stakes decisions, clarity is a bigger design priority than visual complexity."
        ]
      },
      {
        title: 'NEPSOR',
        category: 'Branding',
        url: 'https://nepsor.com/',
        image: nepsorImg,
        additionalImages: [nepsorImg2, nepsorImg3],
        details: [
          "Problem: Nepsor needed a brand that felt credible and modern, while still being approachable enough for real people to connect with it.",
          "Research → Insight: I learned that many tech brands either feel too corporate or too playful, and neither helps people trust the product. The strongest opportunity was a brand that communicated stability without losing personality.",
          "Decision: I chose clean typography and a structured visual system because the identity needed to feel dependable and scalable. Based on that insight, I kept the palette restrained and the iconography simple so the brand could work across web, print, and presentations without becoming noisy.",
          "Iteration: Before, the direction felt too generic to stand apart. After reviewing the system with stakeholders, I learned that clarity and consistency mattered more than visual complexity. I simplified the brand language and made the identity more intentional.",
          "Final Solution: The final brand balances technical confidence with warmth, giving Nepsor a visual system that feels professional, grounded, and easy to recognize.",
          "Outcome / Learning: The result was a more cohesive and trustworthy brand presence. I learned that strong brand decisions are really product decisions: they shape how people understand and remember the company."
        ]
      },
      {
        title: 'TRINATH ORGANIC HONEY',
        titleLines: ['TRINATH ORGANIC','HONEY'],
        category: 'Packaging',
        image: trinathFrontImg,
        detailImage: trinathImg,
        details: [
          "Problem: The product needed to communicate purity, trust, and origin in a way that felt honest and natural, not overly polished or artificial.",
          "Research → Insight: I learned that the strongest visual story for honey is not about sweetness alone; it is about where it comes from, how it is made, and why it feels authentic. The brand had to feel rooted in nature while still being premium enough to stand on the shelf.",
          "Decision: I chose a honeycomb, leaf, and bee system because each symbol carried a meaningful story about purity, life, and origin. Based on that, I built a clean cream-and-gold label system that makes the product feel trustworthy while keeping the information easy to scan.",
          "Iteration: Before, the identity was still too broad and could have belonged to many food brands. After refining the concept, I learned that the product needed stronger symbolic cues to feel specific and memorable. I tightened the logo, clarified the label hierarchy, and aligned the packaging around the product story.",
          "Final Solution: The final packaging brings together the product story, the natural ingredients, and the brand’s values in one clear system. It helps the consumer understand what makes this honey different in seconds.",
          "Outcome / Learning: The project strengthened my belief that packaging is a form of product communication. I learned that the most effective design decisions are the ones that help the customer understand value quickly and intuitively."
        ]
      },
      {
        title: 'NEPSOR SOCIAL MEDIA',
        category: 'Poster',
        image: nepsorSocialMediaImg,
        additionalImages: [nepsorSocialMediaImg1, nepsorSocialMediaImg2, nepsorSocialMediaImg3, nepsorSocialMediaImg4, nepsorSocialMediaImg5, nepsorSocialMediaImg6],
        details: [
          "Problem: The brand needed a consistent social presence that could communicate its value quickly and clearly across a crowded LinkedIn feed.",
          "Research → Insight: I learned that people do not spend long reading posts in a fast-moving feed, so the visual identity needs to lead with clarity and relevance. The content had to feel professional, but not rigid.",
          "Decision: I chose a structured layout with strong typography and clean visual hierarchy because the posts needed to communicate value instantly. Based on the need for recognition, I created a repeatable system that made each post feel like part of the same brand story.",
          "Iteration: Before, the assets felt disconnected and inconsistent. After reviewing engagement and readability, I learned that simpler composition and tighter messaging made the content easier to absorb. I reduced visual noise and emphasized the core message in each post.",
          "Final Solution: The final social media system gives Nepsor a recognizable voice across posts, making the brand easier to trust and easier to remember.",
          "Outcome / Learning: The work showed me that social design is not just about aesthetics; it is about helping people understand the brand in a split second. I learned that consistency creates recognition, and recognition builds trust."
        ]
      },
      {
        title: 'ASCOL HACKFEST 2024',
        category: 'Poster',
        image: ascolHackfestImg,
        additionalImages: [ascolHackfestImg1, ascolHackfestImg2, ascolHackfestImg3, ascolHackfestImg4, ascolHackfestImg5, ascolHackfestImg6, ascolHackfestImg7, ascolHackfestImg8],
        details: [
          "Problem: The event needed posters that could quickly communicate energy, relevance, and participation without losing clarity across multiple touchpoints.",
          "Research → Insight: I learned that hackfest audiences respond to strong momentum and a sense of community. The designs needed to feel exciting, but still organized enough to carry event information clearly.",
          "Decision: I chose bold typography, layered layouts, and a vibrant color system because the posters needed to feel electric while staying readable. Based on the event’s audience, I made sure each poster highlighted the main value proposition without becoming visually noisy.",
          "Iteration: Before, the concept risked feeling too generic or too crowded. After refining the hierarchy, I learned that the strongest posters were the ones that let the event message breathe. I simplified the composition and clarified the visual rhythm.",
          "Final Solution: The final poster set creates a consistent event identity that feels energetic, modern, and easy to understand at a glance.",
          "Outcome / Learning: The result was a compelling promotional system that matched the event’s spirit. I learned that excitement in design is strongest when it is paired with clear information and disciplined hierarchy."
        ]
      },
       {
        title: 'ILLUSTRATIONS',
        titleLines: ['ILLUSTRATIONS'],
        category: 'Illustration',
        image: illustrationImg6,
        additionalImages: [illustrationImg1, illustrationImg2, illustrationImg3, illustrationImg4, illustrationImg5, illustrationImg7],
        details: "A collection of illustrations built around emotion, atmosphere, and storytelling. Each piece explores a different mood and visual language, using color, texture, and composition to create a feeling before words ever need to explain it. The goal was to make the work expressive, personal, and flexible enough to sit across editorial, branding, and concept-based storytelling."
      },
    ],
    coder: [
      {
        title: 'VERDANT',
        category: 'Code (React)',
        url: 'https://first-web-verdant.vercel.app/',
        image: verdantFrontImg,
        detailImage: verdantImg,
        details: "Verdant was born during one of the most exciting phases of my learning journey — mastering React. The idea was simple: build something real, something beautiful, and learn by doing. I chose a plant-selling concept because nature and greenery felt like the perfect subject for an earthy, premium UI. The website features a curated product showcase, an interactive hero section, and a clean, responsive layout built from scratch with React components and Tailwind CSS. Every hover effect, every layout decision, every color choice was a deliberate experiment in understanding how modern interfaces behave. While Verdant is live and fully functional online, it is a portfolio-grade practice project — the shelves are beautifully stocked, but no plants are being shipped just yet. It stands as a testament to how far I've grown as a developer: from writing my first JSX to deploying a production-ready website with real design sensibility."
      },
      {
        title: 'DEALSCOUT',
        category: 'Code (Core PHP, SQLite, and Tailwind CSS)',
        image: dealscoutFrontImg,
        additionalImages: [dealscoutImg2, dealscoutImg3],
        details: [
          "Problem: Local shoppers often struggled to compare prices across nearby stores because the information was fragmented and not easy to trust. The challenge was to make price comparisons practical, fast, and useful for real-life buying decisions.",
          "Research → Insight: I learned that people do not just compare product prices — they also consider distance, route cost, and convenience. A better deal is not always the cheapest product if the extra travel makes it less worthwhile.",
          "Decision: I chose a map-first, price-aware interface built around search, comparison, and store context because it directly matched the decision-making process users needed. I structured the system to highlight both product price and route cost so the recommendation felt realistic, not just theoretical.",
          "Iteration: Before, the concept was more product-focused than user-focused. After refining the flow, I learned that users needed clearer comparisons and a more intuitive layout to trust the output. I cleaned up the information hierarchy and made the decision factors easier to understand at a glance.",
          "Final Solution: The final platform lets users search products, compare nearby store prices, view locations on an interactive map, and choose the most practical deal based on both cost and travel effort.",
          "Outcome / Learning: The project gave me a strong understanding of how software can solve real local problems. I learned that useful product design is not only about features — it is about making important decisions clearer, faster, and more confident for the user."
        ]
      },
    ],
  };

const Projects = ({ onViewDetails, onLoadingStart }) => {
  const [activeTab, setActiveTab] = useState('designer');
  const [activeCategory, setActiveCategory] = useState('UI/UX');

  const handleTabChange = useCallback((tab) => {
    if (onLoadingStart) onLoadingStart();
    setActiveTab(tab);
    if (tab === 'designer') {
      setActiveCategory('UI/UX');
    }
  }, [onLoadingStart]);

  const handleCategoryChange = useCallback((cat) => {
    if (onLoadingStart) onLoadingStart();
    setActiveCategory(cat);
  }, [onLoadingStart]);

  const designerCategories = ['UI/UX', 'Branding', 'Packaging', 'Poster','Illustration'];

  const filteredProjects = useMemo(
    () => activeTab === 'designer'
      ? projects.designer.filter(p => p.category === activeCategory)
      : projects[activeTab],
    [activeTab, activeCategory]
  );

  return (
    <section id="works" className="min-h-screen py-24 px-8 md:px-20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] mb-4 dark:text-white/70 text-indigo-950/70 uppercase">
              Selected Works
            </h3>
            <div className="flex items-center gap-8">
              <button
                onClick={() => handleTabChange('designer')}
                className={`text-5xl md:text-6xl font-black tracking-widest leading-none transition-all ${activeTab === 'designer' ? 'dark:text-white text-indigo-950' : 'dark:text-white/20 text-indigo-950/20 hover:dark:text-white/40 hover:text-indigo-950/40'}`}
              >
                DESIGNER
              </button>
              <button
                onClick={() => handleTabChange('coder')}
                className={`text-5xl md:text-6xl font-black tracking-widest leading-none transition-all ${activeTab === 'coder' ? 'dark:text-white text-indigo-950' : 'dark:text-white/20 text-indigo-950/20 hover:dark:text-white/40 hover:text-indigo-950/40'}`}
              >
                CODER
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'designer' && (
          <div className="flex flex-wrap gap-6 mb-12 animate-[fadeIn_0.5s_ease-out]">
            {designerCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs font-black tracking-[0.3em] uppercase pb-2 border-b-2 transition-all ${activeCategory === cat ? 'dark:text-yellow-400 dark:border-yellow-400 text-indigo-950 border-indigo-950' : 'dark:text-white/40 text-indigo-950/40 border-transparent hover:dark:text-white hover:text-indigo-950'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

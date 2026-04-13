import React, { useState } from 'react';
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
import trinathImg from '../assets/trinath.png';
import trinathFrontImg from '../assets/trinathfront.png';
import verdantImg from '../assets/verdant.png';
import verdantFrontImg from '../assets/verdant1.png';
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




const ProjectCard = ({ title, titleLines, category, url, image, detailImage, details, additionalImages, onViewDetails }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-500">
      <div className="aspect-[4/3] w-full bg-black/5 dark:bg-white/10 overflow-hidden relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center dark:text-white/20 text-indigo-950/20 italic group-hover:scale-110 transition-transform duration-700">
            [{title} Image]
          </div>
        )}

        {/* Overlay with two buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
          <button
            onClick={() => onViewDetails({ title, titleLines, category, image, detailImage, details, url, additionalImages })}
            className="w-40 py-3 rounded-full bg-white text-black text-[10px] font-black tracking-widest uppercase hover:bg-yellow-400 transition-colors"
          >
            View Details
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 py-3 rounded-full border border-white/40 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] tracking-[0.3em] uppercase text-yellow-400 mb-2">{category}</p>
        <h4 className="text-xl font-bold tracking-widest text-white">{title}</h4>
      </div>
    </div>
  );
};

const Projects = ({ onViewDetails }) => {
  const [activeTab, setActiveTab] = useState('designer');
  const [activeCategory, setActiveCategory] = useState('UI/UX');

  const designerCategories = ['UI/UX', 'Branding', 'Packaging', 'Poster','Illustration'];

  const projects = {
    designer: [
      {
        title: 'EZ CROSSWORD',
        category: 'UI/UX',
        url: 'https://ez-crossword.vercel.app/',
        image: ezImg,
        additionalImages: [ezImg2, ezImg3],
        details: "The idea for EZ Crossword came from the frustration of complex game interfaces. I wanted to create a minimalist, accessible crossword solver and generator that focused purely on the user experience. The design process involved simplifying the grid interaction and using a soothing lavender palette to reduce eye strain during long gaming sessions. I focused on responsive layout so users could enjoy it across all devices seamlessly."
      },
      {
        title: 'NEPAL MOUNTAIN ASSISTANCE',
        category: 'UI/UX',
        url: 'https://nepalmountainassistance.com/',
        image: mountainImg,
        detailImage: mountainFullImg,
        additionalImages: [mountainImg2, mountainImg3],
        details: "This project was designed for a high-performance trekking agency. The challenge was to balance breathtaking mountain photography with critical booking and service information. I used a premium dark aesthetic with orange accents to convey trust and energy. The design process focused on building a clear hierarchy of information, ensuring that safety details and rescue services were easily accessible while maintaining the scale and beauty of the Himalayas in every frame."
      },
      {
        title: 'NEPSOR',
        category: 'Branding',
        url: 'https://nepsor.com/',
        image: nepsorImg,
        additionalImages: [nepsorImg2, nepsorImg3],
        details: "Nepsor required a brand identity that felt both technological and grounded. I developed a visual system that uses clean typography and a structured layout to represent stability and innovation. The branding process involved deep research into tech aesthetics, resulting in a palette and iconography that communicates professionalism and modern scalability across all digital and print assets."
      },
      {
        title: 'TRINATH ORGANIC HONEY',
        titleLines: ['TRINATH ORGANIC','HONEY'],
        category: 'Packaging',
        image: trinathFrontImg,
        detailImage: trinathImg,
        details: [
          "Trinath Organic Honey needed a brand identity that felt as pure and grounded as the product itself. The design journey began with a deep dive into the source — the hive. I drew inspiration from the raw textures of honeycomb, the golden drip of liquid honey, the gentle buzz of bees on wildflowers, and the lush green of nature untouched by industry.",
          "These four pillars — drop, leaf, hive, and bee — became the building blocks of an iconic logo that holds layers of meaning within a single mark. The primary logo combines a honey drop forming the body of a bee, with a honeycomb hexagon at its core and a leaf crown at the top, representing purity, life, and origin all at once. The color palette is entirely derived from nature: warm amber, rich brown earth, golden yellow, cream white, and a grounding forest green.",
          "For packaging, I designed a wraparound label system that brings the fields to the shelf — chiuri bloom across the label base to showcase its flavour, the logo sits prominently over a clean cream field, and all nutritional and contact information is organized with precision. The jar mockups were crafted in both clear roundedbottle and hexagonal jar formats to accommodate different product lines. Social media templates and branded merchandise like caps and t-shirts were also developed to extend the brand identity beyond just the product — turning Trinath into a lifestyle that people could trust and wear with pride."
        ]
      },
      {
        title: 'NEPSOR SOCIAL MEDIA',
        category: 'Poster',
        image: nepsorSocialMediaImg,
        additionalImages: [nepsorSocialMediaImg1, nepsorSocialMediaImg2, nepsorSocialMediaImg3, nepsorSocialMediaImg4, nepsorSocialMediaImg5, nepsorSocialMediaImg6],
        details: "Nepsor linkdin profile post"
      },
      {
        title: 'ASCOL HACKFEST 2024',
        category: 'Poster',
        details: "Ascol Hackfest 2024 posters",
        image: ascolHackfestImg,
        additionalImages: [ascolHackfestImg1, ascolHackfestImg2, ascolHackfestImg3, ascolHackfestImg4, ascolHackfestImg5, ascolHackfestImg6, ascolHackfestImg7, ascolHackfestImg8],
        details: "For the Ascol Hackfest 2024, I designed a series of posters that captured the spirit of innovation and collaboration that defines the event. The design process involved creating a visual language that was both futuristic and approachable, using bold typography, dynamic layouts, and a vibrant color palette to evoke excitement and creativity. Each poster was crafted to highlight different aspects of the hackfest, from keynote speakers to workshop sessions, while maintaining a cohesive aesthetic across all materials. The result was a set of eye-catching posters that not only promoted the event but also embodied the energy and passion of the tech community coming together to innovate."
      },
       {
        title: 'ILLUSTRATIONS',
        titleLines: ['ILLUSTRATIONS'],
        category: 'Illustration',
        image: illustrationImg6,
        additionalImages: [illustrationImg1, illustrationImg2, illustrationImg3, illustrationImg4, illustrationImg5, illustrationImg7],
        details: [
          "This collection of illustrations represents a personal exploration into the world of digital art and storytelling. Each piece was created with the intention of evoking emotion and sparking imagination, using a blend of vibrant colors, dynamic compositions, and intricate details.",
          "The themes range from whimsical fantasy to introspective portraits, showcasing a diverse range of styles and techniques. This body of work is a testament to my passion for visual expression and my commitment to pushing the boundaries of creativity in every stroke."]
      },
    ],
    coder: [
      {
        title: 'VERDANT',
        category: 'Code (React)',
        url: 'https://verdantplant.onrender.com/',
        image: verdantFrontImg,
        detailImage: verdantImg,
        details: "Verdant was born during one of the most exciting phases of my learning journey — mastering React. The idea was simple: build something real, something beautiful, and learn by doing. I chose a plant-selling concept because nature and greenery felt like the perfect subject for an earthy, premium UI. The website features a curated product showcase, an interactive hero section, and a clean, responsive layout built from scratch with React components and Tailwind CSS. Every hover effect, every layout decision, every color choice was a deliberate experiment in understanding how modern interfaces behave. While Verdant is live and fully functional online, it is a portfolio-grade practice project — the shelves are beautifully stocked, but no plants are being shipped just yet. It stands as a testament to how far I've grown as a developer: from writing my first JSX to deploying a production-ready website with real design sensibility."
      },
      { title: 'DEALSCOUT', category: 'Web App', url: '#', details: "Coming soon." },
    ]
  };

  const filteredProjects = activeTab === 'designer'
    ? projects.designer.filter(p => p.category === activeCategory)
    : projects[activeTab];

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
                onClick={() => { setActiveTab('designer'); setActiveCategory('UI/UX'); }}
                className={`text-5xl md:text-6xl font-black tracking-widest leading-none transition-all ${activeTab === 'designer' ? 'dark:text-white text-indigo-950' : 'dark:text-white/20 text-indigo-950/20 hover:dark:text-white/40 hover:text-indigo-950/40'}`}
              >
                DESIGNER
              </button>
              <button
                onClick={() => { setActiveTab('coder'); }}
                className={`text-5xl md:text-6xl font-black tracking-widest leading-none transition-all ${activeTab === 'coder' ? 'dark:text-white text-indigo-950' : 'dark:text-white/20 text-indigo-950/20 hover:dark:text-white/40 hover:text-indigo-950/40'}`}
              >
                CODER
              </button>
            </div>
          </div>
        </div>

        {/* Sub-categories for Designer */}
        {activeTab === 'designer' && (
          <div className="flex flex-wrap gap-6 mb-12 animate-[fadeIn_0.5s_ease-out]">
            {designerCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

import React, { useEffect, useRef, useState } from 'react';

const paintingImage = '/assets/painting.webp';
const sketchingImage = '/assets/sketching.webp';
const photographyImage = '/assets/photography.webp';
const natureImage = '/assets/nature%20walk.webp';

const journalPages = [
  {
    number: '01',
    date: 'A little colour',
    title: 'Painting as a hobby',
    type: 'The artist in me',
    copy: 'Painting is where I get to be creative without worrying too much about whether everything has to be perfect. I enjoy playing with colors, trying different ideas, and watching something slowly come together on a blank canvas. It gives me a different kind of creative freedom from digital design.',
    accent: '#e4a36f',
    image: paintingImage,
  },
  {
    number: '02',
    date: 'Found in the margins',
    title: 'Sketching little things',
    type: 'A page in progress',
    copy: 'I’ve always enjoyed putting ideas down on paper before they become anything polished. Sketching lets me explore shapes, expressions, objects, and random ideas that come into my head. Sometimes it’s just a simple drawing, and sometimes it becomes the starting point for a bigger creative idea.',
    accent: '#d77c68',
    image: sketchingImage,
  },
  {
    number: '03',
    date: 'Keeping the light',
    title: 'Photography as a pause',
    type: 'A visual diary',
    copy: 'Photography is one of the ways I like to slow down and notice things. I enjoy capturing little details, interesting compositions, changing light, and moments that might otherwise go unnoticed. I think it has also shaped the way I look at design always paying attention to balance, colors, mood, and the story a visual can tell.',
    accent: '#7f9d82',
    image: photographyImage,
  },
  {
    number: '04',
    date: 'Out in the open',
    title: 'Nature walks',
    type: 'A change of pace',
    copy: 'I enjoy taking nature walks whenever I want to step away from screens and give my mind some space. I like noticing the little things along the way — the colors, textures, sunlight, trees, sky, and the quietness around me. It’s one of my favorite ways to refresh my mind and come back with new ideas and inspiration.',
    accent: '#7e8faa',
    image: natureImage,
  },
];

const BeyondPortfolio = ({ onBack }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [flipTarget, setFlipTarget] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipId, setFlipId] = useState(0);
  const flipTimerRef = useRef(null);
  const page = journalPages[pageIndex];
  const adjacentIndex = direction === 'prev'
    ? Math.max(0, pageIndex - 1)
    : Math.min(journalPages.length - 1, pageIndex + 1);
  const readyPage = flipTarget === null ? journalPages[adjacentIndex] : journalPages[flipTarget];
  const eventPage = flipTarget === null ? page : journalPages[flipTarget];

  useEffect(() => {
    journalPages.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = setInterval(() => {
      if (isFlipping) return;
      setDirection('next');
      setFlipTarget((pageIndex + 1) % journalPages.length);
      setFlipId((currentId) => currentId + 1);
      setIsFlipping(true);
      clearTimeout(flipTimerRef.current);
      flipTimerRef.current = setTimeout(() => {
        setPageIndex((pageIndex + 1) % journalPages.length);
        setFlipTarget(null);
        setIsFlipping(false);
      }, 1700);
    }, 5200);

    return () => clearInterval(timer);
  }, [isFlipping, pageIndex]);

  useEffect(() => () => clearTimeout(flipTimerRef.current), []);

  const turnPage = (nextIndex, nextDirection) => {
    if (isFlipping || nextIndex === pageIndex) return;
    setDirection(nextDirection);
    setFlipTarget(nextIndex);
    setFlipId((currentId) => currentId + 1);
    setIsFlipping(true);
    clearTimeout(flipTimerRef.current);
    flipTimerRef.current = setTimeout(() => {
      setPageIndex(nextIndex);
      setFlipTarget(null);
      setIsFlipping(false);
    }, 1700);
  };

  const finishFlip = (event) => {
    if (event.animationName !== 'bookPageFlipNext' && event.animationName !== 'bookPageFlipPrev') return;
    if (flipTarget === null) return;
    clearTimeout(flipTimerRef.current);
    setPageIndex(flipTarget);
    setFlipTarget(null);
    setIsFlipping(false);
  };

  return (
    <main className="off-clock-page min-h-screen w-full px-5 pb-24 pt-28 font-display md:px-12">
      <div className="journal-viewer mx-auto max-w-6xl">
        <button type="button" onClick={onBack} className="button-hover back-journal-link mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] opacity-70"><span className="h-px w-9 bg-current" />Back to Portfolio</button>
        <header className="viewer-heading"><h1>Me, The Human</h1></header>

        <section className="journal-layout" aria-label="Off the clock journal">
          <div className="journal-stage">
            <div className={`journal-book direction-${direction}`}>
              <img src={readyPage.image} alt="" aria-hidden="true" className="journal-ready-page" />
              <div key={flipId} className={`journal-sheet direction-${direction} ${isFlipping ? 'is-flipping' : ''}`} onAnimationEnd={finishFlip}>
                <img src={page.image} alt={`${page.title} journal image`} className="journal-page-image" />
              </div>
            </div>
            <div className="journal-controls">
              <button className="button-hover" type="button" onClick={() => turnPage(Math.max(0, pageIndex - 1), 'prev')} disabled={pageIndex === 0} aria-label="Previous journal page">‹</button>
              <button className="button-hover" type="button" onClick={() => turnPage(Math.min(journalPages.length - 1, pageIndex + 1), 'next')} disabled={pageIndex === journalPages.length - 1} aria-label="Next journal page">›</button>
            </div>
          </div>

          <aside className="journal-event" key={eventPage.number}><h2>{eventPage.title}</h2><p className="journal-event-copy">{eventPage.copy}</p></aside>
        </section>
      </div>
    </main>
  );
};

export default BeyondPortfolio;

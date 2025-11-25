
import React, { useState, useRef } from 'react';
import type { StoryChapter } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon, { IconName } from './Icon';

interface StoryChapterViewerProps {
  chapter: StoryChapter;
  allChapters: StoryChapter[];
  onBack: () => void;
  onSelectChapter: (chapter: StoryChapter) => void;
  onNext: () => void;
  onPrev: () => void;
}

const StoryChapterViewer: React.FC<StoryChapterViewerProps> = ({ chapter, allChapters, onBack, onSelectChapter, onNext, onPrev }) => {
  const { t } = useLanguage();
  const currentIndex = allChapters.findIndex(c => c.id === chapter.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allChapters.length - 1;

  // Separation Logic for Scientific Appendix
  const separator = "________________________________________";
  const contentParts = chapter.fullContent.split(separator);
  const storyPart = contentParts[0];
  const appendixPart = contentParts.length > 1 ? contentParts[1] : null;

  const paragraphs = storyPart.split('\n').filter(p => p.trim() !== '');

  // State for Full Screen Image Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Ref for scrolling the comic strip
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { clientWidth } = scrollContainerRef.current;
        const scrollAmount = clientWidth * 0.75; // Scroll 75% of view
        // In RTL context:
        // Scrolling negative X moves visually to the LEFT (Next items in reading order usually)
        // Scrolling positive X moves visually to the RIGHT
        const sign = direction === 'left' ? -1 : 1;
        
        scrollContainerRef.current.scrollBy({
            left: sign * scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <button 
        onClick={onBack} 
        className="group relative overflow-hidden text-white font-bold py-2 px-6 rounded-full mb-8 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </span>
        <span className="relative z-10">{t('backToArchive')}</span>
      </button>
      
      <article className="bg-surface/50 backdrop-blur-lg border border-border-light p-6 md:p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div 
              style={{backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 100%)'}}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0"
            >
                <Icon name={`chapter-${chapter.id}` as IconName} className="h-8 w-8 sm:h-10 sm:h-10" />
            </div>
            <div className="flex-grow">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">{chapter.title}</h1>
            </div>
        </div>

        {/* Comic Images Renderer - Horizontal Scroll with Navigation Arrows */}
        {chapter.images && chapter.images.length > 0 && (
             <div className="relative group/slider mb-12">
                
                {/* Right Arrow (Visual Right - Previous in RTL context mostly, or just scroll right) */}
                <button 
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-surface/80 backdrop-blur-md border border-border-light text-teal p-3 rounded-full shadow-xl hover:bg-teal hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 translate-x-2 group-hover/slider:translate-x-0 hidden md:flex"
                    aria-label="Scroll Right"
                >
                     <Icon name="arrow-right" className="h-6 w-6" />
                </button>

                {/* Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex flex-nowrap gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-1 scroll-smooth no-scrollbar" 
                >
                    {chapter.images.map((imgSrc, index) => (
                        <button 
                            key={index} 
                            onClick={() => setSelectedImage(imgSrc)}
                            className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] snap-center rounded-xl overflow-hidden border border-border-light shadow-lg transition-transform duration-300 hover:scale-[1.02] relative group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-teal"
                        >
                            <img 
                                src={imgSrc} 
                                alt={`Panel ${index + 1}`} 
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            
                            {/* Ordered Number Badge - High Contrast */}
                            <div className="absolute top-3 right-3 z-20 bg-black text-white text-lg font-black w-8 h-8 flex items-center justify-center rounded-full border-2 border-white shadow-lg">
                                {index + 1}
                            </div>

                            {/* Hover Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Left Arrow (Visual Left - Next in RTL) */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-surface/80 backdrop-blur-md border border-border-light text-teal p-3 rounded-full shadow-xl hover:bg-teal hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 -translate-x-2 group-hover/slider:translate-x-0 hidden md:flex"
                    aria-label="Scroll Left"
                >
                     <Icon name="arrow-left" className="h-6 w-6" />
                </button>

             </div>
        )}

         {(!chapter.images || chapter.images.length === 0) && (
            <div className="mb-8 text-center">
                <a 
                href="https://www.facebook.com/offlinemeegypt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">{t('watchIllustratedStory')}</span>
                    <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </span>
                </a>
            </div>
        )}
        
        {/* Main Story Text Content */}
        <div className="story-prose text-text-dark/90">
          {paragraphs.map((paragraph, index) => (
             <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>

        {/* Scientific Appendix Card (Rendered if appendixPart exists) */}
        {appendixPart && (
            <div className="mt-12 bg-surface border-t-4 border-teal rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-teal/5 pointer-events-none"></div>
                
                {/* Parse Appendix Content */}
                {appendixPart.split('\n').filter(p => p.trim() !== '').map((line, idx) => {
                    const trimmedLine = line.trim();
                    
                    // Title Detection
                    if (trimmedLine.includes('الملحق العلمي')) {
                        return (
                             <h3 key={idx} className="text-xl md:text-2xl font-bold text-teal mb-6 flex items-center gap-3 relative z-10 border-b border-teal/20 pb-3">
                                <Icon name="insight-academic" className="w-6 h-6 md:w-8 md:h-8" />
                                {trimmedLine}
                            </h3>
                        );
                    }
                    
                    // Bullet Point Detection
                    if (trimmedLine.startsWith('•')) {
                         // Split term (English/Arabic) and definition if possible, purely styling
                         const colonIndex = trimmedLine.indexOf(':');
                         if (colonIndex !== -1) {
                             const term = trimmedLine.substring(1, colonIndex + 1); // Includes bullet and colon
                             const def = trimmedLine.substring(colonIndex + 1);
                             return (
                                 <div key={idx} className="mb-4 relative z-10 flex items-start gap-2">
                                     <span className="text-teal text-xl leading-none mt-1">•</span>
                                     <p className="text-base md:text-lg leading-relaxed text-text-light">
                                        <span className="font-bold text-white">{term.substring(1)}</span>
                                        {def}
                                     </p>
                                 </div>
                             )
                         }
                        return (
                             <div key={idx} className="mb-4 relative z-10 flex items-start gap-2">
                                 <span className="text-teal text-xl leading-none mt-1">•</span>
                                 <p className="text-base md:text-lg leading-relaxed text-text-light">
                                    {trimmedLine.substring(1)}
                                 </p>
                             </div>
                        );
                    }
                    
                    // Normal paragraph inside appendix
                    return <p key={idx} className="text-base md:text-lg text-text-light mb-4 leading-relaxed relative z-10">{trimmedLine}</p>
                })}
            </div>
        )}

      </article>

      {/* Navigation Bar */}
      <div className="mt-12 flex flex-col items-center">
         <h3 className="text-sm md:text-base font-bold text-text-light uppercase tracking-wider mb-4">{t('allChapters')}</h3>
         
         <div className="flex items-center justify-center gap-2 sm:gap-4 bg-surface border border-border-light rounded-full p-2 sm:p-3 shadow-xl w-fit max-w-full overflow-x-auto no-scrollbar">
            
            <button 
                onClick={onPrev} 
                disabled={!hasPrev}
                className="p-2 sm:p-3 rounded-full bg-cream hover:bg-border-light text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                title={t('prevChapter')}
            >
                <Icon name="arrow-right" className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
                {allChapters.map(c => {
                    const isActive = c.id === chapter.id;
                    return (
                        <button 
                            key={c.id}
                            onClick={() => onSelectChapter(c)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex-shrink-0 ${
                                isActive 
                                ? 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white shadow-lg scale-110 ring-2 ring-offset-2 ring-offset-surface ring-blue-500/50' 
                                : 'text-text-light hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {c.id}
                        </button>
                    );
                })}
            </div>

            <button 
                onClick={onNext} 
                disabled={!hasNext}
                className="p-2 sm:p-3 rounded-full bg-cream hover:bg-border-light text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                title={t('nextChapter')}
            >
                <Icon name="arrow-left" className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

         </div>
      </div>

      {/* Full Screen Image Modal - Top Aligned, Full Width */}
      {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black flex items-start justify-center animate-fade-in overflow-y-auto"
            onClick={() => setSelectedImage(null)} 
          >
              {/* Close Button (X) */}
              <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                  className="fixed top-4 right-4 z-[110] bg-black/50 hover:bg-red-600 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-colors border-2 border-white/50 shadow-lg"
                  aria-label="Close"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>

              <div 
                className="relative w-full min-h-full flex items-start justify-center pt-0 md:pt-4 pb-10"
                onClick={(e) => e.stopPropagation()}
              >
                  <img 
                      src={selectedImage} 
                      alt="Full Screen Comic Panel" 
                      className="w-full max-w-6xl h-auto object-contain shadow-2xl" 
                  />
              </div>
          </div>
      )}

    </div>
  );
};

export default StoryChapterViewer;

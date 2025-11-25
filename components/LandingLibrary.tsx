
import React, { useRef, useState, useEffect } from 'react';
import type { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface LandingNavGridProps {
    navigateTo: (section: Section) => void;
}

const NavCard: React.FC<{title: string, description: string, onClick: () => void}> = ({ title, description, onClick }) => (
    <button 
        onClick={onClick}
        className="w-48 sm:w-72 h-24 sm:h-32 flex-shrink-0 bg-surface border border-border-light p-3 sm:p-4 rounded-lg text-center group hover:bg-border-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col items-center justify-center"
    >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-teal group-hover:text-white leading-tight">{title}</h3>
        <p className="text-text-light mt-1 text-xs sm:text-sm hidden sm:block">{description}</p>
    </button>
);

const LandingNavGrid: React.FC<LandingNavGridProps> = ({ navigateTo }) => {
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showArrow, setShowArrow] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            // Logic for RTL end detection
            if (Math.abs(scrollLeft) + clientWidth >= scrollWidth - 10 || scrollWidth <= clientWidth) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    return (
        <div className="py-16 mt-12">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <Icon name="grid" className="h-16 w-16 md:h-20 md:w-20 text-teal" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('exploreTitle')}</h2>
            </div>
            <div className="max-w-7xl mx-auto relative">
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex flex-nowrap gap-6 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth"
                >
                    <NavCard 
                        title={t('navCardInsightsTitle')} 
                        description={t('navCardInsightsDesc')}
                        onClick={() => navigateTo('insights')}
                    />
                     <NavCard 
                        title={t('navCardCharactersTitle')} 
                        description={t('navCardCharactersDesc')}
                        onClick={() => navigateTo('story')}
                    />
                     <NavCard 
                        title={t('navCardLibraryTitle')} 
                        description={t('navCardLibraryDesc')}
                        onClick={() => navigateTo('explore')}
                    />
                    <NavCard 
                        title={t('navCardInteractiveTitle')} 
                        description={t('navCardInteractiveDesc')}
                        onClick={() => navigateTo('interactive')}
                    />
                </div>
                {/* Scroll indicator for mobile */}
                <div 
                    className={`absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-start z-10 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="animate-bounce-horizontal-rtl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingNavGrid;

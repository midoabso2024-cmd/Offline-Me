
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { CharacterProfile } from '../types';
import Icon, { IconName } from './Icon';

const CharacterProfiles: React.FC = () => {
    const { t } = useLanguage();
    const rawCharacters = t('characters');
    const characters: CharacterProfile[] = Array.isArray(rawCharacters) ? rawCharacters : [];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showArrow, setShowArrow] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
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
    }, [characters]);

    // The source image containing all characters
    const characterGroupImage = "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/583681410_122099688531122002_990412484135725279_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KYBRj83AWC0Q7kNvwGg5E3e&_nc_oc=AdnZZZx2B4_-Pxgwtyg3PhLbc-npw8cROkRpHQy0W2a8xmoIUleuQ9DgeGLuS3oruCs&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=FQV7udguVyCthBdeZvavgA&oh=00_Afh1HfImrAw5CwEsD1Vxz3A0Y-XJCmS_cApKBxOSb6m_RQ&oe=6923FB80";

    // Function to determine crop position for each character
    // Note: These percentages focus on specific parts of the group photo
    const getCharacterImageStyle = (id: string) => {
        const baseStyle = {
            backgroundImage: `url('${characterGroupImage}')`,
            backgroundSize: '400%', // Zoom in significantly to isolate faces
            backgroundRepeat: 'no-repeat',
        };

        switch (id) {
            case 'farida': // Protagonist (Likely Center/Center-Left)
                return { ...baseStyle, backgroundPosition: '48% 25%' }; 
            case 'father': // Father (Likely Left side)
                return { ...baseStyle, backgroundPosition: '8% 20%' };
            case 'mother': // Mother (Likely Right side)
                return { ...baseStyle, backgroundPosition: '90% 25%' };
            case 'omar':   // Brother (Likely Center-Right or lower)
                return { ...baseStyle, backgroundPosition: '68% 30%' };
            default:
                return baseStyle;
        }
    };

    if (characters.length === 0) return null;

    return (
        <div className="py-8 md:py-12">
             <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-text-dark uppercase tracking-wider">{t('characterProfilesTitle')}</h3>
            </div>
            <div className="max-w-7xl mx-auto relative px-4">
                
                {/* 
                    Layout Strategy:
                    - Mobile (< sm): Flex container with overflow-x-auto (Horizontal Scroll)
                    - Desktop (>= sm): Grid layout (Centered, Filling screen)
                */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 no-scrollbar scroll-smooth items-stretch justify-center"
                >
                    {characters.map((char) => (
                        <div 
                            key={char.id} 
                            className="w-48 sm:w-full flex-shrink-0 sm:flex-shrink bg-surface border border-border-light p-4 md:p-6 rounded-xl text-center group transition-all duration-300 transform hover:-translate-y-2 hover:border-teal/50 shadow-lg hover:shadow-2xl flex flex-col items-center justify-start min-h-[16rem]"
                        >
                            {/* Character Avatar Circle */}
                            <div 
                                className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-cream border-2 border-teal/30 group-hover:border-teal group-hover:scale-110 transition-all duration-300 overflow-hidden shadow-md"
                            >
                                {/* Using Background Image with Crop instead of Icon */}
                                <div 
                                    className="w-full h-full"
                                    style={getCharacterImageStyle(char.id)}
                                    role="img"
                                    aria-label={char.name}
                                />
                            </div>
                            
                            <h4 className="text-sm md:text-xl font-bold text-text-dark truncate w-full mb-1">{char.name}</h4>
                            <span className="text-[10px] md:text-sm text-text-light mb-3 block opacity-80">({t('age', { age: char.age })})</span>
                            
                            <p className="font-bold text-[10px] md:text-sm mb-3 text-teal uppercase tracking-wide line-clamp-2 h-8 flex items-center justify-center">{char.role}</p>
                            
                            <p className="text-text-light text-[10px] md:text-sm leading-relaxed">{char.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Arrow (Hidden on SM and up) */}
                <div 
                    className={`absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-start z-10 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="animate-bounce-horizontal-rtl ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterProfiles;

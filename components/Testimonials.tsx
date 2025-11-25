
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface Testimonial {
    quote: string;
    author: string;
}

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const rawTestimonials = t('testimonials');
    const testimonials: Testimonial[] = Array.isArray(rawTestimonials) ? rawTestimonials : [];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    
    // State for scroll indicators
    const [showStartArrow, setShowStartArrow] = useState(false); // Desktop Left (Next in RTL)
    const [showEndArrow, setShowEndArrow] = useState(false);   // Desktop Right (Prev in RTL)
    const [showMobileArrow, setShowMobileArrow] = useState(true); // Mobile indicator

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            
            const isScrollable = scrollWidth > clientWidth;
            const scrolledDistance = Math.abs(scrollLeft);
            const maxScroll = scrollWidth - clientWidth;

            // Mobile Indicator Logic
            if (isScrollable && scrolledDistance < maxScroll - 10) {
                setShowMobileArrow(true);
            } else {
                setShowMobileArrow(false);
            }

            // Desktop Arrows Logic
            setShowStartArrow(isScrollable && scrolledDistance < maxScroll - 10);
            setShowEndArrow(isScrollable && scrolledDistance > 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approx one card width + gap
            // In RTL: 
            // Scrolling negative X moves visually LEFT (to see next items)
            // Scrolling positive X moves visually RIGHT (to see prev items)
            const sign = direction === 'left' ? -1 : 1;
            
            scrollContainerRef.current.scrollBy({
                left: sign * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [testimonials]);

    if (testimonials.length === 0) return null;

    return (
        <div className="py-16">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <Icon name="user" className="h-16 w-16 md:h-20 md:w-20 text-teal" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('testimonialsTitle')}</h2>
            </div>
            
            <div className="max-w-[90rem] mx-auto relative px-4 group/container">
                
                {/* Desktop Scroll Button: Right (Previous) */}
                <button 
                    onClick={() => scroll('right')}
                    className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-surface/80 backdrop-blur-md border border-border-light text-teal p-3 rounded-full shadow-xl hover:bg-teal hover:text-white transition-all duration-300 ${showEndArrow ? 'opacity-100 translate-x-1/2' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Right"
                >
                     <Icon name="arrow-right" className="h-6 w-6" />
                </button>

                {/* Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex flex-nowrap gap-6 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth"
                >
                    {testimonials.map((testimonial, index) => {
                        // Logic to split Name and Role based on " - " separator
                        const separatorIndex = testimonial.author.indexOf(' - ');
                        let name = testimonial.author;
                        let role = '';

                        if (separatorIndex !== -1) {
                            name = testimonial.author.substring(0, separatorIndex);
                            role = testimonial.author.substring(separatorIndex + 3);
                        }

                        return (
                            <div 
                                key={index} 
                                className="w-72 md:w-80 h-auto min-h-[18rem] flex-shrink-0 bg-surface border border-border-light p-6 rounded-2xl text-center group transition-all duration-300 transform hover:-translate-y-1 hover:border-teal/50 shadow-lg flex flex-col items-center justify-center"
                            >
                                <Icon name="user" className="h-6 w-6 md:h-8 md:w-8 mb-3 text-teal flex-shrink-0" />
                                <p className="text-text-light italic text-xs md:text-sm flex-grow overflow-y-auto max-h-40 no-scrollbar mb-4 leading-relaxed">"{testimonial.quote}"</p>
                                
                                {/* Author Section: Name on one line, Role on the next */}
                                <div className="mt-auto pt-3 border-t border-border-light/20 w-full flex flex-col items-center justify-center">
                                    <p className="font-bold text-text-dark text-sm md:text-base leading-tight mb-1">{name}</p>
                                    {role && <p className="text-teal text-xs md:text-xs font-medium leading-tight opacity-90">{role}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop Scroll Button: Left (Next) */}
                <button 
                    onClick={() => scroll('left')}
                    className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-surface/80 backdrop-blur-md border border-border-light text-teal p-3 rounded-full shadow-xl hover:bg-teal hover:text-white transition-all duration-300 ${showStartArrow ? 'opacity-100 -translate-x-1/2' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Left"
                >
                     <Icon name="arrow-left" className="h-6 w-6" />
                </button>

                {/* Mobile Scroll Indicator (Animated Arrow) */}
                <div 
                    className={`absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-start z-10 transition-opacity duration-300 ${showMobileArrow ? 'opacity-100' : 'opacity-0'}`}
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

export default Testimonials;

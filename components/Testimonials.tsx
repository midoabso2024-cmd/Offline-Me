
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface Testimonial {
    quote: string;
    author: string;
}

type CardVariant = 'blue' | 'purple' | 'orange' | 'green' | 'pink';

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

    // Color Logic
    const gradients: Record<CardVariant, string> = {
        blue: 'from-[#3b82f6] to-[#06b6d4]',
        purple: 'from-[#8b5cf6] to-[#d946ef]',
        orange: 'from-[#f97316] to-[#ef4444]',
        green: 'from-[#10b981] to-[#14b8a6]',
        pink: 'from-[#ec4899] to-[#f43f5e]'
    };

    const shadowColors: Record<CardVariant, string> = {
        blue: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]',
        purple: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]',
        orange: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]',
        green: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]',
        pink: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]'
    };

    const variants: CardVariant[] = ['blue', 'purple', 'orange', 'green', 'pink'];


    if (testimonials.length === 0) return null;

    return (
        <div className="py-8 md:py-12 relative">
            <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Icon name="user" className="h-8 w-8 md:h-10 md:w-10 text-teal" />
                    <h2 className="text-xl md:text-2xl font-bold text-text-dark uppercase tracking-wider">{t('testimonialsTitle')}</h2>
                </div>
                <p className="text-sm md:text-base text-text-light">{t('testimonialsSubtitle_nav')}</p>
            </div>
            
            <div className="max-w-[90rem] mx-auto relative px-4 group/container">
                
                {/* Desktop Scroll Button: Right (Previous) */}
                <button 
                    onClick={() => scroll('right')}
                    className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-surface border-2 border-teal text-teal p-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-teal hover:text-white transition-all duration-300 hover:scale-110 ${showEndArrow ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Right"
                >
                     <Icon name="arrow-right" className="h-6 w-6 md:h-8 md:w-8" />
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

                        // Cycle through variants
                        const variant = variants[index % variants.length];
                        const gradientClass = gradients[variant];
                        const shadowClass = shadowColors[variant];

                        return (
                            <div 
                                key={index} 
                                className={`relative w-72 md:w-80 h-auto min-h-[18rem] flex-shrink-0 bg-surface border border-border-light p-6 rounded-2xl text-center group transition-all duration-300 transform hover:-translate-y-2 ${shadowClass} shadow-lg flex flex-col items-center justify-center overflow-hidden`}
                            >
                                {/* Animated Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out`}></div>
                                
                                {/* Content - Relative z-10 to stay on top of gradient */}
                                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                                    <div className="text-teal group-hover:text-white transition-colors duration-300">
                                        <Icon name="user" className="h-6 w-6 md:h-8 md:w-8 mb-3 flex-shrink-0" />
                                    </div>
                                    <p className="text-text-light group-hover:text-white/95 transition-colors duration-300 italic text-xs md:text-sm flex-grow overflow-y-auto max-h-40 no-scrollbar mb-4 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                    
                                    {/* Author Section */}
                                    <div className="mt-auto pt-3 border-t border-border-light/20 group-hover:border-white/20 w-full flex flex-col items-center justify-center">
                                        <p className="font-bold text-text-dark group-hover:text-white transition-colors duration-300 text-sm md:text-base leading-tight mb-1">{name}</p>
                                        {role && <p className="text-teal group-hover:text-white/80 transition-colors duration-300 text-xs md:text-xs font-medium leading-tight opacity-90">{role}</p>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop Scroll Button: Left (Next) */}
                <button 
                    onClick={() => scroll('left')}
                    className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-surface border-2 border-teal text-teal p-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-teal hover:text-white transition-all duration-300 hover:scale-110 ${showStartArrow ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Left"
                >
                     <Icon name="arrow-left" className="h-6 w-6 md:h-8 md:w-8" />
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

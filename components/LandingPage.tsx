
import React, { useRef, useEffect, useState } from 'react';
import type { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import LandingNavGrid from './LandingLibrary';
import Chatbot from './Chatbot';
import ImageStudio from './ImageStudio';
import Icon, { IconName } from './Icon';
import InteractiveZone from './InteractiveZone';
import useOnScreen from '../hooks/useOnScreen';
import Testimonials from './Testimonials';

interface LandingPageProps {
  navigateTo: (section: Section) => void;
  scrollToSection?: 'quiz' | 'chatbot' | 'studio' | 'about' | 'explore' | 'testimonials';
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', sectionRef }) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = sectionRef || internalRef;
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};


const FeatureCard: React.FC<{
    iconName: IconName;
    title: string;
    subtitle: string;
    onClick: () => void;
    delay?: string;
}> = ({ iconName, title, subtitle, onClick, delay = '0ms' }) => (
    <div 
        className="flex-shrink-0 animate-entrance opacity-0" 
        style={{ animationDelay: delay }}
    >
         <button
            onClick={onClick}
            className="w-48 h-16 sm:w-64 sm:h-24 bg-surface border border-border-light px-4 py-2 rounded-xl text-start group transition-all duration-300 transform hover:-translate-y-1 hover:border-teal/50 shadow-lg flex flex-row items-center justify-start gap-4 h-full overflow-hidden"
        >
            <div className="flex-shrink-0 -mt-2">
                <Icon name={iconName} className="h-5 w-5 md:h-7 md:w-7 text-teal" />
            </div>
            <div className="flex flex-col min-w-0">
                <h3 className="text-[10px] md:text-sm font-bold text-text-dark leading-tight mb-0.5 truncate">{title}</h3>
                <p className="text-[9px] md:text-xs text-text-light line-clamp-2 leading-tight opacity-80">{subtitle}</p>
            </div>
        </button>
    </div>
);

const SectionSeparator: React.FC = () => (
    <div className="max-w-2xl mx-auto">
        <hr className="border-t border-border-light opacity-50" />
    </div>
);


const LandingPage: React.FC<LandingPageProps> = ({ navigateTo, scrollToSection }) => {
  const { t } = useLanguage();
  const quizRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const checkScroll = () => {
      if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          if (Math.abs(scrollLeft) + clientWidth >= scrollWidth - 10) {
              setShowArrow(false);
          } else {
              setShowArrow(true);
          }
          
          if (scrollWidth <= clientWidth) {
             setShowArrow(false);
          }
      }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (scrollToSection === 'quiz') scrollToRef(quizRef);
      if (scrollToSection === 'chatbot') scrollToRef(chatbotRef);
      if (scrollToSection === 'studio') scrollToRef(studioRef);
      if (scrollToSection === 'about') scrollToRef(aboutRef);
      if (scrollToSection === 'explore') scrollToRef(exploreRef);
      if (scrollToSection === 'testimonials') scrollToRef(testimonialsRef);
    }, 100);
  }, [scrollToSection]);


  const quizSubtitle = t('quizSectionTitle').includes(':') 
    ? t('quizSectionTitle').split(': ')[1] 
    : t('quizSectionSubtitle');

  return (
    <>
      <div className="min-h-[85vh] flex flex-col relative overflow-hidden pb-4 -mt-8">
        
        {/* Top Hero Section Wrapped in a Card */}
        <div className="w-full px-2 sm:px-4 pt-0 flex items-start justify-center">
             <div 
                className="relative w-full max-w-[1600px] mx-auto overflow-hidden flex flex-col items-center justify-center"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)'
                }}
             >
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/587175977_25127622063540306_687707717227052863_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbPyw8WP7EZOEEsgTBp4Q7mTaPasrNODOZNo9qys04M2jml1ZpjgNUL-_r__2fvr3hTBdEycN2zWLIG9veJjDU&_nc_ohc=syCaHGbMpmcQ7kNvwFkY2Ph&_nc_oc=Adk63QhGnsAA1m1FjANnBxDruBtCzwrLrKuA-A8s8KKPSKe7NviMRddvqrYYb8SpKfQ&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=JXo7PiFgIJlqBoEl-4UcJQ&oh=00_Afgpu85_qT_SYu6btmVaYDhdPt1bnuQbO2UU2lwZ1rOmOQ&oe=692B4878"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-[#131314]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center w-full px-4 pb-20 pt-16 sm:pb-32 sm:pt-24 min-h-[600px]">
                  
                  <div className="relative mb-3 sm:mb-4 group z-20 p-4 animate-entrance opacity-0" style={{ animationDelay: '0ms' }}>
                     <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-40 animate-pulse"></div>
                     <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]"
                        >
                            <defs>
                                <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#60a5fa" /> 
                                    <stop offset="100%" stopColor="#a78bfa" /> 
                                </linearGradient>
                            </defs>
                            <rect x="6" y="3" width="12" height="18" rx="2" ry="2" stroke="url(#logoGradient)" strokeWidth="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" stroke="url(#logoGradient)" strokeWidth="2.5" />
                            <line x1="21" y1="3" x2="3" y2="21" stroke="#ef4444" strokeWidth="2.5" className="drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]" />
                        </svg>
                     </div>
                  </div>

                  <div className="space-y-2 mb-6 sm:mb-8 animate-entrance opacity-0" style={{ animationDelay: '300ms' }}>
                      <h3 className="text-xl sm:text-5xl font-bold text-white leading-tight tracking-wide drop-shadow-2xl whitespace-nowrap">
                          {t('tagline')}
                      </h3>
                      <p className="text-[10px] sm:text-sm text-gray-200 leading-relaxed whitespace-nowrap max-w-full overflow-hidden text-ellipsis px-4 opacity-90 drop-shadow-md">
                          {t('subTagline')}
                      </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 animate-entrance opacity-0 mb-2" style={{ animationDelay: '450ms' }}>
                      <button
                        onClick={() => navigateTo('story')}
                        className="group relative overflow-hidden text-white font-bold py-2.5 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] logo-float"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-100"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 tracking-wide">{t('exploreTheStory')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={() => scrollToRef(quizRef)}
                        className="group relative overflow-hidden text-white font-bold py-2.5 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] logo-float"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-100"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 tracking-wide">{t('navInteractive')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wider animate-entrance opacity-0 mt-4" style={{ animationDelay: '550ms' }}>{t('mainQuote')}</p>
                </div>
             </div>
        </div>

        <div className="w-full mx-auto z-20 flex-shrink-0 px-4 -mt-16 md:-mt-24">
             <div className="relative group/scroll px-2">
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex flex-nowrap gap-3 sm:gap-4 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth items-center sm:justify-center"
                >
                     <FeatureCard 
                        iconName="bot-stars" 
                        title={t('quickAccessChatbot')} 
                        subtitle={t('chatbotSubtitle')} 
                        onClick={() => scrollToRef(chatbotRef)} 
                        delay="700ms"
                    />
                    <FeatureCard 
                        iconName="studio" 
                        title={t('quickAccessStudio')} 
                        subtitle={t('studioSubtitle')} 
                        onClick={() => scrollToRef(studioRef)} 
                        delay="800ms"
                    />
                    <FeatureCard 
                        iconName="user" 
                        title={t('quickAccessTestimonials')} 
                        subtitle={t('testimonialsSubtitle_nav')} 
                        onClick={() => scrollToRef(testimonialsRef)} 
                        delay="900ms"
                    />
                    <FeatureCard 
                        iconName="info-circle" 
                        title={t('quickAccessAbout')} 
                        subtitle={t('aboutSubtitle')} 
                        onClick={() => scrollToRef(aboutRef)} 
                        delay="1000ms"
                    />
                    <FeatureCard 
                        iconName="grid" 
                        title={t('quickAccessExplore')} 
                        subtitle={t('exploreProjectSections')}
                        onClick={() => scrollToRef(exploreRef)} 
                        delay="1100ms"
                    />
                </div>
                <div 
                    className={`absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-start z-40 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="animate-bounce-horizontal-rtl ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-light drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <AnimatedSection sectionRef={quizRef} className="pt-16 pb-8">
        <InteractiveZone navigateTo={navigateTo} />
      </AnimatedSection>
      <SectionSeparator />
      <AnimatedSection sectionRef={chatbotRef} className="pt-8 pb-8">
        <Chatbot />
      </AnimatedSection>
      <SectionSeparator />
      <AnimatedSection sectionRef={studioRef} className="pt-8 pb-8">
        <ImageStudio />
      </AnimatedSection>
      <SectionSeparator />
      <AnimatedSection sectionRef={testimonialsRef} className="pt-8 pb-8">
        <Testimonials />
      </AnimatedSection>
      <SectionSeparator />
       <AnimatedSection sectionRef={aboutRef} className="py-16">
         <div className="text-center">
            <div className="flex justify-center mb-4">
                <Icon name="info-circle" className="h-16 w-16 md:h-20 md:w-20 text-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('aboutIntroTitle')}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-light">{t('aboutIntroText')}</p>
            <button
                onClick={() => navigateTo('about')}
                className="group relative overflow-hidden text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] mx-auto mt-8"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{t('aboutIntroButton')}</span>
                <div className="relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-x-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                     </svg>
                </div>
            </button>
        </div>
      </AnimatedSection>
      <SectionSeparator />
      <AnimatedSection sectionRef={exploreRef} className="pt-8">
        <LandingNavGrid navigateTo={navigateTo} />
      </AnimatedSection>
      
    </>
  );
};

export default LandingPage;

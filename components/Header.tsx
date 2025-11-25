

import React, { useState, useEffect } from 'react';
import type { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface HeaderProps {
  navigateTo: (section: Section) => void;
  currentSection: Section;
}

const NavLink: React.FC<{
  section: Section;
  currentSection: Section;
  navigateTo: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, currentSection, navigateTo, children }) => {
  const isActive = currentSection === section;
  return (
    <button
      onClick={() => navigateTo(section)}
      className={`relative px-3 py-2 text-sm md:text-base font-bold transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap ${
        isActive
          ? 'text-white'
          : 'text-white/70 hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full animate-fade-in"></span>
      )}
    </button>
  );
};

const NavSeparator: React.FC = () => (
    <div className="h-5 w-px bg-white/40 mx-0.5 self-center"></div>
);

const Header: React.FC<HeaderProps> = ({ navigateTo, currentSection }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Check immediately on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Visibility Logic: Always show the header
  const shouldShow = true;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        shouldShow ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
        {/* Gradient Background: 0% opacity at top, 75% when scrolled */}
        <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] shadow-lg transition-opacity duration-300 backdrop-blur-md ${
                isScrolled ? 'opacity-75' : 'opacity-0'
            }`}
        ></div>

        <div className="container mx-auto px-4 h-16 flex items-center relative z-10">
            
            {/* Right Side (RTL Start): Navigation & Menu */}
            
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
                {/* Home Link - Distinct Style (Bolder) */}
                <button
                    onClick={() => navigateTo('home')}
                    className={`relative px-3 py-2 text-sm md:text-base font-black transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap ${
                        currentSection === 'home'
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                >
                    {t('navHome')}
                    {currentSection === 'home' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full animate-fade-in"></span>
                    )}
                </button>
                
                <NavSeparator />
                <NavLink section="story" currentSection={currentSection} navigateTo={navigateTo}>{t('navStory')}</NavLink>
                <NavSeparator />
                <NavLink section="interactive" currentSection={currentSection} navigateTo={navigateTo}>{t('navInteractive')}</NavLink>
                <NavSeparator />
                <NavLink section="chatbot" currentSection={currentSection} navigateTo={navigateTo}>{t('navChatbot')}</NavLink>
                <NavSeparator />
                <NavLink section="studio" currentSection={currentSection} navigateTo={navigateTo}>{t('navStudio')}</NavLink>
                <NavSeparator />
                <NavLink section="testimonials" currentSection={currentSection} navigateTo={navigateTo}>{t('navTestimonials')}</NavLink>
                <NavSeparator />
                <NavLink section="insights" currentSection={currentSection} navigateTo={navigateTo}>{t('navInsights')}</NavLink>
                <NavSeparator />
                <NavLink section="explore" currentSection={currentSection} navigateTo={navigateTo}>{t('navLibrary')}</NavLink>
                <NavSeparator />
                <NavLink section="about" currentSection={currentSection} navigateTo={navigateTo}>{t('navAbout')}</NavLink>
            </nav>

            {/* Left Side (Physical Left): Title & Social */}
            {/* dir="ltr" forces correct left-to-right order: Logo first (leftmost), then icons */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3 md:gap-4" dir="ltr">
                <button 
                    onClick={() => navigateTo('home')}
                    className="group"
                >
                    {/* Simplified Logo - Not Bold, Matching Main Title Font (Tajawal by default) */}
                    <div 
                        className="relative select-none flex flex-col items-center justify-center leading-none scale-75 md:scale-90 origin-center transition-transform duration-300 group-hover:scale-[0.8] md:group-hover:scale-[0.95]"
                    >
                        <div className="grid place-items-center">
                            <span 
                                className="text-xl md:text-2xl font-normal tracking-widest uppercase whitespace-nowrap text-white font-tajawal drop-shadow-md"
                            >
                                OFFLINE-ME
                            </span>
                        </div>
                    </div>
                </button>

                {/* Social Media Icons */}
                <div className="flex items-center gap-2">
                    <a 
                        href="https://www.facebook.com/offlinemeegypt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors p-1"
                        title="Facebook"
                    >
                        <Icon name="facebook" className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                    <a 
                        href="https://www.instagram.com/offlinemeegypt/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors p-1"
                        title="Instagram"
                    >
                        <Icon name="instagram" className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                    <a 
                        href="https://www.tiktok.com/@offlinemeegypt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors p-1"
                        title="TikTok"
                    >
                        <Icon name="tiktok" className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                    <a 
                        href="https://www.youtube.com/@offlinemeegypt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors p-1"
                        title="YouTube"
                    >
                        <Icon name="youtube" className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                </div>
            </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
             <div className="lg:hidden absolute top-16 left-0 w-full bg-surface border-b border-border-light shadow-xl animate-fade-in z-40">
                <nav className="flex flex-col p-4 space-y-2">
                    <button onClick={() => { navigateTo('home'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-black text-text-light hover:bg-white/5 rounded-lg">{t('navHome')}</button>
                    <button onClick={() => { navigateTo('story'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navStory')}</button>
                    <button onClick={() => { navigateTo('interactive'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navInteractive')}</button>
                    <button onClick={() => { navigateTo('chatbot'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navChatbot')}</button>
                    <button onClick={() => { navigateTo('studio'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navStudio')}</button>
                    <button onClick={() => { navigateTo('testimonials'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navTestimonials')}</button>
                    <button onClick={() => { navigateTo('insights'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navInsights')}</button>
                    <button onClick={() => { navigateTo('explore'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navLibrary')}</button>
                    <button onClick={() => { navigateTo('about'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-text-light hover:bg-white/5 rounded-lg">{t('navAbout')}</button>
                </nav>
             </div>
        )}
    </header>
  );
};

export default Header;

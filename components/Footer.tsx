
import React from 'react';
import type { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-text-light hover:text-teal transition-colors duration-300">
        {children}
    </a>
);

const FooterLink: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="font-semibold text-text-light hover:text-teal transition-colors duration-300 text-center md:text-start">
        {children}
    </button>
);

interface FooterProps {
  navigateTo: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-transparent text-text-light mt-12 border-t-2 border-border-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          
          {/* Column 1: About & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-text-dark">Offline-Me</h3>
            <p className="text-sm">{t('footerMission')}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 flex-wrap mt-4">
                <SocialLink href="https://www.facebook.com/offlinemeegypt">{t('socialFacebook')}</SocialLink>
                <SocialLink href="https://www.instagram.com/offlinemeegypt/">{t('socialInstagram')}</SocialLink>
                <SocialLink href="https://www.tiktok.com/@offlinemeegypt">{t('socialTiktok')}</SocialLink>
                 <SocialLink href="https://www.youtube.com/@offlinemeegypt">{t('socialYoutube')}</SocialLink>
            </div>
             <div className="pt-2">
                <a href="mailto:sattar82x@gmail.com" className="font-bold text-base flex items-center justify-center md:justify-start gap-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-transparent bg-clip-text hover:opacity-80 transition-opacity">
                    <Icon name="email" className="h-5 w-5 text-[#3b82f6]" />
                    <span>{t('contactUs')}</span>
                </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-text-dark">{t('quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink onClick={() => navigateTo('story')}>{t('navStory')}</FooterLink>
              <FooterLink onClick={() => navigateTo('interactive')}>{t('navInteractive')}</FooterLink>
              <FooterLink onClick={() => navigateTo('insights')}>{t('navInsights')}</FooterLink>
              <FooterLink onClick={() => navigateTo('explore')}>{t('navLibrary')}</FooterLink>
            </nav>
          </div>

          {/* Column 3: Important Info */}
          <div className="space-y-4 text-sm">
            <h3 className="text-xl font-bold uppercase tracking-wider text-text-dark">{t('importantInfo')}</h3>
            <div>
              <p><span className="font-bold text-text-dark">{t('storyAndArt')}</span> {t('authors')}</p>
              <p><span className="font-bold text-text-dark">{t('supervisedBy')}</span> {t('supervisors')}</p>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-text-dark">{t('disclaimer')}</h4>
              <p>{t('disclaimerText')}</p>
            </div>
          </div>

        </div>
        
        {/* Copyright and Logo Section - Stacked Vertically */}
        <div className="mt-12 pt-8 border-t border-border-light/50 flex flex-col items-center justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
            <p className="text-xs text-text-light/60 text-center">{t('copyrightText', { year: new Date().getFullYear() })}</p>
            
            {/* Footer Logo - Image */}
            <div className="relative select-none flex flex-col items-center justify-center">
                 <img 
                    src="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/584710065_122104882509122002_8770142176411048078_n.jpg?stp=c58.110.914.914a_dst-jpg_s160x160_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=JneRh7NRjlkQ7kNvwGOr5-l&_nc_oc=AdmJTB3Htk7drE731AmtfLJRWozLqyRJd0v7g2NOd1Vys9psvXsXAZn3fmDiPYTTHPY&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=unIOEiOPYIeKsrCNxljZgQ&oh=00_AfjIOFRRVZWRUOryQ_IaMMxf2C1jtWqoe4bxadKQGCLeaw&oe=692CF10C"
                    alt="Offline-Me"
                    className="h-80 w-80 rounded-[3rem] object-cover border-2 border-white/20 shadow-lg"
                 />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

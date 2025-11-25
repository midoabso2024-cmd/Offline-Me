

import React from 'react';

export type IconName = 
  | 'book' | 'puzzle' | 'grid' | 'user' | 'bot-stars' | 'arrow-left' | 'arrow-right'
  | 'chapter-1' | 'chapter-2' | 'chapter-3' | 'chapter-4' | 'chapter-5' | 'chapter-6' | 'chapter-7' | 'chapter-8'
  | 'insight-emotional' | 'insight-nomophobia' | 'insight-global' | 'insight-recovery' | 'insight-tips' | 'insight-physical'
  | 'insight-definition' | 'insight-academic' | 'insight-social' | 'insight-behavior' | 'insight-time' | 'insight-causes' | 'insight-parents'
  | 'article-psychology' | 'article-detox' | 'article-bluelight' | 'article-minimalism' | 'article-fomo' | 'article-nature' | 'article-dumbphone' | 'article-hobbies'
  | 'article-default' | 'story-default' | 'bullet-circle'
  | 'char-farida' | 'char-father' | 'char-mother' | 'char-omar'
  | 'test-timer' | 'studio' | 'info-circle' | 'email';

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'h-6 w-6' }) => {
  // Use a simple, stable ID for the gradient. React will handle scoping within the component tree.
  const gradientId = `icon-gradient-${name.replace(/[^a-zA-Z0-9]/g, '')}`;
  let iconPath;
  let strokeWidth = 2;

  const gradientDef = (
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#3b82f6' }} /> {/* teal */}
        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} /> {/* violet */}
      </linearGradient>
    </defs>
  );

  switch (name) {
    // UI Icons
    case 'book':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />;
      break;
    case 'puzzle':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />;
      break;
    case 'grid':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />;
      break;
    case 'user':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
      break;
    case 'bot-stars':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />;
      break;
    case 'arrow-left':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />;
      break;
    case 'arrow-right':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />;
      break;
    case 'bullet-circle':
        return (
            <svg className={className} viewBox="0 0 24 24" fill={`url(#${gradientId})`} aria-hidden="true">
                {gradientDef}
                <circle cx="12" cy="12" r="8"></circle>
            </svg>
        );
    case 'info-circle':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
      break;
    case 'email':
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
      break;
    // Character Icons
    case 'char-farida': strokeWidth = 1.5; iconPath = <><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 14.5c-4.14 0-7.5 2.01-7.5 4.5V20h15v-1c0-2.49-3.36-4.5-7.5-4.5z" /></>; break;
    case 'char-father': strokeWidth = 1.5; iconPath = <><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 14.5a7.5 7.5 0 00-7.5 7.5H12V16a1 1 0 112 0v6h5.5a7.5 7.5 0 00-7.5-7.5z" /></>; break;
    case 'char-mother': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />; break;
    case 'char-omar': strokeWidth = 1.5; iconPath = <><path d="M12 10a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 12c-3.31 0-6 1.79-6 4v1h12v-1c0-2.21-2.69-4-6-4z" /></>; break;


    // Chapter Icons
    case 'chapter-1': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />; break;
    case 'chapter-2': iconPath = <path d="M6.2 18.2C2.8 15.8 2 12.1 3.2 8.5S8 3.3 11.5 3.3c2.3 0 4.3 1.1 5.6 2.8L12 12l-5.8 6.2zM17.8 5.8C21.2 8.2 22 11.9 20.8 15.5s-4.8 6.2-8.3 6.2c-2.3 0-4.3-1.1-5.6-2.8L12 12l5.8-6.2z"/>; break;
    case 'chapter-3': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2.122 4.122a6.965 6.965 0 01-9.756-9.756 6.965 6.965 0 019.756 9.756zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />; break;
    case 'chapter-4': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />; break;
    case 'chapter-5': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />; break;
    case 'chapter-6': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />; break;
    case 'chapter-7': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />; break;
    case 'chapter-8': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9.19-9.19h-1m-16.38 0h-1m16.38-7.07l-.7.7m-11.32 0l-.7-.7m11.32 11.32l-.7-.7m-11.32 0l-.7.7M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" />; break;

    // Insight Icons
    case 'insight-emotional': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />; break;
    case 'insight-nomophobia': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />; break;
    case 'insight-global': iconPath = <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>; break;
    case 'insight-recovery': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />; break;
    case 'insight-tips': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />; break;
    case 'insight-physical': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />; break;
    
    // New Infographic Icons
    case 'insight-definition': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />; break;
    case 'insight-academic': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14v6" />; break;
    case 'insight-social': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />; break;
    case 'insight-behavior': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />; break;
    case 'insight-time': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />; break;
    case 'insight-causes': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />; break;
    case 'insight-parents': iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />; break;

    // Article Icons
    case 'article-psychology': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />; break;
    case 'article-detox': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />; break;
    case 'article-bluelight': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />; break;
    case 'article-minimalism': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />; break;
    case 'article-fomo': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12a5.995 5.995 0 00-3-5.197M15 21a9 9 0 00-9-9" />; break;
    case 'article-nature': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 10.512A4.5 4.5 0 0112 8c1.786 0 3.44.894 4.462 2.268M12 21a9 9 0 100-18 9 9 0 000 18z" />; break;
    case 'article-dumbphone': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />; break;
    case 'article-hobbies': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />; break;
    case 'article-default': strokeWidth = 1; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />; break;
    case 'story-default': strokeWidth = 1; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />; break;
    case 'test-timer': strokeWidth = 1.5; iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />; break;
    case 'studio':
      strokeWidth = 1.5;
      iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L13.196 5.232z" />;
      break;

    default:
      return null;
  }
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth}>
      {gradientDef}
      {iconPath}
    </svg>
  );
};

export default Icon;

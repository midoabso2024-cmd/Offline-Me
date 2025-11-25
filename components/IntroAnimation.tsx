
import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fading out at 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Unmount/Complete at 2.0 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#131314] transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Glowing Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
         <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo - Zoom In Effect */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 animate-zoom-in-logo">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]"
            >
                <defs>
                    <linearGradient id="introGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" /> 
                        <stop offset="100%" stopColor="#a78bfa" /> 
                    </linearGradient>
                </defs>
                <rect x="6" y="3" width="12" height="18" rx="2" ry="2" stroke="url(#introGradient)" strokeWidth="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" stroke="url(#introGradient)" strokeWidth="2.5" />
                {/* Red Line */}
                <line x1="21" y1="3" x2="3" y2="21" stroke="#ef4444" strokeWidth="2.5" className="drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;

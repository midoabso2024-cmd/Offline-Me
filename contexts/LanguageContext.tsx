
import React, { createContext, useContext, ReactNode } from 'react';
import { translations } from '../translations';

interface LanguageContextType {
  lang: 'ar';
  t: (key: string, replacements?: { [key: string]: string | number }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const lang = 'ar';

  const t = (key: string, replacements?: { [key: string]: string | number }) => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for(const k of keys){
      if (result === undefined) return key;
      result = result[k];
    }
    
    if (result === undefined) return key;

    if (typeof result === 'string' && replacements) {
      return Object.entries(replacements).reduce((acc: string, [key, value]) => {
        return acc.replace(new RegExp(`{${key}}`, 'g'), String(value));
      }, result);
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
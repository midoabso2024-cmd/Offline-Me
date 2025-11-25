
import React from 'react';
import type { Article } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface ArticleViewerProps {
  article: Article;
  onBack: () => void;
}

const ArticleViewer: React.FC<ArticleViewerProps> = ({ article, onBack }) => {
  const { t } = useLanguage();

  const getArticleImage = (id: number) => {
      const images: { [key: number]: string } = {
          1: "https://media.istockphoto.com/id/2184511277/photo/professional-businesswoman-in-smart-casual-attire-taking-notes-on-paper-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=uRnaT8RMdRNIkLW32eQdrUMNVBUCLvSNDGNh3dwPjYc=",
          2: "https://images.unsplash.com/photo-1711843250852-54e4781ad1b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          3: "https://plus.unsplash.com/premium_photo-1661420260792-89ce2fb94051?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          4: "https://images.unsplash.com/photo-1598647401237-a9387d7ae2da?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          5: "https://images.unsplash.com/photo-1521079299535-94854b0a7b27?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          6: "https://plus.unsplash.com/premium_photo-1661660058527-b6b59e3dcbbc?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          7: "https://plus.unsplash.com/premium_photo-1661422100377-b0dc2ed38fbf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          8: "https://plus.unsplash.com/premium_photo-1661757425320-2bf2032fd991?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          9: "https://plus.unsplash.com/premium_photo-1663126649902-da96ec858a02?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          10: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
      return images[id] || images[10];
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <button 
        onClick={onBack} 
        className="group relative overflow-hidden text-white font-bold py-2 px-6 rounded-full mb-8 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Back Arrow */}
        <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </span>
        <span className="relative z-10">{t('backToLibrary')}</span>
      </button>
      
      <article className="bg-surface/50 backdrop-blur-lg border border-border-light p-6 md:p-8 rounded-2xl shadow-xl">
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg relative">
             <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40 z-10" />
             <img 
                src={getArticleImage(article.id)} 
                alt={article.title} 
                className="w-full h-full object-cover"
             />
             <div className="absolute top-4 right-4 z-20">
                 <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded border border-white/10">
                    {article.category === 'articles' ? t('catArticles') : t('catStories')}
                 </span>
             </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-2">{article.title}</h1>
        <p className="text-text-light mb-6 text-lg opacity-90">{t('byAuthor', { author: article.author })}</p>
        
        <div className="prose max-w-none text-text-dark/90 text-lg leading-loose">
          {article.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ArticleViewer;

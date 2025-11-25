
import React, { useState } from 'react';
import type { Article } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

type Category = 'all' | 'articles' | 'stories';

interface ExploreLibraryProps {
    articles: Article[];
    onSelectArticle: (article: Article) => void;
}

const CategoryButton: React.FC<{
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
}> = ({ onClick, isActive, children }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 font-bold rounded-full border transition-all duration-300 ${
            isActive 
            ? 'bg-teal/20 text-teal border-teal' 
            : 'bg-surface text-text-light border-border-light hover:bg-border-light hover:text-text-dark'
        }`}
    >
        {children}
    </button>
);

const ExploreLibrary: React.FC<ExploreLibraryProps> = ({ articles, onSelectArticle }) => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    // Filter articles based on category without separating the featured one
    const filteredArticles = activeCategory === 'all'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    const getArticleImage = (id: number) => {
        const images: { [key: number]: string } = {
            9: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            1: "https://media.istockphoto.com/id/2184511277/photo/professional-businesswoman-in-smart-casual-attire-taking-notes-on-paper-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=uRnaT8RMdRNIkLW32eQdrUMNVBUCLvSNDGNh3dwPjYc=",
            2: "https://images.unsplash.com/photo-1711843250852-54e4781ad1b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            3: "https://plus.unsplash.com/premium_photo-1661420260792-89ce2fb94051?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            4: "https://images.unsplash.com/photo-1598647401237-a9387d7ae2da?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            5: "https://images.unsplash.com/photo-1521079299535-94854b0a7b27?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            6: "https://plus.unsplash.com/premium_photo-1661660058527-b6b59e3dcbbc?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            7: "https://plus.unsplash.com/premium_photo-1661422100377-b0dc2ed38fbf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            8: "https://plus.unsplash.com/premium_photo-1661757425320-2bf2032fd991?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            10: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        };
        return images[id] || images[10];
    };

    return (
        <div className="space-y-12 max-w-5xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('libraryTitle')}</h2>
                <p className="mt-2 text-lg text-text-light">{t('librarySubtitle')}</p>
            </div>

            <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                <CategoryButton onClick={() => setActiveCategory('all')} isActive={activeCategory === 'all'}>{t('catAll')}</CategoryButton>
                <CategoryButton onClick={() => setActiveCategory('articles')} isActive={activeCategory === 'articles'}>{t('catArticles')}</CategoryButton>
                <CategoryButton onClick={() => setActiveCategory('stories')} isActive={activeCategory === 'stories'}>{t('catStories')}</CategoryButton>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map(article => (
                    <button 
                        key={article.id} 
                        onClick={() => onSelectArticle(article)}
                        className="bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal/30 flex flex-col h-full w-full text-start focus:outline-none focus:ring-2 focus:ring-teal cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
                             <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-10" />
                             <img 
                                src={getArticleImage(article.id)} 
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                             />
                             {/* Category Badge */}
                             <div className="absolute top-3 right-3 z-20">
                                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded border border-white/10">
                                    {article.category === 'articles' ? t('catArticles') : t('catStories')}
                                </span>
                             </div>
                        </div>
                        
                        <div className="p-5 flex flex-col flex-grow w-full">
                            {/* Title with min-height to ensure alignment across row */}
                            <h3 className="text-lg md:text-xl font-bold text-text-dark group-hover:text-teal transition-colors mb-2 line-clamp-2 min-h-[3.5rem]">{article.title}</h3>
                            <p className="text-text-light mb-4 text-xs md:text-sm opacity-80">{t('byAuthor', { author: article.author })}</p>
                            
                            <div className="mt-auto pt-2">
                                <div 
                                    className="text-teal font-bold text-sm flex items-center gap-2 group/btn hover:underline decoration-teal/50 underline-offset-4"
                                >
                                    {t('readMore')}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExploreLibrary;

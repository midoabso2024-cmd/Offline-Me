import React, { useState, useCallback, useEffect } from 'react';
import type { Section, Article, StoryChapter } from './types';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import StoryArchive from './components/StoryArchive';
import InsightsZone from './components/InsightsZone';
import InteractiveZone from './components/InteractiveZone';
import ExploreLibrary from './components/ExploreLibrary';
import Footer from './components/Footer';
import ArticleViewer from './components/ArticleViewer';
import StoryChapterViewer from './components/StoryChapterViewer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import AboutProject from './components/AboutProject';
import IntroAnimation from './components/IntroAnimation';

const AppContent: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [viewingArticle, setViewingArticle] = useState<Article | null>(null);
  const [viewingChapter, setViewingChapter] = useState<StoryChapter | null>(null);
  
  const { t } = useLanguage();
  
  // Defensive programming: Ensure these are arrays before using them
  const rawChapters = t('storyChapters');
  const chapters: StoryChapter[] = Array.isArray(rawChapters) ? rawChapters : [];

  const rawArticles = t('articles');
  const articles: Article[] = Array.isArray(rawArticles) ? rawArticles : [];

  const baseTitle = 'Offline-Me: فصلت عشان أعيش';

  useEffect(() => {
    let sectionTitle = '';
    if (viewingArticle) {
        sectionTitle = viewingArticle.title;
    } else if (viewingChapter) {
        sectionTitle = viewingChapter.title;
    } else {
        sectionTitle = t(`pageTitle_${currentSection}`) || t('tagline');
    }
    document.title = sectionTitle ? `${sectionTitle} | ${baseTitle}` : baseTitle;
  }, [currentSection, viewingArticle, viewingChapter, t, baseTitle]);

  // Handle scrolling for specific sections (like contact)
  useEffect(() => {
      if (currentSection === 'contact') {
          const footerElement = document.getElementById('footer-section');
          if (footerElement) {
              footerElement.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [currentSection]);


  const clearView = () => {
    setViewingArticle(null);
    setViewingChapter(null);
  }

  const navigateTo = useCallback((section: Section) => {
    setCurrentSection(section);
    clearView();
    
    // Only force scroll to top for pages that start at the top.
    // For sections that exist within the LandingPage (interactive, chatbot, etc.),
    // we skip this to prevent the "Jump to Top -> Scroll Down" visual glitch.
    const sectionsWithinLandingPage = ['interactive', 'chatbot', 'studio', 'testimonials'];
    
    if (!sectionsWithinLandingPage.includes(section)) {
        window.scrollTo(0, 0);
    }
  }, []);

  const handleSelectArticle = (article: Article) => {
    setViewingArticle(article);
    setViewingChapter(null);
    window.scrollTo(0, 0);
  };
  
  const handleCloseView = () => {
    const previousArticleSection = viewingArticle ? 'explore' : null;
    const previousChapterSection = viewingChapter ? 'story' : null;
    clearView();
    if (previousArticleSection) {
      setCurrentSection(previousArticleSection);
    } else if (previousChapterSection) {
      setCurrentSection(previousChapterSection);
    }
  };

  const handleSelectChapter = (chapter: StoryChapter) => {
    setViewingChapter(chapter);
    setViewingArticle(null);
    window.scrollTo(0, 0);
  };

  const handleNextChapter = () => {
    if (!viewingChapter) return;
    const currentIndex = chapters.findIndex(c => c.id === viewingChapter.id);
    if (currentIndex < chapters.length - 1) {
      handleSelectChapter(chapters[currentIndex + 1]);
    }
  };

  const handlePrevChapter = () => {
    if (!viewingChapter) return;
    const currentIndex = chapters.findIndex(c => c.id === viewingChapter.id);
    if (currentIndex > 0) {
      handleSelectChapter(chapters[currentIndex - 1]);
    }
  };

  const renderContent = () => {
    if (viewingArticle) {
      return <ArticleViewer 
                article={viewingArticle} 
                onBack={handleCloseView} 
             />;
    }
    if (viewingChapter) {
        return <StoryChapterViewer 
            chapter={viewingChapter} 
            allChapters={chapters}
            onBack={handleCloseView} 
            onSelectChapter={handleSelectChapter}
            onNext={handleNextChapter}
            onPrev={handlePrevChapter}
        />;
    }
    
    switch (currentSection) {
      case 'home':
        return <LandingPage navigateTo={navigateTo} />;
      case 'story':
        return <StoryArchive chapters={chapters} onSelectChapter={handleSelectChapter} />;
      case 'insights':
        return <InsightsZone />;
      case 'interactive':
        return <LandingPage navigateTo={navigateTo} scrollToSection="quiz" />;
      case 'chatbot':
        return <LandingPage navigateTo={navigateTo} scrollToSection="chatbot" />;
      case 'studio':
        return <LandingPage navigateTo={navigateTo} scrollToSection="studio" />;
      case 'testimonials':
        return <LandingPage navigateTo={navigateTo} scrollToSection="testimonials" />;
      case 'explore':
        return <ExploreLibrary articles={articles} onSelectArticle={handleSelectArticle} />;
      case 'about':
        return <AboutProject />;
      case 'contact':
        return <LandingPage navigateTo={navigateTo} />; // Will scroll to footer via useEffect
      default:
        return <LandingPage navigateTo={navigateTo} />;
    }
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`min-h-screen flex flex-col ${showIntro ? 'hidden' : 'flex'}`}>
        <Header 
            navigateTo={navigateTo} 
            currentSection={currentSection} 
        />
        {/* CRITICAL: Fixed top margin (mt-16) is maintained to preserve logo position/layout 
            even when the header is visually hidden. This prevents the content from jumping up. */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-16">
            {renderContent()}
        </main>
        <div id="footer-section">
            <Footer navigateTo={navigateTo} />
        </div>
      </div>
    </>
  );
};


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
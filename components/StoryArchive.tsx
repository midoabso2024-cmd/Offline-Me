

import React from 'react';
import type { StoryChapter, CharacterProfile } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon, { IconName } from './Icon';

interface StoryArchiveProps {
  chapters: StoryChapter[];
  onSelectChapter: (chapter: StoryChapter) => void;
}

const StoryArchive: React.FC<StoryArchiveProps> = ({ chapters, onSelectChapter }) => {
  const { t } = useLanguage();
  const rawCharacters = t('characters');
  const characters: CharacterProfile[] = Array.isArray(rawCharacters) ? rawCharacters : [];

  const getChapterImage = (chapter: StoryChapter) => {
      // Prioritize explicit chapter images if available (e.g., comic panels)
      if (chapter.images && chapter.images.length > 0) {
          return chapter.images[0];
      }

      // Fallback Cover Images for Cards if no images defined
      const coverImages: {[key: number]: string} = {
          0: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=800&auto=format&fit=crop", // Intro: Identity/Question
          1: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=800&auto=format&fit=crop", // Ch1: Blue Light/Phone in dark
          2: "https://images.unsplash.com/photo-1596607278833-1324eb3db918?q=80&w=800&auto=format&fit=crop", // Ch2: Isolation/Window
          3: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=800&auto=format&fit=crop", // Ch3: Stress/Turmoil
          4: "https://images.unsplash.com/photo-1623155727091-2007279840d2?q=80&w=800&auto=format&fit=crop", // Ch4: Broken Screen/Glass
          5: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop", // Ch5: Sunlight/Peace
          6: "https://images.unsplash.com/photo-1591199541210-74088d071194?q=80&w=800&auto=format&fit=crop", // Ch6: Planting/Earth
          7: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", // Ch7: Speaking/Confident
          8: "https://images.unsplash.com/photo-1490750967868-58cb75063ed4?q=80&w=800&auto=format&fit=crop", // Ch8: Blooming/Sky
      };

      if (coverImages[chapter.id]) {
          return coverImages[chapter.id];
      }
      
      return "https://images.unsplash.com/photo-1614726365723-49cfae950f29?q=80&w=600&auto=format&fit=crop";
  };

  const getChapterBadgeLabel = (id: number) => {
      if (id === 0) return t('introLabel');
      return `${t('chapterLabel', { id })}`;
  };

  // Character Image Logic
  const characterGroupImage = "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/583681410_122099688531122002_990412484135725279_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KYBRj83AWC0Q7kNvwGg5E3e&_nc_oc=AdnZZZx2B4_-Pxgwtyg3PhLbc-npw8cROkRpHQy0W2a8xmoIUleuQ9DgeGLuS3oruCs&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=FQV7udguVyCthBdeZvavgA&oh=00_Afh1HfImrAw5CwEsD1Vxz3A0Y-XJCmS_cApKBxOSb6m_RQ&oe=6923FB80";

  const getCharacterImageStyle = (id: string) => {
      const baseStyle = {
          backgroundImage: `url('${characterGroupImage}')`,
          backgroundSize: '400%', 
          backgroundRepeat: 'no-repeat',
      };

      switch (id) {
          case 'farida': return { ...baseStyle, backgroundPosition: '48% 25%' }; 
          case 'father': return { ...baseStyle, backgroundPosition: '8% 20%' };
          case 'mother': return { ...baseStyle, backgroundPosition: '90% 25%' };
          case 'omar':   return { ...baseStyle, backgroundPosition: '68% 30%' };
          default: return baseStyle;
      }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-12 animate-fade-in-up">
      
      {/* 1. Hero Section: Book Details & Credits */}
      <div className="relative w-full bg-surface border border-border-light rounded-3xl overflow-hidden shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-[#1a1a2e] to-black opacity-90 z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12">
              
              {/* Book Cover */}
              <div className="flex-shrink-0 w-48 md:w-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] border border-white/10">
                  <img 
                      src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/586193814_25128465753455937_2211687604428638537_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGG2RMXT0WbZa3vxz1KG-_MOnQoduHousE6dCh24ei6wU303AixuJjW3Pj3kR4rsrbyIeZ1ix0kYeeBHVGahB2W&_nc_ohc=i5Y_EjR0HHoQ7kNvwFy2pGY&_nc_oc=AdlHWibg9F-vT0IqNVBhx2hd2uepxvHt0-8Iyad0VCm_z_kfp2qQCapLMRPB0MDtcrU&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=OpG4zQth1uwVyAgMSiQLpQ&oh=00_AfjIeq_CegbTj3LsNR7BLl5CgK13o32GjVQgMb006-1ulg&oe=692B8584" 
                      alt="Offline-Me Cover" 
                      className="w-full h-auto object-cover"
                  />
              </div>

              {/* Book Info */}
              <div className="flex-grow text-center lg:text-start space-y-6">
                  <div>
                      <h1 className="text-4xl md:text-5xl font-bold text-white font-tajawal mb-2 drop-shadow-lg">
                          فصلت عشان أعيش <span className="text-teal block md:inline text-3xl md:text-4xl mt-2 md:mt-0">(Offline-Me)</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-text-light italic opacity-90 font-light mt-4 border-b border-white/10 pb-4 inline-block">
                          "ما سبتش حياتي عشان أعيش، أنا فصلت عشان أشوفها"
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-teal font-bold mb-1 flex items-center justify-center lg:justify-start gap-2">
                              <Icon name="user" className="w-5 h-5" /> تأليف
                          </p>
                          <p className="text-white">محمد عبد الستار – فاطمة فهمي – محمود فليفل</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-violet font-bold mb-1 flex items-center justify-center lg:justify-start gap-2">
                              <Icon name="insight-academic" className="w-5 h-5" /> تحت إشراف
                          </p>
                          <p className="text-white">د/ سحر مصطفى – د/ سماح الشهاوي</p>
                      </div>
                  </div>

                  <div className="text-sm text-text-light/60 pt-2">
                      <p>مشروع تخرج ماجستير الاعلام الرقمي والامن المعلوماتي 2025/2026 - كلية الاعلام – جامعة القاهرة</p>
                  </div>
              </div>
          </div>
      </div>

      {/* 2. Characters Strip */}
      <div>
          <div className="flex items-center gap-3 mb-6 px-2">
              <div className="h-8 w-1 bg-teal rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">أبطال القصة</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {characters.map(char => (
                  <div key={char.id} className="bg-surface border border-border-light p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-teal/50 hover:-translate-y-1 shadow-md group">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-teal/30 group-hover:border-teal mb-3 shadow-lg bg-cream">
                          <div className="w-full h-full bg-cover" style={getCharacterImageStyle(char.id)}></div>
                      </div>
                      <h4 className="font-bold text-white text-lg mb-1">{char.name}</h4>
                      <p className="text-teal text-xs font-medium uppercase tracking-wider bg-teal/10 px-2 py-1 rounded-full">{char.role}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* 3. Dedication - Full Width */}
      <div className="w-full">
          {/* Dedication */}
          <div className="bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-1 hover:border-teal/30 p-8 md:p-10 relative flex flex-col h-full text-center">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="book" className="w-48 h-48 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-teal mb-8 flex items-center justify-center gap-3 relative z-10">
                  <Icon name="book" className="w-8 h-8" /> الإهداء
              </h3>
              <div className="space-y-4 text-text-light italic text-lg md:text-xl leading-relaxed text-center font-tajawal relative z-10 flex-grow flex flex-col justify-center">
                  <p>إلى كل أب خرج من بيته قبل طلوع الشمس، وعاد مكسور الظهر مع غروبها.</p>
                  <p>إلى كل أب خبأ وجعه في جيبه، وابتسم ليزرع الطمأنينة في عيون أطفاله.</p>
                  <p>إلى من ضحّى بكل راحة، بكل طموح، بكل فرصة… كي يصنع لأبنائه فرصة.</p>
                  <p>إلى من أنفق عمره ليكون أولاده أفضل منه، لكنهم ربما لم ينتبهوا.</p>
                  <p className="font-bold text-teal/90 mt-2 not-italic">وإلى الأبناء…</p>
                  <p>إلى من اعتقد أن وجود الأب دائم، وأن صمته قسوة لا حبًّا.</p>
                  <p>إلى من لم يفهم بعد أن تعب الأب لا يُقال… بل يُعاش.</p>
                  <p>إلى من ظن أن الأمان حق، دون أن يسأل من يدفع ثمنه كل يوم.</p>
                  <p className="mt-2">هذه الرواية تذكارٌ صادق، ولوْمة حنونة.</p>
                  <p>لعل من نسى يتذكّر… ومن جحد يلين… ومن تعب، يبتسم.</p>
                  <div className="w-24 h-0.5 bg-teal/30 mx-auto my-6"></div>
                  <p className="text-white font-bold text-2xl">"فصلت… عشان تعيشوا"</p>
              </div>
          </div>
      </div>

      {/* 4. Chapters Grid - Including Introduction as first card */}
      <div>
          <div className="flex items-center gap-3 mb-6 px-2">
              <div className="h-8 w-1 bg-violet rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">فصول القصة</h3>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <button 
                key={chapter.id}
                onClick={() => onSelectChapter(chapter)}
                className="bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal/30 flex flex-col h-full w-full text-start focus:outline-none focus:ring-2 focus:ring-teal cursor-pointer"
              >
                {/* Image Container - Matching Library's h-48 and overlay styles */}
                <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 z-10" />
                    <img 
                        src={getChapterImage(chapter)} 
                        alt={chapter.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 z-20">
                        <span className={`backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded border border-white/10 ${chapter.id === 0 ? 'bg-violet/80' : 'bg-black/60'}`}>
                            {getChapterBadgeLabel(chapter.id)}
                        </span>
                    </div>
                </div>

                {/* Content Container - Matching Library's layout */}
                <div className="p-5 flex flex-col flex-grow w-full">
                    {/* Title with min-height */}
                    <h4 className="text-lg md:text-xl font-bold text-text-dark group-hover:text-teal transition-colors mb-2 line-clamp-2 min-h-[3.5rem]">
                        {chapter.title.includes(':') ? chapter.title.split(':')[1].trim() : chapter.title}
                    </h4>
                    
                    <p className="text-text-light mb-4 text-xs md:text-sm opacity-80 line-clamp-3">
                        {chapter.summary}
                    </p>
                    
                    <div className="mt-auto pt-2">
                        <div 
                            className="text-teal font-bold text-sm flex items-center gap-2 group/btn hover:underline decoration-teal/50 underline-offset-4"
                        >
                            {t('readChapterButton')}
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

      {/* Copyright Footer within component */}
      <div className="text-center text-xs text-text-light/30 pt-8 border-t border-border-light/10">
          <p>جميع الحقوق محفوظة © 2026</p>
      </div>
      
    </div>
  );
};

export default StoryArchive;

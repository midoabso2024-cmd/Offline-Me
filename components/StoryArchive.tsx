
import React from 'react';
import type { StoryChapter } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import CharacterProfiles from './CharacterProfiles';
import Icon, { IconName } from './Icon';

interface StoryArchiveProps {
  chapters: StoryChapter[];
  onSelectChapter: (chapter: StoryChapter) => void;
}

const StoryArchive: React.FC<StoryArchiveProps> = ({ chapters, onSelectChapter }) => {
  const { t } = useLanguage();

  const getChapterImage = (chapter: StoryChapter) => {
      // Priority 1: Use the first image from the chapter's comic panels if available
      if (chapter.images && chapter.images.length > 0) {
          return chapter.images[0];
      }

      // Priority 2: Fallback to hardcoded placeholders based on ID
      const images: {[key: number]: string} = {
          // Dramatic/Comic Style Images
          1: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop",
          2: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
          3: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop",
          4: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop",
          5: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=600&auto=format&fit=crop",
          6: "https://images.unsplash.com/photo-1621193677201-53a6975f0cb5?q=80&w=600&auto=format&fit=crop",
          7: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=600&auto=format&fit=crop",
          8: "https://images.unsplash.com/photo-1494548162494-384d6fa0d917?q=80&w=600&auto=format&fit=crop",
      };
      return images[chapter.id] || "https://images.unsplash.com/photo-1614726365723-49cfae950f29?q=80&w=600&auto=format&fit=crop";
  };

  const getChapterBadgeLabel = (id: number) => {
      const badges: {[key: number]: string} = {
          1: "الفصل الأول",
          2: "الفصل الثاني",
          3: "الفصل الثالث",
          4: "الفصل الرابع",
          5: "الفصل الخامس",
          6: "الفصل السادس",
          7: "الفصل السابع",
          8: "الفصل الثامن",
      };
      return badges[id] || t('chapterLabel', { id });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      
      {/* Book Introduction & Credits Section */}
      <div className="w-full mx-auto space-y-12 animate-fade-in-up">
        
        {/* Title Section with Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4">
             {/* Image Column (Right in RTL) */}
             <div className="w-full md:w-1/3 flex-shrink-0 order-1 md:order-1">
                 <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mr-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img 
                        src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/586193814_25128465753455937_2211687604428638537_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGG2RMXT0WbZa3vxz1KG-_MOnQoduHousE6dCh24ei6wU303AixuJjW3Pj3kR4rsrbyIeZ1ix0kYeeBHVGahB2W&_nc_ohc=i5Y_EjR0HHoQ7kNvwFy2pGY&_nc_oc=AdlHWibg9F-vT0IqNVBhx2hd2uepxvHt0-8Iyad0VCm_z_kfp2qQCapLMRPB0MDtcrU&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=OpG4zQth1uwVyAgMSiQLpQ&oh=00_AfjIeq_CegbTj3LsNR7BLl5CgK13o32GjVQgMb006-1ulg&oe=692B8584" 
                        alt="Offline-Me Cover" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 </div>
             </div>

             {/* Text Info Column */}
             <div className="w-full md:w-2/3 text-center md:text-start space-y-6 order-2 md:order-2">
                 <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-tajawal leading-tight drop-shadow-lg">
                    فصلت عشان أعيش <span className="text-teal">(Offline-Me)</span>
                 </h1>
                 <p className="text-xl md:text-2xl text-text-light font-medium italic mb-8 inline-block leading-relaxed opacity-90">
                    "ما سبتش حياتي عشان أعيش، أنا فصلت عشان أشوفها"
                 </p>

                 <div className="space-y-4 text-base md:text-lg text-text-light/90 font-medium">
                    <p><span className="text-teal font-bold">تأليف:</span> محمد عبد الستار – فاطمة فهمي – محمود فليفل</p>
                    <p><span className="text-violet font-bold">تحت إشراف:</span> د/ سحر مصطفى – د/ سماح الشهاوي</p>
                    
                    <div className="pt-6 mt-6 border-t border-border-light/30 text-sm md:text-base opacity-70">
                        <p className="mb-1">مشروع تخرج ماجستير الاعلام الرقمي والامن المعلوماتي 2025/2026</p>
                        <p>كلية الاعلام – جامعة القاهرة</p>
                    </div>
                 </div>
             </div>
        </div>

        {/* Grid for Dedication and Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Dedication Section */}
            <div className="bg-surface/30 border border-border-light/50 rounded-2xl p-6 md:p-8 hover:bg-surface/40 transition-colors h-full flex flex-col">
                <h3 className="text-xl font-bold text-teal mb-6 flex items-center justify-center gap-2">
                    <Icon name="book" className="w-6 h-6 text-teal" />
                    الإهداء
                </h3>
                <div className="text-text-light/90 leading-loose text-sm md:text-lg italic space-y-4 font-tajawal text-center">
                    <p>إلى كل أب خرج من بيته قبل طلوع الشمس، وعاد مكسور الظهر مع غروبها.</p>
                    <p>إلى كل أب خبأ وجعه في جيبه، وابتسم ليزرع الطمأنينة في عيون أطفاله.</p>
                    <p>إلى من ضحّى بكل راحة، بكل طموح، بكل فرصة… كي يصنع لأبنائه فرصة.</p>
                    <p>إلى من أنفق عمره ليكون أولاده أفضل منه، لكنهم ربما لم ينتبهوا.</p>
                    <p className="pt-2 font-semibold text-white/80">وإلى الأبناء…</p>
                    <p>إلى من اعتقد أن وجود الأب دائم، وأن صمته قسوة لا حبًّا.</p>
                    <p>إلى من لم يفهم بعد أن تعب الأب لا يُقال… بل يُعاش.</p>
                    <p>إلى من ظن أن الأمان حق، دون أن يسأل من يدفع ثمنه كل يوم.</p>
                    <div className="pt-4 border-t border-white/5 mt-4">
                        <p className="text-white">هذه الرواية تذكارٌ صادق، ولوْمة حنونة.</p>
                        <p>لعل من نسى يتذكّر… ومن جحد يلين… ومن تعب، يبتسم.</p>
                        <p className="text-teal font-bold pt-2 text-center">— فصلت… عشان تعيشوا. —</p>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-surface/30 border border-border-light/50 rounded-2xl p-6 md:p-8 hover:bg-surface/40 transition-colors h-full flex flex-col">
                 <h3 className="text-xl font-bold text-violet mb-6 flex items-center justify-center gap-2">
                    <Icon name="info-circle" className="h-6 w-6 text-violet" />
                    المقدمة
                </h3>
                <div className="text-text-light/90 leading-loose text-sm md:text-lg italic space-y-4 font-tajawal text-center flex-grow">
                    <p>
                        حين يتحوّل الهاتف من وسيلة تواصل إلى قيدٍ خفي، وعندما تُقاس الحياة بعدد الإعجابات بدلًا من عدد اللحظات الصادقة، تصبح الحاجة مُلحّة لطرح سؤال وجودي: من نكون حين نغلق الشاشة؟ ومن نظل إذا فصلنا الإنترنت؟
                    </p>
                    <p>
                        رواية <span className="font-bold text-white">فصلت عشان أعيش (Offline-Me)</span> ليست مجرد حكاية فتاة في سن المراهقة، بل هي مرآة لواقع جيل بأكمله. تمتزج في سطورها التوترات النفسية بالمواقف اليومية، ويتشابك الخيال الأدبي مع تحليل علمي دقيق.
                    </p>
                    <p>
                        تم بناء الرواية على أرضية علمية متينة، حيث تم توظيف أكثر من 30 مصطلحًا ومفهومًا نفسيًا وتكنولوجيًا. لم تكن المصطلحات العلمية مجرد معلومات موازية، بل عناصر فاعلة في تطور السرد.
                    </p>
                    <p className="font-semibold text-white pt-2 border-t border-white/10 mt-2">
                        هذه ليست فقط رواية، بل تجربة تربوية نفسية متكاملة، تحاول استعادة العلاقة الطبيعية بين الإنسان والتكنولوجيا.
                    </p>
                </div>
            </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] md:text-xs text-text-light/40 pt-4 pb-8 border-b border-border-light/20 mb-8 max-w-2xl mx-auto">
            <p>جميع الحقوق محفوظة © 2026</p>
            <p>لا يجوز نسخ أو إعادة إنتاج أي جزء من هذا العمل أو تخزينه في نظام استرجاع أو نقله بأي شكل أو بأي وسيلة، إلكترونية كانت أو ميكانيكية، بما في ذلك التصوير الضوئي أو التسجيل، دون إذن خطي مسبق من المؤلف.</p>
        </div>

      </div>
      
      {/* Modified Grid: Optimized for A4 Portrait Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {chapters.map((chapter) => (
          <button 
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className="flex flex-col bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal hover:-translate-y-2 h-full"
          >
            {/* Image Container: A4 Portrait Aspect Ratio (210/297 approx 0.707) */}
            <div className="relative w-full aspect-[210/297] bg-black overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${getChapterImage(chapter)})` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Badge - Positioned Bottom Right, Blue-Purple Gradient, Rounded - Responsive Size */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10">
                    <span className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white text-[10px] sm:text-lg font-bold px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 shadow-lg">
                        {getChapterBadgeLabel(chapter.id)}
                    </span>
                </div>

                {/* Play Icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                    <div className="bg-teal/90 rounded-full p-2 sm:p-3 shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                         <Icon name="arrow-left" className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                </div>
            </div>

            {/* Bottom Section: Text Content */}
            <div className="p-2.5 sm:p-4 flex flex-col flex-grow text-start w-full bg-surface border-t border-border-light">
                <h3 className="text-sm sm:text-lg font-bold text-text-dark group-hover:text-teal transition-colors duration-200 mb-1 leading-tight line-clamp-2">
                    {chapter.title.split(':')[1] || chapter.title}
                </h3>
                <p className="text-text-light text-[10px] sm:text-sm line-clamp-2 leading-relaxed opacity-80">
                    {chapter.summary}
                </p>
            </div>
          </button>
        ))}
      </div>

      <hr className="border-border-light my-12 opacity-50" />

      <CharacterProfiles />
      
    </div>
  );
};

export default StoryArchive;

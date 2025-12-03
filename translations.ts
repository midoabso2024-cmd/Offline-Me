// AR Content
import chapter1AR from './data/ar/chapters/1';
import chapter2AR from './data/ar/chapters/2';
import chapter3AR from './data/ar/chapters/3';
import chapter4AR from './data/ar/chapters/4';
import chapter5AR from './data/ar/chapters/5';
import chapter6AR from './data/ar/chapters/6';
import chapter7AR from './data/ar/chapters/7';
import chapter8AR from './data/ar/chapters/8';

import article1AR from './data/ar/articles/1';
import article2AR from './data/ar/articles/2';
import article3AR from './data/ar/articles/3';
import article4AR from './data/ar/articles/4';
import article5AR from './data/ar/articles/5';
import article6AR from './data/ar/articles/6';
import article7AR from './data/ar/articles/7';
import article8AR from './data/ar/articles/8';
import article9AR from './data/ar/articles/9';
import article11AR from './data/ar/articles/11';

// EN Content
import chapter1EN from './data/en/chapters/1';
import chapter2EN from './data/en/chapters/2';
import chapter3EN from './data/en/chapters/3';
import chapter4EN from './data/en/chapters/4';
import chapter5EN from './data/en/chapters/5';
import chapter6EN from './data/en/chapters/6';
import chapter7EN from './data/en/chapters/7';
import chapter8EN from './data/en/chapters/8';

import article1EN from './data/en/articles/1';
import article2EN from './data/en/articles/2';
import article3EN from './data/en/articles/3';
import article4EN from './data/en/articles/4';
import article5EN from './data/en/articles/5';
import article6EN from './data/en/articles/6';
import article7EN from './data/en/articles/7';
import article8EN from './data/en/articles/8';
import article9EN from './data/en/articles/9';


export const translations = {
  ar: {
    // General
    tagline: 'Offline-Me\nفصلت عشان أعيش',
    subTagline: 'رواية معاصرة تمزج بين السرد الأدبي والتحليل العلمي تغوص في أعماق إدمان الهواتف وانفصالنا عن الواقع، من خلال قصة نفسية إنسانية مؤثرة. استكشف عالم الرواية، واختبر إدمانك الرقمي، وتعلّم التوازن النفسي من خلال مقالات علمية مبسطة.',
    mainQuote: 'قصة : فصلت عشان اعيش Offline-Me',
    subQuote: 'انضم إلى رحلة فريدة لاستعادة التوازن والاتصال بالواقع.',
    ctaReadStory: 'اقرأ القصة كاملة',
    quizSectionTitle: 'اختبر نفسك: هل أنت مدمن موبايل؟',
    quizSectionSubtitle: 'اكتشف مدى تعلقك بهاتفك من خلال هذا الاختبار القصير واحصل على رؤى حول عاداتك الرقمية.',
    quizSectionCTA: 'ابدأ الاختبار',
    readChapterButton: 'اقرأ الفصل',
    backToArchive: 'العودة إلى الأرشيف',
    watchIllustratedStory: 'شاهد القصة المصورة',
    byAuthor: 'بواسطة: {author}',
    readMore: 'اقرأ المزيد',
    backToLibrary: 'العودة إلى المكتبة',
    age: '{age} عاماً',
    prevChapter: 'الفصل السابق',
    nextChapter: 'الفصل التالي',
    allChapters: 'تصفح جميع الفصول',
    chapterLabel: 'فصل {id}',
    introLabel: 'المقدمة',
    loadingContent: 'جاري التحميل...',

    // Page Titles
    pageTitle_home: 'الرئيسية',
    pageTitle_story: 'القصة',
    pageTitle_videos: 'الفيديوهات',
    pageTitle_insights: 'بيانات ورؤى',
    pageTitle_interactive: 'اختبر نفسك',
    pageTitle_explore: 'المكتبة',
    pageTitle_about: 'عن المشروع',

    // Quick Access Toolbar
    quickAccessChatbot: 'المساعد الذكي',
    quickAccessStudio: 'الاستوديو',
    quickAccessExplore: 'استكشف',
    quickAccessAbout: 'عن المشروع',
    quickAccessTestimonials: 'ماذا قالوا',
    testimonialsSubtitle_nav: 'آراء الخبراء والإعلاميين في القصة والموقع',
    aboutSubtitle: 'معلومات أكثر عن المشروع وصانعيه',
    aboutIntroTitle: 'نبذة عن المشروع',
    aboutIntroText: 'مشروع تخرج رقمي متكامل يهدف لمعالجة ظاهرة إدمان الهواتف الذكية من خلال السرد القصصي البصري والمحتوى التفاعلي المُعزَّز بالذكاء الاصطناعي.',
    aboutIntroButton: 'اعرف المزيد عن المشروع وصناعه',
    aboutFacultyLogoAlt: 'شعار كلية الإعلام - جامعة القاهرة',
    exploreTheStory: 'اقرأ القصة',
    exploreProjectSections: 'أقسام المشروع',

    // Header Navigation
    navHome: 'الرئيسية',
    navStory: 'القصة',
    navVideos: 'الفيديوهات',
    navInsights: 'بيانات ورؤى',
    navInteractive: 'اختبر نفسك',
    navLibrary: 'المكتبة',
    navAbout: 'عن المشروع',
    navChatbot: 'المساعد الذكي',
    navStudio: 'الاستوديو',
    navTestimonials: 'قالوا عنا',
    
    // Story Archive & Characters
    storyArchiveTitle: 'أرشيف القصة',
    storyArchiveSubtitle: 'تصفح فصول قصة "Offline-Me" المصورة.',
    characterProfilesTitle: 'شخصيات القصة وأدوارها',
    characters: [
      { id: 'farida', name: 'فريدة', age: 17, role: 'البطلة في صراع مع الذات', description: 'شابة ذكية وموهوبة، لكنها وقعت في فخ العزلة الرقمية، وتبحث عن طريق للعودة إلى حياتها الحقيقية.' },
      { id: 'father', name: 'محمد (الأب)', age: 50, role: 'الحزن المكتوم والقرار الحاسم', description: 'يرمز إلى الندم على ترك الأمور تصل إلى هذا الحد، واتخاذ قرار صعب من أجل حب ابنته.' },
      { id: 'mother', name: 'ليلى (الأم)', age: 45, role: 'الدعم غير المشروط والاحتواء', description: 'يمثل القلب الحنون للعائلة، الذي يقدم الحب والدعم حتى في أصعب الظروف.' },
      { id: 'omar', name: 'عمر (الأخ)', age: 12, role: 'المحاولة البريئة والتواصل الصادق', description: 'يمثل البراءة ومحاولة فهم ما يحدث، ويقدم طرقًا بسيطة لإعادة التواصل مع أخته.' },
    ],
    storyChapters: [
        {
            id: 0,
            title: 'مقدمة: من نكون حين نغلق الشاشة؟',
            summary: 'رواية فصلت عشان أعيش (Offline-Me) ليست مجرد حكاية، بل هي مرآة لواقع جيل بأكمله عالق بين العزلة الرقمية والبحث عن الذات. تجربة تربوية نفسية متكاملة.',
            fullContent: `حين يتحوّل الهاتف من وسيلة تواصل إلى قيدٍ خفي، وعندما تُقاس الحياة بعدد الإعجابات بدلًا من عدد اللحظات الصادقة، تصبح الحاجة مُلحّة لطرح سؤال وجودي: من نكون حين نغلق الشاشة؟ ومن نظل إذا فصلنا الإنترنت؟
رواية فصلت عشان أعيش (Offline-Me) ليست مجرد حكاية فتاة في سن المراهقة تُدعى "فريدة"، بل هي مرآة لواقع جيل بأكمله عالق بين العزلة الرقمية والبحث عن الذات. تمتزج في سطورها التوترات النفسية بالمواقف اليومية، ويتشابك الخيال الأدبي مع تحليل علمي دقيق، في سردٍ درامي واقعي لا يخلو من البُعد الخيالي والسينمائي، مستلهمًا روح الكتابة البصرية لأسلوب الروايات المصرية.
تم بناء الرواية على أرضية علمية متينة، حيث تم توظيف أكثر من 30 مصطلحًا ومفهومًا نفسيًا وتكنولوجيًا مدعومة بمراجع موثوقة. لم تكن المصطلحات العلمية مجرد معلومات موازية، بل عناصر فاعلة في تطور السرد، ومفتاحًا لفهم قرارات الشخصيات وتحولاتهم النفسية.
كل فصل في الرواية ينتهي بملحق علمي مبسط، يشرح المفاهيم النفسية والسلوكية والتكنولوجية التي تجسّدت ضمن الأحداث. فحين تبكي فريدة من تعليق ساخر على الإنترنت، نكتشف علميًا أثر "حلقة الدوبامين". وحين تهجر هاتفها مجبرة، نقرأ عن "أعراض الانسحاب الرقمي" كما يُصنفها علم النفس السلوكي.
هذه ليست فقط رواية، بل تجربة تربوية نفسية متكاملة، تحاول استعادة العلاقة الطبيعية بين الإنسان والتكنولوجيا. لا تلقي باللوم على الجهاز، بل تنحاز للوعي، للاعتدال، وللقدرة على الاختيار.`,
            images: ["https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/586193814_25128465753455937_2211687604428638537_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGG2RMXT0WbZa3vxz1KG-_MOnQoduHousE6dCh24ei6wU303AixuJjW3Pj3kR4rsrbyIeZ1ix0kYeeBHVGahB2W&_nc_ohc=i5Y_EjR0HHoQ7kNvwFy2pGY&_nc_oc=AdlHWibg9F-vT0IqNVBhx2hd2uepxvHt0-8Iyad0VCm_z_kfp2qQCapLMRPB0MDtcrU&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=OpG4zQth1uwVyAgMSiQLpQ&oh=00_AfjIeq_CegbTj3LsNR7BLl5CgK13o32GjVQgMb006-1ulg&oe=692B8584"]
        },
        { 
            id: 1, 
            title: 'الفصل الأول: الهروب إلى الضوء الأزرق', 
            summary: 'في ظل صمت موحش، تجلس فريدة على مائدة العشاء منعزلة تمامًا عن عائلتها، غارقة في الضوء الأزرق لهاتفها، بينما يراقبها والدها بعجز وألم.', 
            fullContent: chapter1AR,
            images: [
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/585421236_122103244581122002_5510319638998045162_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UGgNFwPggK0Q7kNvwGAxBP4&_nc_oc=AdmU3sD09LQP7Crh5YQuROqnGzmcwFgjN8DZ4CnnTyUvDvArOhKiLd2WuojJmOt-Cwc&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=7rX3N4OUYis8K91Ob66-RQ&oh=00_AfgrSlIPq0fldnt13TPG9sdx3_fCkdohFOyvsu2hVz-8rw&oe=692D14FC",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/585558521_122103244473122002_3370008520812185552_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UOUs-ZVJEzwQ7kNvwGkMk_3&_nc_oc=Adlg-J3hMvyy8stqmi0Qgy97gXCwZWjYv6t7o_n1CY_BSQEauSzQLi78gGWAXCpFktQ&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=0-WF-Kn7W1LOPUTxmd9Dvg&oh=00_AfgrmFMWt2BJiqmSidstnC_F_zWE_DCHTo3rxt6jaofcQw&oe=692D0A05",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/587208727_122103244389122002_7281313954621388638_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0ERuEdXDhQ4Q7kNvwE35hjQ&_nc_oc=AdkpFy2A9K-MHPWKqVMY8l59xhYaiac4FgXvUVAG4a7B8pQkqpSJ9ZcLnpDnccB_Vy4&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=M7-G3MSU7Ki2E_Id3YcSOw&oh=00_Afi_e-RyZoxBbdXA67Kx3iXFFKhDGyfNlO6t4zMm8ogU4w&oe=692D04EF",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/585791088_122103244629122002_2044412549461639064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bSh_JZ5NAD8Q7kNvwGl7EUc&_nc_oc=AdkOLxR7eP_lwAOaueWJDU8-7hQq8KrOHAR11EP6on2TzgElh2YQtAiem1zxVFArq4s&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=DKKep0N0hRr1WCTi-_S1ug&oh=00_AfjTmYQjGJBytVy0Xay-u2UCPp0gxuJoylsk4NZegrY5Kw&oe=692D0E20",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/586173710_122104846593122002_3695787287616971133_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Et9j-a9_CLkQ7kNvwG-HtGh&_nc_oc=AdmBnARNDXuBe8fFnd_elBDM4aFMn4jVi-L3moBafJ6MrDmYjwLgUYmGWDlQJA8Gi9Q&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=zRKO-4elBs95EsRBd0fRJQ&oh=00_AfgI5llrh466aKOHiomCtCgpHLQxu2vc3Z9RjbqiMw0Vig&oe=692D002E"
            ]
        },
        { 
            id: 2, 
            title: 'الفصل الثاني: صرخة في وادي السيليكون', 
            summary: 'يتعمق الانفصال عندما ترفض فريدة زيارة عائلية بسبب ضعف الإنترنت، وتكشف عن صرخة يائسة للمساعدة في منشور قديم لم يفهمه أحد.', 
            fullContent: chapter2AR,
            images: [
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/587023889_122104609077122002_2949836749204878868_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cl3R1QR5JYEQ7kNvwG9gtf0&_nc_oc=Adkebn8Vigbjigyz7cZCL8p6jH7zw2y1zH7jJqoydE21KGi-6E5cH1iiEjBC2iZjHfU&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=Zs_JULHVby8g-t-BCLLvSA&oh=00_AficFDx5XCQTKOguTIsamm0TpDpbgYAsZuVNFDnY2_Zu9A&oe=692CF73F",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/586552526_122104609131122002_1317377218839459770_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kKsmEauKPQYQ7kNvwE-nddZ&_nc_oc=AdkrALn8I-8DvEr-h5t9yTd9nlnC4s_kIhd32o1AydevMEsma_JBAvrqSFnQmQLj5Nw&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=b-JpS2P_Yh-LHRN_ckymtA&oh=00_Afi7fgPlqCKZEFgiWHe7G8SONYLlWvA9JWRD5zKwQv4rVg&oe=692D0574",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588735182_122104846995122002_7772171302079223824_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iQC04N606e4Q7kNvwH9nfj0&_nc_oc=AdldXYzBCr1nm1fgPBQLpsEES5bj5TBysRZKN_csH-kionTwO-wa98z5NhF-Hv8Xp7g&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=zRKO-4elBs95EsRBd0fRJQ&oh=00_AfiFdWruoy34xtes9ZJA_LWAMX-h5DaljgWzmi7jl3g4oQ&oe=692D0495"
            ]
        },
        { 
            id: 3, 
            title: 'الفصل الثالث: السقوط الحر', 
            summary: 'تتصاعد حالة فريدة إلى غيبوبة نفسية، حيث تفشل في الاستجابة لمعلمها وتكتشف رسوبها، لكن الصدمة الحقيقية تأتي من خبر مأساوي عن طالبة أخرى.', 
            fullContent: chapter3AR,
            images: [
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588719284_122105217801122002_829225085609614629_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VXe7IQCK1rsQ7kNvwHCqFdK&_nc_oc=AdkQNOSAgbZqppO2p_I5M4s1ipsNCMzPlZvHI9uQ_20QUD0bRq23Zt3fenBwN20J_QE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yO8hOjX8N5E0RaZB4u8Qvw&oh=00_Afgl7OOScAV5BEgFsnJmw7Pzd10OGE2QIN95HC28IHiMkA&oe=692D0BC9",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588432891_122105217849122002_1603227400448352199_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u-7ffCpWbKAQ7kNvwFagx2Y&_nc_oc=Admq2dsAl-dzrI7h1ZkCElmNG8oIEMdznJrq3Hutw95461U2NVACMpmAPj6qyPNI6-c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=xqqT7HRUEziYvvBiC0Z6zw&oh=00_Afg7-9oO0XcPIpWbvLVcT4kWottEL8m8GshnuaiHEEKGMA&oe=692CF09F",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/587834884_122105217873122002_8053150162216238811_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gX5TQAFyuJUQ7kNvwHhGbSg&_nc_oc=AdkMyyaMy0h9JVehc_EfWUmQGJaoB6nL64gRoaZhJolqyp5vaERzo9ADX9yLeqHArVQ&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=wzU6Rl_Zz50otjxbkgQpxg&oh=00_Afj_LBDktCrN27gGkfo4ANeQOwLDIv0QKDPB8XdUkQB7vA&oe=692CF3AA",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588071532_122105256897122002_5017907668159922001_n.jpg?stp=cp6_dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=asijTPJnmNUQ7kNvwHfljIa&_nc_oc=AdkrTKQBwUONm4m6uTjXH4s9jrD_k5Fy8U1EI9wbB3QwZ0idbD-ZMdRXEYIbMNHxYP0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=esV7ldQOCikGStLeA5AN4A&oh=00_AfhEfhMO4xhJZTY07jt9nm_snEFBL4k-RmzdutJ0t1YdRQ&oe=692D0E4B"
            ]
        },
        { 
            id: 4, 
            title: 'الفصل الرابع: شظايا المرآة السوداء', 
            summary: 'يواجه الأب فريدة بكذبها، وفي ذروة الغضب، يحطم هاتفها. هذا الانهيار المادي يطلق العنان لانهيار عاطفي كامل، وتدرك فريدة الحقيقة المأساوية وراء نداءاتها الصامتة.', 
            fullContent: chapter4AR,
            images: [
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/589107227_122105641761122002_1010286013093276316_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6nYWsbiut-AQ7kNvwHOq4-q&_nc_oc=AdmjedGw0ll32tQe4837zuG_r7usbS1PQrwMQRkrzLhhJK-vTaDKv8oin_f6q61hEj0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=YoFi4hQbNSioTUDo6PLJbQ&oh=00_Afgjdi8goLvS4EPkjM5l9xiZRv8Tn1rOzaIl-5rs33XvSw&oe=692D12AC",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588189544_122105641971122002_8863790718907045645_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cqXSrQadZAwQ7kNvwGO_nDd&_nc_oc=AdnDRXo9pbmaaRB05PkPMA9T0iplcxGp1_UFlL_LzYnVYORHtMKYEgn1kuWFcT7XzOg&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=OCbwkU8ZeohO0Y0__Jb5Bw&oh=00_Afjzh46fiO6FTSgpf5_Uat78KJk3tcQYhAtcUOnxK3f68Q&oe=692CF333",
                "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/588997666_122105725251122002_2860451454503201992_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EL5ZX9ZGSVoQ7kNvwGOakfM&_nc_oc=AdlxRgIGDj27_iPlzIp6nl_1SBFObPW-SH_KDXEEl3VijE8-pMefQJ3N8p6lPYlJrHU&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2F_DnR41pUWLC_QcG8cJWw&oh=00_Afh9BJeChMmbY_y1FwJl53sOLm7k5a-tW0wce-Zcg32p-g&oe=692D1062"
            ]
        },
        { id: 5, title: 'الفصل الخامس: العودة إلى الحياة (Offline)', summary: 'تبدأ المصالحة بدعم صامت من الأم، تليها خطوات عملية نحو التعافي. حوار صادق مع الأب يعيد بناء الثقة، ويضع قواعد جديدة لمستقبل أفضل.', fullContent: chapter5AR },
        { id: 6, title: 'الفصل السادس: البذرة الجديدة (الفعل المشترك)', summary: 'تتحول المصالحة إلى فعل مشترك، حيث تزرع العائلة وردة بيضاء كرمز للأمل. تبدأ فريدة في تحقيق انتصارات صغيرة، وتعود الأجواء الدافئة إلى مائدة العشاء.', fullContent: chapter6AR },
        { id: 7, title: 'الفصل السابع: المواجهة (الإعلان عن الانتصار)', summary: 'تعلن فريدة انتصارها في عرض تقديمي مؤثر، محولةً قصتها الشخصية إلى مصدر إلهام للآخرين. لم تعد ضحية، بل أصبحت مرشدة تساعد الآخرين في رحلتهم.', fullContent: chapter7AR },
        { id: 8, title: 'الفصل الثامن: الهدوء (الإزهار الحقيقي)', summary: 'يعود الهدوء والتوازن إلى حياة العائلة. في مشهد ختامي رمزي، تقف فريدة على السطح، والوردة البيضاء قد أزهرت بالكامل، رمزًا لحياتها الجديدة المكتملة.', fullContent: chapter8AR },
    ],
    // Videos Section
    videosTitle: 'الفيديوهات',
    videosSubtitle: 'شاهد فصول القصة المصورة بالصوت والصورة.',
    videos: [
        { id: 1, title: 'الفصل الأول: الهروب إلى الضوء الأزرق', url: 'https://www.youtube.com/watch?v=F1UVfUlQAdc', description: 'بداية الرحلة والانفصال عن الواقع.' },
        { id: 2, title: 'الفصل الثاني: صرخة في وادي السيليكون', url: 'https://www.youtube.com/watch?v=I8h0OQODWCc', description: 'تعمق العزلة والبحث عن الاهتمام المزيف.' },
        { id: 3, title: 'الفصل الثالث: السقوط الحر', url: 'https://www.youtube.com/watch?v=k0PqrSRyC-s', description: 'الصدمة ومواجهة الحقيقة المؤلمة.' },
        { id: 4, title: 'فوكس بوكس مع طلبة جامعة القاهرة', url: 'https://youtu.be/Wl2Nul9Ps1c?si=9oNrS5vFn1Ec3rRH', description: 'فيديو ميداني يستطلع آراء طلبة الجامعة حول استخدامهم للهواتف الذكية.' },
    ],
    navCardVideosTitle: 'الفيديوهات',
    navCardVideosDesc: 'شاهد فصول القصة كفيديو.',

    // Insights Zone
    insightsZoneTitle: 'بيانات ورؤى',
    insightsZoneSubtitle: 'حقائق وأرقام تساعدك على فهم أعمق لتأثير الشاشات على حياتنا.',
    infographic_emotional: {
      title: 'الأثر النفسي والعاطفي',
      points: [
        '<b>زيادة القلق والاكتئاب:</b> ربطت الدراسات الاستخدام المفرط للهواتف بزيادة معدلات القلق والاكتئاب، خاصة بين المراهقين.',
        '<b>اضطرابات النوم:</b> الضوء الأزرق المنبعث من الشاشات يعطل إنتاج الميلاتونين، مما يؤثر على جودة النوم.',
        '<b>ضعف التركيز:</b> التبديل المستمر بين المهام والإشعارات يقلل من قدرة الدماغ على التركيز العميق.',
        '<b>الشعور بالوحدة:</b> على الرغم من الاتصال الرقمي، قد يؤدي الاستخدام المفرط إلى العزلة الاجتماعية في العالم الحقيقي.'
      ],
      conclusion: 'صحتك النفسية هي الأولوية.'
    },
    infographic_nomophobia: {
      title: 'ما هي "النوموفوبيا"؟',
      points: [
        '<b>التعريف:</b> هي اختصار لـ "No-Mobile-Phobia"، وتعني الخوف من عدم وجود الهاتف المحمول أو عدم القدرة على استخدامه.',
        '<b>الأعراض:</b> تشمل القلق الشديد، والتوتر عند نفاد البطارية أو فقدان الإشارة، والتحقق القهري من الهاتف.',
        '<b>الانتشار:</b> يعاني ما يقرب من 66% من السكان من شكل من أشكال النوموفوبيا.',
        '<b>الحل:</b> يبدأ الحل بالاعتراف بالمشكلة وتطبيق فترات "ديتوكس رقمي" تدريجية.'
      ],
      conclusion: 'التحرر من الخوف يبدأ بالوعي.'
    },
    infographic_global: {
      title: 'إحصائيات عالمية',
      points: [
        '<b>متوسط الاستخدام:</b> يقضي الشخص العادي حوالي <b>3 ساعات و 15 دقيقة</b> على هاتفه يوميًا.',
        '<b>عدد مرات اللمس:</b> نلمس هواتفنا بمعدل <b>2,617 مرة</b> في اليوم.',
        '<b>التحقق من الهاتف:</b> 58% من مستخدمي الهواتف الذكية يتحققون من هواتفهم كل ساعة، حتى أثناء الليل.',
        '<b>الجيل Z:</b> يقضي أفراد هذا الجيل ما يصل إلى <b>9 ساعات</b> يوميًا أمام الشاشات.'
      ],
      conclusion: 'الأرقام لا تكذب، حان وقت المراجعة.'
    },
    infographic_recovery: {
      title: 'الطريق إلى التعافي',
      points: [
        '<b>الخطوات الصغيرة:</b> ابدأ بتحديد مناطق أو أوقات خالية من الهاتف (مثل غرفة النوم أو أثناء وجبات الطعام).',
        '<b>إيقاف الإشعارات:</b> قم بإيقاف جميع الإشعارات غير الضرورية لتقليل المقاطعات.',
        '<b>البدائل الصحية:</b> ابحث عن هوايات وأنشطة لا تتطلب شاشات لملء وقت فراغك.',
        '<b>اطلب الدعم:</b> تحدث مع الأصدقاء أو العائلة أو متخصص إذا كنت تشعر أنك فقدت السيطرة.'
      ],
      conclusion: 'التعافي رحلة، وكل خطوة تهم.'
    },
    infographic_tips: {
      title: '5 خطوات بسيطة لتقليل وقت الشاشة',
      points: [
        '<b>تتبع وقتك:</b> استخدم تطبيقات مدمجة لمعرفة أين يذهب وقتك الرقمي. الوعي هو الخطوة الأولى.',
        '<b>جدولة أوقات "بدون شاشة":</b> خصص ساعة واحدة على الأقل يوميًا بدون أي شاشات.',
        '<b>تنظيم شاشتك الرئيسية:</b> أزل التطبيقات المشتتة من شاشتك الرئيسية وضعها في مجلدات.',
        '<b>استخدم وضع "تدرج الرمادي":</b> يجعل الشاشة أقل جاذبية ويقلل من الرغبة في التمرير.',
        '<b>اشحن هاتفك خارج غرفة النوم:</b> استثمر في منبه تقليدي لتجنب استخدام الهاتف قبل النوم وبعد الاستيقاظ مباشرة.'
      ],
      conclusion: 'السيطرة على يومك تبدأ بالسيطرة على شاشتك.'
    },
    infographic_physical: {
        title: 'التأثير الجسدي لوقت الشاشة',
        points: [
            '<b>إجهاد العين الرقمي:</b> يسبب جفاف العين، الرؤية الضبابية، والصداع بسبب التحديق المستمر في الشاشات.',
            '<b>"رقبة النص":</b> يؤدي الانحناء فوق الهاتف إلى ضغط شديد على الرقبة والعمود الفقري، مما يسبب آلامًا مزمنة.',
            '<b>آلام اليد والمعصم:</b> يمكن أن يؤدي الاستخدام المتكرر إلى التهاب الأوتار ومتلازمة النفق الرسغي.',
            '<b>نمط الحياة الخامل:</b> يزيد الجلوس لفترات طويلة من خطر السمنة وأمراض القلب.'
        ],
        conclusion: 'جسدك يستحق استراحة من الشاشة.'
    },
    // New Infographics
    infographic_definition_teen: {
        title: 'ما هو إدمان الموبايل؟',
        points: [
            '<b>التعلق المفرط:</b> ارتباط شديد ومستمر بالهاتف يؤثر سلباً على جوانب الحياة.',
            '<b>عدم القدرة على التحكم:</b> صعوبة في الحد من الاستخدام حتى في الأوقات غير المناسبة.',
            '<b>القلق عند الابتعاد:</b> شعور بالتوتر والانزعاج إذا لم يكن الهاتف في متناول اليد (نوموفوبيا).',
            '<b>إهمال المسؤوليات:</b> انشغال بالهاتف لدرجة إهمال الواجبات والأنشطة الاجتماعية.'
        ],
        conclusion: 'فهم المشكلة هو نصف الحل.'
    },
    infographic_psych_impact: {
        title: 'الآثار النفسية',
        points: [
            '<b>القلق والتوتر المستمر:</b> يرفع الاستخدام المفرط مستويات القلق خاصة مع الإشعارات المتواصلة.',
            '<b>الاكتئاب والوحدة:</b> العزلة الناتجة عن الهاتف قد تنمّي إحساساً بالوحدة والحزن.',
            '<b>ضعف الثقة بالنفس:</b> مقارنة النفس بالآخرين على السوشيال ميديا تهز صورة الذات.'
        ],
        conclusion: 'لا تدع الشاشة تحدد قيمتك.'
    },
    infographic_academic_impact: {
        title: 'التأثير على التحصيل الدراسي',
        points: [
            '<b>تشتّت وضعف التركيز:</b> تفقد الإشعارات يضعف القدرة على التركيز في الدروس.',
            '<b>تراجع الأداء الأكاديمي:</b> يقلل وقت المذاكرة ويؤدي لانخفاض الدرجات.',
            '<b>تأجيل المهام:</b> الانشغال بالهاتف يؤدي لتراكم الواجبات المدرسية.'
        ],
        conclusion: 'مستقبلك أهم من "إشعار" جديد.'
    },
    infographic_social_impact: {
        title: 'التأثيرات الاجتماعية',
        points: [
            '<b>العزلة:</b> تمضية الوقت مع الهاتف بدلاً من التفاعل مع العائلة والأصدقاء.',
            '<b>ضعف مهارات التواصل:</b> يعيق تطور القدرة على التعبير والتعاطف وجهاً لوجه.',
            '<b>خلافات عائلية:</b> نشوء صدامات مع الوالدين حول أوقات الاستخدام.',
            '<b>المخاطر الإلكترونية:</b> زيادة احتمال التعرض للتنمر أو المحتوى غير اللائق.'
        ],
        conclusion: 'التواصل الحقيقي لا يحتاج لـ "واي فاي".'
    },
    infographic_behavior_signs: {
        title: 'سلوكيات مرتبطة بالإدمان',
        points: [
            '<b>الاستخدام السري:</b> إخفاء مدى الاستخدام عن الأهل لتجنب اللوم.',
            '<b>الهوس بالتفقد:</b> رغبة ملحّة في رؤية الإشعارات فور ورودها.',
            '<b>الانفعال عند المنع:</b> عصبية وغضب شديد إذا انقطع الإنترنت أو سُحب الهاتف.',
            '<b>إهمال الهوايات:</b> تفضيل الهاتف على أنشطة كانت ممتعة سابقاً.'
        ],
        conclusion: 'راقب سلوكك قبل أن يسيطر عليك.'
    },
    infographic_health_teen: {
        title: 'الآثار الصحية',
        points: [
            '<b>إجهاد العين والصداع:</b> التحديق المطول يسبب جفاف العين وآلام الرأس.',
            '<b>آلام الرقبة والظهر:</b> انحناء الرقبة المستمر يضغط على الفقرات.',
            '<b>قلة النشاط:</b> قلة الحركة ترفع خطر السمنة وضعف اللياقة.',
            '<b>اضطرابات النوم:</b> الضوء الأزرق يربك الساعة البيولوجية ويسبب الأرق.'
        ],
        conclusion: 'الصحة تاج على رؤوس الأصحاء.'
    },
    infographic_time_impact: {
        title: 'تأثير الإدمان على الوقت',
        points: [
            '<b>ضياع الوقت:</b> ساعات تمر دون شعور في التنقل بين التطبيقات.',
            '<b>التسويف:</b> تأجيل المهام الضرورية بسبب الانشغال بالمحتوى الترفيهي.',
            '<b>اختلال الروتين:</b> سهر لوقت متأخر واستيقاظ بصعوبة، مما يربك اليوم.',
            '<b>انخفاض الإنتاجية:</b> التشتت يقلل جودة وسرعة إنجاز المهام.'
        ],
        conclusion: 'الوقت هو أثمن ما تملك.'
    },
    infographic_causes: {
        title: 'أسباب ودوافع الإدمان',
        points: [
            '<b>الملل والوحدة:</b> استخدام الهاتف لملء الفراغ العاطفي أو الوقتي.',
            '<b>الخوف من فوات الشيء (FOMO):</b> خشية أن يفوتك حدث أو خبر مهم.',
            '<b>جاذبية التطبيقات:</b> تصميم التطبيقات ليجذب الانتباه ويبقيك متصلاً.',
            '<b>الهروب من الضغوط:</b> وسيلة لتخفيف التوتر أو الهروب من مشاكل الأسرة.'
        ],
        conclusion: 'عالج السبب، يختفي العرض.'
    },
    infographic_tips_teen: {
        title: 'نصائح للتغلب على الإدمان',
        points: [
            '<b>أوقف الإشعارات:</b> ألغِ تنبيهات التطبيقات غير الضرورية لتقليل التشتت.',
            '<b>أوقات خالية من الهاتف:</b> حدد فترات يومية بدون هاتف (أثناء الأكل، قبل النوم).',
            '<b>احذف الملهيات:</b> تخلص من التطبيقات المستهلكة للوقت كالألعاب الزائدة.',
            '<b>أبعده عند النوم:</b> لا تستخدم الهاتف في السرير لتتجنب السهر.',
            '<b>تطبيقات المتابعة:</b> استخدم أدوات لتقنين وقت الاستخدام اليومي.'
        ],
        conclusion: 'ابدأ بخطوة صغيرة اليوم.'
    },
    infographic_parents_role: {
        title: 'دور الأهل في العلاج',
        points: [
            '<b>التواصل المفتوح:</b> الحوار الهادئ مع المراهق دون انتقاد حاد.',
            '<b>وضع حدود واضحة:</b> الاتفاق على ساعات استخدام وقواعد (مثل منع الهاتف وقت المذاكرة).',
            '<b>القدوة الحسنة:</b> أن يكون الوالدان مثالاً في الاستخدام المعتدل.',
            '<b>تشجيع البدائل:</b> توفير أنشطة ترفيهية واجتماعية بعيداً عن الشاشة.'
        ],
        conclusion: 'الدعم العائلي هو خط الدفاع الأول.'
    },

    // Interactive Zone
    interactiveZoneTitle: 'اختبر نفسك',
    interactiveZoneSubtitle: 'أدوات تفاعلية لمساعدتك على تقييم وفهم عاداتك الرقمية.',
    quizTitle: 'اختبار الإدمان الرقمي',
    quizCardSubtitle: 'هل أنت المتحكم في هاتفك أم هو المسيطر؟ اكتشف الحقيقة الآن.',
    quizProgress: 'السؤال {current} من {total}',
    quizQuestions: [
      { question: 'هل أول شيء تفعله عند الاستيقاظ هو التحقق من هاتفك؟', options: [{ text: 'دائماً', score: 3 }, { text: 'أحياناً', score: 2 }, { text: 'نادراً', score: 1 }] },
      { question: 'هل تشعر بالقلق أو التوتر عندما تكون بطارية هاتفك منخفضة؟', options: [{ text: 'نعم، بشدة', score: 3 }, { text: 'قليلاً', score: 2 }, { text: 'لا أهتم', score: 1 }] },
      { question: 'هل تستخدم هاتفك أثناء تناول وجبات الطعام مع الآخرين؟', options: [{ text: 'في كثير من الأحيان', score: 3 }, { text: 'أحياناً', score: 2 }, { text: 'نادراً جداً', score: 1 }] },
      { question: 'هل تجد صعوبة في التركيز على مهمة واحدة دون التحقق من هاتفك؟', options: [{ text: 'نعم، باستمرار', score: 3 }, { text: 'إلى حد ما', score: 2 }, { text: 'لا، يمكنني التركيز', score: 1 }] },
      { question: 'هل تفضل قضاء وقت فراغك في تصفح الهاتف بدلاً من ممارسة هواية أخرى؟', options: [{ text: 'نعم، معظم الوقت', score: 3 }, { text: 'أحياناً', score: 2 }, { text: 'نادراً', score: 1 }] },
      { question: 'هل يؤثر استخدامك للهاتف على جودة نومك؟ (مثلاً، السهر لوقت متأخر)', options: [{ text: 'نعم، بشكل كبير', score: 3 }, { text: 'أحياناً', score: 2 }, { text: 'لا، لا يؤثر', score: 1 }] },
      { question: 'هل شعرت بالذنب أو الانزعاج من مقدار الوقت الذي تقضيه على هاتفك؟', options: [{ text: 'نعم، كثيراً', score: 3 }, { text: 'قليلاً', score: 2 }, { text: 'لم أشعر بذلك', score: 1 }] },
      { question: 'هل حاولت تقليل وقت استخدامك للهاتف وفشلت؟', options: [{ text: 'نعم، عدة مرات', score: 3 }, { text: 'حاولت مرة', score: 2 }, { text: 'لم أحاول', score: 1 }] },
      { question: 'هل أثر استخدامك للهاتف سلبًا على علاقاتك الشخصية أو عملك/دراستك؟', options: [{ text: 'نعم، بشكل ملحوظ', score: 3 }, { text: 'ربما قليلاً', score: 2 }, { text: 'لا، على الإطلاق', score: 1 }] },
      { question: 'هل تشعر بالحاجة إلى الرد الفوري على الرسائل والإشعارات بمجرد وصولها؟', options: [{ text: 'نعم، دائمًا', score: 3 }, { text: 'أحيانًا', score: 2 }, { text: 'لا، يمكنني الانتظار', score: 1 }] },
    ],
    quizResults: {
      good: { title: 'تحكم جيد!', description: 'لديك علاقة صحية ومتوازنة مع هاتفك. استمر في هذه العادات الرائعة!' },
      warning: { title: 'في منطقة الخطر', description: 'لديك بعض العادات التي قد تؤدي إلى التعلق المفرط. حان الوقت لمراقبة استخدامك بوعي.' },
      danger: { title: 'مستوى الإدمان مرتفع!', description: 'استخدامك للهاتف يؤثر بشكل كبير على حياتك. من الضروري اتخاذ خطوات جادة لاستعادة السيطرة.' },
    },
    retakeQuizButton: 'أعد الاختبار',
    quizSeeInsightsButton: 'بيانات ورؤى قد تفيدك في استعادة توازنك',
    quizExploreLibraryButton: 'تصفح المكتبة لإيجاد مقالات تساعدك',
    suggestionInsights: 'بيانات ورؤى',
    suggestionLibrary: 'تصفح المكتبة',
    suggestionTitle: 'لمعلومات ونصائح أكثر...',
    
    // Usage Tracker (Updated)
    usageTrackerTitle: 'محلل وقت الشاشة',
    usageTrackerSubtitle: 'اسحب المؤشر لترى التأثير الحقيقي لساعات استخدامك.',
    usageHoursLabel: 'ساعة يومياً',
    usageStatsTitle: 'ماذا يعني هذا الرقم؟',
    usageStatDays: 'أيام مفقودة سنوياً',
    usageStatBooks: 'كتب كان يمكن قراءتها',
    usageStatWalk: 'كيلومترات مشي ضائعة',
    usageBatteryLabel: 'بطارية طاقتك الواقعية',
    usageTrackerAnalysis: {
        safe: { title: 'منطقة الأمان', desc: 'أنت تسيطر على وقتك ببراعة. استمر هكذا!' },
        moderate: { title: 'انتبه!', desc: 'بدأ الوقت يتسرب من بين يديك. حاول تقليص ساعة يومياً.' },
        danger: { title: 'خطر الانفصال', desc: 'أنت تقضي جزءاً ضخماً من حياتك في عالم افتراضي. هذا ناقوس خطر!' },
        extreme: { title: 'حالة طوارئ', desc: 'أنت تقريباً تعيش داخل الشاشة. تحتاج لتدخل فوري لاستعادة حياتك.' }
    },

    // Explore Library
    libraryTitle: 'المكتبة',
    librarySubtitle: 'مقالات وقصص ملهمة لمساعدتك في رحلتك نحو التوازن الرقمي.',
    catAll: 'الكل',
    catArticles: 'مقالات',
    catStories: 'قصص ملهمة',
    articles: [
      { id: 9, category: 'articles', title: 'إدمان الموبايل لدى المراهقين: التأثيرات السلبية وسبل المواجهة', author: 'محمد عبد الستار', content: article9AR },
      { id: 11, category: 'articles', title: 'حقيقة صادمة محدش هيقولك عليها: التكنولوجيا عدو ولا صديق لأبنك؟', author: 'محمود فليفل', content: article11AR },
      { id: 1, category: 'articles', title: 'علم نفس إدمان الهواتف الذكية', author: 'فريق Offline-Me', content: article1AR },
      { id: 2, category: 'stories', title: 'رحلتي للتخلص من السموم الرقمية', author: 'قصة ملهمة', content: article2AR },
      { id: 3, category: 'articles', title: 'تأثير الضوء الأزرق على النوم والصحة', author: 'بحث علمي مبسط', content: article3AR },
      { id: 4, category: 'articles', title: 'البساطة الرقمية: دليل عملي لحياة أكثر تركيزًا', author: 'فريق Offline-Me', content: article4AR },
      { id: 5, category: 'articles', title: 'فهم الخوف من فوات الشيء (FOMO) في عصر السوشيال ميديا', author: 'تحليل نفسي', content: article5AR },
      { id: 6, category: 'stories', title: 'إعادة الاتصال بالطبيعة: كيف استبدلت التمرير بالمشي لمسافات طويلة', author: 'قصة ملهمة', content: article6AR },
      { id: 7, category: 'stories', title: 'متعة تجربة الهاتف \'الغبي\'', author: 'قصة ملهمة', content: article7AR },
      { id: 8, category: 'stories', title: 'من الإعجابات إلى الحروف: إعادة اكتشاف الهوايات القديمة', author: 'قصة ملهمة', content: article8AR },
    ],
    // Chatbot
    chatbotTitle: 'مساعد الذكاء الاصطناعي: Offline-Me AI',
    chatbotSubtitle: 'اطرح أي سؤال حول التوازن الرقمي',
    welcomeMessage: 'مرحباً! أنا هنا لمساعدتك في رحلتك نحو التوازن الرقمي. كيف يمكنني مساعدتك اليوم؟',
    inputPlaceholder: 'اكتب رسالتك هنا...',
    sendButton: 'أرسل',
    faqs: [
      'ما هو إدمان الهواتف؟',
      'كيف أقلل من وقت الشاشة؟',
      'ما هي أعراض النوموفوبيا؟',
      'أعطني نصيحة سريعة.',
      'ما هي البساطة الرقمية؟',
      'كيف أساعد صديقي؟',
      'ما هي التأثيرات الجسدية؟',
      'كيف أبدأ ديتوكس رقمي؟'
    ],
    // Landing Nav Grid
    exploreTitle: 'استكشف أقسام المشروع',
    navCardInsightsTitle: 'بيانات ورؤى',
    navCardInsightsDesc: 'اكتشف حقائق وأرقام مهمة حول تأثير الشاشات.',
    navCardCharactersTitle: 'ملفات الشخصيات',
    navCardCharactersDesc: 'تعرف على أبطال قصة Offline-Me ودوافعهم.',
    navCardLibraryTitle: 'المكتبة',
    navCardLibraryDesc: 'اقرأ مقالات وقصصًا ملهمة حول التوازن الرقمي.',
    navCardInteractiveTitle: 'اختبر نفسك',
    navCardInteractiveDesc: 'قم بتقييم عاداتك الرقمية من خلال أدوات تفاعلية.',

    // Testimonials
    testimonialsTitle: 'قالوا عن تجربة Offline-Me',
    testimonials: [
       {
        quote: 'الحقيقة إني سعيدة بكم المبدعين إللي أ/ محمد عبدالستار وفريقه واحد منهم في بلدنا الحلوة زى شباب كتير مبدعين يفرحوا بجد.. كل الأمنيات الصادقة بالتوفيق والنجاح والتفوق بإذن اللّٰه تعالي.',
        author: 'د/ يارا عبد القوي - محررة صحفية واعلامية'
      },
      { 
        quote: 'قصة تفاعلية رقمية بمنظور مختلف...جواها مضمون هادف وواقعي بيمسنا كلنا.. قدرتوا تاخذوني في رحلة تفاعلية متميزة سرحت بخيالي معاكم في تفاصيل القصة.. وخلتوني اقرر اخلي بالي اكثر من تعاملاتي الرقمية واستخدم ادوات الذكاء الاصطناعي بشكل احترافي.. كل التحية والتقدير لكل فريق العمل',
        author: 'د/ ماهيتاب جمال - مدرس بقسم الإذاعة والتلفزيون - كلية الإعلام - جامعة القاهرة'
      },
      { 
        quote: 'من أقوى القصص اللي بتكشف إزاي الإدمان الرقمي ممكن يسحب حياتنا من غير ما نحس. رحلة البطلة من السقوط للنجاح مكتوبة بصدق، ونقطة التحوّل مؤثرة وعميقة جدًا. قصة تستحق المشاهدة… لأنها بتحكي عننا كلنا.',
        author: 'أ/ فاطمة فهمى الجهينى - منسق أول بشركة NJT'
      },
      { 
        quote: 'مشروع متكامل وشيق ومتشوقة لمعرفة نهاية القصة. أدعم فريق العمل وتمنياتي لكم بالتوفيق.',
        author: 'أ/ رشا فهمي - إعلامية ومذيعة بالتلفزيون المصري'
      },
      { 
        quote: 'الإنتاج الفني فعلاً بالذكاء الاصطناعي ولكن فكرة القصة تمس بشكل مباشر واقعنا الحالي. بذلنا الكثير من المجهود فريقي وأنا للخروج بشكل متكامل للمشروع، بفضل ما تعلمناه من أساتذة الإعلام بكلية الإعلام جامعة القاهرة.',
        author: 'محمد عبد الستار - مؤسس المشروع'
      },
      {
        quote: 'Offline-Me حاجة مختلفة، من أول ما تدخل بتحس إنه مش مجرد موقع، ده مشروع عنده شخصية وهوية واضحة. المحتوى صادق وقريب من الناس و متخصص، واللغة بسيطة وسهلة وبتوصل الرسالة من غير تعقيد. محتوى الموقع مفيد جدًا لأنه بيقدملك تجربة توعية عن الحياة الرقمية في أكتر من صورة، وبيساعد أي حد يفهم تأثير التكنولوجيا على حياته ويبدأ يتحكم في استخدامه للرقمية بشكل صح. كمان بيخلي الزائر يحس إنه جزء من فكرة أكبر ويقدر يتعلم من التجارب والخبرات اللي بيشاركها الموقع. التصميم ممتاز وواضح، كل حاجة مرتبة بطريقة تسهل التنقل وفهم الفكرة، والموقع سريع ومتجاوب سواء على الكمبيوتر أو الموبايل. المشروع عنده هدف ورسالة واضحة وبيخلي أي حد يتفاعل ويحس إنه جزء من حاجة أكبر.',
        author: 'محمود فليفل - متخصص في دراسة وتوجيه محتوى الأجيال الرقمية'
      },
      {
        quote: 'والله أحيي فريق العمل الاستاذ محمود والاستاذ محمد والاستاذة فاطمه ع مجهودهم العظيم وانهم بيناقشوا فعلا قضية لمسة كل بيت وكل اسرة وغالبا الوالدين هم اللي بيعانوا منها لأن بالنسبه للاولاد انه عالم بيهربوا فيه عالم أفتراضي للاسف لا له معايير ولا حدود في مساحة عاداتنا وتقاليدنا الشرقية واخلاقنا الدينية',
        author: 'أ/ سلوي فهمي - قارئة للقصة'
      }
    ],

    // Footer
    footerMission: 'مشروع يهدف إلى رفع الوعي حول التوازن الرقمي وتقديم أدوات عملية لحياة أكثر صحة واتصالاً بالواقع.',
    quickLinks: 'روابط سريعة',
    importantInfo: 'معلومات هامة',
    storyAndArt: 'قصة ورسوم:',
    authors: 'محمد عبد الستار - فاطمة فهمي - محمود فليفل',
    supervisedBy: 'تحت إشراف:',
    supervisors: 'د/ سحر مصطفي - د/ سماح الشهاوي',
    disclaimer: 'إخلاء مسؤولية',
    disclaimerText: 'المحتوى المقدم في هذا الموقع هو لأغراض توعوية فقط ولا يعتبر بديلاً عن الاستشارة الطبية أو النفسية المتخصصة.',
    contactUs: 'تواصل معنا',
    socialFacebook: 'فيسبوك',
    socialInstagram: 'انستغرام',
    socialTiktok: 'تيك توك',
    socialYoutube: 'يوتيوب',
    copyrightText: '© {year} Offline-Me. كل الحقوق محفوظة. | Sattar82x',
    
    // Image Studio
    studioTitle: "استوديو Offline-Me",
    studioSubtitle: "صمم صورة بأسلوب قصتنا المميز.",
    studioPlaceholder: "صف مشهدًا أو شخصية من عالم Offline-Me... وسأقوم برسمها لك بأسلوب القصة.",
    studioButton: "ارسم المشهد",
    studioLoadingMessages: [
        "جاري تحبير الظلال...",
        "فريدة تختار الألوان...",
        "اللمسات الأخيرة على المشهد...",
        "يتم مزج الألوان الآن...",
        "لحظات قليلة وتظهر اللوحة..."
    ],
    studioResultTitle: "تحفتك الفنية جاهزة!",
    studioError: "عذراً، حدث خطأ أثناء إنشاء الصورة. قد يكون هذا بسبب سياسات الأمان أو مشكلة في الاتصال. حاول وصفًا مختلفًا.",
    studioActionSave: "حفظ الصورة",
    studioActionRetry: "إعادة المحاولة",
    studioActionCopy: "نسخ الوصف",
    studioActionExpand: "تكبير الصورة",
    studioAspectRatio: "أبعاد الصورة:",
    aspect_1_1: "مربع",
    aspect_4_3: "أفقي",
    aspect_3_4: "عمودي",
    aspect_16_9: "عريض",
    aspect_9_16: "قصة",
    
    // About Project
    aboutProjectContent: `**هل يمكن لقصة مصورة أن تُغيّر سلوكًا؟**
**وهل يُمكن للكوميكس أن يعالج أزمة نفسية؟**
**وهل يكون الذكاء الاصطناعي أداة للتعافي بدلًا من الإدمان؟**

## أولاً: الهوية و الرسالة
**Offline-Me | فصلت عشان أعيش** هو مشروع تخرج رقمي متكامل يعالج واحدة من أخطر ظواهر العصر: إدمان الهواتف الذكية (Nomophobia) وما يصاحبه من عزلة نفسية وفقدان للحضور الواقعي. يقدم المشروع رواية درامية نفسية مصوّرة، تتقاطع مع تحليل علمي مبسّط، وأدوات تفاعلية ذكية تُمكّن الجمهور من فهم نفسه، وقياس سلوكياته، والتفاعل مع القصة كوسيلة للوعي والتغيير.
موجّه إلى المراهقين، أولياء الأمور، والمربين، ويعتمد على سرد بصري قوي، وهوية علمية دقيقة، وتقنيات حديثة لجعل الوعي النفسي ليس فقط ممكنًا… بل ممتعًا أيضًا.

### لماذا اخترنا القصص المصورة؟
لأننا أردنا أن نبتعد عن الوعظ المباشر، ونُقدّم موضوعًا علميًا حساسًا مثل إدمان الهواتف في قالب درامي مشوق وسهل الوصول. القصة المصورة تتيح مزج المشاعر بالأفكار، وتسمح للقارئ أن "يرى نفسه" داخل المشهد لا أن يُحاضر عليه. كما أنها تُخفض الحواجز النفسية مع المفاهيم العلاجية، وتجعل الوعي أكثر قربًا من القلب.

### لماذا أسلوب الكوميكس الهجين بين مارفل والمانجا؟
اعتمدنا أسلوبًا بصريًا هجينًا يمزج بين الظلّانية القوية والأسلوب الواقعي الغربي (على غرار Marvel وVertigo)، وبين الرمزية اللونية الحادة المستوحاة من المانجا اليابانية، وذلك استنادًا إلى تحليل اهتمام الفئة المستهدفة (المراهقين) التي تميل بطبيعتها لهذا النوع من القصص المصورة، كما ظهر في تفضيلاتهم ومنشوراتهم على منصات التواصل.
التناقض البصري هنا لا يهدف فقط إلى الجمال الفني، بل يعكس الازدواج النفسي الداخلي الذي تعانيه الشخصيات بين الضوء الأزرق البارد: يرمز إلى العزلة الرقمية، الإدمان، والتشتت. والضوء الأصفر الدافئ: يرمز إلى الأسرة، التعافي، وعودة الحضور الذهني والوجداني.
ولم يكن هذا التناسق اللوني مقتصرًا على الرواية فقط، بل تم توظيفه بوعي في كافة المخرجات المرئية للمشروع – من إنفوجرافات إلى فيديوجرافات – ليخلق هوية بصرية متكاملة ومؤثرة.
وقد تم اختيار المشهد الختامي من الرواية ليكون صورة الغلاف الرسمي، حيث تظهر فريدة في لحظة رمزية، ترفع وردتها البيضاء نحو الشمس بينما هاتفها مطروح على الأرض بشاشته المظلمة، في تعبير بصري واضح عن انتصارها على الإدمان الرقمي وعودتها لنفسها.

### 🤖 لماذا الذكاء الاصطناعي؟
لأن المشروع يعالج ظاهرة رقمية نشأت داخل بيئة رقمية، كان من المنطقي أن يتم تصميمه بأدوات رقمية متقدمة. كما أن الجيل المستهدف هو الجيل الأكثر ارتباطًا بالذكاء الاصطناعي، وفضولًا نحوه، وانجذابًا لفكرته، مما جعله وسيلة مثالية للتفاعل معهم بلغتهم المعاصرة.
تم الاعتماد على الذكاء الاصطناعي في  توليد الصور بأسلوب الرواية البصري وصياغة المحتوى والحوار العلمي والدرامي وبناء الموقع الاليكتروني والأدوات التفاعلية والمساعد الذكي.
لكن الأهم أننا لم نستخدم الذكاء الاصطناعي كبديل عن التفكير أو الإبداع البشري، بل كأداة تمكينية عززت إنتاجنا، وساعدتنا على التركيز في بناء قصة متماسكة، موثقة علميًا، مدعّمة بأدوات قياس واقعية وسهلة التفاعل.
بهذا الشكل، لم يكن الذكاء الاصطناعي مجرد تقنية، بل وسيطًا فكريًا سمح لنا بتقديم تجربة حديثة، متكاملة، وتليق بجمهور رقمي يبحث عن العمق والابتكار معًا.

**كل عنصر في المشروع – من القصة المصورة، مرورًا بالأسلوب البصري، وانتهاءً بالتقنيات الذكية – تم اختياره بعناية ليخدم رسالة إنسانية معاصرة ووسيط تواصلي فني مناسب للفئة المستهدفة ومحتوى علمي مبسّط وعميق في آنٍ واحد**

## ثانيًا: مخرجات المشروع الرقمية

### القصة المصورة (Webtoon)
هي المحور الأساسي للمشروع، مكتوبة بأسلوب روائي درامي، ومقسمة إلى ثمانية فصول نفسية. تضم 86 لوحة مرسومة بتقنية التمرير العمودي (Vertical Scroll)، وتُصاحب كل فصل ملحق علمي مبسّط يشرح الظواهر النفسية والسلوكية التي مرت بها البطلة.

### أدوات القياس التفاعلي
* اختبار Nomophobia: لقياس التعلّق النفسي بالهاتف.
* اختبار ساعات الاستخدام: يحلل العادات الرقمية ويقدم نتائج فورية.

### أدوات المحتوى الذكي
* المساعد الذكي (AI Assistant): يجيب على استفسارات المستخدمين حول الإدمان الرقمي والتوازن النفسي.
* أداة AI Comics: تتيح توليد صور بأسلوب الرواية لتعزيز المشاركة البصرية والفكرية.

### مكتبة الرؤى والمفاهيم العلمية
* مقالات مبسطة عن الصحة النفسية والسلوك الرقمي.
* إحصائيات وبيانات حديثة عن سلوك المراهقين أمام الشاشات.
* إنفوجراف وفيديوجراف توعوي بأسلوب الرواية.
* ملحقات علمية بعد كل فصل توضح المفاهيم العلمية والنفسية المرتبطة بالأحداث.

### قسم آراء الزوّار والخبراء
مساحة تفاعلية لعرض انطباعات وتجارب الإعلاميين، أساتذة الإعلام، والصحفيين المتخصصين في القضايا الرقمية، إلى جانب آراء الأطباء النفسيين، التربويين، وأولياء الأمور حول مدى تأثير الرواية، وتفاعل الجمهور مع أدوات المشروع.

## ثالثًا: فريق العمل والإشراف

### إعداد وتنفيذ:
* **محمد عبد الستار (Sattar):** مؤسس الفكرة، مطوّر Full-Stack، مسؤول عن بناء المنصة، دمج الذكاء الاصطناعي، والهوية البصرية.
* **فاطمة فهمي:** مديرة إدارة السوشيال ميديا والتسويق الرقمي، ومخرجة النسخة المطبوعة النهائية.
* **محمود فليفل:** صاحب فكرة القصة والسيناريو الأولي، ومخرج البودكاست، ومسؤول التصور القصصي العام.

### تحت إشراف:
* أ.د/ سحر مصطفى – أستاذ ورئيس قسم الإذاعة والتلفزيون.
* د/ سماح الشهاوي – مدرس بقسم الإذاعة والتلفزيون.

### شكر خاص:
لكل من آمن بأن القصة قادرة على التغيير... وأن الهاتف ليس دائمًا انعكاسًا للذات.

## رابعًا: التقنيات المستخدمة

* **Google AI Studio (Gemini Builder):** تم استخدامه في بناء الأدوات التفاعلية داخل الموقع، بما في ذلك اختبار الإدمان الرقمي، المساعد الذكي، وتطوير الواجهة باستخدام React وTailwind CSS، لضمان تجربة مرنة، سريعة، ومتجاوبة.
* **Google Gemini Nano:** لتوليد الصور داخل بستايل الكوميكس بالذكاء الاصطناعي.
* **ChatGPT:** لتوليد النصوص والحوار وصياغة برومبتات الصور بالذكاء الاصطناعي.
* **Veo3:** لتوليد الفيديوهات بالذكاء الاصطناعي.
* **ElevenLabs:** لتوليد الاصوات و الفويس اوفر بالذكاء الاصطناعي.
* **Suno:** لتوليد الموسيقي و الاغاني بالذكاء الاصطناعي.
* **CapCut:** لتحرير الفيديوهات القصيرة.
* **Canva:** لتصميم الإنفوجرافات والمواد البصرية.
* **Zoom:** لتسجيل بودكاستات حوارية متصلة بأحداث الرواية.
`
  }
};
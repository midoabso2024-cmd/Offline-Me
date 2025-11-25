
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
    testimonialsSubtitle_nav: 'عن رحلتهم في الإدمان الرقمي',
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
            images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"]
        },
        { 
            id: 1, 
            title: 'الفصل الأول: الهروب إلى الضوء الأزرق', 
            summary: 'في ظل صمت موحش، تجلس فريدة على مائدة العشاء منعزلة تمامًا عن عائلتها، غارقة في الضوء الأزرق لهاتفها، بينما يراقبها والدها بعجز وألم.', 
            fullContent: chapter1AR,
            images: [
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/585421236_122103244581122002_5510319638998045162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qVHVbDPjrJkQ7kNvwEIrnsK&_nc_oc=AdnpNmdbSuGRxcvbSK4ZfDqiX5KcVRp-EjJ3APoZbHflwE31DRC4FtRQTe0axH2XTrg&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfjiWOJcXQBEmXw_TE0FQdrpBriBOqajC6jLu4sxCuR-pQ&oe=6925643C",
                "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/585558521_122103244473122002_3370008520812185552_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zjuSu0EGIcEQ7kNvwF0vqB7&_nc_oc=AdmP9vPxWll33yDZI4QyHJWP0Rj5o5IA_HKfXutepRX4HIVtAO_5UCF6NAyYYFS45jg&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfjzNTVehaMflKNqyA1LW7_AODTs2s8o3dUsFsuhD2q_ww&oe=69255945",
                "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/587208727_122103244389122002_7281313954621388638_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=thks_NSfGoIQ7kNvwFax91T&_nc_oc=AdknC2f8Opj1JFXLNEGspw7Y904dTcSs2BlOlSIV5cKF9UvCSMvpekucuox5YzHZyDU&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_Afixd5e8aMld--z_e039dlBvOv6g1ny8yn9Wg5HNgTet7Q&oe=6925542F",
                "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/585791088_122103244629122002_2044412549461639064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9CJYXU897hUQ7kNvwEjR1dU&_nc_oc=AdnA-l3W--6QM344EYvlQfXRDKNxsUfJEbIZWBK0OXarlmcjMYCEhVE70F7Pk1jd1zQ&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfirD_2zrBxRU-5WNsnVrKVJkbkKbUrrBiPHEZDAtsJmOQ&oe=69255D60"
            ]
        },
        { id: 2, title: 'الفصل الثاني: صرخة في وادي السيليكون', summary: 'يتعمق الانفصال عندما ترفض فريدة زيارة عائلية بسبب ضعف الإنترنت، وتكشف عن صرخة يائسة للمساعدة في منشور قديم لم يفهمه أحد.', fullContent: chapter2AR },
        { id: 3, title: 'الفصل الثالث: السقوط الحر', summary: 'تتصاعد حالة فريدة إلى غيبوبة نفسية، حيث تفشل في الاستجابة لمعلمها وتكتشف رسوبها، لكن الصدمة الحقيقية تأتي من خبر مأساوي عن طالبة أخرى.', fullContent: chapter3AR },
        { id: 4, title: 'الفصل الرابع: شظايا المرآة السوداء', summary: 'يواجه الأب فريدة بكذبها، وفي ذروة الغضب، يحطم هاتفها. هذا الانهيار المادي يطلق العنان لانهيار عاطفي كامل، وتدرك فريدة الحقيقة المأساوية وراء نداءاتها الصامتة.', fullContent: chapter4AR },
        { id: 5, title: 'الفصل الخامس: العودة إلى الحياة (Offline)', summary: 'تبدأ المصالحة بدعم صامت من الأم، تليها خطوات عملية نحو التعافي. حوار صادق مع الأب يعيد بناء الثقة، ويضع قواعد جديدة لمستقبل أفضل.', fullContent: chapter5AR },
        { id: 6, title: 'الفصل السادس: البذرة الجديدة (الفعل المشترك)', summary: 'تتحول المصالحة إلى فعل مشترك، حيث تزرع العائلة وردة بيضاء كرمز للأمل. تبدأ فريدة في تحقيق انتصارات صغيرة، وتعود الأجواء الدافئة إلى مائدة العشاء.', fullContent: chapter6AR },
        { id: 7, title: 'الفصل السابع: المواجهة (الإعلان عن الانتصار)', summary: 'تعلن فريدة انتصارها في عرض تقديمي مؤثر، محولةً قصتها الشخصية إلى مصدر إلهام للآخرين. لم تعد ضحية، بل أصبحت مرشدة تساعد الآخرين في رحلتهم.', fullContent: chapter7AR },
        { id: 8, title: 'الفصل الثامن: الهدوء (الإزهار الحقيقي)', summary: 'يعود الهدوء والتوازن إلى حياة العائلة. في مشهد ختامي رمزي، تقف فريدة على السطح، والوردة البيضاء قد أزهرت بالكامل، رمزًا لحياتها الجديدة المكتملة.', fullContent: chapter8AR },
    ],
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
    testimonialsTitle: 'ماذا قالوا عن رحلتهم؟',
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
        quote: 'مشروع متكامل وشيق ومتشوقة لمعرفة نهاية القصة. أدعم فريق العمل وتمنياتي لكم بالتوفيق.',
        author: 'أ/ رشا فهمي - إعلامية ومذيعة بالتلفزيون المصري'
      },
      { 
        quote: 'الإنتاج الفني فعلاً بالذكاء الاصطناعي ولكن فكرة القصة تمس بشكل مباشر واقعنا الحالي. بذلنا الكثير من المجهود فريقي وأنا للخروج بشكل متكامل للمشروع، بفضل ما تعلمناه من أساتذة الإعلام بكلية الإعلام جامعة القاهرة.',
        author: 'محمد عبد الستار - مؤسس المشروع'
      },
      {
        quote: 'من أقوى القصص اللي بتكشف إزاي الإدمان الرقمي ممكن يسحب حياتنا من غير ما نحس. رحلة البطلة من السقوط للنجاح مكتوبة بصدق، ونقطة التحوّل مؤثرة وعميقة جدًا. قصة تستحق المشاهدة… لأنها بتحكي عننا كلنا.',
        author: 'أ/ فاطمة فهمى الجهينى - منسق أول بشركة NJT'
      },
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
    aboutProjectContent: `## اولا: الهوية والرسالة الأساسية
**"Offline-Me: فصلت عشان أعيش" هو مشروع تخرج رقمي متكامل يهدف إلى معالجة ظاهرة إدمان الهواتف الذكية (Nomophobia) والعزلة الاجتماعية الناتجة عنها، وذلك من خلال منهجية فريدة تجمع بين السرد القصصي البصري العميق و المحتوى التوعوي التفاعلي المُعزَّز بالذكاء الاصطناعي.**
*   القصة المحورية: تتبع المنصة الرحلة الدرامية للبطلة فريدة (17 عامًا) على مدى ثمانية فصول، حيث تتصاعد عزلتها الرقمية، وتؤدي إلى الانهيار، لتنتهي رحلتها بالتعافي واكتساب التوازن.
*   الأسلوب الفني والإخراجي: يعتمد المشروع على أسلوب بصري هجين (Hybrid Aesthetic) يمزج بين الظلال الحادة والواقعية القوية (Marvel/Vertigo Style) وبين الرمزية اللونية المأخوذة من المانجا. التناقض البصري هو جوهر القصة: الضوء الأزرق البارد (رمز الإدمان والعزلة) مقابل الضوء الأصفر الدافئ (رمز العائلة والتعافي).
## ثانيا: مخرجات المشروع الرقمية والوظيفية
**تم تصميم الموقع ليكون امتدادًا حيويًا للقصة، حيث يجمع بين الفن والوظيفة والتفاعل:**
*   القصة المصورة المتسلسلة (Webtoon): العرض البصري لـ 49 لوحة فنية عالية الدقة، مُنفَّذة بأسلوب التمرير العمودي (Vertical Scroll) لتعزيز الإيقاع الدرامي.
*   مركز القياس التفاعلي: يضم الموقع اختبارين لتقييم سلوك المستخدم:
    *   اختبار Nomophobia التفاعلي: أداة لتقييم مستوى إدمان الموبايل (10 أسئلة).
    *   اختبار ساعات الاستخدام: أداة لقياس عدد الساعات التي يقضيها المستخدم على هاتفه، مع تقديم رؤى تحليلية فورية.
*   أقسام المحتوى التفاعلي: يتضمن الموقع أقسامًا مُتخصصة مثل "بيانات ورؤى" (للمعلومات والنصائح المدعمة بالحقائق)، "تصفح المكتبة" (للمقالات والتجارب السابقة)، وأداة المساعد الذكي (AI Assistant) للإجابة على استفسارات المستخدمين حول الإدمان الرقمي.
*   أداة رسم الصور (AI Comic Generator): تم تصميم أداة ذكاء اصطناعي لرسم الصور على طريقة قصتنا المصورة (الأسلوب الهجين) كأحد مخرجات المشروع.
*   الانتشار الرقمي: إنشاء محتوى رقمي متكامل (إنفوجرافيك، فيديوجرافيك، فيديوهات قصصية) وربطه بصفحات السوشيال ميديا للمشروع.
## ثالثا: طاقم العمل والإشراف الأكاديمي
**هذا المشروع هو نتاج جهود فريق من طلاب ماجستير الإعلام الرقمي والأمن المعلوماتي بكلية الإعلام، جامعة القاهرة، دفعة 2025/2026.**
*   الإشراف الأكاديمي: تم المشروع تحت إشراف الدكتورة سحر مصطفي والدكتورة سماح الشهاوي.
*   فريق التنفيذ: تكون فريق المشروع من ثلاثة أعضاء، حيث تولى كل منهم محورًا تخصصيًا:
    *   محمد عبد الستار: مهندس الحلول التكنولوجية والذكاء الاصطناعي (AI Solutions Architect)؛ مسؤول عن التوليد البصري والتقني للقصة (صور، محتوى، وبناء البنية التحتية للموقع).
    *   محمود فليفل: صانع المحتوى السردي والدرامي (Narrative Content Developer)؛ مسؤول عن الرؤية القصصية، وكتابة السيناريو الأدبي والإخراج الدرامي (وكذلك سيناريوهات حلقات البودكاست).
    *   فاطمة فهمي: قائد إدارة المشروع والتسويق الرقمي (Digital Marketing & Project Governance)؛ مسؤولة عن تنظيم سير العمل، وإدارة الحملات الترويجية عبر السوشيال ميديا.
**الهدف النهائي: يهدف مشروع "Offline-Me" إلى تحويل السرد القصصي إلى أداة للتوعية والتحفيز، ليُثبت أن فهم الأزمة والاعتراف بها هو الخطوة الأولى نحو إيجاد التوازن واستعادة الحياة الحقيقية.**`,
  },
  en: {
    // General
    tagline: 'Offline-Me\nDisconnected to Live',
    subTagline: 'A contemporary novel blending literary narrative with scientific analysis, diving into the depths of phone addiction and our disconnection from reality, through a poignant psychological human story. Explore the novel\'s world, test your digital addiction, and learn psychological balance through simplified scientific articles.',
    mainQuote: 'Story: Offline-Me',
    subQuote: 'Join a unique journey to restore balance and connect with reality.',
    ctaReadStory: 'Read the Full Story',
    quizSectionTitle: 'Test Yourself: Are You a Phone Addict?',
    quizSectionSubtitle: 'Discover how attached you are to your phone with this short quiz and get insights into your digital habits.',
    quizSectionCTA: 'Start the Quiz',
    readChapterButton: 'Read Chapter',
    backToArchive: 'Back to Archive',
    watchIllustratedStory: 'Watch the Illustrated Story',
    byAuthor: 'By: {author}',
    readMore: 'Read More',
    backToLibrary: 'Back to Library',
    age: '{age} years old',
    prevChapter: 'Previous Chapter',
    nextChapter: 'Next Chapter',
    allChapters: 'Browse All Chapters',
    chapterLabel: 'Ch. {id}',
    introLabel: 'Introduction',
    loadingContent: 'Loading...',

    // Page Titles
    pageTitle_home: 'Home',
    pageTitle_story: 'The Story',
    pageTitle_insights: 'Data & Insights',
    pageTitle_interactive: 'Test Yourself',
    pageTitle_explore: 'Library',
    pageTitle_about: 'About the Project',
    
    // Quick Access Toolbar
    quickAccessChatbot: 'AI Assistant',
    quickAccessStudio: 'Studio',
    quickAccessExplore: 'Explore',
    quickAccessAbout: 'About Project',
    quickAccessTestimonials: 'Testimonials',
    testimonialsSubtitle_nav: 'About their journey in digital addiction',
    aboutSubtitle: 'More about the project and its creators',
    aboutIntroTitle: 'About The Project',
    aboutIntroText: 'An integrated digital project addressing smartphone addiction through visual storytelling and interactive AI-enhanced content.',
    aboutIntroButton: 'Learn more about the project and its creators',
    aboutFacultyLogoAlt: 'Faculty of Mass Communication - Cairo University Logo',
    exploreTheStory: 'Read the Story',
    exploreProjectSections: 'Project Sections',

    // Header Navigation
    navHome: 'Home',
    navStory: 'Story',
    navInsights: 'Insights',
    navInteractive: 'Interactive',
    navLibrary: 'Library',
    navAbout: 'About',
    navChatbot: 'AI Assistant',
    navStudio: 'Studio',
    navTestimonials: 'Testimonials',

    // Story Archive & Characters
    storyArchiveTitle: 'Story Archive',
    storyArchiveSubtitle: 'Browse the chapters of the "Offline-Me" illustrated story.',
    characterProfilesTitle: 'Story Characters and Their Roles',
    characters: [
      { id: 'farida', name: 'Farida', age: 17, role: 'The protagonist in a struggle with herself', description: 'A smart and talented young woman who has fallen into the trap of digital isolation, searching for a way back to her real life.' },
      { id: 'father', name: 'Mohammed (Father)', age: 50, role: 'Suppressed sorrow and a firm decision', description: 'Symbolizes regret for letting things get this far, and making a tough decision for the love of his daughter.' },
      { id: 'mother', name: 'Laila (Mother)', age: 45, role: 'Unconditional support and containment', description: 'Represents the compassionate heart of the family, offering love and support even in the toughest times.' },
      { id: 'omar', name: 'Omar (Brother)', age: 12, role: 'Innocent attempts and sincere communication', description: 'Represents innocence and an attempt to understand what is happening, offering simple ways to reconnect with his sister.' },
    ],
    storyChapters: [
        {
            id: 0,
            title: 'Introduction: Who are we when we turn off the screen?',
            summary: 'Offline-Me is not just a story, but a mirror of the reality of a whole generation stuck between digital isolation and self-discovery.',
            fullContent: `When the phone turns from a means of communication into a hidden shackle, and when life is measured by the number of likes instead of the number of honest moments, the need becomes urgent to ask an existential question: Who are we when we close the screen? And who do we remain if we disconnect the internet?
The novel Offline-Me is not just the story of a teenage girl named "Farida", but rather a mirror of the reality of an entire generation stuck between digital isolation and the search for self. In its lines, psychological tensions are mixed with daily situations, and literary imagination intertwines with precise scientific analysis, in a realistic dramatic narrative that is not without an imaginary and cinematic dimension, inspired by the spirit of visual writing for the style of Egyptian novels.
The novel was built on solid scientific ground, where more than 30 psychological and technological terms and concepts supported by reliable references were employed. Scientific terms were not just parallel information, but active elements in the development of the narrative, and a key to understanding the characters' decisions and psychological transformations.
Each chapter in the novel ends with a simplified scientific appendix, explaining the psychological, behavioral and technological concepts embodied in the events. When Farida cries from a sarcastic comment on the Internet, we discover scientifically the effect of the "dopamine loop". And when she is forced to abandon her phone, we read about "digital withdrawal symptoms" as classified by behavioral psychology.
This is not just a novel, but an integrated psychological educational experience, trying to restore the natural relationship between humans and technology. It does not blame the device, but sides with awareness, moderation, and the ability to choose.`,
            images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"]
        },
        { 
            id: 1, 
            title: 'Chapter 1: Escape to the Blue Light', 
            summary: 'A silent family dinner highlights 17-year-old Farida\'s digital isolation, her father\'s pain, and her room\'s visual split between reality and social media.', 
            fullContent: chapter1EN,
            images: [
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/585421236_122103244581122002_5510319638998045162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qVHVbDPjrJkQ7kNvwEIrnsK&_nc_oc=AdnpNmdbSuGRxcvbSK4ZfDqiX5KcVRp-EjJ3APoZbHflwE31DRC4FtRQTe0axH2XTrg&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfjiWOJcXQBEmXw_TE0FQdrpBriBOqajC6jLu4sxCuR-pQ&oe=6925643C",
                "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/585558521_122103244473122002_3370008520812185552_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zjuSu0EGIcEQ7kNvwF0vqB7&_nc_oc=AdmP9vPxWll33yDZI4QyHJWP0Rj5o5IA_HKfXutepRX4HIVtAO_5UCF6NAyYYFS45jg&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfjzNTVehaMflKNqyA1LW7_AODTs2s8o3dUsFsuhD2q_ww&oe=69255945",
                "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/587208727_122103244389122002_7281313954621388638_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=thks_NSfGoIQ7kNvwFax91T&_nc_oc=AdknC2f8Opj1JFXLNEGspw7Y904dTcSs2BlOlSIV5cKF9UvCSMvpekucuox5YzHZyDU&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_Afixd5e8aMld--z_e039dlBvOv6g1ny8yn9Wg5HNgTet7Q&oe=6925542F",
                "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/585791088_122103244629122002_2044412549461639064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9CJYXU897hUQ7kNvwEjR1dU&_nc_oc=AdnA-l3W--6QM344EYvlQfXRDKNxsUfJEbIZWBK0OXarlmcjMYCEhVE70F7Pk1jd1zQ&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=9r409FICO8aK9o7EKmEPIQ&oh=00_AfirD_2zrBxRU-5WNsnVrKVJkbkKbUrrBiPHEZDAtsJmOQ&oe=69255D60"
            ]
        },
        { id: 2, title: 'Chapter 2: A Scream in Silicon Valley', summary: 'Farida\'s disconnect deepens as she prioritizes internet over family, while an old, cryptic post reveals her silent cry for help.', fullContent: chapter2EN },
        { id: 3, title: 'Chapter 3: Free Fall', summary: 'Farida\'s dissociation intensifies into a "psychological coma," leading to her failing a class, but a tragic news about another student serves as a shocking wake-up call.', fullContent: chapter3EN },
        { id: 4, title: 'Chapter 4: Shards of the Black Mirror', summary: 'The conflict peaks when Farida\'s father confronts her lies and smashes her phone, triggering a complete emotional breakdown and a painful realization for Farida.', fullContent: chapter4EN },
        { id: 5, title: 'Chapter 5: Return to Life (Offline)', summary: 'The family begins a slow reconciliation with a new "no-screen" rule, leading to an honest, trust-rebuilding conversation between Farida and her father.', fullContent: chapter5EN },
        { id: 6, title: 'Chapter 6: The New Seed (Shared Action)', summary: 'The family\'s healing becomes a shared activity as they plant a white rose, a tangible symbol of their new beginning and hope. Farida achieves small victories, and warmth returns to the dinner table.', fullContent: chapter6EN },
        { id: 7, title: 'Chapter 7: The Confrontation (Declaring Victory)', summary: 'Farida publicly shares her story in a powerful school presentation, transforming her personal struggle into a source of inspiration and guidance for others.', fullContent: chapter7EN },
        { id: 8, title: 'Chapter 8: The Calm (True Blooming)', summary: 'A new calm settles over the family. The story concludes with Farida on the rooftop at sunset, her white rose in full bloom, symbolizing her renewed life.', fullContent: chapter8EN },
    ],

    // Insights Zone
    insightsZoneTitle: 'Data & Insights',
    insightsZoneSubtitle: 'Facts and figures to help you better understand the impact of screens on our lives.',
    infographic_emotional: {
      title: 'Psychological and Emotional Impact',
      points: [
        '<b>Increased Anxiety and Depression:</b> Studies have linked excessive phone use to higher rates of anxiety and depression, especially among teenagers.',
        '<b>Sleep Disturbances:</b> The blue light emitted from screens disrupts melatonin production, affecting sleep quality.',
        '<b>Poor Concentration:</b> Constant task-switching and notifications reduce the brain\'s ability for deep focus.',
        '<b>Feelings of Loneliness:</b> Despite digital connection, excessive use can lead to social isolation in the real world.'
      ],
      conclusion: 'Your mental health is the priority.'
    },
    infographic_nomophobia: {
      title: 'What is "Nomophobia"?',
      points: [
        '<b>Definition:</b> It stands for "No-Mobile-Phobia," and it means the fear of being without a mobile phone or unable to use it.',
        '<b>Symptoms:</b> Include severe anxiety, stress when the battery runs low or signal is lost, and compulsive checking of the phone.',
        '<b>Prevalence:</b> Nearly 66% of the population suffers from some form of nomophobia.',
        '<b>The Solution:</b> It starts with acknowledging the problem and gradually implementing "digital detox" periods.'
      ],
      conclusion: 'Freedom from fear begins with awareness.'
    },
    infographic_global: {
      title: 'Global Statistics',
      points: [
        '<b>Average Usage:</b> The average person spends about <b>3 hours and 15 minutes</b> on their phone daily.',
        '<b>Number of Touches:</b> We touch our phones an average of <b>2,617 times</b> per day.',
        '<b>Phone Checking:</b> 58% of smartphone users check their phones every hour, even during the night.',
        '<b>Generation Z:</b> Members of this generation spend up to <b>9 hours</b> a day in front of screens.'
      ],
      conclusion: 'The numbers don\'t lie, it\'s time for a review.'
    },
    infographic_recovery: {
      title: 'The Path to Recovery',
      points: [
        '<b>Small Steps:</b> Start by setting phone-free zones or times (like the bedroom or during meals).',
        '<b>Turn Off Notifications:</b> Disable all non-essential notifications to reduce interruptions.',
        '<b>Healthy Alternatives:</b> Find hobbies and activities that don\'t require screens to fill your free time.',
        '<b>Seek Support:</b> Talk to friends, family, or a professional if you feel you\'ve lost control.'
      ],
      conclusion: 'Recovery is a journey, and every step matters.'
    },
    infographic_tips: {
      title: '5 Simple Steps to Reduce Screen Time',
      points: [
        '<b>Track Your Time:</b> Use built-in apps to see where your digital time goes. Awareness is the first step.',
        '<b>Schedule "Screen-Free" Times:</b> Dedicate at least one hour per day without any screens.',
        '<b>Organize Your Home Screen:</b> Remove distracting apps from your home screen and place them in folders.',
        '<b>Use "Grayscale" Mode:</b> It makes the screen less appealing and reduces the urge to scroll.',
        '<b>Charge Your Phone Outside the Bedroom:</b> Invest in a traditional alarm clock to avoid using your phone right before sleep and after waking up.'
      ],
      conclusion: 'Controlling your day starts with controlling your screen.'
    },
    infographic_physical: {
        title: 'The Physical Impact of Screen Time',
        points: [
            '<b>Digital Eye Strain:</b> Causes dry eyes, blurred vision, and headaches from constant staring at screens.',
            '<b>"Text Neck":</b> Bending over the phone puts severe pressure on the neck and spine, causing chronic pain.',
            '<b>Hand and Wrist Pain:</b> Repetitive use can lead to tendonitis and carpal tunnel syndrome.',
            '<b>Sedentary Lifestyle:</b> Prolonged sitting increases the risk of obesity and heart disease.'
        ],
        conclusion: 'Your body deserves a break from the screen.'
    },
    // New Infographics
    infographic_definition_teen: {
        title: 'What is Mobile Addiction?',
        points: [
            '<b>Excessive Attachment:</b> Intense and constant attachment to the phone affecting life negatively.',
            '<b>Lack of Control:</b> Difficulty limiting use even at inappropriate times.',
            '<b>Separation Anxiety:</b> Feeling stressed and upset if the phone is out of reach (Nomophobia).',
            '<b>Neglecting Responsibilities:</b> Preoccupation with the phone to the point of neglecting duties and social activities.'
        ],
        conclusion: 'Understanding the problem is half the solution.'
    },
    infographic_psych_impact: {
        title: 'Psychological Effects',
        points: [
            '<b>Constant Anxiety & Stress:</b> Excessive use raises anxiety levels, especially with constant notifications.',
            '<b>Depression & Loneliness:</b> Isolation caused by phone use may foster feelings of loneliness and sadness.',
            '<b>Low Self-Confidence:</b> Comparing oneself to others on social media shakes self-image.'
        ],
        conclusion: 'Don\'t let the screen define your worth.'
    },
    infographic_academic_impact: {
        title: 'Impact on Academic Achievement',
        points: [
            '<b>Distraction & Poor Focus:</b> Checking notifications weakens the ability to focus on lessons.',
            '<b>Decline in Performance:</b> Reduces study time and leads to lower grades.',
            '<b>Procrastination:</b> Preoccupation with the phone leads to piling up of schoolwork.'
        ],
        conclusion: 'Your future is more important than a new "notification".'
    },
    infographic_social_impact: {
        title: 'Social Effects',
        points: [
            '<b>Isolation:</b> Spending time with the phone instead of interacting with family and friends.',
            '<b>Poor Communication Skills:</b> Hinders the development of face-to-face expression and empathy.',
            '<b>Family Conflicts:</b> Clashes with parents over usage times.',
            '<b>Cyber Risks:</b> Increased likelihood of exposure to bullying or inappropriate content.'
        ],
        conclusion: 'Real connection doesn\'t need "Wi-Fi".'
    },
    infographic_behavior_signs: {
        title: 'Addiction-Related Behaviors',
        points: [
            '<b>Secretive Use:</b> Hiding the extent of usage from parents to avoid blame.',
            '<b>Checking Obsession:</b> Urgent desire to see notifications as soon as they arrive.',
            '<b>Agitation when Restricted:</b> Nervousness and anger if the internet is cut off or the phone is taken away.',
            '<b>Neglecting Hobbies:</b> Preferring the phone over previously enjoyable activities.'
        ],
        conclusion: 'Monitor your behavior before it controls you.'
    },
    infographic_health_teen: {
        title: 'Health Effects',
        points: [
            '<b>Eye Strain & Headaches:</b> Prolonged staring causes dry eyes and headaches.',
            '<b>Neck & Back Pain:</b> Constant neck bending puts pressure on vertebrae.',
            '<b>Inactivity:</b> Lack of movement increases risk of obesity and poor fitness.',
            '<b>Sleep Disorders:</b> Blue light disrupts the biological clock and causes insomnia.'
        ],
        conclusion: 'Health is a crown on the heads of the healthy.'
    },
    infographic_time_impact: {
        title: 'Impact on Time Management',
        points: [
            '<b>Time Loss:</b> Hours pass unnoticed while switching between apps.',
            '<b>Procrastination:</b> Delaying necessary tasks due to entertainment distraction.',
            '<b>Routine Disruption:</b> Staying up late and waking up with difficulty, disrupting the day.',
            '<b>Lower Productivity:</b> Distraction reduces the quality and speed of task completion.'
        ],
        conclusion: 'Time is your most valuable asset.'
    },
    infographic_causes: {
        title: 'Causes & Drivers of Addiction',
        points: [
            '<b>Boredom & Loneliness:</b> Using the phone to fill emotional or time voids.',
            '<b>FOMO:</b> Fear of missing out on an important event or news.',
            '<b>App Attraction:</b> Apps designed to grab attention and keep you connected.',
            '<b>Escaping Stress:</b> A means to relieve tension or escape family problems.'
        ],
        conclusion: 'Treat the cause, the symptom disappears.'
    },
    infographic_tips_teen: {
        title: 'Tips to Overcome Addiction',
        points: [
            '<b>Stop Notifications:</b> Turn off unnecessary app alerts to reduce distraction.',
            '<b>Phone-Free Times:</b> Set daily periods without a phone (during meals, before sleep).',
            '<b>Delete Distractions:</b> Get rid of time-consuming apps like excessive games.',
            '<b>Keep Away at Sleep:</b> Don\'t use the phone in bed to avoid staying up late.',
            '<b>Tracking Apps:</b> Use tools to regulate daily usage time.'
        ],
        conclusion: 'Start with a small step today.'
    },
    infographic_parents_role: {
        title: 'Role of Parents',
        points: [
            '<b>Open Communication:</b> Calm dialogue with the teenager without harsh criticism.',
            '<b>Clear Boundaries:</b> Agreeing on usage hours and rules (e.g., no phone during study).',
            '<b>Good Role Model:</b> Parents should exemplify moderate usage.',
            '<b>Encouraging Alternatives:</b> Providing recreational and social activities away from the screen.'
        ],
        conclusion: 'Family support is the first line of defense.'
    },
    // Interactive Zone
    interactiveZoneTitle: 'Test Yourself',
    interactiveZoneSubtitle: 'Interactive tools to help you assess and understand your digital habits.',
    quizTitle: 'Digital Addiction Test',
    quizCardSubtitle: 'Are you in control of your phone, or is it controlling you? Discover the truth now.',
    quizProgress: 'Question {current} of {total}',
    quizQuestions: [
      { question: 'Is the first thing you do when you wake up to check your phone?', options: [{ text: 'Always', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'Rarely', score: 1 }] },
      { question: 'Do you feel anxious or stressed when your phone battery is low?', options: [{ text: 'Yes, very much', score: 3 }, { text: 'A little', score: 2 }, { text: 'I don\'t care', score: 1 }] },
      { question: 'Do you use your phone while eating meals with others?', options: [{ text: 'Often', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'Very rarely', score: 1 }] },
      { question: 'Do you find it difficult to concentrate on one task without checking your phone?', options: [{ text: 'Yes, constantly', score: 3 }, { text: 'Somewhat', score: 2 }, { text: 'No, I can focus', score: 1 }] },
      { question: 'Do you prefer to spend your free time scrolling on your phone rather than doing another hobby?', options: [{ text: 'Yes, most of the time', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'Rarely', score: 1 }] },
      { question: 'Does your phone use affect your sleep quality (e.g., staying up late)?', options: [{ text: 'Yes, significantly', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'No, it doesn\'t affect it', score: 1 }] },
      { question: 'Have you felt guilty or annoyed about the amount of time you spend on your phone?', options: [{ text: 'Yes, a lot', score: 3 }, { text: 'A little', score: 2 }, { text: 'I haven\'t felt that', score: 1 }] },
      { question: 'Have you tried to reduce your phone use and failed?', options: [{ text: 'Yes, several times', score: 3 }, { text: 'I tried once', score: 2 }, { text: 'I haven\'t tried', score: 1 }] },
      { question: 'Has your phone use negatively affected your personal relationships or work/studies?', options: [{ text: 'Yes, noticeably', score: 3 }, { text: 'Maybe a little', score: 2 }, { text: 'No, not at all', score: 1 }] },
      { question: 'Do you feel the need to respond immediately to messages and notifications as soon as they arrive?', options: [{ text: 'Yes, always', score: 3 }, { text: 'Sometimes', score: 2 }, { text: 'No, I can wait', score: 1 }] },
    ],
    quizResults: {
      good: { title: 'Good Control!', description: 'You have a healthy and balanced relationship with your phone. Keep up these great habits!' },
      warning: { title: 'In the Danger Zone', description: 'You have some habits that could lead to excessive attachment. It\'s time to mindfully monitor your usage.' },
      danger: { title: 'High Addiction Level!', description: 'Your phone use is significantly impacting your life. It is crucial to take serious steps to regain control.' },
    },
    retakeQuizButton: 'Retake Quiz',
    quizSeeInsightsButton: 'Insights that may help you regain your balance',
    quizExploreLibraryButton: 'Browse the library to find helpful articles',
    suggestionInsights: 'Data & Insights',
    suggestionLibrary: 'Browse Library',
    suggestionTitle: 'For more information and tips...',
    
    // Usage Tracker (Updated)
    usageTrackerTitle: 'Screen Time Analyst',
    usageTrackerSubtitle: 'Drag the slider to see the real impact of your daily usage.',
    usageHoursLabel: 'hours/day',
    usageStatsTitle: 'What does this mean?',
    usageStatDays: 'Days lost per year',
    usageStatBooks: 'Books you could have read',
    usageStatWalk: 'km you could have walked',
    usageBatteryLabel: 'Real Life Battery',
    usageTrackerAnalysis: {
        safe: { title: 'Safe Zone', desc: 'You are mastering your time. Keep it up!' },
        moderate: { title: 'Warning!', desc: 'Time is slipping away. Try to cut back by one hour.' },
        danger: { title: 'Disconnection Risk', desc: 'You are spending a huge chunk of life online. This is a wake-up call.' },
        extreme: { title: 'Emergency', desc: 'You are practically living inside the screen. Immediate action needed.' }
    },
    
    // Explore Library
    libraryTitle: 'Library',
    librarySubtitle: 'Inspiring articles and stories to help you on your journey to digital balance.',
    catAll: 'All',
    catArticles: 'Articles',
    catStories: 'Inspiring Stories',
    articles: [
        { id: 9, category: 'articles', title: 'Smartphone Addiction in Teenagers: Negative Effects and Ways to Cope', author: 'Mohamed Abd El-Sattar', content: article9EN },
        { id: 1, category: 'articles', title: 'The Psychology of Smartphone Addiction', author: 'Offline-Me Team', content: article1EN },
        { id: 2, category: 'stories', title: 'My Digital Detox Journey', author: 'Inspiring Story', content: article2EN },
        { id: 3, category: 'articles', title: 'The Effect of Blue Light on Sleep and Health', author: 'Simplified Scientific Research', content: article3EN },
        { id: 4, category: 'articles', title: 'Digital Minimalism: A Practical Guide to a More Focused Life', author: 'Offline-Me Team', content: article4EN },
        { id: 5, category: 'articles', title: 'Understanding Fear of Missing Out (FOMO) in the Age of Social Media', author: 'Psychological Analysis', content: article5EN },
        { id: 6, category: 'stories', title: 'Reconnecting with Nature: How I Swapped Scrolling for Hiking', author: 'Inspiring Story', content: article6EN },
        { id: 7, category: 'stories', title: 'The Joy of a "Dumb" Phone Experiment', author: 'Inspiring Story', content: article7EN },
        { id: 8, category: 'stories', title: 'From Likes to Letters: Rediscovering Old Hobbies', author: 'Inspiring Story', content: article8EN },
    ],
    // Chatbot
    chatbotTitle: 'AI Assistant: Offline-Me AI',
    chatbotSubtitle: 'Ask anything about digital balance',
    welcomeMessage: 'Hello! I\'m here to help you on your journey towards digital balance. How can I assist you today?',
    inputPlaceholder: 'Type your message here...',
    sendButton: 'Send',
    faqs: [
      'What is phone addiction?',
      'How can I reduce screen time?',
      'What are the symptoms of nomophobia?',
      'Give me a quick tip.',
      'What is digital minimalism?',
      'How can I help a friend?',
      'What are the physical effects?',
      'How do I start a digital detox?'
    ],
    // Landing Nav Grid
    exploreTitle: 'Explore Project Sections',
    navCardInsightsTitle: 'Data & Insights',
    navCardInsightsDesc: 'Discover important facts and figures about the impact of screens.',
    navCardCharactersTitle: 'Character Profiles',
    navCardCharactersDesc: 'Get to know the heroes of the Offline-Me story and their motivations.',
    navCardLibraryTitle: 'Library',
    navCardLibraryDesc: 'Read inspiring articles and stories about digital balance.',
    navCardInteractiveTitle: 'Test Yourself',
    navCardInteractiveDesc: 'Evaluate your digital habits with interactive tools.',

    // Testimonials
    testimonialsTitle: 'What they said about their journey',
    testimonials: [
       {
            quote: "Truthfully, I am happy with the number of creative people like Mr. Mohamed Abd El-Sattar and his team in our beautiful country, just like many creative youths who truly bring joy. All sincere wishes for success and excellence, God willing.",
            author: "Dr. Yara Abd El-Qawi - Journalist & Media Personality"
        },
        {
            quote: "A digital interactive story with a different perspective... it has meaningful and realistic content that touches us all. You took me on a unique interactive journey where my imagination wandered through the story details... You made me decide to be more mindful of my digital interactions and use AI tools professionally. All respect and appreciation to the whole team.",
            author: "Dr. Mahitab Gamal - Lecturer, Radio & TV Dept - Faculty of Mass Comm - Cairo University"
        },
        {
            quote: "An integrated and interesting project, and I am eager to know the end of the story. I support the team and wish you all the best.",
            author: "Ms. Rasha Fahmy - Media Personality & TV Presenter"
        },
        {
            quote: "The artistic production is indeed AI-generated, but the story idea directly touches our current reality. My team and I exerted a lot of effort to produce an integrated project, thanks to what we learned from the professors at the Faculty of Mass Communication, Cairo University.",
            author: "Mohamed Abd El-Sattar - Project Founder"
        },
        {
            quote: "One of the most powerful stories revealing how digital addiction can drain our lives without us noticing. The protagonist's journey from fall to success is written with honesty. A story worth watching... because it speaks about all of us.",
            author: "Ms. Fatma Fahmy El-Gohary - Senior Coordinator at NJT"
        }
    ],
    
    // Footer
    footerMission: 'A project aimed at raising awareness about digital balance and providing practical tools for a healthier, more connected life.',
    quickLinks: 'Quick Links',
    importantInfo: 'Important Info',
    storyAndArt: 'Story and Art:',
    authors: 'Mohamed Abd El-Sattar - Fatma Fahmy - Mahmoud Fleifel',
    supervisedBy: 'Supervised by:',
    supervisors: 'Dr. Sahar Mostafa - Dr. Samah El-Shahawy',
    disclaimer: 'Disclaimer',
    disclaimerText: 'The content provided on this site is for awareness purposes only and is not a substitute for professional medical or psychological advice.',
    contactUs: 'Contact Us',
    socialFacebook: 'Facebook',
    socialInstagram: 'Instagram',
    socialTiktok: 'Tiktok',
    socialYoutube: 'YouTube',
    copyrightText: '© {year} Offline-Me. All rights reserved. | Sattar82x',

    // Image Studio
    studioTitle: "Offline-Me Studio",
    studioSubtitle: "Create an image in our distinctive story style.",
    studioPlaceholder: "Describe a scene or character from the world of Offline-Me... and I'll draw it for you in the story's style.",
    studioButton: "Draw the Scene",
    studioLoadingMessages: [
        "Inking the shadows...",
        "Farida is choosing colors...",
        "Final touches on the scene...",
        "Blending colors now...",
        "Just a few moments..."
    ],
    studioResultTitle: "Your masterpiece is ready!",
    studioError: "Sorry, something went wrong while creating the image. This might be due to safety policies or a connection issue. Try a different description.",
    studioActionSave: "Save Image",
    studioActionRetry: "Retry",
    studioActionCopy: "Copy Prompt",
    studioActionExpand: "Expand Image",
    studioAspectRatio: "Image Aspect Ratio:",
    aspect_1_1: "Square",
    aspect_4_3: "Landscape",
    aspect_3_4: "Portrait",
    aspect_16_9: "Wide",
    aspect_9_16: "Story",
    
    // About Project
    aboutProjectContent: `## First: Identity and Core Message
**"Offline-Me: Disconnected to Live" is an integrated digital graduation project aimed at addressing the phenomenon of smartphone addiction (Nomophobia) and the resulting social isolation, through a unique methodology that combines deep visual storytelling and interactive educational content enhanced by artificial intelligence.**
*   Core Story: The platform follows the dramatic journey of the protagonist Farida (17 years old) over eight chapters, where her digital isolation escalates, leads to a breakdown, and ends with her recovery and gaining balance.
*   Artistic and Directorial Style: The project relies on a Hybrid Aesthetic that blends sharp shadows and strong realism (Marvel/Vertigo Style) with color symbolism taken from Manga. Visual contrast is the essence of the story: cold blue light (symbol of addiction and isolation) versus warm yellow light (symbol of family and recovery).
## Second: Digital and Functional Project Outputs
**The site is designed to be a vital extension of the story, combining art, function, and interaction:**
*   Serialized Illustrated Story (Webtoon): Visual display of 49 high-resolution art panels, executed in a Vertical Scroll style to enhance dramatic pacing.
*   Interactive Measurement Center: The site includes two tests to assess user behavior:
    *   Interactive Nomophobia Test: A tool to assess the level of mobile addiction (10 questions).
    *   Interactive Usage Hours Test: A tool to measure the number of hours a user spends on their phone, providing immediate analytical insights.
*   Interactive Content Sections: The site includes specialized sections as "Data & Insights" (for fact-supported information and tips), "Browse Library" (for articles and previous experiences), and the AI Assistant tool to answer user queries about digital addiction.
*   AI Comic Generator: An AI tool designed to draw images in the style of our comic story (the hybrid style) as one of the project outputs.
*   Digital Spread: Creating integrated digital content (infographics, videographics, story videos) and linking it to the project's social media pages.
## Third: The Team and Academic Supervision
**This project is the result of the efforts of a team of students from the Master of Digital Media and Information Security at the Faculty of Mass Communication, Cairo University, Class of 2025/2026.**
*   Academic Supervision: The project was conducted under the supervision of Dr. Sahar Mostafa and Dr. Samah El-Shahawy.
*   Implementation Team: The project team consisted of three members, each handling a specialized axis:
    *   Mohamed Abd El-Sattar: AI Solutions Architect; responsible for visual and technical generation of the story (images, content, and building the site infrastructure).
    *   Mahmoud Fleifel: Narrative Content Developer; responsible for the narrative vision, writing the literary script, and dramatic direction (as well as podcast episode scripts).
    *   Fatma Fahmy: Digital Marketing & Project Governance Lead; responsible for organizing workflow and managing promotional campaigns via social media.
**Final Goal: The "Offline-Me" project aims to turn storytelling into a tool for awareness and motivation, proving that understanding and acknowledging the crisis is the first step towards finding balance and reclaiming real life.**`
  }
};

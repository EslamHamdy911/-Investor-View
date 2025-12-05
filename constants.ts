import { Project, Translation } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'TaskMaster Pro',
    description: {
      en: 'A comprehensive project management tool built entirely without code using Bubble. Features include Kanban boards, time tracking, and team collaboration.',
      ar: 'أداة شاملة لإدارة المشاريع مبنية بالكامل بدون كود باستخدام Bubble. تتضمن ميزات مثل لوحات كانبان وتتبع الوقت والتعاون الجماعي.'
    },
    documentationStatus: 'complete',
    monetizationPlan: {
      en: 'Monthly Subscription (SaaS) - $15/user',
      ar: 'اشتراك شهري (SaaS) - 15 دولارًا للمستخدم'
    },
    demoUrl: '#',
    imageUrl: 'https://picsum.photos/400/250?random=1',
    category: 'SaaS'
  },
  {
    id: '2',
    name: 'RentMyGear',
    description: {
      en: 'A peer-to-peer marketplace for renting photography and videography equipment. Built with Softr and Airtable.',
      ar: 'سوق من النظير للنظير لتأجير معدات التصوير الفوتوغرافي والفيديو. بنيت باستخدام Softr و Airtable.'
    },
    documentationStatus: 'in-progress',
    monetizationPlan: {
      en: '10% Commission on every transaction',
      ar: '10٪ عمولة على كل معاملة'
    },
    demoUrl: '#',
    imageUrl: 'https://picsum.photos/400/250?random=2',
    category: 'Marketplace'
  },
  {
    id: '3',
    name: 'FitTrack NoCode',
    description: {
      en: 'Personal fitness tracker mobile application. Tracks workouts, nutrition, and weight goals. Built with Adalo.',
      ar: 'تطبيق جوال لتتبع اللياقة البدنية الشخصية. يتتبع التدريبات والتغذية وأهداف الوزن. بنيت باستخدام Adalo.'
    },
    documentationStatus: 'complete',
    monetizationPlan: {
      en: 'Freemium + In-App Purchases',
      ar: 'مجاني + مشتريات داخل التطبيق'
    },
    demoUrl: '#',
    imageUrl: 'https://picsum.photos/400/250?random=3',
    category: 'Mobile App'
  },
  {
    id: '4',
    name: 'Local Artisan Box',
    description: {
      en: 'Subscription box service for local handmade goods. Integrated with Stripe for payments.',
      ar: 'خدمة صندوق اشتراك للسلع المحلية المصنوعة يدويًا. متكاملة مع Stripe للمدفوعات.'
    },
    documentationStatus: 'missing',
    monetizationPlan: {
      en: 'Subscription Box Margin',
      ar: 'هامش ربح صندوق الاشتراك'
    },
    demoUrl: '#',
    imageUrl: 'https://picsum.photos/400/250?random=4',
    category: 'E-commerce'
  }
];

export const TRANSLATIONS: Translation = {
  appTitle: {
    en: 'Investor View',
    ar: 'رؤية المستثمر'
  },
  darkMode: {
    en: 'Dark Mode',
    ar: 'الوضع الليلي'
  },
  lightMode: {
    en: 'Light Mode',
    ar: 'الوضع النهاري'
  },
  installApp: {
    en: 'Install App',
    ar: 'تثبيت التطبيق'
  },
  projects: {
    en: 'Featured Projects',
    ar: 'المشاريع المميزة'
  },
  status: {
    en: 'Doc Status',
    ar: 'حالة التوثيق'
  },
  monetization: {
    en: 'Profit Plan',
    ar: 'خطة الربح'
  },
  requestDetails: {
    en: 'Request Details',
    ar: 'طلب تفاصيل'
  },
  demo: {
    en: 'View Demo',
    ar: 'عرض تجريبي'
  },
  complete: {
    en: 'Complete',
    ar: 'مكتمل'
  },
  inProgress: {
    en: 'In Progress',
    ar: 'قيد العمل'
  },
  missing: {
    en: 'Missing',
    ar: 'مفقود'
  },
  welcomeTitle: {
    en: 'Welcome to Investor View',
    ar: 'مرحباً بك في رؤية المستثمر'
  },
  welcomeDesc: {
    en: 'This app helps you discover high-potential No-Code projects. Browse details, check profit plans, and connect with creators.',
    ar: 'يساعدك هذا التطبيق على اكتشاف مشاريع "بدون كود" عالية الإمكانات. تصفح التفاصيل، تحقق من خطط الربح، وتواصل مع المبدعين.'
  },
  offlineMode: {
    en: 'Works Offline',
    ar: 'يعمل دون إنترنت'
  },
  getStarted: {
    en: 'Get Started',
    ar: 'ابدأ الآن'
  },
  notificationSent: {
    en: 'Notification sent to project owner!',
    ar: 'تم إرسال الإشعار لصاحب المشروع!'
  },
  installInstructions: {
    en: 'To install, use your browser menu and select "Add to Home Screen" or "Install App".',
    ar: 'للتثبيت، استخدم قائمة المتصفح واختر "إضافة إلى الشاشة الرئيسية" أو "تثبيت التطبيق".'
  },
  // New translations for Vision and How-to-use
  visionTitle: {
    en: 'Our Vision',
    ar: 'رؤيتنا'
  },
  visionText: {
    en: 'We aim to connect visionary investors with high-potential No-Code creators through a transparent, efficient, and offline-accessible platform.',
    ar: 'نهدف إلى ربط المستثمرين أصحاب الرؤية بمبدعي "بدون كود" ذوي الإمكانات العالية من خلال منصة شفافة وفعالة وتعمل دون إنترنت.'
  },
  howToUseTitle: {
    en: 'How to use',
    ar: 'كيفية الاستخدام'
  },
  step1: {
    en: 'Discover Projects',
    ar: 'اكتشف المشاريع'
  },
  step1Desc: {
    en: 'Browse through categorized No-Code startups.',
    ar: 'تصفح الشركات الناشئة المصنفة "بدون كود".'
  },
  step2: {
    en: 'Analyze Data',
    ar: 'حلل البيانات'
  },
  step2Desc: {
    en: 'Check monetization plans and documentation status.',
    ar: 'تحقق من خطط الربح وحالة التوثيق.'
  },
  step3: {
    en: 'Connect',
    ar: 'تواصل'
  },
  step3Desc: {
    en: 'Request details to reach founders directly.',
    ar: 'اطلب التفاصيل للتواصل مع المؤسسين مباشرة.'
  }
};
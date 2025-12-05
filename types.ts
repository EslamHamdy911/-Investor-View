export enum Language {
  AR = 'ar',
  EN = 'en'
}

export interface Project {
  id: string;
  name: string;
  description: {
    en: string;
    ar: string;
  };
  documentationStatus: 'complete' | 'in-progress' | 'missing';
  monetizationPlan: {
    en: string;
    ar: string;
  };
  demoUrl: string;
  imageUrl: string;
  category: 'SaaS' | 'Marketplace' | 'Mobile App' | 'E-commerce';
}

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  };
}
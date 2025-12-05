import React, { useState, useEffect } from 'react';
import { PROJECTS, TRANSLATIONS } from './constants';
import { Language } from './types';
import ProjectCard from './components/ProjectCard';
import InstallButton from './components/InstallButton';
import OnboardingModal from './components/OnboardingModal';
import { Moon, Sun, Languages, Search, LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize Theme and Language
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === Language.EN ? Language.AR : Language.EN));
  };

  const handleRequestDetails = (projectName: string) => {
    const msg = TRANSLATIONS.notificationSent[lang];
    // In a real app, this would be an API call
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-5 inset-inline-end-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-[slideIn_0.3s_ease-out] font-bold flex items-center';
    notification.textContent = `${msg} (${projectName})`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const t = (key: string) => TRANSLATIONS[key][lang];

  const filteredProjects = PROJECTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description[lang].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen flex flex-col ${lang === Language.AR ? 'font-sans' : 'font-sans'}`} dir={lang === Language.AR ? 'rtl' : 'ltr'}>
      <OnboardingModal lang={lang} />
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <LayoutGrid size={24} />
            </div>
            <h1 className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {t('appTitle')}
            </h1>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <InstallButton lang={lang} />
            
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              title={lang === Language.EN ? "Switch to Arabic" : "Switch to English"}
            >
              <Languages size={20} />
              <span className="sr-only">Toggle Language</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              title={darkMode ? t('lightMode') : t('darkMode')}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        
        {/* Hero / Search Section */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects')}
           </h2>
           <div className="relative">
            <input 
              type="text"
              placeholder={lang === Language.EN ? "Search projects..." : "بحث عن مشاريع..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 rtl:pr-12 rtl:pl-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none shadow-sm transition-all"
            />
            <Search className="absolute left-4 rtl:right-4 rtl:left-auto top-3.5 text-gray-400" size={20} />
           </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              lang={lang} 
              onRequestDetails={handleRequestDetails}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found matching your search.</p>
            </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Investor View. {lang === Language.EN ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
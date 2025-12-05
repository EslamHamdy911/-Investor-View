import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { X, WifiOff, Smartphone, Eye, Rocket, Search, MessageCircle, Lightbulb } from 'lucide-react';

interface OnboardingModalProps {
  lang: Language;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      // Small delay for animation effect
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  const t = (key: string) => TRANSLATIONS[key][lang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-[fadeInUp_0.4s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 inset-inline-end-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              {t('welcomeTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t('welcomeDesc')}
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl mb-6 border border-indigo-100 dark:border-indigo-800">
             <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
               <Lightbulb className="text-amber-500 w-5 h-5" />
               <h3 className="font-bold text-indigo-800 dark:text-indigo-300">{t('visionTitle')}</h3>
             </div>
             <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
               {t('visionText')}
             </p>
          </div>

          {/* How to Use Section */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-1">{t('howToUseTitle')}</h3>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg text-blue-600 dark:text-blue-400">
                  <Search size={20}/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{t('step1')}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('step1Desc')}</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-lg text-purple-600 dark:text-purple-400">
                  <Rocket size={20}/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{t('step2')}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('step2Desc')}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg text-green-600 dark:text-green-400">
                  <MessageCircle size={20}/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{t('step3')}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('step3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-center border border-gray-100 dark:border-gray-700">
              <Smartphone className="w-5 h-5 mx-auto mb-1 text-pink-500" />
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {t('installApp')}
              </span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg text-center border border-gray-100 dark:border-gray-700">
              <WifiOff className="w-5 h-5 mx-auto mb-1 text-blue-500" />
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {t('offlineMode')}
              </span>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none transform active:scale-95"
          >
            {t('getStarted')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
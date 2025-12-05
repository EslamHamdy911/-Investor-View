import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface InstallButtonProps {
  lang: Language;
}

const InstallButton: React.FC<InstallButtonProps> = ({ lang }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsSupported(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsSupported(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
        // Fallback for when the prompt isn't available (e.g. manual instructions)
        alert(TRANSLATIONS.installInstructions[lang]);
        return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsSupported(false);
    }
  };

  // Always show button to fulfill requirement, but behave differently if prompt is ready
  return (
    <button
      onClick={handleInstallClick}
      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
    >
      <Download size={18} />
      <span className="hidden sm:inline">{TRANSLATIONS.installApp[lang]}</span>
      <span className="sm:hidden">APK</span>
    </button>
  );
};

export default InstallButton;
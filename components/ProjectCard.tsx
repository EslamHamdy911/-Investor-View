import React from 'react';
import { Project, Language, Translation } from '../types';
import { TRANSLATIONS } from '../constants';
import { FileText, DollarSign, ExternalLink, Send, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  lang: Language;
  onRequestDetails: (projectName: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, onRequestDetails }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'complete':
        return { color: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400', icon: CheckCircle, labelKey: 'complete' };
      case 'in-progress':
        return { color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400', icon: Clock, labelKey: 'inProgress' };
      default:
        return { color: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400', icon: AlertCircle, labelKey: 'missing' };
    }
  };

  const statusConfig = getStatusConfig(project.documentationStatus);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 inset-inline-end-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{project.name}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm flex-1 leading-relaxed">
          {project.description[lang]}
        </p>

        <div className="space-y-3 mb-6">
          {/* Documentation Status */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
              <FileText size={14} />
              <span>{t('status')}</span>
            </div>
            <div className={`flex items-center space-x-1 rtl:space-x-reverse px-2 py-1 rounded-md text-xs font-bold ${statusConfig.color}`}>
              <StatusIcon size={12} />
              <span>{t(statusConfig.labelKey)}</span>
            </div>
          </div>

          {/* Monetization Plan */}
          <div className="flex flex-col p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
              <DollarSign size={14} />
              <span>{t('monetization')}</span>
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {project.monetizationPlan[lang]}
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <a 
            href={project.demoUrl} 
            className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
          >
            <ExternalLink size={16} />
            <span>{t('demo')}</span>
          </a>
          <button 
            onClick={() => onRequestDetails(project.name)}
            className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none transition-all transform hover:-translate-y-0.5 font-medium text-sm"
          >
            <Send size={16} />
            <span>{t('requestDetails')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
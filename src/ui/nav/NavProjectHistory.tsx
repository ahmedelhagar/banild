'use client';

import Link from 'next/link';
import { History, FileText, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  status: 'completed' | 'in-progress' | 'draft';
}

interface NavProjectHistoryProps {
  projects: Project[];
}

export default function NavProjectHistory({ projects }: NavProjectHistoryProps) {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return t('nav.status.completed');
      case 'in-progress':
        return t('nav.status.inProgress');
      case 'draft':
        return t('nav.status.draft');
    }
  };

  return (
    <div className="flex-1 px-4 overflow-hidden">
      <div className={cn(
        "flex items-center mb-4 pb-2 border-b",
        "border-gray-100 dark:border-gray-700",
        {
          "flex-row-reverse": isRTL
        }
      )}>
        <History className={cn(
          "w-4 h-4",
          "text-gray-400 dark:text-gray-500",
          {
            "ml-2": isRTL,
            "mr-2": !isRTL
          }
        )} />
        <h3 className={cn(
          "text-xs font-semibold uppercase tracking-wide",
          "text-gray-400 dark:text-gray-500"
        )}>
          {t('nav.recentProjects')}
        </h3>
      </div>

      <div className="space-y-2 overflow-y-auto max-h-80">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className={cn(
              "group flex items-center justify-between p-3 rounded-lg transition-colors duration-200 border border-transparent",
              isDarkMode
                ? "hover:bg-gray-800 hover:border-gray-700"
                : "hover:bg-gray-50 hover:border-gray-200",
              {
                "flex-row-reverse": isRTL
              }
            )}
          >
            <div className={cn(
              "flex items-center flex-1 min-w-0",
              {
                "flex-row-reverse": isRTL
              }
            )}>
              <div className={cn(
                "flex-shrink-0 w-6 h-6 rounded flex items-center justify-center",
                isDarkMode ? "bg-white" : "bg-gray-900",
                {
                  "ml-3": isRTL,
                  "mr-3": !isRTL
                }
              )}>
                <FileText className={cn(
                  "w-3 h-3",
                  isDarkMode ? "text-black" : "text-white"
                )} />
              </div>
              <div className={cn(
                "flex-1 min-w-0",
                {
                  "text-right": isRTL,
                  "text-left": !isRTL
                }
              )}>
                <p className={cn(
                  "text-sm font-medium truncate",
                  "text-black dark:text-white"
                )}>
                  {project.name}
                </p>
                <div className={cn(
                  "flex items-center mt-1 text-xs",
                  "text-gray-400 dark:text-gray-500",
                  {
                    "flex-row-reverse": isRTL
                  }
                )}>
                  <Clock className={cn(
                    "w-3 h-3",
                    {
                      "ml-1": isRTL,
                      "mr-1": !isRTL
                    }
                  )} />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className={cn(
              "flex items-center",
              {
                "flex-row-reverse": isRTL
              }
            )}>
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border",
                project.status === 'completed' 
                  ? isDarkMode 
                    ? 'text-white bg-gray-800 border-gray-600'
                    : 'text-black bg-white border-gray-300'
                  : project.status === 'in-progress'
                  ? isDarkMode
                    ? 'text-black bg-white border-white'
                    : 'text-white bg-black border-black'
                  : isDarkMode
                    ? 'text-gray-400 bg-gray-800 border-gray-700'
                    : 'text-gray-500 bg-gray-50 border-gray-200',
                {
                  "ml-2": isRTL,
                  "mr-2": !isRTL
                }
              )}>
                {getStatusText(project.status)}
              </span>
              <ChevronRight className={cn(
                "w-3 h-3 transition-colors",
                isDarkMode
                  ? "text-gray-500 group-hover:text-white"
                  : "text-gray-400 group-hover:text-black",
                {
                  "rotate-180": isRTL
                }
              )} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
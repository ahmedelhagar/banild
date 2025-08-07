'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronRight, 
  Folder,
  Globe,
  ShoppingCart,
  Plus,
  Facebook,
  Instagram,
  Youtube,
  Settings,
  Eye,
  FileText
} from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface ProjectNode {
  id: string;
  name: string;
  type: 'folder' | 'site' | 'platform' | 'task';
  icon?: string;
  url?: string;
  status?: 'online' | 'offline' | 'pending';
  children?: ProjectNode[];
}

const projectTree: ProjectNode[] = [
  {
    id: 'fashion-store',
    name: 'Fashion Store',
    type: 'folder',
    children: [
      {
        id: 'connected-sites',
        name: 'Connected Sites',
        type: 'folder',
        children: [
          {
            id: 'fashion-main',
            name: 'fashionstore.com',
            type: 'site',
            icon: 'globe',
            status: 'online'
          },
          {
            id: 'fashion-shop',
            name: 'shop.fashionstore.com',
            type: 'site',
            icon: 'shopping',
            status: 'online'
          },
          {
            id: 'connect-new',
            name: 'Connect New Site',
            type: 'task',
            icon: 'plus'
          }
        ]
      },
      {
        id: 'ad-managers',
        name: 'Ad Managers',
        type: 'folder',
        children: [
          {
            id: 'meta-ads',
            name: 'Meta Ads Manager',
            type: 'platform',
            icon: 'facebook',
            status: 'online'
          },
          {
            id: 'tiktok-ads',
            name: 'TikTok Ads Manager',
            type: 'platform',
            icon: 'instagram',
            status: 'online'
          },
          {
            id: 'snapchat-ads',
            name: 'Snapchat Ads Manager',
            type: 'platform',
            icon: 'youtube',
            status: 'online'
          },
          {
            id: 'google-tag',
            name: 'Google Tag Manager',
            type: 'platform',
            icon: 'settings',
            status: 'online'
          },
          {
            id: 'connect-platform',
            name: 'Connect Ad Platform',
            type: 'task',
            icon: 'plus'
          }
        ]
      },
      {
        id: 'agent-tasks',
        name: 'Agent Tasks',
        type: 'folder',
        children: [
          {
            id: 'view-schedule',
            name: 'View Schedule (2 tasks)',
            type: 'task',
            icon: 'eye'
          }
        ]
      }
    ]
  },
  {
    id: 'tech-blog',
    name: 'Tech Blog',
    type: 'folder',
    children: []
  }
];

function getIcon(iconName: string | undefined, status?: string) {
  const iconClass = "w-4 h-4";
  
  switch (iconName) {
    case 'globe':
      return <Globe className={iconClass} />;
    case 'shopping':
      return <ShoppingCart className={iconClass} />;
    case 'facebook':
      return <Facebook className={iconClass} />;
    case 'instagram':
      return <Instagram className={iconClass} />;
    case 'youtube':
      return <Youtube className={iconClass} />;
    case 'settings':
      return <Settings className={iconClass} />;
    case 'plus':
      return <Plus className={iconClass} />;
    case 'eye':
      return <Eye className={iconClass} />;
    default:
      return <FileText className={iconClass} />;
  }
}

function StatusIndicator({ status, isDarkMode }: { status?: string; isDarkMode: boolean }) {
  if (!status) return null;
  
  return (
    <div className={cn(
      "w-2 h-2 rounded-full",
      status === 'online' 
        ? "bg-green-400" 
        : status === 'offline' 
        ? "bg-red-400" 
        : "bg-yellow-400"
    )} />
  );
}

function TreeNode({ node, level = 0 }: { node: ProjectNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level === 0); // Expand root nodes by default
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1.5 px-2 rounded-lg cursor-pointer transition-colors duration-200 group",
          isDarkMode
            ? "hover:bg-[#252525] text-gray-200"
            : "hover:bg-gray-50 text-gray-700",
          {
            "flex-row-reverse": isRTL
          }
        )}
        style={{ marginLeft: `${level * 16}px` }}
        onClick={handleToggle}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren && (
          <div className={cn(
            "flex-shrink-0",
            {
              "ml-1": isRTL,
              "mr-1": !isRTL
            }
          )}>
            {isExpanded ? (
              <ChevronDown className="w-3 h-3 text-gray-400" />
            ) : (
              <ChevronRight className="w-3 h-3 text-gray-400" />
            )}
          </div>
        )}

        {/* Folder Icon for folders without children indicator */}
        {!hasChildren && node.type === 'folder' && (
          <div className={cn(
            "flex-shrink-0",
            {
              "ml-1": isRTL,
              "mr-1": !isRTL
            }
          )}>
            <Folder className="w-3 h-3 text-gray-400" />
          </div>
        )}

        {/* Node Icon */}
        <div className={cn(
          "flex-shrink-0",
          {
            "ml-2": isRTL,
            "mr-2": !isRTL
          }
        )}>
          {getIcon(node.icon)}
        </div>

        {/* Node Name */}
        <div className="flex-1 min-w-0">
          <span className={cn(
            "text-xs font-medium truncate block",
            node.type === 'task' && (isDarkMode ? "text-blue-300" : "text-blue-600")
          )}>
            {node.name}
          </span>
        </div>

        {/* Status Indicator */}
        <StatusIndicator status={node.status} isDarkMode={isDarkMode} />
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavProjectTree() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex-1 px-4 overflow-hidden">
      <div className="space-y-1 overflow-y-auto max-h-80">
        {projectTree.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}
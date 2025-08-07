
'use client';

import { useState, useRef } from 'react';
import { 
  Paperclip, 
  Image as ImageIcon, 
  Send, 
  Mic, 
  ChevronDown,
  FileText,
  Video,
  BarChart3,
  Globe,
  Zap,
  Clock
} from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { cn } from '@/lib/utils';
import { Button, IconButton } from '@/ui/buttons';

interface PromptInputProps {
  className?: string;
  onSubmit?: (message: string, files: File[], mode: 'speed' | 'quality') => void;
  placeholder?: string;
}

export default function PromptInput({ 
  className,
  onSubmit,
  placeholder
}: PromptInputProps) {
  const { isRTL } = useLanguage();
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [mode, setMode] = useState<'speed' | 'quality'>('speed');
  const [showSpeedDropdown, setShowSpeedDropdown] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const hasContent = message.trim().length > 0 || files.length > 0;

  const handleSubmit = () => {
    if (hasContent && onSubmit) {
      onSubmit(message, files, mode);
      setMessage('');
      setFiles([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const quickActions = [
    {
      id: 'image',
      labelEn: 'Image',
      labelAr: 'صورة',
      icon: <ImageIcon className="w-5 h-5" />,
      onClick: () => imageInputRef.current?.click()
    },
    {
      id: 'slides',
      labelEn: 'Slides',
      labelAr: 'عرض تقديمي',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'webpage',
      labelEn: 'Webpage',
      labelAr: 'صفحة ويب',
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 'spreadsheet',
      labelEn: 'Spreadsheet',
      labelAr: 'جدول بيانات',
      icon: <BarChart3 className="w-5 h-5" />,
      badge: 'New'
    },
    {
      id: 'visualization',
      labelEn: 'Visualization',
      labelAr: 'تصور بيانات',
      icon: <Video className="w-5 h-5" />
    }
  ];

  return (
    <div className={cn(
      "flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto",
      className
    )}>
      {/* Welcome Message */}
      <div className="text-left w-full mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[--color-lightmode-primarytxt] dark:text-[--color-darkmode-primarytxt]">
          {isRTL ? "مرحباً إبراهيم إسماعيل" : "Hello ibrahim ismael"}
        </h1>
        <h1 className="text-4xl text-[--color-lightmode-secondarytxt] dark:text-[--color-darkmode-secondarytxt]">
          {isRTL ? "ماذا يمكنني أن أفعل لك؟" : "What can I do for you?"}
        </h1>
      </div>

      {/* Main Input Area */}
      <div className={cn(
        "w-full max-w-4xl rounded-2xl border-2 transition-all duration-200",
        "bg-[--color-lightmode-primary] dark:bg-[--color-darkmode-primary]",
        "border-[--color-lightmode-tertiary] dark:border-[--color-darkmode-tertiary]",
        hasContent && "border-lightmode-blue dark:border-darkmode-blue"
      )}>
        
        {/* File Attachments Display */}
        {files.length > 0 && (
          <div className="p-4 border-b border-[--color-lightmode-tertiary] dark:border-[--color-darkmode-tertiary]">
            <div className="flex flex-wrap gap-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-[--color-lightmode-secondary] border-[--color-lightmode-tertiary] text-[--color-lightmode-primarytxt] dark:bg-[--color-darkmode-tertiary] dark:border-[--color-darkmode-tertiary] dark:text-[--color-darkmode-primarytxt]"
                >
                  {file.type.startsWith('image/') ? (
                    <ImageIcon className="w-4 h-4" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                  <span className="text-sm truncate max-w-32">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder || (isRTL ? "اكتب مهمة أو اسأل عن أي شيء" : "Assign a task or ask anything")}
            className={cn(
              "w-full resize-none border-none outline-none bg-transparent text-lg placeholder:text-gray-500",
              "min-h-[60px] max-h-[200px]",
              "",
              isRTL ? "text-right" : "text-left"
            )}
            rows={3}
          />

          {/* Action Buttons Row */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[--color-lightmode-tertiary] dark:border-[--color-darkmode-tertiary]">
            {/* Left Actions */}
            <div className={cn(
              "flex items-center gap-2",
              isRTL ? "flex-row-reverse" : ""
            )}>
              {/* File Upload */}
              <IconButton
                icon={<Paperclip />}
                aria-label={isRTL ? "إرفاق ملف" : "Attach file"}
                variant="secondary"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]"
              />

              {/* Image Upload */}
              <IconButton
                icon={<ImageIcon />}
                aria-label={isRTL ? "إرفاق صورة" : "Attach image"}
                variant="secondary"
                size="sm"
                onClick={() => imageInputRef.current?.click()}
                className="hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]"
              />

              {/* Voice Input */}
              <IconButton
                icon={<Mic />}
                aria-label={isRTL ? "تسجيل صوتي" : "Voice input"}
                variant="secondary"
                size="sm"
                className="hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]"
              />
            </div>

            {/* Right Actions */}
            <div className={cn(
              "flex items-center gap-3",
              isRTL ? "flex-row-reverse" : ""
            )}>
              {/* Speed/Quality Toggle */}
              <div className="relative">
                <Button
                  variant="secondary"
                  size="sm"
                  icon={mode === 'speed' ? <Zap /> : <Clock />}
                  iconPosition={isRTL ? 'right' : 'left'}
                  onClick={() => setShowSpeedDropdown(!showSpeedDropdown)}
                  className={cn(
                    "gap-2 hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]",
                    isRTL ? "flex-row-reverse" : ""
                  )}
                >
                  {mode === 'speed' 
                    ? (isRTL ? "سريع" : "Speed")
                    : (isRTL ? "جودة" : "Quality")
                  }
                  <ChevronDown className="w-4 h-4" />
                </Button>

                {/* Speed Dropdown */}
                {showSpeedDropdown && (
                  <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-[--color-darkmode-secondary] border border-[--color-lightmode-tertiary] dark:border-[--color-darkmode-tertiary] rounded-lg shadow-lg z-10 min-w-[150px]">
                    <button
                      onClick={() => {
                        setMode('speed');
                        setShowSpeedDropdown(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-[--color-darkmode-tertiary] flex items-center gap-2",
                        mode === 'speed' && "bg-blue-50 dark:bg-blue-900/20"
                      )}
                    >
                      <Zap className="w-4 h-4" />
                      {isRTL ? "وضع السرعة" : "Speed Mode"}
                    </button>
                    <button
                      onClick={() => {
                        setMode('quality');
                        setShowSpeedDropdown(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-[--color-darkmode-tertiary] flex items-center gap-2",
                        mode === 'quality' && "bg-blue-50 dark:bg-blue-900/20"
                      )}
                    >
                      <Clock className="w-4 h-4" />
                      {isRTL ? "وضع الجودة" : "Quality Mode"}
                    </button>
                  </div>
                )}
              </div>

              {/* Send Button */}
              <IconButton
                icon={<Send />}
                aria-label={isRTL ? "إرسال" : "Send"}
                variant="primary"
                size="md"
                onClick={handleSubmit}
                disabled={!hasContent}
                className={cn(
                  "transition-all duration-200",
                  hasContent 
                    ? "opacity-100 cursor-pointer" 
                    : "opacity-50 cursor-not-allowed"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={cn(
        "flex flex-wrap items-center justify-center gap-4 mt-6 max-w-4xl",
        isRTL ? "flex-row-reverse" : ""
      )}>
        {quickActions.map((action) => (
          <Button
            key={action.id}
            variant="secondary"
            size="sm"
            icon={action.icon}
            iconPosition={isRTL ? 'right' : 'left'}
            onClick={action.onClick}
            className={cn(
              "gap-2 relative hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]",
              isRTL ? "flex-row-reverse" : ""
            )}
          >
            {isRTL ? action.labelAr : action.labelEn}
            {action.badge && (
              <span className={cn(
                "absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-medium rounded-full",
                "bg-blue-500 text-white"
              )}>
                {action.badge}
              </span>
            )}
          </Button>
        ))}
        <Button
          variant="secondary"
          size="sm"
          className="hover:bg-[--color-lightmode-tertiary] dark:hover:bg-[--color-darkmode-tertiary]"
        >
          {isRTL ? "المزيد" : "More"}
        </Button>
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileUpload}
        accept=".pdf,.doc,.docx,.txt,.csv,.xlsx"
      />
      <input
        ref={imageInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileUpload}
        accept="image/*"
      />
    </div>
  );
}
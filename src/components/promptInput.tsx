
'use client';

import { useState, useRef } from 'react';
import { 
  Paperclip, 
  Image as ImageIcon, 
  Send, 
  FileText,
  Box,
  Rocket
} from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { cn } from '@/lib/utils';
import { IconButton } from '@/ui/buttons';
import { useDarkMode } from '@/lib/useDarkMode';

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { isDarkMode } = useDarkMode();

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

  return (
    <div className={cn(
      "flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto",
      className
    )}>
      {/* Welcome Message */}
      <div className="text-left w-full mb-8">
        <h1 className={cn(
          "text-4xl font-bold",
          isDarkMode ? "text-darkmode-primarytxt" : "text-lightmode-primarytxt"
        )}>
          {isRTL ? "مرحباً إبراهيم إسماعيل" : "Hello ibrahim ismael"}
        </h1>
        <h1 className={cn(
          "text-4xl font-bold",
          isDarkMode ? "text-darkmode-primarytxt" : "text-lightmode-primarytxt"
        )}>
          {isRTL ? "ماذا يمكنني أن أفعل لك؟" : "What can I do for you?"}
        </h1>
      </div>

      {/* Main Input Area */}
      <div className={cn(
        "w-full max-w-4xl rounded-2xl border-1 transition-all duration-200",
        isDarkMode ? "bg-darkmode-primary border-darkmode-tertiarytxt" : "bg-lightmode-primary border-lightmode-tertiarytxt"
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
          <div className="flex items-center justify-between mt-4 pt-4">
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
              
            </div>

            {/* Right Actions */}
            <div className={cn(
              "flex items-center gap-3",
              isRTL ? "flex-row-reverse" : ""
            )}>
              {/* Speed/Quality Switch */}
              <div className={cn(
                "inline-flex items-center rounded-full border overflow-hidden p-0.5 transition-colors",
                isDarkMode ? "border-darkmode-tertiary bg-darkmode-secondary" : "border-lightmode-tertiary bg-lightmode-secondary",
                isDarkMode ? "" : "shadow-sm"
              )}>
                <button
                  type="button"
                  onClick={() => setMode('speed')}
                  aria-pressed={mode === 'speed'}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 text-xs transition-colors rounded-full focus-visible:outline-1",
                    isRTL ? "flex-row-reverse" : "",
                    mode === 'speed'
                      ? (isDarkMode
                          ? "bg-darkmode-primary text-darkmode-primarytxt ring-1 ring-darkmode-tertiary"
                          : "bg-lightmode-primary text-lightmode-primarytxt ring-1 ring-lightmode-tertiary shadow-sm")
                      : (isDarkMode
                          ? "text-darkmode-secondarytxt hover:bg-darkmode-tertiary focus-visible:outline-darkmode-primarytxt"
                          : "text-lightmode-secondarytxt hover:bg-lightmode-tertiary focus-visible:outline-lightmode-primarytxt")
                  )}
                >
                  <Box className="w-3.5 h-3.5" />
                  {isRTL ? "أساسي" : "Basic"}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('quality')}
                  aria-pressed={mode === 'quality'}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 text-xs transition-colors rounded-full focus-visible:outline-1",
                    isRTL ? "flex-row-reverse" : "",
                    mode === 'quality'
                      ? (isDarkMode
                          ? "bg-darkmode-primary text-darkmode-primarytxt ring-1 ring-darkmode-tertiary"
                          : "bg-lightmode-primary text-lightmode-primarytxt ring-1 ring-lightmode-tertiary shadow-sm")
                      : (isDarkMode
                          ? "text-darkmode-secondarytxt hover:bg-darkmode-tertiary focus-visible:outline-darkmode-primarytxt"
                          : "text-lightmode-secondarytxt hover:bg-lightmode-tertiary focus-visible:outline-lightmode-primarytxt")
                  )}
                >
                  <Rocket className="w-3.5 h-3.5" />
                  {isRTL ? "أداء" : "Performance"}
                </button>
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
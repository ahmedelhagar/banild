'use client';

import { useState } from 'react';
import { Send, Paperclip, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';
import { useDarkMode } from '@/lib/useDarkMode';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export default function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "I'm here to help you manage your WordPress sites and optimize your ad campaigns across Meta, TikTok, Snapchat, and more. What would you like to work on today?",
      timestamp: '03:02 PM'
    }
  ]);
  
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      console.log('Sending:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn(
      "border-t",
      isDarkMode ? "border-gray-700" : "border-gray-200"
    )}>
      {/* Chat Messages */}
      <div className="max-h-60 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={cn(
            "flex",
            {
              "justify-end": msg.type === 'user',
              "justify-start": msg.type === 'assistant'
            }
          )}>
            <div className={cn(
              "flex items-start max-w-xs lg:max-w-md",
              {
                "flex-row-reverse": isRTL && msg.type === 'assistant',
                "flex-row": !isRTL || msg.type === 'user'
              }
            )}>
              {/* Avatar for assistant */}
              {msg.type === 'assistant' && (
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
                  isDarkMode ? "bg-white" : "bg-black",
                  {
                    "ml-2": isRTL,
                    "mr-2": !isRTL
                  }
                )}>
                  <span className={cn(
                    "text-xs font-bold",
                    isDarkMode ? "text-black" : "text-white"
                  )}>
                    B
                  </span>
                </div>
              )}
              
              {/* Message Content */}
              <div className={cn(
                "rounded-lg px-3 py-2",
                msg.type === 'assistant' 
                  ? isDarkMode 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-900"
                  : isDarkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
              )}>
                <p className="text-sm">{msg.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className={cn(
                    "text-xs font-medium",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}>
                    Banild AI
                  </span>
                  <span className={cn(
                    "text-xs",
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  )}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className={cn(
        "p-4 border-t",
        isDarkMode ? "border-gray-700" : "border-gray-100"
      )}>
        <div className={cn(
          "flex items-end space-x-2 border rounded-lg",
          isDarkMode 
            ? "border-gray-700 bg-gray-800" 
            : "border-gray-200 bg-white",
          {
            "flex-row-reverse space-x-reverse": isRTL
          }
        )}>
          {/* Message Input */}
          <div className="flex-1 min-w-0">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message here..."
              rows={1}
              className={cn(
                "w-full resize-none border-0 bg-transparent text-sm placeholder-gray-500 focus:outline-none py-3 px-4",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            />
          </div>

          {/* Action Buttons */}
          <div className={cn(
            "flex items-center space-x-1 px-2 py-2",
            {
              "flex-row-reverse space-x-reverse": isRTL
            }
          )}>
            {/* Attachment Button */}
            <button
              type="button"
              className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              )}
            >
              <Paperclip className="w-4 h-4" />
            </button>

            {/* Image Button */}
            <button
              type="button"
              className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              )}
            >
              <ImageIcon className="w-4 h-4" />
            </button>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                message.trim()
                  ? isDarkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                  : "text-gray-400 cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Helper Text */}
        <div className="flex items-center justify-between mt-2">
          <span className={cn(
            "text-xs",
            isDarkMode ? "text-gray-500" : "text-gray-400"
          )}>
            Press <kbd className="px-1 py-0.5 text-xs font-mono bg-gray-200 dark:bg-gray-700 rounded">Enter</kbd> to send
          </span>
          <span className={cn(
            "text-xs",
            isDarkMode ? "text-gray-500" : "text-gray-400"
          )}>
            Powered by Banild AI Assistant
          </span>
        </div>
      </div>
    </div>
  );
}
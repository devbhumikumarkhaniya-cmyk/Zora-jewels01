import React from 'react';
import { Check, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm">
      <div className="bg-[#0A0A0A] border border-[#C9A96E] text-[#F5F1EA] px-4 py-3 shadow-2xl flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#0B2A22] border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] shrink-0">
          <Check className="w-3.5 h-3.5" />
        </div>
        <p className="text-xs font-light tracking-wide text-[#F5F1EA]">
          {message}
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { Sparkles } from 'lucide-react';

interface TopBarProps {
  onBoutiqueClick?: () => void;
  onReplayIntro?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onBoutiqueClick, onReplayIntro }) => {
  return (
    <div className="relative z-50 bg-[#0B2A22] text-[#C9A96E] border-b border-[#C9A96E]/20 text-[11px] font-medium tracking-[0.2em] uppercase py-2.5 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2 text-[#C9A96E]/80">
          <span>PARIS</span>
          <span>·</span>
          <span>NEW YORK</span>
          <span>·</span>
          <span>GENEVA</span>
        </div>

        <div className="w-full lg:w-auto text-center flex items-center justify-center gap-3">
          <span className="text-[#C9A96E]/60 text-xs">✦</span>
          <span className="font-light tracking-[0.22em] text-[#F5F1EA]">
            Complimentary Express Shipping & Returns on All Orders
          </span>
          <span className="text-[#C9A96E]/60 text-xs">✦</span>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[#C9A96E]/80">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#C9A96E]/40 bg-[#071914] text-[10px] text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all cursor-pointer shadow-xs"
              title="Watch Animated Intro Film"
            >
              <Sparkles className="w-3 h-3 text-[#C9A96E]" />
              <span>Intro Film</span>
            </button>
          )}
          <button 
            onClick={onBoutiqueClick}
            className="hover:text-[#F5F1EA] transition-colors cursor-pointer"
          >
            Find a Boutique
          </button>
        </div>
      </div>
    </div>
  );
};

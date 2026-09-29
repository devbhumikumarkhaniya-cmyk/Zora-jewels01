import React from 'react';
import { X, Award, Shield, Sparkles } from 'lucide-react';
import { CRAFTSMANSHIP_IMAGE } from '../data/products';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/30 max-w-3xl w-full p-8 text-[#F5F1EA] shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#F5F1EA]/60 hover:text-[#C9A96E] p-1"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
              The Maison Chronicle
            </span>
            <h3 className="font-serif text-3xl font-light mt-1">
              Savoir-Faire Since 1932
            </h3>
            <div className="flex items-center justify-center gap-3 my-3">
              <span className="w-8 h-[1px] bg-[#C9A96E]/40" />
              <span className="text-xs text-[#C9A96E]">◇</span>
              <span className="w-8 h-[1px] bg-[#C9A96E]/40" />
            </div>
          </div>

          <div className="space-y-6 text-sm text-[#F5F1EA]/80 font-light leading-relaxed">
            <p>
              Founded in the historic jewelry quarters of Place Vendôme, Zora Jewels was born from an unyielding commitment to exceptional colored gemstones and classical French goldsmithing.
            </p>
            <p>
              Our master lapidaries spend months assessing a single rough emerald or diamond crystal before the initial cut, determining the precise angles that will unlock its natural inner fire.
            </p>

            <div className="my-6 border border-[#C9A96E]/20 p-4 bg-[#0B2A22]/20 flex items-center gap-4">
              <img
                src={CRAFTSMANSHIP_IMAGE}
                alt="Master Goldsmith at work"
                className="w-24 h-24 object-cover filter grayscale contrast-125"
              />
              <div className="text-xs text-[#F5F1EA]/80 space-y-1">
                <div className="text-[#C9A96E] font-medium uppercase tracking-wider text-[11px]">
                  Zero Compromise Ethos
                </div>
                <p>
                  Every gemstone is 100% ethically sourced with Kimberly Process and GIA certification, ensuring that the legacy you wear honors both people and planet.
                </p>
              </div>
            </div>

            <p>
              Today, our heirlooms grace private collectors, royal houses, and connoisseurs who seek jewelry not as mere ornament, but as an intimate repository of family legacy and timeless wonder.
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-8 py-2.5 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase hover:bg-[#DFCA9B]"
            >
              Return to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

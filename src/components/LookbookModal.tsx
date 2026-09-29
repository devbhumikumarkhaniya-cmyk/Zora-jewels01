import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopCollection: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  onShopCollection,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/30 max-w-5xl w-full p-6 sm:p-10 text-[#F5F1EA] shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#F5F1EA]/60 hover:text-[#C9A96E] p-1"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
              Editorial Volume IX
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light mt-1">
              The Winter Palais Archival Lookbook
            </h3>
            <div className="flex items-center justify-center gap-3 my-3">
              <span className="w-10 h-[1px] bg-[#C9A96E]/40" />
              <span className="text-xs text-[#C9A96E]">◇</span>
              <span className="w-10 h-[1px] bg-[#C9A96E]/40" />
            </div>
            <p className="text-xs text-[#F5F1EA]/70 font-light">
              Captured in the private salons of Île Saint-Louis. Highlighting exceptional Zambian and Colombian emeralds, flawless solitaire diamonds, and sculptural French evening leather.
            </p>
          </div>

          {/* Lookbook Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="group relative h-72 sm:h-80 overflow-hidden border border-[#C9A96E]/20"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] text-[#C9A96E] tracking-widest uppercase">
                    Chapter 0{i + 1}
                  </span>
                  <h4 className="font-serif text-xl text-[#F5F1EA] mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[#F5F1EA]/70 font-light">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#C9A96E]/20">
            <span className="text-xs text-[#F5F1EA]/50 font-light">
              Printed hardcover lookbooks available upon request at private salons.
            </span>
            <button
              onClick={() => {
                onClose();
                onShopCollection();
              }}
              className="px-8 py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase hover:bg-[#DFCA9B] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

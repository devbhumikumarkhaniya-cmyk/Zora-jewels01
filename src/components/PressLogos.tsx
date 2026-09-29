import React from 'react';
import { PRESS_LOGOS } from '../data/products';

export const PressLogos: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F1EA] py-10 sm:py-12 border-y border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label: "As Featured In" */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#0A0A0A]/20" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0A0A0A]/60">
              As Featured In
            </span>
            <span className="w-8 h-[1px] bg-[#0A0A0A]/20" />
          </div>
        </div>

        {/* 5 Press Logos in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {/* 1. VOGUE */}
          <div className="text-center group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors">
              VOGUE
            </span>
          </div>

          {/* 2. HARPER'S BAZAAR */}
          <div className="text-center group">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors">
              <span className="font-medium">BAZAAR</span>
            </span>
          </div>

          {/* 3. ROBB REPORT */}
          <div className="text-center group">
            <span className="font-serif text-xl sm:text-2xl font-normal italic tracking-wide text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors">
              Robb Report
            </span>
          </div>

          {/* 4. TOWN & COUNTRY */}
          <div className="text-center group">
            <span className="font-sans text-sm sm:text-base font-semibold tracking-[0.28em] uppercase text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors">
              TOWN&COUNTRY
            </span>
          </div>

          {/* 5. FORBES */}
          <div className="text-center group col-span-2 sm:col-span-1">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.1em] text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors">
              Forbes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

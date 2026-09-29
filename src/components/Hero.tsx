import React from 'react';
import { Award, Compass, RotateCcw, ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onLookbookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onLookbookClick }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background Animation Video (Looping, Muted, Brightened & Clearly Visible) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/videos/hero_poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[1.25] contrast-[1.06]"
        >
          <source src="/assets/videos/hero_bg.mp4" type="video/mp4" />
          <source src="https://www.image2url.com/r2/default/videos/1790612508670-3b3253b1-4d18-43c1-a661-c90185e6291d.mp4" type="video/mp4" />
        </video>
        {/* Soft gradient overlays preserving crisp video visibility while ensuring text contrast */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none" 
        />
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-[#0A0A0A]/20 pointer-events-none" 
        />
      </div>

      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#0B2A22]/20 blur-[140px] z-1" 
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A96E]/10 blur-[130px] z-1" 
      />
      
      {/* Subtle marble & noise texture overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] subtle-texture z-1" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[640px]">
          
          {/* LEFT SIDE: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small Gold Tagline */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#C9A96E]/60" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A96E]">
                Timeless Elegance · Enduring Legacy
              </span>
            </div>

            {/* Large Two-Line Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#F5F1EA] tracking-tight leading-[1.1] mb-6 text-balance">
              Timeless Elegance.
              <span className="block italic text-gold-gradient font-serif font-light mt-1 sm:mt-2">
                Made to Be Legendary.
              </span>
            </h1>

            {/* Short 2-line Description */}
            <p className="text-base sm:text-lg text-[#F5F1EA]/75 font-light leading-relaxed max-w-xl mb-9">
              Exquisite craftsmanship. Rare beauty. Discover fine jewelry and couture accessories handcrafted to transcend generations.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12 sm:mb-14">
              <button
                type="button"
                onClick={onShopClick}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-[#C9A96E] text-[#0A0A0A] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase rounded-none hover:bg-[#DFCA9B] transition-all duration-200 cursor-pointer shadow-lg shadow-[#C9A96E]/10"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onLookbookClick}
                className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border border-[#C9A96E]/60 text-[#F5F1EA] text-xs sm:text-sm font-medium tracking-[0.16em] uppercase rounded-none hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-200 cursor-pointer backdrop-blur-xs"
              >
                <span>Explore Lookbook</span>
              </button>
            </div>

            {/* Row of 3 Trust Features with thin gold line icons */}
            <div className="pt-8 border-t border-[#C9A96E]/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C9A96E]/20">
                
                {/* Trust 1: Premium Quality */}
                <div className="flex items-start gap-3 sm:pr-4">
                  <div className="p-1 text-[#C9A96E] shrink-0 mt-0.5">
                    <Award className="w-5 h-5 stroke-[1.3]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F5F1EA]">
                      Premium Quality
                    </h2>
                    <p className="text-[11px] text-[#F5F1EA]/60 font-light mt-0.5 leading-snug">
                      Rare ethical gemstones & 18k gold
                    </p>
                  </div>
                </div>

                {/* Trust 2: Expert Craftsmanship */}
                <div className="flex items-start gap-3 sm:px-4 pt-4 sm:pt-0">
                  <div className="p-1 text-[#C9A96E] shrink-0 mt-0.5">
                    <Compass className="w-5 h-5 stroke-[1.3]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F5F1EA]">
                      Expert Craftsmanship
                    </h2>
                    <p className="text-[11px] text-[#F5F1EA]/60 font-light mt-0.5 leading-snug">
                      Hand-sculpted in private Parisian ateliers
                    </p>
                  </div>
                </div>

                {/* Trust 3: Easy Returns */}
                <div className="flex items-start gap-3 sm:pl-4 pt-4 sm:pt-0">
                  <div className="p-1 text-[#C9A96E] shrink-0 mt-0.5">
                    <RotateCcw className="w-5 h-5 stroke-[1.3]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#F5F1EA]">
                      Easy Returns
                    </h2>
                    <p className="text-[11px] text-[#F5F1EA]/60 font-light mt-0.5 leading-snug">
                      Hassle-free complimentary 14 days
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Clean open space showcasing the background video */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>
    </section>
  );
};

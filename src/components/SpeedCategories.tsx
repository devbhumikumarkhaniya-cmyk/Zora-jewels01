import React, { useState } from 'react';
import { ArrowRight, Sparkles, Pause, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { ProductCategory } from '../types';

interface SpeedCategoriesProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export interface MarqueeCategoryItem {
  id: string;
  title: string;
  category: ProductCategory;
  tag: string;
  imageUrl: string;
  subtitle: string;
}

// TOP ROW (Uper ka row - Scrolling Left)
const ROW_1_ITEMS: MarqueeCategoryItem[] = [
  {
    id: 'row1-1',
    title: 'Colombian Emerald Masterpieces',
    category: 'Fine Jewelry',
    tag: 'SIGNATURE PIECE',
    imageUrl: '/assets/images/cat_fine_jewelry_1790598544566.jpg',
    subtitle: 'Natural Muzo emeralds set in hand-hammered 18k yellow gold',
  },
  {
    id: 'row1-2',
    title: 'Triple-Excellent Diamond Solitaires',
    category: 'Diamonds',
    tag: 'MOST POPULAR',
    imageUrl: '/assets/images/cat_diamonds_1790598559704.jpg',
    subtitle: 'GIA-certified D-color flawless brilliant cut heirlooms',
  },
  {
    id: 'row1-3',
    title: 'Architectural Evening Leather',
    category: 'Fine Accessories',
    tag: 'TRENDING ATELIER',
    imageUrl: '/assets/images/cat_fine_accessories_1790598572366.jpg',
    subtitle: 'Hand-burnished box calfskin with jewel-grade gold turnlocks',
  },
  {
    id: 'row1-4',
    title: 'Emerald Rivière Line Bracelet',
    category: 'Fine Jewelry',
    tag: 'LIMITED RUN',
    imageUrl: '/assets/images/prod_emerald_bracelet_1790598630950.jpg',
    subtitle: 'Articulated tennis links of step-cut emeralds and round diamonds',
  },
  {
    id: 'row1-5',
    title: 'Haute Couture Evening Capes',
    category: 'Haute Couture',
    tag: 'ROYAL SUITE',
    imageUrl: '/assets/images/cat_haute_couture_1790598585051.jpg',
    subtitle: 'Emerald green silk & cashmere with hand-gilded embroidery',
  },
  {
    id: 'row1-6',
    title: 'Sovereign Pear Emerald Pendant',
    category: 'Fine Jewelry',
    tag: 'VAULT EXCLUSIVE',
    imageUrl: '/assets/images/prod_emerald_pendant_1790598594423.jpg',
    subtitle: '12-carat royal drop with pavé diamond halo necklace',
  },
];

// BOTTOM ROW (Niche ka row - Scrolling Right)
const ROW_2_ITEMS: MarqueeCategoryItem[] = [
  {
    id: 'row2-1',
    title: 'Elysian Diamond Solitaire Ring',
    category: 'Diamonds',
    tag: 'NEW ARRIVAL',
    imageUrl: '/assets/images/prod_solitaire_ring_1790598619066.jpg',
    subtitle: 'Four-prong platinum cathedral setting with hidden diamond halo',
  },
  {
    id: 'row2-2',
    title: 'Pavé Cascade Diamond Hoops',
    category: 'Diamonds',
    tag: 'BEST SELLER',
    imageUrl: '/assets/images/prod_diamond_hoops_1790598606951.jpg',
    subtitle: 'Inside-out brilliant cut micro-pavé hoop earrings in 18k white gold',
  },
  {
    id: 'row2-3',
    title: 'Vendôme Box Calfskin Clutch',
    category: 'Fine Accessories',
    tag: 'HANDCRAFTED',
    imageUrl: '/assets/images/prod_calfskin_clutch_1790598641645.jpg',
    subtitle: 'Sculpted jewel lock in 24k satin gold with lambskin lining',
  },
  {
    id: 'row2-4',
    title: 'Bespoke Royal Bridal Parure',
    category: 'Bespoke Bridal',
    tag: 'GRAND TIARA',
    imageUrl: '/assets/images/cat_fine_jewelry_1790598544566.jpg',
    subtitle: 'Heirloom tiara, earrings and collar suite commissioned by royal houses',
  },
  {
    id: 'row2-5',
    title: 'Atelier Artisan Craftsmanship',
    category: 'Fine Jewelry',
    tag: 'PLACE VENDÔME',
    imageUrl: '/assets/images/artisan_crafting_jewelry_1790598525810.jpg',
    subtitle: 'Centuries-old Parisian goldsmith bench techniques and hand engraving',
  },
  {
    id: 'row2-6',
    title: 'Velvet Evening Opera Cape',
    category: 'Haute Couture',
    tag: 'LIMITED RUN',
    imageUrl: '/assets/images/cat_haute_couture_1790598585051.jpg',
    subtitle: 'Deep emerald velvet lined with French Duchess satin',
  },
];

export const SpeedCategories: React.FC<SpeedCategoriesProps> = ({ onSelectCategory }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full py-12 sm:py-16 bg-[#070F0C] border-y border-[#C9A96E]/20 overflow-hidden z-20"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0B2A22]/40 blur-[130px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#C9A96E]/10 blur-[100px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.28em] uppercase text-[#C9A96E] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>Curated High Jewelry Vaults</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#F5F1EA] tracking-wide">
              Shop by Category
              <span className="block text-sm sm:text-base italic text-gold-gradient font-light mt-1">
                Infinite Looping Archives · Dual Direction Flow
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Pause/Play toggle button for accessibility */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-[#C9A96E]/30 hover:border-[#C9A96E] text-[10.5px] text-[#C9A96E] tracking-wider uppercase transition-colors cursor-pointer"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#25D366]" />
                  <span>Resume Loop</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#C9A96E]" />
                  <span>Pause on Hover</span>
                </>
              )}
            </button>

            <span className="hidden sm:inline-block text-[11px] text-[#F5F1EA]/50 font-light">
              Click any box to filter collection
            </span>
          </div>
        </div>
      </div>

      {/* MARQUEE WRAPPER with Left & Right Gradient Shadows */}
      <div className="relative w-full overflow-hidden marquee-container">
        
        {/* Left Edge Fade Gradient */}
        <div 
          aria-hidden="true" 
          className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#070F0C] via-[#070F0C]/90 to-transparent z-20 pointer-events-none" 
        />
        {/* Right Edge Fade Gradient */}
        <div 
          aria-hidden="true" 
          className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#070F0C] via-[#070F0C]/90 to-transparent z-20 pointer-events-none" 
        />

        {/* ============================================================ */}
        {/* ROW 1: UPER KA ROW - SCROLLING HORIZONTALLY TO THE LEFT      */}
        {/* ============================================================ */}
        <div className="mb-4 sm:mb-6 overflow-hidden">
          <div 
            className={`flex gap-3 sm:gap-4 w-max ${isPaused ? 'pause-animation' : 'animate-scroll-left'}`}
            style={{ '--scroll-duration': '38s' } as React.CSSProperties}
          >
            {/* Duplicated list to create infinite seamless loop */}
            {[...ROW_1_ITEMS, ...ROW_1_ITEMS].map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                onClick={() => onSelectCategory(item.category)}
                className="group relative w-48 sm:w-64 h-56 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121212] border border-[#C9A96E]/25 hover:border-[#C9A96E] hover:shadow-[0_12px_35px_rgba(201,169,110,0.35)] shrink-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 select-none"
              >
                {/* Background Image with smooth zoom & pure neutral dark gradient (no green tint) */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-112 filter brightness-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Top Badge Strip */}
                <div className="relative z-10 flex items-center justify-between gap-1">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-md border border-[#C9A96E]/40 text-[#F5F1EA]">
                    {item.category}
                  </span>
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-[#C9A96E] text-[#0A0A0A] shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="relative z-10 pt-2">
                  <h3 className="font-serif text-sm sm:text-base font-medium text-[#F5F1EA] group-hover:text-gold-gradient transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#F5F1EA]/70 font-light line-clamp-1 leading-snug mb-2">
                    {item.subtitle}
                  </p>
                  
                  {/* Action Link with Animated Arrow */}
                  <div className="pt-2 border-t border-[#C9A96E]/20 flex items-center justify-between text-[10px] text-[#C9A96E] group-hover:text-[#F5F1EA] transition-colors">
                    <span className="font-medium tracking-widest uppercase">Explore Vault</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROW 2: NICHE KA ROW - SCROLLING HORIZONTALLY TO THE RIGHT    */}
        {/* ============================================================ */}
        <div className="overflow-hidden">
          <div 
            className={`flex gap-3 sm:gap-4 w-max ${isPaused ? 'pause-animation' : 'animate-scroll-right'}`}
            style={{ '--scroll-duration': '40s' } as React.CSSProperties}
          >
            {/* Duplicated list to create infinite seamless loop */}
            {[...ROW_2_ITEMS, ...ROW_2_ITEMS].map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                onClick={() => onSelectCategory(item.category)}
                className="group relative w-48 sm:w-64 h-56 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121212] border border-[#C9A96E]/25 hover:border-[#C9A96E] hover:shadow-[0_12px_35px_rgba(201,169,110,0.35)] shrink-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 select-none"
              >
                {/* Background Image with smooth zoom & pure neutral dark gradient (no green tint) */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-112 filter brightness-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Top Badge Strip */}
                <div className="relative z-10 flex items-center justify-between gap-1">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-md border border-[#C9A96E]/40 text-[#F5F1EA]">
                    {item.category}
                  </span>
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-[#C9A96E] text-[#0A0A0A] shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="relative z-10 pt-2">
                  <h3 className="font-serif text-sm sm:text-base font-medium text-[#F5F1EA] group-hover:text-gold-gradient transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#F5F1EA]/70 font-light line-clamp-1 leading-snug mb-2">
                    {item.subtitle}
                  </p>
                  
                  {/* Action Link with Animated Arrow */}
                  <div className="pt-2 border-t border-[#C9A96E]/20 flex items-center justify-between text-[10px] text-[#C9A96E] group-hover:text-[#F5F1EA] transition-colors">
                    <span className="font-medium tracking-widest uppercase">Explore Vault</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

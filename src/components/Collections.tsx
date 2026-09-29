import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data/products';
import { CollectionCategory } from '../types';

interface CollectionsProps {
  onSelectCategory: (category: CollectionCategory) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="relative py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#C9A96E]/5 blur-[150px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered Gold Serif Heading with Small Diamond Divider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A96E] block mb-2">
            Curated Maisons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F1EA] tracking-wide uppercase">
            Explore Our Collections
          </h2>
          
          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
            <span className="text-xs text-[#C9A96E]">◇</span>
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
          </div>

          <p className="text-sm text-[#F5F1EA]/65 font-light">
            Distinctive high jewelry collections and artisanal leather goods conceived with timeless French savoir-faire.
          </p>
        </motion.div>

        {/* 4 Equal Cards Grid with Motion Hover & Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.025,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectCategory(cat)}
              className="group relative h-[380px] sm:h-[420px] rounded-lg overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E] transition-colors duration-500 cursor-pointer shadow-xl shadow-black/40 hover:shadow-[0_16px_36px_rgba(201,169,110,0.28)] flex flex-col justify-end p-6"
            >
              {/* Category Background Image with Gentle Zoom on Hover */}
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />

              {/* Neutral Dark Scrim (No green tint, preserving authentic product photograph colors) */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/85 group-hover:via-black/25 transition-colors duration-500 pointer-events-none" 
              />

              {/* Faint gold ambient highlight */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" 
              />

              {/* Card Content */}
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] font-medium block mb-1">
                  {cat.itemCount} Exclusive Pieces
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F5F1EA] tracking-wide mb-2 group-hover:text-gold-gradient transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-[#F5F1EA]/60 font-light line-clamp-1 mb-4">
                  {cat.subtitle}
                </p>

                {/* Underlined "Shop Now" Link with smooth arrow translation */}
                <div className="inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase text-[#C9A96E] font-medium group-hover:text-[#F5F1EA] transition-colors">
                  <span className="border-b border-[#C9A96E] pb-0.5 group-hover:border-[#F5F1EA] transition-colors">
                    Shop Now
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

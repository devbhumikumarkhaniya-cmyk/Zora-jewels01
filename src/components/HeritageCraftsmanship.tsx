import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeritageCraftsmanshipProps {
  onStoryClick: () => void;
  onOpenBooking?: () => void;
}

export const HeritageCraftsmanship: React.FC<HeritageCraftsmanshipProps> = ({ 
  onStoryClick, 
  onOpenBooking 
}) => {
  return (
    <section id="about" className="relative py-8 sm:py-10 bg-[#0A0A0A] overflow-hidden border-t border-[#C9A96E]/20 min-h-[520px] lg:min-h-[580px] flex flex-col justify-between">
      {/* Background Video (Looping, Muted, No Zoom) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/videos/craft_poster.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/craft_bg.mp4" type="video/mp4" />
          <source src="https://www.image2url.com/r2/default/videos/1790613679841-e3ee08fb-2e24-4a24-8201-a2205e0d07f6.mp4" type="video/mp4" />
        </video>
        {/* Very soft gradient at the very bottom so video stays ultra clear while text remains crisp */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/35 to-transparent pointer-events-none" 
        />
      </div>

      {/* TOP HEADER: Minimal Pill */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A]/60 backdrop-blur-md border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <span>Atelier Place Vendôme · Savoir-Faire</span>
          </motion.div>

          <span className="hidden sm:inline-block text-[10px] text-[#F5F1EA]/60 uppercase tracking-widest font-mono">
            Paris, Est. 1932
          </span>
        </div>
      </div>

      {/* BOTTOM SECTION: Ultra-Compact (Chhote-Chhote) Blurry Transparent Cards with Smooth Motion */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-16 pb-2 sm:pb-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3"
        >
          
          {/* MINI BOX 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative rounded-lg bg-[#0A0A0A]/70 backdrop-blur-lg border border-[#C9A96E]/30 hover:border-[#C9A96E] p-2.5 sm:p-3 shadow-xl hover:shadow-[0_8px_25px_rgba(201,169,110,0.2)] transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#C9A96E]">
                01 · Savoir-Faire
              </span>
              <span className="text-[8.5px] text-[#F5F1EA]/40 font-mono">1932</span>
            </div>

            <h4 className="font-serif text-xs sm:text-sm font-medium text-[#F5F1EA] tracking-wide mb-1">
              Artisanal Master Lineage
            </h4>

            <p className="text-[10.5px] text-[#F5F1EA]/75 font-light leading-snug line-clamp-2">
              Parisian master goldsmiths crafting with Fairmined 18k gold and GIA certified conflict-free diamonds.
            </p>
          </motion.div>

          {/* MINI BOX 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative rounded-lg bg-[#0A0A0A]/70 backdrop-blur-lg border border-[#C9A96E]/30 hover:border-[#C9A96E] p-2.5 sm:p-3 shadow-xl hover:shadow-[0_8px_25px_rgba(201,169,110,0.2)] transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#C9A96E] flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#C9A96E]" />
                02 · Rare Gems
              </span>
              <span className="text-[8.5px] text-[#F5F1EA]/40 font-mono">Muzo</span>
            </div>

            <h4 className="font-serif text-xs sm:text-sm font-medium text-[#F5F1EA] tracking-wide mb-1">
              Sovereign Colombian Emeralds
            </h4>

            <p className="text-[10.5px] text-[#F5F1EA]/75 font-light leading-snug line-clamp-2">
              Ethically sourced Muzo emeralds cut with microscopic pavé precision to unlock royal green radiance.
            </p>
          </motion.div>

          {/* MINI BOX 3 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative rounded-lg bg-[#0A0A0A]/70 backdrop-blur-lg border border-[#C9A96E]/30 hover:border-[#C9A96E] p-2.5 sm:p-3 shadow-xl hover:shadow-[0_8px_25px_rgba(201,169,110,0.2)] transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#C9A96E]">
                  03 · Concierge
                </span>
                <span className="text-[8.5px] text-[#F5F1EA]/40 font-mono">Private</span>
              </div>

              <h4 className="font-serif text-xs sm:text-sm font-medium text-[#F5F1EA] tracking-wide mb-1">
                Heirloom Care & Viewing
              </h4>

              <p className="text-[10.5px] text-[#F5F1EA]/75 font-light leading-snug line-clamp-1 mb-1.5">
                Lifetime restoration, custom hand engraving, and private salon appointments.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-[#C9A96E]/15">
              <button
                type="button"
                onClick={onStoryClick}
                className="text-[9px] font-semibold tracking-wider uppercase text-[#C9A96E] hover:text-[#F5F1EA] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Our Story</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>

              <span className="text-[#F5F1EA]/20 text-[9px]">|</span>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[9px] font-medium tracking-wider uppercase text-[#F5F1EA]/80 hover:text-[#C9A96E] cursor-pointer transition-colors"
                >
                  <span>Book Salon</span>
                </button>
              )}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

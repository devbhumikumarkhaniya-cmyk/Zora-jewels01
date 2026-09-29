import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PACKAGE_SUITES, BUSINESS_INFO } from '../data/products';
import { PackageSuite } from '../types';

interface CuratedPackagesProps {
  onBookSuite: (suite: PackageSuite) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
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

export const CuratedPackages: React.FC<CuratedPackagesProps> = ({ onBookSuite }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#0A0A0A] text-[#F5F1EA] border-t border-[#C9A96E]/20 relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0B2A22]/40 blur-[150px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A96E] block mb-2">
            Haute Joaillerie Trousseau
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F1EA] tracking-wide uppercase">
            Curated Heirloom Suites
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
            <span className="text-xs text-[#C9A96E]">◇</span>
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
          </div>
          <p className="text-sm text-[#F5F1EA]/70 font-light">
            Harmonious high jewelry ensembles curated for grand galas, weddings, and generational legacy ceremonies.
          </p>
        </motion.div>

        {/* 3 Package Cards Grid with Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PACKAGE_SUITES.map((suite, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={suite.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`relative rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0F2820] to-[#0A0A0A] border-2 border-[#C9A96E] shadow-2xl shadow-[#0B2A22]/80 hover:shadow-[0_16px_40px_rgba(201,169,110,0.35)] lg:-translate-y-2'
                    : 'bg-[#0E1714]/80 border border-[#C9A96E]/30 hover:border-[#C9A96E] shadow-xl hover:shadow-[0_12px_32px_rgba(201,169,110,0.2)]'
                }`}
              >
                {/* Header Tag */}
                <div className="p-6 sm:p-7 border-b border-[#C9A96E]/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold tracking-widest uppercase bg-[#C9A96E] text-[#0A0A0A] px-2.5 py-0.5 rounded-xs">
                      {suite.tag}
                    </span>
                    <span className="text-xs text-[#C9A96E] tracking-wider uppercase font-medium">
                      {suite.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F5F1EA] mb-2">
                    {suite.name}
                  </h3>

                  <p className="text-xs text-[#F5F1EA]/70 font-light line-clamp-2 mb-4">
                    {suite.description}
                  </p>

                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="font-serif text-2xl sm:text-3xl text-gold-gradient font-normal tabular-nums">
                      ${suite.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#F5F1EA]/40 line-through tabular-nums">
                      ${suite.originalValue.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Items Included */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C9A96E] block">
                      Suite Inclusions ({suite.includes.length} Masterpieces)
                    </span>
                    <ul className="space-y-3">
                      {suite.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F1EA]/85">
                          <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Perks */}
                  <div className="pt-4 border-t border-[#C9A96E]/15 mb-6">
                    <div className="flex items-center gap-2 text-[11px] text-[#C9A96E]">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">Complimentary Private Atelier Salon Viewing</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => onBookSuite(suite)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#DFCA9B] shadow-md'
                        : 'border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0A0A]'
                    }`}
                  >
                    <span>Reserve Heirloom Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

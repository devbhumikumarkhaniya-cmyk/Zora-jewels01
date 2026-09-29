import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface SignaturePiecesProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onViewAll: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const SignaturePieces: React.FC<SignaturePiecesProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAll,
}) => {
  return (
    <section id="shop" className="relative py-20 lg:py-28 bg-[#F5F1EA] text-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Ivory background with gold serif heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9D7B38] block mb-2">
            Haute Joaillerie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A0A0A] tracking-wide uppercase">
            Signature Pieces
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 h-[1px] bg-[#9D7B38]/40" />
            <span className="text-xs text-[#9D7B38]">◇</span>
            <span className="w-12 h-[1px] bg-[#9D7B38]/40" />
          </div>

          <p className="text-sm text-[#0A0A0A]/70 font-light">
            Sculpted with exceptional precision, each creation honors the sublime harmony between rare earth treasures and master bench craftsmanship.
          </p>
        </motion.div>

        {/* Row of 5 Product Cards with smooth scroll entrance & hover animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {products.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className="group relative flex flex-col justify-between bg-[#EFECE6] border border-[#0A0A0A]/8 hover:border-[#9D7B38]/60 rounded-sm p-3 sm:p-4 transition-colors duration-300 hover:shadow-xl hover:shadow-[#9D7B38]/10"
              >
                {/* Top Bar: Subtle new badge & Wishlist Heart Icon */}
                <div className="flex items-center justify-between w-full mb-2 z-10">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#9D7B38] font-semibold">
                    {product.isNew ? 'New' : ''}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'text-red-700 bg-white/80 shadow-xs'
                        : 'text-[#0A0A0A]/50 hover:text-[#9D7B38] bg-transparent'
                    }`}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:scale-105 ${
                        isWishlisted ? 'fill-current' : 'stroke-[1.5]'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image on soft beige background */}
                <div 
                  className="relative w-full aspect-square overflow-hidden bg-transparent mb-4 cursor-pointer flex items-center justify-center"
                  onClick={() => onQuickView(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 transform transition-transform duration-500 ease-out group-hover:scale-108"
                  />

                  {/* Hover Quick Actions Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="px-3 py-1.5 bg-white/95 text-[#0A0A0A] text-[10px] font-semibold tracking-wider uppercase shadow-xs hover:bg-[#0A0A0A] hover:text-[#F5F1EA] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      Quick View
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="p-1.5 bg-[#0A0A0A] text-[#F5F1EA] text-[10px] shadow-xs hover:bg-[#9D7B38] transition-colors cursor-pointer"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center pt-2 border-t border-[#0A0A0A]/6">
                  <h3
                    onClick={() => onQuickView(product)}
                    className="font-serif text-xs sm:text-sm font-medium tracking-[0.08em] uppercase text-[#0A0A0A] group-hover:text-[#9D7B38] transition-colors cursor-pointer line-clamp-2 min-h-[36px]"
                  >
                    {product.name}
                  </h3>

                  <div className="font-sans text-xs sm:text-sm font-light text-[#0A0A0A]/90 mt-1 tabular-nums">
                    ${product.price.toLocaleString()}
                  </div>

                  {/* Mobile Quick Add Button */}
                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="w-full mt-3 py-2 bg-[#0A0A0A] text-[#F5F1EA] text-[10px] font-semibold tracking-widest uppercase hover:bg-[#9D7B38] transition-colors sm:hidden cursor-pointer"
                  >
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button
            type="button"
            onClick={onViewAll}
            className="px-8 py-3.5 bg-transparent border border-[#0A0A0A]/40 text-[#0A0A0A] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#0A0A0A] hover:text-[#F5F1EA] hover:border-[#0A0A0A] transition-all cursor-pointer rounded-xs"
          >
            Explore Complete Vault
          </button>
        </motion.div>

      </div>
    </section>
  );
};

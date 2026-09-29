import React, { useState, useMemo } from 'react';
import { Search, Heart, ShoppingBag, Eye, MessageCircle, SlidersHorizontal, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ALL_PRODUCTS, BUSINESS_INFO } from '../data/products';
import { Product, ProductCategory } from '../types';

interface CatalogServicesProps {
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  selectedCategoryFilter: string;
  onSelectCategoryFilter: (category: string) => void;
}

export const CatalogServices: React.FC<CatalogServicesProps> = ({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  selectedCategoryFilter,
  onSelectCategoryFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: string[] = [
    'All',
    'Fine Jewelry',
    'Diamonds',
    'Fine Accessories',
    'Haute Couture',
    'Bespoke Bridal',
  ];

  const filteredProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    if (selectedCategoryFilter !== 'All') {
      result = result.filter((p) => p.category === selectedCategoryFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.details.gemstone && p.details.gemstone.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategoryFilter, searchQuery, sortBy]);

  const handleWhatsAppEnquiry = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Zora Jewels! I would like to inquire about the ${product.name} (Price: $${product.price.toLocaleString()}). Is this piece currently available for private viewing?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-[#071914] text-[#F5F1EA] border-t border-[#C9A96E]/20 relative">
      {/* Background glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0B2A22]/50 rounded-full blur-[140px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A96E] block mb-2">
            The Haute Joaillerie Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F1EA] tracking-wide uppercase">
            Curated Creations & Bespoke Atelier
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
            <span className="text-xs text-[#C9A96E]">◇</span>
            <span className="w-12 h-[1px] bg-[#C9A96E]/40" />
          </div>
          <p className="text-sm text-[#F5F1EA]/70 font-light">
            Filter through our sovereign emeralds, triple-excellent diamonds, fine accessories, and bridal trousseau collections.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#C9A96E]/20">
          
          {/* Category Tabs (Like Ue from Axis) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategoryFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategoryFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all rounded-xs cursor-pointer ${
                    isActive
                      ? 'bg-[#C9A96E] text-[#0A0A0A] font-semibold shadow-md'
                      : 'bg-[#0A0A0A]/60 text-[#F5F1EA]/70 border border-[#C9A96E]/25 hover:border-[#C9A96E] hover:text-[#F5F1EA]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#C9A96E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                className="w-full bg-[#0A0A0A]/70 border border-[#C9A96E]/30 pl-9 pr-3 py-2 text-xs text-[#F5F1EA] placeholder-[#F5F1EA]/40 focus:outline-none focus:border-[#C9A96E]"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1.5 shrink-0 bg-[#0A0A0A]/70 border border-[#C9A96E]/30 px-3 py-2 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C9A96E]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#F5F1EA] focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#0A0A0A] text-[#F5F1EA]">Featured</option>
                <option value="price-asc" className="bg-[#0A0A0A] text-[#F5F1EA]">Price: Low to High</option>
                <option value="price-desc" className="bg-[#0A0A0A] text-[#F5F1EA]">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#F5F1EA]/60 font-light mb-6">
          <span>Showing <strong className="text-[#C9A96E] font-medium">{filteredProducts.length}</strong> creations</span>
          {selectedCategoryFilter !== 'All' && (
            <button
              onClick={() => onSelectCategoryFilter('All')}
              className="text-[#C9A96E] underline hover:text-[#F5F1EA] cursor-pointer"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0A0A0A]/40 border border-[#C9A96E]/20 p-8">
            <p className="font-serif text-lg text-[#F5F1EA]">No creations found</p>
            <p className="text-xs text-[#F5F1EA]/50 font-light mt-1">
              Try adjusting your search criteria or explore our bespoke commission services.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" }
                  }}
                  className="group relative flex flex-col justify-between bg-[#0A0A0A] border border-[#C9A96E]/20 hover:border-[#C9A96E] rounded-xs p-3.5 sm:p-4.5 transition-colors duration-300 hover:shadow-xl hover:shadow-[0_10px_30px_rgba(201,169,110,0.2)]"
                >
                  {/* Top Bar: Tag & Wishlist Button */}
                  <div className="flex items-center justify-between w-full mb-2 z-10">
                    <span className="text-[8.5px] font-bold tracking-wider uppercase text-[#0A0A0A] bg-[#C9A96E] px-2 py-0.5 rounded-xs">
                      {product.tag || product.category}
                    </span>

                    <button
                      type="button"
                      onClick={() => onToggleWishlist(product)}
                      className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                        isWishlisted
                          ? 'text-red-500 bg-white/10'
                          : 'text-[#F5F1EA]/50 hover:text-[#C9A96E]'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : 'stroke-[1.4]'}`} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div
                    onClick={() => onQuickView(product)}
                    className="relative aspect-square w-full bg-[#EFECE6] rounded-xs overflow-hidden mb-4 cursor-pointer flex items-center justify-center p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickView(product);
                        }}
                        className="px-3 py-1.5 bg-[#0A0A0A]/95 text-[#F5F1EA] text-[10px] font-semibold tracking-wider uppercase border border-[#C9A96E]/40 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-2">
                    <div className="text-[10px] tracking-widest uppercase text-[#C9A96E] font-medium">
                      {product.category}
                    </div>

                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-serif text-xs sm:text-sm font-medium text-[#F5F1EA] group-hover:text-gold-gradient transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="font-serif text-sm sm:text-base font-light text-[#F5F1EA] tabular-nums">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#F5F1EA]/40 line-through tabular-nums">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons: Add to Bag & WhatsApp Enquiry */}
                    <div className="pt-3 border-t border-[#C9A96E]/15 grid grid-cols-2 gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="w-full py-2 bg-[#C9A96E] text-[#0A0A0A] text-[9.5px] sm:text-[10px] font-semibold tracking-wider uppercase hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="Add to Shopping Bag"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add to Bag</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleWhatsAppEnquiry(product)}
                        className="w-full py-2 bg-[#0B2A22] border border-[#C9A96E]/40 text-[#C9A96E] text-[9.5px] sm:text-[10px] font-semibold tracking-wider uppercase hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="Inquire via WhatsApp"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

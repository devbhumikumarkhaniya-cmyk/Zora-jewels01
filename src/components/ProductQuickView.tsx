import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-6">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/30 rounded-none text-left overflow-hidden shadow-2xl max-w-3xl w-full my-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#F5F1EA]/70 hover:text-[#C9A96E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image side with soft travertine tone */}
            <div className="relative bg-[#EFECE6] p-8 flex items-center justify-center min-h-[340px] md:min-h-[460px]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[340px] w-full object-contain filter drop-shadow-md"
              />

              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#0A0A0A] font-semibold bg-white/80 px-2 py-0.5">
                  Atelier Archive
                </span>
              </div>
            </div>

            {/* Info side */}
            <div className="p-6 md:p-8 flex flex-col justify-between text-[#F5F1EA]">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-1">
                  J.P Jewellers · Rajkot Atelier
                </div>

                <h3 className="font-serif text-2xl font-light text-[#F5F1EA] tracking-wide mb-2">
                  {product.name}
                </h3>

                <div className="text-xl font-light text-gold-gradient tracking-wide mb-4 tabular-nums">
                  ${product.price.toLocaleString()}
                </div>

                <p className="text-xs text-[#F5F1EA]/75 font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Technical Specifications */}
                <div className="border-t border-b border-[#C9A96E]/20 py-4 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#F5F1EA]/50">Metal / Alloy:</span>
                    <span className="font-medium text-[#F5F1EA]">{product.details.metal}</span>
                  </div>
                  {product.details.gemstone && (
                    <div className="flex justify-between">
                      <span className="text-[#F5F1EA]/50">Gemstone:</span>
                      <span className="font-medium text-[#F5F1EA]">{product.details.gemstone}</span>
                    </div>
                  )}
                  {product.details.carat && (
                    <div className="flex justify-between">
                      <span className="text-[#F5F1EA]/50">Carat Weight:</span>
                      <span className="font-medium text-[#C9A96E]">{product.details.carat}</span>
                    </div>
                  )}
                  {product.details.origin && (
                    <div className="flex justify-between">
                      <span className="text-[#F5F1EA]/50">Provenance:</span>
                      <span className="font-medium text-[#F5F1EA]">{product.details.origin}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                {/* Quantity and Actions */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-[#C9A96E]/40 bg-[#121212]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-medium text-[#F5F1EA] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 text-[#0A0A0A]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 border border-[#C9A96E]/40 transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'text-red-500 bg-white/10'
                        : 'text-[#F5F1EA]/70 hover:text-[#C9A96E]'
                    }`}
                    title={isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#F5F1EA]/50 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Certificate of Authenticity & Armored Express Shipping</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

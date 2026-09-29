import React from 'react';
import { X, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0A0A0A] border-l border-[#C9A96E]/20 text-[#F5F1EA] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#C9A96E]/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-[0.15em] uppercase text-[#F5F1EA]">
                Saved Creations
              </span>
              <span className="text-xs text-[#C9A96E] font-medium tabular-nums">
                ({wishlistProducts.length})
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#F5F1EA]/60 hover:text-[#C9A96E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]/60">
                  <Heart className="w-5 h-5 stroke-[1.4]" />
                </div>
                <p className="font-serif text-lg text-[#F5F1EA]/80">
                  Your wishlist is empty
                </p>
                <p className="text-xs text-[#F5F1EA]/50 font-light">
                  Save your desired heirlooms and bespoke creations for later review.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-[#C9A96E]/10">
                {wishlistProducts.map((product) => (
                  <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                    <div className="w-20 h-20 bg-[#EFECE6] rounded-xs shrink-0 overflow-hidden p-1 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-xs font-medium text-[#F5F1EA] tracking-wide line-clamp-1">
                            {product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveFromWishlist(product.id)}
                            className="text-[#F5F1EA]/40 hover:text-red-400 p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs font-light text-[#C9A96E] mt-0.5 tabular-nums">
                          ${product.price.toLocaleString()}
                        </div>
                      </div>

                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => {
                            onMoveToCart(product);
                            onRemoveFromWishlist(product.id);
                          }}
                          className="w-full py-1.5 bg-[#C9A96E] text-[#0A0A0A] text-[10px] font-semibold tracking-widest uppercase hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Move to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 border-t border-[#C9A96E]/15 bg-[#071914]/80 text-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 border border-[#C9A96E]/60 text-[#F5F1EA] text-xs font-medium tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const handleReset = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
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
                Shopping Bag
              </span>
              <span className="text-xs text-[#C9A96E] font-medium tabular-nums">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
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

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0B2A22] border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F1EA]">
                  Order Confirmed
                </h3>
                <p className="text-xs text-[#F5F1EA]/70 font-light leading-relaxed max-w-xs mx-auto">
                  Thank you for entrusting Zora Jewels. Your private concierge is preparing your insured express dispatch.
                </p>
                <div className="text-[11px] text-[#C9A96E] tracking-widest uppercase pt-2">
                  Order #ZORA-89421
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase hover:bg-[#DFCA9B]"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E]/60">
                  <span className="font-serif text-xl italic">É</span>
                </div>
                <p className="font-serif text-lg text-[#F5F1EA]/80">
                  Your shopping bag is empty
                </p>
                <p className="text-xs text-[#F5F1EA]/50 font-light">
                  Explore our signature creations and fine collections.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] text-xs uppercase tracking-widest hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors"
                >
                  Discover Creations
                </button>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-[#C9A96E]/10">
                {items.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                    <div className="w-20 h-20 bg-[#EFECE6] rounded-xs shrink-0 overflow-hidden p-1 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-xs font-medium text-[#F5F1EA] tracking-wide line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#F5F1EA]/40 hover:text-red-400 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs font-light text-[#C9A96E] mt-0.5 tabular-nums">
                          ${item.product.price.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#C9A96E]/30 bg-[#121212]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="px-2.5 py-0.5 text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E]"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-medium text-[#F5F1EA] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="px-2.5 py-0.5 text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E]"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs text-[#F5F1EA]/80 tabular-nums">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-6 border-t border-[#C9A96E]/15 bg-[#071914]/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#F5F1EA]/70 font-light">
                  <span>Complimentary Insured Courier</span>
                  <span className="text-[#C9A96E] uppercase tracking-wider font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-[#F5F1EA] text-sm pt-2 border-t border-[#C9A96E]/10">
                  <span className="font-serif tracking-wider uppercase">Estimated Total</span>
                  <span className="font-medium text-[#C9A96E] tabular-nums text-base">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#F5F1EA]/60 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>Discreet armored transport & insurance included</span>
              </div>

              <button
                type="button"
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full py-3.5 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

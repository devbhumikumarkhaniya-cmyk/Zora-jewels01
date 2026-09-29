import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          (p.details.gemstone && p.details.gemstone.toLowerCase().includes(query.toLowerCase()))
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-start justify-center p-4 pt-20 sm:p-6 sm:pt-24">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/30 max-w-2xl w-full p-6 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#C9A96E]/20">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E]">
              Catalog Inquiry
            </span>
            <button
              onClick={onClose}
              className="text-[#F5F1EA]/60 hover:text-[#C9A96E] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative my-6">
            <Search className="w-5 h-5 text-[#C9A96E] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search emeralds, solitaires, earrings, leather..."
              className="w-full bg-[#121212] border border-[#C9A96E]/30 pl-12 pr-4 py-3.5 text-sm text-[#F5F1EA] placeholder-[#F5F1EA]/40 focus:outline-none focus:border-[#C9A96E]"
            />
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto divide-y divide-[#C9A96E]/10">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#F5F1EA]/50 font-light">
                No creations found matching "{query}". Contact our concierge for bespoke commissions.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="py-3 flex items-center justify-between group hover:bg-[#0B2A22]/40 px-2 rounded-xs cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain bg-[#EFECE6] p-1"
                    />
                    <div>
                      <h4 className="font-serif text-xs text-[#F5F1EA] group-hover:text-[#C9A96E] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-[#C9A96E]/80 tracking-wider uppercase font-light">
                        {item.category} · ${item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C9A96E]/40 group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

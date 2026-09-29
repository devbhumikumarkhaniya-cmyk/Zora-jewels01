import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Zora Jewels! I would like to inquire about your fine jewelry and bespoke salon viewings.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Zora Jewels"
        className="group relative flex items-center gap-2.5 bg-[#0B2A22] text-[#F5F1EA] pl-3 pr-4 py-3 rounded-full border border-[#25D366]/50 shadow-2xl hover:border-[#25D366] transition-all hover:scale-105"
      >
        {/* Pulse aura */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full" />

        <div className="w-8 h-8 rounded-full bg-[#25D366] text-[#0A0A0A] flex items-center justify-center shadow-md">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] font-medium leading-none">
            Private Concierge
          </span>
          <span className="text-xs font-semibold tracking-wide text-white leading-tight mt-0.5">
            WhatsApp Live
          </span>
        </div>
      </a>
    </div>
  );
};

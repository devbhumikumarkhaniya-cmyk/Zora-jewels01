import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface QuickContactDockProps {
  onOpenBooking: () => void;
}

export const QuickContactDock: React.FC<QuickContactDockProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello J.P Jewellers! I would like to inquire about gold jewelry designs and salon viewing.'
  )}`;

  return (
    <aside
      aria-label="Quick salon contact panel"
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col bg-[#071914]/95 backdrop-blur-md rounded-l-2xl shadow-2xl border-l border-y border-[#C9A96E]/30 py-4 px-2.5 divide-y divide-[#C9A96E]/20"
    >
      {/* 1. WhatsApp Consultation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center justify-center p-2 text-[#C9A96E] hover:text-[#25D366] transition-colors pb-3"
        title="Direct WhatsApp Consultation"
      >
        <div className="w-9 h-9 rounded-full bg-[#0B2A22] border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#25D366] transition-colors">
          <MessageCircle className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-semibold tracking-wider uppercase mt-1">
          WhatsApp
        </span>
      </a>

      {/* 2. Book Private Salon Viewing */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="group relative flex flex-col items-center justify-center p-2 text-[#C9A96E] hover:text-[#F5F1EA] transition-colors py-3 cursor-pointer"
        title="Book Private Salon Viewing"
      >
        <div className="w-9 h-9 rounded-full bg-[#0B2A22] border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#0A0A0A] transition-all">
          <Calendar className="w-4 h-4" />
        </div>
        <span className="text-[9px] font-semibold tracking-wider uppercase mt-1">
          Book Salon
        </span>
      </button>

      {/* 3. Direct Phone Concierge */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="group relative flex flex-col items-center justify-center p-2 text-[#C9A96E] hover:text-[#F5F1EA] transition-colors pt-3"
        title={`Call Concierge at ${BUSINESS_INFO.phone}`}
      >
        <div className="w-9 h-9 rounded-full bg-[#0B2A22] border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[9px] font-semibold tracking-wider uppercase mt-1">
          Call
        </span>
      </a>
    </aside>
  );
};

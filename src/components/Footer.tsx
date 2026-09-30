import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, ChevronDown, Check } from 'lucide-react';

interface FooterProps {
  onCategoryFilter?: (catId: string) => void;
  onClientServiceClick?: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCategoryFilter, onClientServiceClick }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD ($)');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', label: 'United States (USD $)' },
    { code: 'EUR', symbol: '€', label: 'European Union (EUR €)' },
    { code: 'GBP', symbol: '£', label: 'United Kingdom (GBP £)' },
    { code: 'JPY', symbol: '¥', label: 'Japan (JPY ¥)' },
    { code: 'CHF', symbol: 'Fr.', label: 'Switzerland (CHF Fr.)' },
  ];

  const shopLinks = [
    { name: 'New Arrivals', id: 'new' },
    { name: 'Jewelry', id: 'jewelry' },
    { name: 'Diamonds', id: 'diamonds' },
    { name: 'Accessories', id: 'accessories' },
    { name: 'Gift Guide', id: 'gift-guide' },
  ];

  const clientServiceLinks = [
    'Contact Us',
    'Shipping & Returns',
    'Orders & Payments',
    'Care & Repair',
    'FAQ',
  ];

  return (
    <footer id="contact" className="relative bg-[#0A0A0A] text-[#F5F1EA] border-t border-[#C9A96E]/20 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#C9A96E]/15">
          
          {/* Column 1: Brand Logo, Tagline & Social Icons */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997929] overflow-hidden shrink-0 shadow-md">
                  <img
                    src="/assets/images/jp_jewellers_logo.png"
                    alt="J.P Jewellers Logo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="font-cinzel tracking-[0.22em] text-lg font-bold text-[#F5F1EA] uppercase">
                  J.P <span className="font-light text-[#D4AF37]">Jewellers</span>
                </span>
              </div>

              <p className="text-xs text-[#F5F1EA]/65 font-light leading-relaxed max-w-sm mb-6">
                Rajkot's premier destination for hallmark gold jewelry, certified diamonds, and bespoke bridal heirloom treasures crafted with legendary precision.
              </p>
            </div>

            {/* Social Icons (Instagram, Facebook, Pinterest, YouTube) */}
            <div className="flex items-center gap-4 text-[#F5F1EA]/70">
              <a
                href="#instagram"
                aria-label="Follow J.P Jewellers on Instagram"
                className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
              >
                <Instagram className="w-4 h-4 stroke-[1.4]" />
              </a>
              <a
                href="#facebook"
                aria-label="Follow J.P Jewellers on Facebook"
                className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
              >
                <Facebook className="w-4 h-4 stroke-[1.4]" />
              </a>
              <a
                href="#pinterest"
                aria-label="Follow J.P Jewellers on Pinterest"
                className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors text-xs font-serif italic"
              >
                P
              </a>
              <a
                href="#youtube"
                aria-label="Subscribe to J.P Jewellers on YouTube"
                className="w-8 h-8 rounded-full border border-[#C9A96E]/30 flex items-center justify-center hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
              >
                <Youtube className="w-4 h-4 stroke-[1.4]" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop (New Arrivals, Jewelry, Diamonds, Accessories, Gift Guide - NO WATCHES) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href="#shop"
                    onClick={(e) => {
                      e.preventDefault();
                      onCategoryFilter?.(item.id);
                    }}
                    className="text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E] transition-colors font-light"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Client Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              Client Services
            </h4>
            <ul className="space-y-3">
              {clientServiceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onClientServiceClick?.(service)}
                    className="text-xs text-[#F5F1EA]/70 hover:text-[#C9A96E] transition-colors font-light text-left cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (phone, email, boutique locator) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-5">
              Contact
            </h4>

            {/* Phone */}
            <div className="flex items-start gap-3 text-xs text-[#F5F1EA]/80 font-light">
              <Phone className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#C9A96E]">Direct Phone & WhatsApp</span>
                <a href="tel:+919328591000" className="hover:text-[#C9A96E] transition-colors font-medium">
                  +91 93285 91000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-xs text-[#F5F1EA]/80 font-light">
              <Mail className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#C9A96E]">Private Concierge</span>
                <a href="mailto:contact@jpjewellers.com" className="hover:text-[#C9A96E] transition-colors">
                  contact@jpjewellers.com
                </a>
              </div>
            </div>

            {/* Boutique Locator */}
            <div className="flex items-start gap-3 text-xs text-[#F5F1EA]/80 font-light">
              <MapPin className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#C9A96E]">Showroom Address</span>
                <span className="leading-snug block">
                  Ashapura Temple, Palace Rd, opp. Near, Prahlad Plot, Rajkot, Gujarat 360001
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Currency Selector */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#F5F1EA]/60 font-light">
          
          {/* Copyright */}
          <div>
            © 2026 J.P Jewellers. All Rights Reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-[#C9A96E] transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-[#C9A96E] transition-colors">
              Terms & Conditions
            </a>
            <span>·</span>
            <a href="#accessibility" className="hover:text-[#C9A96E] transition-colors">
              Accessibility
            </a>
            <span>·</span>
            <a href="#ethical" className="hover:text-[#C9A96E] transition-colors">
              Ethical Sourcing
            </a>
          </div>

          {/* Currency Selector (USD) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#C9A96E]/30 bg-[#121212] text-[#F5F1EA] hover:border-[#C9A96E] transition-colors cursor-pointer"
            >
              <span className="text-[10px] tracking-widest uppercase font-medium">{selectedCurrency}</span>
              <ChevronDown className="w-3 h-3 text-[#C9A96E]" />
            </button>

            {isCurrencyOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-52 bg-[#0A0A0A] border border-[#C9A96E]/40 shadow-xl py-1 z-30">
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    type="button"
                    onClick={() => {
                      setSelectedCurrency(`${curr.code} (${curr.symbol})`);
                      setIsCurrencyOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-[#0B2A22] text-[#F5F1EA] flex items-center justify-between cursor-pointer"
                  >
                    <span>{curr.label}</span>
                    {selectedCurrency.includes(curr.code) && (
                      <Check className="w-3.5 h-3.5 text-[#C9A96E]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
};

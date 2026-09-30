import React, { useState } from 'react';
import { X, Calendar, Phone, Mail, Check } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'appointment' | 'concierge'>('appointment');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Paris');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/30 max-w-xl w-full p-8 text-[#F5F1EA] shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#F5F1EA]/60 hover:text-[#C9A96E] p-1"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
              Private Salon Experience
            </span>
            <h3 className="font-serif text-2xl font-light mt-1">
              Client Concierge Services
            </h3>
            <div className="flex items-center justify-center gap-3 my-2">
              <span className="w-6 h-[1px] bg-[#C9A96E]/40" />
              <span className="text-xs text-[#C9A96E]">◇</span>
              <span className="w-6 h-[1px] bg-[#C9A96E]/40" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#C9A96E]/20 mb-6">
            <button
              onClick={() => setTab('appointment')}
              className={`flex-1 py-2 text-xs tracking-widest uppercase transition-colors ${
                tab === 'appointment'
                  ? 'border-b-2 border-[#C9A96E] text-[#C9A96E] font-medium'
                  : 'text-[#F5F1EA]/60 hover:text-[#F5F1EA]'
              }`}
            >
              Book Salon Appointment
            </button>
            <button
              onClick={() => setTab('concierge')}
              className={`flex-1 py-2 text-xs tracking-widest uppercase transition-colors ${
                tab === 'concierge'
                  ? 'border-b-2 border-[#C9A96E] text-[#C9A96E] font-medium'
                  : 'text-[#F5F1EA]/60 hover:text-[#F5F1EA]'
              }`}
            >
              Bespoke Inquiry
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0B2A22] border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl">Consultation Requested</h4>
              <p className="text-xs text-[#F5F1EA]/70 font-light max-w-sm mx-auto">
                A Senior High Jewelry Concierge will reach out via confidential correspondence within 2 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#C9A96E] tracking-wider uppercase mb-1 text-[10px]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Lady Genevieve Sterling"
                  className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2.5 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="block text-[#C9A96E] tracking-wider uppercase mb-1 text-[10px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@prestige.com"
                  className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2.5 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="block text-[#C9A96E] tracking-wider uppercase mb-1 text-[10px]">
                  Preferred Boutique / Salon
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2.5 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                >
                  <option value="Rajkot">Ashapura Temple, Palace Rd, Rajkot</option>
                  <option value="Boutique">Palace Road Boutique, Rajkot</option>
                  <option value="PrahladPlot">Prahlad Plot Suite, Rajkot</option>
                  <option value="Virtual">Private Virtual Video Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C9A96E] text-[#0A0A0A] font-semibold tracking-[0.2em] uppercase hover:bg-[#DFCA9B] transition-colors mt-6 cursor-pointer"
              >
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

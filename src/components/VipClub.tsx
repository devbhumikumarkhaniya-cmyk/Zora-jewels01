import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

interface VipClubProps {
  onSubscribeSuccess: (email: string) => void;
}

export const VipClub: React.FC<VipClubProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid client email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    onSubscribeSuccess(email);
  };

  return (
    <section className="relative py-20 lg:py-24 bg-emerald-vip bg-marble-emerald text-center overflow-hidden border-t border-b border-[#C9A96E]/20">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] subtle-texture" 
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A96E]/10 rounded-full blur-[120px]" 
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Diamond Icon */}
        <div className="w-8 h-8 mx-auto mb-4 rounded-sm border border-[#C9A96E]/60 flex items-center justify-center rotate-45 text-[#C9A96E]">
          <span className="-rotate-45 text-xs">✦</span>
        </div>

        {/* Gold Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gold-gradient tracking-wide uppercase mb-3">
          Join the VIP Club
        </h2>

        {/* Short Text */}
        <p className="text-sm sm:text-base text-[#F5F1EA]/80 font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Be the first to discover new arrivals, exclusive private salon collections, and invitation-only atelier events, delivered directly to you.
        </p>

        {isSubmitted ? (
          <div className="bg-[#0A0A0A]/80 border border-[#C9A96E]/40 p-6 rounded-none max-w-md mx-auto animate-fade-in">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#F5F1EA] mb-1">
              Bienvenue to Zora Jewels
            </h3>
            <p className="text-xs text-[#F5F1EA]/70 font-light">
              A private invitation and archival lookbook have been dispatched to{' '}
              <span className="text-[#C9A96E] font-medium">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 border border-[#C9A96E]/40 p-1 bg-[#0A0A0A]/80 backdrop-blur-xs">
              <div className="relative flex-1 flex items-center">
                <Mail className="w-4 h-4 text-[#C9A96E]/60 absolute left-3 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent pl-10 pr-4 py-3 text-xs sm:text-sm text-[#F5F1EA] placeholder-[#F5F1EA]/40 focus:outline-none"
                  aria-label="Email address for VIP Club"
                />
              </div>

              <button
                type="submit"
                className="px-7 py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#DFCA9B] transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-400 mt-2 text-left">{error}</p>
            )}

            {/* Small Privacy Note */}
            <p className="text-[11px] text-[#F5F1EA]/50 font-light mt-3 leading-normal">
              By subscribing, you agree to our{' '}
              <a href="#privacy" className="text-[#C9A96E]/80 underline hover:text-[#C9A96E]">
                Privacy Policy
              </a>{' '}
              and consent to receive updates from Zora Jewels.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

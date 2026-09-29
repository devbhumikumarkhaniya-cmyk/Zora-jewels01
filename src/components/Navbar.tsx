import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, Calendar, ShieldAlert, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  appointmentsCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenBooking: () => void;
  onOpenAdminLog: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  appointmentsCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onOpenBooking,
  onOpenAdminLog,
  onReplayIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT US', href: '#about' },
    { id: 'collections', label: 'COLLECTIONS', href: '#collections' },
    { id: 'catalog', label: 'CATALOGUE', href: '#catalog' },
    { id: 'reviews', label: 'REVIEWS', href: '#reviews' },
    { id: 'contact', label: 'CONTACT US', href: '#contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A96E]/25 shadow-xl shadow-black/60 py-3'
            : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#C9A96E]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button (Left on Mobile) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#F5F1EA] hover:text-[#C9A96E] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo Lockup with Animated Rotating Gold Halo & Zora Jewels Medallion */}
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home', '#home');
                  if (onReplayIntro) onReplayIntro();
                }}
                title="Zora Jewels - Click to replay intro"
                className="group flex items-center gap-3 select-none focus:outline-none"
              >
                {/* Circular Emblem with Animated Rotating Gold Halo */}
                <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997929] shadow-md group-hover:shadow-[0_0_18px_rgba(212,175,55,0.6)] transition-all duration-500">
                  {/* Rotating orbital dashed ring */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-1 rounded-full border border-[#D4AF37]/45 border-dashed animate-spin-slow pointer-events-none"
                  />
                  {/* Inner logo frame */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative">
                    <img
                      src="/src/assets/images/zora_jewels_logo.png"
                      alt="Zora Jewels Logo"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-cinzel tracking-[0.2em] text-base sm:text-lg font-bold leading-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F9E8B2] via-[#E5C07B] to-[#D4AF37] group-hover:from-white group-hover:to-[#E5C07B] transition-all duration-300">
                    ZORA <span className="font-light tracking-[0.22em] text-white">JEWELS</span>
                  </span>
                  <span className="text-[8.5px] uppercase tracking-[0.28em] font-semibold leading-none mt-1 text-[#C9A96E]">
                    Haute Joaillerie & Couture
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links with Dual-Line Indicator */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id, link.href);
                    }}
                    className="group relative flex flex-col items-center py-1 cursor-pointer"
                  >
                    <span
                      className={`text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
                        isActive
                          ? 'text-[#C9A96E] font-semibold'
                          : 'text-[#F5F1EA]/80 group-hover:text-[#C9A96E]'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Dual-Indicator Upper & Lower Lines like Axis Beauty Salon */}
                    <span className={`category-dual-indicator w-full mt-1 ${isActive ? 'active' : ''}`}>
                      <span className="category-line-upper" />
                      <span className="category-line-lower" />
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions: Admin Log, Book Salon, Search, Wishlist, Cart */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              
              {/* Intro Film Replay Button */}
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#071914] text-[10px] font-semibold tracking-wider uppercase text-[#E5C07B] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all cursor-pointer shadow-xs"
                  title="Watch Brand Intro Film"
                >
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Intro Film</span>
                </button>
              )}

              {/* Admin Appointments Log Button (Like Fe from Axis) */}
              <button
                type="button"
                onClick={onOpenAdminLog}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#071914] border border-[#C9A96E]/40 text-[#C9A96E] text-[10.5px] font-semibold tracking-wider uppercase hover:bg-[#0B2A22] hover:border-[#C9A96E] transition-all cursor-pointer shadow-xs rounded-xs"
                title="Salon Management / Admin Bookings Console"
              >
                <span>Admin Log</span>
                {appointmentsCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#C9A96E] text-[#0A0A0A] text-[9px] font-bold flex items-center justify-center tabular-nums">
                    {appointmentsCount}
                  </span>
                )}
              </button>

              {/* Book Salon Viewing Button (Like Axis Book Appointment) */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFCA9B] transition-all duration-200 cursor-pointer shadow-md rounded-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Salon</span>
              </button>

              {/* Search */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-[#F5F1EA]/80 hover:text-[#C9A96E] transition-colors cursor-pointer"
                aria-label="Search Catalog"
              >
                <Search className="w-4.5 h-4.5 stroke-[1.4]" />
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-1.5 text-[#F5F1EA]/80 hover:text-[#C9A96E] transition-colors cursor-pointer"
                aria-label={`Wishlist with ${wishlistCount} items`}
              >
                <Heart className="w-4.5 h-4.5 stroke-[1.4]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-[#C9A96E] text-[#0A0A0A] text-[9.5px] font-bold rounded-full flex items-center justify-center px-1 tabular-nums shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-1.5 text-[#F5F1EA]/80 hover:text-[#C9A96E] transition-colors cursor-pointer"
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-4.5 h-4.5 stroke-[1.4]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-[#C9A96E] text-[#0A0A0A] text-[9.5px] font-bold rounded-full flex items-center justify-center px-1 tabular-nums shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#0A0A0A] border-r border-[#C9A96E]/20 p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C9A96E]/15">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997929] overflow-hidden">
                    <img
                      src="/src/assets/images/zora_jewels_logo.png"
                      alt="Zora Jewels Logo"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-cinzel tracking-widest text-sm uppercase text-[#F5F1EA] font-bold">
                    Zora Jewels
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#F5F1EA]/70 hover:text-[#C9A96E]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id, link.href);
                      }}
                      className={`text-xs tracking-[0.2em] uppercase py-2.5 transition-colors flex items-center justify-between border-b border-[#C9A96E]/10 ${
                        isActive ? 'text-[#C9A96E] font-semibold' : 'text-[#F5F1EA]/80 hover:text-[#C9A96E]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />}
                    </a>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full mt-4 py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Salon Viewing</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAdminLog();
                  }}
                  className="w-full py-2.5 bg-[#071914] border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-semibold tracking-widest uppercase hover:border-[#C9A96E] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Admin Appointments Log ({appointmentsCount})</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C9A96E]/15 space-y-2 text-[11px] text-[#F5F1EA]/60">
              <div className="text-[#C9A96E] font-medium uppercase tracking-wider">
                Private Concierge
              </div>
              <p>Place Vendôme, Paris · +1 (833) 555-ÉLYSÉE</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

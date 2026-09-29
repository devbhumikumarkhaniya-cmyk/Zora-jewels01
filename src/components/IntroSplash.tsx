import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stage 1: Laser Horizon & Light beam ignition (100ms)
    const t1 = setTimeout(() => setPhase(1), 100);
    // Stage 2: Logo emergence with gold specular shimmer (600ms)
    const t2 = setTimeout(() => setPhase(2), 650);
    // Stage 3: Diamond foliage & teardrop glints activate (1300ms)
    const t3 = setTimeout(() => setPhase(3), 1300);
    // Stage 4: Typography expansion & subtitle reveal (2000ms)
    const t4 = setTimeout(() => setPhase(4), 2000);
    // Auto complete after full cinematic experience (3900ms)
    const tAuto = setTimeout(() => handleClose(), 3900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tAuto);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="intro-splash"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050506] text-white transition-all duration-700 select-none overflow-hidden ${
        isClosing ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{ perspective: '1200px' }}
    >
      {/* 1. Deep Atmospheric Dark Velvet & Volumetric Amber Backdrop */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.18)_0%,rgba(15,13,10,0.85)_50%,#040405_100%)] pointer-events-none" 
      />

      {/* 2. Microscopic Floating Golden Dust Particles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#E5C07B]"
            style={{
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              top: `${(i * 13) % 100}%`,
              left: `${(i * 19) % 100}%`,
              opacity: ((i % 4) + 2) / 10,
              boxShadow: '0 0 10px #D4AF37',
              animation: `floatParticle ${5 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${(i % 6) * 0.35}s`,
            }}
          />
        ))}
      </div>

      {/* 3. Initial Laser Light Horizon Line (Draws horizontally across center) */}
      <div
        aria-hidden="true"
        className={`absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFF1C2] to-transparent pointer-events-none transition-all duration-1000 transform -translate-y-1/2 ${
          phase === 1
            ? 'scale-x-100 opacity-90 shadow-[0_0_20px_#D4AF37]'
            : phase >= 2
            ? 'scale-x-110 opacity-0'
            : 'scale-x-0 opacity-0'
        }`}
      />

      {/* 4. Subtle Ambient Golden Aura behind the Logo */}
      <div
        aria-hidden="true"
        className={`absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-[#C9A96E]/18 blur-[110px] pointer-events-none transition-all duration-1000 ${
          phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />

      {/* 5. Main Logo Showcase Container (with gentle 3D tilt & smooth spring entrance) */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 max-w-xl transition-all duration-1000 transform ${
          phase >= 2
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-8'
        }`}
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: 'transform 0.15s ease-out, opacity 0.8s ease-out',
        }}
      >
        {/* Emblem Frame with Luxury Border & Shimmer */}
        <div className="relative w-64 sm:w-80 md:w-96 aspect-square flex items-center justify-center group">
          
          {/* Subtle Outer Golden Frame Ring Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-2 sm:inset-4 rounded-full border border-[#D4AF37]/30 opacity-70 animate-pulse-glow pointer-events-none"
          />

          {/* Golden Shimmer Light Streak sweeping diagonally */}
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl z-20"
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep" />
          </div>

          {/* The High-Resolution User-Requested ZORA JEWELS Logo */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
            <img
              src="/assets/images/zora_jewels_logo.png"
              alt="Zora Jewels Official Imperial Haute Joaillerie Logo"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_36px_rgba(212,175,55,0.45)] select-none transition-transform duration-700"
            />
          </div>

          {/* Animated Diamond Twinkle Glints over Key Positions */}
          {/* Glint 1: On Top Leaf Diamond */}
          <div
            aria-hidden="true"
            className={`absolute top-[18%] right-[32%] z-30 pointer-events-none transition-opacity duration-500 ${
              phase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animation: 'twinkleSparkle 2.6s ease-in-out infinite', animationDelay: '0.2s' }}
          >
            <Sparkles className="w-6 h-6 text-[#FFFBE6] drop-shadow-[0_0_12px_#FFF3C4]" />
          </div>

          {/* Glint 2: On the Hanging Pear-Cut Diamond Teardrop Pendant */}
          <div
            aria-hidden="true"
            className={`absolute top-[42%] right-[38%] z-30 pointer-events-none transition-opacity duration-500 ${
              phase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animation: 'twinkleSparkle 3s ease-in-out infinite', animationDelay: '1.1s' }}
          >
            <Sparkles className="w-7 h-7 text-[#FFFFFF] drop-shadow-[0_0_16px_#FFEAA7]" />
          </div>

          {/* Glint 3: Inside the star of letter 'O' in ZORA */}
          <div
            aria-hidden="true"
            className={`absolute bottom-[28%] left-[42%] z-30 pointer-events-none transition-opacity duration-500 ${
              phase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animation: 'twinkleSparkle 2.8s ease-in-out infinite', animationDelay: '1.8s' }}
          >
            <Sparkles className="w-5 h-5 text-[#FFF9D6] drop-shadow-[0_0_10px_#D4AF37]" />
          </div>
        </div>

        {/* Brand Tagline & Origin */}
        <div
          className={`mt-2 space-y-2 transition-all duration-1000 transform ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/70" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.38em] uppercase text-[#E5C07B]">
              Place Vendôme · Paris
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/70" />
          </div>

          <p className="text-xs text-[#F5F1EA]/65 font-light tracking-wide max-w-xs mx-auto">
            Imperial Haute Joaillerie & Bespoke Diamond Creations
          </p>
        </div>

        {/* Action Button: Enter the Vault */}
        <div
          className={`mt-7 transition-all duration-700 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            type="button"
            onClick={handleClose}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C9A96E] text-[#0A0A0A] text-xs font-semibold tracking-[0.22em] uppercase rounded-none transition-all duration-300 cursor-pointer shadow-lg shadow-[#D4AF37]/25 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95"
          >
            <span>Enter Boutique</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Top Right Quick Skip Button */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[10px] tracking-widest uppercase text-[#F5F1EA]/70 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all cursor-pointer backdrop-blur-md"
      >
        <span>Skip</span>
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Bottom Cinematic Timing Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/60 z-20">
        <div 
          className="h-full bg-gradient-to-r from-[#997929] via-[#D4AF37] to-[#FFF1C2] transition-all ease-linear"
          style={{
            width: isClosing ? '100%' : '100%',
            transitionDuration: '3800ms',
          }}
        />
      </div>
    </div>
  );
};

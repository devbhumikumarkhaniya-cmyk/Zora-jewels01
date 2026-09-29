/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpeedCategories } from './components/SpeedCategories';
import { Collections } from './components/Collections';
import { CatalogServices } from './components/CatalogServices';
import { HeritageCraftsmanship } from './components/HeritageCraftsmanship';
import { PressLogos } from './components/PressLogos';
import { ReviewsSection } from './components/ReviewsSection';
import { VipClub } from './components/VipClub';
import { Footer } from './components/Footer';
import { QuickContactDock } from './components/QuickContactDock';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductQuickView } from './components/ProductQuickView';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';
import { AccountModal } from './components/AccountModal';
import { LookbookModal } from './components/LookbookModal';
import { AppointmentModal } from './components/AppointmentModal';
import { AdminLogModal } from './components/AdminLogModal';
import { Toast } from './components/Toast';
import { IntroSplash } from './components/IntroSplash';

import { ALL_PRODUCTS } from './data/products';
import { Product, CartItem, CollectionCategory, ProductCategory, SalonAppointment } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: ALL_PRODUCTS[0], // Preloaded with Élysée Royal Emerald Pendant
      quantity: 1,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    ALL_PRODUCTS[1].id, // Preloaded with Lumière Diamond Hoops
  ]);

  // Appointments count for Admin Log
  const [appointmentsCount, setAppointmentsCount] = useState<number>(0);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const refreshAppointmentsCount = () => {
    try {
      const stored = localStorage.getItem('elysee_salon_appointments');
      if (stored) {
        const parsed = JSON.parse(stored);
        setAppointmentsCount(Array.isArray(parsed) ? parsed.length : 0);
      } else {
        setAppointmentsCount(1); // Default sample
      }
    } catch {
      setAppointmentsCount(1);
    }
  };

  useEffect(() => {
    refreshAppointmentsCount();
  }, []);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isAdminLogOpen, setIsAdminLogOpen] = useState(false);
  const [appointmentInitialService, setAppointmentInitialService] = useState('Fine Jewelry Private Viewing');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    triggerToast(`Added ${product.name} to shopping bag.`);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        triggerToast(`Removed from saved creations.`);
        return prev.filter((id) => id !== product.id);
      } else {
        triggerToast(`Saved ${product.name} to wishlist.`);
        return [...prev, product.id];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Category filter handlers
  const handleSelectSpeedCategory = (category: ProductCategory) => {
    setSelectedCategoryFilter(category);
    const catalogEl = document.querySelector('#catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    triggerToast(`Filtered catalog by ${category}.`);
  };

  const handleSelectCollection = (collection: CollectionCategory) => {
    setSelectedCategoryFilter(collection.title);
    const catalogEl = document.querySelector('#catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    triggerToast(`Exploring ${collection.title} collection.`);
  };

  const handleAppointmentBooked = (appointment: SalonAppointment) => {
    refreshAppointmentsCount();
    triggerToast(`Private viewing reserved for ${appointment.name}.`);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistProducts = ALL_PRODUCTS.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1EA] flex flex-col font-sans selection:bg-[#C9A96E]/30 selection:text-[#C9A96E]">
      
      {/* 0. INTRO SPLASH ANIMATED LOGO FILM (Auto dismiss or skip, replayable anytime) */}
      {showIntro && <IntroSplash onComplete={() => setShowIntro(false)} />}

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <TopBar 
        onBoutiqueClick={() => setIsAccountOpen(true)} 
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* 2. NAVIGATION with Dual-Indicator, Animated Zora Jewels Logo, Book Salon, Admin Log */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        appointmentsCount={appointmentsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenBooking={() => {
          setAppointmentInitialService('Fine Jewelry Private Viewing');
          setIsAppointmentOpen(true);
        }}
        onOpenAdminLog={() => setIsAdminLogOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* MAIN SECTIONS */}
      <main className="flex-1">
        {/* 3. HERO (Left side copy, right side clean empty negative space reserved for user's asset, bottom stats) */}
        <Hero
          onShopClick={() => {
            const el = document.querySelector('#catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onLookbookClick={() => setIsLookbookOpen(true)}
        />

        {/* 4. SPEED CATEGORIES (Quick archive cards like Ve from Axis Beauty Salon) */}
        <SpeedCategories onSelectCategory={handleSelectSpeedCategory} />

        {/* 5. EXPLORE OUR COLLECTIONS (4 categories, NO WATCHES) */}
        <Collections onSelectCategory={handleSelectCollection} />

        {/* 6. CATALOGUE & SERVICES (Interactive filterable catalog with category tabs like Ue from Axis) */}
        <CatalogServices
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={setSelectedCategoryFilter}
        />

        {/* 7. HERITAGE & CRAFTSMANSHIP (Video Background with Blurry Transparent Details Box) */}
        <HeritageCraftsmanship
          onStoryClick={() => setIsStoryOpen(true)}
          onOpenBooking={() => setIsAppointmentOpen(true)}
        />

        {/* 9. AS FEATURED IN (Vogue, Harper's Bazaar, Robb Report, Town & Country, Forbes) */}
        <PressLogos />

        {/* 10. CLIENT REFLECTIONS & REVIEWS (Google 4.9★ rating + write testimonial like Ge from Axis) */}
        <ReviewsSection onReviewAdded={() => triggerToast('Thank you for your testimonial!')} />

        {/* 11. VIP CLUB NEWSLETTER (Dark emerald marble background) */}
        <VipClub onSubscribeSuccess={(email) => triggerToast(`Bienvenue! VIP invitation sent to ${email}`)} />
      </main>

      {/* 12. FOOTER */}
      <Footer
        onCategoryFilter={(catId) => {
          const catMap: Record<string, string> = {
            'jewelry': 'Fine Jewelry',
            'diamonds': 'Diamonds',
            'accessories': 'Fine Accessories',
            'new': 'All',
            'gift-guide': 'Bespoke Bridal',
          };
          setSelectedCategoryFilter(catMap[catId] || 'All');
          const el = document.querySelector('#catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onClientServiceClick={(service) => {
          if (service === 'Contact Us') {
            setIsAppointmentOpen(true);
          } else {
            triggerToast(`Client Care: ${service}`);
          }
        }}
      />

      {/* FLOATING ACTION PANELS (Like Axis Beauty Salon) */}
      <QuickContactDock onOpenBooking={() => setIsAppointmentOpen(true)} />
      <FloatingWhatsApp />

      {/* DRAWERS & MODALS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={(product) => handleAddToCart(product, 1)}
      />

      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={ALL_PRODUCTS}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onShopCollection={() => {
          const el = document.querySelector('#catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* APPOINTMENT & ADMIN CONSOLE MODALS (From Axis Beauty Salon) */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        onAppointmentBooked={handleAppointmentBooked}
        initialService={appointmentInitialService}
      />

      <AdminLogModal
        isOpen={isAdminLogOpen}
        onClose={() => setIsAdminLogOpen(false)}
        onStatusChange={refreshAppointmentsCount}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  );
}

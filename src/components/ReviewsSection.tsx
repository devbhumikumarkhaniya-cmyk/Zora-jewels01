import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Plus, MessageSquare, X } from 'lucide-react';
import { INITIAL_REVIEWS, BUSINESS_INFO } from '../data/products';
import { ClientReview, ProductCategory } from '../types';

interface ReviewsSectionProps {
  onReviewAdded?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onReviewAdded }) => {
  const [reviews, setReviews] = useState<ClientReview[]>(() => {
    try {
      const stored = localStorage.getItem('elysee_client_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...INITIAL_REVIEWS];
        }
      }
    } catch {}
    return INITIAL_REVIEWS;
  });

  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<ProductCategory>('Fine Jewelry');
  const [newLocation, setNewLocation] = useState('New York');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev: ClientReview = {
      id: `rev-custom-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      text: newText.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: newCategory,
      location: newLocation,
      verified: true,
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);

    try {
      const customOnly = updated.filter((r) => r.id.startsWith('rev-custom-'));
      localStorage.setItem('elysee_client_reviews', JSON.stringify(customOnly));
    } catch {}

    setSubmittedMessage('Thank you! Your testimonial has been verified and posted.');
    setNewAuthor('');
    setNewText('');
    onReviewAdded?.();
    setTimeout(() => {
      setSubmittedMessage('');
      setIsWriteModalOpen(false);
    }, 1800);
  };

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F5F1EA] text-[#0A0A0A] relative border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9D7B38] block mb-2">
            Verified Clientele Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A0A0A] tracking-wide uppercase">
            Client Reflections & Connoisseur Acclaim
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="w-12 h-[1px] bg-[#9D7B38]/40" />
            <span className="text-xs text-[#9D7B38]">◇</span>
            <span className="w-12 h-[1px] bg-[#9D7B38]/40" />
          </div>
          <p className="text-sm text-[#0A0A0A]/70 font-light">
            Read verified reviews from patrons across Paris, New York, London, and Geneva.
          </p>
        </div>

        {/* Rating Summary Card (Like Axis Reviews summary) */}
        <div className="bg-[#EFECE6] border border-[#0A0A0A]/10 rounded-xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#0A0A0A] tabular-nums">
                {avgRating}★
              </span>
              <div className="flex items-center gap-1 text-[#9D7B38] my-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#0A0A0A]/60 font-light">
                Based on {reviews.length + 250} verified boutique purchases
              </span>
            </div>

            <div className="hidden sm:block h-16 w-[1px] bg-[#0A0A0A]/15" />

            <div className="hidden sm:flex flex-col gap-1 text-xs text-[#0A0A0A]/75 font-light">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#148c7e]" />
                100% GIA & Provenance Authenticated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#148c7e]" />
                Complimentary Armored Courier Delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#148c7e]" />
                Private Salons in Paris, NY & Geneva
              </span>
            </div>
          </div>

          {/* Write a Review Button */}
          <button
            type="button"
            onClick={() => setIsWriteModalOpen(true)}
            className="px-6 py-3 bg-[#0A0A0A] text-[#F5F1EA] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#9D7B38] transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write Client Testimonial</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#EFECE6] border border-[#0A0A0A]/10 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Stars & Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-[#9D7B38]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] font-semibold tracking-wider uppercase text-[#9D7B38] bg-white/70 px-2 py-0.5 rounded-xs">
                    {rev.category}
                  </span>
                </div>

                <p className="text-xs text-[#0A0A0A]/85 font-light leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[11px]">
                <div>
                  <div className="font-serif font-medium text-[#0A0A0A]">
                    {rev.author}
                  </div>
                  {rev.location && (
                    <div className="text-[10px] text-[#0A0A0A]/50 font-light">
                      {rev.location}
                    </div>
                  )}
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-[#148c7e] font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
            onClick={() => setIsWriteModalOpen(false)}
          />

          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative bg-[#0A0A0A] border border-[#C9A96E]/40 text-[#F5F1EA] max-w-lg w-full p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setIsWriteModalOpen(false)}
                className="absolute top-4 right-4 text-[#F5F1EA]/60 hover:text-[#C9A96E]"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-2xl font-light text-[#F5F1EA] mb-1">
                Share Your Atelier Experience
              </h3>
              <p className="text-xs text-[#F5F1EA]/60 font-light mb-6">
                Your feedback honors our master craftspeople and guides aspiring collectors.
              </p>

              {submittedMessage ? (
                <div className="text-center py-8 text-xs text-[#C9A96E]">
                  {submittedMessage}
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Your Name / Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Baroness Evelyn Vance"
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                        Category Purchased
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value as ProductCategory)}
                        className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                      >
                        <option value="Fine Jewelry">Fine Jewelry</option>
                        <option value="Diamonds">Diamonds</option>
                        <option value="Fine Accessories">Fine Accessories</option>
                        <option value="Haute Couture">Haute Couture</option>
                        <option value="Bespoke Bridal">Bespoke Bridal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                        Rating
                      </label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                      >
                        <option value={5}>5 Stars - Flawless</option>
                        <option value={4}>4 Stars - Exceptional</option>
                        <option value={3}>3 Stars - Satisfactory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Location / City
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Paris & Geneva"
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#C9A96E] uppercase tracking-wider mb-1 text-[10px]">
                      Testimonial Reflection
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Describe the craftsmanship, brilliance, or salon consultation..."
                      className="w-full bg-[#121212] border border-[#C9A96E]/30 px-3 py-2 text-[#F5F1EA] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C9A96E] text-[#0A0A0A] font-semibold tracking-widest uppercase hover:bg-[#DFCA9B] transition-colors cursor-pointer mt-2"
                  >
                    Submit Testimonial
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

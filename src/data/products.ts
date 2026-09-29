import { Product, CollectionCategory, SpeedCategoryItem, ClientReview, PackageSuite } from '../types';

export const BUSINESS_INFO = {
  name: 'Zora Jewels',
  tagline: 'Imperial Haute Joaillerie & Couture',
  phone: '+1 (833) 555-ÉLYSÉE',
  phoneRaw: '18335553597',
  whatsappNumber: '+1 (833) 555-ÉLYSÉE',
  whatsappRaw: '18335553597',
  email: 'concierge@zorajewels.com',
  rating: 4.9,
  reviewsCount: 257,
  address: '26 Place Vendôme, 75001 Paris, France',
  salons: [
    { city: 'Paris', location: '26 Place Vendôme, 75001 Paris' },
    { city: 'New York', location: '740 Madison Avenue, New York, NY 10065' },
    { city: 'Geneva', location: '42 Rue du Rhône, 1204 Geneva' },
    { city: 'Virtual Salon', location: 'Confidential Global High-Definition Viewing' },
  ],
};

export const CATEGORIES: CollectionCategory[] = [
  {
    id: 'fine-jewelry',
    title: 'Fine Jewelry',
    subtitle: 'Colombian Emeralds, Ceylon Sapphires & Royal Heirlooms',
    image: '/src/assets/images/cat_fine_jewelry_1790598544566.jpg',
    itemCount: 42,
    href: '#catalog',
  },
  {
    id: 'diamonds',
    title: 'Diamonds',
    subtitle: 'Flawless Cut Solitaires, Rivière Necklaces & Pavé Bands',
    image: '/src/assets/images/cat_diamonds_1790598559704.jpg',
    itemCount: 38,
    href: '#catalog',
  },
  {
    id: 'fine-accessories',
    title: 'Fine Accessories',
    subtitle: 'French Box Calfskin & 24k Gold Chain Hardware',
    image: '/src/assets/images/cat_fine_accessories_1790598572366.jpg',
    itemCount: 24,
    href: '#catalog',
  },
  {
    id: 'haute-couture',
    title: 'Haute Couture',
    subtitle: 'Hand-Tailored Silk Evening Capes & Embroidered Ensembles',
    image: '/src/assets/images/cat_haute_couture_1790598585051.jpg',
    itemCount: 19,
    href: '#catalog',
  },
];

export const SPEED_CATEGORIES: SpeedCategoryItem[] = [
  {
    id: 'speed-1',
    title: 'Colombian Emerald Masterpieces',
    category: 'Fine Jewelry',
    tag: 'SIGNATURE PIECE',
    imageUrl: '/src/assets/images/cat_fine_jewelry_1790598544566.jpg',
    subtitle: 'Natural Muzo emeralds set in hand-hammered 18k yellow gold',
  },
  {
    id: 'speed-2',
    title: 'Triple-Excellent Diamond Solitaires',
    category: 'Diamonds',
    tag: 'MOST POPULAR',
    imageUrl: '/src/assets/images/cat_diamonds_1790598559704.jpg',
    subtitle: 'GIA-certified D-color flawless brilliant cut heirlooms',
  },
  {
    id: 'speed-3',
    title: 'Architectural Evening Leather',
    category: 'Fine Accessories',
    tag: 'TRENDING ATELIER',
    imageUrl: '/src/assets/images/cat_fine_accessories_1790598572366.jpg',
    subtitle: 'Hand-burnished box calfskin with jewel-grade gold turnlocks',
  },
  {
    id: 'speed-4',
    title: 'Emerald Rivière Line Bracelet',
    category: 'Fine Jewelry',
    tag: 'LIMITED RUN',
    imageUrl: '/src/assets/images/prod_emerald_bracelet_1790598630950.jpg',
    subtitle: 'Articulated tennis links of step-cut emeralds and round diamonds',
  },
  {
    id: 'speed-5',
    title: 'Haute Couture Evening Capes',
    category: 'Haute Couture',
    tag: 'ROYAL SUITE',
    imageUrl: '/src/assets/images/cat_haute_couture_1790598585051.jpg',
    subtitle: 'Emerald green silk & cashmere with hand-gilded embroidery',
  },
];

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'elysee-emerald-pendant',
    name: 'Élysée Royal Emerald Pendant',
    category: 'Fine Jewelry',
    price: 12800,
    originalPrice: 14200,
    image: '/src/assets/images/prod_emerald_pendant_1790598594423.jpg',
    tag: 'SIGNATURE',
    description:
      'A luminous 4.2-carat untreated Colombian emerald centerpiece enveloped in a radiant double halo of brilliant round-cut pave diamonds, suspended from a delicate 18-karat yellow gold anchor link chain.',
    details: {
      metal: '18k Fairmined Yellow Gold',
      gemstone: 'Natural Colombian Emerald',
      carat: '4.20 ct Emerald / 0.85 ct Diamond Halo',
      dimensions: '22mm drop length, 18-inch adjustable chain',
      origin: 'Muzo Mines, Colombia; Handcrafted in Paris',
    },
    isNew: true,
  },
  {
    id: 'lumiere-diamond-hoops',
    name: 'Lumière Diamond Huggie Hoops',
    category: 'Diamonds',
    price: 6750,
    image: '/src/assets/images/prod_diamond_hoops_1790598606951.jpg',
    tag: 'CLASSIC',
    description:
      'Sculpted in 18-karat white gold with an inside-out shared-prong diamond arrangement designed to capture natural light from every angle with supreme brilliance.',
    details: {
      metal: '18k Rhodium-Plated White Gold',
      gemstone: 'Natural VS1 Clarity Diamonds, Color E-F',
      carat: '2.40 ct Total Weight',
      dimensions: '20mm outer diameter, secure latch closure',
      origin: 'Conflict-Free Sourced; Parisian Atelier',
    },
    isNew: false,
  },
  {
    id: 'legacy-solitaire-ring',
    name: 'Legacy Solitaire Cathedral Ring',
    category: 'Diamonds',
    price: 9950,
    originalPrice: 11000,
    image: '/src/assets/images/prod_solitaire_ring_1790598619066.jpg',
    tag: 'MOST POPULAR',
    description:
      'An iconic celebration of eternal romance. Featuring an exceptional round brilliant diamond secured in a cathedral crown, hand-engraved with subtle botanical scrollwork.',
    details: {
      metal: '18k Recycled Yellow Gold',
      gemstone: 'GIA-Certified Triple Excellent Diamond',
      carat: '1.75 ct Center Solitaire (VVS2, Color D)',
      dimensions: 'Band width 2.2mm, Comfort Fit profile',
      origin: 'Botswana Ethical Sourcing; Hand-set in Paris',
    },
    isNew: true,
  },
  {
    id: 'emerald-line-bracelet',
    name: 'Emerald & Diamond Line Bracelet',
    category: 'Fine Jewelry',
    price: 14600,
    image: '/src/assets/images/prod_emerald_bracelet_1790598630950.jpg',
    tag: 'HIGH JEWELRY',
    description:
      'An architectural rivière bracelet alternating vivid deep-green step-cut emeralds and round brilliant diamonds. Masterfully articulated links ensure seamless fluid drape on the wrist.',
    details: {
      metal: '18k Polished Yellow Gold',
      gemstone: 'Zambian Emeralds & Ideal-Cut Diamonds',
      carat: '6.80 ct Emeralds / 3.20 ct Diamonds',
      dimensions: '7.0 inches length with double safety clasp',
      origin: 'Kagem Mine, Zambia; Master Craftsman Set',
    },
    isNew: false,
  },
  {
    id: 'aurelia-calfskin-clutch',
    name: 'Aurelia Box Calfskin Evening Clutch',
    category: 'Fine Accessories',
    price: 4200,
    image: '/src/assets/images/prod_calfskin_clutch_1790598641645.jpg',
    tag: 'ATELIER LEATHER',
    description:
      'Crafted from silky full-grain box calfskin leather, structured with sharp architectural bevels and accented with a custom champagne gold turnlock and jewel-grade link chain.',
    details: {
      metal: '24k Gold-Gilded Brass Hardware',
      gemstone: 'Full Grain French Box Calfskin',
      dimensions: '21cm × 13cm × 5.5cm; 52cm chain drop',
      origin: 'Tannery d’Espelette; Hand-assembled in Lyon',
    },
    isNew: true,
  },
  {
    id: 'imperial-emerald-cocktail-ring',
    name: 'Imperial Halo Emerald Ring',
    category: 'Fine Jewelry',
    price: 18500,
    image: '/src/assets/images/cat_fine_jewelry_1790598544566.jpg',
    tag: 'MASTERPIECE',
    description:
      'A cushion-cut 5.5-carat Colombian emerald bordered by marquise and pear-cut diamonds creating a botanical garland of divine light and sovereign majesty.',
    details: {
      metal: '18k Fairmined Yellow Gold & Platinum',
      gemstone: 'Certified Minor Oil Colombian Emerald',
      carat: '5.50 ct Emerald / 1.65 ct Diamonds',
      dimensions: 'Band width 2.8mm, high gallery setting',
      origin: 'Muzo, Colombia; Private Parisian Commission',
    },
    isNew: true,
  },
  {
    id: 'riviere-diamond-bracelet',
    name: 'Classic Rivière Diamond Tennis Bracelet',
    category: 'Diamonds',
    price: 15200,
    image: '/src/assets/images/cat_diamonds_1790598559704.jpg',
    tag: 'TIMELESS',
    description:
      'Fifty-four uniform round brilliant diamonds set in minimal four-prong platinum baskets, engineered for supreme fluidity and maximum scintillation.',
    details: {
      metal: '950 Pure Platinum',
      gemstone: 'Matched Hearts & Arrows Diamonds',
      carat: '7.50 ct Total Carat Weight (VS1/E-F)',
      dimensions: '7.0 inches length with concealed box lock',
      origin: 'Kimberley Compliant; Atelier Crafted',
    },
    isNew: false,
  },
  {
    id: 'palais-evening-cape',
    name: 'Palais Silk Velvet Evening Cape',
    category: 'Haute Couture',
    price: 7800,
    image: '/src/assets/images/cat_haute_couture_1790598585051.jpg',
    tag: 'COUTURE',
    description:
      'Deep emerald green mulberry silk velvet cape lined in champagne duchess satin, finished with hand-embroidered gold bullion thread along the Mandarin collar.',
    details: {
      metal: 'Hand-Gilded 18k Plated Frog Clasp',
      gemstone: 'Pure Silk Velvet & Heavy Satin',
      dimensions: 'Full Floor Length (140cm back length)',
      origin: 'Lyon Silk Mills; Paris Haute Couture Atelier',
    },
    isNew: true,
  },
  {
    id: 'royal-bridal-trousseau-suite',
    name: 'Vendôme Bespoke Bridal Heirlooms',
    category: 'Bespoke Bridal',
    price: 38500,
    originalPrice: 42000,
    image: '/src/assets/images/cat_fine_jewelry_1790598544566.jpg',
    tag: 'BRIDAL SUITE',
    description:
      'A harmonious high jewelry bridal ensemble including a diamond & emerald cascade collar, matching chandelier earrings, and a ceremonial bridal hair ornament.',
    details: {
      metal: '18k Yellow Gold & Platinum',
      gemstone: 'Matched Muzo Emeralds & Flawless Diamonds',
      carat: '14.20 ct Total Weight across 3 pieces',
      dimensions: 'Custom tailored to client neck & ear anatomy',
      origin: 'Bespoke Commission; Place Vendôme Salon',
    },
    isNew: true,
  },
];

export const PACKAGE_SUITES: PackageSuite[] = [
  {
    id: 'suite-1',
    name: 'Royal Bridal Trousseau Suite',
    category: 'Bespoke Bridal',
    price: 34500,
    originalValue: 39500,
    description:
      'The definitive high jewelry trousseau featuring an emerald centerpiece collar, matching earrings, and private bridal salon dressing consultation.',
    includes: [
      'Élysée Royal Emerald Pendant & Chain',
      'Lumière Diamond Huggie Hoops',
      'Emerald & Diamond Line Bracelet',
      'Private 3-Hour Salon Dressing with Senior Stylist',
      'Insured Archival Vault Storage for 1 Year',
    ],
    image: '/src/assets/images/cat_fine_jewelry_1790598544566.jpg',
    tag: 'MOST EXCLUSIVE',
  },
  {
    id: 'suite-2',
    name: 'Red Carpet Gala Diamond Ensemble',
    category: 'Diamonds',
    price: 26800,
    originalValue: 31900,
    description:
      'Curated for luminous black-tie presence. Combines the GIA solitaire cathedral ring with the pristine platinum rivière diamond bracelet.',
    includes: [
      'Legacy Solitaire Cathedral Ring (1.75ct)',
      'Classic Rivière Diamond Tennis Bracelet (7.50ct)',
      'Complimentary Custom Hand Engraving',
      'Certificate of Provenance & Insurance Valuation',
    ],
    image: '/src/assets/images/cat_diamonds_1790598559704.jpg',
    tag: 'CONNOISSEUR',
  },
  {
    id: 'suite-3',
    name: 'Atelier Evening Soirée Duo',
    category: 'Fine Accessories',
    price: 11200,
    originalValue: 12900,
    description:
      'An exquisite evening coordination of French box calfskin and hand-burnished silk velvet designed for opera, galas, and sovereign celebrations.',
    includes: [
      'Aurelia Box Calfskin Evening Clutch with Gold Chain',
      'Palais Silk Velvet Evening Cape with Gold Clasp',
      'Monogrammed Dust Sleeves & Wooden Display Box',
      'Atelier Touch-Up & Leather Care Service',
    ],
    image: '/src/assets/images/cat_fine_accessories_1790598572366.jpg',
    tag: 'CURATED DUO',
  },
];

export const INITIAL_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Lady Victoria Montgomery',
    rating: 5,
    text:
      'The Colombian emerald pendant took our breath away. The depth of color and delicate diamond pave work is unmatched anywhere on Place Vendôme. Truly legendary artistry.',
    date: 'March 14, 2026',
    category: 'Fine Jewelry',
    location: 'London & Geneva',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    rating: 5,
    text:
      'Booked a private salon viewing on Madison Avenue for my bridal trousseau. The concierge service, champagne reception, and custom jewelry adjustments were beyond sublime.',
    date: 'February 28, 2026',
    category: 'Bespoke Bridal',
    location: 'New York',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Amara Al-Thani',
    rating: 5,
    text:
      'The Rivière diamond bracelet feels like liquid platinum on the wrist. Arrived via armored discreet courier within 48 hours. Absolute perfection.',
    date: 'February 10, 2026',
    category: 'Diamonds',
    location: 'Paris & Doha',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Caroline de Saint-Germain',
    rating: 5,
    text:
      'The Aurelia calfskin clutch is a genuine sculpture. The gold turnlock hardware clicks with the precision of a high complication lock. I wear it to every state gala.',
    date: 'January 22, 2026',
    category: 'Fine Accessories',
    location: 'Paris',
    verified: true,
  },
];

export const STATS = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Premium Creations' },
  { value: '4.9★', label: 'Verified Rating' },
  { value: 'FAST', label: 'Worldwide Shipping' },
];

export const PRESS_LOGOS = [
  { name: 'VOGUE', tagline: 'The Haute Joaillerie Benchmark' },
  { name: 'HARPER’S BAZAAR', tagline: 'Sculptural Modern Royalty' },
  { name: 'Robb Report', tagline: 'The Ultimate Luxury Standard' },
  { name: 'TOWN&COUNTRY', tagline: 'Heirlooms for Modern Dynasties' },
  { name: 'Forbes', tagline: 'Pioneering Sustainable High Luxury' },
];

export const CRAFTSMANSHIP_IMAGE = '/src/assets/images/artisan_crafting_jewelry_1790598525810.jpg';

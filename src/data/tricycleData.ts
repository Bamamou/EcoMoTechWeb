export interface TricycleProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  badge?: 'new' | 'bestseller' | 'sale';
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: {
    battery: string;
    motor: string;
    maxSpeed: string;
    range: string;
    loadCapacity: string;
    dimensions: string;
    weight: string;
    chargingTime: string;
    warranty: string;
    seating: string;
  };
}

export const tricycleProducts: TricycleProduct[] = [
  {
    id: 'cargo-pro-3000',
    name: 'EcoMoTech Cargo Pro 3000',
    description: 'Heavy-duty commercial tricycle designed for maximum cargo capacity and urban delivery operations.',
    longDescription: `The Cargo Pro 3000 is engineered for businesses that demand reliability and efficiency. With its robust construction and powerful motor system, it handles heavy loads while maintaining exceptional energy efficiency.

This commercial-grade electric tricycle features a weatherproof cargo compartment, advanced battery management system, and regenerative braking technology. Perfect for delivery services, logistics companies, and commercial operations requiring reliable, eco-friendly transportation.

Built with premium materials and backed by our comprehensive warranty, the Cargo Pro 3000 delivers outstanding performance while reducing operating costs and environmental impact.`,
    price: 1999,
    originalPrice: 2699,
    image: '/images/tricycles/cargo.png',
    gallery: [
      '/images/tricycles/EcoMoTech Cargo Pro 3000.avif',
      '/images/tricycles/EcoMoTech Cargo Pro.avif',
      '/images/tricycles/EcoMoTech Cargo Pro 300.avif',
    ],
    category: 'commercial',
    badge: 'bestseller',
    rating: 4.8,
    reviews: 127,
    inStock: true,
    stockCount: 12,
    features: [
      'Weatherproof cargo box (500L capacity)',
      'Dual suspension system',
      'Regenerative braking',
      'LED headlights & taillights',
      'Digital dashboard with GPS',
      'Anti-theft alarm system',
      'Fast charging capability',
      'Hydraulic disc brakes'
    ],
    specifications: {
      battery: '72V 40Ah Lithium-ion',
      motor: '2000W Brushless DC',
      maxSpeed: '45 km/h',
      range: '120 km per charge',
      loadCapacity: '500 kg',
      dimensions: '3.2m × 1.3m × 1.7m',
      weight: '180 kg',
      chargingTime: '6-8 hours',
      warranty: '3 years comprehensive',
      seating: 'Driver + cargo compartment'
    }
  },
  {
    id: 'passenger-deluxe-2500',
    name: 'EcoMoTech Passenger Deluxe 2500',
    description: 'Premium passenger tricycle with comfortable seating for urban transportation and taxi services.',
    longDescription: `Designed for passenger comfort and driver convenience, the Passenger Deluxe 2500 offers a smooth, quiet ride with premium features and weather protection.

This passenger-focused electric tricycle features comfortable seating for up to 3 passengers, weather canopy, and advanced safety features. Ideal for taxi services, tourism, and family transportation.

With its efficient motor and long-range battery, the Passenger Deluxe 2500 provides reliable, cost-effective transportation while delivering superior passenger comfort and safety.`,
    price: 2899,
    image: '/images/tricycles/passender car.webp',
    gallery: [
      '/images/tricycles/passenger.webp',
      '/images/tricycles/passenger cars.webp',
      '/images/tricycles/passenger car back.webp'
    ],
    category: 'passenger',
    badge: 'new',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    stockCount: 8,
    features: [
      'Comfortable 3-passenger seating',
      'Weather canopy with side panels',
      'Cushioned seats with back support',
      'USB charging ports',
      'Air circulation system',
      'Emergency communication device',
      'Adjustable mirrors',
      'Safety belts for all passengers'
    ],
    specifications: {
      battery: '60V 32Ah Lithium-ion',
      motor: '1500W Brushless DC',
      maxSpeed: '40 km/h',
      range: '100 km per charge',
      loadCapacity: '300 kg',
      dimensions: '2.8m × 1.2m × 1.8m',
      weight: '140 kg',
      chargingTime: '5-7 hours',
      warranty: '2 years standard',
      seating: 'Driver + 3 passengers'
    }
  },
  {
    id: 'urban-cruiser-2000',
    name: 'EcoMoTech Urban Cruiser 2000',
    description: 'Versatile urban tricycle perfect for city commuting and light commercial use.',
    longDescription: `The Urban Cruiser 2000 combines style, efficiency, and practicality for modern urban transportation. This versatile electric tricycle is perfect for daily commuting, small business deliveries, and personal use.

Featuring a sleek design and advanced electric drivetrain, the Urban Cruiser 2000 offers excellent maneuverability in city traffic while providing ample storage space for personal items or small cargo.

Equipped with modern safety features and comfortable ergonomics, this tricycle delivers an enjoyable and efficient urban transportation experience.`,
    price: 2199,
    image: '/images/tricycles/Urban.webp',
    gallery: [
      '/images/tricycles/Urban side.webp',
      '/images/tricycles/Urban in.webp',
      '/images/tricycles/Urban inside.webp',
      '/images/tricycles/Urban front.webp'
    ],
    category: 'personal',
    rating: 4.4,
    reviews: 73,
    inStock: true,
    stockCount: 15,
    features: [
      'Compact urban design',
      'Removable battery pack',
      'Digital speedometer',
      'LED lighting system',
      'Comfortable saddle',
      'Rear storage basket',
      'Anti-lock braking system',
      'Weather-resistant body'
    ],
    specifications: {
      battery: '48V 24Ah Lithium-ion',
      motor: '1200W Brushless DC',
      maxSpeed: '35 km/h',
      range: '80 km per charge',
      loadCapacity: '200 kg',
      dimensions: '2.4m × 1.1m × 1.5m',
      weight: '95 kg',
      chargingTime: '4-6 hours',
      warranty: '2 years standard',
      seating: 'Single rider'
    }
  },
  {
    id: 'eco-delivery-2800',
    name: 'EcoMoTech Eco Delivery 2800',
    description: 'Efficient delivery tricycle designed for last-mile logistics and food delivery services.',
    longDescription: `The Eco Delivery 2800 is specifically engineered for the growing last-mile delivery market. This efficient electric tricycle offers excellent payload capacity while maintaining low operating costs and zero emissions.

Perfect for food delivery, courier services, and e-commerce logistics, the Eco Delivery 2800 features an insulated cargo compartment and fast-charging capability to maximize uptime.

With its reliable performance and eco-friendly operation, this tricycle helps businesses reduce delivery costs while contributing to cleaner urban environments.`,
    price: 2799,
    originalPrice: 3099,
    image: '/images/tricycles/electric tricycle.webp',
    gallery: [
      '/images/tricycles/electric tricycle.webp',
      '/images/tricycles/electric motorcycle.webp'
    ],
    category: 'delivery',
    badge: 'sale',
    rating: 4.7,
    reviews: 95,
    inStock: true,
    stockCount: 6,
    features: [
      'Insulated cargo compartment (300L)',
      'Quick-swap battery system',
      'GPS tracking integration',
      'Temperature monitoring',
      'Secure cargo locking',
      'All-weather operation',
      'Ergonomic driver position',
      'Energy recovery system'
    ],
    specifications: {
      battery: '60V 28Ah Lithium-ion',
      motor: '1600W Brushless DC',
      maxSpeed: '42 km/h',
      range: '95 km per charge',
      loadCapacity: '350 kg',
      dimensions: '2.9m × 1.2m × 1.6m',
      weight: '125 kg',
      chargingTime: '5-7 hours',
      warranty: '2 years comprehensive',
      seating: 'Driver + cargo space'
    }
  },
  {
    id: 'family-comfort-2400',
    name: 'EcoMoTech Family Comfort 2400',
    description: 'Family-oriented electric tricycle with enhanced safety features and comfortable seating.',
    longDescription: `The Family Comfort 2400 is designed with family safety and comfort as top priorities. This electric tricycle provides secure transportation for families while ensuring a smooth and enjoyable ride experience.

Featuring comprehensive safety systems, comfortable seating, and weather protection, the Family Comfort 2400 is perfect for family outings, school runs, and recreational activities.

Built with high-quality materials and advanced safety technology, this tricycle offers peace of mind for parents while providing an eco-friendly alternative to traditional family vehicles.`,
    price: 2599,
    image: '/images/tricycles/electric tricycle.webp',
    gallery: [
      '/images/tricycles/electric tricycle.webp'
    ],
    category: 'family',
    rating: 4.5,
    reviews: 68,
    inStock: true,
    stockCount: 10,
    features: [
      'Child safety harnesses',
      'Full weather canopy',
      'Soft-close doors',
      'Emergency stop button',
      'Parental controls',
      'Entertainment system',
      'Storage compartments',
      'Backup camera system'
    ],
    specifications: {
      battery: '54V 30Ah Lithium-ion',
      motor: '1300W Brushless DC',
      maxSpeed: '30 km/h (safety mode)',
      range: '85 km per charge',
      loadCapacity: '280 kg',
      dimensions: '2.7m × 1.3m × 1.8m',
      weight: '135 kg',
      chargingTime: '5-7 hours',
      warranty: '3 years family protection',
      seating: 'Driver + 2 passengers'
    }
  },
  {
    id: 'sport-edition-3500',
    name: 'EcoMoTech Sport Edition 3500',
    description: 'High-performance electric tricycle with premium features and sporty design.',
    longDescription: `The Sport Edition 3500 represents the pinnacle of electric tricycle performance and luxury. This premium model combines cutting-edge technology with sporty aesthetics for discerning riders.

Featuring advanced motor control, premium materials, and exclusive design elements, the Sport Edition 3500 delivers an unmatched riding experience with superior performance characteristics.

Perfect for enthusiasts who demand the best in electric tricycle technology, this model showcases EcoMoTech's commitment to innovation and excellence.`,
    price: 3999,
    originalPrice: 4399,
    image: '/images/tricycles/electric tricycle.webp',
    gallery: [
      '/images/tricycles/electric tricycle.webp',
      '/images/tricycles/electric motorcycle.webp'
    ],
    category: 'premium',
    badge: 'new',
    rating: 4.9,
    reviews: 34,
    inStock: true,
    stockCount: 3,
    features: [
      'Carbon fiber body panels',
      'Premium leather seating',
      'Advanced motor controller',
      'Sport suspension system',
      'High-resolution display',
      'Bluetooth connectivity',
      'Wireless charging pad',
      'Performance tracking app'
    ],
    specifications: {
      battery: '84V 50Ah Lithium-ion',
      motor: '2500W Brushless DC',
      maxSpeed: '55 km/h',
      range: '150 km per charge',
      loadCapacity: '400 kg',
      dimensions: '3.1m × 1.3m × 1.6m',
      weight: '165 kg',
      chargingTime: '4-6 hours (fast charge)',
      warranty: '5 years premium coverage',
      seating: 'Driver + premium passenger'
    }
  }
];

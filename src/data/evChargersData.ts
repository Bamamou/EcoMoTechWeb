export interface EVChargerProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  category: 'home' | 'commercial' | 'fast' | 'portable';
  badge?: 'new' | 'bestseller' | 'sale';
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: {
    power: string;
    voltage: string;
    current: string;
    connectorType: string;
    chargingSpeed: string;
    dimensions: string;
    weight: string;
    protection: string;
    connectivity: string;
    installation: string;
    warranty: string;
    certification: string;
  };
  applications: string[];
}

export const evChargerProducts: EVChargerProduct[] = [
  {
    id: 'ecocharge-home-7kw',
    name: 'EcoCharge Home Pro 7kW',
    description: 'Smart home EV charger with WiFi connectivity and mobile app control for convenient home charging.',
    longDescription: `The EcoCharge Home Pro 7kW is designed for residential use, offering reliable and efficient charging for all electric vehicles. With built-in WiFi connectivity and a user-friendly mobile app, you can monitor and control your charging sessions from anywhere.

    Features advanced safety systems including overcurrent protection, ground fault detection, and temperature monitoring. The sleek, weatherproof design complements any home exterior while providing years of reliable service.

    Perfect for daily charging needs, this charger delivers optimal charging speeds while being energy-efficient and cost-effective for home use.`,
    price: 699,
    originalPrice: 799,
    image: '/images/chargers/Aeiusny 7kW.jpg',
    gallery: [
      '/images/chargers/Aeiusny 7kW.jpg',
      '/images/chargers/Ecocharge.png'
    ],
    category: 'home',
    badge: 'bestseller',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    stockCount: 25,
    features: [
      'WiFi enabled with mobile app',
      'Type 2 socket (universal)',
      'LED status indicators',
      'RFID access control',
      'Weather resistant (IP65)',
      'Smart load balancing',
      'Energy monitoring',
      'Remote diagnostics'
    ],
    specifications: {
      power: '7kW (single phase)',
      voltage: '230V AC ±10%',
      current: '32A max',
      connectorType: 'Type 2 socket',
      chargingSpeed: '25-30km range per hour',
      dimensions: '245mm x 165mm x 100mm',
      weight: '3.2kg',
      protection: 'IP65 weatherproof rating',
      connectivity: 'WiFi, Ethernet, 4G (optional)',
      installation: 'Wall mounted',
      warranty: '3 years comprehensive',
      certification: 'CE, ROHS, TUV certified'
    },
    applications: ['Home garages', 'Residential driveways', 'Small apartments', 'Private parking']
  },
  {
    id: 'ecocharge-commercial-22kw',
    name: 'EcoCharge Commercial 22kW',
    description: 'High-power commercial EV charger designed for business locations, office buildings, and public charging stations.',
    longDescription: `The EcoCharge Commercial 22kW delivers fast, reliable charging for commercial environments. Built for high-usage scenarios, this charger features robust construction and advanced management capabilities.

    Ideal for businesses wanting to provide EV charging for employees and customers. The integrated payment system supports multiple payment methods including RFID cards, mobile apps, and contactless payments.

    Advanced load management ensures optimal power distribution across multiple charging sessions, while comprehensive monitoring provides detailed usage analytics and revenue tracking.`,
    price: 2499,
    image: '/images/chargers/charger design.png',
    gallery: [
      '/images/chargers/charger design.png',
      '/images/chargers/Ecocharge.png'
    ],
    category: 'commercial',
    badge: 'new',
    rating: 4.6,
    reviews: 87,
    inStock: true,
    stockCount: 12,
    features: [
      'Dual charging outlets',
      'Integrated payment system',
      'OCPP 1.6J compliant',
      'Dynamic load management',
      'Revenue tracking',
      'Remote monitoring',
      'Vandal resistant design',
      'Emergency stop button'
    ],
    specifications: {
      power: '22kW (three phase)',
      voltage: '400V AC ±10%',
      current: '32A per outlet',
      connectorType: 'Dual Type 2 sockets',
      chargingSpeed: '80-100km range per hour',
      dimensions: '1800mm x 300mm x 200mm',
      weight: '45kg',
      protection: 'IP54 rating, IK08 impact',
      connectivity: '4G LTE, Ethernet, WiFi',
      installation: 'Pedestal mount',
      warranty: '5 years commercial warranty',
      certification: 'CE, FCC, UL certified'
    },
    applications: ['Office buildings', 'Shopping centers', 'Hotels', 'Public parking', 'Fleet charging']
  },
  {
    id: 'ecocharge-fast-50kw',
    name: 'EcoCharge Fast DC 50kW',
    description: 'Ultra-fast DC charging station for rapid charging needs, perfect for highway rest stops and quick charge locations.',
    longDescription: `The EcoCharge Fast DC 50kW provides ultra-fast charging capabilities for drivers needing quick top-ups. Using DC fast charging technology, it can charge most EVs from 20% to 80% in just 30-45 minutes.

    Designed for high-traffic locations like highway service stations, this charger features a robust, weather-resistant design capable of operating in all conditions. The large color display provides real-time charging information and easy payment processing.

    Multiple safety systems ensure safe operation, while the modular design allows for easy maintenance and upgrades.`,
    price: 12999,
    originalPrice: 14999,
    image: '/images/chargers/Ecocharge.png',
    gallery: [
      '/images/chargers/Ecocharge.png',
      '/images/chargers/charger design.png'
    ],
    category: 'fast',
    badge: 'sale',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    stockCount: 5,
    features: [
      'CCS and CHAdeMO compatible',
      '10-inch color touchscreen',
      'Credit card payment',
      'Cable management system',
      'Emergency stop function',
      'Temperature monitoring',
      'Automatic cable retraction',
      '24/7 remote monitoring'
    ],
    specifications: {
      power: '50kW DC fast charge',
      voltage: '200-750V DC output',
      current: '125A max',
      connectorType: 'CCS2, CHAdeMO',
      chargingSpeed: '200-300km range per hour',
      dimensions: '2200mm x 800mm x 400mm',
      weight: '280kg',
      protection: 'IP54, IK10 vandal resistant',
      connectivity: '4G LTE, Ethernet',
      installation: 'Foundation mount',
      warranty: '5 years parts, 2 years labor',
      certification: 'CE, UL, Energy Star certified'
    },
    applications: ['Highway charging', 'Fleet depots', 'Service stations', 'Transit hubs', 'Shopping malls']
  },
  {
    id: 'ecocharge-portable-3kw',
    name: 'EcoCharge Portable 3kW',
    description: 'Compact portable EV charger for emergency charging and travel. Perfect for apartments and rental properties.',
    longDescription: `The EcoCharge Portable 3kW offers the ultimate in charging flexibility. This compact, lightweight charger plugs into any standard outlet and provides safe, reliable charging wherever you need it.

    Perfect for apartment dwellers, renters, or as a backup charging solution. The intelligent design includes multiple safety features and adapters for different outlet types. The weather-resistant construction allows for outdoor use when needed.

    Features LED indicators for charging status and fault diagnosis, making it easy to monitor your charging session.`,
    price: 299,
    image: '/images/chargers/Aeiusny 7kW.jpg',
    gallery: [
      '/images/chargers/Aeiusny 7kW.jpg'
    ],
    category: 'portable',
    rating: 4.4,
    reviews: 312,
    inStock: true,
    stockCount: 45,
    features: [
      'Plug-in portability',
      'Multiple outlet adapters',
      'LED status display',
      'Automatic temperature control',
      'Ground fault protection',
      'Compact storage case',
      'Universal Type 2 cable',
      'Surge protection'
    ],
    specifications: {
      power: '3.7kW (16A)',
      voltage: '230V AC single phase',
      current: '16A adjustable (6A-16A)',
      connectorType: 'Type 2 plug',
      chargingSpeed: '15-20km range per hour',
      dimensions: '300mm x 180mm x 90mm',
      weight: '2.1kg',
      protection: 'IP65 splash resistant',
      connectivity: 'None (standalone)',
      installation: 'Plug and play',
      warranty: '2 years standard',
      certification: 'CE, ROHS compliant'
    },
    applications: ['Apartments', 'Rental properties', 'Emergency charging', 'Travel', 'Temporary setups']
  },
  {
    id: 'ecocharge-workplace-11kw',
    name: 'EcoCharge Workplace 11kW',
    description: 'Professional workplace charging solution designed for employee parking and corporate EV fleets.',
    longDescription: `The EcoCharge Workplace 11kW is specifically designed for corporate environments where employees need reliable daily charging. This charger strikes the perfect balance between charging speed and installation cost.

    Features include employee access management through RFID cards or mobile app, detailed reporting for facility managers, and load balancing across multiple units. The sleek design integrates well with modern office environments.

    Built for durability with minimal maintenance requirements, making it ideal for busy workplace environments where reliability is crucial.`,
    price: 1299,
    image: '/images/chargers/charger design.png',
    gallery: [
      '/images/chargers/charger design.png'
    ],
    category: 'commercial',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    stockCount: 18,
    features: [
      'Employee access control',
      'Usage reporting dashboard',
      'Load balancing capability',
      'Scheduled charging',
      'Corporate billing integration',
      'Maintenance alerts',
      'Weather resistant housing',
      'Energy optimization'
    ],
    specifications: {
      power: '11kW (three phase)',
      voltage: '400V AC ±10%',
      current: '16A per phase',
      connectorType: 'Type 2 socket',
      chargingSpeed: '50-60km range per hour',
      dimensions: '400mm x 250mm x 150mm',
      weight: '8.5kg',
      protection: 'IP65 weatherproof',
      connectivity: 'Ethernet, WiFi, 4G optional',
      installation: 'Wall or post mount',
      warranty: '4 years commercial',
      certification: 'CE, UL, Energy Star'
    },
    applications: ['Corporate parking', 'Employee charging', 'Fleet management', 'Office buildings', 'Industrial sites']
  },
  {
    id: 'ecocharge-ultra-150kw',
    name: 'EcoCharge Ultra 150kW',
    description: 'Ultra-high power DC fast charger for premium charging networks and high-traffic commercial locations.',
    longDescription: `The EcoCharge Ultra 150kW represents the pinnacle of EV charging technology. This ultra-fast charger can add 200+ miles of range in just 15-20 minutes, making it perfect for highway corridors and premium charging networks.

    Features dual charging cables for simultaneous charging of two vehicles, advanced cooling systems for consistent high-power delivery, and a premium user interface with multiple payment options.

    Built for commercial operators who demand the highest reliability and fastest charging speeds. The modular design ensures easy maintenance and future upgrades.`,
    price: 35999,
    originalPrice: 39999,
    image: '/images/chargers/Ecocharge.png',
    gallery: [
      '/images/chargers/Ecocharge.png'
    ],
    category: 'fast',
    badge: 'new',
    rating: 4.9,
    reviews: 45,
    inStock: true,
    stockCount: 3,
    features: [
      'Dual 150kW outputs',
      '15-inch touchscreen display',
      'Liquid cooled cables',
      'Dynamic power sharing',
      'Multiple payment methods',
      'Predictive maintenance',
      'Premium customer support',
      'Future-proof design'
    ],
    specifications: {
      power: '150kW per output (300kW total)',
      voltage: '200-920V DC output',
      current: '375A max per cable',
      connectorType: 'CCS2, CHAdeMO optional',
      chargingSpeed: '600-900km range per hour',
      dimensions: '2500mm x 1000mm x 500mm',
      weight: '450kg',
      protection: 'IP54, IK10+ vandal resistant',
      connectivity: '5G, Ethernet, satellite backup',
      installation: 'Foundation with utilities',
      warranty: '7 years comprehensive',
      certification: 'CE, UL, NEMA certified'
    },
    applications: ['Premium charging networks', 'Highway corridors', 'Destination charging', 'Fleet hubs', 'Transit centers']
  }
];

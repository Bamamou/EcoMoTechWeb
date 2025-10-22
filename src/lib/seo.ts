// SEO Configuration for EcoMoTechWeb - Renewable Energy & Electric Mobility Platform

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonical?: string;
  noindex?: boolean;
  schema?: Record<string, any>;
}

export interface ProductSEO extends SEOConfig {
  price?: string;
  category: string;
  brand: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  condition: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
}

// Base SEO configuration for the website
export const baseSEO: SEOConfig = {
  title: 'EcoMoTech - Complete Renewable Energy & Electric Mobility Solutions | West Africa',
  description: 'Leading provider of solar energy systems, electric motorcycles, EV chargers, battery storage, solar appliances, and sustainable energy solutions across West Africa. Expert installation, maintenance, and consultancy services.',
  keywords: [
    'renewable energy West Africa',
    'solar panels Africa',
    'electric motorcycles African roads',
    'EV chargers installation',
    'solar energy systems',
    'battery energy storage BESS',
    'sustainable energy Africa',
    'electric mobility solutions',
    'solar street lights',
    'green technology Africa',
    'solar inverters',
    'electric tricycles',
    'solar pumps irrigation',
    'solar appliances',
    'clean energy solutions',
    'solar installation Africa',
    'EV charging infrastructure',
    'energy independence',
    'solar farm maintenance',
    'electric vehicle repair'
  ],
  ogImage: '/images/og-default.jpg',
  ogType: 'website'
};

// Organization schema for structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EcoMoTech",
  "alternateName": ["EcoMoTech Solutions", "EcoMoTech Online"],
  "description": "Leading provider of renewable energy and electric mobility solutions across West Africa, specializing in solar energy systems, electric motorcycles, EV chargers, and sustainable technology",
  "url": "https://ecomotech.online",
  "logo": "https://ecomotech.online/images/logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+86-18810799128",
      "contactType": "customer service",
      "availableLanguage": ["English", "Chinese"],
      "areaServed": ["CN", "NG", "GH", "GN", "GM", "CD", "TZ"]
    },
    {
      "@type": "ContactPoint",
      "email": "ecomotech@outlook.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "French"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/ecomotech/",
    "https://x.com/ecomotech",
    "https://www.facebook.com/people/Ecomotech/61574949172407/",
    "https://www.instagram.com/ecomotech.online/"
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "28 Yizhuang Economic Development Zone",
      "addressLocality": "Daxing District",
      "addressRegion": "Beijing",
      "postalCode": "16801",
      "addressCountry": "CN"
    }
  ],
  "foundingDate": "2020",
  "industry": "Renewable Energy",
  "areaServed": [
    {"@type": "Country", "name": "Nigeria"},
    {"@type": "Country", "name": "Ghana"},
    {"@type": "Country", "name": "Guinea"},
    {"@type": "Country", "name": "Gambia"},
    {"@type": "Country", "name": "Democratic Republic of Congo"},
    {"@type": "Country", "name": "Tanzania"},
    {"@type": "Country", "name": "China"}
  ],
  "keywords": "renewable energy West Africa, solar power systems, electric motorcycles African roads, EV charging infrastructure, battery energy storage, sustainable technology",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "EcoMoTech Renewable Energy Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Solar Panel Systems",
          "category": "Solar Energy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product", 
          "name": "Electric Motorcycles",
          "category": "Electric Mobility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EV Charging Stations",
          "category": "EV Infrastructure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Battery Energy Storage Systems",
          "category": "Energy Storage"
        }
      }
    ]
  }
};

// Page-specific SEO configurations
export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: 'EcoMoTech - Complete Renewable Energy Solutions for West Africa | Solar Power & Electric Mobility',
    description: 'Transform your energy future with EcoMoTech - West Africa\'s leading provider of solar panels, electric motorcycles, EV chargers, battery storage, and renewable energy solutions. Expert installation and maintenance services.',
    keywords: [
      'renewable energy solutions West Africa',
      'solar power systems Africa',
      'electric motorcycles African roads',
      'EV charging infrastructure',
      'sustainable energy Africa',
      'solar installation services',
      'battery energy storage BESS',
      'green technology solutions',
      'clean energy Africa',
      'solar appliances',
      'electric mobility solutions'
    ],
    ogType: 'website'
  },
  
  products: {
    title: 'Renewable Energy Products | Solar Panels, Electric Motorcycles, EV Chargers & Battery Storage',
    description: 'Explore our comprehensive range of renewable energy products: high-efficiency solar panels, electric motorcycles for African roads, EV charging stations, battery energy storage systems, solar inverters, street lights, pumps, and appliances.',
    keywords: [
      'solar panels West Africa',
      'electric motorcycles Africa',
      'EV chargers installation',
      'solar inverters systems',
      'battery energy storage BESS',
      'solar street lights',
      'electric tricycles',
      'solar pumps irrigation',
      'solar appliances Africa',
      'renewable energy products',
      'sustainable technology'
    ],
    ogType: 'website'
  },
  
  services: {
    title: 'Professional Renewable Energy Services | Solar Installation, EV Maintenance & Energy Assessment',
    description: 'Professional renewable energy services across West Africa: solar panel installation, solar farm maintenance, EV charger setup, electric vehicle repair, energy efficiency assessments, and consultancy services.',
    keywords: [
      'solar installation West Africa',
      'solar farm maintenance',
      'EV charger installation',
      'electric vehicle repair',
      'solar maintenance services',
      'energy assessment Africa',
      'renewable energy consultancy',
      'solar consultancy services',
      'sustainable energy solutions'
    ],
    ogType: 'website'
  },
  
  about: {
    title: 'About EcoMoTech | Leading Renewable Energy Innovation Across West Africa',
    description: 'Learn about EcoMoTech\'s mission to accelerate West Africa\'s transition to sustainable energy through innovative solar solutions, electric mobility, and comprehensive renewable energy services across Nigeria, Ghana, Guinea, Gambia, Tanzania, and DRC.',
    keywords: [
      'renewable energy company West Africa',
      'sustainable technology Africa',
      'clean energy innovation',
      'electric mobility solutions Africa',
      'green technology leaders',
      'solar energy company',
      'EV infrastructure Africa'
    ],
    ogType: 'website'
  },
  
  news: {
    title: 'Renewable Energy News & Industry Insights | Latest Developments in Solar & E-Mobility',
    description: 'Stay updated with the latest renewable energy news, solar technology innovations, electric vehicle developments, battery management insights, and sustainable energy industry trends from EcoMoTech experts.',
    keywords: [
      'renewable energy news Africa',
      'solar technology updates',
      'electric motorcycle news',
      'EV charging infrastructure',
      'battery management systems BMS',
      'sustainable energy insights',
      'green technology developments',
      'solar benefits Africa',
      'e-mobility trends'
    ],
    ogType: 'website'
  },
  
  contact: {
    title: 'Contact EcoMoTech | Get Renewable Energy Solutions Quote & Expert Consultation',
    description: 'Contact EcoMoTech for renewable energy solutions across West Africa. Get quotes for solar panel installations, EV chargers, battery storage, and sustainable energy consultations. Free assessments available.',
    keywords: [
      'renewable energy quote West Africa',
      'solar installation contact',
      'EV charger consultation',
      'sustainable energy solutions',
      'green technology contact',
      'solar energy assessment',
      'electric mobility consultation'
    ],
    ogType: 'website'
  }
};

// Product category SEO configurations
export const productCategorySEO: Record<string, ProductSEO> = {
  'solar-panels': {
    title: 'High-Efficiency Solar Panels | Residential & Commercial Solar Solutions for West Africa',
    description: 'Premium solar panels with industry-leading efficiency ratings. Perfect for residential and commercial installations across West Africa. Durable, reliable, and cost-effective solar energy solutions with 25-year warranty.',
    keywords: [
      'solar panels West Africa',
      'photovoltaic panels Africa',
      'solar modules residential',
      'commercial solar panels',
      'high-efficiency solar Africa',
      'monocrystalline solar panels',
      'polycrystalline solar panels',
      'solar panels Nigeria Ghana Guinea',
      'solar energy systems'
    ],
    category: 'Solar Energy Systems',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'electric-motorcycles': {
    title: 'Electric Motorcycles for African Roads | Eco-Friendly E-Bikes & Sustainable Transportation',
    description: 'Advanced electric motorcycles designed for African road conditions. Long-range batteries, fast charging, zero emissions, and built for urban commuting and delivery services across West Africa.',
    keywords: [
      'electric motorcycles Africa',
      'electric bikes African roads',
      'e-motorcycles West Africa',
      'electric scooters Africa',
      'sustainable transportation Africa',
      'zero emission transport',
      'electric commuting Africa',
      'delivery electric bikes',
      'urban mobility solutions'
    ],
    category: 'Electric Vehicles',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'ev-chargers': {
    title: 'EV Charging Stations | Fast & Reliable Electric Vehicle Chargers for Africa',
    description: 'Professional EV charging solutions for homes and businesses across West Africa. Fast charging, smart connectivity, solar-compatible, and suitable for all major electric vehicle brands.',
    keywords: [
      'EV chargers Africa',
      'electric vehicle charging West Africa',
      'EV charging stations',
      'fast chargers Africa',
      'Level 2 chargers',
      'DC fast charging',
      'home EV charger',
      'commercial EV charging',
      'solar EV charging'
    ],
    category: 'Electric Vehicle Infrastructure',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'energy-storage': {
    title: 'Battery Energy Storage Systems (BESS) | Solar Battery Storage & Grid Applications',
    description: 'Advanced battery energy storage solutions including lithium batteries, solar battery systems, and grid-scale storage. Reliable backup power and energy independence for homes and businesses.',
    keywords: [
      'battery energy storage BESS',
      'solar battery storage Africa',
      'lithium battery systems',
      'backup power systems',
      'grid energy storage',
      'home energy storage',
      'commercial battery systems',
      'solar battery backup',
      'energy independence'
    ],
    category: 'Energy Storage',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'solar-inverters': {
    title: 'Solar Inverters | High-Efficiency Power Conversion for Solar Energy Systems',
    description: 'Professional-grade solar inverters for residential and commercial applications. Maximum power point tracking, grid-tie and off-grid capabilities, with advanced monitoring features.',
    keywords: [
      'solar inverters Africa',
      'grid-tie inverters',
      'off-grid inverters',
      'solar power inverters',
      'MPPT inverters',
      'residential solar inverters',
      'commercial solar inverters',
      'hybrid inverters',
      'solar system inverters'
    ],
    category: 'Solar Energy Systems',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'home-systems': {
    title: 'Solar Home Systems | Complete Off-Grid Solar Solutions for Residential Use',
    description: 'Complete solar home systems providing reliable electricity for homes across West Africa. Includes solar panels, battery storage, inverters, and all necessary components for energy independence.',
    keywords: [
      'solar home systems Africa',
      'off-grid solar systems',
      'residential solar solutions',
      'complete solar kits',
      'home solar power',
      'solar energy homes',
      'rural electrification',
      'standalone solar systems',
      'solar home lighting'
    ],
    category: 'Solar Home Solutions',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'street-lights': {
    title: 'Solar Street Lights | LED Solar Lighting Solutions for Urban & Rural Areas',
    description: 'High-efficiency solar street lights with LED technology, automatic controls, and long-lasting batteries. Perfect for urban streets, rural roads, and pathway illumination across Africa.',
    keywords: [
      'solar street lights Africa',
      'LED solar lighting',
      'solar street lamps',
      'outdoor solar lighting',
      'rural solar lighting',
      'urban solar lights',
      'automatic solar lights',
      'solar pathway lights',
      'solar security lighting'
    ],
    category: 'Solar Lighting',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'electric-tricycles': {
    title: 'Electric Tricycles | Three-Wheeler Electric Vehicles for Cargo & Passenger Transport',
    description: 'Efficient electric tricycles designed for cargo transport and passenger services. Perfect for urban delivery, commercial use, and sustainable three-wheeler transportation across Africa.',
    keywords: [
      'electric tricycles Africa',
      'three-wheeler electric vehicles',
      'electric cargo tricycles',
      'passenger electric tricycles',
      'commercial electric vehicles',
      'delivery tricycles',
      'sustainable transport',
      'electric three-wheelers',
      'cargo e-tricycles'
    ],
    category: 'Electric Vehicles',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'solar-pumbs': {
    title: 'Solar Water Pumps | Solar-Powered Irrigation & Water Pumping Systems',
    description: 'Reliable solar water pumps for irrigation, livestock watering, and domestic water supply. Energy-efficient, low-maintenance, and perfect for remote areas across West Africa.',
    keywords: [
      'solar water pumps Africa',
      'solar irrigation pumps',
      'solar pumping systems',
      'agricultural solar pumps',
      'solar borehole pumps',
      'solar water supply',
      'irrigation solar pumps',
      'livestock water pumps',
      'rural water pumping'
    ],
    category: 'Solar Water Solutions',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },

  'solar-appliances': {
    title: 'Solar Appliances | Solar-Powered Devices & Equipment for Sustainable Living',
    description: 'Complete range of solar-powered appliances including fans, lights, radios, refrigerators, and charging devices. Energy-efficient solutions for sustainable living across Africa.',
    keywords: [
      'solar appliances Africa',
      'solar powered devices',
      'solar fans',
      'solar lights',
      'solar radios',
      'solar refrigerators',
      'solar charging devices',
      'portable solar devices',
      'solar home appliances'
    ],
    category: 'Solar Appliances',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  }
};

// Generate canonical URL
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://ecomotech.online';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

// Generate OpenGraph image URL
export const getOGImageUrl = (imagePath?: string): string => {
  const baseUrl = 'https://ecomotech.online';
  return imagePath ? `${baseUrl}${imagePath}` : `${baseUrl}/images/og-default.jpg`;
};

// Get page-specific SEO configuration
export const getPageSEO = (pageKey: string): SEOConfig => {
  const config = pageSEO[pageKey];
  if (!config) {
    console.warn(`SEO configuration not found for page: ${pageKey}`);
    return baseSEO;
  }
  
  return {
    ...config,
    canonical: getCanonicalUrl(pageKey === 'home' ? '/' : `/${pageKey}`),
    ogImage: getOGImageUrl(config.ogImage)
  };
};

// Get product category SEO configuration
export const getProductCategorySEO = (categoryKey: string): ProductSEO => {
  const config = productCategorySEO[categoryKey];
  if (!config) {
    console.warn(`Product SEO configuration not found for category: ${categoryKey}`);
    return {
      ...baseSEO,
      category: 'Renewable Energy',
      brand: 'EcoMoTech',
      availability: 'InStock' as const,
      condition: 'NewCondition' as const
    } as ProductSEO;
  }
  
  return {
    ...config,
    canonical: getCanonicalUrl(`/products/${categoryKey}`),
    ogImage: getOGImageUrl(config.ogImage)
  };
};
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
  title: 'EcoMoTech - Renewable Energy & Electric Mobility Solutions',
  description: 'Leading provider of solar energy systems, electric vehicles, EV chargers, and sustainable energy solutions. Explore our comprehensive range of renewable energy products and services.',
  keywords: [
    'renewable energy',
    'solar panels',
    'electric vehicles',
    'EV chargers',
    'solar energy systems',
    'sustainable energy',
    'electric mobility',
    'green technology',
    'solar power',
    'energy storage',
    'solar inverters',
    'electric motorcycles',
    'solar street lights',
    'clean energy solutions'
  ],
  ogImage: '/images/og-default.jpg',
  ogType: 'website'
};

// Organization schema for structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EcoMoTech",
  "alternateName": "EcoMoTech Solutions",
  "description": "Leading provider of renewable energy and electric mobility solutions",
  "url": "https://ecomotech.online",
  "logo": "https://ecomotech.online/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-ECO-TECH",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/ecomotech",
    "https://twitter.com/ecomotech"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Technology Hub",
    "addressCountry": "Global"
  },
  "foundingDate": "2020",
  "industry": "Renewable Energy",
  "keywords": "renewable energy, solar power, electric vehicles, sustainable technology"
};

// Page-specific SEO configurations
export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: 'EcoMoTech - Renewable Energy & Electric Mobility Solutions | Solar Power & EV Technology',
    description: 'Discover cutting-edge renewable energy solutions including solar panels, electric vehicles, EV chargers, and energy storage systems. Leading the transition to sustainable energy.',
    keywords: [
      'renewable energy solutions',
      'solar power systems',
      'electric vehicle technology',
      'sustainable energy',
      'green technology',
      'solar energy',
      'electric mobility',
      'clean energy'
    ],
    ogType: 'website'
  },
  
  products: {
    title: 'Renewable Energy Products | Solar Panels, EV Chargers & Electric Vehicles',
    description: 'Explore our comprehensive range of renewable energy products: high-efficiency solar panels, electric vehicles, EV charging stations, energy storage systems, and solar inverters.',
    keywords: [
      'solar panels',
      'electric vehicles',
      'EV chargers',
      'solar inverters',
      'energy storage',
      'solar street lights',
      'electric motorcycles',
      'renewable energy products'
    ],
    ogType: 'website'
  },
  
  services: {
    title: 'Renewable Energy Services | Solar Installation & EV Maintenance',
    description: 'Professional renewable energy services including solar panel installation, EV charger setup, energy efficiency assessments, and solar system maintenance.',
    keywords: [
      'solar installation',
      'EV charger installation',
      'solar maintenance',
      'energy assessment',
      'renewable energy services',
      'solar consultancy'
    ],
    ogType: 'website'
  },
  
  about: {
    title: 'About EcoMoTech | Leaders in Renewable Energy Innovation',
    description: 'Learn about EcoMoTech\'s mission to accelerate the world\'s transition to sustainable energy through innovative renewable energy and electric mobility solutions.',
    keywords: [
      'renewable energy company',
      'sustainable technology',
      'clean energy innovation',
      'electric mobility solutions',
      'green technology leaders'
    ],
    ogType: 'website'
  },
  
  news: {
    title: 'Renewable Energy News & Updates | EcoMoTech Latest Developments',
    description: 'Stay updated with the latest news in renewable energy, solar technology innovations, electric vehicle developments, and sustainable energy industry insights.',
    keywords: [
      'renewable energy news',
      'solar technology updates',
      'electric vehicle news',
      'sustainable energy insights',
      'green technology developments'
    ],
    ogType: 'website'
  },
  
  contact: {
    title: 'Contact EcoMoTech | Get Renewable Energy Solutions Quote',
    description: 'Contact EcoMoTech for renewable energy solutions, solar panel installations, EV chargers, and sustainable energy consultations. Get your free quote today.',
    keywords: [
      'renewable energy quote',
      'solar installation contact',
      'EV charger consultation',
      'sustainable energy solutions',
      'green technology contact'
    ],
    ogType: 'website'
  }
};

// Product category SEO configurations
export const productCategorySEO: Record<string, ProductSEO> = {
  'solar-panels': {
    title: 'High-Efficiency Solar Panels | Residential & Commercial Solar Solutions',
    description: 'Premium solar panels with industry-leading efficiency ratings. Perfect for residential and commercial installations. Durable, reliable, and cost-effective solar energy solutions.',
    keywords: [
      'solar panels',
      'photovoltaic panels',
      'solar modules',
      'residential solar',
      'commercial solar',
      'high-efficiency solar',
      'monocrystalline solar panels',
      'polycrystalline solar panels'
    ],
    category: 'Solar Energy Systems',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'electric-motorcycles': {
    title: 'Electric Motorcycles | Eco-Friendly Electric Bikes & Scooters',
    description: 'Advanced electric motorcycles and scooters with long-range batteries, fast charging, and zero emissions. Perfect for urban commuting and sustainable transportation.',
    keywords: [
      'electric motorcycles',
      'electric bikes',
      'electric scooters',
      'e-bikes',
      'electric vehicles',
      'zero emission transport',
      'sustainable mobility',
      'electric commuting'
    ],
    category: 'Electric Vehicles',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'ev-chargers': {
    title: 'EV Charging Stations | Fast & Reliable Electric Vehicle Chargers',
    description: 'Professional EV charging solutions for homes and businesses. Fast charging, smart connectivity, and compatible with all major electric vehicle brands.',
    keywords: [
      'EV chargers',
      'electric vehicle charging',
      'EV charging stations',
      'fast chargers',
      'Level 2 chargers',
      'DC fast charging',
      'home EV charger',
      'commercial EV charging'
    ],
    category: 'Electric Vehicle Infrastructure',
    brand: 'EcoMoTech',
    availability: 'InStock',
    condition: 'NewCondition',
    ogType: 'product'
  },
  
  'energy-storage': {
    title: 'Energy Storage Systems | Battery Storage for Solar & Grid Applications',
    description: 'Advanced energy storage solutions including lithium batteries, solar battery systems, and grid-scale storage. Reliable backup power and energy independence.',
    keywords: [
      'energy storage',
      'battery storage',
      'solar batteries',
      'lithium batteries',
      'backup power',
      'grid storage',
      'home energy storage',
      'commercial battery systems'
    ],
    category: 'Energy Storage',
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
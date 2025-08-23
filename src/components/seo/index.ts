// SEO Components for EcoMoTechWeb
// Centralized exports for all SEO-related components

export { default as ProductSEO } from './ProductSEO';
export { default as ArticleSEO } from './ArticleSEO';
// Note: SEOImage can be imported directly from './SEOImage'

// Re-export SEO hooks for convenience
export { useSEO, useProductSEO, useArticleSEO } from '@/hooks/useSEO';

// Re-export SEO utilities
export {
  baseSEO,
  organizationSchema,
  pageSEO,
  productCategorySEO,
  getPageSEO,
  getProductCategorySEO,
  getCanonicalUrl,
  getOGImageUrl,
  type SEOConfig,
  type ProductSEO as ProductSEOType
} from '@/lib/seo';
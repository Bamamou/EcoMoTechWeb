import React from 'react';
import { useProductSEO } from '@/hooks/useSEO';
import { ProductSEO as ProductSEOType } from '@/lib/seo';

interface ProductSEOProps {
  product: {
    id: string;
    name: string;
    description: string;
    price?: string;
    images?: string[];
    category: string;
    brand?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    condition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
    sku?: string;
    gtin?: string;
    mpn?: string;
    reviews?: {
      ratingValue: number;
      reviewCount: number;
    };
  };
  categoryConfig?: ProductSEOType;
}

export const ProductSEO: React.FC<ProductSEOProps> = ({ 
  product, 
  categoryConfig 
}) => {
  // Generate product-specific structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "EcoMoTech"
    },
    "category": product.category,
    "sku": product.sku,
    "gtin": product.gtin,
    "mpn": product.mpn,
    "image": product.images?.map(img => 
      img.startsWith('http') ? img : `https://ecomotech.online${img}`
    ) || [],
    "offers": {
      "@type": "Offer",
      "price": product.price?.replace(/[^0-9.]/g, '') || "0",
      "priceCurrency": "USD",
      "availability": `https://schema.org/${product.availability || 'InStock'}`,
      "itemCondition": `https://schema.org/${product.condition || 'NewCondition'}`,
      "seller": {
        "@type": "Organization",
        "name": "EcoMoTech"
      }
    }
  };

  // Add review aggregation if available
  if (product.reviews && product.reviews.reviewCount > 0) {
    productSchema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": product.reviews.ratingValue,
      "reviewCount": product.reviews.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  // Generate SEO configuration for the product
  const productSEOConfig = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.images?.[0],
    category: product.category,
    brand: product.brand || 'EcoMoTech',
    availability: product.availability || 'InStock',
    condition: product.condition || 'NewCondition'
  };

  // Apply SEO configuration
  useProductSEO(productSEOConfig);

  return null; // This component only handles SEO, no visual output
};

export default ProductSEO;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOConfig, baseSEO, getCanonicalUrl, getOGImageUrl } from '@/lib/seo';

interface UseSEOProps extends Partial<SEOConfig> {
  templateTitle?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  templateTitle,
  schema
}: UseSEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    const finalTitle = title || baseSEO.title;
    const documentTitle = templateTitle 
      ? `${finalTitle} | ${templateTitle}`
      : finalTitle;
    
    document.title = documentTitle;

    // Remove existing meta tags that we'll be updating
    const existingMetaTags = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name="twitter:"], meta[name="robots"], link[rel="canonical"]'
    );
    existingMetaTags.forEach(tag => tag.remove());

    // Remove existing structured data
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Create and append new meta tags
    const head = document.head;

    // Basic meta tags
    if (description || baseSEO.description) {
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description || baseSEO.description;
      head.appendChild(metaDescription);
    }

    // Keywords
    const allKeywords = [...(keywords || []), ...baseSEO.keywords];
    if (allKeywords.length > 0) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = allKeywords.join(', ');
      head.appendChild(metaKeywords);
    }

    // Robots meta tag
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = noindex ? 'noindex, nofollow' : 'index, follow';
    head.appendChild(metaRobots);

    // Canonical URL
    const canonicalUrl = canonical || getCanonicalUrl(location.pathname);
    const linkCanonical = document.createElement('link');
    linkCanonical.rel = 'canonical';
    linkCanonical.href = canonicalUrl;
    head.appendChild(linkCanonical);

    // OpenGraph tags
    const ogTags = [
      { property: 'og:title', content: documentTitle },
      { property: 'og:description', content: description || baseSEO.description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'EcoMoTech' },
      { property: 'og:image', content: getOGImageUrl(ogImage) },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${documentTitle} - EcoMoTech` }
    ];

    ogTags.forEach(({ property, content }) => {
      const metaOG = document.createElement('meta');
      metaOG.setAttribute('property', property);
      metaOG.content = content;
      head.appendChild(metaOG);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: documentTitle },
      { name: 'twitter:description', content: description || baseSEO.description },
      { name: 'twitter:image', content: getOGImageUrl(ogImage) },
      { name: 'twitter:image:alt', content: `${documentTitle} - EcoMoTech` },
      { name: 'twitter:site', content: '@ecomotech' },
      { name: 'twitter:creator', content: '@ecomotech' }
    ];

    twitterTags.forEach(({ name, content }) => {
      const metaTwitter = document.createElement('meta');
      metaTwitter.name = name;
      metaTwitter.content = content;
      head.appendChild(metaTwitter);
    });

    // Additional meta tags for better SEO
    const additionalMeta = [
      { name: 'author', content: 'EcoMoTech' },
      { name: 'publisher', content: 'EcoMoTech' },
      { name: 'application-name', content: 'EcoMoTech' },
      { name: 'theme-color', content: '#38b635' },
      { name: 'msapplication-TileColor', content: '#38b635' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ];

    additionalMeta.forEach(({ name, content }) => {
      // Check if meta tag already exists
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        head.appendChild(meta);
      }
    });

    // Add structured data (JSON-LD) if provided
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schema);
      head.appendChild(schemaScript);
    }

  }, [title, description, keywords, ogImage, ogType, canonical, noindex, templateTitle, schema, location.pathname]);
};

// Hook for product pages with structured data
export const useProductSEO = (product: {
  id: string;
  name: string;
  description: string;
  price?: string;
  image?: string;
  category: string;
  brand?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  condition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
}) => {
  const location = useLocation();

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
    "image": product.image ? getOGImageUrl(product.image) : getOGImageUrl(),
    "url": getCanonicalUrl(location.pathname),
    "availability": `https://schema.org/${product.availability || 'InStock'}`,
    "itemCondition": `https://schema.org/${product.condition || 'NewCondition'}`,
    "manufacturer": {
      "@type": "Organization",
      "name": "EcoMoTech",
      "url": "https://ecomotech.online"
    }
  };

  // Add price if available
  if (product.price) {
    productSchema["offers"] = {
      "@type": "Offer",
      "price": product.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "USD",
      "availability": `https://schema.org/${product.availability || 'InStock'}`,
      "seller": {
        "@type": "Organization",
        "name": "EcoMoTech"
      }
    };
  }

  useSEO({
    title: `${product.name} | ${product.category} | EcoMoTech`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      product.category.toLowerCase(),
      'renewable energy',
      'sustainable technology',
      'ecomotech'
    ],
    ogImage: product.image,
    ogType: 'product',
    schema: productSchema
  });
};

// Hook for article/news pages
export const useArticleSEO = (article: {
  title: string;
  description: string;
  publishDate: string;
  author?: string;
  image?: string;
  keywords?: string[];
}) => {
  const location = useLocation();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image ? getOGImageUrl(article.image) : getOGImageUrl(),
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "author": {
      "@type": "Person",
      "name": article.author || "EcoMoTech Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EcoMoTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecomotech.online/images/logo.png"
      }
    },
    "url": getCanonicalUrl(location.pathname),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": getCanonicalUrl(location.pathname)
    }
  };

  useSEO({
    title: `${article.title} | EcoMoTech News`,
    description: article.description,
    keywords: article.keywords || ['renewable energy news', 'sustainable technology', 'ecomotech'],
    ogImage: article.image,
    ogType: 'article',
    schema: articleSchema
  });
};
import { useEffect } from 'react';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords = [],
  image = '/images/log.png',
  url,
  type = 'website',
  author = 'EcoMoTech',
  publishedTime,
  modifiedTime,
  schema
}) => {
  const fullTitle = `${title} | EcoMoTech - Renewable Energy Solutions`;
  const fullUrl = url ? `https://ecomotech.online${url}` : 'https://ecomotech.online';
  const fullImage = image.startsWith('http') ? image : `https://ecomotech.online${image}`;

  // Add EcoMoTech brand keywords to every page
  const enhancedKeywords = [
    'EcoMoTech',
    'Eco Mo Tech', 
    'EcoMoTech Energy',
    'renewable energy',
    'sustainable technology',
    ...keywords
  ];

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Remove existing meta tags that we'll be updating
    const existingMetaTags = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name="twitter:"], meta[name="robots"], link[rel="canonical"]'
    );
    existingMetaTags.forEach(tag => tag.remove());

    // Create and append new meta tags
    const head = document.head;

    // Basic meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = enhancedKeywords.join(', ');
    head.appendChild(metaKeywords);

    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = author;
    head.appendChild(metaAuthor);

    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    head.appendChild(metaRobots);

    // Canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = fullUrl;
    head.appendChild(canonical);

    // OpenGraph tags
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = type;
    head.appendChild(ogType);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = fullUrl;
    head.appendChild(ogUrl);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = fullTitle;
    head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = description;
    head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = fullImage;
    head.appendChild(ogImage);

    const ogSiteName = document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.content = 'EcoMoTech';
    head.appendChild(ogSiteName);

    // Twitter tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    head.appendChild(twitterCard);

    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = fullTitle;
    head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = description;
    head.appendChild(twitterDescription);

    const twitterImage = document.createElement('meta');
    twitterImage.name = 'twitter:image';
    twitterImage.content = fullImage;
    head.appendChild(twitterImage);

    // Add structured data
    if (schema) {
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      head.appendChild(scriptTag);
    }

    // Cleanup function
    return () => {
      // Remove meta tags when component unmounts
      const metaTags = [
        metaDescription, metaKeywords, metaAuthor, metaRobots,
        ogType, ogUrl, ogTitle, ogDescription, ogImage, ogSiteName,
        twitterCard, twitterTitle, twitterDescription, twitterImage
      ];
      metaTags.forEach(tag => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag);
        }
      });
      
      if (canonical.parentNode) {
        canonical.parentNode.removeChild(canonical);
      }
    };
  }, [title, description, keywords, fullUrl, fullImage, type, author, schema]);

  return null;
};

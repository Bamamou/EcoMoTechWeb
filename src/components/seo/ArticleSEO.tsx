import React from 'react';
import { useArticleSEO } from '@/hooks/useSEO';

interface ArticleSEOProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image?: string;
    tags?: string[];
    readingTime?: number;
  };
}

export const ArticleSEO: React.FC<ArticleSEOProps> = ({ article }) => {
  // Generate article-specific structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "articleBody": article.content,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "EcoMoTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecomotech.online/images/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ecomotech.online/news/${article.id}`
    },
    "image": article.image ? {
      "@type": "ImageObject",
      "url": article.image.startsWith('http') ? article.image : `https://ecomotech.online${article.image}`,
      "width": 1200,
      "height": 630
    } : undefined,
    "articleSection": article.category,
    "keywords": [
      ...(article.tags || []),
      'renewable energy',
      'sustainable technology',
      article.category.toLowerCase()
    ].join(', ')
  };

  // Add reading time if available
  if (article.readingTime) {
    articleSchema["timeRequired"] = `PT${article.readingTime}M`;
  }

  // Generate SEO configuration for the article
  const articleSEOConfig = {
    title: `${article.title} | EcoMoTech News`,
    description: article.excerpt,
    publishDate: article.date,
    author: article.author,
    image: article.image,
    keywords: [
      ...(article.tags || []),
      'renewable energy news',
      'sustainable technology',
      article.category.toLowerCase(),
      'ecomotech'
    ]
  };

  // Apply SEO configuration
  useArticleSEO(articleSEOConfig);

  return null; // This component only handles SEO, no visual output
};

export default ArticleSEO;
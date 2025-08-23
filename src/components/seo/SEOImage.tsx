import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
  title?: string;
  caption?: string;
  photographer?: string;
  license?: string;
  structuredData?: boolean;
}

export const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  srcSet,
  onLoad,
  onError,
  title,
  caption,
  photographer,
  license,
  structuredData = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Generate structured data for the image if enabled
  const imageSchema = structuredData ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src.startsWith('http') ? src : `https://ecomotech.online${src}`,
    "name": alt,
    "description": caption || alt,
    "width": width,
    "height": height,
    "encodingFormat": src.split('.').pop()?.toUpperCase(),
    "creator": photographer ? {
      "@type": "Person",
      "name": photographer
    } : undefined,
    "license": license,
    "copyrightNotice": `© EcoMoTech${photographer ? ` - ${photographer}` : ''}`,
    "isAccessibleForFree": true
  } : null;

  // Optimize image URL (placeholder for future optimization service)
  const optimizeImageUrl = (url: string, width?: number, quality?: number) => {
    // For now, return the original URL
    // In the future, this could integrate with image optimization services
    return url;
  };

  const optimizedSrc = optimizeImageUrl(src, width, quality);

  return (
    <figure className={cn('relative', className)}>
      {/* Structured Data JSON-LD */}
      {imageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
      )}
      
      {/* Image with SEO optimizations */}
      <img
        src={optimizedSrc}
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading && placeholder === 'blur' ? 'opacity-0' : 'opacity-100',
          hasError ? 'opacity-50' : '',
          className
        )}
        style={{
          backgroundImage: blurDataURL && placeholder === 'blur' ? `url(${blurDataURL})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        {...props}
      />
      
      {/* Loading placeholder */}
      {isLoading && placeholder === 'blur' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Image failed to load</span>
        </div>
      )}
      
      {/* Caption with proper semantic markup */}
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 italic">
          {caption}
          {photographer && (
            <span className="block mt-1 text-xs text-gray-500">
              Photo by {photographer}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default SEOImage;
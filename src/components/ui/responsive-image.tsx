import React from 'react';
import { getImagePath } from '@/utils/imagePaths';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  fallback,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = React.useState(getImagePath(src));
  const [imageError, setImageError] = React.useState(false);

  // Update image path when src changes
  React.useEffect(() => {
    setImageSrc(getImagePath(src));
    setImageError(false);
  }, [src]);

  const handleError = () => {
    if (!imageError && fallback) {
      setImageSrc(getImagePath(fallback));
      setImageError(true);
    } else {
      setImageError(true);
    }
  };

  const handleLoad = () => {
    setImageError(false);
  };

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      style={{
        ...props.style,
        display: imageError ? 'none' : 'block'
      }}
    />
  );
};

// Simple image path converter for inline usage
export const img = (path: string): string => getImagePath(path);

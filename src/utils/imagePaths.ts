// Utility function to get the correct image path based on deployment target
export const getImagePath = (imagePath: string): string => {
  // Remove leading slash and EcoMoTechWeb prefix if present
  const cleanPath = imagePath.replace(/^\/EcoMoTechWeb\//, '').replace(/^\//, '');
  
  // Get the base path from environment
  const getBasePath = () => {
    if (import.meta.env.VITE_DEPLOYMENT_TARGET === 'netlify' || 
        import.meta.env.VITE_DEPLOYMENT_TARGET === 'subdomain') {
      return '';
    }
    return import.meta.env.VITE_APP_BASENAME || '/EcoMoTechWeb';
  };
  
  const basePath = getBasePath();
  
  // Return the full path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
};

// Alternative function for images that might already have the correct path
export const getAssetPath = (assetPath: string): string => {
  // If the path is already relative (no leading slash), make it absolute
  if (!assetPath.startsWith('/')) {
    return getImagePath(assetPath);
  }
  
  // If it's already an absolute path with EcoMoTechWeb, handle it
  if (assetPath.startsWith('/EcoMoTechWeb/')) {
    return getImagePath(assetPath);
  }
  
  // For paths that start with / but don't have EcoMoTechWeb
  // Add the appropriate base path
  const basePath = (import.meta.env.VITE_DEPLOYMENT_TARGET === 'netlify' || 
                   import.meta.env.VITE_DEPLOYMENT_TARGET === 'subdomain') ? 
                   '' : (import.meta.env.VITE_APP_BASENAME || '/EcoMoTechWeb');
  return basePath ? `${basePath}${assetPath}` : assetPath;
};

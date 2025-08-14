import { getImagePath } from './imagePaths';

// Utility function to convert hardcoded paths to relative paths using getImagePath
export const updateImagePath = (hardcodedPath: string): string => {
  // Remove the hardcoded prefix and convert to relative path
  const relativePath = hardcodedPath.replace('/EcoMoTechWeb/', '');
  return getImagePath(relativePath);
};

// For batch updating data structures
export const updateImagePaths = (data: any[]): any[] => {
  return data.map(item => ({
    ...item,
    image: typeof item.image === 'string' ? updateImagePath(item.image) : item.image,
    images: item.images ? {
      ...item.images,
      main: typeof item.images.main === 'string' ? updateImagePath(item.images.main) : item.images.main,
      gallery: item.images.gallery ? item.images.gallery.map((img: string) => updateImagePath(img)) : item.images.gallery
    } : item.images
  }));
};

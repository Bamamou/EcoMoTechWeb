import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of 6 high-quality product images for smooth rotation
  const heroImages = [
    'images/Solar panels/PV.webp',
    'images/Services/electric motorcycles.png',
    'images/Services/fleet.png',
    'images/streetlights/road.jpg',
    'images/News/Partnership.png',
  ];

  // Preload all images on mount for smooth transitions
  useEffect(() => {
    const imagePromises = heroImages.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Continue even if one fails
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  // Go to next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const timer = setInterval(nextImage, 6000);
    return () => clearInterval(timer);
  }, [imagesLoaded, nextImage]);

  // Calculate previous image index for crossfade effect
  const prevImageIndex = (currentImageIndex - 1 + heroImages.length) % heroImages.length;

  return (
    <div className="relative h-[60vh] md:h-[85vh] lg:h-screen flex items-center overflow-hidden">
      {/* Background Images with Ken Burns Effect & Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => {
          const isActive = index === currentImageIndex;
          const wasPrevious = index === prevImageIndex;
          
          // Determine opacity and z-index for smooth layered crossfade
          let opacity = 0;
          let zIndex = 0;
          
          if (isActive) {
            opacity = 1;
            zIndex = 2;
          } else if (wasPrevious) {
            opacity = 0;
            zIndex = 1; // Previous image fades out underneath
          }

          return (
            <div
              key={image}
              className="absolute inset-0"
              style={{
                opacity,
                zIndex,
                transition: 'opacity 3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Image with Ken Burns slow zoom animation */}
              <div
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{
                  backgroundImage: `url('${image}')`,
                  animation: isActive ? 'kenBurns 7s ease-out forwards' : 'none',
                  transform: isActive ? undefined : 'scale(1.08)', // Keep zoomed state when fading out
                }}
              />
            </div>
          );
        })}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
      </div>

      {/* Ken Burns Animation Keyframes */}
      <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            Powering A Sustainable Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white opacity-90 mb-6 md:mb-8"
          >
            Ecomotech delivers innovative solar power solutions that help businesses and homeowners reduce their carbon footprint while saving on energy costs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => navigate('/products')}
              className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-500 ease-out ${
              index === currentImageIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

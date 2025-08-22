import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { useParams, useNavigate } from 'react-router-dom';
import { batteryProducts } from '@/data/energyStorageData';
import { Battery, Settings, Zap, Shield, Box, CheckCircle, Star, ArrowRight, Eye } from "lucide-react";
import styles from '@/styles/EnergyStorageDetails.module.css';
import { ResponsiveImage } from '@/components/ui/responsive-image';

const EnergyStorageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const system = batteryProducts.find(sys => sys.id === id);

  // Smart recommendation system for energy storage
  const getRecommendedProducts = () => {
    if (!system) return [];

    const otherProducts = batteryProducts.filter(product => product.id !== system.id);
    
    // Smart scoring algorithm for recommendations
    const scoredProducts = otherProducts.map(product => {
      let score = 0;
      
      // Parse capacity for comparison (extract numeric value)
      const getCurrentCapacity = (capacityStr: string) => {
        const match = capacityStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const currentCapacity = getCurrentCapacity(system.capacity);
      const productCapacity = getCurrentCapacity(product.capacity);
      
      // Similar capacity gets highest priority (40 points)
      if (currentCapacity > 0 && productCapacity > 0) {
        const capacityDiff = Math.abs(productCapacity - currentCapacity);
        const maxCapacity = Math.max(productCapacity, currentCapacity);
        const capacityRatio = 1 - (capacityDiff / maxCapacity);
        score += capacityRatio * 40;
      }
      
      // Parse price for comparison (extract numeric value from "Starting from $X")
      const getCurrentPrice = (priceStr: string) => {
        const match = priceStr.match(/\$(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const currentPrice = getCurrentPrice(system.price);
      const productPrice = getCurrentPrice(product.price);
      
      // Similar price range (25 points)
      if (currentPrice > 0 && productPrice > 0) {
        const priceDiff = Math.abs(productPrice - currentPrice);
        const maxPrice = Math.max(productPrice, currentPrice);
        const priceRatio = 1 - (priceDiff / maxPrice);
        score += priceRatio * 25;
      }
      
      // Products with more features get bonus (15 points)
      const featureCount = product.details.features.length;
      score += (featureCount / 10) * 15;
      
      // Products with better protection get bonus (10 points)
      const protectionCount = product.details.protection.length;
      score += (protectionCount / 8) * 10;
      
      // Products with longer warranty get bonus (10 points)
      const warrantyMatch = product.details.warranty.match(/(\d+)/);
      const warrantyYears = warrantyMatch ? parseInt(warrantyMatch[1]) : 0;
      score += (warrantyYears / 5) * 10;
      
      return { ...product, score };
    });
    
    // Sort by score and return top 3
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const recommendedProducts = getRecommendedProducts();

  if (!system) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">System Not Found</h2>
            <p className="mt-4 text-gray-600">The system you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products/energy-storage')}
              className="mt-6 bg-ecomotech-green hover:bg-ecomotech-dark-green text-white py-2 px-4 rounded transition-colors"
            >
              Return to Energy Storage
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className={styles.detailsContainer}>
        <div className={styles.productWrapper}>
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <ResponsiveImage
                src={system.images.gallery[selectedImage]}
                alt={system.name}
                className={styles.mainImage}
              />
            </div>
            <div className={styles.thumbnailsGrid}>
              {system.images.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnailContainer} ${
                    selectedImage === index ? styles.active : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <ResponsiveImage
                    src={image}
                    alt={`${system.name} view ${index + 1}`}
                    className={styles.thumbnailImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{system.name}</h1>
            <p className={styles.capacity}>{system.capacity}</p>
            <p className={styles.description}>{system.description}</p>
            <p className={styles.price}>{system.price}</p>

            <div className={styles.specRow}>
              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Battery className="w-6 h-6 text-green-500" />
                  <span>Technical Specs</span>
                </h2>
                <dl className={styles.specificationsList}>
                  {Object.entries(system.details.specifications).map(([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <dt className={styles.specLabel}>{key}</dt>
                      <dd className={styles.specValue}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Shield className="w-6 h-6 text-green-500" />
                  <span>Protection</span>
                </h2>
                <ul className={styles.featuresList}>
                  {system.details.protection.map((item, index) => (
                    <li key={index} className={styles.featureItem}>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.specRow}>
              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Box className="w-6 h-6 text-green-500" />
                  <span>Physical Specs</span>
                </h2>
                <dl className={styles.specificationsList}>
                  {Object.entries(system.details.physical).map(([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <dt className={styles.specLabel}>{key}</dt>
                      <dd className={styles.specValue}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Zap className="w-6 h-6 text-green-500" />
                  <span>Features</span>
                </h2>
                <ul className={styles.featuresList}>
                  {system.details.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Products Section */}
            {recommendedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                      <div className="relative">
                        <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                          <ResponsiveImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Capacity Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {product.capacity}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Key Specs */}
                        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Battery className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600">{product.details.specifications.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600">{product.details.specifications.efficiency}</span>
                          </div>
                        </div>

                        {/* Features Preview */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {product.details.features.slice(0, 2).map((feature, index) => (
                              <span 
                                key={index}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {feature.length > 12 ? feature.substring(0, 12) + '...' : feature}
                              </span>
                            ))}
                            {product.details.features.length > 2 && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                +{product.details.features.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-green-600">
                            {product.price}
                          </span>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => navigate(`/products/energy-storage/${product.id}`)}
                          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>

                        {/* Additional Info */}
                        <div className="mt-3 text-center">
                          <span className="text-sm text-gray-500">
                            {product.details.warranty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button
                    onClick={() => navigate('/products/energy-storage')}
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    View All Energy Storage Systems
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => navigate('/contact', { 
                state: { 
                  productInfo: {
                    name: system.name,
                    id: system.id,
                    type: 'Energy Storage System'
                  }
                }
              })}
              className={styles.contactButton}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnergyStorageDetails;
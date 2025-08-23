import React from 'react';
import Layout from "@/components/layout/Layout";
import styles from '@/styles/HomeSystemDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { homeSystems } from '@/data/homeSystemsData';
import { Sun, Battery, Zap, Box, Cable, Ruler, Star, ArrowLeft } from "lucide-react";
import { ResponsiveImage } from '@/components/ui/responsive-image';

const HomeSystemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const system = homeSystems.find(sys => sys.id === id);
  const [selectedImage, setSelectedImage] = React.useState(0);

  // Get recommendations based on current system
  const getRecommendations = (currentSystem: any) => {
    if (!currentSystem) return [];
    
    // Get other systems, prioritizing similar power ranges
    const otherSystems = homeSystems.filter(sys => sys.id !== currentSystem.id);
    
    // Sort by power similarity (extract numeric value from power string)
    const currentPowerValue = parseFloat(currentSystem.power);
    otherSystems.sort((a, b) => {
      const aPowerValue = parseFloat(a.power);
      const bPowerValue = parseFloat(b.power);
      const aDiff = Math.abs(aPowerValue - currentPowerValue);
      const bDiff = Math.abs(bPowerValue - currentPowerValue);
      return aDiff - bDiff;
    });
    
    // Return up to 3 recommendations
    return otherSystems.slice(0, 3);
  };

  const recommendations = getRecommendations(system);

  if (!system) {
    console.error(`System with ID ${id} not found`);
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">System Not Found</h2>
            <p className="mt-4 text-gray-600">The system you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products/home-systems')}
              className="mt-6 bg-ecomotech-green hover:bg-ecomotech-dark-green text-white py-2 px-4 rounded transition-colors"
            >
              Return to Home Systems
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleContactClick = () => {
    navigate('/contact', {
      state: { 
        productId: system?.id,
        productType: 'Solar Home System',
        productName: system?.name,
        inquiryType: 'general'
      }
    });
  };

  const handleQuoteRequest = () => {
    navigate('/contact', { 
      state: { 
        productId: system?.id, 
        productType: 'Solar Home System',
        productName: system?.name,
        inquiryType: 'quote'
      } 
    });
  };

  const allImages = [system.image]; // Add more images when available

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate('/products')} className="hover:text-blue-600 transition-colors">Products</button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate('/products/home-systems')} className="hover:text-blue-600 transition-colors">Home Systems</button>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{system.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button onClick={() => navigate('/products/home-systems')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors">
          <ArrowLeft size={20} />
          Back to Home Systems
        </button>
      </div>

      <section className={styles.detailsContainer}>
        <div className={styles.productWrapper}>
          {/* Gallery Section */}
          <div className={styles.imageGallery}>
            <ResponsiveImage 
              src={allImages[selectedImage]} 
              alt={system.name}
              className={styles.mainImage} 
            />
            <div className={styles.thumbnailGrid}>
              {allImages.map((image, index) => (
                <ResponsiveImage 
                  key={index}
                  src={image}
                  alt={`${system.name} view ${index + 1}`}
                  className={`${styles.thumbnailImage} ${selectedImage === index ? styles.active : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Call to Action Section */}
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>Ready to Go Solar?</h3>
              <p className={styles.ctaDescription}>
                Join thousands of satisfied customers who have transformed their homes with clean, renewable energy.
              </p>
              <div className={styles.ctaButtons}>
                <button 
                  onClick={handleQuoteRequest}
                  className={styles.ctaButtonPrimary}
                >
                  Get Free Quote
                </button>
                <button 
                  onClick={handleContactClick}
                  className={styles.ctaButtonSecondary}
                >
                  Contact Us
                </button>
              </div>
              <div className={styles.ctaContact}>
                <p>📞 +237 6 71 23 45 67 | 📧 info@ecomotech.com</p>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{system.name}</h1>
            <p className={styles.powerText}>{system.power} System</p>
            <p className={styles.productDescription}>{system.description}</p>
            <p className={styles.price}>{system.price}</p>

            {/* Specifications Grid */}
            <div className={styles.specificationsGrid}>
              {/* First Row - Solar Panels and Battery */}
              <div className={styles.specRow}>
                {/* Solar Panels Section */}
                <div className={styles.specSection}>
                  <h2 className={styles.sectionTitle}>
                    <Sun className="w-6 h-6 text-green-500" />
                    <span>Solar Panels</span>
                  </h2>
                  <dl className={styles.specificationsList}>
                    {Object.entries(system.details.panels).map(([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <dt className={styles.specLabel}>{key}</dt>
                        <dd className={styles.specValue}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Battery System Section */}
                <div className={styles.specSection}>
                  <h2 className={styles.sectionTitle}>
                    <Battery className="w-6 h-6 text-green-500" />
                    <span>Battery System</span>
                  </h2>
                  <dl className={styles.specificationsList}>
                    {Object.entries(system.details.battery).map(([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <dt className={styles.specLabel}>{key}</dt>
                        <dd className={styles.specValue}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Second Row - Inverter and Additional Components */}
              <div className={styles.specRow}>
                {/* Inverter Section */}
                <div className={styles.specSection}>
                  <h2 className={styles.sectionTitle}>
                    <Zap className="w-6 h-6 text-green-500" />
                    <span>Inverter</span>
                  </h2>
                  <dl className={styles.specificationsList}>
                    {Object.entries(system.details.inverter)
                      .filter(([key]) => key !== 'features')
                      .map(([key, value]) => (
                        <div key={key} className={styles.specItem}>
                          <dt className={styles.specLabel}>{key}</dt>
                          <dd className={styles.specValue}>{value}</dd>
                        </div>
                      ))}
                  </dl>
                </div>

                {/* Additional Components Section */}
                <div className={styles.specSection}>
                  <h2 className={styles.sectionTitle}>
                    <Box className="w-6 h-6 text-green-500" />
                    <span>Additional Components</span>
                  </h2>
                  <div className={styles.componentsGrid}>
                    {/* Mounting System */}
                    <div className={styles.componentGroup}>
                      <h3 className={styles.componentTitle}>
                        <Ruler className="w-4 h-4" />
                        Mounting System
                      </h3>
                      <p className={styles.componentDetail}>{system.details.additionalComponents.mounting.type}</p>
                      <ul className={styles.featuresList}>
                        {system.details.additionalComponents.mounting.features.map((feature, index) => (
                          <li key={index} className={styles.featureItem}>
                            <svg className={styles.featureIcon} viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Electrical Components */}
                    <div className={styles.componentGroup}>
                      <h3 className={styles.componentTitle}>
                        <Cable className="w-4 h-4" />
                        Electrical Components
                      </h3>
                      <ul className={styles.componentsList}>
                        <li>Circuit Breakers: {system.details.additionalComponents.electrical.circuitBreakers.join(', ')}</li>
                        <li>Power Meter: {system.details.additionalComponents.electrical.powerMeter}</li>
                        <li>Junction Box: {system.details.additionalComponents.electrical.junctionBox}</li>
                        <li>Cables: {system.details.additionalComponents.electrical.cables.join(', ')}</li>
                        <li>Connectors: {system.details.additionalComponents.electrical.connectors.join(', ')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      {recommendations.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
              <p className="text-lg text-gray-600">Other home solar systems that might interest you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {recommendations.map((recommendedSystem) => (
                <div 
                  key={recommendedSystem.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
                  onClick={() => navigate(`/products/home-systems/${recommendedSystem.id}`)}
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <ResponsiveImage 
                      src={recommendedSystem.image} 
                      alt={recommendedSystem.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {recommendedSystem.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">{recommendedSystem.power}</p>
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-2 bg-green-100 text-green-800">
                        Solar Home System
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">4.9</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">{recommendedSystem.price}</div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recommendedSystem.description}</p>
                    
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Sun size={14} className="text-orange-500" />
                          <span>{recommendedSystem.details.panels.totalPower}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Battery size={14} className="text-green-500" />
                          <span>{recommendedSystem.details.battery.totalCapacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      View System Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default HomeSystemDetails;
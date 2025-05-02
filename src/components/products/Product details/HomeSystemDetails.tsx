import React from 'react';
import Layout from "@/components/layout/Layout";
import styles from '@/styles/HomeSystemDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { homeSystems } from '@/data/homeSystemsData';
import { Sun, Battery, Zap, Box, Cable, Ruler } from "lucide-react";

const HomeSystemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const system = homeSystems.find(sys => sys.id === id);
  const [selectedImage, setSelectedImage] = React.useState(0);

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
    navigate('/contact#get-in-touch', {
      state: { 
        productInfo: {
          name: system?.name,
          id: id,
          type: 'Solar Home System'
        }
      }
    });
  };

  const allImages = [system.image]; // Add more images when available

  return (
    <Layout>
      <section className={styles.detailsContainer}>
        <div className={styles.productWrapper}>
          {/* Gallery Section */}
          <div className={styles.imageGallery}>
            <img 
              src={allImages[selectedImage]} 
              alt={system.name}
              className={styles.mainImage} 
            />
            <div className={styles.thumbnailGrid}>
              {allImages.map((image, index) => (
                <img 
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
              <h3 className={styles.ctaTitle}>Interested in this system?</h3>
              <p className={styles.ctaDescription}>
                Contact our sales team for pricing and availability in your region.
              </p>
              <button 
                onClick={handleContactClick}
                className={styles.ctaButton}
              >
                Request Information
              </button>
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
    </Layout>
  );
};

export default HomeSystemDetails;
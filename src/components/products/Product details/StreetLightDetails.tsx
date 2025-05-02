import React from 'react';
import Layout from "@/components/layout/Layout";
import styles from '@/styles/StreetLightDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { streetLights } from '@/data/streetLightsData';
import { Sun, Battery, Moon, Timer } from "lucide-react";

const StreetLightDetails = () => {
  const { id } = useParams();
  const streetLight = streetLights.find(light => light.id === id);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(0);

  const handleContactClick = () => {
    navigate('/contact#get-in-touch', {
      state: { 
        productInfo: {
          name: streetLight?.name,
          id: id,
          type: 'Solar Street Light'
        }
      }
    });
  };

  if (!streetLight) {
    return <div>Street light not found</div>;
  }

  // You'll need to add more images to your streetLights data
  const allImages = [streetLight.image]; // Add additional images when available

  return (
    <Layout>
      <section className={styles.detailsContainer}>
        <div className={styles.productWrapper}>
          {/* Gallery Section */}
          <div className={styles.imageGallery}>
            <img 
              src={allImages[selectedImage]} 
              alt={streetLight.name}
              className={styles.mainImage} 
            />
            <div className={styles.thumbnailGrid}>
              {allImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${streetLight.name} view ${index + 1}`}
                  className={`${styles.thumbnailImage} ${selectedImage === index ? styles.active : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Call to Action Section */}
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>Interested in this model?</h3>
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
            <h1 className={styles.productTitle}>{streetLight.name}</h1>
            <p className={styles.productDescription}>{streetLight.description}</p>

            {/* Specifications Grid */}
            <div className={styles.specificationsGrid}>
              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Sun className="w-6 h-6 text-green-500" />
                  <span>Solar Panel</span>
                </h2>
                <dl className={styles.specificationsList}>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Power</dt>
                    <dd className={styles.specValue}>{streetLight.details.panel.power}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Type</dt>
                    <dd className={styles.specValue}>{streetLight.details.panel.type}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Efficiency</dt>
                    <dd className={styles.specValue}>{streetLight.details.panel.efficiency}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Battery className="w-6 h-6 text-green-500" />
                  <span>Battery</span>
                </h2>
                <dl className={styles.specificationsList}>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Type</dt>
                    <dd className={styles.specValue}>{streetLight.details.battery.type}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Capacity</dt>
                    <dd className={styles.specValue}>{streetLight.details.battery.capacity}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Lifespan</dt>
                    <dd className={styles.specValue}>{streetLight.details.battery.lifespan}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Moon className="w-6 h-6 text-green-500" />
                  <span>Light Features</span>
                </h2>
                <dl className={styles.specificationsList}>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Type</dt>
                    <dd className={styles.specValue}>{streetLight.details.light.type}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Power</dt>
                    <dd className={styles.specValue}>{streetLight.details.light.power}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Lumens</dt>
                    <dd className={styles.specValue}>{streetLight.details.light.lumens}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Color Temperature</dt>
                    <dd className={styles.specValue}>{streetLight.details.light.colorTemp}</dd>
                  </div>
                  <div className={styles.specItem}>
                    <dt className={styles.specLabel}>Coverage</dt>
                    <dd className={styles.specValue}>{streetLight.details.light.coverage}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.specSection}>
                <h2 className={styles.sectionTitle}>
                  <Timer className="w-6 h-6 text-green-500" />
                  <span>Controller Features</span>
                </h2>
                <ul className={styles.featuresList}>
                  {streetLight.details.controller.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg
                        className={styles.featureIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StreetLightDetails;
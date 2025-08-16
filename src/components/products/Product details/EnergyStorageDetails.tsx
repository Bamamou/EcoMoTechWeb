import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { useParams, useNavigate } from 'react-router-dom';
import { batteryProducts } from '@/data/energyStorageData';
import { Battery, Settings, Zap, Shield, Box, CheckCircle } from "lucide-react";
import styles from '@/styles/EnergyStorageDetails.module.css';
import { ResponsiveImage } from '@/components/ui/responsive-image';

const EnergyStorageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const system = batteryProducts.find(sys => sys.id === id);

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
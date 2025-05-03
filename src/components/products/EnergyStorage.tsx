import React from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { batteryProducts } from '@/data/energyStorageData';
import { Battery, Zap, Settings, Shield } from "lucide-react";
import styles from '@/styles/EnergyStorage.module.css';

const EnergyStorage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (systemId: string) => {
    navigate(`/products/energy-storage/${systemId}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 bg-ecomotech-dark-blue">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="container relative mx-auto px-4">
          {/* Centered Text Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className={`text-white space-y-4 ${styles.fadeInDelay}`}>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight animate-fadeIn">
                Advanced Energy Storage Solutions
              </h1>
              <p className="text-lg opacity-90 leading-relaxed animate-fadeIn animation-delay-200">
                Experience reliable power backup with our state-of-the-art battery systems. 
                From residential to commercial applications, our energy storage solutions 
                ensure continuous power supply and energy independence.
              </p>
              {/* Feature List - Centered Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6 max-w-2xl mx-auto animate-fadeIn animation-delay-400">
                <div className="flex items-center gap-2 justify-center">
                  <Battery className="w-5 h-5 text-ecomotech-green" />
                  <span>High Capacity</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Zap className="w-5 h-5 text-ecomotech-green" />
                  <span>Fast Charging</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Settings className="w-5 h-5 text-ecomotech-green" />
                  <span>Smart Management</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Shield className="w-5 h-5 text-ecomotech-green" />
                  <span>Advanced Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {batteryProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.capacity}>{product.capacity} System</p>
                  <p className={styles.description}>{product.description}</p>
                  <p className={styles.price}>{product.price}</p>
                  
                  <button 
                    onClick={() => handleViewDetails(product.id)}
                    className={styles.viewDetailsButton}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnergyStorage;
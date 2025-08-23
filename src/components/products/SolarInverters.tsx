import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styles from '@/styles/SolarInverters.module.css';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { solarInverters } from '@/data/solarInvertersData';

const SolarInverters = () => {
  const navigate = useNavigate();

  const handleViewDetails = (inverterId: string) => {
    navigate(`/products/solar-inverters/${inverterId}`);
  };

  const handleQuickQuote = (inverterId: string) => {
    navigate('/contact', { state: { productId: inverterId, productType: 'Solar Inverter' } });
  };

  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Solar Inverters</h1>
            <p className={styles.heroDescription} style={{animationDelay: "0.2s"}}>
              Advanced inverter technology to convert DC electricity to usable AC power, designed for maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={styles.invertersGrid}>
            {solarInverters.map((inverter, index) => (
              <div key={inverter.id} className={styles.inverterCard}>
                <div className={styles.imageContainer}>
                  <ResponsiveImage 
                    src={inverter.image} 
                    alt={inverter.name}
                    className={styles.inverterImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.headerContainer}>
                    <div>
                      <h3 className={styles.inverterName}>{inverter.name}</h3>
                      <p className={styles.powerRating}>{inverter.power}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-2 ${
                        inverter.category === 'residential' ? 'bg-green-100 text-green-800' :
                        inverter.category === 'commercial' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {inverter.category.charAt(0).toUpperCase() + inverter.category.slice(1)}
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{inverter.description}</p>
                  
                  {/* Key Features Preview */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {inverter.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {inverter.features.length > 3 && (
                        <p className="text-xs text-blue-600 font-medium ml-6">+{inverter.features.length - 3} more features</p>
                      )}
                    </div>
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-blue-600 mb-4">{inverter.price}</div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewDetails(inverter.id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => handleQuickQuote(inverter.id)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Products CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Solar Inverter Collection</h3>
              <p className="text-gray-600 mb-6">Showing first 4 premium solar inverters. More products coming soon with detailed specifications and advanced features.</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 98.8% efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced MPPT technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart monitoring included</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extended warranty options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarInverters;

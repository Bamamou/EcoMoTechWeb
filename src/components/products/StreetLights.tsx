import React from "react";
import Layout from "@/components/layout/Layout";
import styles from '@/styles/StreetLights.module.css';
import { useNavigate } from "react-router-dom";
import { streetLights } from '@/data/streetLightsData';
import { Sun, Battery, Zap, Settings } from "lucide-react";
import { ResponsiveImage } from '@/components/ui/responsive-image';

const StreetLights = () => {
  const navigate = useNavigate();

  const handleViewDetails = (lightId: string) => {
    navigate(`/products/street-lights/${lightId}`);
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Street Lights</h1>
            <p className="text-xl opacity-90">
              Advanced solar-powered lighting solutions for urban and rural applications, featuring smart controls and high efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={styles.lightsGrid}>
            {streetLights.map((light) => (
              <div key={light.id} className={styles.lightCard}>
                <div className={styles.imageContainer}>
                  <ResponsiveImage 
                    src={light.image}
                    alt={light.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h3 className={styles.productTitle}>{light.name}</h3>
                  <p className={styles.powerRating}>{light.power}</p>
                  <p className={styles.description}>{light.description}</p>
                  <p className="text-ecomotech-blue font-semibold mb-4">{light.price}</p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-ecomotech-green" />
                      <span className="text-sm">{light.details.panel.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-ecomotech-green" />
                      <span className="text-sm">{light.details.battery.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-ecomotech-green" />
                      <span className="text-sm">{light.details.light.lumens}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-ecomotech-green" />
                      <span className="text-sm">{light.details.controller.type}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleViewDetails(light.id)}
                    className={styles.viewDetailsButton}
                  >
                    <span>View Details</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
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

export default StreetLights;
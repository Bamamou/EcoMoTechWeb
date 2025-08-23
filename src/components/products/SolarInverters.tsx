import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styles from '@/styles/SolarInverters.module.css';
import { ResponsiveImage } from '@/components/ui/responsive-image';

const SolarInverters = () => {
  const navigate = useNavigate();

  const handleViewDetails = (inverterId: string) => {
    navigate(`/products/solar-inverters/${inverterId}`);
  };

  const handleQuickQuote = (inverterId: string) => {
    navigate('/contact', { state: { productId: inverterId, productType: 'Solar Inverter' } });
  };

  const inverters = [
    {
      id: "growatt-min-5000tl-x",
      name: "Growatt MIN 5000TL-X",
      power: "5kW",
      image: "images/Inverters/Growatt MIN 5000TL-X.webp",
      price: "From $1,200",
      category: "residential",
      features: [
        "Maximum efficiency of 98.4%",
        "Dual MPP trackers",
        "Smart monitoring via app",
        "Integrated DC switch",
        "Wide voltage range",
        "Compact design"
      ],
      description: "Perfect for residential installations, the 5kW inverter offers excellent efficiency and smart features for optimal solar power conversion."
    },
    {
      id: "growatt-max-10ktl3-x",
      name: "Growatt MAX 10KTL3-X",
      power: "10kW",
      image: "images/Inverters/Growatt MAX 10KTL3-X.jpg",
      price: "From $2,200",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.6%",
        "Multiple MPP trackers",
        "Advanced grid support",
        "IP65 protection rating",
        "Touch-key design",
        "Extended warranty"
      ],
      description: "Ideal for commercial applications, this 10kW inverter combines high performance with advanced monitoring capabilities."
    },
    {
      id: "growatt-max-15ktl3-x",
      name: "Growatt MAX 15KTL3-X",
      power: "15kW",
      image: "images/Inverters/Growatt MAX 15KTL3-X in.avif",
      price: "From $3,200",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.8%",
        "Triple MPP trackers",
        "Enhanced safety features",
        "Remote monitoring",
        "Anti-PID technology",
        "Low voltage ride through"
      ],
      description: "Our premium 15kW inverter delivers exceptional performance for large commercial installations with advanced grid support features."
    },
    {
      id: "sungrow-sg8-0rt",
      name: "Sungrow SG8.0RT",
      power: "8kW",
      image: "images/Inverters/Sungrow SG8.0RT.png",
      price: "From $1,800",
      category: "residential",
      features: [
        "Maximum efficiency of 98.3%",
        "Three MPPT channels",
        "Built-in WiFi monitoring",
        "Touch-free commissioning",
        "AI-powered yield optimization",
        "12-year warranty"
      ],
      description: "Sungrow's versatile 8kW inverter designed for medium-sized residential and small commercial installations."
    },
    {
      id: "sungrow-sg10rt",
      name: "Sungrow SG10RT",
      power: "10kW",
      image: "images/Inverters/Sungrow SG10RT.webp",
      price: "From $2,100",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.5%",
        "Four MPPT tracking",
        "Online firmware updates",
        "Smart I-V curve diagnosis",
        "IP66 protection rating",
        "Built-in PID recovery"
      ],
      description: "Advanced 10kW commercial inverter with cutting-edge monitoring and diagnostic capabilities."
    },
    {
      id: "sungrow-sg12rt",
      name: "Sungrow SG12RT",
      power: "12kW",
      image: "images/Inverters/Sungrow SG12RT.webp",
      price: "From $2,500",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.7%",
        "Five MPPT channels",
        "Smart string monitoring",
        "Integrated AFCI protection",
        "DC Type II SPD protection",
        "Low voltage ride through"
      ],
      description: "High-performance 12kW inverter perfect for large residential and commercial solar installations."
    },
    {
      id: "goodwe-gw3000-ns",
      name: "Goodwe GW3000-NS",
      power: "3kW",
      image: "images/Inverters/Goodwe GW3000-NS.jpg",
      price: "From $900",
      category: "residential",
      features: [
        "Maximum efficiency of 97.8%",
        "Single MPPT tracker",
        "Built-in WiFi/GPRS",
        "Compact and lightweight",
        "Modern OLED display",
        "10-year warranty"
      ],
      description: "Compact and reliable 3kW inverter perfect for small residential solar installations with excellent monitoring capabilities."
    },
    {
      id: "goodwe-gw6000-dt",
      name: "Goodwe GW6000-DT",
      power: "6kW",
      image: "images/Inverters/Goodwe GW6000-DT.jpg",
      price: "From $1,400",
      category: "residential",
      features: [
        "Maximum efficiency of 98.2%",
        "Dual MPPT trackers",
        "Smart monitoring system",
        "Arc fault protection",
        "IP65 protection class",
        "Integrated export control"
      ],
      description: "Versatile 6kW dual-MPPT inverter designed for medium-sized residential solar systems with advanced safety features."
    },
    {
      id: "goodwe-gw10k-dt",
      name: "Goodwe GW10K-DT",
      power: "10kW",
      image: "images/Inverters/Goodwe GW10K-DT.webp",
      price: "From $2,000",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.4%",
        "Dual MPPT design",
        "Remote firmware updates",
        "DC switch integrated",
        "Type II SPD protection",
        "Wide voltage range"
      ],
      description: "High-performance 10kW inverter suitable for larger residential and small commercial installations with comprehensive protection features."
    },
    {
      id: "ecoverter5",
      name: "Ecoverter5",
      power: "5kW",
      image: "images/Inverters/Ecoverter5.webp",
      price: "From $1,300",
      category: "residential",
      features: [
        "Maximum efficiency of 98.5%",
        "Dual MPPT channels",
        "Smart home integration",
        "AI-powered monitoring",
        "Dual AC/DC protection",
        "15-year warranty"
      ],
      description: "Our flagship 5kW inverter featuring smart home integration and industry-leading efficiency for residential installations."
    },
    {
      id: "ecoverter8",
      name: "Ecoverter8",
      power: "8kW",
      image: "images/Inverters/Ecoverter8.webp",
      price: "From $1,900",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.7%",
        "Triple MPPT system",
        "Cloud monitoring platform",
        "Zero export control",
        "Advanced grid support",
        "IP66 protection"
      ],
      description: "Advanced 8kW inverter with cloud-based monitoring and superior grid integration capabilities for larger homes."
    },
    {
      id: "ecoverter10",
      name: "Ecoverter10",
      power: "10kW",
      image: "images/Inverters/Ecoverter10.avif",
      price: "From $2,300",
      category: "commercial",
      features: [
        "Maximum efficiency of 98.9%",
        "Quad MPPT technology",
        "Remote diagnostics",
        "Battery ready design",
        "Surge protection",
        "Smart grid ready"
      ],
      description: "Premium 10kW inverter with future-ready features including battery storage compatibility and smart grid integration."
    }
  ];

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
            {inverters.map((inverter, index) => (
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

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import styles from '@/styles/SolarInverters.module.css';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SolarInverters = () => {
  const inverters = [
    {
      name: "Growatt MIN 5000TL-X",
      power: "5kW",
      image: "images/Inverters/Growatt MAX 10KTL3-X.jpg",
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
      name: "Growatt MAX 10KTL3-X",
      power: "10kW",
      image: "images/Inverters/Growatt MIN 5000TL-X.webp",
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
      name: "Growatt MAX 15KTL3-X",
      power: "15kW",
      image: "images/Inverters/Growatt MAX 15KTL3-X in.avif",
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
      name: "Sungrow SG8.0RT",
      power: "8kW",
      image: "images/Inverters/Sungrow SG8.0RT.png",
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
      name: "Sungrow SG10RT",
      power: "10kW",
      image: "images/Inverters/Sungrow SG10RT.webp",
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
      name: "Sungrow SG12RT",
      power: "12kW",
      image: "images/Inverters/Sungrow SG12RT.webp",
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
      name: "Goodwe GW3000-NS",
      power: "3kW",
      image: "images/Inverters/Goodwe GW3000-NS.jpg",
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
      name: "Goodwe GW6000-DT",
      power: "6kW",
      image: "images/Inverters/Goodwe GW6000-DT.jpg",
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
      name: "Goodwe GW10K-DT",
      power: "10kW",
      image: "images/Inverters/Goodwe GW10K-DT.webp",
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
      name: "Ecoverter5",
      power: "5kW",
      image: "images/Inverters/Ecoverter5.webp",
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
      name: "Ecoverter8",
      power: "8kW",
      image: "images/Inverters/Ecoverter8.webp",
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
      name: "Ecoverter10",
      power: "10kW",
      image: "images/Inverters/Ecoverter10.avif",
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
              <div key={index} className={styles.inverterCard}>
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
                    </div>
                  </div>
                  <p className={styles.description}>{inverter.description}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className={styles.specButton}>
                        <span>View Specifications</span>
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
                      </Button>
                    </DialogTrigger>
                    <DialogContent className={styles.specDialog}>
                      <DialogHeader>
                        <DialogTitle className={styles.specTitle}>
                          {inverter.name} Specifications
                        </DialogTitle>
                      </DialogHeader>
                      <div className={styles.specGrid}>
                        <div className={styles.specSection}>
                          <h4 className={styles.specSectionTitle}>Key Features</h4>
                          <div className={styles.specList}>
                            {inverter.features.map((feature, idx) => (
                              <div key={idx} className={styles.specItem}>
                                <Check className="w-5 h-5 text-green-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={styles.specSection}>
                          <h4 className={styles.specSectionTitle}>Details</h4>
                          <div className={styles.specList}>
                            <div className={styles.specItem}>
                              <span className="font-medium">Power Rating:</span>
                              <span>{inverter.power}</span>
                            </div>
                            {/* Add more specifications here */}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarInverters;

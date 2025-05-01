import React from "react";
import Layout from "@/components/layout/Layout";
import styles from '@/styles/ElectricMotorcyles.module.css';
import { ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: {
    main: string;
    details: string[];
  };
  features: string[];
  specifications: Record<string, string>;
  image: string;
  additionalImages?: string[];
}

// Electric Motorcycle Products
export const electricMotorcycleProducts: Product[] = [
  {
    id: "motorcycle-1",
    name: "EcoMoTech V9",
    description: {
      main: "EcoMoTech V9 merges power and innovation in a lightweight design, ideal for urban and off-road adventures.",
      details: [
        "Experience the perfect blend of power and efficiency with our 72V lithium-ion battery (50Ah) and 3kW brushless motor. Enjoy extended rides with a 70-85 mile (130km) range and enhanced safety through dual hydraulic disc brakes with regenerative braking. Stay connected with a 7-inch GPS touchscreen, customizable ride modes, and over-the-air software updates. Ride with confidence thanks to ABS and traction control systems. Support sustainability with zero emissions and a fully recyclable battery design."
      ]
    },
    features: [
      "dual hydraulic disc brakes with ABS", 
      "Fast charging capability",
      "TCS, and regenerative braking",
      " Keyless NFC/fingerprint ignition",
      "Smart connectivity with 7inch touchscreen and GPS",
      " IP67 weatherproofing for all components",
      "Customizable ride modes for different terrains",
      "anti-theft tracking and OTA updates",
    ],
    specifications: {
      "Motor Power": "3000W",
      "Max Speed": "100 km/h",
      "Range": "110 km",
      "Charging Time": "180 minutes",
      "Battery Capacity": "72V 60Ah",
      "Weight": "120 kg",
      "Dimensions": "2100 x 800 x 1200 mm",
      "controller": "72V 800A",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/V9 Bleu.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/V9 Black.png",
      "/EcoMoTechWeb/images/Electric motorcycles/V9 yellow Black.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/V9 white.png"
    ]
  },
  {
    id: "EcoMoTech V8",
    name: "EcoMoTech V8",
    description: {
      main: "EcoMoTech_V8 is a lightweight, tech-driven marvel for urban and off-road adventures, powered by a 72V lithium-ion battery (55Ah) and 3kW brushless motor, offering a 45-50-mile (80km) range.",
      details: [
        "Designed for the thrill-seeking rider who demands both performance and sustainability.",
        "Advanced aerodynamic design reduces drag and maximizes range efficiency.",
        "Premium suspension system ensures optimal handling in all conditions.",
        "State-of-the-art battery management system for enhanced longevity and performance."
      ]
    },
    features: [
      "Advanced regenerative braking system",
      " Mobile app and Smart connectivity features ",
      "Premium suspension system",
      "Advanced aerodynamic design",
      "State-of-the-art battery management system",
      "Three riding modes",
      "Fast charging capability",
      "LED lighting system for enhanced visibility",
      "Ergonomic seat design for comfort",
    ],
    specifications: {
      "Motor Power": "3000W",
      "Max Speed": "80 km/h",
      "Range": "120 km",
      "Charging Time": "120 minutes",
      "Battery Capacity": "72V 55Ah",
      "Weight": "110 kg",
      "Dimensions": "2100 x 800 x 1200 mm",
      "controller": "72V 800A",
      "Brakes": "Front and rear hydraulic disc brakes",

    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/small open black.webp",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/small open red.avif",
      "/EcoMoTechWeb/images/Electric motorcycles/small open blueblack.webp",
      "/EcoMoTechWeb/images/Electric motorcycles/small open.avif",
    ]
  },
  {
    id: "EcoMoTech M1",
    name: "EcoMoTech M1",
    description: {
      main: "Perfect urban commuter with balanced performance and comfort.",
      details: [
        "Comfortable upright riding position for city commutes.",
        "Integrated LED lighting for enhanced visibility and safety.",
        "USB charging port for on-the-go convenience.",
        "Digital display providing real-time ride information."
      ]
    },
    features: [
      "Comfortable upright riding position",
      "Integrated LED lighting",
      "Safety is ensured via ABS and traction control",
      "USB charging port",
      "TFT display",
      "High-performance tires for grip and stability",
      "Advanced braking system with regenerative capabilities",
      "Smart connectivity features",
      "Regenerative braking system",
      "Smart connectivity features",  

    ],
    specifications: {
      "Motor Power": "5000W",
      "Max Speed": "100 km/h",
      "Range": "120 km",
      "Charging Time": "3.5 hours",
      "Battery Capacity": "72V 80Ah",
      "Weight": "150 kg",
      "Dimensions": "2200 x 900 x 1300 mm",
      "controller": "72V 800A",
      "Brakes": "Front and rear hydraulic disc brakes",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/KingChe blue.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe red.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe red front.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/KingChe black.webp",
    ]
  },

  {
    id: "EcoMoTech DMG",
    name: "EcoMoTech DMG",
    description: {
      main: "Perfect urban commuter with balanced performance and comfort.",
      details: [
        "Comfortable upright riding position for city commutes.",
        "Integrated LED lighting for enhanced visibility and safety.",
        "USB charging port for on-the-go convenience.",
        "Digital display providing real-time ride information."
      ]
    },
    features: [
      "Comfortable upright riding position",
      "Integrated LED lighting",
      "Safety is ensured via ABS and traction control",
      "USB charging port",
      "TFT display",
      "High-performance tires for grip and stability",
      "Advanced braking system with regenerative capabilities",
      "Smart connectivity features",
      "Regenerative braking system",
      "Smart connectivity features",  

    ],
    specifications: {
      "Motor Power": "5000W",
      "Max Speed": "110 km/h",
      "Range": "160 km",
      "Charging Time": "3.5 hours",
      "Battery Capacity": "72V 100Ah",
      "Weight": "130 kg",
      "Dimensions": "2200 x 900 x 1300 mm",
      "controller": "72V 800A",
      "Brakes": "Front and rear hydraulic disc brakes",
    },
    image: "/EcoMoTechWeb/images/Electric motorcycles/alrendo dmg.png",
    additionalImages: [
      "/EcoMoTechWeb/images/Electric motorcycles/DMG blue.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/DMG charging.jpg",
      "/EcoMoTechWeb/images/Electric motorcycles/DMG parking.avif",
    ]
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productHeader}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description.main}</p>
        </div>
        <div className={styles.featuresList}>
          {product.features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
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
            </div>
          ))}
        </div>
        <button 
          onClick={() => navigate(`/products/electric-motorcycles/${product.id}`)}
          className={styles.viewDetailsButton}
        >
          <span className={styles.viewDetailsText}>View Specifications</span>
          <ExternalLink className={styles.viewDetailsIcon} />
        </button>
      </div>
    </div>
  );
};

const ElectricMobility = () => {
  return (
    <Layout>
      <section className={`py-16 ${styles.fadeInAnimation}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={styles.categoryTitle}>Electric Mobility Solutions</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className={styles.categoryDescription}>
              Experience the future of transportation with our high-performance electric motorcycles designed for Sustainable urban mobility and exceptional riding experience.
            </p>
          </div>

          <div className={styles.productGrid}>
            {electricMotorcycleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricMobility;
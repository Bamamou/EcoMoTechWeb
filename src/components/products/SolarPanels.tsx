import React from "react";
import Layout from "@/components/layout/Layout";
import styles from '@/styles/SolarPanels.module.css';
import { ExternalLink } from "lucide-react";
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { useNavigate } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
}

// Solar Panel Products
export const solarPanelProducts: Product[] = [
  {
    id: "mono-450w",
    name: "MonoPerc 450W Solar Panel",
    description: "High-efficiency monocrystalline solar panel with advanced PERC technology for maximum energy harvest.",
    features: [
      "High conversion efficiency up to 20.9%",
      "Excellent low-light performance",
      "Enhanced durability with 3.2mm tempered glass",
      "25-year performance warranty"
    ],
    specifications: {
      "Power Output": "450W",
      "Cell Type": "Monocrystalline PERC",
      "Dimensions": "2094 x 1038 x 35mm",
      "Weight": "23.5kg",
      "Operating Temperature": "-40°C to +85°C"
    },
    image: "images/Solar panels/450W mono.png"
  },
  {
    id: "poly-420w",
    name: "PolyCrystal 420W Panel",
    description: "Cost-effective polycrystalline solar panel ideal for large-scale installations.",
    features: [
      "Excellent cost-performance ratio",
      "Robust design for all weather conditions",
      "Anti-reflective coating",
      "20-year warranty"
    ],
    specifications: {
      "Power Output": "420W",
      "Cell Type": "Polycrystalline",
      "Dimensions": "1956 x 992 x 40mm",
      "Weight": "22kg",
      "Operating Temperature": "-40°C to +85°C"
    },
    image: "images/Solar panels/420W.png"
  },
  {
    id: "thin-film-550w",
    name: "MonoCrystal 550W Solar Panel",
    description: "Lightweight and MonCrystalline solar panel perfect for curved surfaces and portable applications.",
    features: [
      "Ultra-thin and lightweight design",
      "Flexible form factor for unique installations",
      "Excellent performance in low-light conditions",
      "Ideal for RVs, boats, and portable solar setups",
      "15-year performance warranty"
    ],
    specifications: {
      "Power Output": "550W",
      "Cell Type": "MonCrystalline",
      "Dimensions": "1650 x 800 x 3mm",
      "Weight": "4.5kg",
      "Flexibility": "Up to 30-degree bend",
      "Operating Temperature": "-40°C to +85°C"
    },
    image: "images/Solar panels/550W.png"
  },
  {
    id: "bifacial-500w",
    name: "BiFace 500W Solar Panel",
    description: "Double-sided bifacial solar panel that captures both direct and reflected sunlight for maximum energy generation.",
    features: [
      "Bifacial technology with up to 30% additional power from rear side",
      "Anti-reflective glass coating",
      "Enhanced performance in snow and high-albedo environments",
      "30-year performance warranty",
      "Resistant to PID and hot spots"
    ],
    specifications: {
      "Power Output": "500W",
      "Cell Type": "Bifacial Monocrystalline",
      "Dimensions": "2279 x 1134 x 35mm",
      "Weight": "26.5kg",
      "Operating Temperature": "-40°C to +85°C",
      "Bifaciality Factor": "70%"
    },
    image: "images/Solar panels/500W bifacial.webp"
  },
  {
    id: "half-cut-400w",
    name: "HalfCut Pro 400W Solar Panel",
    description: "Advanced half-cut cell technology panel offering improved shade tolerance and higher system performance.",
    features: [
      "Half-cut cell design for better shading response",
      "Lower operating temperature",
      "Reduced hot spot effect",
      "Superior performance in partial shade conditions",
      "25-year performance warranty"
    ],
    specifications: {
      "Power Output": "400W",
      "Cell Type": "Half-cut Monocrystalline",
      "Dimensions": "1979 x 1002 x 40mm",
      "Weight": "22kg",
      "Operating Temperature": "-40°C to +85°C",
      "Module Efficiency": "20.4%"
    },
    image: "images/Solar panels/HalfCut Pro 400W Solar Panel.jpg"
  },
  {
    id: "smart-365w",
    name: "SmartPanel 365W",
    description: "Smart solar panel with integrated power optimization and monitoring capabilities.",
    features: [
      "Built-in power optimizer",
      "Real-time performance monitoring",
      "Module-level MPPT",
      "Enhanced safety with rapid shutdown capability",
      "20-year smart technology warranty"
    ],
    specifications: {
      "Power Output": "365W",
      "Cell Type": "Smart Monocrystalline",
      "Dimensions": "1765 x 1048 x 40mm",
      "Weight": "21kg",
      "Operating Temperature": "-40°C to +85°C",
      "Communication": "Built-in wireless monitoring"
    },
    image: "images/Solar panels/350W.jpg"
  },
  {
    id: "ultra-high-power-600w",
    name: "UltraPower 600W Solar Panel",
    description: "Ultra-high power density panel designed for utility-scale solar installations and large commercial projects.",
    features: [
      "Industry-leading 600W power output",
      "Multi-busbar technology for higher current collection",
      "Advanced light trapping technology",
      "Specially designed for utility-scale projects",
      "30-year performance warranty"
    ],
    specifications: {
      "Power Output": "600W",
      "Cell Type": "N-type Monocrystalline",
      "Dimensions": "2384 x 1303 x 35mm",
      "Weight": "32.6kg",
      "Operating Temperature": "-40°C to +85°C",
      "Module Efficiency": "21.7%"
    },
    image: "images/Solar panels/600W.png"
  },
  {
    id: "residential-premium-375w",
    name: "HomePro 375W Premium Panel",
    description: "Premium all-black solar panel designed specifically for residential installations with emphasis on aesthetics.",
    features: [
      "All-black elegant design",
      "Advanced temperature coefficient",
      "Salt mist and ammonia resistance",
      "Enhanced low-light performance",
      "25-year product warranty"
    ],
    specifications: {
      "Power Output": "375W",
      "Cell Type": "Monocrystalline Black",
      "Dimensions": "1755 x 1038 x 35mm",
      "Weight": "20.5kg",
      "Operating Temperature": "-40°C to +85°C",
      "Module Efficiency": "21.2%"
    },
    image: "images/Solar panels/375W.jpg"
  },
  {
    id: "lightweight-320w",
    name: "LiteMount 320W Panel",
    description: "Ultra-lightweight solar panel designed for weight-sensitive applications like RV, marine, and commercial rooftops.",
    features: [
      "40% lighter than conventional panels",
      "Easy installation with innovative mounting",
      "High wind load resistance",
      "Marine-grade materials",
      "20-year warranty"
    ],
    specifications: {
      "Power Output": "320W",
      "Cell Type": "Monocrystalline PERC",
      "Dimensions": "1690 x 998 x 30mm",
      "Weight": "12.8kg",
      "Operating Temperature": "-40°C to +85°C",
      "Wind Load Capacity": "2400 Pa"
    },
    image: "images/Solar panels/320W.webp"
  },
  {
    id: "bifacial-glass-480w",
    name: "DualMax 480W Glass-Glass Panel",
    description: "Premium bifacial glass-glass solar panel offering enhanced durability and dual-side power generation.",
    features: [
      "Dual-glass construction",
      "30-year enhanced reliability",
      "Up to 25% additional rear side power",
      "PID resistance",
      "Suitable for harsh environments"
    ],
    specifications: {
      "Power Output": "480W",
      "Cell Type": "Bifacial N-type",
      "Dimensions": "2095 x 1039 x 35mm",
      "Weight": "28.5kg",
      "Operating Temperature": "-40°C to +85°C",
      "Bifaciality Factor": "75%"
    },
    image: "images/Solar panels/480W.jpg"
  },
  {
    id: "agri-solar-395w",
    name: "AgriSolar 395W Panel",
    description: "Specialized solar panel designed for agrivoltaic applications, allowing dual use of land for farming and energy generation.",
    features: [
      "Light-transmission optimized design",
      "Enhanced spacing for crop growth",
      "Anti-soiling coating",
      "Hail resistance",
      "25-year performance warranty"
    ],
    specifications: {
      "Power Output": "395W",
      "Cell Type": "Semi-transparent Monocrystalline",
      "Dimensions": "2015 x 1002 x 40mm",
      "Weight": "24.2kg",
      "Operating Temperature": "-40°C to +85°C",
      "Light Transmission": "30%"
    },
    image: "images/Solar panels/395W.jpg"
  },
  {
    id: "Eco-solar-580w",
    name: "Eco-solar-580w",
    description: "A durable solution designed to harness solar energy for powering electric vehicles (EVs) on the go.",
    features: [ 
      "high efficiency monocrystalline cells",
      "Easy installation and maintenance",
      "High power output for fast charging",
      "Resistant to extreme weather conditions",
      "Anti-reflective coating",
      "High corrosion resistance",
    ],
    specifications: {
      "Power Output": "580W",
      "Efficiency": "22.3%",
      "Cell Type": "Monocrystalline",
      "Dimensions": "1765 x 1048 x 35mm",
      "Weight": "20.9kg",
      "Warranty": "25 years"
    },
    image: "images/Solar panels/580W.jpg"
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/solar-panels/${product.id}`);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <ResponsiveImage
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productHeader}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
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
          onClick={handleViewDetails}
          className={styles.viewDetailsButton}
        >
          <span className={styles.viewDetailsText}>View Specifications</span>
          <ExternalLink className={styles.viewDetailsIcon} />
        </button>
      </div>
    </div>
  );
};

const SolarPanels = () => {
  return (
    <Layout>
      <section className={`py-16 ${styles.fadeInAnimation}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={styles.categoryTitle}>Solar Energy Solutions</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className={styles.categoryDescription}>
              Discover our comprehensive range of solar power products designed for efficiency, durability, and performance.
            </p>
          </div>

          <div className={styles.productGrid}>
            {solarPanelProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarPanels;

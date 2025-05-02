export interface StreetLight {
  id: string;
  name: string;
  power: string;
  price: string;
  description: string;
  details: {
    panel: {
      power: string;
      type: string;
      efficiency: string;
    };
    battery: {
      type: string;
      capacity: string;
      lifespan: string;
      chargingTime: string;
    };
    light: {
        type: string;
        power: string;
        lumens: string;
        colorTemp: string;
        coverage: string;
      },
    controller: {
      type: string;
      features: string[];
    };
  };
  image: string;
  additionalImages?: string[];
}

export const streetLights: StreetLight[] = [
  {
    id: "EcoLight Urban 40",
    name: "EcoLight Urban 40",
    description: "Smart solar street light perfect for residential areas and walkways",
    power: "40W",
    image: "/EcoMoTechWeb/images/streetlights/60W.jpeg",
    price: "Starting from $99",
    details: {
      panel: {
        power: "60W",
        type: "Monocrystalline",
        efficiency: "21.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "384Wh",
        lifespan: "8-10 years",
        chargingTime: "6-8 hours"
      },
      light: {
        type: "LED",
        power: "40W",
        lumens: "6000lm",
        colorTemp: "4000K",
        coverage: "8-10m radius"
      },

      controller: {
        type: "MPPT",
        features: [
          "Smart dimming",
          "Temperature protection",
          "Overcharge protection",
          "Time control",
          "Motion sensor for adaptive lighting",
          "Remote monitoring capability",
          "3 lighting modes",
          "IP66 waterproof rating",
          "Anti-theft design",
          "5-year warranty"
        ]
      }
    },
    
  },
  {
    id: "EcoLight Highway 100",
    name: "EcoLight Highway 100",
    power: "100W",
    image: "/EcoMoTechWeb/images/streetlights/school.jpg",
    description: "High-performance solar street light for highways and major roads",
    price: "Starting from $110",
    details: {
      panel: {
        power: "150W",
        type: "Monocrystalline PERC",
        efficiency: "22.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "960Wh",
        lifespan: "10-12 years",
        chargingTime: "5-7 hours"
      },
      light: {
        type: "LED",
        power: "100W",
        lumens: "15000lm",
        colorTemp: "5000K",
        coverage: "15-18m radius"
      },
      controller: {
        type: "Advanced MPPT",
        features: [
          "Intelligent power management",
          "Remote diagnostics",
          "Data logging",
          "Weather adaptive control",
          "AI-powered lighting control",
          "GSM/4G connectivity",
          "5 lighting modes",
          "IP67 waterproof rating",
          "Wind resistance up to 180km/h",
          "7-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Smart 60",
    name: "EcoLight Smart 60",
    power: "60W",
    image: "/EcoMoTechWeb/images/streetlights/60W.jpg",
    description: "Smart solar street light with advanced IoT features for urban applications",
    price: "Starting from $69",
    details: {
      panel: {
        power: "90W",
        type: "Monocrystalline IBC",
        efficiency: "23.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "576Wh",
        lifespan: "10 years",
        chargingTime: "5-6 hours"
      },
      light: {
        type: "LED",
        power: "60W",
        lumens: "9000lm",
        colorTemp: "4500K",
        coverage: "12-14m radius"
      },
      controller: {
        type: "Smart MPPT",
        features: [
          "Cloud connectivity",
          "Predictive maintenance",
          "Energy optimization",
          "Automatic scheduling",
          "IoT connectivity",
          "Real-time monitoring",
          "Adaptive brightness control",
          "IP66 waterproof rating",
          "Vandal-resistant design",
          "6-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Pro 80",
    name: "EcoLight Pro 80",
    power: "80W",
    image: "/EcoMoTechWeb/images/streetlights/LED.jpg",
    description: "Professional-grade solar street light with enhanced durability and performance",
    price: "Starting from $199",
    details: {
      panel: {
        power: "120W",
        type: "Monocrystalline PERC",
        efficiency: "23.8%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "768Wh",
        lifespan: "12 years",
        chargingTime: "5-6 hours"
      },
      light: {
        type: "LED",
        power: "80W",
        lumens: "12000lm",
        colorTemp: "4500K",
        coverage: "14-16m radius"
      },

      controller: {
        type: "Advanced MPPT",
        features: [
          "Dual MPPT tracking",
          "Remote configuration",
          "Performance analytics",
          "Adaptive charging",
          "Professional monitoring system",
          "Advanced motion detection",
          "4 programmable modes",
          "IP67 waterproof rating",
          "Anti-corrosion coating",
          "8-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Ultra 120",
    name: "EcoLight Ultra 120",
    power: "120W",
    image: "/EcoMoTechWeb/images/streetlights/test.png",
    description: "Ultra-high performance solar street light for industrial and commercial areas",
    price: "Starting from $299",
    details: {
      panel: {
        power: "180W",
        type: "Bifacial Monocrystalline",
        efficiency: "24.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "1152Wh",
        lifespan: "15 years",
        chargingTime: "4-5 hours"
      },
      light: {
        type: "LED",
        power: "120W",
        lumens: "18000lm",
        colorTemp: "5000K",
        coverage: "18-20m radius"
      },
      controller: {
        type: "Smart MPPT+",
        features: [
          "AI-based power management",
          "Real-time monitoring",
          "Fault prediction",
          "Emergency protocols",
          "Industrial-grade construction",
          "Smart city integration",
          "6 lighting modes",
          "IP68 waterproof rating",
          "Hurricane-resistant design",
          "10-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Smart Plus 50",
    name: "EcoLight Smart Plus 50",
    power: "50W",
    image: "/EcoMoTechWeb/images/streetlights/smart Plus.jpg",
    description: "Energy-efficient smart street light with advanced connectivity features",
    price: "Starting from $59",
    details: {
      panel: {
        power: "75W",
        type: "Monocrystalline N-type",
        efficiency: "22.8%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "480Wh",
        lifespan: "10 years",
        chargingTime: "5-7 hours"
      },
      light: {
        type: "LED",
        power: "50W",
        lumens: "7500lm",
        colorTemp: "4000K",
        coverage: "10-12m radius"
      },
      controller: {
        type: "Smart MPPT",
        features: [
          "WiFi connectivity",
          "Energy monitoring",
          "Load management",
          "OTA updates",
          "Smart city compatible",
          "Mobile app control",
          "Automatic dimming",
          "IP66 waterproof rating",
          "Impact-resistant design",
          "7-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Premium 150",
    name: "EcoLight Premium 150",
    power: "150W",
    image: "/EcoMoTechWeb/images/streetlights/highway.jpg",
    description: "Premium high-output solar street light for large commercial areas and highways",
    price: "Starting from $149",
    details: {
      panel: {
        power: "220W",
        type: "Bifacial Monocrystalline HJT",
        efficiency: "25.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "1440Wh",
        lifespan: "15 years",
        chargingTime: "4-5 hours"
      },
      light: {
        type: "LED",
        power: "150W",
        lumens: "22500lm",
        colorTemp: "5000K",
        coverage: "22-25m radius"
      },

      controller: {
        type: "Smart MPPT Pro",
        features: [
          "AI optimization",
          "Cloud integration",
          "Predictive maintenance",
          "Emergency response system",
          "Dual light modules",
          "5G connectivity",
          "8 lighting modes",
          "IP68 waterproof rating",
          "Advanced thermal management",
          "12-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Solar Max 200",
    name: "EcoLight Solar Max 200",
    power: "200W",
    image: "/EcoMoTechWeb/images/streetlights/Max 200W.jpeg",
    description: "Maximum performance solar street light for major highways and industrial complexes",
    price: "Starting from $200",
    details: {
      panel: {
        power: "300W",
        type: "Tandem Perovskite-Silicon",
        efficiency: "26.5%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "1920Wh",
        lifespan: "18 years",
        chargingTime: "3-4 hours"
      },
      light: {
        type: "LED",
        power: "200W",
        lumens: "30000lm",
        colorTemp: "5500K",
        coverage: "25-30m radius"
      },

      controller: {
        type: "Quantum MPPT",
        features: [
          "Machine learning optimization",
          "Remote diagnostics",
          "Autonomous operation",
          "Grid integration ready",
          "Modular design",
          "Satellite connectivity",
          "10 lighting modes",
          "IP69K waterproof rating",
          "Self-cleaning solar panel",
          "15-year warranty"
        ]
      }
    }
  },
  {
    id: "EcoLight Smart City 100",
    name: "EcoLight Smart City 100",
    power: "100W",
    image: "/EcoMoTechWeb/images/streetlights/last.jpg",
    description: "Smart city-focused solar street light with integrated IoT capabilities",
    price: "Starting from $210",
    details: {
      panel: {
        power: "150W",
        type: "Monocrystalline TOPCON",
        efficiency: "24.8%"
      },
      battery: {
        type: "LiFePO4",
        capacity: "960Wh",
        lifespan: "12 years",
        chargingTime: "4-6 hours"
      },
      light: {
        type: "LED",
        power: "100W",
        lumens: "15000lm",
        colorTemp: "4000K-6000K adjustable",
        coverage: "16-20m radius"
      },
      controller: {
        type: "IoT MPPT",
        features: [
          "Smart city platform integration",
          "Real-time data analytics",
          "Automated reporting",
          "Weather adaptation",
          "Environmental sensors",
          "Traffic monitoring",
          "Air quality detection",
          "IP67 waterproof rating",
          "Digital display",
          "10-year warranty"
        ]
      }
    }
  }
  
];

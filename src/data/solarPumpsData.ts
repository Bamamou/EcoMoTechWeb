export interface SolarPump {
  id: string;
  name: string;
  model: string;
  power: string;
  maxFlow: string;
  maxHead: string;
  description: string;
  price: string;
  category: 'submersible' | 'surface' | 'irrigation';
  image: string;
  images: {
    main: string;
    gallery: string[];
  };
  specifications: {
    pumpType: string;
    solarPanelPower: string;
    maximumFlow: string;
    maximumHead: string;
    inletDiameter: string;
    outletDiameter: string;
    motorType: string;
    efficiency: string;
    operatingVoltage: string;
    operatingCurrent: string;
    dimensions: string;
    weight: string;
    materialBody: string;
    materialImpeller: string;
    maxSolids: string;
    operatingTemp: string;
    warranty: string;
  };
  features: string[];
  applications: string[];
  installation: {
    depth: string;
    requirements: string[];
    included: string[];
  };
  performance: {
    dailyOutput: string;
    sunlightHours: string;
    efficiency: string;
  };
  certifications: string[];
}

export const solarPumps: SolarPump[] = [
  {
    id: "ecosolar-sub-500",
    name: "EcoSolar Submersible 500W",
    model: "ESP-500-SUB",
    power: "500W",
    maxFlow: "2,000 L/h",
    maxHead: "70m",
    description: "High-efficiency solar submersible pump perfect for deep well water extraction and irrigation systems. Features advanced motor technology and corrosion-resistant materials for long-lasting performance.",
    price: "Starting from $850",
    category: "submersible",
    image: "images/Solar pumbs/products/pump.webp",
    images: {
      main:  "images/Solar pumbs/products/dc-solar-pump-for-well.webp",
      gallery: [
        "./images/Solar pumbs/products/lead.webp",
        "./images/Solar pumbs/products/solar-surface-pump2.webp",
        "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format"
      ]
    },
    specifications: {
      pumpType: "Centrifugal Submersible",
      solarPanelPower: "500W Monocrystalline",
      maximumFlow: "2,000 L/h (528 GPH)",
      maximumHead: "70m (230 ft)",
      inletDiameter: "1.25 inches",
      outletDiameter: "1 inch",
      motorType: "Brushless DC Motor",
      efficiency: "85%+",
      operatingVoltage: "48V DC",
      operatingCurrent: "12A",
      dimensions: "φ98 × 580mm",
      weight: "8.5 kg",
      materialBody: "Stainless Steel 304",
      materialImpeller: "Stainless Steel",
      maxSolids: "0.1mm",
      operatingTemp: "0°C to +60°C",
      warranty: "3 Years"
    },
    features: [
      "MPPT solar charge controller included",
      "Dry run protection system",
      "Over-voltage and under-voltage protection",
      "LED status indicators",
      "Remote monitoring capability",
      "Automatic restart function",
      "Weather-resistant design",
      "Easy installation and maintenance"
    ],
    applications: [
      "Agricultural irrigation",
      "Livestock watering",
      "Domestic water supply",
      "Remote area water access",
      "Garden and greenhouse watering",
      "Pool filling and circulation"
    ],
    installation: {
      depth: "Up to 70m depth",
      requirements: [
        "Minimum 4-inch borehole diameter",
        "Stable power supply from solar panels",
        "Proper grounding system",
        "Access for maintenance"
      ],
      included: [
        "Submersible pump unit",
        "MPPT controller",
        "20m submersible cable",
        "Installation accessories",
        "User manual and warranty card"
      ]
    },
    performance: {
      dailyOutput: "12,000-16,000L per day",
      sunlightHours: "6-8 hours optimal",
      efficiency: "Up to 85% system efficiency"
    },
    certifications: ["CE", "ISO 9001", "IP68 Waterproof"]
  },
  {
    id: "ecosolar-surf-750",
    name: "EcoSolar Surface Pump 750W",
    model: "ESP-750-SURF",
    power: "750W",
    maxFlow: "3,500 L/h",
    maxHead: "45m",
    description: "Powerful surface-mounted solar pump ideal for irrigation systems and water transfer applications. Features self-priming capability and intelligent control system for optimal performance.",
    price: "Starting from $650",
    category: "surface",
    image:   "images/Solar pumbs/products/solar-surface-pump2.webp",
    images: {
      main:  "images/Solar pumbs/products/dc-solar-pump-for-well.webp",
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&auto=format"
      ]
    },
    specifications: {
      pumpType: "Centrifugal Surface Pump",
      solarPanelPower: "750W Monocrystalline",
      maximumFlow: "3,500 L/h (925 GPH)",
      maximumHead: "45m (148 ft)",
      inletDiameter: "2 inches",
      outletDiameter: "1.5 inches",
      motorType: "Brushless DC Motor",
      efficiency: "82%+",
      operatingVoltage: "48V DC",
      operatingCurrent: "18A",
      dimensions: "380 × 280 × 350mm",
      weight: "12 kg",
      materialBody: "Cast Iron with coating",
      materialImpeller: "Bronze",
      maxSolids: "0.5mm",
      operatingTemp: "-10°C to +60°C",
      warranty: "3 Years"
    },
    features: [
      "Self-priming up to 8m",
      "Built-in pressure tank compatibility",
      "Intelligent MPPT controller",
      "LCD display with system status",
      "Automatic dry-run protection",
      "Variable speed control",
      "Remote control capability",
      "Maintenance-free operation"
    ],
    applications: [
      "Farm irrigation systems",
      "Water transfer between tanks",
      "Pressure boosting applications",
      "Swimming pool circulation",
      "Water treatment systems",
      "Industrial water supply"
    ],
    installation: {
      depth: "Surface installation with suction lift up to 8m",
      requirements: [
        "Level concrete foundation",
        "Adequate ventilation space",
        "Protection from weather elements",
        "Easy access for maintenance"
      ],
      included: [
        "Surface pump unit",
        "MPPT controller with LCD display",
        "Suction and delivery hoses",
        "Mounting hardware",
        "Installation manual"
      ]
    },
    performance: {
      dailyOutput: "20,000-28,000L per day",
      sunlightHours: "6-8 hours optimal",
      efficiency: "Up to 82% system efficiency"
    },
    certifications: ["CE", "ISO 9001", "IP65 Protection"]
  },
  {
    id: "ecosolar-irrig-1200",
    name: "EcoSolar Irrigation System 1200W",
    model: "ESP-1200-IRR",
    power: "1200W",
    maxFlow: "5,000 L/h",
    maxHead: "65m",
    description: "Complete solar irrigation solution designed for medium to large agricultural applications. Includes advanced control system, multiple output connections, and weather-resistant design.",
    price: "Starting from $1,250",
    category: "irrigation",
    image: "images/Solar pumbs/products/dc-solar-pump-for-well.webp",
    images: {
      main: "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&auto=format"
      ]
    },
    specifications: {
      pumpType: "Multi-stage Centrifugal",
      solarPanelPower: "1200W Monocrystalline",
      maximumFlow: "5,000 L/h (1,320 GPH)",
      maximumHead: "65m (213 ft)",
      inletDiameter: "3 inches",
      outletDiameter: "2 inches",
      motorType: "Brushless DC Motor",
      efficiency: "88%+",
      operatingVoltage: "72V DC",
      operatingCurrent: "20A",
      dimensions: "450 × 320 × 400mm",
      weight: "18 kg",
      materialBody: "Stainless Steel 316",
      materialImpeller: "Stainless Steel",
      maxSolids: "1mm",
      operatingTemp: "-20°C to +70°C",
      warranty: "5 Years"
    },
    features: [
      "Advanced MPPT with data logging",
      "Multiple irrigation zone control",
      "Soil moisture sensor compatibility",
      "Timer and scheduling functions",
      "Remote monitoring via mobile app",
      "Automatic weather adaptation",
      "Energy-efficient variable speed drive",
      "Modular expansion capability"
    ],
    applications: [
      "Large-scale agricultural irrigation",
      "Greenhouse and nursery watering",
      "Orchard and vineyard irrigation",
      "Sports field watering systems",
      "Commercial landscape irrigation",
      "Community water supply projects"
    ],
    installation: {
      depth: "Surface or submersible installation up to 65m",
      requirements: [
        "Reinforced mounting platform",
        "Electrical enclosure for controller",
        "Distribution manifold for multiple zones",
        "Professional installation recommended"
      ],
      included: [
        "High-capacity pump unit",
        "Advanced MPPT controller",
        "Mobile app access",
        "25m power cable",
        "Complete installation kit",
        "Professional installation service"
      ]
    },
    performance: {
      dailyOutput: "30,000-40,000L per day",
      sunlightHours: "6-8 hours optimal",
      efficiency: "Up to 88% system efficiency"
    },
    certifications: ["CE", "ISO 9001", "UL Listed", "IP67 Protection"]
  },
  {
    id: "ecosolar-compact-300",
    name: "EcoSolar Compact Pump 300W",
    model: "ESP-300-COMP",
    power: "300W",
    maxFlow: "1,200 L/h",
    maxHead: "35m",
    description: "Compact and portable solar pump solution perfect for small-scale applications and remote locations. Easy to install and maintain with plug-and-play design.",
    price: "Starting from $450",
    category: "surface",
    image: "images/Solar pumbs/products/lead.webp",
    images: {
      main: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format"
      ]
    },
    specifications: {
      pumpType: "Centrifugal Compact",
      solarPanelPower: "300W Monocrystalline",
      maximumFlow: "1,200 L/h (317 GPH)",
      maximumHead: "35m (115 ft)",
      inletDiameter: "1 inch",
      outletDiameter: "0.75 inch",
      motorType: "Brushless DC Motor",
      efficiency: "80%+",
      operatingVoltage: "24V DC",
      operatingCurrent: "15A",
      dimensions: "280 × 180 × 220mm",
      weight: "6.5 kg",
      materialBody: "Aluminum Alloy",
      materialImpeller: "Stainless Steel",
      maxSolids: "0.2mm",
      operatingTemp: "0°C to +50°C",
      warranty: "2 Years"
    },
    features: [
      "Plug-and-play installation",
      "Portable and lightweight design",
      "Built-in pressure sensor",
      "LED status display",
      "Overload protection",
      "Quick-connect fittings",
      "Silent operation",
      "Maintenance-free design"
    ],
    applications: [
      "Small garden irrigation",
      "Livestock watering troughs",
      "Pond circulation and aeration",
      "RV and camping water supply",
      "Emergency water transfer",
      "Small greenhouse watering"
    ],
    installation: {
      depth: "Surface installation with 6m suction lift",
      requirements: [
        "Stable flat surface",
        "Basic electrical knowledge",
        "Standard garden hose connections",
        "Minimal maintenance space"
      ],
      included: [
        "Compact pump unit",
        "Basic MPPT controller",
        "Connection hoses (10m)",
        "Quick-start guide",
        "Basic tool kit"
      ]
    },
    performance: {
      dailyOutput: "7,200-9,600L per day",
      sunlightHours: "6-8 hours optimal",
      efficiency: "Up to 80% system efficiency"
    },
    certifications: ["CE", "RoHS", "IP54 Protection"]
  },
  {
    id: "ecosolar-deep-1000",
    name: "EcoSolar Deep Well Pump 1000W",
    model: "ESP-1000-DEEP",
    power: "1000W",
    maxFlow: "3,000 L/h",
    maxHead: "120m",
    description: "Professional-grade deep well solar pump designed for challenging applications. Features ultra-reliable construction and advanced monitoring system for continuous operation in remote locations.",
    price: "Starting from $1,450",
    category: "submersible",
    image: "./images/Solar pumbs/products/Lead big height small flw.webp",
    images: {
      main: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1572901334602-f40b66634ba5?w=500&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop&auto=format"
      ]
    },
    specifications: {
      pumpType: "Multi-stage Submersible",
      solarPanelPower: "1000W Monocrystalline",
      maximumFlow: "3,000 L/h (792 GPH)",
      maximumHead: "120m (394 ft)",
      inletDiameter: "1.5 inches",
      outletDiameter: "1.25 inches",
      motorType: "Brushless DC Motor",
      efficiency: "87%+",
      operatingVoltage: "72V DC",
      operatingCurrent: "16A",
      dimensions: "φ102 × 680mm",
      weight: "12 kg",
      materialBody: "Stainless Steel 316L",
      materialImpeller: "Duplex Stainless Steel",
      maxSolids: "0.05mm",
      operatingTemp: "0°C to +60°C",
      warranty: "5 Years"
    },
    features: [
      "Ultra-deep well capability",
      "Advanced telemetry system",
      "Predictive maintenance alerts",
      "Sand and debris tolerance",
      "Multiple safety protections",
      "Remote diagnostics capability",
      "Energy optimization algorithms",
      "Professional-grade construction"
    ],
    applications: [
      "Deep water well extraction",
      "Municipal water supply",
      "Industrial water systems",
      "Mining and construction sites",
      "Remote community water supply",
      "High-head irrigation systems"
    ],
    installation: {
      depth: "Up to 120m depth capability",
      requirements: [
        "Minimum 4-inch steel casing",
        "Professional installation required",
        "Proper grounding and lightning protection",
        "Regulated electrical installation"
      ],
      included: [
        "Deep well pump unit",
        "Professional MPPT controller",
        "Telemetry monitoring system",
        "50m submersible cable",
        "Professional installation service",
        "Training and documentation"
      ]
    },
    performance: {
      dailyOutput: "18,000-24,000L per day",
      sunlightHours: "6-8 hours optimal",
      efficiency: "Up to 87% system efficiency"
    },
    certifications: ["CE", "ISO 9001", "UL Listed", "IP68 Waterproof", "NEMA 4X"]
  },
  {
    id: "ecosolar-fountain-400",
    name: "EcoSolar Fountain 400W",
    model: "ESP-400-FOUNTAIN",
    power: "400W",
    maxFlow: "1,800 L/h",
    maxHead: "6m",
    description: "Beautiful solar-powered fountain pump perfect for decorative water features, garden ponds, and ornamental fountains. Features multiple spray patterns and LED lighting compatibility.",
    price: "Starting from $380",
    category: "surface",
    image: "images/Solar pumbs/products/dclp-solar-pool-pump-for-circulation-64845.jpg",
    images: {
      main: "/images/Solar pumbs/products/dclp-solar-pool-pump-for-circulation-64845.jpg",
      gallery: [
        "./images/Solar pumbs/products/dclp-solar-pool-pump-for-circulation-64845.jpg",
        "./images/Solar pumbs/products/solar-centrifugal-water-pumps-for-farming-irrigation-316983.jpg",
        "./images/Solar pumbs/products/dc-jet-solar-booster-water-pump-for-garden-watering-426614.jpg",
        "./images/Solar pumbs/products/ac-dc-hybrid-solar-pool-pump-with-solar-inverter-4-697113.webp",
        
      ]
    },
    specifications: {
      pumpType: "Centrifugal Fountain Pump",
      solarPanelPower: "400W Monocrystalline",
      maximumFlow: "1,800 L/h (475 GPH)",
      maximumHead: "6m (20 ft)",
      inletDiameter: "1.5 inches",
      outletDiameter: "1 inch",
      motorType: "Brushless DC Motor",
      efficiency: "78%+",
      operatingVoltage: "24V DC",
      operatingCurrent: "18A",
      dimensions: "250 × 200 × 180mm",
      weight: "4.5 kg",
      materialBody: "UV-resistant ABS Plastic",
      materialImpeller: "Stainless Steel",
      maxSolids: "0.5mm",
      operatingTemp: "0°C to +50°C",
      warranty: "2 Years"
    },
    features: [
      "Multiple fountain spray patterns",
      "Built-in LED lighting compatibility",
      "Automatic day/night operation",
      "Float switch for water level protection",
      "Easy installation with fountain kit",
      "Remote control capability",
      "Weather-resistant design",
      "Low maintenance operation",
      "Adjustable flow control",
      "Quiet operation technology"
    ],
    applications: [
      "Garden fountain systems",
      "Decorative pond features",
      "Water garden displays",
      "Courtyard water features",
      "Public park fountains",
      "Resort and hotel water displays"
    ],
    installation: {
      depth: "Surface installation in fountain basin up to 2m deep",
      requirements: [
        "Stable fountain basin or pond",
        "Adequate water depth (minimum 30cm)",
        "Level installation surface",
        "Protection from debris"
      ],
      included: [
        "Fountain pump unit",
        "Solar panel with 5m cable",
        "Multiple fountain nozzles",
        "LED light kit",
        "Remote control",
        "Installation manual"
      ]
    },
    performance: {
      dailyOutput: "8,000-12,000L per day",
      sunlightHours: "4-6 hours optimal",
      efficiency: "Up to 78% system efficiency"
    },
    certifications: ["CE", "IP68 Waterproof", "UV Resistant"]
  }
];

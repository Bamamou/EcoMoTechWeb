export interface SolarInverter {
  id: string;
  name: string;
  model: string;
  power: string;
  image: string;
  images: {
    main: string;
    gallery: string[];
  };
  description: string;
  price: string;
  category: 'residential' | 'commercial' | 'industrial';
  brand: string;
  specifications: {
    nominalPower: string;
    maxEfficiency: string;
    mpptTrackers: string;
    maxInputVoltage: string;
    operatingVoltage: string;
    maxInputCurrent: string;
    outputVoltage: string;
    frequency: string;
    protectionRating: string;
    operatingTemp: string;
    dimensions: string;
    weight: string;
    warranty: string;
    certifications: string[];
  };
  features: string[];
  applications: string[];
  installation: {
    type: string;
    requirements: string[];
    included: string[];
  };
  performance: {
    peakEfficiency: string;
    europeanEfficiency: string;
    startupPower: string;
    nightConsumption: string;
  };
  monitoring: {
    type: string;
    features: string[];
  };
  protection: {
    dcProtection: string[];
    acProtection: string[];
  };
}

export const solarInverters: SolarInverter[] = [
  {
    id: "growatt-min-5000tl-x",
    name: "Growatt MIN 5000TL-X",
    model: "MIN 5000TL-X",
    power: "5kW",
    image: "images/Inverters/Growatt MAX 10KTL3-X.jpg",
    images: {
      main: "images/Inverters/Growatt MAX 10KTL3-X.jpg",
      gallery: [
        "images/Inverters/Growatt MAX 10KTL3-X.jpg",
        "images/Inverters/Growatt MIN 5000TL-X.webp",
        "images/Inverters/Growatt MAX 15KTL3-X in.avif",
        "images/Inverters/Sungrow SG8.0RT.png"
      ]
    },
    description: "Perfect for residential installations, the 5kW inverter offers excellent efficiency and smart features for optimal solar power conversion. Advanced MPPT technology ensures maximum energy harvest even in challenging conditions.",
    price: "Starting from $1,200",
    category: "residential",
    brand: "Growatt",
    specifications: {
      nominalPower: "5000W",
      maxEfficiency: "98.4%",
      mpptTrackers: "2 Independent MPPT",
      maxInputVoltage: "1000V DC",
      operatingVoltage: "120V-850V DC",
      maxInputCurrent: "12.5A per MPPT",
      outputVoltage: "220V-240V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "415 × 345 × 175 mm",
      weight: "16.5 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G59/3"]
    },
    features: [
      "Maximum efficiency of 98.4%",
      "Dual MPP trackers",
      "Smart monitoring via app",
      "Integrated DC switch",
      "Wide voltage range",
      "Compact design",
      "Natural convection cooling",
      "Plug & play installation"
    ],
    applications: [
      "Residential rooftop systems",
      "Small commercial installations",
      "Grid-tied solar systems",
      "Self-consumption systems",
      "Net metering applications"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>20cm clearance)",
        "Stable mounting surface",
        "Protection from direct sunlight"
      ],
      included: [
        "Inverter unit",
        "DC isolator switch",
        "AC connector",
        "WiFi stick",
        "Installation manual"
      ]
    },
    performance: {
      peakEfficiency: "98.4%",
      europeanEfficiency: "97.8%",
      startupPower: "50W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "WiFi/Ethernet",
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "Fault detection",
        "Remote diagnostics",
        "Mobile app control"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Insulation monitoring",
        "Ground fault monitoring"
      ],
      acProtection: [
        "AC overvoltage/undervoltage protection",
        "Frequency protection",
        "Anti-islanding protection",
        "AC short circuit protection"
      ]
    }
  },
  {
    id: "growatt-max-10ktl3-x",
    name: "Growatt MAX 10KTL3-X",
    model: "MAX 10KTL3-X",
    power: "10kW",
    image: "images/Inverters/Growatt MIN 5000TL-X.webp",
    images: {
      main: "images/Inverters/Growatt MIN 5000TL-X.webp",
      gallery: [
        "images/Inverters/Growatt MIN 5000TL-X.webp",
        "images/Inverters/Growatt MAX 10KTL3-X.jpg",
        "images/Inverters/Growatt MAX 15KTL3-X in.avif",
        "images/Inverters/Sungrow SG10RT.webp"
      ]
    },
    description: "Ideal for commercial applications, this 10kW inverter combines high performance with advanced monitoring capabilities. Features three-phase output and enhanced grid support functions for demanding installations.",
    price: "Starting from $2,100",
    category: "commercial",
    brand: "Growatt",
    specifications: {
      nominalPower: "10000W",
      maxEfficiency: "98.6%",
      mpptTrackers: "2 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "160V-950V DC",
      maxInputCurrent: "12.5A per MPPT",
      outputVoltage: "3-Phase 380V-480V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "430 × 370 × 185 mm",
      weight: "22 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G59/3", "VDE 4105"]
    },
    features: [
      "Maximum efficiency of 98.6%",
      "Multiple MPP trackers",
      "Advanced grid support",
      "IP65 protection rating",
      "Touch-key design",
      "Extended warranty",
      "AFCI protection",
      "Smart fan cooling"
    ],
    applications: [
      "Commercial rooftop systems",
      "Industrial installations",
      "Large residential systems",
      "Ground-mount solar farms",
      "Grid-tied applications"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Three-phase electrical connection",
        "Professional installation required",
        "Adequate cooling space",
        "Weather protection recommended"
      ],
      included: [
        "Three-phase inverter unit",
        "DC isolator switches",
        "AC connectors",
        "Communication interface",
        "Installation hardware"
      ]
    },
    performance: {
      peakEfficiency: "98.6%",
      europeanEfficiency: "98.1%",
      startupPower: "80W",
      nightConsumption: "<2W"
    },
    monitoring: {
      type: "WiFi/Ethernet/RS485",
      features: [
        "Advanced data logging",
        "Grid monitoring",
        "Performance optimization",
        "Alarm notifications",
        "Web portal access"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Arc fault circuit interrupter",
        "Insulation resistance monitoring"
      ],
      acProtection: [
        "AC overvoltage/undervoltage protection",
        "Frequency deviation protection",
        "Phase imbalance protection",
        "Grid impedance monitoring"
      ]
    }
  },
  {
    id: "growatt-max-15ktl3-x",
    name: "Growatt MAX 15KTL3-X",
    model: "MAX 15KTL3-X",
    power: "15kW",
    image: "images/Inverters/Growatt MAX 15KTL3-X in.avif",
    images: {
      main: "images/Inverters/Growatt MAX 15KTL3-X in.avif",
      gallery: [
        "images/Inverters/Growatt MAX 15KTL3-X in.avif",
        "images/Inverters/Growatt MAX 10KTL3-X.jpg",
        "images/Inverters/Growatt MIN 5000TL-X.webp",
        "images/Inverters/Sungrow SG12RT.webp"
      ]
    },
    description: "Our premium 15kW inverter delivers exceptional performance for large commercial installations with advanced grid support features. Engineered for reliability and maximum energy yield in demanding environments.",
    price: "Starting from $2,800",
    category: "commercial",
    brand: "Growatt",
    specifications: {
      nominalPower: "15000W",
      maxEfficiency: "98.8%",
      mpptTrackers: "3 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "200V-950V DC",
      maxInputCurrent: "15A per MPPT",
      outputVoltage: "3-Phase 380V-480V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "470 × 390 × 195 mm",
      weight: "28 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G59/3", "VDE 4105", "UL 1741"]
    },
    features: [
      "Maximum efficiency of 98.8%",
      "Triple MPP trackers",
      "Enhanced safety features",
      "Remote monitoring",
      "Anti-PID technology",
      "Low voltage ride through",
      "Advanced grid support",
      "Intelligent cooling system"
    ],
    applications: [
      "Large commercial systems",
      "Industrial rooftops",
      "Solar farms",
      "Utility-scale installations",
      "Grid-support applications"
    ],
    installation: {
      type: "Wall or ground mounted",
      requirements: [
        "Three-phase electrical infrastructure",
        "Certified electrician installation",
        "Proper grounding system",
        "Grid compliance certification"
      ],
      included: [
        "15kW three-phase inverter",
        "DC disconnect switches",
        "AC output connectors",
        "Communication modules",
        "Mounting brackets"
      ]
    },
    performance: {
      peakEfficiency: "98.8%",
      europeanEfficiency: "98.3%",
      startupPower: "100W",
      nightConsumption: "<3W"
    },
    monitoring: {
      type: "Advanced communications",
      features: [
        "SCADA integration",
        "Grid monitoring",
        "Predictive maintenance",
        "Performance analytics",
        "Remote control capabilities"
      ]
    },
    protection: {
      dcProtection: [
        "Enhanced overvoltage protection",
        "Arc fault detection",
        "Rapid shutdown capability",
        "Ground fault monitoring"
      ],
      acProtection: [
        "Grid support functions",
        "Reactive power control",
        "Voltage regulation",
        "Frequency response"
      ]
    }
  },
  {
    id: "sungrow-sg8-0rt",
    name: "Sungrow SG8.0RT",
    model: "SG8.0RT",
    power: "8kW",
    image: "images/Inverters/Sungrow SG8.0RT.png",
    images: {
      main: "images/Inverters/Sungrow SG8.0RT.png",
      gallery: [
        "images/Inverters/Sungrow SG8.0RT.png",
        "images/Inverters/Sungrow SG10RT.webp",
        "images/Inverters/Sungrow SG12RT.webp",
        "images/Inverters/Growatt MIN 5000TL-X.webp"
      ]
    },
    description: "Sungrow's versatile 8kW inverter designed for medium-sized residential and small commercial installations. Features advanced AI-powered optimization and comprehensive monitoring capabilities.",
    price: "Starting from $1,650",
    category: "residential",
    brand: "Sungrow",
    specifications: {
      nominalPower: "8000W",
      maxEfficiency: "98.3%",
      mpptTrackers: "3 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "180V-950V DC",
      maxInputCurrent: "11A per MPPT",
      outputVoltage: "220V-240V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "425 × 371 × 185 mm",
      weight: "19.5 kg",
      warranty: "12 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99", "VDE 4105"]
    },
    features: [
      "Maximum efficiency of 98.3%",
      "Three MPPT channels",
      "Built-in WiFi monitoring",
      "Touch-free commissioning",
      "AI-powered yield optimization",
      "12-year warranty",
      "Smart O&M features",
      "Rapid shutdown function"
    ],
    applications: [
      "Medium residential systems",
      "Small commercial installations",
      "Retrofit applications",
      "Self-consumption systems",
      "Battery-ready systems"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Single or three-phase connection",
        "WiFi network availability",
        "Adequate ventilation",
        "Easy access for maintenance"
      ],
      included: [
        "8kW hybrid-ready inverter",
        "WiFi monitoring stick",
        "DC and AC connectors",
        "Quick installation guide",
        "Commissioning app"
      ]
    },
    performance: {
      peakEfficiency: "98.3%",
      europeanEfficiency: "97.9%",
      startupPower: "60W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "iSolarCloud platform",
      features: [
        "AI fault diagnosis",
        "Performance benchmarking",
        "Yield prediction",
        "O&M optimization",
        "Mobile app integration"
      ]
    },
    protection: {
      dcProtection: [
        "Smart IV curve diagnosis",
        "DC arc fault protection",
        "Insulation monitoring",
        "String monitoring"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "Surge protection device",
        "Residual current monitoring"
      ]
    }
  }
];
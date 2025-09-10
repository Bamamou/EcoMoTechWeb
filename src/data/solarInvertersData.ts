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
    price: "Starting from $409",
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
    price: "Starting from $809",
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
    price: "Starting from $1210",
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
    price: "Starting from $750",
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
  },
  {
    id: "sungrow-sg10rt",
    name: "Sungrow SG10RT",
    model: "SG10RT",
    power: "10kW",
    image: "images/Inverters/Sungrow SG10RT.webp",
    images: {
      main: "images/Inverters/Sungrow SG10RT.webp",
      gallery: [
        "images/Inverters/Sungrow SG10RT.webp",
        "images/Inverters/Sungrow SG10RT.png"
      ]
    },
    description: "Advanced 10kW commercial inverter with cutting-edge monitoring and diagnostic capabilities.",
    price: "Starting from $880",
    category: "commercial",
    brand: "Sungrow",
    specifications: {
      nominalPower: "10000W",
      maxEfficiency: "98.5%",
      mpptTrackers: "4 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "200V-1000V DC",
      maxInputCurrent: "16A per MPPT",
      outputVoltage: "380V-400V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +70°C",
      dimensions: "525 × 470 × 240 mm",
      weight: "28 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99"]
    },
    features: [
      "Maximum efficiency of 98.5%",
      "Four MPPT tracking",
      "Online firmware updates",
      "Smart I-V curve diagnosis",
      "IP66 protection rating",
      "Built-in PID recovery"
    ],
    applications: [
      "Commercial solar installations",
      "Industrial applications",
      "Large residential systems",
      "Grid-tied systems",
      "Three-phase applications"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>30cm clearance)",
        "Stable mounting surface",
        "Three-phase grid connection"
      ],
      included: [
        "Inverter unit",
        "AC/DC isolator switches",
        "Communication module",
        "Installation manual",
        "Monitoring software"
      ]
    },
    performance: {
      peakEfficiency: "98.5%",
      europeanEfficiency: "98.1%",
      startupPower: "80W",
      nightConsumption: "<2W"
    },
    monitoring: {
      type: "WiFi/Ethernet/RS485",
      features: [
        "Real-time monitoring",
        "Smart I-V diagnostics",
        "Performance optimization",
        "Fault detection",
        "Remote maintenance"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Insulation monitoring",
        "String monitoring",
        "PID recovery function"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "Surge protection device",
        "Three-phase monitoring"
      ]
    }
  },
  {
    id: "sungrow-sg12rt",
    name: "Sungrow SG12RT",
    model: "SG12RT",
    power: "12kW",
    image: "images/Inverters/Sungrow SG12RT.webp",
    images: {
      main: "images/Inverters/Sungrow SG12RT.webp",
      gallery: [
        "images/Inverters/Sungrow SG12RT.webp"
      ]
    },
    description: "High-performance 12kW inverter perfect for large residential and commercial solar installations.",
    price: "Starting from $1099",
    category: "commercial",
    brand: "Sungrow",
    specifications: {
      nominalPower: "12000W",
      maxEfficiency: "98.7%",
      mpptTrackers: "5 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "200V-1000V DC",
      maxInputCurrent: "16A per MPPT",
      outputVoltage: "380V-400V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +70°C",
      dimensions: "525 × 470 × 240 mm",
      weight: "30 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99"]
    },
    features: [
      "Maximum efficiency of 98.7%",
      "Five MPPT channels",
      "Smart string monitoring",
      "Integrated AFCI protection",
      "DC Type II SPD protection",
      "Low voltage ride through"
    ],
    applications: [
      "Large commercial installations",
      "Industrial solar systems",
      "Three-phase residential systems",
      "Grid-tied applications",
      "High-power applications"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>30cm clearance)",
        "Stable mounting surface",
        "Three-phase grid connection"
      ],
      included: [
        "Inverter unit",
        "AC/DC isolator switches",
        "Communication module",
        "AFCI protection",
        "Installation manual"
      ]
    },
    performance: {
      peakEfficiency: "98.7%",
      europeanEfficiency: "98.3%",
      startupPower: "100W",
      nightConsumption: "<2W"
    },
    monitoring: {
      type: "WiFi/Ethernet/RS485",
      features: [
        "Real-time monitoring",
        "String-level monitoring",
        "Performance analytics",
        "AFCI monitoring",
        "Remote diagnostics"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Insulation monitoring",
        "String monitoring",
        "AFCI protection"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "Surge protection device",
        "Three-phase monitoring"
      ]
    }
  },
  {
    id: "goodwe-gw3000-ns",
    name: "Goodwe GW3000-NS",
    model: "GW3000-NS",
    power: "3kW",
    image: "images/Inverters/Goodwe GW3000-NS.jpg",
    images: {
      main: "images/Inverters/Goodwe GW3000-NS.jpg",
      gallery: [
        "images/Inverters/Goodwe GW3000-NS.jpg"
      ]
    },
    description: "Compact and reliable 3kW inverter perfect for small residential solar installations with excellent monitoring capabilities.",
    price: "Starting from $209",
    category: "residential",
    brand: "GoodWe",
    specifications: {
      nominalPower: "3000W",
      maxEfficiency: "97.8%",
      mpptTrackers: "1 Independent MPPT",
      maxInputVoltage: "600V DC",
      operatingVoltage: "80V-550V DC",
      maxInputCurrent: "16A",
      outputVoltage: "220V-240V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "350 × 406 × 156 mm",
      weight: "14 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G98"]
    },
    features: [
      "Maximum efficiency of 97.8%",
      "Single MPPT tracker",
      "Built-in WiFi/GPRS",
      "Compact and lightweight",
      "Modern OLED display",
      "10-year warranty"
    ],
    applications: [
      "Small residential systems",
      "Rooftop installations",
      "Grid-tied systems",
      "Self-consumption systems",
      "Entry-level solar systems"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>15cm clearance)",
        "Stable mounting surface",
        "Single-phase grid connection"
      ],
      included: [
        "Inverter unit",
        "WiFi monitoring stick",
        "AC/DC connectors",
        "Installation manual",
        "Mobile app access"
      ]
    },
    performance: {
      peakEfficiency: "97.8%",
      europeanEfficiency: "97.2%",
      startupPower: "30W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "WiFi/GPRS",
      features: [
        "Real-time monitoring",
        "Mobile app control",
        "Performance tracking",
        "Fault alerts",
        "Remote diagnostics"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Insulation monitoring",
        "Ground fault detection"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "AC surge protection",
        "Frequency protection"
      ]
    }
  },
  {
    id: "goodwe-gw6000-dt",
    name: "Goodwe GW6000-DT",
    model: "GW6000-DT",
    power: "6kW",
    image: "images/Inverters/Goodwe GW6000-DT.jpg",
    images: {
      main: "images/Inverters/Goodwe GW6000-DT.jpg",
      gallery: [
        "images/Inverters/Goodwe GW6000-DT.jpg"
      ]
    },
    description: "Versatile 6kW dual-MPPT inverter designed for medium-sized residential solar systems with advanced safety features.",
    price: "Starting from $509",
    category: "residential",
    brand: "GoodWe",
    specifications: {
      nominalPower: "6000W",
      maxEfficiency: "98.2%",
      mpptTrackers: "2 Independent MPPT",
      maxInputVoltage: "1000V DC",
      operatingVoltage: "200V-850V DC",
      maxInputCurrent: "16A per MPPT",
      outputVoltage: "220V-240V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "420 × 315 × 180 mm",
      weight: "18 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G98"]
    },
    features: [
      "Maximum efficiency of 98.2%",
      "Dual MPPT trackers",
      "Smart monitoring system",
      "Arc fault protection",
      "IP65 protection class",
      "Integrated export control"
    ],
    applications: [
      "Medium residential systems",
      "Rooftop installations",
      "Grid-tied systems",
      "Zero export systems",
      "Backup power systems"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>20cm clearance)",
        "Stable mounting surface",
        "Single-phase grid connection"
      ],
      included: [
        "Inverter unit",
        "WiFi monitoring device",
        "AC/DC connectors",
        "Export control module",
        "Installation manual"
      ]
    },
    performance: {
      peakEfficiency: "98.2%",
      europeanEfficiency: "97.8%",
      startupPower: "50W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "WiFi/Ethernet",
      features: [
        "Real-time monitoring",
        "Smart diagnostics",
        "Performance optimization",
        "Export control",
        "Mobile app integration"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Arc fault circuit interrupter",
        "Insulation monitoring"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "AC surge protection",
        "Export limitation"
      ]
    }
  },
  {
    id: "goodwe-gw10k-dt",
    name: "Goodwe GW10K-DT",
    model: "GW10K-DT",
    power: "10kW",
    image: "images/Inverters/Goodwe GW10K-DT.webp",
    images: {
      main: "images/Inverters/Goodwe GW10K-DT.webp",
      gallery: [
        "images/Inverters/Goodwe GW10K-DT.webp",
        "images/Inverters/Goodwe GW10K-DT.jpg"
      ]
    },
    description: "High-performance 10kW inverter suitable for larger residential and small commercial installations with comprehensive protection features.",
    price: "Starting from $609",
    category: "commercial",
    brand: "GoodWe",
    specifications: {
      nominalPower: "10000W",
      maxEfficiency: "98.4%",
      mpptTrackers: "2 Independent MPPT",
      maxInputVoltage: "1000V DC",
      operatingVoltage: "200V-850V DC",
      maxInputCurrent: "25A per MPPT",
      outputVoltage: "380V-400V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +60°C",
      dimensions: "485 × 425 × 205 mm",
      weight: "25 kg",
      warranty: "10 Years Standard",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99"]
    },
    features: [
      "Maximum efficiency of 98.4%",
      "Dual MPPT design",
      "Remote firmware updates",
      "DC switch integrated",
      "Type II SPD protection",
      "Wide voltage range"
    ],
    applications: [
      "Large residential systems",
      "Small commercial installations",
      "Three-phase systems",
      "High-power applications",
      "Grid-tied systems"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or covered outdoor installation",
        "Adequate ventilation space (>25cm clearance)",
        "Stable mounting surface",
        "Three-phase grid connection"
      ],
      included: [
        "Inverter unit",
        "WiFi monitoring device",
        "AC/DC isolator switches",
        "SPD protection",
        "Installation manual"
      ]
    },
    performance: {
      peakEfficiency: "98.4%",
      europeanEfficiency: "98.0%",
      startupPower: "80W",
      nightConsumption: "<2W"
    },
    monitoring: {
      type: "WiFi/Ethernet/4G",
      features: [
        "Real-time monitoring",
        "Remote firmware updates",
        "Performance analytics",
        "Fault diagnostics",
        "Cloud platform integration"
      ]
    },
    protection: {
      dcProtection: [
        "DC overvoltage protection",
        "DC reverse polarity protection",
        "Type II SPD protection",
        "Insulation monitoring"
      ],
      acProtection: [
        "Grid monitoring",
        "Anti-islanding protection",
        "AC surge protection",
        "Three-phase monitoring"
      ]
    }
  },
  {
    id: "ecoverter5",
    name: "Ecoverter5",
    model: "Ecoverter5",
    power: "5kW",
    image: "images/Inverters/Ecoverter5.webp",
    images: {
      main: "images/Inverters/Ecoverter5.webp",
      gallery: [
        "images/Inverters/Ecoverter5.webp",
        "images/Inverters/Ecoverter5.jpg",
        "images/Inverters/Ecoverter5.png"
      ]
    },
    description: "Our flagship 5kW inverter featuring smart home integration and industry-leading efficiency for residential installations.",
    price: "Starting from $409",
    category: "residential",
    brand: "EcoMoTech",
    specifications: {
      nominalPower: "5000W",
      maxEfficiency: "98.5%",
      mpptTrackers: "2 Independent MPPT",
      maxInputVoltage: "1000V DC",
      operatingVoltage: "150V-850V DC",
      maxInputCurrent: "16A per MPPT",
      outputVoltage: "220V-240V AC",
      frequency: "50/60Hz",
      protectionRating: "IP65",
      operatingTemp: "-25°C to +65°C",
      dimensions: "400 × 350 × 180 mm",
      weight: "17 kg",
      warranty: "15 Years Premium",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G98", "UL 1741"]
    },
    features: [
      "Maximum efficiency of 98.5%",
      "Dual MPPT channels",
      "Smart home integration",
      "AI-powered monitoring",
      "Dual AC/DC protection",
      "15-year warranty"
    ],
    applications: [
      "Smart residential systems",
      "IoT integrated homes",
      "Energy management systems",
      "Battery-ready installations",
      "Net metering applications"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or outdoor installation",
        "Smart home network connectivity",
        "Adequate ventilation space (>20cm clearance)",
        "Stable mounting surface"
      ],
      included: [
        "Inverter unit with AI chip",
        "Smart monitoring hub",
        "Mobile app premium license",
        "Cloud analytics access",
        "15-year premium warranty"
      ]
    },
    performance: {
      peakEfficiency: "98.5%",
      europeanEfficiency: "98.1%",
      startupPower: "30W",
      nightConsumption: "<0.5W"
    },
    monitoring: {
      type: "WiFi/Ethernet/4G/IoT",
      features: [
        "AI-powered analytics",
        "Predictive maintenance",
        "Smart home integration",
        "Energy optimization",
        "Weather-based forecasting"
      ]
    },
    protection: {
      dcProtection: [
        "Advanced DC protection",
        "AI fault detection",
        "Predictive failure analysis",
        "Smart insulation monitoring"
      ],
      acProtection: [
        "Smart grid monitoring",
        "Adaptive protection",
        "AI-based islanding detection",
        "Dynamic frequency control"
      ]
    }
  },
  {
    id: "ecoverter8",
    name: "Ecoverter8",
    model: "Ecoverter8",
    power: "8kW",
    image: "images/Inverters/Ecoverter8.webp",
    images: {
      main: "images/Inverters/Ecoverter8.webp",
      gallery: [
        "images/Inverters/Ecoverter8.webp"
      ]
    },
    description: "Advanced 8kW inverter with cloud-based monitoring and superior grid integration capabilities for larger homes.",
    price: "Starting from $509.00",
    category: "commercial",
    brand: "EcoMoTech",
    specifications: {
      nominalPower: "8000W",
      maxEfficiency: "98.7%",
      mpptTrackers: "3 Independent MPPT",
      maxInputVoltage: "1000V DC",
      operatingVoltage: "150V-850V DC",
      maxInputCurrent: "16A per MPPT",
      outputVoltage: "380V-400V AC",
      frequency: "50/60Hz",
      protectionRating: "IP66",
      operatingTemp: "-25°C to +65°C",
      dimensions: "450 × 380 × 200 mm",
      weight: "22 kg",
      warranty: "15 Years Premium",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99", "UL 1741"]
    },
    features: [
      "Maximum efficiency of 98.7%",
      "Triple MPPT system",
      "Cloud monitoring platform",
      "Zero export control",
      "Advanced grid support",
      "IP66 protection"
    ],
    applications: [
      "Large residential systems",
      "Small commercial installations",
      "Three-phase applications",
      "Grid-tie with battery backup",
      "Smart energy management"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or outdoor installation",
        "Internet connectivity required",
        "Adequate ventilation space (>25cm clearance)",
        "Three-phase grid connection"
      ],
      included: [
        "Inverter unit with cloud connectivity",
        "Advanced monitoring system",
        "Mobile app premium access",
        "Cloud analytics platform",
        "15-year premium warranty"
      ]
    },
    performance: {
      peakEfficiency: "98.7%",
      europeanEfficiency: "98.3%",
      startupPower: "60W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "Cloud/WiFi/Ethernet/4G",
      features: [
        "Cloud-based monitoring",
        "Advanced analytics",
        "Predictive maintenance",
        "Remote diagnostics",
        "Performance optimization"
      ]
    },
    protection: {
      dcProtection: [
        "Advanced DC protection",
        "Smart fault detection",
        "Predictive analysis",
        "Cloud-based monitoring"
      ],
      acProtection: [
        "Smart grid integration",
        "Advanced protection algorithms",
        "Cloud-based islanding detection",
        "Three-phase monitoring"
      ]
    }
  },
  {
    id: "ecoverter10",
    name: "Ecoverter10",
    model: "Ecoverter10",
    power: "10kW",
    image: "images/Inverters/Ecoverter10.avif",
    images: {
      main: "images/Inverters/Ecoverter10.avif",
      gallery: [
        "images/Inverters/Ecoverter10.avif"
      ]
    },
    description: "Premium 10kW inverter with future-ready features including battery storage compatibility and smart grid integration.",
    price: "Starting from $609.00",
    category: "commercial",
    brand: "EcoMoTech",
    specifications: {
      nominalPower: "10000W",
      maxEfficiency: "98.9%",
      mpptTrackers: "4 Independent MPPT",
      maxInputVoltage: "1100V DC",
      operatingVoltage: "200V-1000V DC",
      maxInputCurrent: "20A per MPPT",
      outputVoltage: "380V-400V AC",
      frequency: "50/60Hz",
      protectionRating: "IP66",
      operatingTemp: "-30°C to +70°C",
      dimensions: "500 × 420 × 220 mm",
      weight: "28 kg",
      warranty: "15 Years Premium",
      certifications: ["CE", "IEC 62109", "AS 4777.2", "G99", "UL 1741", "IEEE 1547"]
    },
    features: [
      "Maximum efficiency of 98.9%",
      "Quad MPPT technology",
      "Remote diagnostics",
      "Battery ready design",
      "Surge protection",
      "Smart grid ready"
    ],
    applications: [
      "Premium residential systems",
      "Commercial installations",
      "Battery storage systems",
      "Smart grid applications",
      "Future-ready installations"
    ],
    installation: {
      type: "Wall-mounted",
      requirements: [
        "Indoor or outdoor installation",
        "Smart grid connectivity",
        "Adequate ventilation space (>30cm clearance)",
        "Three-phase grid connection",
        "Battery storage compatibility"
      ],
      included: [
        "Premium inverter unit",
        "Smart grid interface",
        "Battery management compatibility",
        "Advanced monitoring system",
        "15-year premium warranty"
      ]
    },
    performance: {
      peakEfficiency: "98.9%",
      europeanEfficiency: "98.5%",
      startupPower: "80W",
      nightConsumption: "<1W"
    },
    monitoring: {
      type: "Smart Grid/Cloud/WiFi/Ethernet/4G",
      features: [
        "Smart grid integration",
        "Battery management monitoring",
        "AI-powered optimization",
        "Predictive maintenance",
        "Advanced grid support functions"
      ]
    },
    protection: {
      dcProtection: [
        "Premium DC protection suite",
        "AI-based fault prediction",
        "Smart grid compliance",
        "Battery protection integration"
      ],
      acProtection: [
        "Smart grid protection",
        "Advanced anti-islanding",
        "Dynamic voltage support",
        "Frequency regulation support"
      ]
    }
  }
];
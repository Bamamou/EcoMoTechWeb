export interface SolarAppliance {
  id: string;
  name: string;
  model: string;
  power: string;
  solarPanelCapacity: string;
  batteryCapacity: string;
  description: string;
  price: string;
  category: 'cooling' | 'ventilation' | 'refrigeration' | 'security' | 'power-storage' | 'cooking';
  image: string;
  images: {
    main: string;
    gallery: string[];
  };
  specifications: {
    powerConsumption: string;
    solarPanelWattage: string;
    batteryType: string;
    batteryCapacity: string;
    chargingTime: string;
    operatingTime: string;
    dimensions: string;
    weight: string;
    operatingTemperature: string;
    certification: string[];
    warranty: string;
  };
  features: string[];
  applications: string[];
  technicalDetails: {
    energyEfficiency: string;
    solarChargingEfficiency: string;
    inverterType?: string;
    controllerType: string;
    displayType?: string;
    connectivity?: string[];
  };
  installation: {
    installationType: string;
    maintenanceRequirement: string;
    setupTime: string;
  };
}

export const solarAppliancesData: SolarAppliance[] = [
  // COOLING SYSTEMS
  {
    id: "sa-ac-001",
    name: "EcoMoTech SolarCool Pro",
    model: "AC-SOLAR-12000",
    power: "12,000 BTU/Hr",
    solarPanelCapacity: "1200W",
    batteryCapacity: "100Ah Lithium",
    description: "High-efficiency solar-powered air conditioning system designed for off-grid cooling solutions. Features inverter technology and smart temperature control for optimal energy management.",
    price: "$999",
    category: "cooling",
    image: "/images/SolarAppliances/Air Conditioners/12kbtu.jpg",
    images: {
      main: "/images/SolarAppliances/Air Conditioners/12kbtu.jpg",
      gallery: [
         "/images/SolarAppliances/Air Conditioners/24kBTU.avif",
        "/images/SolarAppliances/Air Conditioners/12kbtu.jpg",
        "/images/SolarAppliances/Air Conditioners/air conditioner.avif", 
      
      ]
    },
    specifications: {
      powerConsumption: "800W",
      solarPanelWattage: "1200W Monocrystalline",
      batteryType: "Lithium Iron Phosphate (LiFePO4)",
      batteryCapacity: "100Ah / 1280Wh",
      chargingTime: "4-6 hours (optimal sunlight)",
      operatingTime: "8-12 hours continuous",
      dimensions: "900 x 320 x 250 mm",
      weight: "35 kg",
      operatingTemperature: "-10°C to +50°C",
      certification: ["CE", "ROHS", "ISO 9001"],
      warranty: "5 years comprehensive"
    },
    features: [
      "DC Inverter technology for maximum efficiency",
      "Smart temperature control with WiFi connectivity",
      "Automatic solar tracking optimization",
      "Emergency grid backup capability",
      "Quiet operation below 45dB",
      "Anti-corrosion treatment for tropical climates",
      "LED display with energy consumption monitoring",
      "Sleep mode for nighttime energy conservation"
    ],
    applications: [
      "Off-grid residential cooling",
      "Remote office buildings",
      "Solar-powered cabins",
      "Emergency cooling systems",
      "Eco-friendly commercial spaces",
      "Rural healthcare facilities"
    ],
    technicalDetails: {
      energyEfficiency: "EER 12.5",
      solarChargingEfficiency: "95%",
      inverterType: "Pure Sine Wave MPPT",
      controllerType: "MPPT Solar Charge Controller",
      displayType: "LCD Digital Display",
      connectivity: ["WiFi", "Mobile App", "Remote Control"]
    },
    installation: {
      installationType: "Wall-mounted or Window unit",
      maintenanceRequirement: "Minimal - quarterly cleaning",
      setupTime: "2-4 hours professional installation"
    }
  },
  {
    id: "sa-ac-002",
    name: "EcoMoTech SolarCool Compact",
    model: "AC-SOLAR-9000",
    power: "9,000 BTU/Hr",
    solarPanelCapacity: "800W",
    batteryCapacity: "75Ah Lithium",
    description: "Compact solar air conditioning unit perfect for small rooms, bedrooms, and office spaces. Energy-efficient design with advanced battery management system.",
    price: "$699",
    category: "cooling",
    image: "/images/SolarAppliances/Air Conditioners/solar-powered Compact air conditioning.jpg",
    images: {
      main: "/images/SolarAppliances/Air Conditioners/solar-powered Compact air conditioning.jpg",
      gallery: [
        "/images/SolarAppliances/Air Conditioners/solar-powered Compact air conditioning 1.jpg",
        "/images/SolarAppliances/Air Conditioners/solar-powered Compact air conditioning 2.webp",
      ]
    },
    specifications: {
      powerConsumption: "600W",
      solarPanelWattage: "800W Monocrystalline",
      batteryType: "Lithium Iron Phosphate (LiFePO4)",
      batteryCapacity: "75Ah / 960Wh",
      chargingTime: "3-5 hours (optimal sunlight)",
      operatingTime: "6-10 hours continuous",
      dimensions: "720 x 280 x 200 mm",
      weight: "25 kg",
      operatingTemperature: "-5°C to +45°C",
      certification: ["CE", "ROHS", "Energy Star"],
      warranty: "3 years comprehensive"
    },
    features: [
      "Compact design for small spaces",
      "Variable speed compressor",
      "Timer function with smart scheduling",
      "Low voltage protection",
      "Auto-restart after power restoration",
      "Eco-mode for maximum energy savings"
    ],
    applications: [
      "Small residential rooms",
      "Home offices",
      "Student accommodations",
      "Small commercial spaces",
      "Mobile homes and RVs"
    ],
    technicalDetails: {
      energyEfficiency: "EER 11.8",
      solarChargingEfficiency: "93%",
      controllerType: "PWM Solar Charge Controller",
      displayType: "LED Indicator Panel"
    },
    installation: {
      installationType: "Window or through-wall mounting",
      maintenanceRequirement: "Low - bi-annual filter cleaning",
      setupTime: "1-2 hours installation"
    }
  },

  // VENTILATION SYSTEMS
  {
    id: "sa-fan-001",
    name: "EcoMoTech SolarBreeze Ceiling Fan",
    model: "FAN-SOLAR-52",
    power: "52-inch Diameter",
    solarPanelCapacity: "100W",
    batteryCapacity: "20Ah Lithium",
    description: "Premium solar-powered ceiling fan with brushless DC motor technology. Features remote control, LED lighting, and variable speed control for optimal comfort and energy efficiency.",
    price: "$99",
    category: "ventilation",
    image: "/images/SolarAppliancess/Fans/ceiling fan.jpg",
    images: {
      main: "/images/SolarAppliances/Fans/ceiling fan.jpg",
      gallery: [
        "/images/SolarAppliances/Fans/fan 2.jpg",
        "/images/SolarAppliances/Fans/fan.avif",
        "/images/SolarAppliances/Fans/fan 2.jpg",
      ]
    },
    specifications: {
      powerConsumption: "35W (maximum speed)",
      solarPanelWattage: "100W Polycrystalline",
      batteryType: "Lithium Ion",
      batteryCapacity: "20Ah / 240Wh",
      chargingTime: "4-6 hours (optimal sunlight)",
      operatingTime: "15-20 hours continuous",
      dimensions: "1320 mm diameter x 400 mm height",
      weight: "8.5 kg",
      operatingTemperature: "-10°C to +60°C",
      certification: ["CE", "ROHS", "BIS"],
      warranty: "3 years motor, 1 year electronics"
    },
    features: [
      "Brushless DC motor for silent operation",
      "6-speed variable control",
      "Integrated 24W LED lighting",
      "Reverse rotation for winter mode",
      "Remote control with timer function",
      "Automatic battery management",
      "Weather-resistant outdoor models available"
    ],
    applications: [
      "Residential bedrooms and living areas",
      "Off-grid homes and cabins",
      "Outdoor pavilions and gazebos",
      "Workshop and garage ventilation",
      "Commercial waiting areas",
      "Agricultural and livestock facilities"
    ],
    technicalDetails: {
      energyEfficiency: "210 CFM per watt",
      solarChargingEfficiency: "85%",
      controllerType: "Built-in MPPT Controller",
      displayType: "LED Status Indicators",
      connectivity: ["IR Remote Control", "Manual Wall Switch"]
    },
    installation: {
      installationType: "Standard ceiling mount",
      maintenanceRequirement: "Annual blade cleaning and inspection",
      setupTime: "1-2 hours installation"
    }
  },
  {
    id: "sa-fan-002",
    name: "EcoMoTech SolarBreeze Pedestal Fan",
    model: "FAN-SOLAR-16P",
    power: "16-inch Oscillating",
    solarPanelCapacity: "40W",
    batteryCapacity: "12Ah Lithium",
    description: "Portable solar-powered pedestal fan with adjustable height and oscillating function. Perfect for outdoor use and areas without electrical connections.",
    price: "$49",
    category: "ventilation",
    image: "/images/SolarAppliances/Fans/Portable solar-powered pedestal fan.avif",
    images: {
      main: "/images/SolarAppliances/Fans/Portable solar-powered pedestal fan.avif",
      gallery: [
        "/images/SolarAppliances/Fans/EcoMoTech SolarBreeze Pedestal Fan.avif",
        "/images/SolarAppliances/Fans/FAN-SOLAR-16P.avif"
      ]
    },
    specifications: {
      powerConsumption: "25W (maximum speed)",
      solarPanelWattage: "40W Monocrystalline",
      batteryType: "Lithium Ion",
      batteryCapacity: "12Ah / 144Wh",
      chargingTime: "5-7 hours (optimal sunlight)",
      operatingTime: "10-15 hours continuous",
      dimensions: "400 mm fan diameter, 1200-1450 mm height",
      weight: "6.2 kg",
      operatingTemperature: "-5°C to +50°C",
      certification: ["CE", "IP54 Weather Resistant"],
      warranty: "2 years comprehensive"
    },
    features: [
      "Adjustable height (1.2m to 1.45m)",
      "90-degree oscillation function",
      "4-speed control settings",
      "Tilt adjustment up to 45 degrees",
      "Portable with carrying handle",
      "Built-in USB charging port",
      "LED battery level indicator"
    ],
    applications: [
      "Outdoor events and camping",
      "Market stalls and vendors",
      "Construction sites",
      "Agricultural applications",
      "Emergency ventilation",
      "Patio and garden use"
    ],
    technicalDetails: {
      energyEfficiency: "180 CFM per watt",
      solarChargingEfficiency: "82%",
      controllerType: "Built-in PWM Controller",
      displayType: "LED Battery Indicator"
    },
    installation: {
      installationType: "Portable - no installation required",
      maintenanceRequirement: "Seasonal cleaning and lubrication",
      setupTime: "5 minutes setup"
    }
  },

  // REFRIGERATION SYSTEMS
  {
    id: "sa-fridge-001",
    name: "EcoMoTech SolarChill Refrigerator",
    model: "REF-SOLAR-200L",
    power: "200L Capacity",
    solarPanelCapacity: "400W",
    batteryCapacity: "100Ah Lithium",
    description: "Energy-efficient solar-powered refrigerator with dual compartment design. Features intelligent temperature control and can operate continuously on solar power with battery backup.",
    price: "$1,850",
    category: "refrigeration",
    image: "/images/SolarAppliances/Fridges/REF-SOLAR-200L.webp",
    images: {
      main: "/images/SolarAppliances/Fridges/REF-SOLAR-200L.webp",
      gallery: [
        "/images/SolarAppliances/Fridges/solar-power-9-1024x778.webp",
        "/images/SolarAppliances/Fridges/Smad-212L-260L-Top-Freezer-12V-24V.avif",
        "/images/SolarAppliances/Fridges/solar powered fridge.webp",
      ]
    },
    specifications: {
      powerConsumption: "80W average",
      solarPanelWattage: "400W Monocrystalline",
      batteryType: "Lithium Iron Phosphate (LiFePO4)",
      batteryCapacity: "100Ah / 1280Wh",
      chargingTime: "6-8 hours (optimal sunlight)",
      operatingTime: "72+ hours without sunlight",
      dimensions: "1650 x 600 x 650 mm",
      weight: "85 kg",
      operatingTemperature: "10°C to 43°C ambient",
      certification: ["Energy Star", "CE", "ROHS"],
      warranty: "5 years compressor, 2 years parts"
    },
    features: [
      "Dual temperature zones (fridge + freezer)",
      "DC compressor technology for efficiency",
      "Smart temperature management system",
      "Low voltage automatic cutoff protection",
      "Interior LED lighting",
      "Digital temperature display",
      "CFC-free refrigerant (R600a)",
      "Lockable door with key"
    ],
    applications: [
      "Off-grid homes and cabins",
      "Rural medical clinics (vaccine storage)",
      "Remote research stations",
      "Solar-powered restaurants",
      "Camping and RV applications",
      "Emergency food preservation"
    ],
    technicalDetails: {
      energyEfficiency: "A++ Energy Rating",
      solarChargingEfficiency: "94%",
      controllerType: "MPPT with Battery Management",
      displayType: "Digital LCD Display",
      connectivity: ["Temperature Alarm", "Mobile App Monitoring"]
    },
    installation: {
      installationType: "Freestanding unit",
      maintenanceRequirement: "Quarterly condenser cleaning",
      setupTime: "30 minutes setup and connection"
    }
  },

  // SECURITY SYSTEMS
  {
    id: "sa-security-001",
    name: "EcoMoTech SolarGuard Security Camera",
    model: "CAM-SOLAR-4G-PTZ",
    power: "4G LTE Connectivity",
    solarPanelCapacity: "60W",
    batteryCapacity: "15Ah Lithium",
    description: "Professional solar-powered security camera system with 4G connectivity, night vision, and weatherproof design. Features AI motion detection and cloud storage capabilities.",
    price: "$685",
    category: "security",
    image: "/images/SolarAppliances/Cameras/Outdoor.jpg",
    images: {
      main:  "/images/SolarAppliances/Cameras/Outdoor.jpg",
      gallery: [
        "/images/SolarAppliances/Cameras/solar powered.webp",
        "/images/SolarAppliances/Cameras/Great.avif",
        "/images/SolarAppliances/Cameras/system.jpg",
      ]
    },
    specifications: {
      powerConsumption: "12W continuous, 25W with PTZ motion",
      solarPanelWattage: "60W Monocrystalline",
      batteryType: "Lithium Ion",
      batteryCapacity: "15Ah / 180Wh",
      chargingTime: "4-6 hours (optimal sunlight)",
      operatingTime: "10-15 days without sunlight",
      dimensions: "Camera: 180 x 95 x 95 mm, Panel: 670 x 460 x 35 mm",
      weight: "4.5 kg total system",
      operatingTemperature: "-25°C to +60°C",
      certification: ["IP66 Weatherproof", "CE", "FCC"],
      warranty: "3 years comprehensive"
    },
    features: [
      "4MP Ultra HD video recording",
      "360° pan and tilt functionality",
      "20m infrared night vision",
      "AI-powered motion detection",
      "Two-way audio communication",
      "4G LTE cellular connectivity",
      "Local SD card + cloud storage",
      "Real-time mobile app alerts",
      "PIR motion sensor integration"
    ],
    applications: [
      "Remote property surveillance",
      "Construction site security",
      "Agricultural monitoring",
      "Wildlife observation",
      "Perimeter security",
      "Parking lot monitoring",
      "Border and checkpoint surveillance"
    ],
    technicalDetails: {
      energyEfficiency: "Ultra-low power standby mode",
      solarChargingEfficiency: "88%",
      controllerType: "Built-in MPPT with Battery Protection",
      displayType: "Mobile App Interface",
      connectivity: ["4G LTE", "WiFi Hotspot", "Bluetooth Setup"]
    },
    installation: {
      installationType: "Pole or wall mounting",
      maintenanceRequirement: "Monthly lens cleaning and battery check",
      setupTime: "1-2 hours installation and configuration"
    }
  },

  // POWER STORAGE SYSTEMS
  {
    id: "sa-powerbank-001",
    name: "EcoMoTech SolarPower Station Pro",
    model: "PWR-SOLAR-1000W",
    power: "1000W Output",
    solarPanelCapacity: "200W",
    batteryCapacity: "1000Wh Lithium",
    description: "Portable solar power station with multiple output options. Features fast charging, pure sine wave inverter, and can power small appliances and charge multiple devices simultaneously.",
    price: "$1,295",
    category: "power-storage",
    image: "/images/SolarAppliances/Power banks/20kmAh.webp",
    images: {
      main: "/images/SolarAppliances/Power banks/20kmAh.webp",
      gallery: [
        "/images/SolarAppliances/Power banks/20kmAh1.webp",
        "/images/SolarAppliances/Power banks/20kmAh ugrenn.webp",
        "/images/SolarAppliances/Power banks/20kmAh.webp",
      ]
    },
    specifications: {
      powerConsumption: "Input: Solar 200W max, AC 300W max",
      solarPanelWattage: "200W Foldable Monocrystalline",
      batteryType: "Lithium Iron Phosphate (LiFePO4)",
      batteryCapacity: "1000Wh (25.6V, 40Ah)",
      chargingTime: "5-6 hours solar, 3 hours AC",
      operatingTime: "Variable based on load",
      dimensions: "350 x 230 x 280 mm",
      weight: "13.5 kg",
      operatingTemperature: "-10°C to +40°C",
      certification: ["UL", "CE", "FCC", "PSE"],
      warranty: "5 years battery, 2 years electronics"
    },
    features: [
      "1000W pure sine wave AC inverter",
      "Multiple output ports (AC, USB-C PD, USB-A, 12V DC)",
      "Wireless charging pad",
      "LCD display with real-time monitoring",
      "Emergency LED flashlight with SOS mode",
      "Pass-through charging capability",
      "Expandable with additional battery packs",
      "Mobile app monitoring and control"
    ],
    applications: [
      "Emergency backup power",
      "Camping and outdoor activities",
      "Off-grid cabin power",
      "Mobile offices and workstations",
      "Medical equipment backup",
      "Event and festival power",
      "Construction site power"
    ],
    technicalDetails: {
      energyEfficiency: "90%+ inverter efficiency",
      solarChargingEfficiency: "95% MPPT",
      inverterType: "Pure Sine Wave",
      controllerType: "Advanced MPPT with LCD Display",
      displayType: "Color LCD Touch Screen",
      connectivity: ["WiFi", "Bluetooth", "Mobile App"]
    },
    installation: {
      installationType: "Portable - plug and play",
      maintenanceRequirement: "Minimal - keep clean and dry",
      setupTime: "Immediate use, 2 minutes solar panel setup"
    }
  },

  // COOKING APPLIANCES
  {
    id: "sa-cooker-001",
    name: "EcoMoTech SolarChef Rice Cooker",
    model: "COOK-SOLAR-3L",
    power: "3L Capacity",
    solarPanelCapacity: "150W",
    batteryCapacity: "30Ah Lithium",
    description: "Intelligent solar-powered rice cooker with multiple cooking programs. Features non-stick inner pot, keep-warm function, and energy-efficient heating technology.",
    price: "$425",
    category: "cooking",
    image:  "/images/SolarAppliances/Rice Cooker/rice cooker pv.avif",
    images: {
      main: "/images/SolarAppliances/Rice Cooker/24V-Portable-Solar-Battery-Power-Supply-Rice-Cooker-Cooking.avif",
      gallery: [
        "/images/SolarAppliances/Rice Cooker/rice cooker pv.jpeg",
         "/images/SolarAppliances/Rice Cooker/24V-Portable-Solar-Battery-Power-Supply-Rice-Cooker-Cooking.avif",
        "/images/SolarAppliances/Rice Cooker/rice cooker pv.jpeg",
      ]
    },
    specifications: {
      powerConsumption: "300W cooking, 50W keep-warm",
      solarPanelWattage: "150W Monocrystalline",
      batteryType: "Lithium Ion",
      batteryCapacity: "30Ah / 360Wh",
      chargingTime: "4-6 hours (optimal sunlight)",
      operatingTime: "Multiple cooking cycles per charge",
      dimensions: "280 x 280 x 220 mm",
      weight: "3.8 kg",
      operatingTemperature: "5°C to +40°C ambient",
      certification: ["CE", "ROHS", "Food Grade"],
      warranty: "2 years comprehensive"
    },
    features: [
      "3L capacity (serves 4-6 people)",
      "8 preset cooking programs",
      "Fuzzy logic temperature control",
      "Non-stick ceramic inner pot",
      "24-hour keep-warm function",
      "Delay timer up to 12 hours",
      "Steam basket included",
      "Easy-clean removable components"
    ],
    applications: [
      "Off-grid home cooking",
      "Camping and outdoor cooking",
      "Emergency food preparation",
      "Solar-powered kitchens",
      "Remote location catering",
      "Eco-friendly restaurants"
    ],
    technicalDetails: {
      energyEfficiency: "Induction heating technology",
      solarChargingEfficiency: "90%",
      controllerType: "Built-in charge controller",
      displayType: "LED Digital Display",
      connectivity: ["Manual Controls", "Timer Display"]
    },
    installation: {
      installationType: "Countertop appliance",
      maintenanceRequirement: "Regular cleaning after use",
      setupTime: "5 minutes setup and first use"
    }
  }
];

export const getSolarAppliancesByCategory = (category: SolarAppliance['category']) => {
  return solarAppliancesData.filter(appliance => appliance.category === category);
};

export const getSolarApplianceById = (id: string) => {
  return solarAppliancesData.find(appliance => appliance.id === id);
};

export const solarApplianceCategories = [
  { id: 'cooling', name: 'Solar Air Conditioning', count: getSolarAppliancesByCategory('cooling').length },
  { id: 'ventilation', name: 'Solar Ventilation', count: getSolarAppliancesByCategory('ventilation').length },
  { id: 'refrigeration', name: 'Solar Refrigeration', count: getSolarAppliancesByCategory('refrigeration').length },
  { id: 'security', name: 'Solar Security Systems', count: getSolarAppliancesByCategory('security').length },
  { id: 'power-storage', name: 'Solar Power Stations', count: getSolarAppliancesByCategory('power-storage').length },
  { id: 'cooking', name: 'Solar Cooking Appliances', count: getSolarAppliancesByCategory('cooking').length }
];
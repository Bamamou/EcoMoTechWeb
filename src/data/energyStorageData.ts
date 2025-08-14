export interface BatterySystem {
  id: string;
  name: string;
  capacity: string;
  image: string;
  images: {
    main: string;
    gallery: string[];
  };
  description: string;
  price: string;
  details: {
    specifications: {
      nominalVoltage: string;
      capacity: string;
      maxCharge: string;
      maxDischarge: string;
      cycleLife: string;
      efficiency: string;
    };
    physical: {
      dimensions: string;
      weight: string;
      ipRating: string;
      operatingTemp: string;
    };
    features: string[];
    protection: string[];
    certification: string[];
    warranty: string;
  };
}

export const batteryProducts: BatterySystem[] = [
    {
        id: "EcoStore AIO 200",
        name: "EcoStore AIO 200",
        capacity: "300W",
        image: "images/BESS/200W2.jpg",
        images: {
            main: "images/BESS/200W2.jpg",
            gallery: [
                "images/BESS/200W.jpg",
              "images/BESS/200Wback.jpg",
             "images/BESS/200W1.jpg",
              "images/BESS/200W2.jpg",
            ]
          },
        description: "Compact all-in-one energy storage system with built-in inverter",
        price: "Starting from $60",
        details: {
          specifications: {
            nominalVoltage: "12V",
            capacity: "25Ah / 300Wh",
            maxCharge: "15A",
            maxDischarge: "15A",
            cycleLife: "3000+ cycles",
            efficiency: "≥92%"
          },
          physical: {
            dimensions: "320 x 260 x 150mm",
            weight: "8kg",
            ipRating: "IP54",
            operatingTemp: "0°C to 40°C"
          },
          features: [
            "Integrated 300W inverter",
            "LED status display",
            "Bluetooth connectivity",
            "Plug-and-play design",
            "Portable handle",
            "Multiple output ports",
          ],
          protection: [
            "Basic BMS protection",
            "Short circuit protection",
            "Temperature monitoring",
            "Overload protection",
            "Low voltage cutoff",
            "Over-voltage protection",
            "Over-current protection",
            "Reverse polarity protection",


          ],
          certification: [
            "CE",
            "RoHS",
            "FCC",
            "UN38.3"
          ],
          warranty: "5 years or 3000 cycles"
        }
      },
    {
        id: "EcoStore AIO 300",
        name: "EcoStore AIO 300",
        capacity: "300W",
        image: "/EcoMoTechWeb/images/BESS/300.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/EcoStore AIO 301.webp",
            gallery: [
                "/EcoMoTechWeb/images/BESS/EcoStore AIO 301.webp",
              "/EcoMoTechWeb/images/BESS/EcoStore AIO 303.webp",
             "/EcoMoTechWeb/images/BESS/EcoStore AIO 304.webp",
              "/EcoMoTechWeb/images/BESS/EcoStore AIO 300 back.jpg",
            ]
          },
        description: "Compact all-in-one energy storage system with built-in inverter",
        price: "Starting from $100",
        details: {
          specifications: {
            nominalVoltage: "12V",
            capacity: "25Ah / 300Wh",
            maxCharge: "15A",
            maxDischarge: "15A",
            cycleLife: "3000+ cycles",
            efficiency: "≥92%"
          },
          physical: {
            dimensions: "320 x 260 x 150mm",
            weight: "8kg",
            ipRating: "IP54",
            operatingTemp: "0°C to 40°C"
          },
          features: [
            "Integrated 300W inverter",
            "LED status display",
            "Bluetooth connectivity",
            "Plug-and-play design",
            "Portable handle",
            "Multiple output ports",
          ],
          protection: [
            "Basic BMS protection",
            "Short circuit protection",
            "Temperature monitoring",
            "Overload protection",
            "Low voltage cutoff",
            "Over-voltage protection",
            "Over-current protection",
            "Reverse polarity protection",


          ],
          certification: [
            "CE",
            "RoHS",
            "FCC",
            "UN38.3"
          ],
          warranty: "5 years or 3000 cycles"
        }
      },

      {
        id: "EcoStore AIO 300W",
        name: "EcoStore AIS 300",
        capacity: "300W",
        image: "/EcoMoTechWeb/images/BESS/300W2.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/EcoStore AIO 301.webp",
            gallery: [
              "/EcoMoTechWeb/images/BESS/300W.jpg",
              "/EcoMoTechWeb/images/BESS/300W3.jpg",
              "/EcoMoTechWeb/images/BESS/300W4.jpg",
              "/EcoMoTechWeb/images/BESS/300W2.jpg",
            ]
          },
        description: "Compact all-in-one energy storage system with built-in inverter",
        price: "Starting from $100",
        details: {
          specifications: {
            nominalVoltage: "12V",
            capacity: "25Ah / 300Wh",
            maxCharge: "15A",
            maxDischarge: "15A",
            cycleLife: "3000+ cycles",
            efficiency: "≥92%"
          },
          physical: {
            dimensions: "320 x 260 x 150mm",
            weight: "8kg",
            ipRating: "IP54",
            operatingTemp: "0°C to 40°C"
          },
          features: [
            "Integrated 300W inverter",
            "LED status display",
            "Bluetooth connectivity",
            "Plug-and-play design",
            "Portable handle",
            "Multiple output ports",
          ],
          protection: [
            "Basic BMS protection",
            "Short circuit protection",
            "Temperature monitoring",
            "Overload protection",
            "Low voltage cutoff",
            "Over-voltage protection",
            "Over-current protection",
            "Reverse polarity protection",


          ],
          certification: [
            "CE",
            "RoHS",
            "FCC",
            "UN38.3"
          ],
          warranty: "5 years or 3000 cycles"
        }
      },
      
      {
        id: "EcoStore AIO 350",
        name: "EcoStore AIS 350",
        capacity: "350W",
        image: "/EcoMoTechWeb/images/BESS/350W3.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/EcoStore AIO 301.webp",
            gallery: [
              "/EcoMoTechWeb/images/BESS/350W1.jpg",
              "/EcoMoTechWeb/images/BESS/350W3.jpg",
              "/EcoMoTechWeb/images/BESS/350W1.jpg",
              "/EcoMoTechWeb/images/BESS/350W.jpg",
            ]
          },
        description: "Compact all-in-one energy storage system with built-in inverter",
        price: "Starting from $100",
        details: {
          specifications: {
            nominalVoltage: "12V",
            capacity: "25Ah / 300Wh",
            maxCharge: "15A",
            maxDischarge: "15A",
            cycleLife: "3000+ cycles",
            efficiency: "≥92%"
          },
          physical: {
            dimensions: "320 x 260 x 150mm",
            weight: "8kg",
            ipRating: "IP54",
            operatingTemp: "0°C to 40°C"
          },
          features: [
            "Integrated 300W inverter",
            "LED status display",
            "Bluetooth connectivity",
            "Plug-and-play design",
            "Portable handle",
            "Multiple output ports",
          ],
          protection: [
            "Basic BMS protection",
            "Short circuit protection",
            "Temperature monitoring",
            "Overload protection",
            "Low voltage cutoff",
            "Over-voltage protection",
            "Over-current protection",
            "Reverse polarity protection",


          ],
          certification: [
            "CE",
            "RoHS",
            "FCC",
            "UN38.3"
          ],
          warranty: "5 years or 3000 cycles"
        }
      },



      {
        id: "EcoStore AIO 500",
        name: "EcoStore AIO 500",
        capacity: "500W",
        image: "/EcoMoTechWeb/images/BESS/aio500.webp",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio500-front.webp",
              "/EcoMoTechWeb/images/BESS/aio500-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio500-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio500-display.jpg"
            ]
          },
        description: "Versatile all-in-one solution for home backup power",
        price: "Starting from $399",
        details: {
          specifications: {
            nominalVoltage: "24V",
            capacity: "20Ah / 500Wh",
            maxCharge: "20A",
            maxDischarge: "20A",
            cycleLife: "4000+ cycles ",
            efficiency: "≥93%"
          },
          physical: {
            dimensions: "380 x 280 x 180mm",
            weight: "12kg",
            ipRating: "IP54",
            operatingTemp: "-5°C to 45°C"
          },
          features: [
            "Integrated 500W inverter",
            "LCD display",
            "WiFi/Bluetooth monitoring",
            "Multiple AC outlets",
            "USB-A/USB-C ports"
          ],
          protection: [
            "Advanced BMS",
            "Surge protection",
            "Over-temperature protection",
            "Short circuit protection",
            "Over-current protection",
            "Over-discharge protection",
            "Over-voltage protection",
            "Under-voltage protection",


          ],
          certification: [
            "CE",
            "RoHS",
            "FCC",
            "ETL",
            "UN38.3"
          ],
          warranty: "7 years or 4000 cycles"
        }
      },
      {
        id: "EcoStore AIO 600",
        name: "EcoStore AIO 600",
        capacity: "600W",
        image: "/EcoMoTechWeb/images/BESS/600W.png",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/600W.png",
              "/EcoMoTechWeb/images/BESS/600W.png",
              "/EcoMoTechWeb/images/BESS/600W.png",
              "/EcoMoTechWeb/images/BESS/600W.png",
            ]
          },
        description: "Professional all-in-one ESS for small offices and homes",
        price: "Starting from $499",
        details: {
          specifications: {
            nominalVoltage: "24V",
            capacity: "25Ah / 600Wh",
            maxCharge: "25A",
            maxDischarge: "25A",
            cycleLife: "5000+ cycles ",
            efficiency: "≥94%"
          },
          physical: {
            dimensions: "420 x 320 x 200mm",
            weight: "15kg",
            ipRating: "IP55",
            operatingTemp: "-10°C to 45°C"
          },
          features: [
            "Integrated 600W inverter",
            "Color LCD display",
            "Smart app control",
            "Dual AC outputs",
            "DC output ports"
          ],
          protection: [
            "Smart BMS system",
            "Multi-level protection",
            "Temperature management",
            "Overload protection",
            "Short circuit prevention"
          ],
          certification: [
            "CE",
            "TÜV",
            "FCC",
            "RoHS",
            "UN38.3"
          ],
          warranty: "8 years or 5000 cycles"
        }
      },
      {
        id: "EcoStore AIO 650",
        name: "EcoStore AIO 650",
        capacity: "600W",
        image: "/EcoMoTechWeb/images/BESS/650W.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/650W1.jpg",
              "/EcoMoTechWeb/images/BESS/650W.jpg",
              "/EcoMoTechWeb/images/BESS/650W.jpg",
              "/EcoMoTechWeb/images/BESS/650W.jpg",
            ]
          },
        description: "Professional all-in-one ESS for small offices and homes",
        price: "Starting from $500",
        details: {
          specifications: {
            nominalVoltage: "24V",
            capacity: "35Ah / 650Wh",
            maxCharge: "25A",
            maxDischarge: "25A",
            cycleLife: "5000+ cycles ",
            efficiency: "≥94%"
          },
          physical: {
            dimensions: "420 x 320 x 200mm",
            weight: "15kg",
            ipRating: "IP55",
            operatingTemp: "-10°C to 45°C"
          },
          features: [
            "Integrated 600W inverter",
            "Color LCD display",
            "Smart app control",
            "Dual AC outputs",
            "DC output ports"
          ],
          protection: [
            "Smart BMS system",
            "Multi-level protection",
            "Temperature management",
            "Overload protection",
            "Short circuit prevention"
          ],
          certification: [
            "CE",
            "TÜV",
            "FCC",
            "RoHS",
            "UN38.3"
          ],
          warranty: "8 years or 5000 cycles"
        }
      },
      {
        id: "EcoStore AIO 700",
        name: "EcoStore AIO 700",
        capacity: "600W",
        image: "/EcoMoTechWeb/images/BESS/700W1.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/700W.jpg",
              "/EcoMoTechWeb/images/BESS/700W2.jpg",
              "/EcoMoTechWeb/images/BESS/700W1.jpg",
              "/EcoMoTechWeb/images/BESS/700W3.jpg",
            ]
          },
        description: "Professional all-in-one ESS for small offices and homes",
        price: "Starting from $600",
        details: {
          specifications: {
            nominalVoltage: "24V",
            capacity: "35Ah / 650Wh",
            maxCharge: "25A",
            maxDischarge: "25A",
            cycleLife: "5000+ cycles ",
            efficiency: "≥94%"
          },
          physical: {
            dimensions: "420 x 320 x 200mm",
            weight: "15kg",
            ipRating: "IP55",
            operatingTemp: "-10°C to 45°C"
          },
          features: [
            "Integrated 600W inverter",
            "Color LCD display",
            "Smart app control",
            "Dual AC outputs",
            "DC output ports"
          ],
          protection: [
            "Smart BMS system",
            "Multi-level protection",
            "Temperature management",
            "Overload protection",
            "Short circuit prevention"
          ],
          certification: [
            "CE",
            "TÜV",
            "FCC",
            "RoHS",
            "UN38.3"
          ],
          warranty: "8 years or 5000 cycles"
        }
      },
      {
        id: "EcoStore AIO 800",
        name: "EcoStore AIO 800",
        capacity: "800W",
        image: "/EcoMoTechWeb/images/BESS/800Wt.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/800W.jpg",
              "/EcoMoTechWeb/images/BESS/800Wt2.jpg",
              "/EcoMoTechWeb/images/BESS/800W1.jpg",
              "/EcoMoTechWeb/images/BESS/800Wt.jpg"
            ]
          },
        description: "High-performance all-in-one ESS for demanding applications",
        price: "Starting from $699",
        details: {
          specifications: {
            nominalVoltage: "24V",
            capacity: "33Ah / 800Wh",
            maxCharge: "30A",
            maxDischarge: "30A",
            cycleLife: "6000+ cycles ",
            efficiency: "≥95%"
          },
          physical: {
            dimensions: "450 x 350 x 220mm",
            weight: "18kg",
            ipRating: "IP55",
            operatingTemp: "-15°C to 50°C"
          },
          features: [
            "Integrated 800W inverter",
            "Touch screen display",
            "4G/WiFi connectivity",
            "Multiple output options",
            "Emergency power mode"
          ],
          protection: [
            "Intelligent BMS",
            "Active cooling system",
            "Surge protection",
            "Over/under voltage protection",
            "Temperature monitoring"
          ],
          certification: [
            "CE",
            "TÜV",
            "FCC",
            "UL",
            "UN38.3"
          ],
          warranty: "10 years or 6000 cycles"
        }
      },
    
      // Second row - Medium All-in-One ESS
      {
        id: "EcoStore AIO 1000",
        name: "EcoStore AIO 1000",
        capacity: "1kW",
        image: "/EcoMoTechWeb/images/BESS/1kW.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/1kW.jpg",
              "/EcoMoTechWeb/images/BESS/1kW.jpg",
              "/EcoMoTechWeb/images/BESS/1kW.jpg",
              "/EcoMoTechWeb/images/BESS/1kW.jpg"
            ]
          },
        description: "Professional-grade all-in-one ESS for medium-sized applications",
        price: "Starting from $799",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "20Ah / 1kWh",
            maxCharge: "35A",
            maxDischarge: "35A",
            cycleLife: "7000+ cycles ",
            efficiency: "≥96%"
          },
          physical: {
            dimensions: "500 x 400 x 250mm",
            weight: "25kg",
            ipRating: "IP65",
            operatingTemp: "-20°C to 50°C"
          },
          features: [
            "Integrated 1kW inverter",
            "7-inch touch display",
            "5G/WiFi connectivity",
            "Smart home integration",
            "UPS functionality"
          ],
          protection: [
            "Advanced BMS system",
            "Active thermal management",
            "Arc fault protection",
            "Grid protection",
            "EMI filtering"
          ],
          certification: [
            "CE",
            "TÜV",
            "UL",
            "IEC62619",
            "VDE2510"
          ],
          warranty: "12 years or 7000 cycles"
        }
      },
      {
        id: "EcoStore AIO 1500",
        name: "EcoStore AIO 1500",
        capacity: "1.5kW",
        image: "/EcoMoTechWeb/images/BESS/1500W.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
                "/EcoMoTechWeb/images/BESS/1501W.jpg",
                "/EcoMoTechWeb/images/BESS/1502W.jpg",
                "/EcoMoTechWeb/images/BESS/1505.jpg",
                "/EcoMoTechWeb/images/BESS/1500W.jpg"
            ]
          },
        description: "Advanced all-in-one ESS for large homes and small businesses",
        price: "Starting from $899",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "31.25Ah / 1.5kWh",
            maxCharge: "40A",
            maxDischarge: "40A",
            cycleLife: "8000+ cycles ",
            efficiency: "≥97%"
          },
          physical: {
            dimensions: "550 x 450 x 280mm",
            weight: "32kg",
            ipRating: "IP65",
            operatingTemp: "-25°C to 55°C"
          },
          features: [
            "Integrated 1.5kW inverter",
            "10-inch smart display",
            "IoT enabled",
            "Three-phase compatible",
            "Backup power mode"
          ],
          protection: [
            "Smart BMS with AI",
            "Liquid cooling system",
            "Surge protection",
            "Ground fault monitoring",
            "Anti-islanding"
          ],
          certification: [
            "CE",
            "TÜV",
            "UL",
            "IEC62619",
            "VDE2510",
            "AS4777"
          ],
          warranty: "15 years or 8000 cycles"
        }
      },
      {
        id: "EcoStore AIO 2000",
        name: "EcoStore AIO 2000",
        capacity: "2kW",
        image: "/EcoMoTechWeb/images/BESS/aio2000.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "Commercial all-in-one ESS with advanced features",
        price: "Starting from $999",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "41.6Ah / 2kWh",
            maxCharge: "45A",
            maxDischarge: "45A",
            cycleLife: "9000+ cycles ",
            efficiency: "≥97.5%"
          },
          physical: {
            dimensions: "600 x 500 x 300mm",
            weight: "38kg",
            ipRating: "IP65",
            operatingTemp: "-30°C to 60°C"
          },
          features: [
            "Integrated 2kW inverter",
            "12-inch smart display",
            "Cloud monitoring",
            "Grid-tie ready",
            "Peak shaving capability"
          ],
          protection: [
            "Enterprise BMS",
            "Active cooling",
            "Dual MCU protection",
            "Leakage protection",
            "Smart grid protection"
          ],
          certification: [
            "CE",
            "TÜV",
            "UL",
            "IEC62619",
            "VDE2510",
            "AS4777",
            "G99"
          ],
          warranty: "15 years or 9000 cycles"
        }
      },
      {
        id: "EcoStore AIO 3000",
        name: "EcoStore AIO 3000",
        capacity: "3kW",
        image: "/EcoMoTechWeb/images/BESS/aio3000.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "Industrial all-in-one ESS for demanding commercial applications",
        price: "Starting from $1099",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "62.5Ah / 3kWh",
            maxCharge: "50A",
            maxDischarge: "50A",
            cycleLife: "10000+ cycles ",
            efficiency: "≥98%"
          },
          physical: {
            dimensions: "650 x 550 x 350mm",
            weight: "45kg",
            ipRating: "IP65",
            operatingTemp: "-35°C to 65°C"
          },
          features: [
            "Integrated 3kW inverter",
            "15-inch industrial display",
            "Remote management",
            "Microgrid capability",
            "Load scheduling"
          ],
          protection: [
            "Military-grade BMS",
            "Liquid cooling system",
            "Redundant protection",
            "Anti-theft system",
            "Fire suppression ready"
          ],
          certification: [
            "CE",
            "TÜV",
            "UL",
            "IEC62619",
            "VDE2510",
            "AS4777",
            "G99",
            "ISO9001"
          ],
          warranty: "20 years or 10000 cycles"
        }
      },
    
      // Third row - Existing battery products
      {
        id: "EcoStore Home 5",
        name: "EcoStore Home 5",
        capacity: "5kWh",
        image: "/EcoMoTechWeb/images/BESS/home5.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "Perfect entry-level battery storage for residential solar systems",
        price: "Starting from $1199",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "100Ah / 5kWh",
            maxCharge: "50A",
            maxDischarge: "50A",
            cycleLife: "6000+ cycles ",
            efficiency: "≥95%"
          },
          physical: {
            dimensions: "600 x 480 x 200mm",
            weight: "55kg",
            ipRating: "IP65",
            operatingTemp: "-10°C to 45°C"
          },
          features: [
            "Built-in BMS",
            "LCD Display",
            "WiFi Monitoring",
            "Expandable up to 4 units",
            "Wall-mounted design"
          ],
          protection: [
            "Over-voltage protection",
            "Under-voltage protection",
            "Short circuit protection",
            "Temperature protection",
            "Over-current protection"
          ],
          certification: [
            "CE",
            "RoHS",
            "UN38.3",
            "IEC62619"
          ],
          warranty: "10 years or 6000 cycles"
        }
      },
      {
        id: "EcoStore Pro 10",
        name: "EcoStore Pro 10",
        capacity: "10kWh",
        image: "/EcoMoTechWeb/images/BESS/pro10.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "Advanced energy storage solution for medium-sized homes",
        price: "Starting from $1499",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "200Ah / 10kWh",
            maxCharge: "100A",
            maxDischarge: "100A",
            cycleLife: "8000+ cycles ",
            efficiency: "≥96%"
          },
          physical: {
            dimensions: "650 x 550 x 250mm",
            weight: "95kg",
            ipRating: "IP65",
            operatingTemp: "-20°C to 50°C"
          },
          features: [
            "Advanced BMS",
            "Touch Screen Display",
            "4G/WiFi Connectivity",
            "Expandable up to 8 units",
            "Floor-standing design"
          ],
          protection: [
            "Multi-level BMS protection",
            "Cell balancing",
            "Thermal management",
            "Surge protection",
            "Ground fault monitoring"
          ],
          certification: [
            "CE",
            "TÜV",
            "IEC62619",
            "UN38.3",
            "VDE2510"
          ],
          warranty: "12 years or 8000 cycles"
        }
      },
      {
        id: "EcoStore Max 15",
        name: "EcoStore Max 15",
        capacity: "15kWh",
        image: "/EcoMoTechWeb/images/BESS/max15.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "High-capacity storage for large residential and small commercial applications",
        price: "Starting from $1699",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "300Ah / 15kWh",
            maxCharge: "150A",
            maxDischarge: "150A",
            cycleLife: "10000+ cycles ",
            efficiency: "≥97%"
          },
          physical: {
            dimensions: "750 x 600 x 300mm",
            weight: "145kg",
            ipRating: "IP66",
            operatingTemp: "-30°C to 55°C"
          },
          features: [
            "AI-powered BMS",
            "7-inch Touch Display",
            "5G/4G/WiFi Connectivity",
            "Expandable up to 12 units",
            "Modular design"
          ],
          protection: [
            "Active thermal management",
            "Intelligent cell balancing",
            "Fire suppression system",
            "Multi-level surge protection",
            "Arc fault detection"
          ],
          certification: [
            "CE",
            "TÜV",
            "IEC62619",
            "UL1973",
            "VDE2510",
            "AS4086"
          ],
          warranty: "15 years or 10000 cycles"
        }
      },
      {
        id: "EcoStore Commercial 20",
        name: "EcoStore Commercial 20",
        capacity: "20kWh",
        image: "/EcoMoTechWeb/images/BESS/commercial20.jpg",
        images: {
            main: "/EcoMoTechWeb/images/BESS/aio300.jpg",
            gallery: [
              "/EcoMoTechWeb/images/BESS/aio300-front.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-side.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-back.jpg",
              "/EcoMoTechWeb/images/BESS/aio300-display.jpg"
            ]
          },
        description: "Industrial-grade energy storage for commercial and industrial use",
        price: "Starting from $2199",
        details: {
          specifications: {
            nominalVoltage: "48V",
            capacity: "400Ah / 20kWh",
            maxCharge: "200A",
            maxDischarge: "200A",
            cycleLife: "12000+ cycles ",
            efficiency: "≥98%"
          },
          physical: {
            dimensions: "800 x 650 x 350mm",
            weight: "185kg",
            ipRating: "IP66",
            operatingTemp: "-40°C to 60°C"
          },
          features: [
            "Enterprise-grade BMS",
            "10-inch Industrial Touch Display",
            "5G/Ethernet Connectivity",
            "Expandable up to 16 units",
            "Rack-mounted design"
          ],
          protection: [
            "Advanced thermal management",
            "Real-time cell monitoring",
            "Automatic fire suppression",
            "Industrial surge protection",
            "Predictive fault detection"
          ],
          certification: [
            "CE",
            "TÜV",
            "IEC62619",
            "UL1973",
            "VDE2510",
            "AS4086",
            "ISO9001"
          ],
          warranty: "20 years or 12000 cycles"
        }
      }
  // Add more battery products as needed
];
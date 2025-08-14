import { updateImagePaths } from '@/utils/updateImagePaths';

export interface HomeSystem {
  id: string;
  name: string;
  power: string;
  description: string;
  price: string;
  image: string;
  details: {
    panels: {
      manufacturer: string;
      model: string;
      power: string;
      type: string;
      quantity: number;
      totalPower: string;
    };
    battery: {
      type: string;
      manufacturer: string;
      model: string;
      voltage: string;
      capacity: string;
      quantity: number;
      totalCapacity: string;
    };
    inverter: {
      type: string;
      manufacturer: string;
      model: string;
      power: string;
      features: string[];
    };
    additionalComponents: {
      mounting: {
        type: string;
        material: string;
        features: string[];
      };
      electrical: {
        circuitBreakers: string[];
        powerMeter: string;
        junctionBox: string;
        cables: string[];
        connectors: string[];
      };
    };
  };
}

export const homeSystems: HomeSystem[] = [
  {
    id: "eco-pv-1", // Updated ID format
    name: "EcoPVsyst1",
    power: "1kWh",
    image: "images/HomeSystem/1kW.png",
    description: "Perfect starter solar system for small homes and basic power needs",
    price: "Starting from $500",
    details: {
      panels: {
        manufacturer: "JA Solar",
        model: "JAM60S20",
        power: "390W",
        type: "Monocrystalline",
        quantity: 3,
        totalPower: "1.17kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "B-Box HVM",
        voltage: "48V",
        capacity: "2.56kWh",
        quantity: 1,
        totalCapacity: "2.56kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Growatt",
        model: "SPH3000",
        power: "3kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "Emergency power supply",
          "98% efficiency"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "eco-pv-1.5", // Updated ID format
    name: "EcoPVsyst1.5",
    power: "1.5kWh",
    image: "images/HomeSystem/1.5.jpg",
    description: "Perfect starter solar system for small homes and basic power needs",
    price: "Starting from $650",
    details: {
      panels: {
        manufacturer: "JA Solar",
        model: "JAM60S20",
        power: "390W",
        type: "Monocrystalline",
        quantity: 3,
        totalPower: "1.17kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "B-Box HVM",
        voltage: "48V",
        capacity: "2.56kWh",
        quantity: 1,
        totalCapacity: "2.56kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Growatt",
        model: "SPH3000",
        power: "3kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "Emergency power supply",
          "98% efficiency"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },

  {
    id: "EcoPVsyst2", // Updated ID format
    name: "EcoPVsyst2",
    power: "2kWh",
    image: "images/HomeSystem/Solar-Kits-On-Grid.png",
    description: "Mid-sized system ideal for average family homes",
    price: "Starting from $700",
    details: {
      panels: {
        manufacturer: "Longi Solar",
        model: "LR4-60HPH",
        power: "400W",
        type: "Monocrystalline PERC",
        quantity: 5,
        totalPower: "2kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "Pylontech",
        model: "US2000 Plus",
        voltage: "48V",
        capacity: "2.4kWh",
        quantity: 2,
        totalCapacity: "4.8kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Sungrow",
        model: "SH3K6",
        power: "3.6kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "Emergency power supply",
          "97.6% efficiency"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst3", // Updated ID format
    name: "EcoPVsyst3",
    power: "3kWh",
    image: "images/HomeSystem/3kW.webp",
    description: "Advanced system for larger homes with higher power consumption",
    price: "Starting from $800",
    details: {
      panels: {
        manufacturer: "Canadian Solar",
        model: "HiKu6",
        power: "410W",
        type: "Monocrystalline PERC",
        quantity: 8,
        totalPower: "3.28kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "B-Box Premium HVS",
        voltage: "48V",
        capacity: "2.56kWh",
        quantity: 3,
        totalCapacity: "7.68kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Goodwe",
        model: "GW5048D-ES",
        power: "5kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "UPS function",
          "98.4% efficiency"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },

  {
    id: "EcoPVsyst3.5", // Updated ID format
    name: "EcoPVsyst3.5",
    power: "3kWh",
    image: "images/HomeSystem/3.5kW.png",
    description: "Advanced system for larger homes with higher power consumption",
    price: "Starting from $850",
    details: {
      panels: {
        manufacturer: "Canadian Solar",
        model: "HiKu6",
        power: "410W",
        type: "Monocrystalline PERC",
        quantity: 8,
        totalPower: "3.28kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "B-Box Premium HVS",
        voltage: "48V",
        capacity: "2.56kWh",
        quantity: 3,
        totalCapacity: "7.68kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Goodwe",
        model: "GW5048D-ES",
        power: "5kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "UPS function",
          "98.4% efficiency"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst5", // Updated ID format
    name: "EcoPVsyst5",
    power: "5kWh",
    image: "images/HomeSystem/5kW.webp",
    description: "Premium system for complete energy independence",
    price: "Starting from $1000",
    details: {
      panels: {
        manufacturer: "SunPower",
        model: "Maxeon 5",
        power: "435W",
        type: "Monocrystalline IBC",
        quantity: 12,
        totalPower: "5.22kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "Tesla",
        model: "Powerwall+",
        voltage: "48V",
        capacity: "13.5kWh",
        quantity: 1,
        totalCapacity: "13.5kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Ecoverter",
        model: "EC8K-H",
        power: "8kW",
        features: [
          "Battery ready",
          "AI monitoring",
          "UPS function",
          "98.9% efficiency",
          "Smart home integration"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst6", // Updated ID format
    name: "EcoPVsyst6",
    power: "6kWh",
    image: "images/HomeSystem/5KW-Growatt.jpg",
    description: "Advanced system for large homes with significant power demands",
    price: "Starting from $1200",
    details: {
      panels: {
        manufacturer: "REC Solar",
        model: "Alpha Pure",
        power: "450W",
        type: "Monocrystalline N-type",
        quantity: 14,
        totalPower: "6.3kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "Battery-Box Premium HVS",
        voltage: "48V",
        capacity: "2.56kWh",
        quantity: 4,
        totalCapacity: "10.24kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Sungrow",
        model: "SH10RT",
        power: "10kW",
        features: [
          "Battery ready",
          "Smart monitoring",
          "UPS function",
          "98.6% efficiency",
          "Multi-MPPT tracking"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst8",
    name: "EcoPVsyst8",
    power: "8kWh",
    image: "images/HomeSystem/8kW.avif",
    description: "High-capacity system for energy-intensive residential applications",
    price: "Starting from $1500",
    details: {
      panels: {
        manufacturer: "LG Solar",
        model: "NeON R",
        power: "405W",
        type: "Monocrystalline N-type",
        quantity: 20,
        totalPower: "8.1kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "Tesla",
        model: "Powerwall 2",
        voltage: "48V",
        capacity: "13.5kWh",
        quantity: 2,
        totalCapacity: "27kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Goodwe",
        model: "ET10K",
        power: "10kW",
        features: [
          "Battery ready",
          "Advanced grid support",
          "Emergency power supply",
          "98.8% efficiency",
          "Remote monitoring"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst10",
    name: "EcoPVsyst10",
    power: "10kWh",
    image: "images/HomeSystem/10KW-solar-power-system.webp",
    description: "Commercial-grade system for businesses and large properties",
    price: "Starting from $2000",
    details: {
      panels: {
        manufacturer: "Panasonic",
        model: "EverVolt",
        power: "380W",
        type: "Monocrystalline HIT",
        quantity: 27,
        totalPower: "10.26kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "BYD",
        model: "Battery-Box Premium HVS",
        voltage: "48V",
        capacity: "5.12kWh",
        quantity: 4,
        totalCapacity: "20.48kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Ecoverter",
        model: "EC15K-H",
        power: "15kW",
        features: [
          "AI-powered monitoring",
          "Smart grid ready",
          "Multi-battery support",
          "99% efficiency",
          "Advanced power management"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  },
  {
    id: "EcoPVsyst15", // Updated ID format
    name: "EcoPVsyst15",
    power: "15kWh",
    image: "images/HomeSystem/15kW.jpg",
    description: "Industrial-scale system for maximum energy independence",
    price: "Starting from $2500",
    details: {
      panels: {
        manufacturer: "SunPower",
        model: "Maxeon 6",
        power: "440W",
        type: "Monocrystalline IBC",
        quantity: 35,
        totalPower: "15.4kWp"
      },
      battery: {
        type: "Lithium Iron Phosphate",
        manufacturer: "Tesla",
        model: "Powerwall+",
        voltage: "48V",
        capacity: "13.5kWh",
        quantity: 3,
        totalCapacity: "40.5kWh"
      },
      inverter: {
        type: "Hybrid",
        manufacturer: "Ecoverter",
        model: "EC20K-H",
        power: "20kW",
        features: [
          "AI-powered optimization",
          "Smart grid integration",
          "Multi-phase support",
          "99.2% efficiency",
          "Advanced fault detection",
          "Remote diagnostics"
        ]
      },
      additionalComponents: {
        mounting: {
          type: "",
          material: "",
          features: []
        },
        electrical: {
          circuitBreakers: [],
          powerMeter: "",
          junctionBox: "",
          cables: [],
          connectors: []
        }
      }
    }
  }
  // Add more systems as needed
];

// Export updated data with correct image paths
export const homeSystemsWithCorrectPaths = updateImagePaths(homeSystems);






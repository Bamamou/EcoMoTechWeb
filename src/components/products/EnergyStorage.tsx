import React from "react";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Battery, Zap, Shield, Settings } from "lucide-react";
import styles from '@/styles/EnergyStorage.module.css';

interface BatteryDetails {
  specifications: {
    nominalVoltage: string;
    capacity: string;
    maxChargeCurrent: string;
    maxDischargeCurrent: string;
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
}

const batteryProducts = [
  // First row - Small All-in-One ESS
  {
    name: "EcoStore AIO 300",
    capacity: "300W",
    image: "/images/batteries/aio300.jpg",
    description: "Compact all-in-one energy storage system with built-in inverter",
    price: "Starting from $699",
    details: {
      specifications: {
        nominalVoltage: "12V",
        capacity: "25Ah / 300Wh",
        maxChargeCurrent: "15A",
        maxDischargeCurrent: "15A",
        cycleLife: "3000+ cycles @ 80% DoD",
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
        "Portable handle"
      ],
      protection: [
        "Basic BMS protection",
        "Short circuit protection",
        "Temperature monitoring",
        "Overload protection",
        "Low voltage cutoff"
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
    name: "EcoStore AIO 500",
    capacity: "500W",
    image: "/images/batteries/aio500.jpg",
    description: "Versatile all-in-one solution for home backup power",
    price: "Starting from $999",
    details: {
      specifications: {
        nominalVoltage: "24V",
        capacity: "20Ah / 500Wh",
        maxChargeCurrent: "20A",
        maxDischargeCurrent: "20A",
        cycleLife: "4000+ cycles @ 80% DoD",
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
        "Over-current protection"
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
    name: "EcoStore AIO 600",
    capacity: "600W",
    image: "/images/batteries/aio600.jpg",
    description: "Professional all-in-one ESS for small offices and homes",
    price: "Starting from $1,299",
    details: {
      specifications: {
        nominalVoltage: "24V",
        capacity: "25Ah / 600Wh",
        maxChargeCurrent: "25A",
        maxDischargeCurrent: "25A",
        cycleLife: "5000+ cycles @ 80% DoD",
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
    name: "EcoStore AIO 800",
    capacity: "800W",
    image: "/images/batteries/aio800.jpg",
    description: "High-performance all-in-one ESS for demanding applications",
    price: "Starting from $1,599",
    details: {
      specifications: {
        nominalVoltage: "24V",
        capacity: "33Ah / 800Wh",
        maxChargeCurrent: "30A",
        maxDischargeCurrent: "30A",
        cycleLife: "6000+ cycles @ 80% DoD",
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
    name: "EcoStore AIO 1000",
    capacity: "1kW",
    image: "/images/batteries/aio1000.jpg",
    description: "Professional-grade all-in-one ESS for medium-sized applications",
    price: "Starting from $1,999",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "20Ah / 1kWh",
        maxChargeCurrent: "35A",
        maxDischargeCurrent: "35A",
        cycleLife: "7000+ cycles @ 80% DoD",
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
    name: "EcoStore AIO 1500",
    capacity: "1.5kW",
    image: "/images/batteries/aio1500.jpg",
    description: "Advanced all-in-one ESS for large homes and small businesses",
    price: "Starting from $2,499",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "31.25Ah / 1.5kWh",
        maxChargeCurrent: "40A",
        maxDischargeCurrent: "40A",
        cycleLife: "8000+ cycles @ 80% DoD",
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
    name: "EcoStore AIO 2000",
    capacity: "2kW",
    image: "/images/batteries/aio2000.jpg",
    description: "Commercial all-in-one ESS with advanced features",
    price: "Starting from $2,999",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "41.6Ah / 2kWh",
        maxChargeCurrent: "45A",
        maxDischargeCurrent: "45A",
        cycleLife: "9000+ cycles @ 80% DoD",
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
    name: "EcoStore AIO 3000",
    capacity: "3kW",
    image: "/images/batteries/aio3000.jpg",
    description: "Industrial all-in-one ESS for demanding commercial applications",
    price: "Starting from $3,999",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "62.5Ah / 3kWh",
        maxChargeCurrent: "50A",
        maxDischargeCurrent: "50A",
        cycleLife: "10000+ cycles @ 80% DoD",
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
    name: "EcoStore Home 5",
    capacity: "5kWh",
    image: "/images/batteries/home5.jpg",
    description: "Perfect entry-level battery storage for residential solar systems",
    price: "Starting from $3,499",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "100Ah / 5kWh",
        maxChargeCurrent: "50A",
        maxDischargeCurrent: "50A",
        cycleLife: "6000+ cycles @ 80% DoD",
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
    name: "EcoStore Pro 10",
    capacity: "10kWh",
    image: "/images/batteries/pro10.jpg",
    description: "Advanced energy storage solution for medium-sized homes",
    price: "Starting from $5,999",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "200Ah / 10kWh",
        maxChargeCurrent: "100A",
        maxDischargeCurrent: "100A",
        cycleLife: "8000+ cycles @ 80% DoD",
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
    name: "EcoStore Max 15",
    capacity: "15kWh",
    image: "/images/batteries/max15.jpg",
    description: "High-capacity storage for large residential and small commercial applications",
    price: "Starting from $8,499",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "300Ah / 15kWh",
        maxChargeCurrent: "150A",
        maxDischargeCurrent: "150A",
        cycleLife: "10000+ cycles @ 80% DoD",
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
    name: "EcoStore Commercial 20",
    capacity: "20kWh",
    image: "/images/batteries/commercial20.jpg",
    description: "Industrial-grade energy storage for commercial and industrial use",
    price: "Starting from $11,999",
    details: {
      specifications: {
        nominalVoltage: "48V",
        capacity: "400Ah / 20kWh",
        maxChargeCurrent: "200A",
        maxDischargeCurrent: "200A",
        cycleLife: "12000+ cycles @ 80% DoD",
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
];

const EnergyStorage = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Energy Storage Solutions</h1>
            <p className={`text-xl opacity-90 animate-fade-in ${styles.fadeInDelay}`}>
              Advanced lithium battery storage systems for residential and commercial applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {batteryProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className={styles.imageContainer}>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-ecomotech-green font-medium mb-2">{product.capacity} System</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-ecomotech-blue font-semibold mb-4">{product.price}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
                        View Specifications
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">{product.name} Specifications</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Battery className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Technical Specifications</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            {Object.entries(product.details.specifications).map(([key, value]) => (
                              <p key={key}>
                                <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Settings className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Physical Specifications</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            {Object.entries(product.details.physical).map(([key, value]) => (
                              <p key={key}>
                                <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Zap className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Features</h3>
                          </div>
                          <div className="pl-8">
                            <ul className="list-disc pl-5 space-y-1">
                              {product.details.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Shield className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Protection & Certification</h3>
                          </div>
                          <div className="pl-8 space-y-4">
                            <div>
                              <p className="font-medium mb-2">Protection Features:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                {product.details.protection.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium mb-2">Certifications:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                {product.details.certification.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium mb-2">Warranty:</p>
                              <p>{product.details.warranty}</p>
                            </div>
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

export default EnergyStorage;
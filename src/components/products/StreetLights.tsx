import React from "react";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sun, Battery, Zap, Timer, Moon } from "lucide-react";
import styles from '@/styles/StreetLights.module.css';

interface StreetlightDetails {
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
  };
  features: string[];
  controller: {
    type: string;
    features: string[];
  };
}

const streetlights = [
  {
    name: "EcoLight Urban 40",
    power: "40W",
    image: "/images/streetlights/60W.jpeg",
    description: "Smart solar street light perfect for residential areas and walkways",
    price: "Starting from $799",
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
      features: [
        "Motion sensor for adaptive lighting",
        "Remote monitoring capability",
        "3 lighting modes",
        "IP66 waterproof rating",
        "Anti-theft design",
        "5-year warranty"
      ],
      controller: {
        type: "MPPT",
        features: [
          "Smart dimming",
          "Temperature protection",
          "Overcharge protection",
          "Time control"
        ]
      }
    }
  },
  {
    name: "EcoLight Highway 100",
    power: "100W",
    image: "/images/streetlights/highway.jpg",
    description: "High-performance solar street light for highways and major roads",
    price: "Starting from $1,499",
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
      features: [
        "AI-powered lighting control",
        "GSM/4G connectivity",
        "5 lighting modes",
        "IP67 waterproof rating",
        "Wind resistance up to 180km/h",
        "7-year warranty"
      ],
      controller: {
        type: "Advanced MPPT",
        features: [
          "Intelligent power management",
          "Remote diagnostics",
          "Data logging",
          "Weather adaptive control"
        ]
      }
    }
  },
  {
    name: "EcoLight Smart 60",
    power: "60W",
    image: "/images/streetlights/80W.jpg",
    description: "Smart solar street light with advanced IoT features for urban applications",
    price: "Starting from $999",
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
      features: [
        "IoT connectivity",
        "Real-time monitoring",
        "Adaptive brightness control",
        "IP66 waterproof rating",
        "Vandal-resistant design",
        "6-year warranty"
      ],
      controller: {
        type: "Smart MPPT",
        features: [
          "Cloud connectivity",
          "Predictive maintenance",
          "Energy optimization",
          "Automatic scheduling"
        ]
      }
    }
  },
  {
    name: "EcoLight Pro 80",
    power: "80W",
    image: "/images/streetlights/400W.jpg",
    description: "Professional-grade solar street light with enhanced durability and performance",
    price: "Starting from $1,299",
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
      features: [
        "Professional monitoring system",
        "Advanced motion detection",
        "4 programmable modes",
        "IP67 waterproof rating",
        "Anti-corrosion coating",
        "8-year warranty"
      ],
      controller: {
        type: "Advanced MPPT",
        features: [
          "Dual MPPT tracking",
          "Remote configuration",
          "Performance analytics",
          "Adaptive charging"
        ]
      }
    }
  },
  {
    name: "EcoLight Ultra 120",
    power: "120W",
    image: "/images/streetlights/ultra.jpg",
    description: "Ultra-high performance solar street light for industrial and commercial areas",
    price: "Starting from $1,899",
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
      features: [
        "Industrial-grade construction",
        "Smart city integration",
        "6 lighting modes",
        "IP68 waterproof rating",
        "Hurricane-resistant design",
        "10-year warranty"
      ],
      controller: {
        type: "Smart MPPT+",
        features: [
          "AI-based power management",
          "Real-time monitoring",
          "Fault prediction",
          "Emergency protocols"
        ]
      }
    }
  },
  {
    name: "EcoLight Smart Plus 50",
    power: "50W",
    image: "/images/streetlights/smart Plus.jpg",
    description: "Energy-efficient smart street light with advanced connectivity features",
    price: "Starting from $899",
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
      features: [
        "Smart city compatible",
        "Mobile app control",
        "Automatic dimming",
        "IP66 waterproof rating",
        "Impact-resistant design",
        "7-year warranty"
      ],
      controller: {
        type: "Smart MPPT",
        features: [
          "WiFi connectivity",
          "Energy monitoring",
          "Load management",
          "OTA updates"
        ]
      }
    }
  },
  {
    name: "EcoLight Premium 150",
    power: "150W",
    image: "/images/streetlights/school.jpg",
    description: "Premium high-output solar street light for large commercial areas and highways",
    price: "Starting from $2,299",
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
      features: [
        "Dual light modules",
        "5G connectivity",
        "8 lighting modes",
        "IP68 waterproof rating",
        "Advanced thermal management",
        "12-year warranty"
      ],
      controller: {
        type: "Smart MPPT Pro",
        features: [
          "AI optimization",
          "Cloud integration",
          "Predictive maintenance",
          "Emergency response system"
        ]
      }
    }
  },
  {
    name: "EcoLight Solar Max 200",
    power: "200W",
    image: "/images/streetlights/good solar.webp",
    description: "Maximum performance solar street light for major highways and industrial complexes",
    price: "Starting from $2,999",
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
      features: [
        "Modular design",
        "Satellite connectivity",
        "10 lighting modes",
        "IP69K waterproof rating",
        "Self-cleaning solar panel",
        "15-year warranty"
      ],
      controller: {
        type: "Quantum MPPT",
        features: [
          "Machine learning optimization",
          "Remote diagnostics",
          "Autonomous operation",
          "Grid integration ready"
        ]
      }
    }
  },
  {
    name: "EcoLight Smart City 100",
    power: "100W",
    image: "/images/streetlights/sans battery.webp",
    description: "Smart city-focused solar street light with integrated IoT capabilities",
    price: "Starting from $1,699",
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
      features: [
        "Environmental sensors",
        "Traffic monitoring",
        "Air quality detection",
        "IP67 waterproof rating",
        "Digital display",
        "10-year warranty"
      ],
      controller: {
        type: "IoT MPPT",
        features: [
          "Smart city platform integration",
          "Real-time data analytics",
          "Automated reporting",
          "Weather adaptation"
        ]
      }
    }
  }
];

const Streetlights = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Solar Street Lights</h1>
            <p className={`text-xl opacity-90 animate-fade-in ${styles.fadeInDelay}`}>
              Advanced solar-powered lighting solutions for urban and rural applications, featuring smart controls and high efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streetlights.map((light, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className={styles.imageContainer}>
                  <img 
                    src={light.image}
                    alt={light.name}
                    className={styles.productImage}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{light.name}</h3>
                  <p className="text-ecomotech-green font-medium mb-2">{light.power} LED System</p>
                  <p className="text-gray-600 mb-4">{light.description}</p>
                  <p className="text-ecomotech-blue font-semibold mb-4">{light.price}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
                        View Specifications
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">{light.name} Details</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Sun className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Solar Panel</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            <p><span className="font-medium">Power:</span> {light.details.panel.power}</p>
                            <p><span className="font-medium">Type:</span> {light.details.panel.type}</p>
                            <p><span className="font-medium">Efficiency:</span> {light.details.panel.efficiency}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Battery className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Battery</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            <p><span className="font-medium">Type:</span> {light.details.battery.type}</p>
                            <p><span className="font-medium">Capacity:</span> {light.details.battery.capacity}</p>
                            <p><span className="font-medium">Lifespan:</span> {light.details.battery.lifespan}</p>
                            <p><span className="font-medium">Charging Time:</span> {light.details.battery.chargingTime}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Moon className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Light</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            <p><span className="font-medium">Type:</span> {light.details.light.type}</p>
                            <p><span className="font-medium">Power:</span> {light.details.light.power}</p>
                            <p><span className="font-medium">Lumens:</span> {light.details.light.lumens}</p>
                            <p><span className="font-medium">Color Temperature:</span> {light.details.light.colorTemp}</p>
                            <p><span className="font-medium">Coverage Area:</span> {light.details.light.coverage}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Timer className="h-6 w-6 text-ecomotech-blue" />
                            <h3 className="text-xl font-semibold">Controller & Features</h3>
                          </div>
                          <div className="pl-8 space-y-2">
                            <p><span className="font-medium">Controller Type:</span> {light.details.controller.type}</p>
                            <div className="space-y-1">
                              <p className="font-medium">Controller Features:</p>
                              <ul className="list-disc pl-5">
                                {light.details.controller.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-1 mt-4">
                              <p className="font-medium">Additional Features:</p>
                              <ul className="list-disc pl-5">
                                {light.details.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
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

export default Streetlights;
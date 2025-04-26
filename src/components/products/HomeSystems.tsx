import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Battery, Sun, Zap } from "lucide-react";
import styles from '@/styles/HomeSystems.module.css';

interface SystemDetails {
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
}

const homeSystems = [
  {
    name: "EcoPVsyst1",
    power: "1kWh",
    image: "/images/HomeSystem/1kW.avif",
    description: "Perfect starter solar system for small homes and basic power needs",
    price: "Starting from $1,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst2",
    power: "2kWh",
    image: "/images/HomeSystem/Solar-Kits-On-Grid.png",
    description: "Mid-sized system ideal for average family homes",
    price: "Starting from $3,499",
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
      }
    }
  },
  {
    name: "EcoPVsyst3",
    power: "3kWh",
    image: "/images/HomeSystem/3kW.webp",
    description: "Advanced system for larger homes with higher power consumption",
    price: "Starting from $4,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst5",
    power: "5kWh",
    image: "/images/HomeSystem/5kW.jpg",
    description: "Premium system for complete energy independence",
    price: "Starting from $7,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst6",
    power: "6kWh",
    image: "/images/HomeSystem/5KW-Growatt.jpg",
    description: "Advanced system for large homes with significant power demands",
    price: "Starting from $9,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst8",
    power: "8kWh",
    image: "/images/HomeSystem/8kW.jpg",
    description: "High-capacity system for energy-intensive residential applications",
    price: "Starting from $12,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst10",
    power: "10kWh",
    image: "/images/HomeSystem/10KW-solar-power-system.webp",
    description: "Commercial-grade system for businesses and large properties",
    price: "Starting from $15,999",
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
      }
    }
  },
  {
    name: "EcoPVsyst15",
    power: "15kWh",
    image: "/images/HomeSystem/15kW.jpg",
    description: "Industrial-scale system for maximum energy independence",
    price: "Starting from $22,999",
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
      }
    }
  }
];

const HomeSystems = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Solar Home Systems</h1>
            <p className={`text-xl opacity-90 animate-fade-in ${styles.fadeInDelay}`}>
              Complete residential solutions for energy independence and savings, tailored to your home's unique needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {homeSystems.map((system, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={system.image}
                    alt={system.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentSection}>
                  <h3 className={styles.productTitle}>{system.name}</h3>
                  <p className={styles.powerText}>{system.power} System</p>
                  <p className={styles.description}>{system.description}</p>
                  <p className={styles.price}>{system.price}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
                        View System Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">{system.name} Specifications</DialogTitle>
                      </DialogHeader>
                      <div className={styles.specificationSection}>
                        <div className="space-y-4">
                          <div className={styles.specificationTitle}>
                            <Sun className="h-6 w-6 text-ecomotech-blue" />
                            <h3>Solar Panels</h3>
                          </div>
                          <div className={styles.specificationContent}>
                            <p><span className="font-medium">Manufacturer:</span> {system.details.panels.manufacturer}</p>
                            <p><span className="font-medium">Model:</span> {system.details.panels.model}</p>
                            <p><span className="font-medium">Power per Panel:</span> {system.details.panels.power}</p>
                            <p><span className="font-medium">Type:</span> {system.details.panels.type}</p>
                            <p><span className="font-medium">Quantity:</span> {system.details.panels.quantity}</p>
                            <p><span className="font-medium">Total System Power:</span> {system.details.panels.totalPower}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className={styles.specificationTitle}>
                            <Battery className="h-6 w-6 text-ecomotech-blue" />
                            <h3>Battery System</h3>
                          </div>
                          <div className={styles.specificationContent}>
                            <p><span className="font-medium">Type:</span> {system.details.battery.type}</p>
                            <p><span className="font-medium">Manufacturer:</span> {system.details.battery.manufacturer}</p>
                            <p><span className="font-medium">Model:</span> {system.details.battery.model}</p>
                            <p><span className="font-medium">Voltage:</span> {system.details.battery.voltage}</p>
                            <p><span className="font-medium">Capacity per Unit:</span> {system.details.battery.capacity}</p>
                            <p><span className="font-medium">Quantity:</span> {system.details.battery.quantity}</p>
                            <p><span className="font-medium">Total Capacity:</span> {system.details.battery.totalCapacity}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className={styles.specificationTitle}>
                            <Zap className="h-6 w-6 text-ecomotech-blue" />
                            <h3>Inverter</h3>
                          </div>
                          <div className={styles.specificationContent}>
                            <p><span className="font-medium">Type:</span> {system.details.inverter.type}</p>
                            <p><span className="font-medium">Manufacturer:</span> {system.details.inverter.manufacturer}</p>
                            <p><span className="font-medium">Model:</span> {system.details.inverter.model}</p>
                            <p><span className="font-medium">Power Rating:</span> {system.details.inverter.power}</p>
                            <div className="space-y-1">
                              <p className="font-medium">Features:</p>
                              <ul className="list-disc pl-5">
                                {system.details.inverter.features.map((feature, idx) => (
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

export default HomeSystems;
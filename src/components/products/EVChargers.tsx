import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ResponsiveImage } from '@/components/ui/responsive-image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ChargingStation {
  id: string;
  name: string;
  power: string;
  type: string;
  image: string;
  description: string;
  price: string;
  specs: {
    inputVoltage: string;
    outputVoltage: string;
    maxCurrent: string;
    protection: string[];
    connectivity: string[];
    dimensions: string;
    weight: string;
    certification: string[];
    features: string[];
  };
}

const chargingStations: ChargingStation[] = [
  {
    id: "eco-charge-7-ac",
    name: "EcoCharge 7 AC",
    power: "7kW",
    type: "AC Type 2",
    image: "images/chargers/7kW.jpg",
    description: "Compact home charging solution with smart features",
    price: "Starting from $699",
    specs: {
      inputVoltage: "230V AC",
      outputVoltage: "230V AC",
      maxCurrent: "32A",
      protection: [
        "Over-voltage protection",
        "Under-voltage protection",
        "Lightning protection",
        "Leakage protection",
      ],
      connectivity: ["Bluetooth", "Wi-Fi", "Mobile App"],
      dimensions: "320 x 260 x 130 mm",
      weight: "5.2 kg",
      certification: ["CE", "TUV", "IEC 61851-1"],
      features: [
        "Smart scheduling",
        "Power monitoring",
        "Load balancing",
        "RFID authentication",
      ],
    },
  },
  {
    id: "eco-charge-11-ac",
    name: "EcoCharge 11 AC",
    power: "11kW",
    type: "AC Type 2",
    image: "images/chargers/11kW.jpg",
    description: "Three-phase charging station for faster home charging",
    price: "Starting from $899",
    specs: {
      inputVoltage: "400V AC 3-Phase",
      outputVoltage: "400V AC",
      maxCurrent: "16A per phase",
      protection: [
        "Over-current protection",
        "Short circuit protection",
        "Temperature protection",
        "Earth monitoring",
      ],
      connectivity: ["Wi-Fi", "4G", "OCPP 1.6J"],
      dimensions: "350 x 280 x 140 mm",
      weight: "6.5 kg",
      certification: ["CE", "IEC 61851-1", "ROHS"],
      features: [
        "Dynamic load balancing",
        "Solar integration",
        "Energy monitoring",
        "Remote management",
      ],
    },
  },
  {
    id: "eco-charge-22-ac",
    name: "EcoCharge 22 AC",
    power: "22kW",
    type: "AC Type 2",
    image: "images/chargers/22kW.jpg",
    description: "High-power commercial charging solution",
    price: "Starting from $1,299",
    specs: {
      inputVoltage: "400V AC 3-Phase",
      outputVoltage: "400V AC",
      maxCurrent: "32A per phase",
      protection: [
        "Over-voltage protection",
        "Leakage protection",
        "Surge protection",
        "Emergency stop",
      ],
      connectivity: ["4G", "Ethernet", "OCPP 1.6J", "RFID"],
      dimensions: "400 x 300 x 150 mm",
      weight: "8.5 kg",
      certification: ["CE", "IEC 61851-1", "ISO 15118"],
      features: [
        "Fleet management",
        "Payment integration",
        "Load balancing",
        "Priority charging",
      ],
    },
  },
  // Add three more chargers...
];

const EVChargers = () => {
  const [selectedCharger, setSelectedCharger] = useState<ChargingStation | null>(null);

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">EV Charging Solutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Advanced electric vehicle charging solutions for residential and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chargingStations.map((station) => (
              <div key={station.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ResponsiveImage
                  src={station.image}
                  alt={station.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{station.name}</h3>
                  <p className="text-gray-600 mb-4">{station.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-semibold">{station.power}</span>
                    <span className="text-gray-500">{station.type}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-4">{station.price}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full group relative inline-flex items-center justify-center 
                        bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 
                        overflow-hidden font-medium text-white rounded-xl shadow-md 
                        transition-all duration-300 ease-out hover:scale-105 
                        hover:shadow-xl active:scale-100"
                        onClick={() => setSelectedCharger(station)}
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all 
                        duration-1000 transform translate-x-12 bg-white opacity-10 
                        rotate-12 group-hover:-translate-x-96 ease"></span>
                        <span className="relative flex items-center gap-2">
                          View Specifications
                          <svg 
                            className="w-5 h-5 transition-transform duration-300 
                            group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{station.name} Specifications</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Technical Specifications</h4>
                          <ul className="space-y-2">
                            <li>Input Voltage: {station.specs.inputVoltage}</li>
                            <li>Output Voltage: {station.specs.outputVoltage}</li>
                            <li>Max Current: {station.specs.maxCurrent}</li>
                            <li>Dimensions: {station.specs.dimensions}</li>
                            <li>Weight: {station.specs.weight}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Features</h4>
                          <ul className="space-y-2">
                            {station.specs.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
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

export default EVChargers;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/responsive-image";

const products = [
  {
    id: "solar-panels",
    title: "Solar Panels",
    description: "High-efficiency photovoltaic modules designed for maximum energy capture.",
    image: "images/Solar panels/PV.webp",
    link: "/products/solar-panels"
  },
  {
    id: "solar-inverters",
    title: "Solar Inverters",
    description: "Advanced inverter technology to convert DC electricity to usable AC power.",
    image: "images/Inverters/Growatt poducts inv.png",
    link: "/products/solar-inverters"
  },
  {
    id: "home-systems",
    title: "Solar Home Systems",
    description: "Complete residential solutions for energy independence and savings.",
    image: "images/HomeSystem/6kW.jpg",
    link: "/products/home-systems"
  },
  {
    id: "street-lights",
    title: "Solar Street Lights",
    description: "Autonomous lighting solutions for roadways, pathways, and public spaces.",
    image:"images/streetlights/road.jpg",
    link: "/products/street-lights"
  },
  {
    id: "energy-storage",
    title: "Energy Storage Systems",
    description: "Battery solutions to store excess energy for use when needed.",
    image: "images/BESS/battery system.webp",
    link: "/products/energy-storage"
  },
  {
    id: "solar-pumbs",
    title: "Solar Water Pumps",
    description: "Efficient solar-powered pumps for agricultural and irrigation needs.",
    image: "images/Solar pumbs/SolarPumbs.jpeg",
    link: "/products/solar-pumbs"
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-ecomotech-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our comprehensive range of solar power products designed for efficiency, durability, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-60 overflow-hidden">
                <ResponsiveImage 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={product.link} 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center bg-ecomotech-blue hover:bg-ecomotech-dark-blue text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

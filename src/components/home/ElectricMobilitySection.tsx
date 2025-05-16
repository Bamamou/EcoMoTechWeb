import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bike, BatteryCharging } from "lucide-react";

const mobilityProducts = [
  {
    id: "electric-motorcycles",
    title: "Electric Motorcycles",
    description: "High-performance electric motorcycles for urban mobility.",
    image: "/EcoMoTechWeb/images/Electric motorcycles/DM green.jpg",
    link: "/products/electric-motorcycles"
  },
  {
    id: "electric-tricycles",
    title: "Electric Tricycles",
    description: "Versatile electric tricycles for commercial and personal use.",
    image: "/EcoMoTechWeb/images/Electric motorcycles/Higo white.webp",
    link: "/products/electric-tricycles"
  },
  {
    id: "ev-chargers",
    title: "EV Chargers",
    description: "Advanced charging solutions for home and commercial applications.",
    image: "/EcoMoTechWeb/images/chargers/charger design.png",
    link: "/products/ev-chargers"
  }
];

const ElectricMobilitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electric Mobility Solutions</h2>
          <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our range of sustainable electric mobility solutions designed for modern transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobilityProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-60 overflow-hidden">
                <img 
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
            to="/products#electric-mobility" 
            className="inline-flex items-center bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>View All Electric Mobility Products</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobilitySection;

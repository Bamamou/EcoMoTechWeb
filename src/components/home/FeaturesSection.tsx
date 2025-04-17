
import React from "react";
import { Sun, Battery, Award, Clock, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: <Sun className="w-12 h-12 text-ecomotech-green" />,
    title: "High Efficiency",
    description: "Our solar panels convert more sunlight into electricity, maximizing your energy production and savings."
  },
  {
    icon: <Battery className="w-12 h-12 text-ecomotech-green" />,
    title: "Energy Storage",
    description: "Advanced storage systems that ensure power availability even when the sun isn't shining."
  },
  {
    icon: <Award className="w-12 h-12 text-ecomotech-green" />,
    title: "Superior Quality",
    description: "Products crafted with premium materials and rigorous testing to ensure long-lasting performance."
  },
  {
    icon: <Clock className="w-12 h-12 text-ecomotech-green" />,
    title: "Quick Installation",
    description: "Professional installation services that get your system up and running in minimal time."
  },
  {
    icon: <Shield className="w-12 h-12 text-ecomotech-green" />,
    title: "Warranty Protection",
    description: "Comprehensive warranty coverage giving you peace of mind for your investment."
  },
  {
    icon: <Leaf className="w-12 h-12 text-ecomotech-green" />,
    title: "Eco-Friendly",
    description: "Clean energy solutions that significantly reduce carbon emissions and environmental impact."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ecomotech</h2>
          <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're committed to providing superior solar solutions that deliver lasting value for our customers while protecting the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-ecomotech-light-gray p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-b-4 hover:border-ecomotech-green group"
            >
              <div className="mb-6 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

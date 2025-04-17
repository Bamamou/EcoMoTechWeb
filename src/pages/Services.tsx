import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Settings, Zap, Factory, BatteryCharging, Wrench, LightbulbIcon } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-12 h-12 text-ecomotech-green" />,
    title: "Solar PV Installation",
    description: "Professional installation of solar panels for residential and commercial properties, ensuring optimal performance and safety.",
    link: "/contact"
  },
  {
    icon: <Factory className="w-12 h-12 text-ecomotech-green" />,
    title: "Solar PV Farm Maintenance",
    description: "Comprehensive maintenance services for solar farms, including regular inspections, cleaning, and performance optimization.",
    link: "/contact"
  },
  {
    icon: <BatteryCharging className="w-12 h-12 text-ecomotech-green" />,
    title: "EV Charger Installation",
    description: "Expert installation of EV charging stations for both residential and commercial applications, with smart integration capabilities.",
    link: "/products/ev-chargers"
  },
  {
    icon: <Wrench className="w-12 h-12 text-ecomotech-green" />,
    title: "Electric Vehicle Repair",
    description: "Specialized repair and maintenance services for electric motorcycles and tricycles, ensuring peak performance and longevity.",
    link: "/contact"
  },
  {
    icon: <LightbulbIcon className="w-12 h-12 text-ecomotech-green" />,
    title: "Solar PV Consultancy",
    description: "Expert consultation services for solar PV projects, including feasibility studies, system design, and ROI analysis.",
    link: "/contact"
  },
  {
    icon: <Zap className="w-12 h-12 text-ecomotech-green" />,
    title: "Energy Efficiency Assessment",
    description: "Comprehensive energy audits and recommendations for improving energy efficiency in homes and businesses.",
    link: "/contact"
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Comprehensive renewable energy solutions and services to power your sustainable future
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ecomotech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact our team of experts to discuss your renewable energy needs and find the perfect solution.
            </p>
            <Link 
              to="/contact"
              className="bg-white hover:bg-gray-100 text-ecomotech-green font-medium px-8 py-3 rounded-md transition-colors inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
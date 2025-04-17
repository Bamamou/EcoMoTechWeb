import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SolarProducts from "@/components/products/SolarProducts";

const ProductsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Products</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Explore our comprehensive range of renewable energy and electric mobility solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Products Section */}
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Energy Solutions</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover our comprehensive range of solar power products designed for efficiency, durability, and performance.
            </p>
          </div>
          <SolarProducts />
        </div>
      </section>

      {/* Electric Mobility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Electric Mobility Solutions</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Sustainable transportation solutions for a cleaner, greener future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link to="/products/electric-motorcycles" className="block">
                <img 
                  src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Electric Motorcycles"
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Electric Motorcycles</h3>
                  <p className="text-gray-600">High-performance electric motorcycles for urban mobility.</p>
                </div>
              </Link>
            </div>
            <div className="bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link to="/products/electric-tricycles" className="block">
                <img 
                  src="https://images.unsplash.com/photo-1597358371607-5786aaa84ca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80" 
                  alt="Electric Tricycles"
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Electric Tricycles</h3>
                  <p className="text-gray-600">Versatile electric tricycles for commercial and personal use.</p>
                </div>
              </Link>
            </div>
            <div className="bg-ecomotech-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link to="/products/ev-chargers" className="block">
                <img 
                  src="https://images.unsplash.com/photo-1647227611975-c906679f39f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="EV Chargers"
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">EV Chargers</h3>
                  <p className="text-gray-600">Advanced charging solutions for home and commercial applications.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ecomotech-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make the Switch?</h2>
            <p className="text-lg mb-8">
              Contact our team of experts to find the perfect renewable energy solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-ecomotech-green font-medium px-8 py-3 rounded-md transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-ecomotech-green text-white font-medium px-8 py-3 rounded-md transition-colors"
              >
                Learn About Ecomotech
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;

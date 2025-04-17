import React from "react";
import Layout from "@/components/layout/Layout";

const EnergyStorage = () => {
  return (
    <Layout>
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Energy Storage Systems</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Advanced battery solutions to store excess energy for use when needed, ensuring continuous power availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coming Soon Message */}
            <div className="md:col-span-2 text-center p-12 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ecomotech-blue mb-4">Coming Soon</h3>
              <p className="text-gray-600">
                We're developing cutting-edge energy storage solutions that will revolutionize how you store and use solar power. 
                Our upcoming product line will feature advanced battery technology with smart monitoring and management systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnergyStorage;
import React from "react";
import Layout from "@/components/layout/Layout";

const StreetLights = () => {
  return (
    <Layout>
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Street Lights</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Autonomous lighting solutions for roadways, pathways, and public spaces, powered entirely by solar energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coming Soon Message */}
            <div className="md:col-span-2 text-center p-12 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ecomotech-blue mb-4">Coming Soon</h3>
              <p className="text-gray-600">
                Our next-generation solar street lighting solutions are being finalized. 
                These innovative systems will feature smart controls, motion sensing, 
                and advanced energy management for optimal performance in all conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StreetLights;
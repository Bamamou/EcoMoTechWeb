import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const EVChargingAfrica = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Infrastructure</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Expanding EV Charging Infrastructure Across African Cities
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-09-28">September 28, 2022</time>
                <span className="mx-2">·</span>
                <span>By Sarah Okonjo</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Charging stations.jpg"
              alt="EV Charging Station"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                In a groundbreaking initiative for sustainable transportation in Africa, 
                Ecomotech announces plans to install 200 solar-powered EV charging stations 
                across major urban centers.
              </p>

              {/* Add the rest of the article content here */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default EVChargingAfrica;
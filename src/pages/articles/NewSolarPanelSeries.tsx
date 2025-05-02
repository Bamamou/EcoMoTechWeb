import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NewSolarPanelSeries = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Product News</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech Launches New High-Efficiency Solar Panel Series
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2024-04-15">April 15, 2024</time>
                <span className="mx-2">·</span>
                <span>By David Chen</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg"
              alt="New Solar Panel Series"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              {/* Article Content */}
              <p className="lead">
                Ecomotech proudly announces its groundbreaking UltraPower 600W solar panel series, 
                setting new industry standards for efficiency and performance.
              </p>

              <p>
                The new series achieves an unprecedented 21.7% conversion efficiency, 
                marking a significant advancement in solar technology. This breakthrough 
                enables more power generation from a smaller surface area, making solar 
                energy more accessible and cost-effective for both residential and 
                commercial applications.
              </p>

              {/* Rest of the article content */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default NewSolarPanelSeries;
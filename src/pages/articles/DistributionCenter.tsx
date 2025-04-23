import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const DistributionCenter = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Company News</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Expanding Our Reach: New Distribution Center Opens
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-03-22">March 22, 2023</time>
                <span className="mx-2">·</span>
                <span>By Michael Johnson</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="New Distribution Center"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech has officially opened a state-of-the-art 50,000 square foot distribution center, 
                marking a significant milestone in our commitment to superior customer service and operational excellence.
              </p>

              <h2>Strategic Expansion</h2>
              <p>
                Located in the heart of the Midwest, this new facility serves as a central hub for our growing 
                network of installers and partners across the central United States. The strategic location 
                enables faster deliveries and more responsive service to our expanding customer base.
              </p>

              {/* Continue with the rest of the article content */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DistributionCenter;
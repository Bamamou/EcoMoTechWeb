import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const ElectricMobilityAfrica = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Electric Mobility</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Revolutionizing Transportation: Electric Mobility Takes Root in Africa
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-10-15">October 15, 2022</time>
                <span className="mx-2">·</span>
                <span>By Marcus Adebayo</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Electric Motorcycles in Africa"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                A transformative wave of sustainable transportation is sweeping across African cities 
                as Ecomotech's electric mobility program achieves a significant milestone with over 
                1,000 electric motorcycles and tricycles now in operation.
              </p>

              {/* Add the rest of the article content here */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ElectricMobilityAfrica;
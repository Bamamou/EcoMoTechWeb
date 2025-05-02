import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const StreetLighting = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Case Studies</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech Solar Street Lighting Transforms Urban Safety
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-11-05">November 5, 2022</time>
                <span className="mx-2">·</span>
                <span>By Robert Kim</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Ecomotech Solar Street Lighting Transforms Urban Safety.jpg"
              alt="Solar Street Lights"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                A comprehensive 18-month study reveals that Ecomotech's solar street lighting 
                installations have led to a remarkable 60% reduction in nighttime incidents across 
                urban neighborhoods, while delivering significant cost savings for municipalities.
              </p>

              <h2>Project Overview</h2>
              <p>
                The initiative installed over 500 StreetBright solar-powered LED lighting systems 
                across five urban districts, revolutionizing public safety and energy efficiency:
              </p>
              <ul>
                <li>Motion-sensing capability for adaptive brightness</li>
                <li>Grid-independent operation</li>
                <li>Smart monitoring system</li>
                <li>Weather-resistant design</li>
                <li>Zero ongoing electricity costs</li>
              </ul>

              <h2>Safety Impact</h2>
              <p>
                The study documented several key safety improvements:
              </p>
              <ul>
                <li>60% reduction in nighttime safety incidents</li>
                <li>Increased pedestrian activity in previously underutilized areas</li>
                <li>Enhanced emergency response capabilities</li>
                <li>Improved traffic safety at intersections</li>
                <li>Continuous lighting during power outages</li>
              </ul>

              <blockquote>
                <p>
                  "Beyond the obvious environmental benefits, this project demonstrates how 
                  sustainable technology can directly improve quality of life and community safety."
                </p>
                <cite>— Robert Kim, Urban Solutions Manager</cite>
              </blockquote>

              <h2>Economic Benefits</h2>
              <p>
                The financial analysis revealed substantial cost advantages:
              </p>
              <ul>
                <li>40% cost reduction over 10-year period</li>
                <li>Zero electricity costs</li>
                <li>Minimal maintenance requirements</li>
                <li>No trenching or wiring costs</li>
                <li>Reduced infrastructure strain</li>
              </ul>

              <h2>Technology Features</h2>
              <p>
                The StreetBright system incorporates several innovative features:
              </p>
              <ul>
                <li>Advanced LED technology for maximum efficiency</li>
                <li>Smart motion detection system</li>
                <li>Remote monitoring capabilities</li>
                <li>Autonomous operation</li>
                <li>20-year service life</li>
              </ul>

              <h2>Future Expansion</h2>
              <p>
                Based on these successful results, three additional cities have initiated similar 
                programs using Ecomotech's solar street lighting technology, with installations 
                scheduled to begin next quarter.
              </p>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>Learn More About StreetBright</h3>
                <p>
                  Discover how our solar street lighting solutions can benefit your community. 
                  Contact our urban development team for detailed specifications and pricing.
                </p>
                <Link 
                  to="/products/street-lights" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  Explore StreetBright Solutions
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default StreetLighting;
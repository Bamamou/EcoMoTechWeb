import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const SustainabilityReport = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Sustainability</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Annual Sustainability Report Shows Record Carbon Offset
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2022-12-10">December 10, 2022</time>
                <span className="mx-2">·</span>
                <span>By Elena Gomez</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1141&q=80"
              alt="Solar Panel Installation"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech's 2022 sustainability report reveals unprecedented environmental impact, 
                with our solar installations preventing over 500,000 metric tons of CO2 emissions – 
                equivalent to planting 25 million trees.
              </p>

              <h2>Key Achievements</h2>
              <p>
                This year's report highlights several significant milestones:
              </p>
              <ul>
                <li>35% increase in carbon offset compared to previous year</li>
                <li>100% renewable energy adoption across manufacturing facilities</li>
                <li>40% reduction in water usage through process improvements</li>
                <li>Significant reduction in packaging waste</li>
                <li>Implementation of circular economy initiatives</li>
              </ul>

              <blockquote>
                <p>
                  "These numbers aren't just statistics – they represent real environmental impact. 
                  Each solar panel we install contributes to the vital work of reducing our global 
                  carbon footprint."
                </p>
                <cite>— Elena Gomez, Sustainability Director</cite>
              </blockquote>

              <h2>Manufacturing Innovation</h2>
              <p>
                Our commitment to sustainability extends to our manufacturing processes:
              </p>
              <ul>
                <li>Solar-powered manufacturing facilities</li>
                <li>Water recycling systems implementation</li>
                <li>Zero-waste packaging initiative</li>
                <li>Supply chain optimization</li>
              </ul>

              <h2>Future Goals</h2>
              <p>
                Looking ahead, Ecomotech has set ambitious targets for 2023:
              </p>
              <ul>
                <li>40% increase in total carbon offset</li>
                <li>50% reduction in manufacturing waste</li>
                <li>Implementation of biodegradable packaging</li>
                <li>Expansion of recycling programs</li>
              </ul>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>Download the Full Report</h3>
                <p>
                  Access detailed insights and comprehensive data from our 2022 
                  Sustainability Report.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  Request Report Access
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

export default SustainabilityReport;
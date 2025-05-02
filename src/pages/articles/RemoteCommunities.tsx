import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const RemoteCommunities = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Projects</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Sustainable Energy Solutions for Remote Communities
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-02-15">February 15, 2023</time>
                <span className="mx-2">·</span>
                <span>By Emma Nelson</span>
              </div>
            </div>
            
            <img
              src="/EcoMoTechWeb/images/News/Sustainable Energy Solutions for Remote Communities.jpg"
              alt="Remote Village Solar Installation"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                In a groundbreaking initiative, Ecomotech has successfully brought sustainable energy 
                solutions to five remote villages, transforming the lives of over 2,000 people who 
                previously had limited or no access to electricity.
              </p>

              <h2>The Power for All Program</h2>
              <p>
                Through our 'Power for All' program, we've implemented comprehensive off-grid solar 
                solutions specifically designed for challenging environments. Each installation combines 
                solar arrays, advanced battery storage systems, and smart micro-grid technology to 
                provide reliable, sustainable power.
              </p>

              <h2>Technical Innovation</h2>
              <p>
                Our engineering team developed custom solutions to address the unique challenges of 
                remote installations, including:
              </p>
              <ul>
                <li>Weather-resistant solar panels with enhanced durability</li>
                <li>Smart micro-grid systems for optimal power distribution</li>
                <li>Advanced battery storage with extended lifecycle</li>
                <li>Remote monitoring and maintenance capabilities</li>
                <li>Simple user interfaces for community operation</li>
              </ul>

              <h2>Community Impact</h2>
              <blockquote>
                <p>
                  "The arrival of reliable electricity has transformed our community. Children can 
                  study after dark, our health center can store medicines properly, and new small 
                  businesses are emerging. It's not just about power – it's about opportunity."
                </p>
                <cite>— Village Elder, Mesa Verde Community</cite>
              </blockquote>

              <p>
                The impact extends beyond basic electrification. Communities have reported:
              </p>
              <ul>
                <li>Extended operating hours for educational facilities</li>
                <li>Improved healthcare services through powered medical equipment</li>
                <li>New small business opportunities</li>
                <li>Enhanced safety through reliable lighting</li>
                <li>Reduced reliance on expensive and polluting diesel generators</li>
              </ul>

              <h2>Future Expansion</h2>
              <p>
                Building on this success, Ecomotech is preparing to expand the program to twelve 
                additional villages in the coming year. This expansion will include enhanced features 
                based on lessons learned from the initial implementations.
              </p>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>Get Involved</h3>
                <p>
                  Learn more about our Power for All program and how you can support sustainable 
                  energy access for remote communities. Contact our team for partnership opportunities 
                  or to contribute to this initiative.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  Contact Us
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

export default RemoteCommunities;
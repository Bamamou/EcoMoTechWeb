import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const ResearchPartnership = () => {
  return (
    <Layout>
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <span className="text-ecomotech-blue font-medium">Research & Development</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                Ecomotech Partners with Leading Research University
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime="2023-01-28">January 28, 2023</time>
                <span className="mx-2">·</span>
                <span>By Dr. James Williams</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Research Laboratory"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Ecomotech announces a groundbreaking partnership with the Green Energy Institute 
                at State University, aimed at revolutionizing energy storage technology for 
                renewable energy systems.
              </p>

              <h2>Partnership Overview</h2>
              <p>
                This strategic collaboration combines Ecomotech's industry expertise with the 
                cutting-edge research capabilities of one of the world's leading renewable energy 
                research institutions. The three-year partnership will focus on developing 
                next-generation battery technology specifically designed for solar applications.
              </p>

              <h2>Research Objectives</h2>
              <p>
                The partnership will address key challenges in current energy storage systems:
              </p>
              <ul>
                <li>Increasing storage capacity by up to 40%</li>
                <li>Improving charge/discharge efficiency</li>
                <li>Extending battery lifespan to 15+ years</li>
                <li>Reducing production costs by 30%</li>
                <li>Developing environmentally friendly materials</li>
              </ul>

              <blockquote>
                <p>
                  "Effective energy storage is the missing piece in making renewable energy truly 
                  competitive with traditional power sources. This partnership brings together the 
                  best of academic innovation and industrial expertise."
                </p>
                <cite>— Dr. James Williams, Director of Research at Ecomotech</cite>
              </blockquote>

              <h2>Innovation Pipeline</h2>
              <p>
                The research team has already identified several promising technologies that could 
                lead to significant breakthroughs in energy storage:
              </p>
              <ul>
                <li>Advanced solid-state battery chemistry</li>
                <li>Novel electrode materials</li>
                <li>Smart charge management systems</li>
                <li>Temperature-resistant storage solutions</li>
              </ul>

              <h2>Funding and Resources</h2>
              <p>
                The initiative is supported by a combination of private and public funding, including:
              </p>
              <ul>
                <li>Government renewable energy innovation grant</li>
                <li>Ecomotech's R&D investment</li>
                <li>University research funding</li>
                <li>Industry partner contributions</li>
              </ul>

              <h2>Timeline and Goals</h2>
              <p>
                The partnership has established an aggressive timeline for development:
              </p>
              <ul>
                <li>Phase 1 (6 months): Research and prototype design</li>
                <li>Phase 2 (12 months): Prototype development and testing</li>
                <li>Phase 3 (18 months): Commercial viability assessment and optimization</li>
              </ul>

              <div className="bg-ecomotech-gray p-6 rounded-lg mt-8">
                <h3>Research Opportunities</h3>
                <p>
                  We're actively seeking talented researchers and engineers to join this 
                  groundbreaking initiative. Visit our careers page to learn more about 
                  available positions.
                </p>
                <Link 
                  to="/join-us" 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium mt-4"
                >
                  View Opportunities
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

export default ResearchPartnership;
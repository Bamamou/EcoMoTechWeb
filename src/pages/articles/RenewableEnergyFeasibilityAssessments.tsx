import React from "react";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";

const RenewableEnergyFeasibilityAssessments = () => {
  // SEO optimization for the article
  useSEO({
    title: "Introduction to Renewable Energy Feasibility Assessments - EcoMoTech",
    description: "Nearly half of renewable energy projects worldwide fail to move beyond the planning stage due to poor feasibility assessments. Learn how structured evaluation is essential before committing resources to any project.",
    keywords: [
      "renewable energy",
      "feasibility assessment",
      "solar feasibility",
      "wind energy assessment", 
      "project planning",
      "energy modeling",
      "ROI analysis",
      "environmental assessment",
      "renewable energy investment",
      "project evaluation"
    ],
    ogImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Introduction to Renewable Energy Feasibility Assessments",
        text: "Learn why structured evaluation is essential before committing resources to renewable energy projects",
        url: window.location.href,
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Introduction to Renewable Energy Feasibility Assessments
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>August 27, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>EcoMoTech Research Team</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Research & Development
              </span>
            </div>
            
            <Button onClick={handleShare} className="mb-8">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Renewable energy feasibility assessment - solar and wind infrastructure"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction to Renewable Energy Feasibility Assessments</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Did you know that nearly half of renewable energy projects worldwide fail to move beyond the planning stage—not because of technology limitations, but because of poor feasibility assessments? This reality highlights why a structured evaluation is essential before committing time, money, and resources to any project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Renewable energy sources are becoming increasingly vital in the global transition toward a low-carbon future. Solar, wind, hydro, and other clean technologies hold enormous potential, but their success depends on more than just installing equipment. Each project must be carefully analyzed to determine whether it is technically sound, economically viable, environmentally responsible, and compliant with regulations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A renewable energy feasibility assessment provides this clarity. It offers project developers, investors, and policymakers a comprehensive view of whether a proposed project should proceed, what adjustments are needed, or if alternative solutions may be more appropriate. In short, it is the foundation upon which successful renewable energy initiatives are built.
              </p>
            </div>

            {/* Importance Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Importance of Conducting Feasibility Assessments</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Feasibility assessments provide a structured snapshot of a project's viability—highlighting potential risks, investment returns, and practical constraints. According to Investopedia, such studies help determine resource availability, financial projections, required technology, and potential roadblocks—offering a clear "go/no-go" direction for decision-makers. Without this, organizations may face unexpected delays, cost overruns, regulatory hurdles, or even project failure.
              </p>
            </div>

            {/* Key Components Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Key Components of a Feasibility Assessment</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Drawing from both general feasibility study frameworks and renewable energy–specific resources:
              </p>
              
              <div className="space-y-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical & Resource Assessment</h3>
                  <p className="text-gray-700">
                    Evaluate local energy potential—e.g., solar irradiance, wind speeds, water flow. Tools such as NREL's PVWatts or REopt Lite help model system performance and optimal sizing.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Site and Environmental Conditions</h3>
                  <p className="text-gray-700">
                    Assess terrain, shading, land use, environmental impact, and regulatory constraints. This includes environmental risk, habitat disruption, and required mitigation measures.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Economic and Financial Analysis</h3>
                  <p className="text-gray-700">
                    Estimate system cost, operations, payback, return on investment (ROI), incentives, and financing structure—whether ownership, PPA, or grants.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stakeholder and Regulatory Review</h3>
                  <p className="text-gray-700">
                    Identify permitting requirements, community and indigenous engagement, and alignment with local or national energy policies.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Assessment and Mitigation</h3>
                  <p className="text-gray-700">
                    Evaluate risks (technical, financial, environmental), plan for contingencies, and propose mitigation strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Steps to Conduct a Feasibility Assessment</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A logical sequence to follow:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Preliminary Analysis</h3>
                    <p className="text-gray-700">
                      Gather initial project scope, resource data, and early screening—for example, using satellite data or available tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Data Collection & Analysis</h3>
                    <p className="text-gray-700">
                      Combine field measurements (like solar or wind), remote sensing, and literature review to evaluate site suitability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modeling & Performance Estimation</h3>
                    <p className="text-gray-700">
                      Use tools such as PVWatts or REopt Lite to estimate energy production, sizing, and resilience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Economic Evaluation</h3>
                    <p className="text-gray-700">
                      Combine cost estimates with incentives and tariffs to calculate payback, ROI, and NPV. Consider financing mechanisms and contractual models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory & Stakeholder Engagement</h3>
                    <p className="text-gray-700">
                      Identify permitting steps, engage communities, indigenous groups, and regulators, and ensure compliance with environmental and energy laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Risk & Contingency Planning</h3>
                    <p className="text-gray-700">
                      Assess potential risks and prepare fallback options or adaptive measures to deal with uncertainties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    7
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Decision-making & Reporting</h3>
                    <p className="text-gray-700">
                      Compile findings into a clear report with recommendations and a go/no-go recommendation. Ensure presentation is accessible to diverse stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Case Studies or Examples</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Real-world feasibility assessments illustrate how this works in practice:
              </p>
              
              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">TechCity East Campus (Kingston, NY)</h3>
                  <p className="text-gray-700">
                    Via the EPA and NREL under the Re-Powering America's Land initiative, this site was evaluated for rooftop PV potential. Key factors included roof area suitability, solar resource, grid interconnection, and economic analysis—including electricity prices and incentives.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Price Landfill (Pleasantville, NJ)</h3>
                  <p className="text-gray-700">
                    A feasibility study assessed PV installation at a landfill site, estimating costs, performance, and financing options. This is another example of repurposing underutilized land for renewable energy.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">New Orleans Agricultural Street Landfill</h3>
                  <p className="text-gray-700">
                    Under EPA's Superfund Redevelopment and Re-Powering programs, a detailed solar reuse and feasibility study was conducted to guide renewable energy redevelopment on a former landfill.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                These examples highlight effective reuse of land, detailed performance modeling, economic framing, and strategic partnerships (EPA, NREL).
              </p>
            </div>

            {/* Conclusion Section */}
            <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Conclusion and Recommendations</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A comprehensive feasibility assessment is foundational to any renewable energy project's success. It enables informed decisions, risk management, cost control, and stakeholder alignment. Based on best practices and case studies:
              </p>
              
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</span>
                  <span><strong>Engage early and broadly</strong>—involve technical experts, financiers, regulators, and community stakeholders upfront.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</span>
                  <span><strong>Use proven tools</strong>—such as NREL's PVWatts and REopt Lite—for reliable modeling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</span>
                  <span><strong>Assess economically</strong>—evaluate incentives, tariffs, PPAs, and ownership models to optimize ROI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</span>
                  <span><strong>Plan for uncertainty</strong>—include risk analysis and alternative plans.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</span>
                  <span><strong>Document clearly</strong>—present findings and recommendations in a reader-friendly report to facilitate decision-making.</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                With these steps, renewable energy feasibility assessments can pave the way for resilient, cost-effective, and sustainable energy projects.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help with Your Renewable Energy Project?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                EcoMoTech offers comprehensive feasibility assessment services to help you make informed decisions about your renewable energy investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get a Feasibility Assessment
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RenewableEnergyFeasibilityAssessments;

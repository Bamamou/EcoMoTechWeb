import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Settings, 
  CheckCircle, 
  TrendingUp,
  Building,
  Globe,
  Calendar,
  Share2,
  MapPin,
  Users,
  AlertTriangle,
  Battery,
  DollarSign
} from "lucide-react";

const EVChargingAfrica = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Expanding EV Charging Infrastructure Across African Cities',
        text: 'A professional overview of the opportunities, challenges, and strategies for scaling EV charging in Africa.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Expanding EV Charging Infrastructure Across African Cities&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-gray-700 text-white">
              Infrastructure
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Expanding EV Charging Infrastructure Across African Cities
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>September 28, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>By Nicolas Bamamou</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            <ResponsiveImage
              src="/EcoMoTechWeb/images/News/Charging stations.jpg"
              alt="EV Charging Station"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As Africa’s cities continue to grow at a rapid pace, transportation sits at the heart of the continent’s economic transformation. Electric mobility (e-mobility) is emerging as a critical solution to reduce dependence on fossil fuels, cut urban air pollution, and create new economic opportunities. Yet, the success of this transition hinges on one crucial factor: the expansion of EV charging infrastructure.
              </p>
              <p className="text-gray-700 mb-8">
                This article examines the state of EV charging in Africa, identifies opportunities and challenges, and explores strategies to accelerate infrastructure growth for a cleaner, more connected future.
              </p>
            </div>
          </div>

          {/* Current State Analysis */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current State Analysis: Where Africa Stands Today</h2>
            <p className="text-gray-700 mb-4">
              Despite Africa’s potential, EV charging infrastructure remains limited across most cities.
            </p>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>South Africa</strong> leads with more than 400 public charging points concentrated in urban centers like Johannesburg, Cape Town, and Durban.</li>
              <li><strong>Morocco and Egypt</strong> are building momentum with state-led initiatives tied to renewable energy ambitions.</li>
              <li><strong>Nigeria, Kenya, and Ghana</strong> are witnessing the rise of private-led charging pilots, often tied to EV startups and solar-powered hubs.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The gaps are clear:
            </p>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Charging networks are sparse and fragmented.</li>
              <li>High urban electricity costs and unreliable grids hinder expansion.</li>
              <li>Lack of unified regulatory frameworks limits private investment.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              In short, Africa is at the proof-of-concept stage—but the momentum is undeniable.
            </p>
          </div>

          {/* Infrastructure Expansion Strategies */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Expansion Strategies: Building at Scale</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Public-Private Partnerships (PPPs):</strong> Governments can provide land, subsidies, and policy support, while private companies deliver technology and operations.</li>
              <li><strong>Investment Models:</strong> Innovative financing such as leasing models, pay-as-you-go charging, and green bonds can attract capital while reducing upfront risks.</li>
              <li><strong>Urban Planning Integration:</strong> Charging hubs should be embedded into shopping malls, fuel stations, and workplaces to increase accessibility.</li>
              <li><strong>Regional Collaboration:</strong> ECOWAS, SADC, and AU-led harmonization of standards could create cross-border charging corridors for trade and mobility.</li>
            </ul>
          </div>

          {/* Technological Considerations */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technological Considerations: Adapting to African Realities</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Fast Chargers vs. Slow Chargers:</strong> Fast DC chargers (50–150kW) are ideal for highways, while slower AC chargers (7–22kW) can serve residential and workplace charging.</li>
              <li><strong>Renewable Energy Integration:</strong> Solar-powered charging stations reduce reliance on unstable grids and align with Africa’s abundant solar potential.</li>
              <li><strong>Smart-Grid Compatibility:</strong> Integrating chargers into smart-grid systems allows demand-response, reducing grid strain and enabling energy storage solutions.</li>
              <li><strong>Battery Swapping Models:</strong> For two- and three-wheelers—popular in African cities—battery swapping can accelerate adoption by reducing upfront EV costs.</li>
            </ul>
          </div>

          {/* Socioeconomic Impact */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Socioeconomic Impact: Beyond Transportation</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Job Creation:</strong> Skilled and semi-skilled jobs in installation, maintenance, and operations.</li>
              <li><strong>Local Manufacturing:</strong> Opportunities for African firms to produce charging hardware, cabling, and software solutions.</li>
              <li><strong>Environmental Benefits:</strong> Reduced emissions in cities with some of the world’s fastest-growing populations.</li>
              <li><strong>Energy Security:</strong> Lower oil import dependence and stronger integration of domestic renewable energy sources.</li>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Lessons from Emerging Markets</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Kenya – Roam & BasiGo:</strong> Nairobi-based startups are deploying solar-powered charging hubs for electric buses and motorcycles, demonstrating scalable models for public transport.</li>
              <li><strong>Rwanda – Battery Swapping:</strong> Kigali has embraced two- and three-wheeler battery swapping stations, boosting adoption rates among commercial riders.</li>
              <li><strong>India – Parallels for Africa:</strong> India’s mix of government incentives, private charging operators, and low-cost AC chargers offers a roadmap for scaling in resource-constrained environments.</li>
            </ul>
          </div>

          {/* Barriers and Solutions */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Barriers and Solutions</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Regulatory Gaps:</strong> Many African countries lack EV charging standards. <span className="text-gray-600">Solution: Establish national EV policies with clear technical and safety frameworks.</span></li>
              <li><strong>Financial Constraints:</strong> High capital costs deter investors. <span className="text-gray-600">Solution: Use blended finance and carbon credit markets to derisk projects.</span></li>
              <li><strong>Grid Limitations:</strong> Unreliable grids slow rollout. <span className="text-gray-600">Solution: Prioritize hybrid systems with solar, storage, and grid integration.</span></li>
            </ul>
          </div>

          {/* Public Engagement and Awareness */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Public Engagement and Awareness</h2>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Awareness Campaigns:</strong> Educating citizens about cost savings and environmental benefits.</li>
              <li><strong>Incentives:</strong> Reduced import duties on EVs, free parking for EVs, and lower charging tariffs.</li>
              <li><strong>Corporate Fleets:</strong> Encouraging ride-hailing and delivery companies to electrify fleets, creating visibility and demand.</li>
            </ul>
          </div>

          {/* Future Outlook */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Outlook: Africa’s Charging Ecosystem by 2035</h2>
            <p className="text-gray-700 mb-4">
              By 2035, Africa could host tens of thousands of interconnected charging stations, powered by renewable energy and integrated into smart-grid systems. Innovations such as wireless charging, AI-driven grid management, and second-life EV batteries as storage could define the landscape.
            </p>
            <p className="text-gray-700 mb-4">
              Africa’s urban mobility revolution is not a matter of “if,” but “when.” The choices made today will shape whether African cities leapfrog into a clean mobility future—or remain locked in fossil fuel dependency.
            </p>
          </div>

          {/* Final Thoughts */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                  <Zap className="w-5 h-5" />
                  Final Thoughts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed">
                  Expanding EV charging infrastructure in Africa is more than an engineering challenge—it is a continental opportunity. With the right blend of policy, technology, finance, and awareness, African cities can build charging ecosystems that rival global benchmarks while creating a greener, more prosperous future.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto">
            <Separator className="my-8" />
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with EcoMoTech</h3>
              <p className="text-gray-800 mb-4">
                Discover how EcoMoTech is supporting the growth of EV charging infrastructure across Africa. Contact our team for partnership opportunities, technical support, or to learn more about our solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default EVChargingAfrica;
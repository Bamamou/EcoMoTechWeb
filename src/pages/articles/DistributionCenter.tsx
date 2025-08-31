import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart, 
  Globe, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  Target, 
  MapPin,
  DollarSign,
  AlertTriangle,
  Handshake,
  Building,
  Truck,
  Heart,
  CheckCircle,
  XCircle,
  ArrowRight,
  Factory,
  Car,
  Home
} from "lucide-react";

const DistributionCenter = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Strategic Expansion Analysis: West African Solar PV and Electric Mobility Market',
        text: 'Comprehensive strategic analysis for entering West African renewable energy markets',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Strategic expansion into West African solar and e-mobility markets!&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-br from-white via-ecomotech-light-gray to-slate-50">
        {/* Hero Section */}
        <div className="relative pt-24 pb-12 overflow-hidden bg-white">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-ecomotech-blue/10 text-ecomotech-dark-blue border-ecomotech-blue/30 px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Market Analysis
                </Badge>
                <Badge className="bg-ecomotech-green/10 text-ecomotech-dark-green border-ecomotech-green/30 px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Strategic Expansion
                </Badge>
                <Badge className="bg-ecomotech-dark-blue/10 text-ecomotech-dark-blue border-ecomotech-dark-blue/30 px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Solar & E-Mobility
                </Badge>
                <Badge className="bg-ecomotech-dark-green/10 text-ecomotech-dark-green border-ecomotech-dark-green/30 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  West Africa
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ecomotech-dark-gray mb-6 leading-tight">
                Strategic Expansion Analysis:
                <span className="block bg-gradient-to-r from-ecomotech-green via-ecomotech-blue to-ecomotech-dark-green bg-clip-text text-transparent mt-2">
                  West African Solar PV & Electric Mobility Market
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-ecomotech-dark-gray/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                A comprehensive strategic overview for business leaders considering market entry into the West African renewable energy and sustainable transport sectors
              </p>
              
              <div className="flex items-center justify-center text-ecomotech-dark-gray/70 mb-8 flex-wrap gap-2">
                <time dateTime="2025-08-31" className="flex items-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  August 31, 2025
                </time>
                <span className="mx-4 hidden sm:block">·</span>
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Strategic Analysis Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-ecomotech-dark-gray via-ecomotech-dark-blue to-ecomotech-dark-green border-none shadow-2xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Target className="w-8 h-8 text-ecomotech-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Executive Summary</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  The West African region, comprising nations such as Senegal, Ghana, Côte d'Ivoire, Guinea, Mali, and Burkina Faso, presents a compelling yet complex growth frontier for companies in the solar PV and electric mobility sectors. Driven by a critical energy deficit, rapid urbanization, falling technology costs, and strong governmental and international support for renewable energy, the market potential is significant.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  However, success is contingent upon a nuanced understanding of the diverse economic landscapes, regulatory frameworks, and infrastructural challenges. This analysis provides a strategic overview for business leaders considering market entry, outlining the opportunities, risks, and key considerations for a successful and sustainable expansion.
                </p>
              </CardContent>
            </Card>

            {/* Market Overview */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-ecomotech-light-gray rounded-full">
                    <TrendingUp className="w-6 h-6 text-ecomotech-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">1. Market Overview: A Region Primed for Growth</h3>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  The demand for decentralized energy solutions and sustainable transport in West Africa is not merely a trend but an economic imperative.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold text-ecomotech-dark-blue mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Solar PV Demand
                    </h4>
                    <p className="text-blue-700 mb-4">
                      With over 60% of the sub-region's population lacking stable grid access, the addressable market for off-grid and hybrid solar systems is enormous. Demand is driven by:
                    </p>
                    <ul className="space-y-2 text-sm text-blue-600">
                      <li className="flex items-start">
                        <Home className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-blue" />
                        <div>
                          <strong>Residential & Commercial:</strong> Seeking reliable power for homes, SMEs, and businesses plagued by frequent outages
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Factory className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-blue" />
                        <div>
                          <strong>Industrial & Mining:</strong> Major industries and mining operations require cost-effective power to reduce diesel dependency
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-blue" />
                        <div>
                          <strong>Utility-Scale Projects:</strong> Governments actively procuring large-scale solar projects to diversify energy mix
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold text-ecomotech-dark-green mb-3 flex items-center">
                      <Car className="w-5 h-5 mr-2" />
                      Electric Mobility Demand
                    </h4>
                    <p className="text-green-700 mb-4">
                      While nascent, the e-mobility sector is poised for rapid growth. The world's highest motorcycle penetration rates, coupled with soaring fuel prices, make the transition compelling. Initial demand focuses on:
                    </p>
                    <ul className="space-y-2 text-sm text-green-600">
                      <li className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-green" />
                        <div>
                          <strong>Urban Transport:</strong> E-bikes and e-tuk-tuks for city mobility
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Truck className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-green" />
                        <div>
                          <strong>Fleet Vehicles:</strong> Last-mile delivery solutions
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-ecomotech-green" />
                        <div>
                          <strong>Public Transit:</strong> Bus pilots in major cities like Dakar and Abidjan
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>            {/* Economic Environment */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <DollarSign className="w-6 h-6 text-ecomotech-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">2. Economic Environment: Navigating Purchasing Power and Financing</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The economic landscape is varied, requiring tailored commercial approaches.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-blue mb-2 flex items-center">
                      <BarChart className="w-4 h-4 mr-2" />
                      Economic Indicators
                    </h4>
                    <p className="text-sm text-blue-700">
                      GDP growth rates are generally positive but volatile. Countries like Côte d'Ivoire, Senegal, and Ghana have more diversified economies, while Guinea, Mali, and Burkina Faso are more resource-dependent. Urban disposable income is rising, creating a growing middle-class market.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-gray mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Purchasing Power
                    </h4>
                    <p className="text-sm text-gray-700">
                      High upfront costs for solar and EV systems remain a primary barrier. Consumer and SME purchasing power is often limited, necessitating innovative financing models for market penetration.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-green mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Financing Solutions
                    </h4>
                    <p className="text-sm text-green-700">
                      Success is inextricably linked to financing. Key models include PAYG, microleasing, consumer credit, and development finance partnerships.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-ecomotech-blue/20">
                  <h4 className="text-lg font-bold text-ecomotech-dark-blue mb-4">Key Financing Models:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-ecomotech-blue">Pay-As-You-Go (PAYG):</strong>
                      <p className="text-blue-600 mt-1">Dominant in off-grid solar, leveraging mobile money penetration (M-PESA, Orange Money)</p>
                    </div>
                    <div>
                      <strong className="text-ecomotech-blue">Microleasing & Credit:</strong>
                      <p className="text-blue-600 mt-1">Partnerships with local banks and MFIs for installment plans</p>
                    </div>
                    <div>
                      <strong className="text-ecomotech-green">Development Finance:</strong>
                      <p className="text-green-600 mt-1">Concessional loans from AfDB, World Bank, and EBID for large-scale projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Framework */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Shield className="w-6 h-6 text-ecomotech-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">3. Regulatory and Policy Framework: A Supportive Trajectory</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The policy environment is increasingly favorable, though bureaucracy can be challenging.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-ecomotech-green/20">
                  <h4 className="text-lg font-bold text-ecomotech-dark-green mb-4">Government Incentives Include:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-ecomotech-green flex-shrink-0" />
                      <span className="text-green-700">VAT and import duty exemptions on solar panels, EVs, and components</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-ecomotech-green flex-shrink-0" />
                      <span className="text-green-700">Tax holidays for renewable energy projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-ecomotech-green flex-shrink-0" />
                      <span className="text-green-700">Net metering policies in Ghana and Senegal</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-ecomotech-green flex-shrink-0" />
                      <span className="text-green-700">ECOWAS trade facilitation within the region</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Landscape */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Handshake className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">4. Competitive Landscape: Collaboration is Key</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The market features a mix of international players, local champions, and NGOs.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-gray mb-2 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      International Competitors
                    </h4>
                    <p className="text-sm text-gray-700">
                      Companies like Greenlight Planet, d.light, and BBOXX have strong footholds. Chinese manufacturers dominate supply due to competitive pricing.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-blue mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Local Players
                    </h4>
                    <p className="text-sm text-blue-700">
                      Agile local distributors and installers possess invaluable on-the-ground knowledge, customer relationships, and service networks.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <h4 className="font-bold text-ecomotech-dark-green mb-2 flex items-center">
                      <Handshake className="w-4 h-4 mr-2" />
                      Partnership Opportunities
                    </h4>
                    <p className="text-sm text-green-700">
                      Success requires partnerships with local distributors, telecom companies, financial institutions, and development agencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure and Logistics */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-100 rounded-full">
                    <Truck className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">5. Infrastructure and Logistics: Operational Realities</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Operational efficiency will be tested by infrastructural deficits.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start bg-yellow-50 p-4 rounded-xl">
                    <Zap className="w-5 h-5 mr-3 mt-1 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-1">Grid Reliability</h4>
                      <p className="text-sm text-yellow-700">
                        Unreliable national grids drive solar PV demand. Understanding grid stability is critical for hybrid and grid-tie systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-blue-50 p-4 rounded-xl">
                    <Truck className="w-5 h-5 mr-3 mt-1 text-ecomotech-blue flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-ecomotech-dark-blue mb-1">Transportation & Logistics</h4>
                      <p className="text-sm text-blue-700">
                        Regional port hubs in Abidjan, Tema, and Dakar can experience congestion. Inland transport to landlocked countries adds complexity and cost.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-green-50 p-4 rounded-xl">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-1">Last-Mile Distribution</h4>
                      <p className="text-sm text-green-700">
                        Establishing reliable supply chains to rural and peri-urban areas requires local logistics expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural and Social Factors */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">6. Cultural and Social Factors: Building Trust and Acceptance</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Customer Behavior
                    </h4>
                    <p className="text-sm text-purple-700">
                      Sales cycles are relationship-based. Trust and after-sales service are paramount. Strong local presence is non-negotiable.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Technology Acceptance
                    </h4>
                    <p className="text-sm text-blue-700">
                      High acceptance of solar technology. For e-mobility, demonstrating clear TCO advantages is essential.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Workforce
                    </h4>
                    <p className="text-sm text-green-700">
                      Skilled technical workforce is scarce. Investment in comprehensive training programs is essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Analysis */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <AlertTriangle className="w-6 h-6 text-ecomotech-dark-gray" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">7. Risk Analysis and Mitigation</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-ecomotech-light-gray">
                        <th className="text-left p-4 font-bold text-ecomotech-dark-gray border-b">Risk Category</th>
                        <th className="text-left p-4 font-bold text-ecomotech-dark-gray border-b">Specific Risks</th>
                        <th className="text-left p-4 font-bold text-ecomotech-dark-gray border-b">Mitigation Strategies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-semibold text-ecomotech-dark-blue">Political & Regulatory</td>
                        <td className="p-4 text-gray-700">Political instability, policy inconsistency, bureaucratic delays, currency inconvertibility</td>
                        <td className="p-4 text-gray-700">Secure political risk insurance (MIGA). Diversify across countries. Build government relations.</td>
                      </tr>
                      <tr className="border-b bg-ecomotech-light-gray">
                        <td className="p-4 font-semibold text-ecomotech-blue">Economic</td>
                        <td className="p-4 text-gray-700">Currency volatility, inflation, limited FX access</td>
                        <td className="p-4 text-gray-700">Price in stable currencies (USD, EUR). Use hedging instruments. Match financing to revenue streams.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold text-ecomotech-dark-green">Operational</td>
                        <td className="p-4 text-gray-700">Supply chain disruptions, logistics challenges, theft, fraud</td>
                        <td className="p-4 text-gray-700">Robust local partnerships. Stringent inventory management. GSM trackers for security.</td>
                      </tr>
                      <tr className="bg-ecomotech-light-gray">
                        <td className="p-4 font-semibold text-ecomotech-green">Environmental</td>
                        <td className="p-4 text-gray-700">Dust, extreme heat, humidity affecting performance</td>
                        <td className="p-4 text-gray-700">Engineer for Sahelian climate. Use durable materials. Advanced battery cooling.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <Card className="bg-gradient-to-br from-ecomotech-dark-gray via-ecomotech-dark-blue to-ecomotech-dark-green border-none shadow-2xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <ArrowRight className="w-8 h-8 text-ecomotech-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">8. Strategic Recommendations for Market Entry</h2>
                </div>
                <p className="text-blue-100 text-lg mb-6">
                  A phased, agile approach is recommended to maximize success and minimize risk.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-ecomotech-green" />
                      Phase 1-2: Pilot Entry
                    </h4>
                    <p className="text-gray-100 text-sm">
                      Begin with focused entry in stable markets like Senegal or Ghana. Establish representative office to build partnerships and pilot offerings.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-ecomotech-blue" />
                      Hub-and-Spoke Model
                    </h4>
                    <p className="text-gray-100 text-sm">
                      Central warehouse and training facility in strategic port cities to serve as regional distribution and training hub.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-ecomotech-green" />
                      Adapted Products
                    </h4>
                    <p className="text-gray-100 text-sm">
                      Avoid one-size-fits-all. Develop tailored bundles for rural homes, urban SMEs, and industrial applications.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Handshake className="w-5 h-5 mr-2 text-ecomotech-blue" />
                      Strategic Partnerships
                    </h4>
                    <p className="text-gray-100 text-sm">
                      Prioritize finding the right local partners for distribution, installation, and financing. Their expertise unlocks the market.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm md:col-span-2">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-ecomotech-green" />
                      Brand Building & Training
                    </h4>
                    <p className="text-gray-100 text-sm">
                      Build a brand known for reliability and service. Invest heavily in training local technicians, creating employment and skilled ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gradient-to-br from-ecomotech-dark-blue via-ecomotech-blue to-ecomotech-green border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Conclusion</h2>
                </div>
                <p className="text-white text-lg leading-relaxed mb-4">
                  West Africa offers a generational opportunity for forward-thinking companies in the solar and e-mobility sectors. While the path is fraught with challenges, the fundamental drivers of energy poverty, urban growth, and climate urgency create a powerful and sustainable demand.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  A strategy that is respectful of local nuances, built on strong partnerships, and underpinned by robust risk management is not just advisable—it is essential for turning immense potential into profitable and impactful reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DistributionCenter;
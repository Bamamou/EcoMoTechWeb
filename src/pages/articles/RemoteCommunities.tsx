import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  MapPin,
  Users,
  Calendar,
  Zap,
  Sun,
  Battery,
  Droplets,
  Wind,
  Factory,
  TrendingUp,
  DollarSign,
  Shield,
  Heart,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Target,
  Globe,
  Truck,
  Building,
  Home,
  Leaf,
  ArrowRight,
  BarChart,
  PieChart,
  Award,
  Settings,
  BookOpen,
  Phone,
  Wifi,
  Car,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ExternalLink
} from "lucide-react";

const RemoteCommunities = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sustainable Energy Solutions for Remote Communities in Africa',
        text: 'Comprehensive analysis of sustainable energy technologies and implementation strategies for underserved African communities',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Sustainable energy solutions transforming remote African communities!&url=${window.location.href}`);
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
                <Badge className="bg-ecomotech-green/10 text-ecomotech-dark-green border-ecomotech-green/30 px-4 py-2">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Sustainable Energy
                </Badge>
                <Badge className="bg-ecomotech-blue/10 text-ecomotech-dark-blue border-ecomotech-blue/30 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote Communities
                </Badge>
                <Badge className="bg-ecomotech-dark-green/10 text-ecomotech-dark-green border-ecomotech-dark-green/30 px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Africa
                </Badge>
                <Badge className="bg-ecomotech-dark-blue/10 text-ecomotech-dark-blue border-ecomotech-dark-blue/30 px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Energy Access
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ecomotech-dark-gray mb-6 leading-tight">
                Sustainable Energy Solutions for
                <span className="block bg-gradient-to-r from-ecomotech-green via-ecomotech-blue to-ecomotech-dark-green bg-clip-text text-transparent mt-2">
                  Remote Communities in Africa
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-ecomotech-dark-gray/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                A comprehensive analysis of sustainable energy technologies, implementation strategies, and transformative impacts for underserved African communities
              </p>
              
              <div className="flex items-center justify-center text-ecomotech-dark-gray/70 mb-8 flex-wrap gap-2">
                <time dateTime="2025-09-01" className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  September 1, 2025
                </time>
                <span className="mx-4 hidden sm:block">·</span>
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Energy Access Research Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Share Button Section */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-ecomotech-green/10 to-ecomotech-blue/10 p-6 rounded-xl border border-ecomotech-green/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-ecomotech-green" />
                  <div>
                    <h3 className="font-semibold text-ecomotech-dark-gray">Share This Article</h3>
                    <p className="text-sm text-gray-600">Help spread awareness about sustainable energy solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-ecomotech-green text-white rounded-lg hover:bg-ecomotech-dark-green transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=Sustainable energy solutions transforming remote African communities!&url=${window.location.href}`)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Tweet
                  </button>
                  <button
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-ecomotech-dark-gray via-ecomotech-dark-blue to-ecomotech-dark-green border-none shadow-2xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Lightbulb className="w-8 h-8 text-ecomotech-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Introduction</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Remote communities across Africa face persistent energy access challenges, compromising healthcare, education, livelihoods, and overall well-being. This article synthesizes the latest in sustainable energy technologies, implementation case studies, economic and social impacts, barriers and solutions, policy frameworks, and future trends to offer a holistic understanding of how to drive energy access in these underserved contexts.
                </p>
              </CardContent>
            </Card>

            {/* Challenges Section */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-full">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">1. Challenges in Providing Sustainable Energy to Remote Communities in Africa</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border border-red-200">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Sparse Populations</h4>
                        <p className="text-red-700">Low electricity demand and scattered settlements raise infrastructure costs and reduce commercial feasibility</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Grid Extension Costs</h4>
                        <p className="text-orange-700">High cost of grid expansion and limited power infrastructure inhibits rural electrification</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Economic Constraints</h4>
                        <p className="text-yellow-700">Financial sustainability barriers; many projects fail to scale beyond donor-funded pilots</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Maintenance Shortfalls</h4>
                        <p className="text-blue-700">Poor after-installation support, limited technical skills, and weak maintenance frameworks</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Policy Limitations</h4>
                        <p className="text-purple-700">Inadequate community acceptance and weak regulatory frameworks hinder uptake</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Sun className="w-6 h-6 text-ecomotech-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">2. Sustainable Energy Technologies Suited for Remote African Contexts</h3>
                </div>

                <div className="space-y-6">
                  {/* Solar PV */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Sun className="w-6 h-6 text-yellow-600" />
                      <h4 className="text-xl font-bold text-yellow-800">Solar Photovoltaic (PV) Systems</h4>
                    </div>
                    <p className="text-yellow-700 mb-3">Solar mini-grids and home systems provide scalable, modular solutions for lighting, refrigeration, and productive use.</p>
                    <div className="bg-white/60 p-3 rounded-lg">
                      <p className="text-yellow-800"><strong>Innovation:</strong> Pay-as-you-go (PAYG) models via mobile payments enhance affordability and access</p>
                    </div>
                  </div>

                  {/* Solar + Storage */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Battery className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-bold text-blue-800">Solar-plus-Storage Hybrid Mini-grids</h4>
                    </div>
                    <p className="text-blue-700">Especially where demand grows, integrating batteries ensures reliability and continuous service</p>
                  </div>

                  {/* Other Technologies Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Leaf className="w-6 h-6 text-green-600" />
                        <h4 className="text-lg font-bold text-green-800">Biomass-Based Mini-grids</h4>
                      </div>
                      <p className="text-green-700">Innovative uses of agricultural residues (rice husks, palm fruit bunches) power biomass gasifier systems</p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Droplets className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-cyan-800">Micro-Hydro Systems</h4>
                      </div>
                      <p className="text-cyan-700">Small-scale hydro systems utilizing rivers or waterfalls supply power with minimal environmental impact</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Factory className="w-6 h-6 text-gray-600" />
                        <h4 className="text-lg font-bold text-gray-800">Hybrid Solar-Diesel</h4>
                      </div>
                      <p className="text-gray-700">Effective in complex settings like refugee camps, reducing costs and emissions</p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Sun className="w-6 h-6 text-orange-600" />
                        <h4 className="text-lg font-bold text-orange-800">Concentrating Solar Power (CSP)</h4>
                      </div>
                      <p className="text-orange-700">Pilot systems show promise, though component reliability remains a challenge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="w-6 h-6 text-ecomotech-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">3. Case Studies: Real-World Impact and Lessons Learned</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  {/* Cameroon Case Study */}
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <h4 className="text-lg font-bold text-green-800">Cameroon's Renewable Energy Mapping</h4>
                      </div>
                      <p className="text-green-700 mb-3">
                        Partnership between University of Buea and local councils mapped resources (biomass, rivers, waterfalls, solar), planning 54 power generators for 480 villages—a replicable sustainability model.
                      </p>
                      <Badge className="bg-green-100 text-green-800">Systematic Planning</Badge>
                    </CardContent>
                  </Card>

                  {/* Namibia Case Study */}
                  <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        <h4 className="text-lg font-bold text-orange-800">Namibia's Tsumkwe and Gam Mini-grids</h4>
                      </div>
                      <p className="text-orange-700 mb-3">
                        Hybrid solar mini-grids revealed technical challenges: battery overheating, poor maintenance, demand-capacity mismatch. Improvements include better monitoring and maintenance protocols.
                      </p>
                      <Badge className="bg-orange-100 text-orange-800">Lessons Learned</Badge>
                    </CardContent>
                  </Card>

                  {/* Kenya & Nigeria Success */}
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <h4 className="text-lg font-bold text-blue-800">Kenya & Nigeria: Socioeconomic Impact</h4>
                      </div>
                      <p className="text-blue-700 mb-3">
                        Cohort study found household median income quadrupled, gender equality improved, and kerosene dependence reduced post-connection—transformative potential demonstrated.
                      </p>
                      <Badge className="bg-blue-100 text-blue-800">4x Income Growth</Badge>
                    </CardContent>
                  </Card>

                  {/* Mali Village */}
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="w-5 h-5 text-purple-600" />
                        <h4 className="text-lg font-bold text-purple-800">Mali's Village of Karan</h4>
                      </div>
                      <p className="text-purple-700 mb-3">
                        Solar mini-grid "jolted the village to life": enabled small businesses, saved diesel costs, improved safety. Scaling faces political instability and limited investments.
                      </p>
                      <Badge className="bg-purple-100 text-purple-800">Village Transformation</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* PAYG Entrepreneurs */}
                <div className="bg-gradient-to-r from-ecomotech-green/5 to-ecomotech-blue/5 p-6 rounded-xl border border-ecomotech-green/20">
                  <h4 className="text-xl font-bold text-ecomotech-dark-gray mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-ecomotech-green" />
                    Innovative PAYG Entrepreneurs
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-ecomotech-blue mb-2">Bboxx</h5>
                      <p className="text-gray-600">Serves 3.6M Africans via PAYG solar, batteries, devices; aims for 36M with $100M funding</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-ecomotech-green mb-2">d.light</h5>
                      <p className="text-gray-600">Reaches 30M homes across 72 countries, avoiding 38M metric tons of CO₂</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-ecomotech-dark-blue mb-2">PEG Africa</h5>
                      <p className="text-gray-600">PAYG solar and irrigation in West Africa with innovative finance models</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impacts Section */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <BarChart className="w-6 h-6 text-ecomotech-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">4. Economic, Social, and Environmental Impacts</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-bold text-green-800">Economic Impact</h4>
                    </div>
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Mini-grid access quadrupled median incomes in some areas</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Reduced generator costs significantly</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Boosted small enterprises (bakeries saved &gt;50%)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-bold text-blue-800">Social Impact</h4>
                    </div>
                    <ul className="text-blue-700 space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Better lighting improved safety</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Strengthened healthcare delivery</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Enhanced connectivity and education</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Leaf className="w-6 h-6 text-emerald-600" />
                      <h4 className="text-xl font-bold text-emerald-800">Environmental Impact</h4>
                    </div>
                    <ul className="text-emerald-700 space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Reduced reliance on fossil fuels</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Cut emissions significantly</li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Sustainable resource utilization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Barriers and Solutions */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">5. Barriers to Adoption and Strategies to Overcome Them</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
                    <thead>
                      <tr className="bg-ecomotech-light-gray">
                        <th className="text-left p-4 font-bold text-ecomotech-dark-gray border-b">Barrier</th>
                        <th className="text-left p-4 font-bold text-ecomotech-dark-gray border-b">Strategy/Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-semibold text-red-700">Economic / Financing Risks</td>
                        <td className="p-4 text-gray-700">Implement PAYG models, microfinancing, subsidies (e.g., customs duty exemptions)</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold text-orange-700">Maintenance & O&M Weaknesses</td>
                        <td className="p-4 text-gray-700">Embed maintenance from design stage, train local technicians, utilize remote-monitoring</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold text-blue-700">Community Acceptance</td>
                        <td className="p-4 text-gray-700">Involve communities in planning, governance, community ownership models</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold text-purple-700">Policy & Regulatory Gaps</td>
                        <td className="p-4 text-gray-700">Establish supportive frameworks, transparent licensing, and tariffs</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold text-red-700">Political Instability</td>
                        <td className="p-4 text-gray-700">Prioritize resilient models, local partnerships to maintain service</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-semibold text-green-700">Technology Sustainability</td>
                        <td className="p-4 text-gray-700">Use hybrid systems, diversify energy mix, invest in robust design</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Policy Frameworks */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">6. Policy Frameworks & Community Engagement Best Practices</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                      <h4 className="text-lg font-bold text-purple-800">Renewable Energy Communities</h4>
                    </div>
                    <p className="text-purple-700">
                      RECs in select African countries highlight how governance, funding, and citizen participation drive sustainability
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <h4 className="text-lg font-bold text-blue-800">Regulatory Success Stories</h4>
                    </div>
                    <p className="text-blue-700">
                      Policy regimes stimulate rural electrification through innovative business models and licensing
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-bold text-green-800">Community-Driven Implementation</h4>
                    </div>
                    <p className="text-green-700">
                      Training "Solar Mamas" and embedding local engagement ensures ownership and continuity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Trends */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">7. Future Trends & Innovations</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="w-6 h-6 text-blue-600" />
                      <h4 className="text-lg font-bold text-blue-800">Scalable PAYG Solar Expansion</h4>
                    </div>
                    <p className="text-blue-700">Companies like Bboxx and d.light, backed by substantial investments, aim to extend reach to tens of millions across Africa</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Droplets className="w-6 h-6 text-cyan-600" />
                        <h4 className="text-lg font-bold text-cyan-800">Integrated Energy-Water Solutions</h4>
                      </div>
                      <p className="text-cyan-700">Combined solar-water installations promote multi-sectoral development</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="w-6 h-6 text-green-600" />
                        <h4 className="text-lg font-bold text-green-800">Embedded O&M Solutions</h4>
                      </div>
                      <p className="text-green-700">Durable system design, community toolkits, and offline learning</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart className="w-6 h-6 text-purple-600" />
                        <h4 className="text-lg font-bold text-purple-800">Data-Driven Planning</h4>
                      </div>
                      <p className="text-purple-700">Renewable energy mapping provides strategic resource allocation insights</p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Home className="w-6 h-6 text-orange-600" />
                        <h4 className="text-lg font-bold text-orange-800">Refugee Camp Solutions</h4>
                      </div>
                      <p className="text-orange-700">Hybrid solar-diesel microgrids in humanitarian zones show cost reduction promise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EcoMoTech Product Recommendations */}
            <div className="mb-8">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-ecomotech-green/10 rounded-full">
                    <Award className="w-6 h-6 text-ecomotech-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecomotech-dark-gray">EcoMoTech Solutions for Remote Communities</h3>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  Based on the challenges and opportunities identified in this analysis, EcoMoTech offers proven, field-tested solutions specifically designed for remote African communities.
                </p>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Solar Street Lights */}
                  <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Sun className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h4 className="text-xl font-bold text-yellow-800">Solar Street Lights</h4>
                      </div>
                      
                      <p className="text-yellow-700 mb-4">
                        Autonomous lighting solutions that enhance safety, extend productive hours, and reduce crime in remote communities.
                      </p>
                      
                      <div className="space-y-2 mb-6 flex-grow">
                        <div className="flex items-center text-yellow-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                          <span>All-in-one integrated design</span>
                        </div>
                        <div className="flex items-center text-yellow-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                          <span>Motion sensor technology</span>
                        </div>
                        <div className="flex items-center text-yellow-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                          <span>5-7 year lifespan</span>
                        </div>
                        <div className="flex items-center text-yellow-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
                          <span>Remote monitoring capability</span>
                        </div>
                      </div>
                      
                      <Link 
                        to="/products/street-lights" 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                      >
                        <Sun className="mr-2 w-5 h-5" />
                        View Street Lights
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Home Systems */}
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Home className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold text-blue-800">Solar Home Systems</h4>
                      </div>
                      
                      <p className="text-blue-700 mb-4">
                        Complete household energy solutions providing reliable power for lighting, phone charging, and small appliances.
                      </p>
                      
                      <div className="space-y-2 mb-6 flex-grow">
                        <div className="flex items-center text-blue-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          <span>Modular expandable design</span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          <span>PAYG financing options</span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          <span>Multiple power outlets</span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          <span>Mobile app monitoring</span>
                        </div>
                      </div>
                      
                      <Link 
                        to="/products/home-systems" 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                      >
                        <Home className="mr-2 w-5 h-5" />
                        View Home Systems
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Battery Energy Storage */}
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Battery className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-green-800">Battery Energy Storage</h4>
                      </div>
                      
                      <p className="text-green-700 mb-4">
                        Advanced lithium battery systems for mini-grids and community installations with smart management systems.
                      </p>
                      
                      <div className="space-y-2 mb-6 flex-grow">
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          <span>Long-cycle lithium technology</span>
                        </div>
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          <span>Smart battery management</span>
                        </div>
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          <span>Climate-resistant design</span>
                        </div>
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          <span>Scalable configurations</span>
                        </div>
                      </div>
                      
                      <Link 
                        to="/products/energy-storage" 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                      >
                        <Battery className="mr-2 w-5 h-5" />
                        View Energy Storage
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                {/* Call to Action */}
                <div className="mt-8 bg-gradient-to-r from-ecomotech-dark-gray to-ecomotech-dark-blue p-6 rounded-xl text-center">
                  <h4 className="text-xl font-bold text-white mb-3">Ready to Transform Your Community?</h4>
                  <p className="text-blue-100 mb-4">
                    Contact EcoMoTech to discuss customized sustainable energy solutions for your remote community project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-ecomotech-green text-white font-medium rounded-lg hover:bg-ecomotech-dark-green transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get a Consultation
                    </Link>
                    <Link
                      to="/products"
                      className="inline-flex items-center px-6 py-3 bg-white text-ecomotech-dark-gray font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <Card className="bg-gradient-to-br from-ecomotech-dark-gray via-ecomotech-dark-blue to-ecomotech-dark-green border-none shadow-2xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <ArrowRight className="w-8 h-8 text-ecomotech-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Conclusion</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Sustainable energy technologies—solar PV, micro-hydro, biomass, hybrid mini-grids—offer viable, transformative pathways for remote African communities. Real-world projects reveal powerful economic, social, and environmental gains.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  At the same time, achieving scale requires addressing economic viability, strong O&M systems, inclusive governance, and enabling policies. Innovations in financing (e.g., PAYG), integrated development approaches, long-term maintenance frameworks, and data-centric planning herald a promising future. By centering communities, empowering local actors, and smartly leveraging technology, Africa can drive equitable, reliable, and sustainable energy access for all its remote communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RemoteCommunities;
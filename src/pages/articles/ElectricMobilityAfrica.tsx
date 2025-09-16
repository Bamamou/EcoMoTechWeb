import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Car, 
  Zap, 
  Settings, 
  Shield, 
  CheckCircle, 
  TrendingUp,
  Building,
  MapPin,
  Users,
  Globe,
  Calendar,
  Share2,
  Target,
  BarChart3,
  Activity,
  Leaf,
  Battery,
  Truck,
  Bus,
  Bike,
  AlertTriangle,
  DollarSign,
  Wrench,
  Factory
} from "lucide-react";

const ElectricMobilityAfrica = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Revolutionizing Transportation: Electric Mobility Takes Root in Africa',
        text: 'Discover how electric mobility is transforming urban transportation across African cities.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Revolutionizing Transportation: Electric Mobility Takes Root in Africa&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-green-600 text-white">
              Electric Mobility
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Revolutionizing Transportation: Electric Mobility Takes Root in Africa
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>October 15, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Marcus Adebayo</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            
            <ResponsiveImage
              src="/EcoMoTechWeb/images/tricycles/passenger cars.webp"
              alt="Electric Motorcycles in Africa"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Africa is entering a pivotal moment in its urban development journey. Rapid urbanization, population growth, and increasing vehicle ownership are straining transportation systems across the continent. Amid these challenges, electric mobility (e-mobility) is emerging as a transformative solution, offering cleaner, more efficient, and inclusive transport options for African cities and peri-urban areas.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">EcoMoTech Impact</h3>
                    <p className="text-gray-700">
                      EcoMoTech's pioneering electric mobility program has reached a significant milestone with over 1,000 electric motorcycles and tricycles now operating across five major African cities, creating over 500 direct jobs and reducing carbon emissions by an estimated 1,200 tons annually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transportation Challenges Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Transportation Challenges in African Cities</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Urban centers such as Lagos, Nairobi, Johannesburg, and Accra face mounting pressure from traffic congestion and inadequate public transport infrastructure:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-red-900">
                    <AlertTriangle className="w-5 h-5" />
                    Current Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Traffic congestion and inadequate public transport
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Diesel/petrol dependency exacerbating air pollution
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      High fuel import bills straining national budgets
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Limited investment in sustainable mass transit
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-900">
                    <Target className="w-5 h-5" />
                    Urban Transport Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Informal minibuses and motorcycles dominate many transport networks, but their environmental impact is significant:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High greenhouse gas emissions per passenger</li>
                    <li>• Limited route optimization and scheduling</li>
                    <li>• Safety and maintenance concerns</li>
                    <li>• Noise pollution in urban environments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Technological Solutions Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Electric Mobility Solutions Across Africa</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              A diverse range of electric mobility technologies is being introduced across Africa, each tailored to specific urban and peri-urban needs:
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bus className="w-5 h-5 text-blue-600" />
                    Electric Buses (e-buses)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Cities like Kigali and Cape Town are piloting e-bus fleets to modernize public transport.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Benefits:</strong> Reduced operating costs, zero emissions along major corridors</p>
                    <p><strong>Applications:</strong> Urban mass transit, BRT systems</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Car className="w-5 h-5 text-green-600" />
                    Electric Motorcycles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Startups in Kenya, Rwanda, and Uganda are electrifying motorcycle taxis ("boda bodas").
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Innovation:</strong> Swappable battery systems for high-usage operations</p>
                    <p><strong>Impact:</strong> Last-mile transport transformation</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bike className="w-5 h-5 text-purple-600" />
                    Micro-Mobility Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Electric bicycles and scooters gaining traction in dense urban areas.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Use Case:</strong> First- and last-mile connectivity</p>
                    <p><strong>Benefit:</strong> Congestion alleviation in city centers</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Truck className="w-5 h-5 text-orange-600" />
                    Commercial Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Electric tuk-tuks and delivery vans for urban logistics.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Advantages:</strong> Reduced noise and emissions in markets</p>
                    <p><strong>Applications:</strong> Urban freight, food delivery</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Local Adaptation Key:</strong> The suitability of these solutions depends on urban density, travel patterns, and electricity access, underscoring the need for locally adapted strategies.
              </p>
            </div>
          </div>
          
          {/* Infrastructure Development Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Infrastructure Development: Charging and Support Systems</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Widespread adoption of electric mobility hinges on the availability of robust charging and maintenance ecosystems:
            </p>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    Charging Networks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Leading Countries:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• <strong>Kenya:</strong> Public and private charging stations</li>
                        <li>• <strong>South Africa:</strong> Solar-coupled charging infrastructure</li>
                        <li>• <strong>Morocco:</strong> Strategic charging network deployment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Innovation Highlights:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Battery-swapping hubs for high-turnover fleets</li>
                        <li>• Solar PV integration for sustainable power</li>
                        <li>• Cost-effective solutions for e-motorcycles</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Grid Capacity and Renewable Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Utilities investing in grid stability for increased demand
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Integration of renewable generation ensures sustainable supply
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Off-grid and hybrid charging systems for unreliable grid areas
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Wrench className="w-5 h-5 text-purple-600" />
                    Maintenance and After-Sales Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Building local expertise is essential for long-term reliability and job creation:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Wrench className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      EV diagnostics and repair training programs
                    </li>
                    <li className="flex items-start gap-2">
                      <Battery className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      Battery maintenance and refurbishment services
                    </li>
                    <li className="flex items-start gap-2">
                      <Settings className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      Component recycling and circular economy practices
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Policy Framework Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Policy and Regulatory Frameworks</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Governments and regional bodies are introducing initiatives to catalyze electric mobility adoption:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-green-900">
                    <DollarSign className="w-5 h-5" />
                    Financial Incentives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">Countries leading with fiscal support:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Rwanda:</strong> Reduced import duties on EVs</li>
                    <li>• <strong>Kenya:</strong> VAT exemptions on electric vehicles</li>
                    <li>• <strong>Mauritius:</strong> Subsidies for EV batteries</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-900">
                    <Target className="w-5 h-5" />
                    Strategic Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                      National e-mobility roadmaps development
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                      Alignment with Paris Agreement commitments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                      Integration with urban development plans
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-purple-900">
                    <Users className="w-5 h-5" />
                    Public-Private Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 text-sm">
                    Collaborations between governments, local entrepreneurs, and international donors are accelerating pilot projects and scaling solutions across the continent.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-orange-900">
                    <Shield className="w-5 h-5" />
                    Standards & Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Battery safety regulations</li>
                    <li>• Charging protocol standards</li>
                    <li>• End-of-life management guidelines</li>
                    <li>• Consumer confidence protection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Socioeconomic Impacts Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <h2 className="text-2xl font-bold text-gray-900">Socioeconomic Impacts</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Electric mobility promises wide-ranging benefits beyond environmental gains:
            </p>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Factory className="w-5 h-5 text-blue-600" />
                    Job Creation and Economic Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Employment Opportunities:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• EV assembly plant operations</li>
                        <li>• Battery production facilities</li>
                        <li>• Charging service providers</li>
                        <li>• Maintenance and repair services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Skills Development:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Technical training programs</li>
                        <li>• Engineering capabilities building</li>
                        <li>• Entrepreneurship support</li>
                        <li>• Local innovation ecosystem</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Affordability and Operating Economics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-green-800 text-sm">
                      <strong>Cost Analysis:</strong> Although upfront costs remain high, EVs offer significant savings on fuel and maintenance over their lifespan, particularly beneficial for commercial fleets.
                    </p>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Lower operational costs per kilometer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Reduced maintenance requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Predictable energy costs with renewable integration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="w-5 h-5 text-purple-600" />
                    Accessibility and Social Equity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Affordable shared e-mobility options enhance access to essential services for underserved populations:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enhanced Access:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Education and healthcare services</li>
                        <li>• Economic opportunities</li>
                        <li>• Social and community activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Priority Groups:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Women and youth empowerment</li>
                        <li>• Rural and peri-urban communities</li>
                        <li>• Low-income populations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    Innovation and Entrepreneurship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Local startups are driving innovation across the e-mobility ecosystem:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      Battery-swapping network development
                    </li>
                    <li className="flex items-start gap-2">
                      <Factory className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      Local e-bike and motorcycle assembly
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      Tailored financing models for informal-sector workers
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Environmental Benefits Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
              <h2 className="text-2xl font-bold text-gray-900">Environmental Benefits</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Transitioning to electric mobility could substantially reduce Africa's urban carbon footprint:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-green-900 mb-2">Emission Reductions</h3>
                    <p className="text-sm text-gray-700">
                      Electric vehicles powered by renewable grids achieve zero tailpipe emissions, significantly improving air quality and reducing greenhouse gases.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Noise Reduction</h3>
                    <p className="text-sm text-gray-700">
                      Quieter electric vehicles enhance quality of life in crowded urban environments, reducing stress and improving livability.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Settings className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-purple-900 mb-2">Resource Efficiency</h3>
                    <p className="text-sm text-gray-700">
                      Integrated recycling systems for batteries and components promote circular economy practices throughout the product lifecycle.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Case Studies Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">7</div>
              <h2 className="text-2xl font-bold text-gray-900">Case Studies: Pioneering African Cities and Projects</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-900">
                    <MapPin className="w-5 h-5" />
                    Kigali, Rwanda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">
                    <strong>Bus Modernization Program:</strong> Incorporating e-buses and intelligent transport systems.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Regional leader in sustainable mobility</li>
                    <li>• Integrated smart transport management</li>
                    <li>• Public-private collaboration model</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-green-900">
                    <Car className="w-5 h-5" />
                    Nairobi, Kenya
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">
                    <strong>Motorcycle Taxi Electrification:</strong> Startups like Roam and Ampersand leading innovation.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Swappable battery network deployment</li>
                    <li>• Reduced operational costs for drivers</li>
                    <li>• Scalable business model development</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-yellow-900">
                    <Zap className="w-5 h-5" />
                    Cape Town, South Africa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">
                    <strong>Renewable-Powered Transport:</strong> Solar charging stations supporting e-buses and commercial EVs.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Solar-powered charging infrastructure</li>
                    <li>• Light commercial EV integration</li>
                    <li>• Renewable energy showcase</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-orange-900">
                    <Building className="w-5 h-5" />
                    Lagos, Nigeria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">
                    <strong>Metropolitan Innovation:</strong> Pilot programs addressing West Africa's largest city challenges.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• E-bus corridor development</li>
                    <li>• Private sector e-bike sharing</li>
                    <li>• Last-mile solution integration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Future Outlook Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">8</div>
              <h2 className="text-2xl font-bold text-gray-900">Future Outlook: Scalability and Innovation</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Africa's electric mobility revolution is still in its early stages but holds enormous potential. Key priorities for scaling adoption include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-blue-900">Growth Priorities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Expanding affordable financing options for vehicles and infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Strengthening grid resilience and renewable integration
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      Fostering regional supply chains for batteries and components
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-900">Innovation Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Enhancing cross-border cooperation and policy harmonization
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Supporting R&D in battery recycling and lightweight design
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Advancing smart charging technologies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-orange-900">
                  <AlertTriangle className="w-5 h-5" />
                  Remaining Barriers to Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  Coordinated action among governments, investors, and civil society is needed to overcome:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• High upfront capital costs</li>
                    <li>• Limited consumer awareness</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Uneven policy enforcement</li>
                    <li>• Infrastructure deployment gaps</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Financing accessibility</li>
                    <li>• Technical capacity constraints</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Conclusion */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-green-900">
                  <Leaf className="w-5 h-5" />
                  Conclusion: Catalyzing Africa's Urban Future
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Electric mobility is more than a technological trend; it is a catalyst for reshaping Africa's urban future. By reducing emissions, creating jobs, and improving the quality of life for millions, e-mobility offers a path toward cleaner, more equitable, and economically vibrant cities.
                </p>
                <p className="text-gray-800 leading-relaxed mb-4">
                  EcoMoTech's pioneering work across five major African cities demonstrates the tangible benefits of electric mobility adoption. Our vehicles are specifically designed to handle local conditions and are supported by a growing network of charging stations and service centers, creating a sustainable ecosystem for urban transport transformation.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  With sustained commitment from policymakers, innovators, and communities, Africa can leapfrog traditional transport models and lead a new era of sustainable urban mobility. The foundation has been laid, and the momentum is building for a cleaner, more connected future.
                </p>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>EcoMoTech Impact:</strong> Over 1,000 electric vehicles deployed, 500+ jobs created, 1,200 tons of CO₂ emissions reduced annually across major African cities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-4xl mx-auto">
            <Separator className="my-8" />
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Join Africa's Electric Mobility Revolution</h3>
              <p className="text-gray-800 mb-4">
                Discover how EcoMoTech's electric mobility solutions can transform urban transport in your community while creating economic opportunities and environmental benefits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products/electric-motorcycles" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Car className="w-4 h-4" />
                  Explore Electric Vehicles
                </Link>
                <Link 
                  to="/products/electric-tricycles" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <Truck className="w-4 h-4" />
                  Commercial Solutions
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ElectricMobilityAfrica;
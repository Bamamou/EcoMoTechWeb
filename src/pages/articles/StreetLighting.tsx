import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
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
  Sun,
  Battery
} from "lucide-react";

const StreetLighting = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Solar Street Lighting Transforms Urban and Rural Safety',
        text: 'Discover how solar street lighting technology enhances safety, accessibility, and sustainability across diverse communities.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Solar Street Lighting Transforms Urban and Rural Safety&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-blue-600 text-white">
              Urban & Rural Lighting Solutions
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Solar Street Lighting Transforms Urban and Rural Safety
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>November 5, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Case Studies</span>
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
              src="/EcoMoTechWeb/images/News/Ecomotech Solar Street Lighting Transforms Urban Safety.jpg"
              alt="Solar Street Lighting Installation"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Solar street lighting has emerged as a transformative solution for enhancing safety, accessibility, and sustainability in communities worldwide. By combining renewable energy with advanced lighting technologies, these systems offer reliable, autonomous illumination across diverse environments — from bustling city streets to remote rural villages.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Impact</h3>
                    <p className="text-gray-700">
                      EcoMoTech's comprehensive 18-month study reveals a remarkable 60% reduction in nighttime incidents across urban neighborhoods, while delivering 40% cost savings compared to conventional lighting systems over a 10-year period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology Overview Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Overview of Solar Street Lighting Technology</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Modern solar street lighting systems integrate several core components to create self-contained, grid-independent lighting solutions:
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sun className="w-5 h-5 text-blue-600" />
                    Solar Panels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Photovoltaic modules convert sunlight into electrical energy, typically mounted atop lighting poles for optimal exposure and maximum energy capture throughout the day.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Battery className="w-5 h-5 text-blue-600" />
                    Energy Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    High-performance lithium-ion or lead-acid batteries store energy for night-time use, ensuring consistent lighting even during extended cloudy periods.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    LED Luminaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Energy-efficient LEDs provide bright, uniform illumination with minimal power consumption and extended service life, reducing maintenance requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Smart Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Intelligent controllers regulate charging, discharging, and dimming schedules. Motion sensors enable adaptive lighting based on activity levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Advantages Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Advantages over Conventional Lighting</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Compared with grid-powered streetlights, solar street lighting offers significant benefits across multiple dimensions:
            </p>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Zap className="w-5 h-5 text-green-600" />
                    Energy Efficiency & Sustainability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      LED fixtures powered by solar energy eliminate electricity costs completely
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Reduces dependence on fossil fuels and grid infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Zero operational emissions support climate goals
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Cost-Effectiveness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      40% cost reduction over 10-year period compared to conventional systems
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Eliminates trenching, cabling, and electrical connection costs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Minimal maintenance requirements reduce operational expenses
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Minimizes ecological disturbance during installation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Supports renewable energy adoption and carbon neutrality goals
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Reduces strain on electrical grid infrastructure
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Urban Safety Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Safety Enhancements in Urban Areas</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Well-lit public spaces are vital for urban safety. EcoMoTech's installation of over 500 StreetBright solar-powered LED systems across five urban districts demonstrated significant safety improvements:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5 text-red-600" />
                    Crime Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    Adequate night-time lighting deters criminal activity by increasing visibility and community presence.
                  </p>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700 font-semibold">60% reduction in nighttime safety incidents</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                    Pedestrian & Vehicle Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Improved visibility lowers accident rates and enhances confidence for pedestrians, cyclists, and drivers alike.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building className="w-5 h-5 text-green-600" />
                    Public Space Usability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Parks, walkways, and transit stops remain accessible after dark, encouraging social and economic activity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Grid Independence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Autonomous power systems ensure reliable illumination even during grid outages, reinforcing public trust in city infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <blockquote className="text-gray-800 italic text-lg">
                "Beyond the obvious environmental benefits, this project demonstrates how sustainable technology can directly improve quality of life and community safety."
              </blockquote>
              <cite className="text-gray-600 mt-2 block">— Robert Kim, Urban Solutions Manager at EcoMoTech</cite>
            </div>
          </div>
          
          {/* Rural Challenges Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Addressing Rural Challenges</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Rural communities often face unique barriers that solar street lighting effectively addresses:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Infrastructure Gaps</h3>
                    <p className="text-sm text-gray-700">Limited or no grid infrastructure in remote areas</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">High Extension Costs</h3>
                    <p className="text-sm text-gray-700">Expensive electrical network extensions to sparse populations</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Difficult Terrain</h3>
                    <p className="text-sm text-gray-700">Challenging geographical conditions for conventional installation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-green-900">
                  <CheckCircle className="w-5 h-5" />
                  Solar Lighting Solutions for Rural Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  Solar street lighting bypasses these challenges by providing independent, off-grid illumination. Systems can be rapidly deployed with minimal civil works, bringing night-time safety to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Village roads and pathways
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Market areas and commercial zones
                    </li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Healthcare facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Schools and community centers
                    </li>
                  </ul>
                </div>
                <p className="text-gray-800 mt-4">
                  This reliable lighting fosters economic opportunities, supports education, and reduces risks associated with unlit pathways.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Implementation Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <h2 className="text-2xl font-bold text-gray-900">Implementation, Maintenance, and Scalability</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Successful deployment of solar street lighting requires careful planning and stakeholder engagement:
            </p>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Target className="w-5 h-5 text-blue-600" />
                    Site Assessment & System Sizing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Assessment Factors:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Solar resource availability and seasonal variations</li>
                        <li>• Shading analysis throughout the day</li>
                        <li>• Expected traffic levels and usage patterns</li>
                        <li>• Local climate conditions and weather patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">System Configuration:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Match panel capacity to energy requirements</li>
                        <li>• Size battery autonomy for cloudy periods</li>
                        <li>• Optimize luminaire output for coverage needs</li>
                        <li>• Configure smart controls for efficiency</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Settings className="w-5 h-5 text-green-600" />
                    Maintenance & Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Periodic cleaning of solar panels for optimal performance
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Regular battery health checks and replacement scheduling
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Firmware updates for controllers and monitoring systems
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Remote monitoring capabilities for proactive maintenance
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building className="w-5 h-5 text-purple-600" />
                    Scalability & Stakeholder Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Scalable Implementation:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Modular designs enable phased rollouts</li>
                        <li>• Flexible financing options adapt to budgets</li>
                        <li>• Standardized components reduce costs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Stakeholder Involvement:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Local authorities for permitting and support</li>
                        <li>• Community residents for acceptance</li>
                        <li>• Financing partners for project viability</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Case Studies Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
              <h2 className="text-2xl font-bold text-gray-900">Case Studies: Real-World Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                    <Building className="w-5 h-5" />
                    Urban Example: Nairobi, Kenya
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Installation of solar-powered streetlights in key neighborhoods achieved remarkable results:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">40% reduction</span> in petty crime rates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Extended business hours for street vendors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Increased foot traffic and economic activity
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-green-900">
                    <MapPin className="w-5 h-5" />
                    Rural Example: Rajasthan, India
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    Off-grid solar lighting in village streets and marketplaces delivered significant community benefits:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Increased evening commerce and market activity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Improved women's safety during night hours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Fostered stronger community participation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-700 mt-6 text-center">
              These successes highlight solar lighting's ability to generate measurable social and economic benefits across diverse community contexts.
            </p>
          </div>
          
          {/* Future Trends Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">7</div>
              <h2 className="text-2xl font-bold text-gray-900">Future Trends and Technological Advancements</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              The next generation of solar street lighting promises even greater effectiveness through emerging technologies:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Smart Grids & IoT Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Remote monitoring, predictive maintenance, and adaptive dimming systems optimize performance and reduce operational costs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sun className="w-5 h-5 text-yellow-600" />
                    High-Efficiency Solar Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Improved cell technologies capture more energy from limited sunlight, even in challenging low-light conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Battery className="w-5 h-5 text-green-600" />
                    Enhanced Battery Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Solid-state and advanced lithium chemistries extend operational life and improve resilience in extreme conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Hybrid Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Combining solar with small wind turbines or grid-tied backup options improves reliability in challenging climates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                  <Leaf className="w-5 h-5" />
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Solar street lighting is more than an energy solution — it is a catalyst for safer, more inclusive communities. By providing dependable illumination in both urban and rural contexts, it enhances security, supports economic activity, and aligns with global sustainability goals.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  For policy-makers, urban planners, and rural development experts, investing in solar street lighting represents a forward-looking strategy to improve quality of life while protecting the planet. EcoMoTech's proven track record of successful implementations demonstrates the transformative potential of this technology across diverse community contexts.
                </p>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-blue-800">
                    Based on these successful results, three additional cities have initiated similar programs using EcoMoTech's solar street lighting technology, with installations scheduled to begin next quarter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Technology Specifications */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Settings className="w-5 h-5 text-blue-600" />
                  EcoMoTech StreetBright Technology Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Advanced LED technology for maximum efficiency
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Smart motion detection and adaptive brightness
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Remote monitoring and control capabilities
                    </li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Fully autonomous grid-independent operation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      20-year service life with minimal maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Weather-resistant design for all climates
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-4xl mx-auto">
            <Separator className="my-8" />
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Transform Your Community with Solar Street Lighting</h3>
              <p className="text-gray-800 mb-4">
                Discover how EcoMoTech's StreetBright solar street lighting solutions can enhance safety, reduce costs, and support sustainability goals in your community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products/street-lights" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Lightbulb className="w-4 h-4" />
                  Explore StreetBright Solutions
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Contact Our Experts
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
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  TrendingDown, 
  Shield, 
  Leaf, 
  BarChart3, 
  Camera, 
  Thermometer,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Users,
  ClipboardCheck,
  Target,
  LineChart,
  DollarSign,
  Home,
  Building2,
  Factory,
  Play,
  Phone,
  Mail
} from "lucide-react";

const EnergyAssessment = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section with Video Background Effect */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-green-500/30 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Certified Energy Auditors</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Unlock Your <span className="text-green-400">Energy</span> Savings Potential
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Comprehensive energy efficiency assessments that identify up to 40% savings opportunities 
                  in your energy consumption through advanced diagnostics and AI-powered analytics.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">30%</div>
                    <div className="text-sm text-blue-200">Average Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">2,500+</div>
                    <div className="text-sm text-blue-200">Homes Assessed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">98%</div>
                    <div className="text-sm text-blue-200">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Free Assessment Quote
                  </Button>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Process Video
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Energy Efficiency Score</span>
                      <span className="text-2xl font-bold text-green-400">92/100</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-200">Heating & Cooling</span>
                        <div className="flex-1 mx-3 bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-200">Insulation</span>
                        <div className="flex-1 mx-3 bg-white/20 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full w-3/5"></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-200">Windows & Doors</span>
                        <div className="flex-1 mx-3 bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full w-5/6"></div>
                        </div>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-200">Lighting</span>
                        <div className="flex-1 mx-3 bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full w-full"></div>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tailored Assessment Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified energy auditors provide specialized assessments for every property type, 
                using industry-leading technology and methodologies.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: 'residential', label: 'Residential', icon: Home },
                { id: 'commercial', label: 'Commercial', icon: Building2 },
                { id: 'industrial', label: 'Industrial', icon: Factory }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-blue-50 shadow-sm'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {activeTab === 'residential' && [
                {
                  title: "Home Energy Audit",
                  description: "Comprehensive assessment of your home's energy performance including HVAC systems, insulation, and air sealing.",
                  features: ["Blower door test", "Thermal imaging", "Duct leakage testing", "Appliance efficiency review"],
                  price: "From $299",
                  savings: "Up to $2,400/year"
                },
                {
                  title: "Solar Readiness Assessment",
                  description: "Evaluate your home's solar potential with shading analysis, roof assessment, and financial projections.",
                  features: ["Roof condition analysis", "Shading assessment", "Energy usage patterns", "ROI calculations"],
                  price: "From $199",
                  savings: "Up to $3,000/year"
                },
                {
                  title: "Green Home Certification",
                  description: "Prepare your home for ENERGY STAR or green building certification with detailed compliance assessment.",
                  features: ["Certification roadmap", "Performance testing", "Documentation support", "Implementation guidance"],
                  price: "From $599",
                  savings: "Increased home value"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    hoveredCard === index ? 'border-blue-500' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                          <div className="text-sm text-gray-500">Potential savings: {service.savings}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-600 font-semibold">ROI: 6-12 months</div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                        Schedule Assessment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {activeTab === 'commercial' && (
                <div className="lg:col-span-3 space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Commercial Building Energy Assessments
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Comprehensive energy efficiency evaluations designed specifically for commercial properties, 
                      helping businesses reduce operational costs and improve building performance.
                    </p>
                  </div>

                  {/* Commercial Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Energy Usage Analysis</h4>
                      <p className="text-sm text-gray-600">Detailed analysis of electricity, gas, and water consumption patterns across all building systems.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <Thermometer className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">HVAC System Evaluation</h4>
                      <p className="text-sm text-gray-600">Comprehensive assessment of heating, ventilation, and air conditioning efficiency and performance.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lighting Assessment</h4>
                      <p className="text-sm text-gray-600">LED upgrade opportunities, daylight harvesting, and smart lighting control system recommendations.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100">
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Building Envelope</h4>
                      <p className="text-sm text-gray-600">Insulation, windows, doors, and air sealing assessments to minimize energy loss.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Equipment Auditing</h4>
                      <p className="text-sm text-gray-600">Office equipment, kitchen appliances, and specialized commercial equipment efficiency evaluation.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <LineChart className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">ROI Analysis</h4>
                      <p className="text-sm text-gray-600">Detailed financial analysis with payback periods and long-term savings projections.</p>
                    </div>
                  </div>

                  {/* Commercial Building Types */}
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Commercial Property Types We Serve</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Building2 className="w-8 h-8 text-blue-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Office Buildings</h5>
                        <p className="text-xs text-gray-600">Multi-story offices, corporate headquarters</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="w-8 h-8 text-green-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Retail Spaces</h5>
                        <p className="text-xs text-gray-600">Shopping centers, standalone stores</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Home className="w-8 h-8 text-purple-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Hospitality</h5>
                        <p className="text-xs text-gray-600">Hotels, restaurants, entertainment</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <ClipboardCheck className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Healthcare</h5>
                        <p className="text-xs text-gray-600">Clinics, medical offices, facilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Commercial Assessment Quote
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'industrial' && (
                <div className="lg:col-span-3 space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
                      <Factory className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Industrial Energy Auditing & Optimization
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Advanced energy auditing solutions for manufacturing facilities, warehouses, and industrial operations. 
                      Specialized expertise in high-energy consumption environments and complex industrial processes.
                    </p>
                  </div>

                  {/* Industrial Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <Factory className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Process Energy Analysis</h4>
                      <p className="text-sm text-gray-600">Detailed analysis of manufacturing processes, production lines, and industrial equipment energy consumption.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100">
                      <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Motor & Drive Systems</h4>
                      <p className="text-sm text-gray-600">Variable frequency drives, motor efficiency upgrades, and power factor correction assessments.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                        <Thermometer className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Compressed Air Systems</h4>
                      <p className="text-sm text-gray-600">Compressed air efficiency, leak detection, and system optimization for industrial pneumatics.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl border border-rose-100">
                      <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Energy Monitoring Systems</h4>
                      <p className="text-sm text-gray-600">Real-time energy monitoring, demand management, and automated control system integration.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Waste Heat Recovery</h4>
                      <p className="text-sm text-gray-600">Industrial waste heat capture and utilization systems to improve overall energy efficiency.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl border border-violet-100">
                      <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Utility Rate Analysis</h4>
                      <p className="text-sm text-gray-600">Peak demand management, time-of-use optimization, and utility incentive program identification.</p>
                    </div>
                  </div>

                  {/* Industrial Sectors */}
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industrial Sectors We Serve</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Factory className="w-8 h-8 text-orange-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Manufacturing</h5>
                        <p className="text-xs text-gray-600">Production facilities, assembly plants</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Building2 className="w-8 h-8 text-blue-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Warehousing</h5>
                        <p className="text-xs text-gray-600">Distribution centers, cold storage</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Food Processing</h5>
                        <p className="text-xs text-gray-600">Food manufacturing, processing plants</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Zap className="w-8 h-8 text-purple-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-1">Data Centers</h5>
                        <p className="text-xs text-gray-600">Server farms, telecommunications</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2" />
                      Request Industrial Assessment
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Assessment Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technology and data analytics to provide the most accurate 
                and comprehensive energy assessments in the industry.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Thermal Imaging",
                  description: "FLIR thermal cameras detect heat loss patterns and insulation gaps invisible to the naked eye."
                },
                {
                  icon: BarChart3,
                  title: "Smart Analytics",
                  description: "AI-powered analysis of energy usage patterns and equipment performance optimization."
                },
                {
                  icon: Thermometer,
                  title: "Building Diagnostics",
                  description: "Blower door testing, duct leakage detection, and indoor air quality assessments."
                },
                {
                  icon: LineChart,
                  title: "Performance Modeling",
                  description: "Advanced building energy modeling to predict savings from recommended improvements."
                }
              ].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <tech.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Proven Assessment Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that delivers actionable insights and measurable results for your energy efficiency goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Analysis",
                  description: "Review 24 months of utility bills and conduct preliminary energy usage analysis.",
                  icon: BarChart3
                },
                {
                  step: "02", 
                  title: "On-Site Inspection",
                  description: "Comprehensive facility walkthrough with advanced diagnostic equipment.",
                  icon: ClipboardCheck
                },
                {
                  step: "03",
                  title: "Performance Testing",
                  description: "Blower door tests, thermal imaging, and equipment efficiency measurements.",
                  icon: Target
                },
                {
                  step: "04",
                  title: "Recommendations",
                  description: "Detailed report with prioritized improvements and ROI projections.",
                  icon: CheckCircle2
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl font-bold text-blue-100">{process.step}</div>
                      <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                        <process.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 z-10">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Immediate & Long-term <span className="text-green-400">Benefits</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: DollarSign,
                      title: "Reduce Energy Costs",
                      description: "Average savings of 20-40% on monthly utility bills through targeted efficiency improvements."
                    },
                    {
                      icon: TrendingDown,
                      title: "Lower Carbon Footprint",
                      description: "Reduce greenhouse gas emissions by up to 30% with recommended energy efficiency measures."
                    },
                    {
                      icon: Shield,
                      title: "Regulatory Compliance",
                      description: "Meet building codes, ENERGY STAR requirements, and environmental regulations."
                    },
                    {
                      icon: Star,
                      title: "Increased Property Value",
                      description: "Energy-efficient properties command 5-10% higher market values and faster sales."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="bg-green-500/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-8 text-center">Return on Investment</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-gray-700">
                    <span className="text-gray-300">Assessment Cost</span>
                    <span className="text-2xl font-bold text-white">$299</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-b border-gray-700">
                    <span className="text-gray-300">Average Annual Savings</span>
                    <span className="text-2xl font-bold text-green-400">$2,400</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-b border-gray-700">
                    <span className="text-gray-300">Payback Period</span>
                    <span className="text-2xl font-bold text-blue-400">1.5 months</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-center">
                    <div className="text-sm text-white/80 mb-2">20-Year Net Savings</div>
                    <div className="text-4xl font-bold text-white">$47,701</div>
                    <div className="text-sm text-white/80 mt-2">Based on average client results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Unlock Your Energy Savings?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Schedule your comprehensive energy assessment today and start saving money while reducing your environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call (0086) 18810799128-ENERGY
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm">
                <Mail className="w-5 h-5 mr-2" />
                Get Online Quote
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                <span className="text-sm">Free consultation • No obligation • Same-day quotes available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnergyAssessment;
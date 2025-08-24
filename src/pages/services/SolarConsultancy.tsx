import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sun, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Target, 
  Award, 
  Users, 
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  FileText,
  MapPin,
  Clock,
  DollarSign,
  Zap,
  Settings,
  Globe,
  Smartphone,
  Leaf,
  Building2,
  Home,
  Factory,
  Play,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Quote,
  Calendar,
  Download,
  Eye,
  Layers,
  Database,
  PieChart,
  LineChart,
  Activity
} from "lucide-react";

const SolarConsultancy = () => {
  const [activeService, setActiveService] = useState('feasibility');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { icon: <Sun className="w-8 h-8" />, value: "2,500+", label: "MW Capacity Analyzed" },
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Projects Consulted" },
    { icon: <Award className="w-8 h-8" />, value: "98%", label: "Project Success Rate" },
    { icon: <Globe className="w-8 h-8" />, value: "15+", label: "Countries Served" }
  ];

  const consultancyServices = {
    feasibility: {
      title: "Feasibility Studies & Site Assessment",
      description: "Comprehensive analysis of solar potential, technical constraints, and economic viability",
      icon: <Calculator className="w-6 h-6" />,
      color: "ecomotech-blue",
      details: [
        "Solar resource assessment and irradiation analysis",
        "Site suitability evaluation and shading studies",
        "Grid connection feasibility and capacity analysis", 
        "Environmental impact assessment",
        "Regulatory compliance review",
        "Preliminary financial modeling"
      ]
    },
    design: {
      title: "System Design & Engineering",
      description: "Detailed technical design and engineering solutions for optimal performance",
      icon: <Settings className="w-6 h-6" />,
      color: "ecomotech-green",
      details: [
        "PV system layout optimization",
        "Component selection and specification",
        "Electrical design and single-line diagrams",
        "Structural engineering analysis",
        "Performance modeling and energy yield",
        "Safety and protection system design"
      ]
    },
    financial: {
      title: "Financial Analysis & Investment",
      description: "Comprehensive financial modeling and investment strategy development",
      icon: <DollarSign className="w-6 h-6" />,
      color: "ecomotech-dark-green",
      details: [
        "Detailed LCOE and IRR calculations",
        "Cash flow modeling and NPV analysis",
        "Financing structure optimization",
        "Risk assessment and mitigation",
        "Tax incentive and subsidy analysis",
        "Investment grade financial reports"
      ]
    },
    management: {
      title: "Project Management & Oversight",
      description: "End-to-end project management ensuring successful delivery",
      icon: <Target className="w-6 h-6" />,
      color: "ecomotech-dark-blue",
      details: [
        "Project planning and scheduling",
        "Contractor selection and management",
        "Quality assurance and inspections",
        "Risk management and mitigation",
        "Stakeholder coordination",
        "Commissioning and handover support"
      ]
    }
  };

  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial & Industrial",
      description: "Large-scale solar solutions for businesses, factories, and industrial facilities",
      projects: "300+",
      avgSize: "2-50MW"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residential Development",
      description: "Community solar projects and residential development consultancy",
      projects: "150+", 
      avgSize: "100kW-5MW"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Utility-Scale Projects",
      description: "Grid-scale solar farms and utility infrastructure projects",
      projects: "50+",
      avgSize: "10-200MW"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "International Projects",
      description: "Cross-border solar development and emerging market expertise",
      projects: "100+",
      avgSize: "5-100MW"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Energy Director, TechCorp Industries",
      content: "EcoMoTech's consultancy was instrumental in our 15MW solar project. Their technical expertise and financial modeling helped us secure optimal financing.",
      rating: 5,
      company: "TechCorp Industries"
    },
    {
      name: "Mr Mansaré Alhassane",
      role: "Development Manager, GreenEnergy Ltd",
      content: "Outstanding feasibility studies and site assessment. Their detailed analysis saved us significant time and investment in our solar portfolio development.",
      rating: 5,
      company: "GreenEnergy Ltd"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Sustainability Director, Manufacturing Group",
      content: "Professional, thorough, and results-driven. EcoMoTech delivered a comprehensive solar strategy that exceeded our sustainability targets.",
      rating: 5,
      company: "Manufacturing Group"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-ecomotech-blue via-ecomotech-dark-blue to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ecomotech-blue/30 to-emerald-700/30 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium">ISO 9001 Certified Solar Consultancy</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Solar <span className="text-emerald-400">Consultancy</span> Services
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  From feasibility studies to project completion, we provide comprehensive 
                  solar consultancy services that maximize your investment returns and ensure project success.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Calculator className="w-5 h-5 mr-2" />
                    Request Consultation
                  </Button>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ecomotech-blue px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Case Studies
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Project Success Rate</span>
                      <span className="text-2xl font-bold text-emerald-400">98%</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-blue-200">Feasibility Studies</span>
                          <span className="text-emerald-400">95%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-[95%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-blue-200">System Design</span>
                          <span className="text-emerald-400">98%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-[98%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-blue-200">Financial Modeling</span>
                          <span className="text-emerald-400">96%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-[96%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-blue-200">Project Management</span>
                          <span className="text-emerald-400">99%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-[99%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-ecomotech-blue mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Solar Consultancy Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team provides end-to-end consultancy services to ensure your solar projects 
                are technically sound, financially viable, and successfully executed.
              </p>
            </div>

            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(consultancyServices).map(([key, service], index) => {
                const colors = [
                  { 
                    active: 'bg-blue-500 border-blue-500 text-white', 
                    inactive: 'bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-500'
                  },
                  { 
                    active: 'bg-emerald-600 border-emerald-600 text-white', 
                    inactive: 'bg-white text-gray-600 border-gray-200 hover:border-emerald-600 hover:text-emerald-600'
                  },
                  { 
                    active: 'bg-purple-500 border-purple-500 text-white', 
                    inactive: 'bg-white text-gray-600 border-gray-200 hover:border-purple-500 hover:text-purple-500'
                  },
                  { 
                    active: 'bg-teal-500 border-teal-500 text-white', 
                    inactive: 'bg-white text-gray-600 border-gray-200 hover:border-teal-500 hover:text-teal-500'
                  }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                      activeService === key
                        ? colorScheme.active
                        : colorScheme.inactive
                    }`}
                  >
                    {service.icon}
                    <span className="hidden sm:inline">{service.title.split(' &')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="inline-flex items-center gap-3 text-ecomotech-blue mb-6">
                    {consultancyServices[activeService].icon}
                    <span className="font-semibold">Service Focus</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {consultancyServices[activeService].title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {consultancyServices[activeService].description}
                  </p>

                  <div className="grid gap-4">
                    {consultancyServices[activeService].details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-ecomotech-gray to-white p-8 rounded-2xl border border-emerald-600/20">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Service Deliverables</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-ecomotech-blue" />
                        <span className="text-gray-700">Comprehensive technical reports</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-ecomotech-blue" />
                        <span className="text-gray-700">Detailed analysis & recommendations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-ecomotech-blue" />
                        <span className="text-gray-700">Technical drawings & specifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-ecomotech-blue" />
                        <span className="text-gray-700">Expert consultation sessions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ecomotech-light-gray rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Timeline & Pricing</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Typical Duration:</span>
                        <span className="font-semibold">2-6 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Starting From:</span>
                        <span className="font-semibold text-ecomotech-green">$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warranty:</span>
                        <span className="font-semibold">12 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized consultancy expertise across diverse market segments and project scales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-ecomotech-light-gray to-white p-8 rounded-2xl border border-ecomotech-green/20 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-ecomotech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{industry.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-ecomotech-green">{industry.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ecomotech-green">{industry.avgSize}</div>
                      <div className="text-xs text-gray-500">Avg Size</div>
                    </div>
                  </div>
                  
                  <div className={`mt-6 flex items-center text-ecomotech-blue text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-ecomotech-light-gray to-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from industry leaders who have achieved remarkable results with our consultancy services
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-ecomotech-green/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-ecomotech-green fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-ecomotech-green/20 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-ecomotech-blue font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ecomotech-blue to-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Solar Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our expert consultants today for a comprehensive assessment of your solar potential
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Our Experts</h3>
                <p className="text-blue-200 mb-4">Speak directly with our solar consultants</p>
                <a href="tel:+1234567890" className="text-emerald-400 font-bold text-lg hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Consultation</h3>
                <p className="text-blue-200 mb-4">Get detailed information via email</p>
                <a href="mailto:solar@ecomotech.com" className="text-emerald-400 font-bold text-lg hover:text-white transition-colors">
                  solar@ecomotech.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ecomotech-blue px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarConsultancy;
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { 
  Settings,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity,
  Wrench,
  Eye,
  BarChart3,
  Zap,
  Droplets,
  Sun,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
  Target,
  ArrowRight,
  Play,
  Download,
  ChevronDown,
  Gauge,
  Battery,
  Cpu,
  Camera,
  Thermometer,
  CloudRain,
  LineChart,
  FileText,
  Headphones
} from "lucide-react";

const SolarMaintenance = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('preventive');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWatchVideo = () => {
    window.open('https://youtu.be/tV6BaddZa6E?si=Rt9DjpSqdjGobKct', '_blank');
  };

  const stats = [
    { icon: <Sun className="w-8 h-8" />, value: "500+", label: "MW Under Management" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "99.7%", label: "Average Uptime" },
    { icon: <Users className="w-8 h-8" />, value: "150+", label: "Solar Farms Maintained" },
    { icon: <Award className="w-8 h-8" />, value: "24/7", label: "Monitoring & Support" }
  ];

  const services = {
    preventive: {
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent issues before they occur",
      icon: <Calendar className="w-6 h-6" />,
      color: "green",
      features: [
        "Comprehensive visual inspections",
        "Electrical testing and measurements",
        "Module cleaning and care",
        "Inverter performance checks",
        "String and combiner box inspections",
        "Grounding system verification",
        "Vegetation management",
        "Security system maintenance"
      ]
    },
    corrective: {
      title: "Corrective Maintenance",
      description: "Rapid response repairs to minimize downtime",
      icon: <Wrench className="w-6 h-6" />,
      color: "orange",
      features: [
        "Emergency response within 4 hours",
        "Component replacement services",
        "Electrical fault resolution",
        "Inverter repairs and replacements",
        "Module replacement and repairs",
        "Tracker system repairs",
        "SCADA system troubleshooting",
        "Performance issue resolution"
      ]
    },
    monitoring: {
      title: "Performance Monitoring",
      description: "24/7 real-time monitoring and optimization",
      icon: <Activity className="w-6 h-6" />,
      color: "blue",
      features: [
        "Real-time performance monitoring",
        "Automated alert systems",
        "Weather station integration",
        "Production forecasting",
        "Underperformance detection",
        "Energy yield analysis",
        "Monthly performance reports",
        "Remote diagnostic capabilities"
      ]
    }
  };

  const maintenanceProcess = [
    {
      step: "01",
      title: "Site Assessment & Planning",
      description: "Comprehensive evaluation of your solar farm including equipment inventory, current maintenance practices, and performance analysis.",
      icon: <Eye className="w-6 h-6" />,
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Customized Maintenance Plan",
      description: "Development of tailored maintenance schedules based on equipment type, environmental conditions, and operational requirements.",
      icon: <FileText className="w-6 h-6" />,
      duration: "1 week"
    },
    {
      step: "03",
      title: "Team Deployment & Setup",
      description: "Deployment of certified technicians and installation of monitoring equipment for comprehensive coverage.",
      icon: <Users className="w-6 h-6" />,
      duration: "1-2 days"
    },
    {
      step: "04",
      title: "Ongoing Operations",
      description: "Execution of preventive maintenance, 24/7 monitoring, and rapid response to any issues that arise.",
      icon: <Settings className="w-6 h-6" />,
      duration: "Ongoing"
    }
  ];

  const technologies = [
    {
      name: "Thermal Imaging",
      icon: <Thermometer className="w-8 h-8" />,
      description: "Advanced thermal cameras detect hot spots and electrical faults before they cause failures."
    },
    {
      name: "Drone Inspections",
      icon: <Camera className="w-8 h-8" />,
      description: "Aerial inspections using high-resolution cameras and thermal sensors for comprehensive coverage."
    },
    {
      name: "IV Curve Tracing",
      icon: <LineChart className="w-8 h-8" />,
      description: "Precise electrical testing to identify underperforming modules and system inefficiencies."
    },
    {
      name: "Weather Monitoring",
      icon: <CloudRain className="w-8 h-8" />,
      description: "Real-time weather data integration for predictive maintenance and performance optimization."
    }
  ];

  const faqs = [
    {
      question: "How often should a solar farm be maintained?",
      answer: "Preventive maintenance should be performed quarterly, with monthly visual inspections. However, the frequency depends on environmental conditions, equipment type, and site-specific factors. Our customized maintenance plans optimize schedules for your specific installation."
    },
    {
      question: "What's included in your O&M contracts?",
      answer: "Our O&M contracts include 24/7 monitoring, preventive and corrective maintenance, vegetation management, security system maintenance, performance reporting, and emergency response. We also handle warranty claims and provide spare parts inventory management."
    },
    {
      question: "How do you minimize downtime during maintenance?",
      answer: "We use advanced scheduling algorithms, maintain local spare parts inventory, deploy experienced technicians, and perform most maintenance during low-production hours. Our average response time for critical issues is under 4 hours."
    },
    {
      question: "Do you provide performance guarantees?",
      answer: "Yes, we offer performance guarantees based on your system's baseline performance and expected degradation rates. Our contracts typically guarantee 99%+ system availability and performance within 2% of expected output."
    },
    {
      question: "What certifications do your technicians have?",
      answer: "All our technicians are NABCEP certified with additional specialized training in utility-scale systems. They maintain current certifications in electrical safety, confined space entry, and equipment-specific training from major manufacturers."
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'green': return 'bg-green-500 border-green-200 text-green-600';
      case 'orange': return 'bg-orange-500 border-orange-200 text-orange-600';
      case 'blue': return 'bg-blue-500 border-blue-200 text-blue-600';
      default: return 'bg-gray-500 border-gray-200 text-gray-600';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-500/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-400/20 rounded-full backdrop-blur-sm">
                  <Settings className="w-8 h-8 text-green-300" />
                </div>
                <span className="text-green-300 font-semibold text-lg">Professional Solar Farm Maintenance</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Maximize Your 
                <span className="text-green-300"> Solar Investment</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Industry-leading O&M services for utility-scale solar installations. Ensure optimal performance, 
                minimize downtime, and protect your investment with our comprehensive maintenance solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-green-400 hover:bg-green-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Get O&M Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleWatchVideo}
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Overview
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">99.7%</div>
                  <div className="text-blue-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">4hrs</div>
                  <div className="text-blue-200">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">24/7</div>
                  <div className="text-blue-200">Monitoring</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar Farm Maintenance"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Performance Increase</p>
                    <p className="text-2xl font-bold text-white">+15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive O&M Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-spectrum operations and maintenance solutions designed to maximize your solar farm's performance and ROI
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeService === key
                    ? service.color === 'green' ? 'bg-green-600 text-white shadow-lg' :
                      service.color === 'orange' ? 'bg-orange-600 text-white shadow-lg' :
                      service.color === 'blue' ? 'bg-blue-600 text-white shadow-lg' :
                      'bg-gray-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {service.icon}
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {services[activeService].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 ${
                      services[activeService].color === 'green' ? 'text-green-500' : 
                      services[activeService].color === 'orange' ? 'text-orange-500' : 
                      services[activeService].color === 'blue' ? 'text-blue-500' : 'text-gray-500'
                    } flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ResponsiveImage 
                src="images/Services/PV farm maintenance.png"
                alt="Solar Maintenance Service"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${
                    services[activeService].color === 'green' ? 'bg-green-100' : 
                    services[activeService].color === 'orange' ? 'bg-orange-100' : 
                    services[activeService].color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                  } rounded-full flex items-center justify-center`}>
                    {services[activeService].icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Service Type</p>
                    <p className="font-semibold text-gray-900">{services[activeService].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Maintenance Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize cutting-edge technology to ensure comprehensive and efficient maintenance operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our O&M Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to ensure optimal solar farm performance and longevity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {index < maintenanceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about solar farm operations and maintenance
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Solar Farm?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Partner with EcoMoTech for industry-leading O&M services that maximize performance, 
            minimize downtime, and protect your solar investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Request O&M Quote
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: (0086) 18810799128-SOLAR</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>services@ecomotech.online</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarMaintenance;
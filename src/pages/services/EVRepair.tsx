import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { 
  Wrench,
  Zap,
  Car,
  Battery,
  Cpu,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Star,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Settings,
  Eye,
  AlertTriangle,
  Download,
  ChevronDown,
  Gauge,
  Smartphone,
  Wifi,
  BarChart3,
  Target,
  Lightbulb,
  Headphones,
  FileText,
  Timer,
  DollarSign,
  ThumbsUp,
  Activity,
  Clipboard,
  Search,
  Microscope
} from "lucide-react";

const EVRepair = () => {
  const navigate = useNavigate();
  const [activeServiceType, setActiveServiceType] = useState('diagnostics');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState('motorcycle');

  const stats = [
    { icon: <Wrench className="w-8 h-8" />, value: "5K+", label: "Vehicles Serviced" },
    { icon: <Clock className="w-8 h-8" />, value: "24hrs", label: "Average Turnaround" },
    { icon: <Users className="w-8 h-8" />, value: "99%", label: "Customer Satisfaction" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Experience" }
  ];

  const serviceTypes = {
    diagnostics: {
      title: "Advanced Diagnostics",
      subtitle: "Comprehensive system analysis and fault detection",
      icon: <Search className="w-6 h-6" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Complete electrical system diagnostics",
        "Battery health assessment and testing",
        "Motor performance analysis",
        "Controller and ECU diagnostics",
        "Charging system evaluation",
        "Software and firmware analysis",
        "Thermal imaging inspection",
        "Vibration and noise analysis"
      ],
      benefits: [
        "Accurate problem identification",
        "Prevent costly breakdowns",
        "Optimize performance",
        "Extend battery life",
        "Maintain warranty coverage",
        "Data-driven maintenance planning"
      ]
    },
    maintenance: {
      title: "Preventive Maintenance",
      subtitle: "Regular service to keep your EV running perfectly",
      icon: <Settings className="w-6 h-6" />,
      color: "green",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Scheduled maintenance programs",
        "Battery conditioning and balancing",
        "Brake system inspection",
        "Tire rotation and alignment",
        "Cooling system service",
        "Software updates and calibration",
        "Safety system checks",
        "Performance optimization"
      ],
      benefits: [
        "Maximum vehicle reliability",
        "Extended component lifespan",
        "Optimal energy efficiency",
        "Maintained resale value",
        "Peace of mind driving",
        "Compliance with warranty terms"
      ]
    },
    repair: {
      title: "Expert Repairs",
      subtitle: "Professional repair services for all EV components",
      icon: <Wrench className="w-6 h-6" />,
      color: "green",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Battery pack repair and replacement",
        "Motor rebuild and repair",
        "Controller and inverter repair",
        "Charging port replacement",
        "Wiring harness repair",
        "Display and interface repair",
        "Body and frame repair",
        "Emergency roadside assistance"
      ],
      benefits: [
        "OEM-quality parts and service",
        "Certified technician expertise",
        "Comprehensive warranties",
        "Fast turnaround times",
        "Competitive pricing",
        "Insurance claim assistance"
      ]
    }
  };

  const repairProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive inspection and diagnostic evaluation to identify all issues and potential concerns.",
      icon: <Microscope className="w-6 h-6" />,
      duration: "30-60 min",
      details: ["Visual inspection", "Diagnostic scan", "Road test evaluation", "Customer consultation"]
    },
    {
      step: "02",
      title: "Detailed Diagnosis",
      description: "Advanced testing using specialized EV diagnostic equipment to pinpoint exact problems.",
      icon: <Activity className="w-6 h-6" />,
      duration: "1-2 hours",
      details: ["Battery testing", "Motor analysis", "Controller diagnostics", "System performance check"]
    },
    {
      step: "03", 
      title: "Repair Planning",
      description: "Development of comprehensive repair strategy with parts sourcing and timeline estimation.",
      icon: <Clipboard className="w-6 h-6" />,
      duration: "30 min",
      details: ["Parts availability check", "Cost estimation", "Timeline planning", "Customer approval"]
    },
    {
      step: "04",
      title: "Professional Repair",
      description: "Expert repair work performed by certified technicians using OEM parts and proper procedures.",
      icon: <Wrench className="w-6 h-6" />,
      duration: "2-8 hours",
      details: ["Component replacement", "System calibration", "Quality testing", "Performance validation"]
    }
  ];

  const specializations = [
    {
      name: "Battery Technology",
      icon: <Battery className="w-8 h-8" />,
      description: "Expert service for lithium-ion battery systems, including cell balancing, thermal management, and BMS diagnostics."
    },
    {
      name: "Motor Systems",
      icon: <Zap className="w-8 h-8" />,
      description: "Comprehensive motor repair including brushless DC motors, AC induction motors, and permanent magnet synchronous motors."
    },
    {
      name: "Power Electronics",
      icon: <Cpu className="w-8 h-8" />,
      description: "Advanced repair of inverters, converters, controllers, and charging systems with precise calibration."
    },
    {
      name: "Software Integration",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Firmware updates, software diagnostics, and integration with mobile apps and telematics systems."
    }
  ];

  const vehicleTypes = [
    {
      type: "motorcycle",
      name: "Electric Motorcycles",
      image: "images/Services/electric motorcycles.png",
      description: "Specialized service for electric motorcycles and scooters"
    },
    {
      type: "tricycle",
      name: "Electric Tricycles", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert repair for electric tricycles and cargo bikes"
    },
    {
      type: "commercial",
      name: "Commercial EVs",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Fleet service for commercial electric vehicles"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical EV repair take?",
      answer: "Repair time varies by complexity. Simple diagnostics take 1-2 hours, minor repairs 2-4 hours, and major component replacements can take 1-3 days. We provide accurate time estimates after initial assessment."
    },
    {
      question: "Do you use genuine OEM parts for repairs?",
      answer: "Yes, we prioritize OEM parts to maintain vehicle integrity and warranty coverage. When OEM parts aren't available, we use high-quality aftermarket alternatives that meet or exceed original specifications."
    },
    {
      question: "What warranty do you provide on repair work?",
      answer: "We provide 12-month/12,000-mile warranty on parts and labor for most repairs. Battery services come with extended warranties up to 24 months depending on the work performed."
    },
    {
      question: "Can you service vehicles still under manufacturer warranty?",
      answer: "Absolutely. Our certified technicians are trained to perform warranty-compliant services. We work with manufacturers and can handle warranty claims when applicable."
    },
    {
      question: "Do you offer emergency or roadside assistance?",
      answer: "Yes, we provide 24/7 emergency assistance including roadside diagnostics, mobile battery service, and towing to our facility. Contact us for immediate assistance."
    },
    {
      question: "How much do EV repairs typically cost?",
      answer: "Costs vary by vehicle type and repair complexity. Basic diagnostics start at $150, routine maintenance $200-500, and major repairs $500-3000+. We provide detailed estimates before any work begins."
    }
  ];

  const handleWatchVideo = () => {
    window.open('https://youtu.be/tV6BaddZa6E?si=Rt9DjpSqdjGobKct', '_blank');
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
                  <Wrench className="w-8 h-8 text-green-300" />
                </div>
                <span className="text-green-300 font-semibold text-lg">Professional EV Repair Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert 
                <span className="text-green-300"> Electric Vehicle</span> Repair
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Specialized repair and maintenance services for electric motorcycles, tricycles, and commercial EVs. 
                Advanced diagnostics, certified technicians, and genuine parts ensure optimal performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-green-400 hover:bg-green-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Schedule Service
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleWatchVideo}
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Process
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">24hrs</div>
                  <div className="text-blue-200">Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">99%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">15+</div>
                  <div className="text-blue-200">Years Exp</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ResponsiveImage 
                src="images/Electric motorcycles/electric motorcycle.webp"
                alt="Electric Vehicle Repair Service"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100/20 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Customer Rating</p>
                    <p className="text-2xl font-bold text-white">4.9/5</p>
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

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehicle Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert repair services for all types of electric vehicles with specialized knowledge and equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3]">
                    <ResponsiveImage 
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                    <p className="text-gray-200 text-sm">{vehicle.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Specialized
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive EV Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From advanced diagnostics to complete repairs, we provide full-service solutions for your electric vehicle
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(serviceTypes).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveServiceType(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeServiceType === key
                    ? service.color === 'blue' ? 'bg-blue-600 text-white shadow-lg' :
                      service.color === 'green' ? 'bg-green-600 text-white shadow-lg' :
                      service.color === 'green' ? 'bg-green-600 text-white shadow-lg' :
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
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {serviceTypes[activeServiceType].title}
                </h3>
                <p className="text-lg text-gray-500">
                  {serviceTypes[activeServiceType].subtitle}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceTypes[activeServiceType].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${
                        serviceTypes[activeServiceType].color === 'blue' ? 'text-blue-500' :
                        serviceTypes[activeServiceType].color === 'green' ? 'text-green-500' :
                        serviceTypes[activeServiceType].color === 'orange' ? 'text-orange-500' :
                        'text-gray-500'
                      } flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <div className="space-y-2">
                  {serviceTypes[activeServiceType].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className={`w-4 h-4 ${
                        serviceTypes[activeServiceType].color === 'blue' ? 'text-blue-500' :
                        serviceTypes[activeServiceType].color === 'green' ? 'text-green-500' :
                        serviceTypes[activeServiceType].color === 'orange' ? 'text-orange-500' :
                        'text-gray-500'
                      } flex-shrink-0 mt-1`} />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={serviceTypes[activeServiceType].image}
                alt={serviceTypes[activeServiceType].title}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${
                    serviceTypes[activeServiceType].color === 'blue' ? 'bg-blue-100' :
                    serviceTypes[activeServiceType].color === 'green' ? 'bg-green-100' :
                    serviceTypes[activeServiceType].color === 'orange' ? 'bg-orange-100' :
                    'bg-gray-100'
                  } rounded-full flex items-center justify-center`}>
                    {serviceTypes[activeServiceType].icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Service Type</p>
                    <p className="font-semibold text-gray-900">{serviceTypes[activeServiceType].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians specialize in advanced EV technologies and systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.name}</h3>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach ensuring accurate diagnosis and quality repairs every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((step, index) => (
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
                  
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < repairProcess.length - 1 && (
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about electric vehicle repair and maintenance
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 py-6 bg-white border-t border-gray-200">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Service Your Electric Vehicle?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Trust EcoMoTech's certified technicians for professional, reliable electric vehicle repair 
            and maintenance services that keep you on the road.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Service
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Service Guide
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: (555) 123-REPAIR</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>service@ecomotech.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span>24/7 Roadside Assistance</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EVRepair;
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { 
  Zap,
  Car,
  Home,
  Building2,
  Shield,
  Smartphone,
  Wifi,
  CreditCard,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Battery,
  Gauge,
  Settings,
  Eye,
  Users,
  Target,
  Award,
  TrendingUp,
  Lightbulb,
  Wrench,
  Calendar,
  Phone,
  Mail,
  ChevronDown,
  Download,
  AlertTriangle,
  Plug,
  Timer,
  DollarSign,
  BarChart3,
  CloudRain,
  Sun,
  Moon,
  Headphones
} from "lucide-react";

const EVChargerInstallation = () => {
  const navigate = useNavigate();
  const [activeChargerType, setActiveChargerType] = useState('residential');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCalculatorType, setSelectedCalculatorType] = useState('home');
  const [calculatorData, setCalculatorData] = useState({
    dailyMiles: 40,
    electricityRate: 0.12,
    chargerType: 'level2',
    installationType: 'standard'
  });

  const stats = [
    { icon: <Zap className="w-8 h-8" />, value: "10K+", label: "Chargers Installed" },
    { icon: <Users className="w-8 h-8" />, value: "98%", label: "Customer Satisfaction" },
    { icon: <Clock className="w-8 h-8" />, value: "24hrs", label: "Typical Installation" },
    { icon: <Award className="w-8 h-8" />, value: "25yr", label: "Equipment Warranty" }
  ];

  const chargerTypes = {
    residential: {
      title: "Home Charging Solutions",
      subtitle: "Perfect for homeowners and apartment complexes",
      icon: <Home className="w-6 h-6" />,
      color: "blue",
      image: "images/Services/residential.png",
      features: [
        "Level 1 (120V) and Level 2 (240V) charging",
        "Smart home integration (Alexa, Google)",
        "Mobile app monitoring and control",
        "Energy management and scheduling",
        "RFID access control for security",
        "Weather-resistant outdoor installation",
        "Load balancing with home energy",
        "Solar panel integration ready"
      ],
      benefits: [
        "Charge overnight while you sleep",
        "Lower electricity rates during off-peak",
        "Increase home value by up to 4%",
        "Convenient and always available",
        "Customizable charging schedules",
        "Track energy usage and costs"
      ]
    },
    commercial: {
      title: "Commercial Charging Networks",
      subtitle: "Scalable solutions for businesses and fleets",
      icon: <Building2 className="w-6 h-6" />,
      color: "green",
      image: "images/Services/commercial.png",
      features: [
        "DC Fast Charging (50kW - 350kW)",
        "Multi-vehicle simultaneous charging",
        "Payment processing integration",
        "Cloud-based management platform",
        "Dynamic load management system",
        "Revenue sharing opportunities",
        "24/7 remote monitoring and support",
        "Customizable branding options"
      ],
      benefits: [
        "Attract EV-driving customers",
        "Generate additional revenue streams",
        "Meet sustainability goals",
        "Future-proof your business",
        "Employee satisfaction and retention",
        "Tax incentives and rebates available"
      ]
    },
    fleet: {
      title: "Fleet & Municipal Solutions",
      subtitle: "High-capacity charging for vehicle fleets",
      icon: <Car className="w-6 h-6" />,
      color: "purple",
      image: "images/Services/fleet.png",
      features: [
        "High-power DC charging stations",
        "Fleet management integration",
        "Automated scheduling and routing",
        "Multi-connector compatibility",
        "Real-time vehicle status monitoring",
        "Predictive maintenance alerts",
        "Energy cost optimization",
        "Scalable infrastructure design"
      ],
      benefits: [
        "Reduce operational fuel costs by 60%",
        "Lower maintenance requirements",
        "Meet emission reduction targets",
        "Improve fleet efficiency",
        "Enhanced public image",
        "Long-term cost savings"
      ]
    }
  };

  const installationProcess = [
    {
      step: "01",
      title: "Site Assessment & Design",
      description: "Our certified electricians evaluate your electrical capacity, optimal placement, and local permitting requirements.",
      icon: <Eye className="w-6 h-6" />,
      duration: "1-2 days",
      details: ["Electrical panel assessment", "Site surveying", "Permit applications", "Custom design planning"]
    },
    {
      step: "02",
      title: "Equipment Selection",
      description: "Choose from our curated selection of top-tier charging equipment from leading manufacturers.",
      icon: <Settings className="w-6 h-6" />,
      duration: "3-5 days",
      details: ["Charger type selection", "Smart features configuration", "Connectivity options", "Warranty registration"]
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Licensed electricians install your charging station following all safety codes and manufacturer specifications.",
      icon: <Wrench className="w-6 h-6" />,
      duration: "4-8 hours",
      details: ["Electrical connections", "Mounting and placement", "Safety testing", "Code compliance verification"]
    },
    {
      step: "04",
      title: "Testing & Activation",
      description: "Complete system testing, app setup, and user training to ensure optimal performance.",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1 hour",
      details: ["Functionality testing", "Mobile app setup", "User training", "Warranty activation"]
    }
  ];

  const technologies = [
    {
      name: "Smart Load Management",
      icon: <Gauge className="w-8 h-8" />,
      description: "Automatically balances power distribution to prevent electrical overload while maximizing charging efficiency."
    },
    {
      name: "Mobile App Control",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Monitor charging status, schedule sessions, track energy usage, and receive notifications from anywhere."
    },
    {
      name: "Payment Integration",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Accept multiple payment methods including credit cards, mobile payments, and subscription plans."
    },
    {
      name: "Cloud Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Comprehensive usage analytics, energy reports, and predictive maintenance insights through cloud platform."
    }
  ];

  const faqs = [
    {
      question: "How long does EV charger installation typically take?",
      answer: "Installation time varies by complexity. Home installations typically take 4-8 hours, while commercial installations may take 1-3 days depending on electrical work required and permitting."
    },
    {
      question: "What electrical requirements are needed for EV charger installation?",
      answer: "Level 2 chargers require 240V service with dedicated 40-50 amp circuits. Our electricians will assess your panel capacity and upgrade if necessary. Some installations may require electrical panel upgrades."
    },
    {
      question: "Are there rebates or incentives available for EV charger installation?",
      answer: "Yes! Many utilities, states, and federal programs offer incentives. Residential installations may qualify for federal tax credits up to 30% of costs. We help identify and apply for available rebates."
    },
    {
      question: "Can I install a charger if I rent my home or business?",
      answer: "With landlord permission, yes. We work with property owners to explain benefits and can structure installations to be easily removable or transfer ownership upon lease end."
    },
    {
      question: "What's the difference between Level 1, Level 2, and DC Fast Charging?",
      answer: "Level 1 (120V) adds 3-5 miles/hour, Level 2 (240V) adds 25-40 miles/hour, and DC Fast Charging can add 100-300+ miles in 30 minutes. We recommend Level 2 for most home and business applications."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance plans including software updates, cleaning, electrical testing, and 24/7 technical support. Most equipment comes with manufacturer warranties of 3-8 years."
    }
  ];

  const calculateMonthlySavings = () => {
    const monthlyMiles = calculatorData.dailyMiles * 30;
    const evKwhPer100Miles = 30; // Average EV efficiency
    const monthlyKwh = (monthlyMiles / 100) * evKwhPer100Miles;
    const monthlyElectricCost = monthlyKwh * calculatorData.electricityRate;
    
    const gasCarMpg = 25; // Average gas car efficiency
    const monthlyGallons = monthlyMiles / gasCarMpg;
    const gasPrice = 3.50; // Average gas price
    const monthlyGasCost = monthlyGallons * gasPrice;
    
    return {
      electricCost: monthlyElectricCost.toFixed(0),
      gasCost: monthlyGasCost.toFixed(0),
      savings: (monthlyGasCost - monthlyElectricCost).toFixed(0),
      kwhUsed: monthlyKwh.toFixed(0)
    };
  };

  const handleWatchVideo = () => {
    window.open('https://youtu.be/tV6BaddZa6E?si=Rt9DjpSqdjGobKct', '_blank');
  };

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-500 border-blue-200 text-blue-600';
      case 'green': return 'bg-green-500 border-green-200 text-green-600';
      case 'purple': return 'bg-purple-500 border-purple-200 text-purple-600';
      default: return 'bg-gray-500 border-gray-200 text-gray-600';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-green-500/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-400/20 rounded-full backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-blue-300" />
                </div>
                <span className="text-blue-300 font-semibold text-lg">Professional EV Charging Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Power Your 
                <span className="text-green-300"> Electric Future</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Complete EV charging solutions from residential to commercial installations. 
                Smart, reliable, and future-ready charging infrastructure for your electric vehicle needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-green-400 hover:bg-green-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Get Installation Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleWatchVideo}
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">24hrs</div>
                  <div className="text-blue-200">Installation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">25yr</div>
                  <div className="text-blue-200">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">24/7</div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ResponsiveImage 
                src="images/Services/Electric Vehicle at Solar Charging Station.png"
                alt="EV Charging Station Installation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100/20 rounded-full flex items-center justify-center">
                    <Battery className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Cost Savings</p>
                    <p className="text-2xl font-bold text-white">60%</p>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charging Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Charging Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From home charging to commercial networks, we provide tailored EV charging solutions for every need
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(chargerTypes).map(([key, charger]) => (
              <button
                key={key}
                onClick={() => setActiveChargerType(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeChargerType === key
                    ? charger.color === 'blue' ? 'bg-blue-600 text-white shadow-lg' :
                      charger.color === 'green' ? 'bg-green-600 text-white shadow-lg' :
                      charger.color === 'purple' ? 'bg-purple-600 text-white shadow-lg' :
                      'bg-gray-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {charger.icon}
                {charger.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {chargerTypes[activeChargerType].title}
                </h3>
                <p className="text-lg text-gray-500">
                  {chargerTypes[activeChargerType].subtitle}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {chargerTypes[activeChargerType].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${
                        chargerTypes[activeChargerType].color === 'blue' ? 'text-blue-500' :
                        chargerTypes[activeChargerType].color === 'green' ? 'text-green-500' :
                        chargerTypes[activeChargerType].color === 'purple' ? 'text-purple-500' :
                        'text-gray-500'
                      } flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
                <div className="space-y-2">
                  {chargerTypes[activeChargerType].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className={`w-4 h-4 ${
                        chargerTypes[activeChargerType].color === 'blue' ? 'text-blue-500' :
                        chargerTypes[activeChargerType].color === 'green' ? 'text-green-500' :
                        chargerTypes[activeChargerType].color === 'purple' ? 'text-purple-500' :
                        'text-gray-500'
                      } flex-shrink-0 mt-1`} />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <ResponsiveImage 
                src={chargerTypes[activeChargerType].image}
                alt={chargerTypes[activeChargerType].title}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${
                    chargerTypes[activeChargerType].color === 'blue' ? 'bg-blue-100' :
                    chargerTypes[activeChargerType].color === 'green' ? 'bg-green-100' :
                    chargerTypes[activeChargerType].color === 'purple' ? 'bg-purple-100' :
                    'bg-gray-100'
                  } rounded-full flex items-center justify-center`}>
                    {chargerTypes[activeChargerType].icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Solution Type</p>
                    <p className="font-semibold text-gray-900">{chargerTypes[activeChargerType].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">EV Charging Cost Calculator</h2>
              <p className="text-xl text-gray-600">
                See how much you can save by switching to electric vehicle charging
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Daily Miles Driven
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        value={calculatorData.dailyMiles}
                        onChange={(e) => setCalculatorData({...calculatorData, dailyMiles: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10</span>
                        <span className="font-semibold text-blue-600">{calculatorData.dailyMiles} miles</span>
                        <span>200</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Electricity Rate ($/kWh)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        step="0.01"
                        value={calculatorData.electricityRate}
                        onChange={(e) => setCalculatorData({...calculatorData, electricityRate: parseFloat(e.target.value)})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Charger Type
                    </label>
                    <select
                      value={calculatorData.chargerType}
                      onChange={(e) => setCalculatorData({...calculatorData, chargerType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="level1">Level 1 (120V)</option>
                      <option value="level2">Level 2 (240V)</option>
                      <option value="dcfast">DC Fast Charging</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Cost Comparison</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <Zap className="w-6 h-6 text-green-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Electric Vehicle</p>
                          <p className="text-sm text-gray-500">{calculateMonthlySavings().kwhUsed} kWh used</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">${calculateMonthlySavings().electricCost}</p>
                        <p className="text-sm text-gray-500">per month</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <Car className="w-6 h-6 text-red-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Gas Vehicle</p>
                          <p className="text-sm text-gray-500">25 MPG average</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">${calculateMonthlySavings().gasCost}</p>
                        <p className="text-sm text-gray-500">per month</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Monthly Savings</p>
                          <p className="text-sm opacity-90">Switch to electric</p>
                        </div>
                        <p className="text-3xl font-bold">${calculateMonthlySavings().savings}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
                    >
                      Get Installation Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Charging Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make EV charging intelligent, efficient, and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
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

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified electricians ensure safe, code-compliant installations with minimal disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
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

                {index < installationProcess.length - 1 && (
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
                Common questions about EV charger installation and ownership
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Install Your EV Charger?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who've made the switch to convenient, 
            cost-effective electric vehicle charging with EcoMoTech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Consultation
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call: (555) 123-CHARGE</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>evcharging@ecomotech.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span>24/7 Installation Support</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EVChargerInstallation;
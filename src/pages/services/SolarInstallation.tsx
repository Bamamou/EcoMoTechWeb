import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  Sun, 
  Zap, 
  Shield, 
  Award, 
  Calculator,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Users,
  TrendingUp,
  Leaf,
  Home,
  Building,
  Settings,
  Monitor,
  Wrench,
  FileText,
  ChevronDown,
  PlayCircle,
  Download
} from "lucide-react";

const SolarInstallation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('residential');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Calculator state
  const [monthlyBill, setMonthlyBill] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [calculationResult, setCalculationResult] = useState<{
    annualSavings: number;
    systemSize: number;
    totalCost: number;
    paybackPeriod: number;
    co2Saved: number;
    twentyFiveYearSavings: number;
  } | null>(null);

  // Solar calculation logic
  const calculateSolarSavings = () => {
    if (!monthlyBill || parseFloat(monthlyBill) <= 0) {
      alert('Please enter a valid monthly electric bill amount');
      return;
    }

    const monthlyBillAmount = parseFloat(monthlyBill);
    const annualElectricCost = monthlyBillAmount * 12;
    
    // Industry standard calculations
    const avgElectricityRate = propertyType === 'residential' ? 0.13 : 0.11; // $/kWh
    const annualKwhUsage = annualElectricCost / avgElectricityRate;
    
    // System sizing (typically covers 80-100% of usage)
    const coveragePercentage = 0.85;
    const systemSizeKw = (annualKwhUsage * coveragePercentage) / 1200; // 1200 kWh per kW annually (average)
    
    // System cost (industry averages)
    const costPerWatt = propertyType === 'residential' ? 3.50 : 3.20;
    const systemCostBeforeIncentives = systemSizeKw * 1000 * costPerWatt;
    
    // Federal tax credit (30% in 2024-2032)
    const federalTaxCredit = 0.30;
    const systemCostAfterIncentives = systemCostBeforeIncentives * (1 - federalTaxCredit);
    
    // Annual production and savings
    const systemAnnualProduction = systemSizeKw * 1200; // kWh per year
    const annualSavingsAmount = systemAnnualProduction * avgElectricityRate;
    
    // Payback period
    const paybackYears = systemCostAfterIncentives / annualSavingsAmount;
    
    // 25-year savings (accounting for degradation)
    const avgDegradation = 0.005; // 0.5% per year
    let totalSavings = 0;
    for (let year = 1; year <= 25; year++) {
      const yearlyProduction = systemAnnualProduction * Math.pow(1 - avgDegradation, year - 1);
      const yearlySavings = yearlyProduction * avgElectricityRate * Math.pow(1.02, year - 1); // 2% electricity rate increase
      totalSavings += yearlySavings;
    }
    const netTwentyFiveYearSavings = totalSavings - systemCostAfterIncentives;
    
    // CO2 savings (0.92 lbs CO2 per kWh avoided)
    const annualCo2Saved = (systemAnnualProduction * 0.92) / 2000; // tons per year
    
    setCalculationResult({
      annualSavings: Math.round(annualSavingsAmount),
      systemSize: Math.round(systemSizeKw * 10) / 10,
      totalCost: Math.round(systemCostAfterIncentives),
      paybackPeriod: Math.round(paybackYears * 10) / 10,
      co2Saved: Math.round(annualCo2Saved * 10) / 10,
      twentyFiveYearSavings: Math.round(netTwentyFiveYearSavings)
    });
  };

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "2,500+", label: "Happy Customers" },
    { icon: <Zap className="w-8 h-8" />, value: "50MW+", label: "Installed Capacity" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Experience" },
    { icon: <Shield className="w-8 h-8" />, value: "25", label: "Year Warranty" }
  ];

  const services = {
    residential: {
      title: "Residential Solar Solutions",
      description: "Transform your home with clean, renewable energy",
      features: [
        "Rooftop solar panel installation",
        "Battery storage integration",
        "Smart energy monitoring systems",
        "Grid-tie and off-grid solutions",
        "Solar water heating systems",
        "EV charging station setup"
      ],
      benefits: [
        "Up to 90% reduction in electricity bills",
        "Increase home value by 4-6%",
        "Government incentives and tax credits",
        "25-year performance warranty",
        "Zero maintenance for 10+ years",
        "Complete energy independence"
      ]
    },
    commercial: {
      title: "Commercial Solar Solutions", 
      description: "Scale your business with sustainable energy solutions",
      features: [
        "Large-scale rooftop installations",
        "Ground-mounted solar farms",
        "Commercial battery storage",
        "Energy management systems",
        "Power purchase agreements (PPA)",
        "Corporate sustainability reporting"
      ],
      benefits: [
        "Significant operational cost savings",
        "Enhanced corporate sustainability",
        "Predictable energy costs for 25+ years",
        "Accelerated depreciation benefits",
        "Carbon footprint reduction",
        "Improved brand reputation"
      ]
    }
  };

  const installationProcess = [
    {
      step: "01",
      title: "Free Consultation & Site Assessment",
      description: "Our certified solar experts visit your property to assess solar potential, analyze energy consumption, and discuss your sustainability goals.",
      icon: <Home className="w-6 h-6" />,
      duration: "1-2 days"
    },
    {
      step: "02", 
      title: "Custom System Design & Proposal",
      description: "Using advanced 3D modeling and energy analysis software, we design an optimal solar system tailored to your specific needs and budget.",
      icon: <Settings className="w-6 h-6" />,
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "We handle all paperwork, permits, and utility interconnection applications, ensuring compliance with local regulations and standards.",
      icon: <FileText className="w-6 h-6" />,
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our NABCEP-certified installers complete the installation using industry-leading equipment and safety protocols.",
      icon: <Wrench className="w-6 h-6" />,
      duration: "1-3 days"
    },
    {
      step: "05",
      title: "System Testing & Commissioning",
      description: "Comprehensive testing, performance verification, and system commissioning to ensure optimal energy production.",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1 day"
    },
    {
      step: "06",
      title: "Monitoring & Maintenance",
      description: "Ongoing system monitoring, performance optimization, and preventive maintenance to maximize your investment.",
      icon: <Monitor className="w-6 h-6" />,
      duration: "Ongoing"
    }
  ];

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Most homeowners save 70-90% on their electricity bills. The exact savings depend on your energy consumption, local electricity rates, and system size. Our free assessment will provide you with precise savings calculations."
    },
    {
      question: "What is the typical payback period?",
      answer: "The average payback period is 6-8 years, after which you enjoy free electricity for the remaining 17+ years of the system's life. With current incentives, some customers see payback in as little as 4-5 years."
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer: "Yes! Solar panels generate electricity even on cloudy days, though at reduced efficiency. Modern panels can produce 10-25% of their rated capacity in overcast conditions."
    },
    {
      question: "What happens during a power outage?",
      answer: "With battery storage, your essential loads continue running during outages. Grid-tied systems without batteries will shut down for safety reasons, but resume operation when power is restored."
    },
    {
      question: "How long do solar panels last?",
      answer: "Solar panels are built to last 25+ years with minimal degradation. Most manufacturers offer 25-year performance warranties, and panels often continue producing electricity well beyond this period."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-green-500/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-400/20 rounded-full backdrop-blur-sm">
                  <Sun className="w-8 h-8 text-yellow-300" />
                </div>
                <span className="text-yellow-300 font-semibold text-lg">Professional Solar Installation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Power Your Future with 
                <span className="text-yellow-300"> Solar Energy</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your property with professional solar installation. Join thousands of satisfied customers 
                enjoying clean, renewable energy and significant cost savings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                  onClick={() => window.open('https://youtu.be/ZzCjZb8mFwM?si=6EdZTqN3fw6mNqPD', '_blank')}
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert Installation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Instant Savings Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Electric Bill ($)</label>
                    <input 
                      type="number" 
                      placeholder="150" 
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Property Type</label>
                    <select 
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="residential" className="text-gray-900">Residential</option>
                      <option value="commercial" className="text-gray-900">Commercial</option>
                    </select>
                  </div>
                  <button 
                    onClick={calculateSolarSavings}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-300"
                  >
                    Calculate Savings
                  </button>
                </div>
                
                {calculationResult && (
                  <div className="mt-6 space-y-4 border-t border-white/20 pt-6">
                    <div className="text-center">
                      <p className="text-sm text-blue-100">Annual Savings:</p>
                      <p className="text-3xl font-bold text-yellow-300">${calculationResult.annualSavings.toLocaleString()}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-blue-100">System Size</p>
                        <p className="text-lg font-bold text-white">{calculationResult.systemSize} kW</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-100">Payback Period</p>
                        <p className="text-lg font-bold text-white">{calculationResult.paybackPeriod} years</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-100">CO2 Saved/Year</p>
                        <p className="text-lg font-bold text-green-300">{calculationResult.co2Saved} tons</p>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-100">25-Year Savings</p>
                        <p className="text-lg font-bold text-yellow-300">${(calculationResult.twentyFiveYearSavings / 1000).toFixed(0)}K</p>
                      </div>
                    </div>
                    
                    <div className="text-center pt-4">
                      <button
                        onClick={() => navigate('/contact', { 
                          state: { 
                            calculationResult,
                            monthlyBill,
                            propertyType
                          }
                        })}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 text-sm"
                      >
                        Get Detailed Quote
                      </button>
                    </div>
                  </div>
                )}
                
                {!calculationResult && (
                  <div className="mt-6 text-center text-sm text-blue-100">
                    Enter your details above to see potential savings
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Calculator Works</h2>
              <p className="text-lg text-gray-600">Transparent, industry-standard calculations you can trust</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We analyze your monthly bill to determine annual kWh usage and calculate optimal system size to cover 85% of your energy needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Current industry pricing ($3.50/watt residential, $3.20 commercial) minus 30% federal tax credit for accurate system costs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Production Modeling</h3>
                <p className="text-gray-600 text-sm">
                  Based on 1,200 kWh/kW annually with 0.5% yearly degradation, accounting for real-world performance over 25 years.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Assumptions Used:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Residential Systems:</h4>
                  <ul className="space-y-1">
                    <li>• Average electricity rate: $0.13/kWh</li>
                    <li>• System cost: $3.50/watt installed</li>
                    <li>• 30% Federal tax credit applied</li>
                    <li>• 85% energy offset target</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Commercial Systems:</h4>
                  <ul className="space-y-1">
                    <li>• Average electricity rate: $0.11/kWh</li>
                    <li>• System cost: $3.20/watt installed</li>
                    <li>• 30% Federal tax credit applied</li>
                    <li>• Additional incentives may apply</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> These are estimates based on national averages. Actual savings depend on local electricity rates, 
                  sun exposure, roof conditions, and available incentives. We provide detailed, site-specific analysis during consultation.
                </p>
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

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar installation services tailored to your specific needs and energy goals
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'residential'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'commercial'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {services[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Services Include:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {services[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar Installation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">CO2 Saved Annually</p>
                    <p className="text-2xl font-bold text-gray-900">15 Tons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing monitoring, we handle every step with precision and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationProcess.map((step, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
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
                Get answers to common questions about solar installation
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 py-6 bg-white">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who've made the switch to clean, renewable energy. 
            Get your free consultation today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call: (0086) 18810799128-SOLAR</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email: services@ecomotech.online</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Service Area: Nationwide</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarInstallation;
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap,
  Shield,
  Clock,
  PhoneCall,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  PlayCircle,
  ChevronRight,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Globe
} from "lucide-react";
import { serviceRoutes } from "@/config/serviceRoutes";
import { useSEO } from "@/hooks/useSEO";
import { getPageSEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  // SEO optimization
  const servicesSEO = getPageSEO('services');
  useSEO(servicesSEO);

  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "5K+", label: "Happy Clients", color: "from-ecomotech-blue to-ecomotech-dark-blue" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience", color: "from-ecomotech-green to-ecomotech-dark-green" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "99%", label: "Success Rate", color: "from-ecomotech-green to-ecomotech-blue" },
    { icon: <Zap className="w-8 h-8" />, number: "24/7", label: "Support", color: "from-ecomotech-dark-blue to-ecomotech-green" }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "All our services come with comprehensive warranties and quality assurance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Engineering",
      description: "Cutting-edge technology and precision in every project we undertake."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description: "Your satisfaction is our priority with personalized service approach."
    }
  ];

  const testimonials = [
    {
      name: "Saran Konaté",
      role: "Operations Director",
      company: "GreenTech Industries",
      content: "EcoMoTech transformed our energy infrastructure with their professional solar installation. Outstanding service and results!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sitanilas Kamano",
      role: "Facility Manager",
      company: "TechCorp Solutions",
      content: "Their EV charging infrastructure setup was flawless. The team's expertise and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Dr. Maria, Sylla",
      role: "Sustainability Lead",
      company: "EcoVision Corp",
      content: "Professional consultancy that helped us reduce energy costs by 40%. Highly recommend their expertise and innovative solutions.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free initial consultation to understand your energy needs and goals.",
      icon: <PhoneCall className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Assessment",
      description: "Comprehensive site assessment and energy audit by our experts.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Design",
      description: "Custom solution design tailored to your specific requirements.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Implementation",
      description: "Professional installation and setup by certified technicians.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Ultra Modern with Glassmorphism */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-ecomotech-dark-gray via-ecomotech-dark-blue to-ecomotech-dark-green text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-ecomotech-blue/20 to-ecomotech-green/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-ecomotech-green/20 to-ecomotech-blue/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-ecomotech-dark-blue/20 to-ecomotech-green/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Premium Energy Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Revolutionary
                  <span className="block bg-gradient-to-r from-ecomotech-green via-ecomotech-blue to-ecomotech-green bg-clip-text text-transparent">
                    Energy Services
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Transform your energy future with cutting-edge renewable solutions, 
                  expert installations, and comprehensive maintenance services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-ecomotech-green/20 to-ecomotech-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Rocket className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Start Your Project</span>
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-300"></div>
                    <PlayCircle className="w-5 h-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Watch Demo</span>
                  </Button>
                </div>
              </div>

              {/* Stats Row */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group">
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Card Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-ecomotech-light-gray text-ecomotech-dark-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Our Premium Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to implementation, we provide end-to-end renewable energy services 
              with cutting-edge technology and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceRoutes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-ecomotech-green/30 overflow-hidden transform hover:-translate-y-2"
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ecomotech-light-gray to-ecomotech-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating icon background */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-ecomotech-green/20 to-ecomotech-blue/20 rounded-full opacity-20"></div>
                  
                  <div className="relative z-10">
                    {/* Service icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-ecomotech-green to-ecomotech-blue rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-ecomotech-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      to={service.path}
                      className="inline-flex items-center text-ecomotech-green hover:text-ecomotech-dark-green font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    {/* Hover effect indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ecomotech-green to-ecomotech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Interactive Timeline */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Vision to 
              <span className="bg-gradient-to-r from-ecomotech-green to-ecomotech-blue bg-clip-text text-transparent"> Reality</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures seamless project delivery from initial consultation to final implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group h-full">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-ecomotech-green/20 mb-4 group-hover:text-ecomotech-green/40 transition-colors duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-ecomotech-green to-ecomotech-blue rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-ecomotech-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-ecomotech-green/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Why Choose EcoMoTech
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Excellence in Every 
                  <span className="text-emerald-600"> Detail</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  We combine cutting-edge technology with unparalleled expertise to deliver 
                  renewable energy solutions that exceed expectations.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-8 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Professional energy services"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating stats cards */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Growth Rate</div>
                        <div className="text-lg font-bold text-gray-900">+125%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Global Reach</div>
                        <div className="text-lg font-bold text-gray-900">50+ Cities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders are saying about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-emerald-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 bg-gradient-to-r from-ecomotech-green via-ecomotech-blue to-ecomotech-dark-blue text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 gap-8 h-full opacity-5">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="bg-white rounded-full w-2 h-2 animate-pulse"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-medium">Ready to Transform Your Energy Future?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let's Build Something
              <span className="block text-yellow-300">Amazing Together</span>
            </h2>
            
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who have transformed their energy infrastructure 
              with our innovative renewable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-white/15 backdrop-blur-md border-2 border-white/40 hover:bg-white/25 hover:border-white/60 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-ecomotech-green/30 to-ecomotech-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <PhoneCall className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Start Your Project Today</span>
                </Button>
              </Link>
              <Button size="lg" className="bg-gradient-to-r from-white/8 to-ecomotech-green/20 backdrop-blur-md border-2 border-yellow-300/40 hover:border-yellow-300/60 text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-ecomotech-green/30 px-10 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group shadow-xl hover:shadow-2xl transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-yellow-300/5 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300/20 to-ecomotech-green/20 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 mr-2 relative z-10 group-hover:bounce transition-all duration-300" />
                <span className="relative z-10">Get Free Consultation</span>
              </Button>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>+86-18810799128</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@ecomotech.online</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
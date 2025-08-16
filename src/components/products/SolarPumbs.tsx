import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { solarPumps } from '@/data/solarPumpsData';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import styles from '@/styles/SolarPumbs.module.css';
import { 
  Droplet, 
  Zap, 
  Settings, 
  ShieldCheck, 
  Gauge, 
  ArrowRight,
  Filter,
  Grid,
  List,
  Star,
  Award,
  Truck
} from "lucide-react";

const SolarPumbs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('power');

  const categories = [
    { id: 'all', name: 'All Pumps', count: solarPumps.length },
    { id: 'submersible', name: 'Submersible', count: solarPumps.filter(p => p.category === 'submersible').length },
    { id: 'surface', name: 'Surface', count: solarPumps.filter(p => p.category === 'surface').length },
    { id: 'irrigation', name: 'Irrigation', count: solarPumps.filter(p => p.category === 'irrigation').length }
  ];

  const filteredPumps = selectedCategory === 'all' 
    ? solarPumps 
    : solarPumps.filter(pump => pump.category === selectedCategory);

  const sortedPumps = [...filteredPumps].sort((a, b) => {
    switch (sortBy) {
      case 'power':
        return parseInt(b.power) - parseInt(a.power);
      case 'flow':
        return parseInt(b.maxFlow) - parseInt(a.maxFlow);
      case 'price':
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      default:
        return 0;
    }
  });

  const handleViewDetails = (pumpId: string) => {
    navigate(`/products/solar-pumbs/${pumpId}`);
  };

  const handleQuickQuote = (pumpId: string) => {
    navigate('/contact', { state: { productId: pumpId, productType: 'Solar Pump' } });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className={styles.heroIcon}>
                <Droplet size={48} className="text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Solar Water Pumping Solutions
              </h1>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Harness the power of the sun for reliable, sustainable water pumping. 
                Our advanced solar pump systems deliver efficient water access for agriculture, 
                residential, and commercial applications worldwide.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Zap className="text-yellow-400" size={24} />
                  <span className="font-semibold">100% Solar Powered</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <ShieldCheck className="text-green-400" size={24} />
                  <span className="font-semibold">5-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="text-purple-400" size={24} />
                  <span className="font-semibold">CE Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Solar Pumps?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of sustainable, cost-effective water pumping technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-yellow-500" size={48} />,
                title: "Zero Operating Costs",
                description: "No electricity bills, powered entirely by solar energy"
              },
              {
                icon: <Droplet className="text-blue-500" size={48} />,
                title: "Reliable Water Supply",
                description: "Consistent pumping performance even in remote locations"
              },
              {
                icon: <Settings className="text-green-500" size={48} />,
                title: "Low Maintenance",
                description: "Designed for minimal maintenance and long service life"
              },
              {
                icon: <ShieldCheck className="text-purple-500" size={48} />,
                title: "Environmentally Friendly",
                description: "Clean, sustainable technology with zero emissions"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Solar Pump Collection</h2>
              <p className="text-lg text-gray-600">Professional-grade pumps for every application</p>
            </div>
            <div className="flex items-center gap-4 mt-6 lg:mt-0">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="power">Sort by Power</option>
                  <option value="flow">Sort by Flow Rate</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Products Grid/List */}
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {sortedPumps.map((pump) => (
              <div 
                key={pump.id} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-80 h-64 md:h-auto' : 'h-64'
                }`}>
                  <ResponsiveImage 
                    src={pump.image}
                    alt={pump.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      pump.category === 'submersible' ? 'bg-blue-500' :
                      pump.category === 'surface' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                      {pump.category.charAt(0).toUpperCase() + pump.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full">
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                {/* Product Info */}
                <div className={`p-6 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{pump.name}</h3>
                        <p className="text-sm text-gray-500 font-medium">{pump.model}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{pump.price.split(' ')[2]}</p>
                        <p className="text-xs text-gray-500">Starting from</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pump.description}</p>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-500">Power</p>
                          <p className="font-semibold text-sm">{pump.power}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet size={16} className="text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Max Flow</p>
                          <p className="font-semibold text-sm">{pump.maxFlow}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge size={16} className="text-purple-500" />
                        <div>
                          <p className="text-xs text-gray-500">Max Head</p>
                          <p className="font-semibold text-sm">{pump.maxHead}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">Warranty</p>
                          <p className="font-semibold text-sm">{pump.specifications.warranty}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {pump.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {pump.features.length > 3 && (
                          <span className="text-xs text-blue-500 font-medium">+{pump.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewDetails(pump.id)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      View Details <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => handleQuickQuote(pump.id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      <Truck size={16} />
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solar Pump Solution?</h3>
            <p className="text-lg mb-8 opacity-90">
              Our expert team can design and configure the perfect solar pumping system for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Custom Quote
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Installation Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarPumbs;
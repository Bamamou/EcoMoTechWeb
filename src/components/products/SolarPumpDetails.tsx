import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { solarPumps } from '@/data/solarPumpsData';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { 
  ArrowLeft, 
  Zap, 
  Droplet, 
  Gauge, 
  ShieldCheck, 
  Award, 
  Settings, 
  Truck,
  Heart,
  Share2,
  Download,
  CheckCircle,
  AlertCircle,
  Star,
  ThermometerSun,
  Wrench,
  Globe
} from 'lucide-react';

const SolarPumpDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'features' | 'applications'>('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  const pump = solarPumps.find(p => p.id === id);

  if (!pump) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <AlertCircle size={64} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The solar pump you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products/solar-pumbs')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Solar Pumps
          </button>
        </div>
      </Layout>
    );
  }

  const handleQuoteRequest = () => {
    navigate('/contact', { 
      state: { 
        productId: pump.id, 
        productType: 'Solar Pump',
        productName: pump.name 
      } 
    });
  };

  const productImages = pump.images?.gallery || [pump.image, pump.image, pump.image];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <button 
              onClick={() => navigate('/')} 
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <button 
              onClick={() => navigate('/products')} 
              className="hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <span className="mx-2">/</span>
            <button 
              onClick={() => navigate('/products/solar-pumbs')} 
              className="hover:text-blue-600 transition-colors"
            >
              Solar Pumps
            </button>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{pump.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products/solar-pumbs')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Solar Pumps
        </button>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src={productImages[selectedImage]}
                alt={pump.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <ResponsiveImage
                    src={image}
                    alt={`${pump.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{pump.name}</h1>
                  <p className="text-lg text-gray-600 font-medium">Model: {pump.model}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                    pump.category === 'submersible' ? 'bg-blue-100 text-blue-800' :
                    pump.category === 'surface' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {pump.category.charAt(0).toUpperCase() + pump.category.slice(1)} Pump
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(4.8/5 - 124 reviews)</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{pump.description}</p>

              <div className="text-4xl font-bold text-blue-600 mb-6">{pump.price}</div>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Zap className="text-yellow-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Power Rating</p>
                  <p className="font-bold text-gray-900">{pump.power}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplet className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Max Flow Rate</p>
                  <p className="font-bold text-gray-900">{pump.maxFlow}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Gauge className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Max Head</p>
                  <p className="font-bold text-gray-900">{pump.maxHead}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShieldCheck className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Warranty</p>
                  <p className="font-bold text-gray-900">{pump.specifications.warranty}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleQuoteRequest}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Truck size={20} />
                Request Quote
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center gap-2">
                <Download size={20} />
                Datasheet
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck size={16} className="text-green-500" />
                5-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award size={16} className="text-blue-500" />
                CE Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck size={16} className="text-purple-500" />
                Free Installation
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b bg-gray-50">
            {[
              { key: 'overview', label: 'Overview', icon: <Settings size={20} /> },
              { key: 'specs', label: 'Specifications', icon: <Gauge size={20} /> },
              { key: 'features', label: 'Features', icon: <CheckCircle size={20} /> },
              { key: 'applications', label: 'Applications', icon: <Globe size={20} /> }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {pump.description} This advanced solar pump system is designed to provide reliable, 
                    efficient water pumping for various applications including agriculture, irrigation, 
                    residential water supply, and commercial use.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <ThermometerSun className="text-blue-600 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 mb-2">Solar Powered</h4>
                      <p className="text-sm text-gray-600">100% solar energy powered system with high-efficiency panels</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <Wrench className="text-green-600 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 mb-2">Easy Installation</h4>
                      <p className="text-sm text-gray-600">Simple setup with comprehensive installation support</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <ShieldCheck className="text-purple-600 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 mb-2">Reliable Performance</h4>
                      <p className="text-sm text-gray-600">Consistent operation with minimal maintenance requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Power & Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Power Rating:</span>
                        <span className="font-medium">{pump.specifications.solarPanelPower}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Flow Rate:</span>
                        <span className="font-medium">{pump.specifications.maximumFlow}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Head:</span>
                        <span className="font-medium">{pump.specifications.maximumHead}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Efficiency:</span>
                        <span className="font-medium">{pump.specifications.efficiency}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">System Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Voltage:</span>
                        <span className="font-medium">{pump.specifications.operatingVoltage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-medium">{pump.specifications.pumpMaterial}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Warranty:</span>
                        <span className="font-medium">{pump.specifications.warranty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certifications:</span>
                        <span className="font-medium">{pump.specifications.certifications}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pump.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pump.applications.map((application, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                      <Globe className="text-blue-600 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 mb-2">{application}</h4>
                      <p className="text-sm text-gray-600">
                        Perfect for {application.toLowerCase()} applications with reliable solar power.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solarPumps.filter(p => p.id !== pump.id).slice(0, 3).map(relatedPump => (
              <div key={relatedPump.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ResponsiveImage
                    src={relatedPump.image}
                    alt={relatedPump.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{relatedPump.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{relatedPump.description.slice(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">{relatedPump.price.split(' ')[2]}</span>
                    <button
                      onClick={() => navigate(`/products/solar-pumbs/${relatedPump.id}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolarPumpDetails;

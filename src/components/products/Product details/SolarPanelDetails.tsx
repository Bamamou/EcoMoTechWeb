import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { solarPanelProducts, Product } from '../SolarPanels';
import { 
  ArrowLeft, 
  Sun, 
  Zap, 
  Shield, 
  Settings, 
  Award,
  CheckCircle,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Download,
  Eye,
  ArrowRight
} from 'lucide-react';
import styles from '@/styles/SolarPanels.module.css';

const SolarPanelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'installation' | 'warranty'>('overview');
  const panel = solarPanelProducts.find(product => product.id === id);

  const handleContactClick = () => {
    navigate('/contact', {
      state: { 
        productId: panel?.id,
        productType: 'Solar Panel',
        productName: panel?.name,
        inquiryType: 'general'
      }
    });
  };

  const handleQuoteRequest = () => {
    navigate('/contact', { 
      state: { 
        productId: panel?.id, 
        productType: 'Solar Panel',
        productName: panel?.name,
        inquiryType: 'quote'
      } 
    });
  };

  // Get recommendations based on similar power output and features
  const getRecommendations = () => {
    if (!panel) return [];
    
    const currentPower = parseInt(panel.specifications["Power Output"]?.replace('W', '') || '0');
    const currentCellType = panel.specifications["Cell Type"] || '';
    const otherPanels = solarPanelProducts.filter(p => p.id !== panel.id);
    
    // Sort by power similarity and cell type compatibility, then take top 3
    return otherPanels
      .map(p => {
        const powerDiff = Math.abs(parseInt(p.specifications["Power Output"]?.replace('W', '') || '0') - currentPower);
        const cellTypeMatch = p.specifications["Cell Type"]?.includes(currentCellType.split(' ')[0]) ? 0 : 1;
        const score = powerDiff + (cellTypeMatch * 100); // Prioritize similar cell types
        
        return {
          ...p,
          powerDiff,
          cellTypeMatch,
          score
        };
      })
      .sort((a, b) => a.score - b.score)
      .slice(0, 3);
  };

  const recommendedPanels = getRecommendations();

  if (!panel) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The solar panel you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products/solar-panels')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Solar Panels
          </button>
        </div>
      </Layout>
    );
  }

  // For now, we'll use the main image. In the future, you can add more images
  const allImages = [panel.image];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate('/products')} className="hover:text-blue-600 transition-colors">Products</button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate('/products/solar-panels')} className="hover:text-blue-600 transition-colors">Solar Panels</button>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{panel.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button onClick={() => navigate('/products/solar-panels')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors">
          <ArrowLeft size={20} />
          Back to Solar Panels
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <ResponsiveImage
                src={allImages[selectedImage]}
                alt={panel.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-500 opacity-100' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ResponsiveImage
                      src={image}
                      alt={`${panel.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{panel.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">4.8 (124 reviews)</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{panel.description}</p>
              
              {/* Key Specification Highlight */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-800 font-semibold mt-4">
                <Sun size={20} className="mr-2" />
                {panel.specifications["Power Output"]} Solar Panel
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle size={24} className="text-green-500" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {panel.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Settings size={24} className="text-blue-500" />
                Technical Specifications
              </h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid gap-4">
                  {Object.entries(panel.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600 font-medium">{key}</span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
              <p className="text-blue-50 mb-6">
                Join thousands of satisfied customers who have transformed their homes with clean, renewable energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleQuoteRequest}
                  className="flex-1 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={handleContactClick}
                  className="flex-1 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Us
                  <Phone size={20} />
                </button>
              </div>
              <div className="mt-4 text-center text-blue-100 text-sm">
                📞 +237 6 71 23 45 67 | 📧 info@ecomotech.com
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 font-semibold border-b-2 transition-colors ${
                  activeTab === 'overview' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('installation')}
                className={`py-4 px-1 font-semibold border-b-2 transition-colors ${
                  activeTab === 'installation' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Installation Guide
              </button>
              <button 
                onClick={() => setActiveTab('warranty')}
                className={`py-4 px-1 font-semibold border-b-2 transition-colors ${
                  activeTab === 'warranty' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Warranty
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h3>
                <p className="text-gray-700 mb-6">
                  The {panel.name} represents the latest in solar technology, delivering exceptional performance 
                  and reliability for both residential and commercial applications. Built with premium materials 
                  and backed by comprehensive warranties, this solar panel is designed to provide decades of 
                  clean, renewable energy.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Why Choose This Solar Panel?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {panel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3">Applications</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun size={20} className="text-blue-600" />
                      <span className="font-semibold text-blue-900">Residential</span>
                    </div>
                    <p className="text-sm text-blue-700">Perfect for home rooftop installations</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings size={20} className="text-green-600" />
                      <span className="font-semibold text-green-900">Commercial</span>
                    </div>
                    <p className="text-sm text-green-700">Ideal for business solar systems</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={20} className="text-purple-600" />
                      <span className="font-semibold text-purple-900">Utility Scale</span>
                    </div>
                    <p className="text-sm text-purple-700">Suitable for large solar farms</p>
                  </div>
                </div>
              </div>
            )}

            {/* Installation Guide Tab */}
            {activeTab === 'installation' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Guide</h3>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> Solar panel installation should only be performed by certified professionals. 
                        This guide is for informational purposes only.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Pre-Installation Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Tools Required</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Drill with masonry bits
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Socket wrench set
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Wire strippers and MC4 connectors
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Safety equipment (harness, hard hat)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Site Requirements</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Structural assessment completed
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Permits and approvals obtained
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Electrical panel capacity verified
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Optimal sun exposure confirmed
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Installation Steps</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Mount Installation</h5>
                      <p className="text-gray-700">Install mounting rails and ensure proper spacing according to panel dimensions ({panel.specifications.Dimensions})</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Panel Placement</h5>
                      <p className="text-gray-700">Carefully position panels on mounting system, ensuring proper alignment and adequate ventilation clearance</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Electrical Connections</h5>
                      <p className="text-gray-700">Connect MC4 connectors in series or parallel configuration as per system design requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">System Testing</h5>
                      <p className="text-gray-700">Perform electrical testing, verify power output, and ensure all connections are secure</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Need Professional Installation?</h5>
                  <p className="text-blue-700 mb-4">Our certified installation team can handle your solar panel installation from start to finish.</p>
                  <button 
                    onClick={() => navigate('/services/solar-installation')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get Installation Quote
                  </button>
                </div>
              </div>
            )}

            {/* Warranty Tab */}
            {activeTab === 'warranty' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Warranty Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Award size={24} className="text-green-600" />
                      <h4 className="text-xl font-semibold text-green-900">Performance Warranty</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Duration:</span>
                        <span className="font-semibold text-green-900">25 Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Year 1 Output:</span>
                        <span className="font-semibold text-green-900">≥97.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Year 25 Output:</span>
                        <span className="font-semibold text-green-900">≥84.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Annual Degradation:</span>
                        <span className="font-semibold text-green-900">≤0.55%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield size={24} className="text-blue-600" />
                      <h4 className="text-xl font-semibold text-blue-900">Product Warranty</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Duration:</span>
                        <span className="font-semibold text-blue-900">12 Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Coverage:</span>
                        <span className="font-semibold text-blue-900">Manufacturing Defects</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Materials:</span>
                        <span className="font-semibold text-blue-900">Full Coverage</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Workmanship:</span>
                        <span className="font-semibold text-blue-900">Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Covered</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 text-green-600">✅ Covered</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5" />
                        Manufacturing defects in materials
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5" />
                        Power output below warranty specifications
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5" />
                        Frame and junction box defects
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5" />
                        Glass breakage due to manufacturing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5" />
                        Premature cell degradation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 text-red-600">❌ Not Covered</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        Physical damage from external forces
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        Damage from improper installation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        Normal wear and tear
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        Acts of nature (hail, lightning)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        Unauthorized modifications
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">Warranty Claim Process</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Contact Support</h5>
                      <p className="text-gray-700">Reach out to our technical support team with your warranty claim</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Provide Documentation</h5>
                      <p className="text-gray-700">Submit purchase receipt, installation records, and evidence of the issue</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Technical Assessment</h5>
                      <p className="text-gray-700">Our technical team will evaluate your claim and determine coverage</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Resolution</h5>
                      <p className="text-gray-700">Approved claims are resolved through repair, replacement, or compensation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Need to File a Warranty Claim?</h5>
                  <p className="text-gray-700 mb-4">Contact our support team for assistance with warranty claims and technical issues.</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={handleContactClick}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Contact Support
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                      <Download size={16} />
                      Download Warranty Terms
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendedPanels.length > 0 && (
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
              <p className="text-lg text-gray-600">
                Similar solar panels that might suit your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedPanels.map((recommendedPanel) => (
                <div 
                  key={recommendedPanel.id} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="aspect-square overflow-hidden">
                    <ResponsiveImage
                      src={recommendedPanel.image}
                      alt={recommendedPanel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {recommendedPanel.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-blue-600 font-semibold text-lg">{recommendedPanel.specifications["Power Output"]}</p>
                        {recommendedPanel.powerDiff <= 50 && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Similar Power
                          </span>
                        )}
                      </div>
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-1 bg-blue-100 text-blue-800">
                        Solar Panel
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                      </div>
                      <div className="text-sm text-gray-600">{recommendedPanel.specifications["Cell Type"]}</div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>{recommendedPanel.description}</p>
                    
                    <div className="mb-4">
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center justify-between text-gray-600">
                          <span className="flex items-center gap-1">
                            <Sun size={14} className="text-orange-500" />
                            Efficiency:
                          </span>
                          <span className="font-medium">High Performance</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                          <span className="flex items-center gap-1">
                            <Shield size={14} className="text-green-500" />
                            Warranty:
                          </span>
                          <span className="font-medium">25 Years</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigate(`/products/solar-panels/${recommendedPanel.id}`)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        View Details
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => navigate('/contact', { 
                          state: { 
                            productId: recommendedPanel.id, 
                            productType: 'Solar Panel',
                            productName: recommendedPanel.name,
                            inquiryType: 'quote'
                          } 
                        })}
                        className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                        title="Quick Quote"
                      >
                        💰
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default SolarPanelDetails;

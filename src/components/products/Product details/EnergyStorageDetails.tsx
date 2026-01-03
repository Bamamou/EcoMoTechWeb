import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { batteryProducts } from '@/data/energyStorageData';
import { Battery, Settings, Zap, Shield, Box, CheckCircle, Star, ArrowRight, Eye, ArrowLeft, Phone, Award, Clock, Truck } from "lucide-react";
import { ResponsiveImage } from '@/components/ui/responsive-image';

const EnergyStorageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'protection'>('specs');
  const system = batteryProducts.find(sys => sys.id === id);

  // Smart recommendation system for energy storage
  const getRecommendedProducts = () => {
    if (!system) return [];

    const otherProducts = batteryProducts.filter(product => product.id !== system.id);
    
    // Smart scoring algorithm for recommendations
    const scoredProducts = otherProducts.map(product => {
      let score = 0;
      
      // Parse capacity for comparison (extract numeric value)
      const getCurrentCapacity = (capacityStr: string) => {
        const match = capacityStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const currentCapacity = getCurrentCapacity(system.capacity);
      const productCapacity = getCurrentCapacity(product.capacity);
      
      // Similar capacity gets highest priority (40 points)
      if (currentCapacity > 0 && productCapacity > 0) {
        const capacityDiff = Math.abs(productCapacity - currentCapacity);
        const maxCapacity = Math.max(productCapacity, currentCapacity);
        const capacityRatio = 1 - (capacityDiff / maxCapacity);
        score += capacityRatio * 40;
      }
      
      // Parse price for comparison (extract numeric value from "Starting from $X")
      const getCurrentPrice = (priceStr: string) => {
        const match = priceStr.match(/\$(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const currentPrice = getCurrentPrice(system.price);
      const productPrice = getCurrentPrice(product.price);
      
      // Similar price range (25 points)
      if (currentPrice > 0 && productPrice > 0) {
        const priceDiff = Math.abs(productPrice - currentPrice);
        const maxPrice = Math.max(productPrice, currentPrice);
        const priceRatio = 1 - (priceDiff / maxPrice);
        score += priceRatio * 25;
      }
      
      // Products with more features get bonus (15 points)
      const featureCount = product.details.features.length;
      score += (featureCount / 10) * 15;
      
      // Products with better protection get bonus (10 points)
      const protectionCount = product.details.protection.length;
      score += (protectionCount / 8) * 10;
      
      // Products with longer warranty get bonus (10 points)
      const warrantyMatch = product.details.warranty.match(/(\d+)/);
      const warrantyYears = warrantyMatch ? parseInt(warrantyMatch[1]) : 0;
      score += (warrantyYears / 5) * 10;
      
      return { ...product, score };
    });
    
    // Sort by score and return top 3
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const recommendedProducts = getRecommendedProducts();

  const handleContactClick = () => {
    navigate('/contact', {
      state: {
        productId: system?.id,
        productType: 'Energy Storage System',
        productName: system?.name
      }
    });
  };

  if (!system) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Battery className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">System Not Found</h2>
            <p className="mt-4 text-gray-600">The energy storage system you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products/energy-storage')}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold"
            >
              Return to Energy Storage
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20">
        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-green-600 transition-colors">Products</Link>
              <span>/</span>
              <Link to="/products/energy-storage" className="hover:text-green-600 transition-colors">Energy Storage</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{system.name}</span>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate('/products/energy-storage')}
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Back to Energy Storage Systems
            </button>
          </div>
        </section>

        {/* Main Product Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg">
                  <ResponsiveImage
                    src={system.images.gallery[selectedImage]}
                    alt={system.name}
                    className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Thumbnails */}
                {system.images.gallery.length > 1 && (
                  <div className="flex gap-3">
                    {system.images.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        title={`View ${system.name} image ${index + 1}`}
                        aria-label={`View ${system.name} image ${index + 1}`}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          selectedImage === index 
                            ? 'border-green-600 shadow-lg shadow-green-100' 
                            : 'border-gray-200 hover:border-green-400'
                        }`}
                      >
                        <ResponsiveImage
                          src={image}
                          alt={`${system.name} view ${index + 1}`}
                          className="w-full h-full object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Title & Capacity */}
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {system.capacity}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {system.name}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {system.description}
                  </p>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-600">{system.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Includes warranty and installation support</p>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Battery className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="font-semibold text-gray-900">{system.details.specifications.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Efficiency</p>
                      <p className="font-semibold text-gray-900">{system.details.specifications.efficiency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Warranty</p>
                      <p className="font-semibold text-gray-900">{system.details.warranty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Protection</p>
                      <p className="font-semibold text-gray-900">{system.details.protection.length} Safety Features</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                  >
                    <Phone className="w-5 h-5" />
                    Get Quote & Consultation
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 px-8 rounded-xl font-semibold text-lg transition-colors"
                  >
                    Contact Sales Team
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Specifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Product Details</h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-xl p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'specs' 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'features' 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('protection')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'protection' 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Protection
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === 'specs' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Battery className="w-6 h-6 text-green-600" />
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(system.details.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 capitalize font-medium">{key}</span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6 flex items-center gap-3">
                    <Box className="w-6 h-6 text-blue-600" />
                    Physical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(system.details.physical).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 capitalize font-medium">{key}</span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-green-600" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.details.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'protection' && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    Safety & Protection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.details.protection.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                        <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="font-bold text-gray-900">Warranty Coverage</p>
                        <p className="text-gray-600">{system.details.warranty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recommended Products Section */}
        {recommendedProducts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                        <ResponsiveImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Capacity Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {product.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Key Specs */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Battery className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">{product.details.specifications.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">{product.details.specifications.efficiency}</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.details.features.slice(0, 2).map((feature, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {feature.length > 12 ? feature.substring(0, 12) + '...' : feature}
                            </span>
                          ))}
                          {product.details.features.length > 2 && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              +{product.details.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-green-600">
                          {product.price}
                        </span>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => navigate(`/products/energy-storage/${product.id}`)}
                        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>

                      {/* Additional Info */}
                      <div className="mt-3 text-center">
                        <span className="text-sm text-gray-500">
                          {product.details.warranty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <button
                  onClick={() => navigate('/products/energy-storage')}
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  View All Energy Storage Systems
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Power Your Home or Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get professional consultation and installation support for your energy storage system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => navigate('/services')}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                View Installation Services
              </button>
            </div>
            <div className="mt-8 text-sm opacity-80">
              📞 +86 188 1079 9128 | 📧 contactus@ecomotech.online
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnergyStorageDetails;
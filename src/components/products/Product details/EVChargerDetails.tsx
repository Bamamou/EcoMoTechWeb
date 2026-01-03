import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { useParams, useNavigate } from 'react-router-dom';
import { evChargerProducts } from '@/data/evChargersData';
import { Zap, Settings, Shield, Wifi, Clock, CheckCircle, Star, ArrowLeft, Eye, Phone, ArrowRight } from "lucide-react";
import { ResponsiveImage } from '@/components/ui/responsive-image';

const EVChargerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const charger = evChargerProducts.find(charger => charger.id === id);

  // Smart recommendation system
  const getRecommendedProducts = () => {
    if (!charger) return [];

    const otherProducts = evChargerProducts.filter(product => product.id !== charger.id);
    
    // Smart sorting algorithm for recommendations
    const scoredProducts = otherProducts.map(product => {
      let score = 0;
      
      // Same category gets highest priority (40 points)
      if (product.category === charger.category) {
        score += 40;
      }
      
      // Similar price range (30 points)
      const priceDiff = Math.abs(product.price - charger.price);
      const maxPrice = Math.max(product.price, charger.price);
      const priceRatio = 1 - (priceDiff / maxPrice);
      score += priceRatio * 30;
      
      // High ratings get bonus (15 points)
      score += (product.rating / 5) * 15;
      
      // In stock products get priority (10 points)
      if (product.inStock) {
        score += 10;
      }
      
      // Products with badges get small bonus (5 points)
      if (product.badge) {
        score += 5;
      }
      
      return { ...product, score };
    });
    
    // Sort by score and return top 3
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const recommendedProducts = getRecommendedProducts();

  if (!charger) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">EV Charger Not Found</h2>
            <p className="mt-4 text-gray-600">The EV charger you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products/ev-chargers')}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Return to EV Chargers
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleContactClick = () => {
    navigate('/contact', {
      state: {
        productId: charger.id,
        productType: 'EV Charger',
        productName: charger.name
      }
    });
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => navigate('/products/ev-chargers')}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to EV Chargers
              </button>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <ResponsiveImage
                    src={charger.gallery[selectedImage]}
                    alt={charger.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Thumbnails */}
                {charger.gallery.length > 1 && (
                  <div className="flex gap-4">
                    {charger.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        title={`View ${charger.name} image ${index + 1}`}
                        aria-label={`View ${charger.name} image ${index + 1}`}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? 'border-green-600' : 'border-gray-200'
                        }`}
                      >
                        <ResponsiveImage
                          src={image}
                          alt={`${charger.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium uppercase">
                      {charger.category}
                    </span>
                    {charger.badge && (
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        charger.badge === 'new' ? 'bg-green-500 text-white' :
                        charger.badge === 'bestseller' ? 'bg-blue-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {charger.badge.toUpperCase()}
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {charger.name}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    {charger.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(charger.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{charger.rating}</span>
                    <span className="text-gray-500">({charger.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {charger.originalPrice && (
                      <span className="text-2xl text-gray-400 line-through mr-4">
                        ${charger.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-green-600">
                      ${charger.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-8">
                    {charger.inStock ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-semibold">
                          In Stock ({charger.stockCount} available)
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-red-600 font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={handleContactClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Get Quote & Installation
                    </button>
                    <button
                      onClick={() => window.open('/contact', '_blank')}
                      className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 px-8 rounded-lg font-semibold text-lg transition-colors"
                    >
                      Contact Sales Team
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Power Output</h3>
                <p className="text-gray-600">{charger.specifications.power}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Charging Speed</h3>
                <p className="text-gray-600">{charger.specifications.chargingSpeed}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Protection</h3>
                <p className="text-gray-600">{charger.specifications.protection}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Connectivity</h3>
                <p className="text-gray-600">{charger.specifications.connectivity}</p>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-3">
                  {charger.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
                <div className="space-y-3">
                  {charger.applications.map((application, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Description</h2>
              <div className="prose max-w-none">
                <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {charger.longDescription}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {Object.entries(charger.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            {recommendedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                      <div className="relative">
                        <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                          <ResponsiveImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {product.badge === 'new' && (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              NEW
                            </span>
                          )}
                          {product.badge === 'bestseller' && (
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              BESTSELLER
                            </span>
                          )}
                          {product.badge === 'sale' && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              SALE
                            </span>
                          )}
                        </div>

                        {/* Stock Status */}
                        <div className="absolute bottom-4 right-4">
                          {product.inStock ? (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                              In Stock
                            </span>
                          ) : (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-green-600 uppercase tracking-wider">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Key Specs */}
                        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600">{product.specifications.power}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600 truncate">{product.specifications.chargingSpeed}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through mr-2">
                                ${product.originalPrice.toLocaleString()}
                              </span>
                            )}
                            <span className="text-xl font-bold text-green-600">
                              ${product.price.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => navigate(`/products/ev-chargers/${product.id}`)}
                            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button
                    onClick={() => navigate('/products/ev-chargers')}
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    View All EV Chargers
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-500 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Upgrade to Electric?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get professional installation and ongoing support for your EV charging solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactClick}
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Get Installation Quote
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EVChargerDetails;

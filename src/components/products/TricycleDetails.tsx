import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { tricycleProducts, TricycleProduct } from '@/data/tricycleData';
import { 
  ArrowLeft, 
  Zap, 
  Battery, 
  Gauge, 
  Weight, 
  Users, 
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
  Clock,
  Wrench,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Eye
} from 'lucide-react';

const TricycleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'features' | 'applications'>('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  const tricycle = tricycleProducts.find(t => t.id === id);

  if (!tricycle) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <AlertCircle size={64} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The electric tricycle you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products/electric-tricycles')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Electric Tricycles
          </button>
        </div>
      </Layout>
    );
  }

  const handleQuoteRequest = () => {
    navigate('/contact', { 
      state: { 
        productId: tricycle.id, 
        productType: 'Electric Tricycle',
        productName: tricycle.name 
      } 
    });
  };

  const productImages = tricycle.gallery || [tricycle.image];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-600">
            <button 
              onClick={() => navigate('/')} 
              className="hover:text-green-600 transition-colors"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <button 
              onClick={() => navigate('/products')} 
              className="hover:text-green-600 transition-colors"
            >
              Products
            </button>
            <span className="mx-2">/</span>
            <button 
              onClick={() => navigate('/products/electric-tricycles')} 
              className="hover:text-green-600 transition-colors"
            >
              Electric Tricycles
            </button>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{tricycle.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products/electric-tricycles')}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 mb-6 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Electric Tricycles
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src={productImages[selectedImage]}
                alt={tricycle.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-green-500 ring-2 ring-green-200' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <ResponsiveImage
                      src={image}
                      alt={`${tricycle.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {tricycle.badge === 'new' && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </span>
              )}
              {tricycle.badge === 'bestseller' && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </span>
              )}
              {tricycle.originalPrice && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${(tricycle.originalPrice - tricycle.price).toLocaleString()}
                </span>
              )}
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{tricycle.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(tricycle.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-lg font-semibold text-gray-900 ml-2">
                    {tricycle.rating}
                  </span>
                </div>
                <span className="text-gray-600">({tricycle.reviews} reviews)</span>
              </div>
              <p className="text-lg text-gray-700">{tricycle.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              {tricycle.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  ${tricycle.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-4xl font-bold text-green-600">
                ${tricycle.price.toLocaleString()}
              </span>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Battery className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Range</p>
                <p className="font-bold text-gray-900">{tricycle.specifications.range}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Gauge className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Max Speed</p>
                <p className="font-bold text-gray-900">{tricycle.specifications.maxSpeed}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Weight className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Load Capacity</p>
                <p className="font-bold text-gray-900">{tricycle.specifications.loadCapacity}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Warranty</p>
                <p className="font-bold text-gray-900">{tricycle.specifications.warranty}</p>
              </div>
            </div>

            {/* Stock Status */}
            <div className={`p-4 rounded-lg border ${
              tricycle.inStock 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  tricycle.inStock ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className={`font-semibold ${
                  tricycle.inStock ? 'text-green-800' : 'text-red-800'
                }`}>
                  {tricycle.inStock 
                    ? `In Stock (${tricycle.stockCount} available)` 
                    : 'Out of Stock'
                  }
                </span>
              </div>
              {tricycle.inStock && (
                <div className="flex items-center gap-2 mt-2 text-sm text-green-700">
                  <Truck className="w-4 h-4" />
                  <span>Free delivery • Professional setup included</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleQuoteRequest}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </button>
              
              <button className="px-6 py-4 border-2 border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-600 rounded-xl transition-all duration-300">
                <Heart className="w-6 h-6" />
              </button>
              
              <button className="px-6 py-4 border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 rounded-xl transition-all duration-300">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need More Information?</h3>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={handleQuoteRequest}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-green-50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Email Quote</span>
                </button>
                <button className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Call Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { key: 'overview', label: 'Overview', icon: <Globe size={20} /> },
                { key: 'specs', label: 'Specifications', icon: <Settings size={20} /> },
                { key: 'features', label: 'Features', icon: <CheckCircle size={20} /> },
                { key: 'applications', label: 'Applications', icon: <Truck size={20} /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                    activeTab === tab.key
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-600 hover:text-green-600'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tricycle.longDescription}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {Object.entries(tricycle.specifications).slice(0, 5).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 capitalize font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {Object.entries(tricycle.specifications).slice(5).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 capitalize font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tricycle.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Commercial Delivery', description: 'Perfect for last-mile delivery services and logistics', icon: <Truck className="w-8 h-8 text-green-600" /> },
                    { title: 'Passenger Transport', description: 'Ideal for taxi services and passenger transportation', icon: <Users className="w-8 h-8 text-blue-600" /> },
                    { title: 'Personal Mobility', description: 'Great for personal commuting and daily transportation', icon: <Zap className="w-8 h-8 text-green-600" /> },
                    { title: 'Tourism Services', description: 'Perfect for sightseeing and tourist transportation', icon: <Globe className="w-8 h-8 text-blue-600" /> },
                    { title: 'Industrial Use', description: 'Suitable for warehouse and industrial site transport', icon: <Settings className="w-8 h-8 text-green-600" /> },
                    { title: 'Family Transport', description: 'Safe and comfortable family transportation solution', icon: <Heart className="w-8 h-8 text-blue-600" /> }
                  ].map((app, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                      <div className="mb-4">{app.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h4>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Discover other electric tricycles that match your needs and preferences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tricycleProducts
              .filter(product => product.id !== tricycle.id) // Exclude current product
              .sort((a, b) => {
                // Smart sorting algorithm for better recommendations
                let scoreA = 0;
                let scoreB = 0;
                
                // Same category gets highest priority
                if (a.category === tricycle.category) scoreA += 100;
                if (b.category === tricycle.category) scoreB += 100;
                
                // Similar price range (within $1000)
                const priceDistA = Math.abs(a.price - tricycle.price);
                const priceDistB = Math.abs(b.price - tricycle.price);
                if (priceDistA <= 1000) scoreA += 50;
                if (priceDistB <= 1000) scoreB += 50;
                
                // Higher rated products get bonus
                scoreA += a.rating * 10;
                scoreB += b.rating * 10;
                
                // In stock products get priority
                if (a.inStock) scoreA += 30;
                if (b.inStock) scoreB += 30;
                
                // New or bestseller badges get bonus
                if (a.badge === 'bestseller' || a.badge === 'new') scoreA += 20;
                if (b.badge === 'bestseller' || b.badge === 'new') scoreB += 20;
                
                return scoreB - scoreA;
              })
              .slice(0, 3) // Show only top 3 recommendations
              .map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/products/electric-tricycles/${relatedProduct.id}`)}
                >
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                      <ResponsiveImage
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {relatedProduct.badge === 'new' && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {relatedProduct.badge === 'bestseller' && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          BESTSELLER
                        </span>
                      )}
                      {relatedProduct.badge === 'sale' && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          SALE
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="absolute bottom-3 right-3">
                      {relatedProduct.inStock ? (
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

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-green-600 uppercase tracking-wider">
                        {relatedProduct.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-semibold text-gray-900">{relatedProduct.rating}</span>
                        <span className="text-xs text-gray-500">({relatedProduct.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Battery className="w-3 h-3 text-green-600" />
                        <span className="text-gray-600">{relatedProduct.specifications.range}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gauge className="w-3 h-3 text-blue-600" />
                        <span className="text-gray-600">{relatedProduct.specifications.maxSpeed}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-gray-400 line-through mr-1">
                            ${relatedProduct.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-xl font-bold text-green-600">
                          ${relatedProduct.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* View Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/electric-tricycles/${relatedProduct.id}`);
                      }}
                      className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Fallback when no related products */}
          {tricycleProducts.filter(product => product.id !== tricycle.id).length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <Truck size={48} className="mx-auto" />
              </div>
              <p className="text-gray-600">No related products available at the moment.</p>
            </div>
          )}
          
          {/* Show All Products Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/products/electric-tricycles')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              View All Electric Tricycles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in the {tricycle.name}?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get a personalized quote with pricing, delivery options, and technical specifications.
          </p>
          <button
            onClick={handleQuoteRequest}
            className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg"
          >
            Get Your Quote Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TricycleDetails;

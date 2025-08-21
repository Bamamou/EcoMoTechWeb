import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { evChargerProducts, type EVChargerProduct } from "@/data/evChargersData";
import {
  Star,
  Heart,
  Eye,
  Search,
  Zap,
  Shield,
  Wifi,
  Clock,
  DollarSign,
  Home,
  Car,
  Building,
  Truck
} from "lucide-react";

const EVChargers = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const products = evChargerProducts;

  const categories = [
    { id: 'all', name: 'All Chargers', count: products.length },
    { id: 'home', name: 'Home', count: products.filter(p => p.category === 'home').length },
    { id: 'commercial', name: 'Commercial', count: products.filter(p => p.category === 'commercial').length },
    { id: 'fast', name: 'Fast DC', count: products.filter(p => p.category === 'fast').length },
    { id: 'portable', name: 'Portable', count: products.filter(p => p.category === 'portable').length },
  ];

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Fast Charging",
      description: "From 3kW home chargers to 150kW ultra-fast charging stations"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Safe & Reliable",
      description: "Advanced safety features and certified protection systems"
    },
    {
      icon: <Wifi className="w-12 h-12 text-green-600" />,
      title: "Smart Connected",
      description: "WiFi enabled with mobile app control and monitoring"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Cost Efficient",
      description: "Energy efficient charging with smart load management"
    }
  ];

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/ev-chargers/${productId}`);
  };

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.badge === 'new' ? 1 : -1;
        default:
          return 0;
      }
    });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-blue-500/40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 opacity-30 rounded-full animate-ping"></div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              EV Chargers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete electric vehicle charging solutions for every need
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">Smart Connected</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">Fast Charging</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">Safe & Reliable</span>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Chargers
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EcoMoTech EV Chargers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From home charging to commercial installations, we provide comprehensive EV charging solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our EV Charging Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From portable chargers to ultra-fast DC stations, find the perfect charging solution
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search EV chargers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                    <ResponsiveImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
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

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                    />
                  </button>

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
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">Power: {product.specifications.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{product.specifications.chargingSpeed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{product.specifications.connectorType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{product.specifications.protection}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {feature.length > 15 ? feature.substring(0, 15) + '...' : feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through mr-2">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-green-600">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Eye className="w-5 h-5" />
                      View Details
                    </button>

                    {/* Stock Indicator */}
                    {product.inStock ? (
                      <div className="text-center">
                        {product.stockCount <= 5 ? (
                          <span className="text-orange-600 text-sm font-medium">
                            Only {product.stockCount} left in stock!
                          </span>
                        ) : (
                          <span className="text-green-600 text-sm">
                            {product.stockCount} units available
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-red-600 text-sm font-medium">
                          Currently out of stock
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No EV chargers found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chargers for Every Application</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need home charging, commercial installations, or ultra-fast highway stations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Home className="w-12 h-12 text-green-600" />, 
                title: 'Home Charging', 
                description: 'Convenient daily charging solutions for residential use',
                category: 'home'
              },
              { 
                icon: <Building className="w-12 h-12 text-blue-600" />, 
                title: 'Commercial', 
                description: 'Workplace and business charging installations',
                category: 'commercial'
              },
              { 
                icon: <Zap className="w-12 h-12 text-green-600" />, 
                title: 'Fast DC', 
                description: 'Ultra-fast charging for highways and corridors',
                category: 'fast'
              },
              { 
                icon: <Car className="w-12 h-12 text-blue-600" />, 
                title: 'Portable', 
                description: 'Flexible charging solutions for any location',
                category: 'portable'
              }
            ].map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category.category);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4 flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Electric?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional EV charging installation and support from our certified technicians
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg"
            >
              Get Installation Quote
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 rounded-xl transition-colors duration-300"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EVChargers;

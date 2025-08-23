import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { ArrowLeft, AlertCircle, Truck, Star } from 'lucide-react';

const SolarInverterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Simple inverter data matching the SolarInverters component
  const invertersData = [
    {
      id: "growatt-min-5000tl-x",
      name: "Growatt MIN 5000TL-X",
      power: "5kW",
      image: "images/Inverters/Growatt MIN 5000TL-X.webp",
      price: "From $1,200",
      category: "residential",
      features: ["Maximum efficiency of 98.4%", "Dual MPP trackers", "Smart monitoring via app", "Integrated DC switch", "Wide voltage range", "Compact design"],
      description: "Perfect for residential installations, the 5kW inverter offers excellent efficiency and smart features for optimal solar power conversion."
    },
    {
      id: "growatt-max-10ktl3-x",
      name: "Growatt MAX 10KTL3-X",
      power: "10kW",
      image: "images/Inverters/Growatt MAX 10KTL3-X.jpg",
      price: "From $2,200",
      category: "commercial",
      features: ["Maximum efficiency of 98.6%", "Multiple MPP trackers", "Advanced grid support", "IP65 protection rating", "Touch-key design", "Extended warranty"],
      description: "Ideal for commercial applications, this 10kW inverter combines high performance with advanced monitoring capabilities."
    },
    {
      id: "growatt-max-15ktl3-x",
      name: "Growatt MAX 15KTL3-X",
      power: "15kW",
      image: "images/Inverters/Growatt MAX 15KTL3-X in.avif",
      price: "From $3,200",
      category: "commercial",
      features: ["Maximum efficiency of 98.8%", "Triple MPP trackers", "Enhanced safety features", "Remote monitoring", "Anti-PID technology", "Low voltage ride through"],
      description: "Our premium 15kW inverter delivers exceptional performance for large commercial installations with advanced grid support features."
    },
    {
      id: "sungrow-sg8-0rt",
      name: "Sungrow SG8.0RT",
      power: "8kW",
      image: "images/Inverters/Sungrow SG8.0RT.png",
      price: "From $1,800",
      category: "residential",
      features: ["Maximum efficiency of 98.3%", "Three MPPT channels", "Built-in WiFi monitoring", "Touch-free commissioning", "AI-powered yield optimization", "12-year warranty"],
      description: "Sungrow's versatile 8kW inverter designed for medium-sized residential and small commercial installations."
    },
    {
      id: "sungrow-sg10rt",
      name: "Sungrow SG10RT",
      power: "10kW",
      image: "images/Inverters/Sungrow SG10RT.webp",
      price: "From $2,100",
      category: "commercial",
      features: ["Maximum efficiency of 98.4%", "Four MPPT channels", "Smart string monitoring", "Touch-free commissioning", "Built-in export control", "12-year warranty"],
      description: "Advanced 10kW inverter with smart features for commercial applications."
    },
    {
      id: "sungrow-sg12rt",
      name: "Sungrow SG12RT",
      power: "12kW",
      image: "images/Inverters/Sungrow SG12RT.webp",
      price: "From $2,500",
      category: "commercial",
      features: ["Maximum efficiency of 98.7%", "Five MPPT channels", "Smart string monitoring", "Integrated AFCI protection", "DC Type II SPD protection", "Low voltage ride through"],
      description: "High-performance 12kW inverter perfect for large residential and commercial solar installations."
    },
    {
      id: "huawei-sun2000-5ktl-l1",
      name: "Huawei SUN2000-5KTL-L1",
      power: "5kW",
      image: "images/Inverters/Huawei SUN2000-5KTL-L1.jpg",
      price: "From $1,300",
      category: "residential",
      features: ["Maximum efficiency of 98.4%", "Smart IV curve diagnosis", "Built-in PID recovery", "Smart string monitoring", "APP remote control", "10-year warranty"],
      description: "Huawei's reliable 5kW inverter with smart features for residential installations."
    },
    {
      id: "huawei-sun2000-8ktl-m1",
      name: "Huawei SUN2000-8KTL-M1",
      power: "8kW",
      image: "images/Inverters/Huawei SUN2000-8KTL-M1.avif",
      price: "From $1,900",
      category: "residential",
      features: ["Maximum efficiency of 98.6%", "Smart optimizer compatible", "Arc fault circuit interrupter", "Smart string monitoring", "Remote shutdown", "10-year warranty"],
      description: "Advanced 8kW inverter with smart optimization features."
    },
    {
      id: "goodwe-gw3000-ns",
      name: "Goodwe GW3000-NS",
      power: "3kW",
      image: "images/Inverters/Goodwe GW3000-NS.jpg",
      price: "From $900",
      category: "residential",
      features: ["Maximum efficiency of 97.8%", "Single MPPT tracker", "Built-in WiFi/GPRS", "Compact and lightweight", "Modern OLED display", "10-year warranty"],
      description: "Compact and reliable 3kW inverter perfect for small residential solar installations with excellent monitoring capabilities."
    },
    {
      id: "goodwe-gw6000-dt",
      name: "Goodwe GW6000-DT",
      power: "6kW",
      image: "images/Inverters/Goodwe GW6000-DT.jpg",
      price: "From $1,400",
      category: "residential",
      features: ["Maximum efficiency of 98.2%", "Dual MPPT trackers", "Smart monitoring system", "Arc fault protection", "Zero export control", "IP66 protection rating"],
      description: "Reliable 6kW inverter with dual MPPT technology and comprehensive protection features for medium-sized residential installations."
    },
    {
      id: "goodwe-gw8000-dt",
      name: "Goodwe GW8000-DT",
      power: "8kW",
      image: "images/Inverters/Goodwe GW10K-DT.jpg",
      price: "From $1,800",
      category: "residential",
      features: ["Maximum efficiency of 98.5%", "Dual MPPT trackers", "Cloud monitoring platform", "Zero export control", "Advanced grid support", "IP66 protection"],
      description: "Advanced 8kW inverter with cloud-based monitoring and superior grid integration capabilities for larger homes."
    },
    {
      id: "goodwe-gw10k-dt",
      name: "Goodwe GW10K-DT",
      power: "10kW",
      image: "images/Inverters/Goodwe GW10K-DT.webp",
      price: "From $2,000",
      category: "commercial",
      features: ["Maximum efficiency of 98.4%", "Dual MPPT design", "Remote firmware updates", "DC switch integrated", "Type II SPD protection", "Wide voltage range"],
      description: "High-performance 10kW inverter suitable for larger residential and small commercial installations with comprehensive protection features."
    },
    {
      id: "ecoverter5",
      name: "Ecoverter5",
      power: "5kW",
      image: "images/Inverters/Ecoverter5.webp",
      price: "From $1,300",
      category: "residential",
      features: ["Maximum efficiency of 98.5%", "Dual MPPT channels", "Smart home integration", "AI-powered monitoring", "Dual AC/DC protection", "15-year warranty"],
      description: "Our flagship 5kW inverter featuring smart home integration and industry-leading efficiency for residential installations."
    },
    {
      id: "ecoverter8",
      name: "Ecoverter8",
      power: "8kW",
      image: "images/Inverters/Ecoverter8.webp",
      price: "From $1,900",
      category: "commercial",
      features: ["Maximum efficiency of 98.7%", "Triple MPPT system", "Cloud monitoring platform", "Zero export control", "Advanced grid support", "IP66 protection"],
      description: "Advanced 8kW inverter with cloud-based monitoring and superior grid integration capabilities for larger homes."
    },
    {
      id: "ecoverter10",
      name: "Ecoverter10",
      power: "10kW",
      image: "images/Inverters/Ecoverter10.avif",
      price: "From $2,300",
      category: "commercial",
      features: ["Maximum efficiency of 98.9%", "Quad MPPT technology", "Remote diagnostics", "Battery ready design", "Surge protection", "Smart grid ready"],
      description: "Premium 10kW inverter with future-ready features including battery storage compatibility and smart grid integration."
    }
  ];

  const inverter = invertersData.find(p => p.id === id);

  const getRecommendations = (currentProduct: any) => {
    if (!currentProduct) return [];
    
    // Get products from the same category first, then others
    const sameCategory = invertersData.filter(p => 
      p.id !== currentProduct.id && p.category === currentProduct.category
    );
    
    const otherCategory = invertersData.filter(p => 
      p.id !== currentProduct.id && p.category !== currentProduct.category
    );
    
    // Return up to 3 recommendations, prioritizing same category
    return [...sameCategory, ...otherCategory].slice(0, 3);
  };

  const recommendations = getRecommendations(inverter);

  const handleQuoteRequest = () => {
    navigate('/contact', { 
      state: { 
        productId: inverter?.id, 
        productType: 'Solar Inverter',
        productName: inverter?.name 
      } 
    });
  };

  const handleContactUs = () => {
    navigate('/contact', { 
      state: { 
        productId: inverter?.id, 
        productType: 'Solar Inverter',
        productName: inverter?.name,
        inquiryType: 'general'
      } 
    });
  };

  if (!inverter) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <AlertCircle size={64} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The solar inverter you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products/solar-inverters')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Solar Inverters
          </button>
        </div>
      </Layout>
    );
  }

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
            <button onClick={() => navigate('/products/solar-inverters')} className="hover:text-blue-600 transition-colors">Solar Inverters</button>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{inverter.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button onClick={() => navigate('/products/solar-inverters')} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors">
          <ArrowLeft size={20} />
          Back to Solar Inverters
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <ResponsiveImage src={inverter.image} alt={inverter.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{inverter.name}</h1>
              <p className="text-lg text-gray-600 font-medium">Power: {inverter.power}</p>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                inverter.category === 'residential' ? 'bg-green-100 text-green-800' :
                inverter.category === 'commercial' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {inverter.category.charAt(0).toUpperCase() + inverter.category.slice(1)} Inverter
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-800">4.8</span>
              <span className="text-gray-500">(128 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{inverter.price}</div>
              <p className="text-gray-600">Professional installation available</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{inverter.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="space-y-3">
                {inverter.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleQuoteRequest}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Truck size={20} />
                Request Quote
              </button>
              <button 
                onClick={handleContactUs}
                className="px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
              <p className="text-lg text-gray-600">Other solar inverters that might interest you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
                  onClick={() => navigate(`/products/solar-inverters/${product.id}`)}
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <ResponsiveImage 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">{product.power}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-2 ${
                        product.category === 'residential' ? 'bg-green-100 text-green-800' :
                        product.category === 'commercial' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">{product.price}</div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SolarInverterDetails;

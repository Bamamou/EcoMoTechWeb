import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sun, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  Shield, 
  Leaf, 
  MapPin, 
  Award, 
  Heart, 
  Users, 
  Settings,
  ArrowRight
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Top10BenefitsSolarEnergy = () => {
  // SEO optimization
  useSEO({
    title: "Top 10 Benefits of Switching to Solar Energy for Homes and Businesses",
    description: "Discover the top 10 benefits of switching to solar energy in West Africa. From cost savings to energy independence, learn why solar is the smart choice for homes and businesses.",
    keywords: ["solar energy benefits", "West Africa solar", "residential solar", "commercial solar", "solar savings", "renewable energy", "energy independence", "solar ROI"],
    canonical: "/news/top-10-benefits-solar-energy"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-ecomotech-dark-blue to-ecomotech-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-ecomotech-green text-white">
              Solar Energy Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Top 10 Benefits of Switching to Solar Energy for Homes and Businesses
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Powering a Brighter Future for West Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                Clean Energy
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Cost Savings
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Energy Independence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-ecomotech-green">
              <p className="text-lg leading-relaxed text-gray-700">
                In West Africa, electricity access and reliability remain major challenges. Frequent blackouts, rising fuel costs, and dependence on diesel generators affect both homes and enterprises. Fortunately, solar energy offers a sustainable solution—one that brings light, independence, and opportunity.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                At Ecomotech, we believe the sun is more than a source of light—it's a driver of transformation. By adopting solar energy, you're not just saving money; you're investing in a cleaner, smarter, and more resilient future.
              </p>
            </Card>

            {/* Benefits List */}
            <div className="space-y-8">
              {/* Benefit 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      1. Save Big on Electricity Bills
                    </h3>
                    <p className="text-gray-700 mb-4">
                      One of the biggest advantages of solar energy is cost savings. After installing your system, the sun becomes your free power source. Whether you're running a home or managing a business, switching to solar can cut your electricity expenses by up to 70%.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        💡 <strong>Tip:</strong> Explore our <Link to="/products/home-systems" className="text-ecomotech-green hover:underline">Residential Solar Systems</Link> to calculate your monthly savings with Ecomotech.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Benefit 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      2. Strong Long-Term Return on Investment (ROI)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Solar is not an expense—it's an investment. With a lifespan of 20–25 years, solar panels and battery storage systems generate long-term financial returns. You save money every month while increasing your property's value.
                    </p>
                    <p className="text-gray-700">
                      Businesses especially benefit from lower operational costs and stable energy budgets, reducing dependence on grid tariffs.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      3. Reliable Power During Outages
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Power instability is common across the region. Ecomotech's Solar + Battery Energy Storage Systems (BESS) provide 24/7 energy—even during blackouts.
                    </p>
                    <p className="text-gray-700 mb-4">
                      This reliability is vital for critical facilities like clinics, schools, and SMEs that can't afford downtime.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        👉 Learn more about <Link to="/products/energy-storage" className="text-ecomotech-green hover:underline">Battery Energy Storage Solutions</Link> by Ecomotech.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Benefit 4 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      4. Energy Independence and Control
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Solar systems allow you to produce and manage your own electricity. No more depending on unpredictable power supply or fuel deliveries.
                    </p>
                    <p className="text-gray-700">
                      With Ecomotech's smart energy solutions, you can monitor generation and consumption through connected mobile apps, putting control back in your hands.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 5 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      5. Environmentally Friendly and Sustainable
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Solar power emits zero carbon during operation. By switching to clean energy, you reduce your environmental impact, combat air pollution, and help protect West Africa's natural ecosystem.
                    </p>
                    <p className="text-gray-700">
                      Each solar installation contributes to the United Nations Sustainable Development Goals (SDGs)—especially SDG 7: Affordable and Clean Energy.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 6 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      6. Perfect for Urban and Rural Areas
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Whether you live in Conakry, Dakar, Accra, or a rural community, solar energy adapts to your environment.
                    </p>
                    <p className="text-gray-700 mb-4">
                      From small solar home systems to mini-grids and commercial installations, Ecomotech designs scalable solutions that fit your specific needs and budget.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        🌍 See how Ecomotech supports <Link to="/services/energy-assessment" className="text-ecomotech-green hover:underline">rural electrification projects here</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Benefit 7 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      7. Government Incentives and Regional Policies
                    </h3>
                    <p className="text-gray-700 mb-4">
                      West African governments are supporting renewable energy through favorable policies.
                    </p>
                    <p className="text-gray-700">
                      Initiatives like the ECOWAS Renewable Energy Policy (EREP) and national programs in Nigeria, Ghana, and Guinea offer tax exemptions, import duty reductions, and financing support for solar projects—making it easier to go green.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 8 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      8. Health Benefits of Cleaner Energy
                    </h3>
                    <p className="text-gray-700">
                      Replacing diesel and kerosene with solar reduces exposure to harmful smoke and air pollutants. Cleaner air leads to better respiratory health and safer living conditions for families, especially in dense urban areas.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 9 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      9. Job Creation and Economic Growth
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Every solar installation supports local employment. From technicians and installers to engineers and suppliers, the renewable energy industry creates new jobs across West Africa.
                    </p>
                    <p className="text-gray-700">
                      By choosing Ecomotech, you're not only powering your home or business—you're powering local economic growth.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefit 10 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      10. Easy Installation and Low Maintenance
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Modern solar systems are designed for efficiency and simplicity. Once installed, maintenance is minimal—just occasional cleaning and performance checks.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Ecomotech's professional installation team ensures your system operates at maximum capacity, with remote monitoring and after-sales support for long-term reliability.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-800">
                        🔧 Learn more about our <Link to="/services/solar-installation" className="text-ecomotech-green hover:underline">Solar Installation Services</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Separator className="my-12" />

            {/* Conclusion */}
            <Card className="p-8 bg-gradient-to-r from-ecomotech-dark-blue to-ecomotech-blue text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                The Time to Go Solar Is Now
              </h2>
              <p className="text-lg mb-4 opacity-90">
                West Africa's energy landscape is changing fast—and solar energy is leading the transformation.
              </p>
              <p className="text-lg mb-4 opacity-90">
                With abundant sunshine, supportive policies, and innovations in storage and affordability, there's never been a better time to switch to solar.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Whether you want to reduce costs, gain independence, or protect the planet, Ecomotech.online is your trusted partner in clean energy transition.
              </p>
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  ✨ Contact Ecomotech Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm mt-4 opacity-80">
                  Start saving with the power of the sun
                </p>
              </div>
            </Card>

            {/* Related Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-ecomotech-dark-blue">
                Related Solutions & Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/products/home-systems" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Residential Solar Systems</span>
                </Link>
                <Link to="/services/solar-consultancy" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Commercial Solar Solutions</span>
                </Link>
                <Link to="/products/energy-storage" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Battery Energy Storage (BESS)</span>
                </Link>
                <Link to="/products/ev-chargers" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">EV Charging Stations</span>
                </Link>
                <Link to="/contact" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Contact Us</span>
                </Link>
                <Link to="/about" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">About Ecomotech</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Top10BenefitsSolarEnergy;
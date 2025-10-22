import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  DollarSign, 
  Heart, 
  Shield, 
  Users, 
  Fuel,
  Wrench,
  Leaf,
  MapPin,
  ArrowRight,
  Battery,
  Target
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const ElectricMotorcyclesAfricanRoads = () => {
  // SEO optimization
  useSEO({
    title: "5 Reasons Why Electric Motorcycles Are Perfect for African Roads",
    description: "Discover why electric motorcycles are the future of transportation in West Africa — from fuel savings and durability to cleaner air and smoother rides on African roads.",
    keywords: ["electric motorcycles in Africa", "e-mobility West Africa", "affordable electric transport", "eco-friendly bikes", "sustainable transportation Africa", "Ecomotech electric motorcycles"],
    canonical: "/news/electric-motorcycles-african-roads"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-ecomotech-dark-blue to-ecomotech-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-ecomotech-green text-white">
              E-Mobility Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              5 Reasons Why Electric Motorcycles Are Perfect for African Roads
            </h1>
            <p className="text-xl opacity-90 mb-8">
              The future of sustainable transportation in West Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Electric Power
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Cost Savings
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                Eco-Friendly
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
              <h2 className="text-2xl font-bold mb-4 text-ecomotech-dark-blue">
                Tackling Africa's Transportation Challenges Head-On
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                In many West African countries, transportation is the heartbeat of daily life — from bustling city streets to remote rural roads. Yet, challenges such as high fuel prices, unreliable public transport, and poor road infrastructure often make mobility difficult and expensive.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Electric motorcycles offer a practical solution to these realities. They are built to handle tough road conditions while reducing dependency on imported fuel. For riders, delivery businesses, and even commuters, e-motorcycles provide a modern, reliable, and cost-effective way to move around — perfectly suited to the local context.
              </p>
            </Card>

            {/* Reasons List */}
            <div className="space-y-8">
              {/* Reason 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      1. Tackling Africa's Transportation Challenges Head-On
                    </h3>
                    <p className="text-gray-700 mb-4">
                      In many West African countries, transportation is the heartbeat of daily life — from bustling city streets to remote rural roads. Yet, challenges such as high fuel prices, unreliable public transport, and poor road infrastructure often make mobility difficult and expensive.
                    </p>
                    <p className="text-gray-700">
                      Electric motorcycles offer a practical solution to these realities. They are built to handle tough road conditions while reducing dependency on imported fuel. For riders, delivery businesses, and even commuters, e-motorcycles provide a modern, reliable, and cost-effective way to move around — perfectly suited to the local context.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Reason 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      2. Save Big on Fuel and Maintenance
                    </h3>
                    <p className="text-gray-700 mb-4">
                      One of the most significant benefits of switching to electric motorcycles is the cost savings. Traditional petrol motorcycles consume large amounts of fuel, which can be a heavy burden on daily earnings — especially with fluctuating fuel prices across Africa.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Electric motorcycles eliminate the need for fuel altogether. A simple charge — often costing less than a bottle of water — can power your entire day's ride. Additionally, electric motors have fewer moving parts than combustion engines, which means less maintenance, fewer breakdowns, and lower long-term ownership costs.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Fuel className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Cost Savings Breakdown:</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Daily charging cost: Less than $0.50</li>
                        <li>• 90% reduction in maintenance costs</li>
                        <li>• No oil changes or engine repairs needed</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 mt-4">
                      For delivery companies, riders, and local entrepreneurs, this translates into more profit and less hassle.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Reason 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      3. Cleaner Air, Healthier Communities
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Urban areas like Lagos, Accra, Abidjan, and Conakry face increasing air pollution from vehicle emissions. By adopting electric motorcycles, we take a vital step toward cleaner cities and healthier lives.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Every electric bike on the road means fewer exhaust fumes, reduced greenhouse gases, and better air quality for everyone. This shift not only supports climate action goals but also helps reduce respiratory diseases linked to pollution — making electric motorcycles a win for both the environment and public health.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Environmental Impact:</span>
                      </div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Zero direct emissions during operation</li>
                        <li>• Reduced urban air pollution</li>
                        <li>• Lower carbon footprint compared to petrol bikes</li>
                        <li>• Supports climate action goals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reason 4 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      4. Built for African Roads and Everyday Needs
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Electric motorcycles are now engineered to meet the realities of African road conditions — from smooth urban asphalt to bumpy rural paths. Many models feature durable suspension systems, powerful torque, and long-lasting batteries that can handle daily commutes or delivery routes of 60–120 km per charge.
                    </p>
                    <p className="text-gray-700 mb-4">
                      With solar charging stations increasingly available across the region, recharging becomes simple and sustainable, even in areas without reliable grid power. Riders can plug in at home, at work, or at solar hubs operated by companies like Ecomotech, making e-mobility both practical and accessible.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">Built for African Conditions:</span>
                      </div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Durable suspension for rough roads</li>
                        <li>• 60-120 km range per charge</li>
                        <li>• Solar charging station compatibility</li>
                        <li>• Weather-resistant design</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to="/products/electric-motorcycles" 
                        className="inline-flex items-center gap-2 text-ecomotech-green hover:text-ecomotech-dark-green font-medium"
                      >
                        Explore Our Electric Motorcycles <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reason 5 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-ecomotech-green text-white rounded-full p-3 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-ecomotech-dark-blue">
                      5. Empowering Communities and Building a Sustainable Future
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Electric motorcycles do more than move people — they empower communities. By reducing fuel dependency, they free up income that can be reinvested in families, education, and local businesses.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Cleaner air means healthier children, fewer medical bills, and stronger communities. On a larger scale, adopting e-mobility supports Africa's transition to renewable energy and strengthens the region's resilience against climate change.
                    </p>
                    <p className="text-gray-700">
                      It's not just about technology — it's about shaping a better, more sustainable future for all.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-purple-800">Community Benefits:</span>
                      </div>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• More income for families and businesses</li>
                        <li>• Reduced healthcare costs from cleaner air</li>
                        <li>• Support for renewable energy transition</li>
                        <li>• Climate resilience building</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Separator className="my-12" />

            {/* Conclusion */}
            <Card className="p-8 bg-gradient-to-r from-ecomotech-dark-blue to-ecomotech-blue text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                The Road Ahead Is Electric
              </h2>
              <p className="text-lg mb-4 opacity-90">
                The future of transportation in West Africa is electric — and the change has already begun. With rising fuel costs, urban pollution, and the need for affordable mobility, electric motorcycles are the smart, sustainable solution Africa has been waiting for.
              </p>
              <p className="text-lg mb-8 opacity-90">
                At Ecomotech, we believe in empowering riders and communities with reliable, eco-friendly, and affordable electric mobility solutions designed for African realities. Together, we can drive towards a cleaner, more prosperous tomorrow.
              </p>
              <div className="text-center">
                <Link 
                  to="/products/electric-motorcycles" 
                  className="inline-flex items-center gap-2 bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  🔋 Ready to make the switch?
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm mt-4 opacity-80">
                  Discover Ecomotech's range of durable and affordable electric motorcycles built for African roads
                </p>
              </div>
            </Card>

            {/* Statistics Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-ecomotech-dark-blue text-center">
                Why Electric Motorcycles Make Sense
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-ecomotech-dark-blue mb-2">90% Lower</h4>
                  <p className="text-gray-600">Operating costs compared to petrol motorcycles</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Battery className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-ecomotech-dark-blue mb-2">120km</h4>
                  <p className="text-gray-600">Range per charge for daily commuting</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-ecomotech-dark-blue mb-2">Zero</h4>
                  <p className="text-gray-600">Direct emissions for cleaner cities</p>
                </Card>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-ecomotech-dark-blue">
                Explore Electric Mobility Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/products/electric-motorcycles" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Electric Motorcycles</span>
                </Link>
                <Link to="/products/electric-tricycles" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Electric Tricycles</span>
                </Link>
                <Link to="/products/ev-chargers" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">EV Charging Stations</span>
                </Link>
                <Link to="/services/ev-charger-installation" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Charging Installation</span>
                </Link>
                <Link to="/services/ev-repair" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">EV Maintenance & Repair</span>
                </Link>
                <Link to="/contact" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-ecomotech-green font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricMotorcyclesAfricanRoads;
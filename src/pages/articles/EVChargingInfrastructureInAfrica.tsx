import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Map, Zap, BatteryCharging, TrendingUp, Globe, 
  PlugZap, Sun, Smartphone, RefreshCw, BarChart2,
  Battery, CreditCard, CloudLightning, Users, Leaf, Wallet
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const EVChargingInfrastructureInAfrica = () => (
  <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <article className="prose prose-lg max-w-none">
      {/* Modern Gradient Header */}
      <header className="mb-12 bg-gradient-to-r from-ecomotech-blue to-ecomotech-green p-8 rounded-xl text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 mb-4">
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">EV Charging</Badge>
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">African Innovation</Badge>
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">Clean Tech</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Africa's EV Charging Revolution: 
            <span className="block mt-2">Building the Solar-Powered Backbone</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
            <p className="text-white/90 mb-4 sm:mb-0">
              Published: June 20, 2025 &nbsp;|&nbsp; Author: EcoMoTech Insights
            </p>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm">8 min read</div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm">Industry Analysis</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img 
          src="/images/articles/EVChargingInfrastructureInAfrica/EV charging Inf.jpg" 
          alt="Electric vehicle charging infrastructure across Africa with solar panels and modern charging stations"
          className="w-full h-64 md:h-80 object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
          }}
        />
      </div>

    {/* Key Insight Card */}
    <Card className="p-6 mb-12 bg-gradient-to-br from-ecomotech-blue/5 to-ecomotech-green/5 border border-gray-100 shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="bg-ecomotech-blue/10 p-4 rounded-full">
          <PlugZap className="h-10 w-10 text-ecomotech-blue" />
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-3 text-gray-800">The African Charging Advantage</h2>
          <p className="text-gray-700 leading-relaxed">
            Africa is leapfrogging traditional EV infrastructure models by combining <span className="font-semibold text-ecomotech-green">solar energy dominance</span>, 
            <span className="font-semibold text-ecomotech-blue"> mobile payment ecosystems</span>, and 
            <span className="font-semibold text-ecomotech-green"> 2/3-wheeler first strategies</span>. 
            The continent isn't just adopting EV charging - it's reinventing it for emerging markets.
          </p>
        </div>
      </div>
    </Card>

    {/* Market Overview with Data Visualization */}
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <Map className="h-7 w-7 text-ecomotech-blue" />
        <h2 className="text-2xl font-bold">Market Accelerators</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Policy Momentum</h3>
            <Badge variant="outline" className="border-ecomotech-green/30 text-ecomotech-green">2023-2025</Badge>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Rwanda: 0% import tax on EVs + charging gear</p>
                <p className="text-sm text-gray-600 mt-1">Result: 50% YoY EV adoption growth</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Kenya: Draft National E-Mobility Policy</p>
                <p className="text-sm text-gray-600 mt-1">Target: 5% EVs by 2025, 1000+ charging points</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Egypt: $1.3bn EV factory + 3,000 charging points</p>
              </div>
            </li>
          </ul>
        </Card>
        
        <Card className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg mb-4">Adoption Metrics</h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">2/3-Wheeler Electrification</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-gray-200" />
              <p className="text-sm text-gray-600 mt-2">Of new EVs in East Africa are e-motos (Source: AfDB 2024)</p>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Solar-Powered Stations</span>
                <span className="font-medium">63%</span>
              </div>
              <Progress value={63} className="h-2 bg-gray-200" />
              <p className="text-sm text-gray-600 mt-2">Of new installations feature solar integration</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* Africa's Superpowers Section */}
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="h-7 w-7 text-ecomotech-green" />
        <h2 className="text-2xl font-bold">Africa's Charging Superpowers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border border-amber-100 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="h-5 w-5 text-amber-600" />
            <h3 className="font-bold">Solar Integration</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Africa's 60% global solar advantage enables off-grid charging solutions. Hybrid stations reduce grid dependency by 40% while cutting operational costs.
          </p>
          <div className="mt-4">
            <span className="inline-block px-2 py-1 bg-amber-500/10 text-amber-700 rounded-full text-xs font-medium">
              Cost Reduction: 35-50%
            </span>
          </div>
        </Card>
        
        <Card className="p-5 bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] border border-sky-100 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="h-5 w-5 text-sky-600" />
            <h3 className="font-bold">Mobile-First Payments</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Seamless integration with M-Pesa, Airtel Money, and MoMo through QR/USSD enables adoption among the 45% unbanked population.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {['M-Pesa', 'Airtel Money', 'MoMo', 'Wave', 'OM'].map((item) => (
              <span key={item} className="px-2 py-1 bg-sky-500/10 text-sky-700 rounded-full text-xs">
                {item}
              </span>
            ))}
          </div>
        </Card>
        
        <Card className="p-5 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] border border-emerald-100 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="h-5 w-5 text-emerald-600" />
            <h3 className="font-bold">Battery Swapping Dominance</h3>
          </div>
          <p className="text-gray-700 text-sm">
            3-minute swaps solve range anxiety for e-motos. BaaS (Battery-as-a-Service) models are achieving 90%+ adoption in pilot cities.
          </p>
          <div className="mt-4">
            <span className="inline-block px-2 py-1 bg-emerald-500/10 text-emerald-700 rounded-full text-xs font-medium">
              Swap Time: 3 min vs 4 hr charge
            </span>
          </div>
        </Card>
      </div>
    </section>

    {/* Section: African-Optimized Business Models */}
    <div className="my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 flex items-center justify-center gap-3">
        <BarChart2 className="w-8 h-8 text-ecomotech-blue" />
        African-Optimized Business Models
      </h2>
      <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
        Standard EV charging models are not always a perfect fit for the diverse African market. Instead, innovative, context-aware business models are emerging. Here are the four leading approaches.
      </p>
    </div>

    <div className="space-y-16">
          {/* Section 1: Solar Hubs */}
          <section id="solar-hubs">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Sun className="w-8 h-8 text-ecomotech-green" />
              Solar Hubs: Powering Communities
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4 text-lg">
                  Solar hubs are becoming the cornerstone of EV charging in areas with unreliable grid access. These self-sufficient stations use solar panels to charge battery packs, which can then be used for vehicles, homes, or small businesses.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Community-Centric:</strong> Provides clean energy for more than just transport.</li>
                  <li><strong>Grid Independent:</strong> Operates reliably without depending on the national grid.</li>
                  <li><strong>Scalable:</strong> Can be deployed in various sizes, from small village hubs to larger urban centers.</li>
                </ul>
              </div>
              
              {/* Compact Solar Hub Image */}
              <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/images/articles/EVChargingInfrastructureInAfrica/solar charging.jpg" 
                    alt="Solar-powered EV charging hub"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-sm">Key Feature: Energy as a Service (EaaS)</h4>
                  <p className="text-xs">
                    This model allows customers to purchase energy for specific needs—charging a scooter, lighting a home, or powering a shop—without the upfront cost of owning the solar infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Battery Swap */}
          <section id="battery-swap">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BatteryCharging className="w-8 h-8 text-ecomotech-green" />
              Battery Swap: Instant Refueling
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4 text-lg">
                  The battery swap model addresses the long charging times associated with EVs. Instead of waiting, riders can exchange their depleted battery for a fully charged one in minutes. This is particularly effective for commercial fleets like motorcycle taxis.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Time-Efficient:</strong> Swapping takes less than 5 minutes.</li>
                  <li><strong>Reduced Upfront Cost:</strong> Customers can buy the vehicle without the expensive battery, subscribing to a swap service instead.</li>
                  <li><strong>Battery Health Management:</strong> Centralized charging ensures batteries are maintained for optimal lifespan and safety.</li>
                </ul>
              </div>
              
              {/* Compact Battery Swap Image */}
              <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/images/articles/EVChargingInfrastructureInAfrica/battery swapping.jpg" 
                    alt="Battery swap station"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-sm">Key Feature: Battery as a Service (BaaS)</h4>
                  <p className="text-xs">
                    Users pay a subscription fee for access to a network of swap stations. This decouples the battery cost from the vehicle cost, making EVs more affordable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: PAYGo Charging */}
          <section id="paygo-charging">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wallet className="w-8 h-8 text-ecomotech-green" />
              PAYGo Charging: Flexible & Accessible
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4 text-lg">
                  Pay-As-You-Go (PAYGo) charging leverages mobile money to offer incredible flexibility. Users can pay for the exact amount of electricity they need, making it highly accessible for low-income users. This model is already proven in the African solar home system market.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Mobile Money Integration:</strong> Seamless payments using ubiquitous mobile platforms.</li>
                  <li><strong>Low Barrier to Entry:</strong> No need for subscriptions or bank accounts.</li>
                  <li><strong>Data-Driven Insights:</strong> Provides valuable data on energy consumption patterns.</li>
                </ul>
              </div>
              
              {/* Compact Mobile Payment Image */}
              <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/images/articles/EVChargingInfrastructureInAfrica/payment.jpg" 
                    alt="Mobile payment for EV charging"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-sm">Key Feature: Micro-transactions</h4>
                  <p className="text-xs">
                    Enables users to make small, frequent payments for charging, aligning with daily or weekly income streams and promoting financial inclusion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Fleet Solutions */}
          <section id="fleet-solutions">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-ecomotech-green" />
              Fleet Solutions: Electrifying Logistics
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="mb-4 text-lg">
                  This B2B model focuses on electrifying commercial fleets, such as delivery bikes and three-wheelers (tuk-tuks). It often combines dedicated charging/swapping infrastructure with vehicle leasing and maintenance services.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Total Cost of Ownership (TCO):</strong> Reduces operational costs for businesses through lower fuel and maintenance expenses.</li>
                  <li><strong>Optimized Operations:</strong> Fleet management software tracks vehicle usage, battery health, and routing.</li>
                  <li><strong>Dedicated Infrastructure:</strong> Ensures high availability and reliability for business-critical operations.</li>
                </ul>
              </div>
              
              {/* Compact Fleet Charging Image */}
              <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/images/articles/EVChargingInfrastructureInAfrica/fleet.jpg" 
                    alt="Electric fleet charging facility"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-sm">Key Feature: Full-Service Leasing</h4>
                  <p className="text-xs">
                    Businesses lease the electric vehicles and get charging, maintenance, and software bundled into a single operational expense, reducing capital outlay.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

      {/* Section: Market Leaders */}
      <div className="my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <Leaf className="w-8 h-8 text-ecomotech-blue" />
          Market Leaders Building Africa's Backbone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ampersand */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="p-6 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Ampersand</h3>
                  <p className="text-sm text-gray-600">Rwanda/Kenya</p>
                </div>
                <Badge variant="secondary">Solar Swap Stations</Badge>
              </div>
              <p className="text-gray-700 mb-4">
                Ampersand is pioneering solar-powered battery swap stations, significantly reducing downtime for EVs and promoting sustainable energy use.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-ecomotech-blue/30">5M+ km powered</Badge>
                <Badge variant="outline" className="border-ecomotech-blue/30">90%+ adoption in pilot cities</Badge>
              </div>
            </div>
          </Card>

          {/* Spiro */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="p-6 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Spiro</h3>
                  <p className="text-sm text-gray-600">Pan-African</p>
                </div>
                <Badge variant="secondary">Battery Swap Network</Badge>
              </div>
              <p className="text-gray-700 mb-4">
                Spiro is developing a comprehensive battery swap network across Africa, aiming to make EV ownership as convenient as traditional vehicles.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-ecomotech-blue/30">400+ stations</Badge>
                <Badge variant="outline" className="border-ecomotech-blue/30">12+ countries</Badge>
              </div>
            </div>
          </Card>

          {/* GridCars */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="p-6 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">GridCars</h3>
                  <p className="text-sm text-gray-600">South Africa</p>
                </div>
                <Badge variant="secondary">Corridor Charging</Badge>
              </div>
              <p className="text-gray-700 mb-4">
                GridCars is establishing a network of high-speed DC chargers along major transport corridors, facilitating long-distance travel for EVs.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-ecomotech-blue/30">100+ DC chargers</Badge>
                <Badge variant="outline" className="border-ecomotech-blue/30">Strategic partnerships with fuel stations</Badge>
              </div>
            </div>
          </Card>

          {/* Powerhive */}
          <Card className="hover:shadow-lg transition-shadow">
            <div className="p-6 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">Powerhive</h3>
                  <p className="text-sm text-gray-600">Kenya</p>
                </div>
                <Badge variant="secondary">Solar Microgrids + EV</Badge>
              </div>
              <p className="text-gray-700 mb-4">
                Powerhive is integrating EV charging with solar microgrids, providing a sustainable and reliable energy source for off-grid communities.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-ecomotech-blue/30">Off-grid communities</Badge>
                <Badge variant="outline" className="border-ecomotech-blue/30">Innovative financing models</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Future Outlook */}
      <Card className="p-8 mb-12 bg-gradient-to-r from-ecomotech-blue/5 to-ecomotech-green/5 border border-gray-100 rounded-2xl shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <Globe className="h-12 w-12 mx-auto text-ecomotech-blue mb-4" />
          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-800">
            The Road Ahead: 2025-2030 Outlook
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Africa's EV charging infrastructure is projected to grow at 34% CAGR through 2030. The winning solutions will combine 
            <span className="font-semibold text-ecomotech-green"> solar resilience</span>, 
            <span className="font-semibold text-ecomotech-blue"> mobile-first UX</span>, and 
            <span className="font-semibold text-ecomotech-green"> localized business models</span>. 
            As battery prices drop 12% annually and solar efficiency improves, Africa's charging network will become a global blueprint for emerging markets.
          </p>
          <div className="inline-flex px-4 py-2 bg-ecomotech-green text-white rounded-full font-medium text-sm">
            Investment Opportunity: $4.5B by 2030
          </div>
        </div>
      </Card>
  </article>
  </main>
);

export default EVChargingInfrastructureInAfrica;
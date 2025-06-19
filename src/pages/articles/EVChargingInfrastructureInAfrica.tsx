import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Map, Zap, BatteryCharging, TrendingUp, Globe, 
  PlugZap, Sun, Smartphone, RefreshCw, BarChart2,
  Battery, CreditCard, CloudLightning, Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EVChargingInfrastructureInAfrica = () => (
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

    {/* Business Models Tabs */}
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <BarChart2 className="h-7 w-7 text-ecomotech-blue" />
        <h2 className="text-2xl font-bold">African-Optimized Business Models</h2>
      </div>
      
      <Tabs defaultValue="solar" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-100 p-2 rounded-xl">
          <TabsTrigger value="solar" className="data-[state=active]:bg-white rounded-lg py-3">
            <Sun className="h-4 w-4 mr-2" /> Solar Hubs
          </TabsTrigger>
          <TabsTrigger value="swapping" className="data-[state=active]:bg-white rounded-lg py-3">
            <Battery className="h-4 w-4 mr-2" /> Battery Swap
          </TabsTrigger>
          <TabsTrigger value="paygo" className="data-[state=active]:bg-white rounded-lg py-3">
            <CreditCard className="h-4 w-4 mr-2" /> PAYGo Charging
          </TabsTrigger>
          <TabsTrigger value="fleet" className="data-[state=active]:bg-white rounded-lg py-3">
            <Users className="h-4 w-4 mr-2" /> Fleet Solutions
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="solar" className="pt-6">
          <Card className="p-6 border border-gray-100 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h3 className="font-bold text-xl mb-3">Solar Charging Hubs</h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
                    <p><span className="font-medium">Tech Stack:</span> Solar PV + Storage + DC/AC Chargers</p>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
                    <p><span className="font-medium">Revenue Streams:</span> Charging fees + Retail + Advertising</p>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-ecomotech-green rounded-full mt-2 mr-3"></span>
                    <p><span className="font-medium">ROI:</span> 18-24 months in high-sun regions</p>
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-ecomotech-blue/30">Powerhive Kenya</Badge>
                  <Badge variant="outline" className="border-ecomotech-blue/30">TotalEnergies SA</Badge>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-ecomotech-blue/5 to-ecomotech-green/5 p-4 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-ecomotech-green">63%</div>
                  <p className="text-sm text-gray-600">Of new installations</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        {/* Other tab contents would follow similar structure */}
      </Tabs>
    </section>

    {/* Key Players Section */}
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <CloudLightning className="h-7 w-7 text-ecomotech-green" />
        <h2 className="text-2xl font-bold">Market Leaders Building Africa's Backbone</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { 
            name: "Ampersand", 
            markets: "Rwanda/Kenya", 
            model: "Solar Swap Stations", 
            impact: "5M+ km powered" 
          },
          { 
            name: "Spiro", 
            markets: "Pan-African", 
            model: "Battery Swap Network", 
            impact: "400+ stations" 
          },
          { 
            name: "GridCars", 
            markets: "South Africa", 
            model: "Corridor Charging", 
            impact: "100+ DC chargers" 
          },
          { 
            name: "Powerhive", 
            markets: "Kenya", 
            model: "Solar Microgrids + EV", 
            impact: "Off-grid communities" 
          }
        ].map((player, index) => (
          <Card key={index} className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p className="text-sm text-gray-600">{player.markets}</p>
              </div>
              <Badge variant="secondary">{player.model}</Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-ecomotech-green">{player.impact}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                ))}
                <div className="text-xs text-gray-500 ml-2">Backed by Shell Ventures, AfDB, etc</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>

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
);

export default EVChargingInfrastructureInAfrica;
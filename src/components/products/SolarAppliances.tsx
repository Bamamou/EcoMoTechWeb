import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { 
  solarAppliancesData, 
  solarApplianceCategories, 
  type SolarAppliance 
} from "@/data/solarAppliancesData";
import { 
  Search, 
  Filter, 
  Zap, 
  Battery, 
  Sun, 
  Thermometer,
  Fan,
  Shield,
  BatteryCharging,
  ChefHat,
  Refrigerator
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { getPageSEO } from "@/lib/seo";

const categoryIcons: Record<SolarAppliance['category'], any> = {
  'cooling': Thermometer,
  'ventilation': Fan,
  'refrigeration': Refrigerator,
  'security': Shield,
  'power-storage': BatteryCharging,
  'cooking': ChefHat
};

const SolarAppliances = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  // SEO optimization
  const solarAppliancesSEO = getPageSEO('solar-appliances');
  useSEO({
    title: "Solar Appliances - Off-Grid Solar Powered Devices | EcoMoTech",
    description: "Discover our comprehensive range of solar appliances including air conditioners, refrigerators, fans, security cameras, power stations and cooking appliances. Energy-efficient off-grid solutions.",
    keywords: ["solar appliances", "solar air conditioner", "solar refrigerator", "solar fans", "solar power station", "off-grid appliances", "solar cooking", "solar security camera"],
    canonical: "/products/solar-appliances"
  });

  const filteredAppliances = useMemo(() => {
    return solarAppliancesData.filter((appliance) => {
      const matchesSearch = appliance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           appliance.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           appliance.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || appliance.category === selectedCategory;
      
      const matchesPrice = priceRange === "all" || (() => {
        const price = parseInt(appliance.price.replace(/[$,]/g, ''));
        switch (priceRange) {
          case "under-500": return price < 500;
          case "500-1000": return price >= 500 && price < 1000;
          case "1000-2000": return price >= 1000 && price < 2000;
          case "over-2000": return price >= 2000;
          default: return true;
        }
      })();

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const formatCategoryName = (category: string) => {
    return solarApplianceCategories.find(cat => cat.id === category)?.name || category;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <Sun className="w-8 h-8 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solar Appliances & Off-Grid Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Power your daily life with our innovative solar-powered appliances. From cooling and refrigeration to security and cooking - all running on clean, renewable energy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Battery className="w-4 h-4" />
                <span>Battery Backup Included</span>
              </div>
              <div className="flex items-center gap-1">
                <Sun className="w-4 h-4" />
                <span>100% Solar Powered</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Energy Efficient</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {solarApplianceCategories.map((category) => {
                const IconComponent = categoryIcons[category.id as SolarAppliance['category']];
                return (
                  <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer" 
                        onClick={() => setSelectedCategory(category.id)}>
                    <CardContent className="p-4 text-center">
                      <div className="mx-auto w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{category.count} Products</p>
                      <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-7">View</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search solar appliances..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {solarApplianceCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-500">Under $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                    <SelectItem value="over-2000">Over $2,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-6">
              Showing {filteredAppliances.length} of {solarAppliancesData.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {filteredAppliances.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAppliances.map((appliance) => {
                  const IconComponent = categoryIcons[appliance.category];
                  return (
                    <Card key={appliance.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <ResponsiveImage
                          src={appliance.images.main}
                          alt={appliance.name}
                          className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-blue-600">
                            <IconComponent className="w-3 h-3 mr-1" />
                            {formatCategoryName(appliance.category)}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-600 text-white">
                            {appliance.price}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {appliance.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {appliance.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Solar Panel:</span>
                            <span className="font-medium">{appliance.solarPanelCapacity}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Battery:</span>
                            <span className="font-medium">{appliance.batteryCapacity}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Power:</span>
                            <span className="font-medium">{appliance.power}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button asChild className="flex-1">
                            <Link to={`/products/solar-appliances/${appliance.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            Compare
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Solar Appliances */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Solar Appliances?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Independence</h3>
                <p className="text-gray-600">Operate completely off-grid with reliable solar power and battery backup systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Zero emissions operation powered by clean, renewable solar energy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                <p className="text-gray-600">Eliminate electricity bills and reduce operating costs with solar-powered appliances.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our solar appliance specialists to find the perfect off-grid solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/solar-consultancy">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SolarAppliances;
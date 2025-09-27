import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { 
  solarAppliancesData, 
  solarApplianceCategories, 
  type SolarAppliance 
} from "@/data/solarAppliancesData";
import { 
  ArrowLeft,
  Zap, 
  Battery, 
  Sun, 
  Shield,
  Truck,
  Calendar,
  CheckCircle,
  Star,
  Thermometer,
  Fan,
  Refrigerator,
  BatteryCharging,
  ChefHat,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const categoryIcons: Record<SolarAppliance['category'], any> = {
  'cooling': Thermometer,
  'ventilation': Fan,
  'refrigeration': Refrigerator,
  'security': Shield,
  'power-storage': BatteryCharging,
  'cooking': ChefHat
};

const SolarApplianceDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const appliance = useMemo(() => {
    return solarAppliancesData.find(item => item.id === id);
  }, [id]);

  // State for selected image (starts with main image)
  const [selectedImage, setSelectedImage] = useState<string>('');

  // Initialize selected image when appliance loads
  React.useEffect(() => {
    if (appliance) {
      setSelectedImage(appliance.images.main);
    }
  }, [appliance]);

  const relatedAppliances = useMemo(() => {
    if (!appliance) return [];
    return solarAppliancesData
      .filter(item => item.category === appliance.category && item.id !== appliance.id)
      .slice(0, 3);
  }, [appliance]);

  // SEO optimization
  useSEO({
    title: appliance ? `${appliance.name} - Solar Appliance Details | EcoMoTech` : "Solar Appliance Not Found",
    description: appliance ? `${appliance.description} - ${appliance.solarPanelCapacity} solar panel, ${appliance.batteryCapacity} battery capacity. Professional installation and warranty included.` : "Solar appliance product not found",
    keywords: appliance ? [appliance.name, "solar appliance", appliance.category, "off-grid", "solar power", "battery backup"] : [],
    canonical: `/products/solar-appliances/${id}`
  });

  if (!appliance) {
    return <Navigate to="/products/solar-appliances" replace />;
  }

  const IconComponent = categoryIcons[appliance.category];
  const categoryInfo = solarApplianceCategories.find(cat => cat.id === appliance.category);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <section className="pt-24 pb-6 px-4 bg-white border-b">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-blue-600">Products</Link>
              <span>/</span>
              <Link to="/products/solar-appliances" className="hover:text-blue-600">Solar Appliances</Link>
              <span>/</span>
              <span className="text-gray-900">{appliance.name}</span>
            </div>
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/products/solar-appliances">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Solar Appliances
              </Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images with Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <ResponsiveImage
                  src={selectedImage || appliance.images.main}
                  alt={appliance.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg transition-all duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    <IconComponent className="w-3 h-3 mr-1" />
                    {categoryInfo?.name}
                  </Badge>
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {/* Main image thumbnail */}
                <div 
                  className={`relative cursor-pointer rounded-md overflow-hidden ${
                    selectedImage === appliance.images.main ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedImage(appliance.images.main)}
                >
                  <ResponsiveImage
                    src={appliance.images.main}
                    alt={`${appliance.name} - Main view`}
                    className="w-full h-20 object-cover hover:opacity-75 transition-opacity"
                  />
                </div>
                
                {/* Gallery image thumbnails */}
                {appliance.images.gallery.map((galleryImage, index) => (
                  <div 
                    key={index} 
                    className={`relative cursor-pointer rounded-md overflow-hidden ${
                      selectedImage === galleryImage ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(galleryImage)}
                  >
                    <ResponsiveImage
                      src={galleryImage}
                      alt={`${appliance.name} - View ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-75 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              
              {/* Trust Badges */}
              <div className="flex gap-4 justify-center">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span>Professional Installation</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {appliance.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-green-600">{appliance.price}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8/5)</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {appliance.description}
                </p>
              </div>

              {/* Key Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700">Solar Panel Capacity</span>
                    </div>
                    <span className="font-semibold">{appliance.solarPanelCapacity}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Battery Capacity</span>
                    </div>
                    <span className="font-semibold">{appliance.batteryCapacity}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Power Consumption</span>
                    </div>
                    <span className="font-semibold">{appliance.power}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1" asChild>
                    <Link to="/contact">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/services/solar-consultancy">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {appliance.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose This Product?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Zap className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Energy Efficient</h4>
                          <p className="text-sm text-gray-600">Optimized power consumption</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Reliable</h4>
                          <p className="text-sm text-gray-600">Built for continuous operation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Sun className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Off-Grid Ready</h4>
                          <p className="text-sm text-gray-600">Complete independence from grid</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg mb-3">Solar System</h4>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Solar Panel Wattage</span>
                        <span className="font-medium">{appliance.specifications.solarPanelWattage}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Battery Type</span>
                        <span className="font-medium">{appliance.specifications.batteryType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Battery Capacity</span>
                        <span className="font-medium">{appliance.specifications.batteryCapacity}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Charging Time</span>
                        <span className="font-medium">{appliance.specifications.chargingTime}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Operating Time</span>
                        <span className="font-medium">{appliance.specifications.operatingTime}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg mb-3">Product Details</h4>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Power Consumption</span>
                        <span className="font-medium">{appliance.specifications.powerConsumption}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Dimensions</span>
                        <span className="font-medium">{appliance.specifications.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Weight</span>
                        <span className="font-medium">{appliance.specifications.weight}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Operating Temperature</span>
                        <span className="font-medium">{appliance.specifications.operatingTemperature}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Warranty</span>
                        <span className="font-medium">{appliance.specifications.warranty}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Installation Type</span>
                      <span className="font-medium">{appliance.installation.installationType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Setup Time</span>
                      <span className="font-medium">{appliance.installation.setupTime}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Maintenance</span>
                      <span className="font-medium">{appliance.installation.maintenanceRequirement}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Energy Efficiency</span>
                      <span className="font-medium">{appliance.technicalDetails.energyEfficiency}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Solar Charging Efficiency</span>
                      <span className="font-medium">{appliance.technicalDetails.solarChargingEfficiency}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700">Controller Type</span>
                      <span className="font-medium">{appliance.technicalDetails.controllerType}</span>
                    </div>
                    {appliance.technicalDetails.inverterType && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700">Inverter Type</span>
                        <span className="font-medium">{appliance.technicalDetails.inverterType}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ideal Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {appliance.applications.map((application, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">{application.split(':')[0]}</h4>
                        <p className="text-sm text-blue-700">{application.split(':')[1]?.trim()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedAppliances.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedAppliances.map((related) => {
                  const RelatedIcon = categoryIcons[related.category];
                  return (
                    <Card key={related.id} className="hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <ResponsiveImage
                          src={related.image}
                          alt={related.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 right-2 bg-green-600">
                          {related.price}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <RelatedIcon className="w-4 h-4 text-blue-600" />
                          <h3 className="font-semibold text-gray-900">{related.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {related.description}
                        </p>
                        <Button size="sm" asChild className="w-full">
                          <Link to={`/products/solar-appliances/${related.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our solar experts for a personalized consultation and quote for your {appliance.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SolarApplianceDetails;
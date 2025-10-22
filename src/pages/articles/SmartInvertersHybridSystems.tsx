import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Zap,
  Brain,
  Grid3x3,
  Activity,
  Shield,
  Settings,
  CheckCircle,
  TrendingUp,
  Calendar,
  Share2,
  Globe,
  BookOpen,
  Target,
  Lightbulb,
  AlertTriangle,
  Battery,
  Cpu,
  Wifi,
  BarChart3,
  Power,
  Clock,
  Eye
} from "lucide-react";

const SmartInvertersHybridSystems = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Understanding Smart Inverters and Their Role in Hybrid Systems',
        text: 'Discover how smart inverters are revolutionizing hybrid energy systems by enhancing efficiency, stability, and grid interaction.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Understanding Smart Inverters and Their Role in Hybrid Systems&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-blue-600 text-white">
              Technical Article
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Understanding Smart Inverters and Their Role in Hybrid Systems
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              Discover how smart inverters are revolutionizing hybrid energy systems by enhancing efficiency, stability, and grid interaction. Learn their functions, benefits, challenges, and real-world applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>October 22, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Technical Guide</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            
            <div className="mb-8">
              <ResponsiveImage
                src="/images/Inverters/Growatt MAX 15KTL3-X.webp"
                alt="Smart inverters in hybrid energy systems"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  
                  {/* Introduction */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Brain className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        The Smart Evolution of Energy Conversion
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      As renewable energy adoption accelerates worldwide, traditional inverters are evolving to meet the complex demands of modern power systems. Enter the smart inverter — a new generation of power electronics that not only converts DC to AC but also intelligently interacts with the grid, energy storage, and other components in hybrid energy systems.
                    </p>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Smart inverters play a critical role in ensuring stability, efficiency, and communication between renewable sources like solar PV, battery storage systems (BESS), and the utility grid. Their intelligence makes them a cornerstone of next-generation distributed energy networks.
                    </p>
                  </section>

                  {/* What Is a Smart Inverter */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Cpu className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        What Is a Smart Inverter?
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      A smart inverter is an advanced power conversion device that performs all the basic functions of a traditional inverter — converting direct current (DC) from sources like solar panels or batteries into alternating current (AC) used by homes and businesses — but with enhanced control, monitoring, and communication capabilities.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          Traditional vs. Smart Inverter Comparison
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 font-semibold">Feature</th>
                                <th className="text-left py-2 font-semibold">Traditional Inverter</th>
                                <th className="text-left py-2 font-semibold">Smart Inverter</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Core Function</td>
                                <td className="py-2">DC to AC conversion</td>
                                <td className="py-2">DC to AC conversion + intelligent grid interaction</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Communication</td>
                                <td className="py-2">Limited or none</td>
                                <td className="py-2">Advanced digital communication (Modbus, CAN, RS485, Wi-Fi)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Grid Support</td>
                                <td className="py-2">Passive operation</td>
                                <td className="py-2">Active grid support (voltage/frequency regulation)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Energy Management</td>
                                <td className="py-2">Standalone</td>
                                <td className="py-2">Integrated with solar, storage, and grid systems</td>
                              </tr>
                              <tr>
                                <td className="py-2 font-medium">Remote Control</td>
                                <td className="py-2">No</td>
                                <td className="py-2">Yes – via monitoring platforms or cloud systems</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      Smart inverters act as the "brain" of hybrid energy systems, allowing seamless coordination between solar generation, batteries, and the grid.
                    </p>
                  </section>

                  {/* Key Technical Functionalities */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Settings className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Key Technical Functionalities
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Smart inverters integrate advanced control algorithms and bidirectional communication protocols to optimize power flow and grid stability. Their key functionalities include:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Grid3x3 className="w-5 h-5 text-blue-600" />
                            Grid Support Functions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Voltage Regulation:</strong> Adjusts reactive power to maintain stable voltage levels</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Frequency Control:</strong> Responds to grid frequency fluctuations to prevent instability</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Ride-Through Capability:</strong> Allows system to remain connected during short grid disturbances</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-600" />
                            Power Management
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Reactive Power Control:</strong> Inject or absorb reactive power for voltage stability</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Power Factor Correction:</strong> Help utilities manage power quality</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Wifi className="w-5 h-5 text-green-600" />
                            Communication & Monitoring
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Real-time Monitoring:</strong> Performance tracking and diagnostics</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Remote Updates:</strong> Firmware updates and configuration changes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Protocol Support:</strong> Modbus TCP/IP, CAN Bus, RS485</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-600" />
                            Security & Data
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Encrypted Communication:</strong> Secure data transmission</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Cloud Interfaces:</strong> Protected from unauthorized access</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Understanding Hybrid Energy Systems */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Battery className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Understanding Hybrid Energy Systems
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      A hybrid energy system integrates two or more energy sources — typically solar PV, battery storage, and sometimes a diesel generator or the utility grid — to ensure reliable and efficient power delivery.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Smart inverters serve as the central coordinator, managing power flows between:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                      <li><strong>Solar generation</strong> (primary renewable source)</li>
                      <li><strong>Battery energy storage</strong> (for backup and peak shaving)</li>
                      <li><strong>Grid or generator</strong> (for stability and energy balancing)</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      Through intelligent algorithms, smart inverters decide when to charge or discharge the battery, feed excess power to the grid, or draw power from the grid during low-solar or high-demand periods.
                    </p>
                  </section>

                  {/* Benefits */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Benefits of Smart Inverters in Hybrid Systems
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <Card className="border-green-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-700">
                            <Activity className="w-5 h-5" />
                            Enhanced Efficiency
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            By optimizing energy conversion and minimizing losses, smart inverters maximize solar utilization and improve overall system performance.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-blue-700">
                            <Shield className="w-5 h-5" />
                            Improved Reliability
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Advanced fault detection and self-diagnostic features reduce downtime and maintenance costs.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-purple-700">
                            <CheckCircle className="w-5 h-5" />
                            Grid Compliance
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Smart inverters meet modern interconnection standards (like IEEE 1547 and IEC 62109), ensuring grid-friendly operation.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-orange-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-orange-700">
                            <Power className="w-5 h-5" />
                            Energy Independence
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            They support islanding and off-grid modes, enabling hybrid systems to continue operating even during power outages.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-indigo-200 md:col-span-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-indigo-700">
                            <Eye className="w-5 h-5" />
                            Remote Management
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Smart inverters allow operators and homeowners to monitor and control their systems via apps or cloud dashboards — critical for large-scale distributed networks.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Challenges */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Challenges and Limitations
                      </h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Despite their advantages, smart inverters face several challenges:
                    </p>

                    <div className="space-y-4">
                      <Card className="border-red-200">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-700 mb-2">Higher Initial Cost</h4>
                              <p className="text-gray-600">Advanced electronics and communication features increase upfront expenses.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-orange-200">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <Settings className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-orange-700 mb-2">Complex Integration</h4>
                              <p className="text-gray-600">Requires skilled installation and proper configuration within hybrid architectures.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-purple-700 mb-2">Cybersecurity Concerns</h4>
                              <p className="text-gray-600">Increased connectivity introduces potential data vulnerabilities.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">Standardization Gaps</h4>
                              <p className="text-gray-600">Regulatory frameworks in some regions, especially developing markets, are still evolving.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Industry Standards */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <BookOpen className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Industry Standards and Regulatory Considerations
                      </h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Smart inverters are governed by various international standards to ensure safe and interoperable operation:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-semibold text-blue-700 mb-2">IEEE 1547-2018</h4>
                          <p className="text-gray-600 text-sm">Defines grid interconnection and interoperability requirements for distributed energy resources (DERs).</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-semibold text-green-700 mb-2">IEC 62109</h4>
                          <p className="text-gray-600 text-sm">Safety standards for power converters used in photovoltaic systems.</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-semibold text-purple-700 mb-2">UL 1741 SA/SB</h4>
                          <p className="text-gray-600 text-sm">North American certification for grid support functionalities.</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-semibold text-orange-700 mb-2">EN 50549</h4>
                          <p className="text-gray-600 text-sm">European standard for parallel operation with public distribution networks.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      Compliance with these standards ensures that smart inverters can safely interact with both the grid and other distributed resources.
                    </p>
                  </section>

                  {/* Real-World Applications */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <Target className="w-6 h-6 text-teal-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Real-World Applications and Case Studies
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-teal-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-teal-700">
                            <Target className="w-5 h-5" />
                            Residential Hybrid Systems
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            In regions with unreliable grid supply, such as parts of West Africa, smart inverters coordinate solar panels and battery storage to ensure 24/7 power availability. Users can monitor their system performance through smartphone apps, enabling smarter energy consumption.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-blue-700">
                            <Activity className="w-5 h-5" />
                            Commercial and Industrial Installations
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Businesses with high daytime energy use integrate smart inverters to reduce peak demand charges and maintain power quality — improving operational continuity and lowering costs.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-700">
                            <Grid3x3 className="w-5 h-5" />
                            Utility-Scale Projects
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            In grid-connected solar farms, smart inverters enable voltage and frequency regulation, allowing renewable generation to support grid stability rather than disrupt it.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Future */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        The Future of Smart Inverters
                      </h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      As the world moves toward decentralized and intelligent power systems, smart inverters will play an increasingly vital role. Their integration with AI-driven energy management systems, IoT platforms, and smart grids will further enhance resilience, flexibility, and efficiency.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      For hybrid energy systems — particularly in emerging markets — smart inverters represent the key to reliable, sustainable, and connected power.
                    </p>
                  </section>

                  {/* Conclusion */}
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-gray-600" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0">
                        Conclusion
                      </h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Smart inverters are redefining how energy is managed in hybrid systems. Beyond conversion, they bring intelligence, adaptability, and communication, transforming renewable installations into responsive and resilient energy ecosystems.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      As technologies advance and standards mature, their widespread adoption will accelerate the global shift toward smarter, greener, and more sustainable power networks.
                    </p>
                  </section>

                  <Separator className="my-8" />

                  {/* Call to Action */}
                  <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Ready to Implement Smart Inverter Technology?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          EcoMoTech offers cutting-edge smart inverter solutions for hybrid energy systems across West Africa. Our expert team provides consultation, installation, and ongoing support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Zap className="w-4 h-4 mr-2" />
                            Get Smart Inverter Consultation
                          </Link>
                          <Link 
                            to="/products/solar-inverters" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Our Smart Inverters
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Article Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Article Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>October 22, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>15 min read</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <BookOpen className="w-4 h-4" />
                        <span>Technical Guide</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Keywords */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Keywords</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Smart inverters',
                          'Hybrid systems',
                          'Solar energy',
                          'Energy management',
                          'Grid support',
                          'Reactive power',
                          'Renewable energy',
                          'ESS',
                          'EcoMoTech'
                        ].map((keyword) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Articles */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link 
                        to="/articles/thermal-management-whitepaper" 
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-sm text-gray-900 mb-1">
                          Thermal Management in Battery Systems
                        </h4>
                        <p className="text-xs text-gray-600">
                          Advanced cooling strategies for EV batteries
                        </p>
                      </Link>
                      <Link 
                        to="/articles/commercial-pv-bess-systems" 
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-sm text-gray-900 mb-1">
                          Commercial PV-BESS Integration
                        </h4>
                        <p className="text-xs text-gray-600">
                          Solar and storage for businesses
                        </p>
                      </Link>
                      <Link 
                        to="/articles/top-10-benefits-solar-energy" 
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-sm text-gray-900 mb-1">
                          Top 10 Benefits of Solar Energy
                        </h4>
                        <p className="text-xs text-gray-600">
                          Why solar is the future of energy
                        </p>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Share Article</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <button 
                        onClick={handleShare}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        Share This Article
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default SmartInvertersHybridSystems;
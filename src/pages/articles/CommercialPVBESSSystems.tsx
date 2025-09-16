import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Battery, 
  Zap, 
  Settings, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Building,
  Activity,
  Wrench,
  BarChart3,
  Share2,
  Calendar,
  Globe,
  Leaf
} from "lucide-react";

const CommercialPVBESSSystems = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Commercial PV Systems with Battery Energy Storage - Essential Components and Best Practices',
        text: 'Comprehensive guide to designing commercial photovoltaic installations with battery energy storage systems.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Commercial PV Systems with Battery Energy Storage - Essential Guide&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-blue-600 text-white">
              Commercial Solar Solutions
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Essential Components and Best Practices for Commercial PV Systems Integrated with Battery Energy Storage and Grid Connection
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>September 16, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Technical Guide</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Commercial photovoltaic (PV) installations combined with Battery Energy Storage Systems (BESS) are increasingly deployed to enhance energy reliability, support peak shaving, and enable participation in demand response programs. Designing such systems requires a clear understanding of the major components, integration techniques, grid-connection requirements, and applicable standards.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Why Integrate PV with BESS?</h3>
                    <p className="text-gray-700">
                      The combination of solar photovoltaic systems with battery energy storage provides commercial facilities with enhanced energy independence, cost savings through peak shaving, and the ability to participate in grid services while ensuring continuous power supply during outages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Components Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Key Components of a PV–BESS System</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                    PV Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Convert solar irradiance into DC electricity. High-efficiency monocrystalline or bifacial modules are preferred for large rooftops or ground-mounted arrays.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Inverters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    Convert DC from PV or BESS into AC. Options include:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>String inverters for modular rooftop systems</li>
                    <li>Central inverters for large ground-mounted plants</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Battery className="w-5 h-5 text-blue-600" />
                    Battery Energy Storage System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Stores excess solar energy and discharges when demand or grid prices are high. Includes battery racks (Li-ion or LFP), battery management systems (BMS), and thermal management.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Charge Controllers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Manage battery charging/discharging and optimize DC bus voltage, especially in DC-coupled architectures.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Transformers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Step-up voltage from inverter output to match medium-voltage grid requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Protection Devices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Circuit breakers, fuses, contactors, and isolation switches ensure safe operation and fault protection.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-gray-200 mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Monitoring & Control Systems (EMS/SCADA)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Provide real-time performance data, state-of-charge (SoC) monitoring, and enable remote dispatch or grid services participation.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Integration Techniques Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Integration Techniques for PV and BESS</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Seamless integration relies on power electronics and smart controls:
            </p>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">AC-Coupled Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    PV and BESS each have dedicated inverters connected to the AC bus.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Easier retrofit for existing PV systems</li>
                        <li>• Allows independent sizing of PV and storage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Considerations
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Requires coordinated control to prevent power oscillations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">DC-Coupled Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    PV and batteries share a DC bus connected to a single hybrid inverter.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Improves round-trip efficiency</li>
                        <li>• Reduces conversion losses</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Best For
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• New installations where simplicity and high efficiency are priorities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Hybrid Power Conversion Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Use bidirectional inverters capable of handling both PV input and battery charging/discharging.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Control Strategies:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        SoC management to optimize battery lifespan
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Frequency and voltage support for the grid
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        Demand-shifting or peak shaving algorithms
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Grid Connection Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Grid Connection Considerations</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-blue-600" />
                      Interconnection Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Systems may tie into the facility's main distribution panel or directly at the medium-voltage feeder via step-up transformers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Protection Schemes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Relays and overcurrent protection must comply with local utility requirements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      Anti-Islanding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Implement techniques such as active frequency/voltage shifting or passive detection to prevent unintentional grid energization.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Activity className="w-5 h-5 text-blue-600" />
                      Communication Interfaces
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Modbus TCP/IP, IEC 61850, or DNP3 protocols support data exchange with utility SCADA systems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Specifications Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Specifications and Applicable Standards</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Parameter</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Typical Range / Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">PV Array Voltage</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">600–1500 VDC</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Inverter Output Voltage</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">400–800 VAC (LV) or up to 33 kV (MV via transformer)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">BESS Power Rating</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">50 kW – multi-MW depending on application</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">SoC Operating Range</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">10–90% to extend battery life</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Communication Protocols</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Modbus, CAN, IEC 61850</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Standards</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      IEEE 1547 (interconnection), UL 1741 / UL 9540 (inverters & BESS), 
                      IEC 62109 (safety for PV power converters), IEC 62933 (energy storage safety), 
                      plus local grid codes (e.g., ENTSO-E, NFPA 855)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Best Practices Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <h2 className="text-2xl font-bold text-gray-900">Technical Considerations and Best Practices</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Ensure proper cable sizing, conduit management, and grounding
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Maintain clearances for ventilation around batteries and inverters
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use weatherproof enclosures for outdoor switchgear
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Safety Measures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Implement lockout/tagout (LOTO) procedures
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Provide fire suppression for BESS (e.g., clean agent systems)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use PPE rated for the system's voltage
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Protection & Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Install overcurrent protection, surge arrestors, and earth-fault monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Verify inverter anti-islanding functions and grid synchronization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Conduct periodic inspections: tighten terminations, inspect insulation, check battery health (IR, SoH)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Update firmware for EMS, BMS, and inverters regularly
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                  <Leaf className="w-5 h-5" />
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed">
                  A commercial PV system integrated with a BESS and connected to the grid requires a meticulous approach, from component selection to grid-compliant commissioning. Adhering to international standards, implementing robust protection schemes, and following best practices ensures safety, reliability, and optimal performance throughout the system's life cycle.
                </p>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-blue-800">
                    For professional consultation on commercial PV-BESS system design and implementation, contact our technical team at EcoMoTech.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Related Articles */}
          <div className="max-w-4xl mx-auto">
            <Separator className="my-8" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/news/bess-rental-services" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Battery className="w-4 h-4" />
                  BESS Rental Services
                </Link>
                <Link 
                  to="/products/energy-storage" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Energy Storage Solutions
                </Link>
                <Link 
                  to="/services/solar-installation" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
                >
                  <Building className="w-4 h-4" />
                  Commercial Solar Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CommercialPVBESSSystems;
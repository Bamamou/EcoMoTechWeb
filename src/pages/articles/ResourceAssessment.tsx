import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { Link } from "react-router-dom";
import { 
  Sun, 
  BarChart3, 
  MapPin, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Zap,
  Share2,
  Calendar,
  Activity,
  Globe
} from "lucide-react";

const ResourceAssessment = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Role of Resource Assessment in Renewable Energy Project Development',
        text: 'Discover how accurate resource assessment is essential for successful renewable energy projects in Guinea and beyond.',
        url: window.location.href,
      });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=The Role of Resource Assessment in Renewable Energy Project Development&url=${window.location.href}`);
    }
  };

  return (
    <Layout>
      <article className="pt-16 pb-10 bg-gradient-to-br from-white via-blue-50 to-green-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Badge variant="secondary" className="mb-3 text-base px-3 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white shadow-lg">
              Technical Analysis
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-600 to-emerald-400 drop-shadow-lg">
              The Role of Resource Assessment in Renewable Energy Project Development
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 mb-6">
              <span className="font-semibold">September 2, 2025</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              <span>By EcoMoTech Technical Team</span>
              <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block" />
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-400 text-white font-semibold shadow-md hover:scale-105 transition-transform text-xs sm:text-sm"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
            <ResponsiveImage
              src="/EcoMoTechWeb/images/News/resource-assessment.jpg"
              alt="Solar resource assessment equipment in Guinea - meteorological station measuring solar irradiance"
              className="w-full h-48 sm:h-80 object-cover rounded-2xl shadow-xl mb-8"
              fallback="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
            {/* Introduction */}
            <Card className="bg-white/90 backdrop-blur-lg shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-700 flex items-center gap-3">
                  <Sun className="w-8 h-8" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  Renewable energy project development begins with a fundamental step: <strong>resource assessment</strong>. Without accurate knowledge of the resource potential, investments risk being misallocated, projects underperform, and energy access goals remain unmet.
                </p>
                <p>
                  For solar projects in Guinea—a country endowed with vast solar potential but facing pressing energy access challenges—resource assessment is not just a technical exercise, but a cornerstone of sustainable development.
                </p>
              </CardContent>
            </Card>

            {/* Why Resource Assessment Matters */}
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700 flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  Why Resource Assessment Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  Resource assessment determines whether a site can reliably generate the expected amount of energy over the project's lifetime. It ensures project bankability, helps attract financing, and minimizes risks for developers, governments, and communities.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Ensures project bankability and financial viability</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Attracts financing from investors and institutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Minimizes risks for all stakeholders</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>Optimizes system design and performance</span>
                    </li>
                  </ul>
                </div>
                <p className="italic text-center text-xl font-medium text-green-700 bg-white p-4 rounded-lg border border-green-200">
                  "Resource assessment bridges the gap between vision and reality, transforming natural potential into reliable, deployable energy."
                </p>
              </CardContent>
            </Card>

            {/* Standard Procedures */}
            <Card className="bg-white/90 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8" />
                  Standard Procedures in Renewable Energy Resource Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <p>
                  A robust resource assessment follows a structured methodology, applicable to solar, wind, hydro, or biomass projects. The steps are as follows:
                </p>

                {/* Procedure Steps */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h4 className="text-xl font-semibold text-blue-800">Preliminary Screening</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use of global and regional databases (e.g., NASA POWER, Global Solar Atlas)</li>
                      <li>Identification of promising sites based on resource availability, grid proximity, and land use</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h4 className="text-xl font-semibold text-green-800">Data Collection & Measurement</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>For solar:</strong> installation of meteorological stations with pyranometers to measure Global Horizontal Irradiance (GHI) and Direct Normal Irradiance (DNI)</li>
                      <li><strong>For other sources:</strong> wind masts, hydrological gauges, or biomass sampling</li>
                      <li>Data collection should span 12–24 months to capture seasonal variability</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h4 className="text-xl font-semibold text-purple-800">Data Validation & Quality Control</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Elimination of erroneous or missing records</li>
                      <li>Cross-validation with satellite-based datasets</li>
                      <li>Application of standard protocols (IEC, ISO) to ensure reliability</li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <h4 className="text-xl font-semibold text-orange-800">Statistical & Long-Term Analysis</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Correlation of short-term ground data with long-term satellite records</li>
                      <li>Development of Typical Meteorological Years (TMY) to represent long-term averages</li>
                    </ul>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-gradient-to-r from-teal-50 to-white p-6 rounded-lg border border-teal-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <h4 className="text-xl font-semibold text-teal-800">Resource Mapping & Site Characterization</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Spatial analysis of solar irradiation, land slope, shading, and environmental constraints</li>
                      <li>Identification of exclusion zones (protected areas, agricultural land, flood-prone zones)</li>
                    </ul>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg border border-indigo-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                      <h4 className="text-xl font-semibold text-indigo-800">Energy Yield Estimation</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Simulation of system performance using software tools (PVsyst, SAM)</li>
                      <li>Sensitivity analysis under different design scenarios</li>
                    </ul>
                  </div>

                  {/* Step 7 */}
                  <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
                      <h4 className="text-xl font-semibold text-red-800">Uncertainty & Risk Assessment</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Quantification of uncertainties (climate variability, equipment calibration, data gaps)</li>
                      <li>Risk mitigation strategies through redundancy and conservative yield assumptions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Factors */}
            <Card className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-700 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  Key Factors Influencing Assessment Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  Several factors can compromise or strengthen the accuracy of resource assessments:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Climate Variability</h4>
                    </div>
                    <p>Guinea's alternating rainy and dry seasons introduce significant fluctuations in solar availability.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Data Quality</h4>
                    </div>
                    <p>Poorly maintained sensors or short measurement periods lead to misleading results.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Site-Specific Conditions</h4>
                    </div>
                    <p>Dust, humidity, and shading from vegetation or buildings can reduce effective solar radiation.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-orange-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Technological Tools</h4>
                    </div>
                    <p>Advanced satellite datasets and remote sensing have improved precision but still require ground-based validation.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guinea Solar Potential */}
            <Card className="bg-white/90 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-3">
                  <Sun className="w-8 h-8" />
                  Solar Resource Potential in Guinea
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-lg border border-green-200">
                  <p className="text-xl font-semibold text-green-800 mb-4">
                    Guinea lies within the high solar irradiation belt of West Africa, with average GHI values between <strong>4.5–5.5 kWh/m²/day</strong>—ideal for photovoltaic projects.
                  </p>
                </div>

                {/* Solar Resource Map */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <h4 className="text-xl font-semibold text-gray-900">Guinea Solar Resource Map</h4>
                  </div>
                  
                  {/* Solar Resource Map Image */}
                  <div className="mb-6">
                    <ResponsiveImage
                      src="/EcoMoTechWeb/images/News/guinea-solar-resource-map.png"
                      alt="Guinea Solar Resource Map - Global Horizontal Irradiance (GHI) showing solar potential across different regions of Guinea with color-coded zones indicating energy density"
                      className="w-full h-64 sm:h-80 object-cover rounded-lg border border-gray-300 shadow-md"
                      fallback="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
                    />
                  </div>

                  {/* Global Solar Atlas Map */}
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Interactive Global Solar Atlas Data</h5>
                    <ResponsiveImage
                      src="https://globalsolaratlas.info/download/guinea"
                      alt="Guinea Solar Atlas Data - Interactive map showing detailed solar irradiance measurements and meteorological data"
                      className="w-full h-64 sm:h-80 object-contain rounded-lg border border-gray-300 bg-gray-50"
                      fallback="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&q=80"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                    <p className="text-sm text-gray-600">
                      <em>Source: Global Solar Atlas - showing Global Horizontal Irradiance (GHI) distribution across Guinea</em>
                    </p>
                    <a
                      href="https://globalsolaratlas.info/map?r=GIN&c=9.948969,-11.35835,7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      View Interactive Map
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-blue-800">Climatic Characteristics</h4>
                    </div>
                    <p>A pronounced rainy season (May–October) reduces solar resource predictability due to cloud cover.</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-green-800">Geographic Advantages</h4>
                    </div>
                    <p>Vast land areas, especially in Upper Guinea (Kankan, Siguiri, Kouroussa), provide prime sites for large-scale solar farms.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-yellow-600" />
                      <h4 className="text-xl font-semibold text-yellow-800">Socio-Economic Context</h4>
                    </div>
                    <p>Low rural electrification rates (&lt;30%) create strong demand for decentralized solar solutions (mini-grids, off-grid systems).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-700 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  Case Studies from Guinea's Solar Initiatives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <div className="space-y-6">
                  {/* Case Study 1 */}
                  <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-purple-800 mb-4">Kaloum Solar Project (Conakry)</h4>
                    <p>
                      A grid-connected solar PV project that highlighted the importance of thorough site selection to minimize urban shading and maximize irradiance capture.
                    </p>
                  </div>

                  {/* Case Study 2 */}
                  <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-blue-800 mb-4">Boke Mini-Grid Pilot</h4>
                    <p>
                      Demonstrated how accurate ground measurements, combined with community consultations, improved project acceptance and ensured sustainable operation.
                    </p>
                  </div>

                  {/* Case Study 3 */}
                  <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-green-800 mb-4">Scaling Solar Program Exploration</h4>
                    <p>
                      Although still at a planning stage, it underscores the need for standardized resource data to attract international investors.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg border border-green-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-3">Lesson Learned</h4>
                      <p className="text-lg">
                        Projects with rigorous, long-term solar resource assessments secured stronger financing and achieved better-than-expected performance, while those relying solely on satellite data without validation faced operational underperformance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gray-50 border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Conclusion</h2>
                </div>
                <div className="space-y-6 text-lg">
                  <p className="text-xl font-medium text-gray-800 leading-relaxed">
                    For Guinea, resource assessment is the foundation upon which the solar energy future will be built. By combining reliable data, robust methodologies, and lessons from early initiatives, Guinea can attract investment, optimize project performance, and accelerate its path toward universal energy access.
                  </p>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg text-center">
                    <p className="text-xl font-bold mb-4">
                      As Guinea advances its renewable energy agenda, the message is clear:
                    </p>
                    <p className="text-2xl font-extrabold">
                      Accurate resource assessment is not optional—it is essential for success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Ready to Start Your Resource Assessment?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services/solar-consultancy"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Get Expert Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border border-green-300 hover:bg-green-50 transition-colors"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ResourceAssessment;


import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsiveImage } from "@/components/ui/responsive-image";

const NewSolarPanelSeries = () => (
  <Layout>
    <article className="pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 text-base px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-lg">Product Launch</Badge>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-emerald-400 drop-shadow-lg">
            Redefining High-Efficiency Monocrystalline Solar Performance
          </h1>
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span className="font-semibold">April 15, 2024</span>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <span>By EcoMoTech Insights</span>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold shadow-md hover:scale-105 transition-transform text-sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'EcoMotech Aurora Series',
                    text: 'Discover EcoMotech\'s new Aurora Series high-efficiency solar panels!',
                    url: window.location.href,
                  });
                } else {
                  window.open(`https://twitter.com/intent/tweet?text=Discover EcoMotech's new Aurora Series high-efficiency solar panels!&url=${window.location.href}`);
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </button>
          </div>
          <ResponsiveImage
            src="/EcoMoTechWeb/images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg"
            alt="EcoMotech Aurora Series Solar Panels - Modern rooftop installation"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-10"
            fallback="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-16">
          <Card className="bg-white/80 backdrop-blur-lg shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-700">The Photovoltaic Technology Landscape</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                The global solar energy market is characterized by continuous innovation, driven by the pursuit of higher efficiency, greater durability, and improved levelized cost of energy (LCOE). At the core of this evolution are the photovoltaic (PV) cells themselves, which are broadly categorized into three main technology types: <strong>monocrystalline</strong>, <strong>polycrystalline</strong>, and <strong>thin-film</strong>. Each possesses distinct manufacturing processes, performance characteristics, and market applications.
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Monocrystalline Silicon (mono-Si):</strong> Highest efficiency (20-24%), best low-light and temperature performance, premium cost.</li>
                <li><strong>Polycrystalline Silicon (poly-Si):</strong> Lower cost, moderate efficiency (15-17%), larger footprint, more temperature loss.</li>
                <li><strong>Thin-Film (TFSC):</strong> Lightweight, flexible, best for high-heat, lowest efficiency (10-13%), needs more space.</li>
              </ul>
              <p>
                For applications where maximizing energy yield per unit area is paramount, monocrystalline technology has firmly established itself as the premium solution.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700">The Monocrystalline Advantage: A Deep Dive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <ul className="list-disc pl-6">
                <li><strong>Highest Conversion Efficiency:</strong> Pure crystal structure for minimal resistance and top energy conversion.</li>
                <li><strong>Superior Performance at Elevated Temperatures:</strong> Best temperature coefficients (-0.30% to -0.35%/°C).</li>
                <li><strong>Optimized Space Efficiency:</strong> High wattage per panel, fewer panels needed, lower installation costs.</li>
                <li><strong>Enhanced Longevity:</strong> 90% power after 10 years, 85-87% after 25 years, robust against stress.</li>
                <li><strong>Improved Low-Light Performance:</strong> Advanced cell architecture for better dawn/dusk and cloudy day output.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800">Introducing the EcoMotech Aurora Series: A Paradigm of Innovation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p>
                Building upon this formidable technological foundation, EcoMotech is proud to launch its new flagship product line: the <span className="font-semibold text-green-700">Aurora Series</span> of high-efficiency monocrystalline solar panels. This series is not merely an incremental improvement but a significant leap forward, engineered for the discerning installer and end-user who demand peak performance and sustainable manufacturing.
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Hybrid PERC-HJT Cell Architecture:</strong> Exceptional bifaciality ({'>'}85%), ultra-low temperature coefficient (-0.26%/°C), consistent energy harvest.</li>
                <li><strong>Multi-Busbar & SmartWire Technology:</strong> Ultra-dense wire network for higher efficiency, less shading, and superior reliability.</li>
                <li><strong>n-Type Silicon Substrate:</strong> Immune to light-induced degradation, full rated power from day one.</li>
                <li><strong>Sustainable Manufacturing:</strong> Anti-PID/ammonia coatings, carbon-neutral production, closed-loop recycling.</li>
                <li><strong>Unmatched Warranty:</strong> 30-year product & performance guarantee, 92.5% power after 25 years, 89.5% after 30 years.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-100 via-blue-50 to-white border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-emerald-700">Market Impact and Future Outlook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                The launch of the Aurora Series positions EcoMotech at the forefront of the high-efficiency module segment. By addressing key pain points for developers and installers—energy density, reliability, and long-term degradation—the series is poised to become the preferred solution for projects where maximizing return on investment is critical.
              </p>
              <p>
                This innovation aligns perfectly with global market trends pushing for higher-efficiency modules to reduce soft costs and land use. As the industry evolves towards TOPCon, HJT, and other next-gen cell technologies, EcoMotech’s Aurora Series proves that the future of solar is smarter, more efficient, and more sustainable than ever before.
              </p>
            </CardContent>
          </Card>

          {/* Discover Products Section */}
          <div className="mt-20 flex flex-col items-center gap-8">
            <h3 className="text-2xl font-bold text-center text-gray-800">Discover Our Products</h3>
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            <button
              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 overflow-hidden backdrop-blur-sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'EcoMotech Aurora Series',
                    text: 'Discover EcoMotech’s new Aurora Series high-efficiency solar panels!',
                    url: window.location.href,
                  });
                } else {
                  window.open(`https://twitter.com/intent/tweet?text=Discover EcoMotech’s new Aurora Series high-efficiency solar panels!&url=${window.location.href}`);
                }
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-base group-hover:text-yellow-100 transition-colors duration-300">Share Article</span>
                  <span className="text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300">Spread the innovation</span>
                </div>
                
                {/* Animated dots */}
                <div className="flex space-x-1 ml-1">
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse group-hover:bg-yellow-200"></div>
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse group-hover:bg-yellow-200" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse group-hover:bg-yellow-200" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:-translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <a
              href="/products/solar-panels"
              className="group relative flex-1 p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-100 transition-colors duration-300">Solar Panels</h3>
                  <p className="text-blue-100 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Discover our high-efficiency Aurora Series and premium solar solutions
                  </p>
                </div>
                <div className="flex items-center mt-4 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-4 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a
              href="/products/home-systems"
              className="group relative flex-1 p-8 rounded-2xl bg-gradient-to-br from-emerald-600 via-green-500 to-teal-400 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-100 transition-colors duration-300">Home Systems</h3>
                  <p className="text-emerald-100 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Complete solar solutions for residential and commercial installations
                  </p>
                </div>
                <div className="flex items-center mt-4 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>View Systems</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-4 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </article>
  </Layout>
);

export default NewSolarPanelSeries;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import SolarPanels from "./components/products/SolarPanels";
import ElectricMotorcycles from "./components/products/ElectricMotorcycles";
import MotorcycleDetails from './components/products/Product details/MotorcycleDetails';
import SolarPumbs from './components/products/SolarPumbs';
import StreetLightDetails from './components/products/Product details/StreetLightDetails';
import HomeSystemDetails from './components/products/Product details/HomeSystemDetails';

// Lazy load all routes
const About = React.lazy(() => import("./pages/About"));
const News = React.lazy(() => import("./pages/News"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Services = React.lazy(() => import("./pages/Services"));
const JoinUs = React.lazy(() => import("./pages/JoinUs"));

// Lazy load product components
const SolarInverters = React.lazy(() => import("./components/products/SolarInverters"));
const HomeSystems = React.lazy(() => import("./components/products/HomeSystems"));
const StreetLights = React.lazy(() => import("./components/products/StreetLights"));
const EnergyStorage = React.lazy(() => import("./components/products/EnergyStorage"));
const ElectricTricycles = React.lazy(() => import("./components/products/ElectricTricycles"));
const EVChargers = React.lazy(() => import("./components/products/EVChargers"));

// Lazy load article components
const NewSolarPanelSeries = React.lazy(() => import("./pages/articles/NewSolarPanelSeries"));
const DistributionCenter = React.lazy(() => import("./pages/articles/DistributionCenter"));
const RemoteCommunities = React.lazy(() => import("./pages/articles/RemoteCommunities"));
const ResearchPartnership = React.lazy(() => import("./pages/articles/ResearchPartnership"));
const SustainabilityReport = React.lazy(() => import("./pages/articles/SustainabilityReport"));
const StreetLighting = React.lazy(() => import("./pages/articles/StreetLighting"));
const ElectricMobilityAfrica = React.lazy(() => import("./pages/articles/ElectricMobilityAfrica"));
const EVChargingAfrica = React.lazy(() => import("./pages/articles/EVChargingAfrica"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename="/EcoMoTechWeb">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<Services />} />
            
            {/* Product Routes */}
            <Route path="/products/solar-panels" element={<SolarPanels />} />
            <Route path="/products/electric-motorcycles" element={<ElectricMotorcycles />} />
            <Route path="/products/electric-motorcycles/:id" element={<MotorcycleDetails />} />
            <Route path="/products/solar-inverters" element={<SolarInverters />} />
            <Route path="/products/home-systems" element={<HomeSystems />} />
            <Route path="/products/home-systems/:id" element={<HomeSystemDetails />} />
            <Route path="/products/street-lights" element={<StreetLights />} />
            <Route path="/products/street-lights/:id" element={<StreetLightDetails />} />
            <Route path="/products/energy-storage" element={<EnergyStorage />} />
            <Route path="/products/electric-tricycles" element={<ElectricTricycles />} />
            <Route path="/products/ev-chargers" element={<EVChargers />} />
            <Route path="/products/solar-pumbs" element={<SolarPumbs />} />
            
            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/new-solar-panel-series" element={<NewSolarPanelSeries />} />
            <Route path="/news/distribution-center" element={<DistributionCenter />} />
            <Route path="/news/remote-communities" element={<RemoteCommunities />} />
            <Route path="/news/research-partnership" element={<ResearchPartnership />} />
            <Route path="/news/sustainability-report" element={<SustainabilityReport />} />
            <Route path="/news/street-lighting" element={<StreetLighting />} />
            <Route path="/news/electric-mobility-africa" element={<ElectricMobilityAfrica />} />
            <Route path="/news/ev-charging-africa" element={<EVChargingAfrica />} />
            
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

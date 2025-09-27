import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import SolarPanels from "./components/products/SolarPanels";
import SolarPanelDetails from "./components/products/Product details/SolarPanelDetails";
import ElectricMotorcycles from "./components/products/ElectricMotorcycles";
import MotorcycleDetails from './components/products/Product details/MotorcycleDetails';
import SolarPumbs from './components/products/SolarPumbs';
import SolarPumpDetails from './components/products/SolarPumpDetails';
import SolarInverterDetails from './components/products/SolarInverterDetails';
import StreetLightDetails from './components/products/Product details/StreetLightDetails';
import HomeSystemDetails from './components/products/Product details/HomeSystemDetails';
import EnergyStorageDetails from "./components/products/Product details/EnergyStorageDetails";
import TricycleDetails from "./components/products/TricycleDetails";
import EVChargerDetails from "./components/products/Product details/EVChargerDetails";
import SolarInstallation from "@/pages/services/SolarInstallation";
import SolarMaintenance from "@/pages/services/SolarMaintenance";
import EVChargerInstallation from "@/pages/services/EVChargerInstallation";
import EVRepair from "@/pages/services/EVRepair";
import SolarConsultancy from "@/pages/services/SolarConsultancy";
import EnergyAssessment from "@/pages/services/EnergyAssessment";
import SolarInverters from "./components/products/SolarInverters";
import JobDetails from "./pages/JobDetails";

// Import Solar Appliances components
const SolarAppliances = React.lazy(() => import("./components/products/SolarAppliances"));
const SolarApplianceDetails = React.lazy(() => import("./components/products/SolarApplianceDetails"));

// Lazy load all routes
const About = React.lazy(() => import("./pages/About"));
const News = React.lazy(() => import("./pages/News"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Services = React.lazy(() => import("./pages/Services"));
const JoinUs = React.lazy(() => import("./pages/JoinUs"));

// Lazy load product components
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
const ResourceAssessment = React.lazy(() => import("./pages/articles/ResourceAssessment"));
const StreetLighting = React.lazy(() => import("./pages/articles/StreetLighting"));
const ElectricMobilityAfrica = React.lazy(() => import("./pages/articles/ElectricMobilityAfrica"));
const EVChargingAfrica = React.lazy(() => import("./pages/articles/EVChargingAfrica"));
const EVChargingInfrastructureInAfrica = React.lazy(() => import("./pages/articles/EVChargingInfrastructureInAfrica"));
const RenewableEnergyFeasibilityAssessments = React.lazy(() => import("./pages/articles/RenewableEnergyFeasibilityAssessments"));
const SolarHealthcareLighting = React.lazy(() => import("./pages/articles/SolarHealthcareLighting"));
const BESSRentalServices = React.lazy(() => import("./pages/articles/BESSRentalServices"));
const CommercialPVBESSSystems = React.lazy(() => import("./pages/articles/CommercialPVBESSSystems"));

const queryClient = new QueryClient();

// Get the basename from environment variable, default to root path for development and subdomain deployment
const getBasename = () => {
  // For development, always use root path
  if (import.meta.env.DEV) {
    return '/';
  }
  // For Netlify or subdomain deployment, use root path
  if (import.meta.env.VITE_DEPLOYMENT_TARGET === 'netlify' || 
      import.meta.env.VITE_DEPLOYMENT_TARGET === 'subdomain') {
    return '/';
  }
  // Only for GitHub Pages, use repository path
  return import.meta.env.VITE_APP_BASENAME || '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename={getBasename()}>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<Services />} />
            
            {/* Product Routes */}
            <Route path="/products/solar-panels" element={<SolarPanels />} />
            <Route path="/products/solar-panels/:id" element={<SolarPanelDetails />} />
            <Route path="/products/electric-motorcycles" element={<ElectricMotorcycles />} />
            <Route path="/products/electric-motorcycles/:id" element={<MotorcycleDetails />} />
            <Route path="/products/solar-inverters" element={<SolarInverters />} />
            <Route path="/products/solar-inverters/:id" element={<SolarInverterDetails />} />
            <Route path="/products/home-systems" element={<HomeSystems />} />
            <Route path="/products/home-systems/:id" element={<HomeSystemDetails />} />
            <Route path="/products/street-lights" element={<StreetLights />} />
            <Route path="/products/street-lights/:id" element={<StreetLightDetails />} />
            <Route path="/products/energy-storage" element={<EnergyStorage />} />
            <Route path="/products/energy-storage/:id" element={<EnergyStorageDetails />} />
            <Route path="/products/electric-tricycles" element={<ElectricTricycles />} />
            <Route path="/products/electric-tricycles/:id" element={<TricycleDetails />} />
            <Route path="/products/ev-chargers" element={<EVChargers />} />
            <Route path="/products/ev-chargers/:id" element={<EVChargerDetails />} />
            <Route path="/products/solar-pumbs" element={<SolarPumbs />} />
            <Route path="/products/solar-pumbs/:id" element={<SolarPumpDetails />} />
            
            {/* Solar Appliances Routes */}
            <Route path="/products/solar-appliances" element={<SolarAppliances />} />
            <Route path="/products/solar-appliances/:id" element={<SolarApplianceDetails />} />
            
            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news/new-solar-panel-series" element={<NewSolarPanelSeries />} />
            <Route path="/news/distribution-center" element={<DistributionCenter />} />
            <Route path="/news/remote-communities" element={<RemoteCommunities />} />
            <Route path="/news/research-partnership" element={<ResearchPartnership />} />
            <Route path="/news/resource-assessment" element={<ResourceAssessment />} />
            <Route path="/news/street-lighting" element={<StreetLighting />} />
            <Route path="/news/electric-mobility-africa" element={<ElectricMobilityAfrica />} />
            <Route path="/news/ev-charging-africa" element={<EVChargingAfrica />} />
            <Route path="/news/ev-charging-infrastructure-africa" element={<EVChargingInfrastructureInAfrica />} />
            <Route path="/news/renewable-energy-feasibility-assessments" element={<RenewableEnergyFeasibilityAssessments />} />
            <Route path="/news/solar-healthcare-lighting" element={<SolarHealthcareLighting />} />
            <Route path="/news/bess-rental-services" element={<BESSRentalServices />} />
            <Route path="/news/commercial-pv-bess-systems" element={<CommercialPVBESSSystems />} />
            
            {/* Service Routes */}
            <Route path="/services/solar-installation" element={<SolarInstallation />} />
            <Route path="/services/solar-maintenance" element={<SolarMaintenance />} />
            <Route path="/services/ev-charger-installation" element={<EVChargerInstallation />} />
            <Route path="/services/ev-repair" element={<EVRepair />} />
            <Route path="/services/solar-consultancy" element={<SolarConsultancy />} />
            <Route path="/services/energy-assessment" element={<EnergyAssessment />} />
            <Route path="/services" element={<Services />} />

            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

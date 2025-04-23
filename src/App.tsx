import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import JoinUs from "./pages/JoinUs";
import SolarProducts from "./components/products/SolarProducts";
import SolarInverters from "./components/products/SolarInverters";
import HomeSystems from "./components/products/HomeSystems";
import StreetLights from "./components/products/StreetLights";
import EnergyStorage from "./components/products/EnergyStorage";
import ElectricMotorcycles from "./components/products/ElectricMotorcycles";
import ElectricTricycles from "./components/products/ElectricTricycles";
import EVChargers from "./components/products/EVChargers";
import NewSolarPanelSeries from "./pages/articles/NewSolarPanelSeries";
import DistributionCenter from "./pages/articles/DistributionCenter";
import RemoteCommunities from "./pages/articles/RemoteCommunities";
import ResearchPartnership from "./pages/articles/ResearchPartnership";
import SustainabilityReport from "./pages/articles/SustainabilityReport";
import StreetLighting from "./pages/articles/StreetLighting";
import ElectricMobilityAfrica from "./pages/articles/ElectricMobilityAfrica";
import EVChargingAfrica from "./pages/articles/EVChargingAfrica";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          
          {/* Product Routes */}
          <Route path="/products/solar-panels" element={<SolarProducts />} />
          <Route path="/products/solar-inverters" element={<SolarInverters />} />
          <Route path="/products/home-systems" element={<HomeSystems />} />
          <Route path="/products/street-lights" element={<StreetLights />} />
          <Route path="/products/energy-storage" element={<EnergyStorage />} />
          <Route path="/products/electric-motorcycles" element={<ElectricMotorcycles />} />
          <Route path="/products/electric-tricycles" element={<ElectricTricycles />} />
          <Route path="/products/ev-chargers" element={<EVChargers />} />
          
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

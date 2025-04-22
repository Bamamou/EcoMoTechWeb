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
          <Route path="/products/solar-panels" element={<SolarProducts />} />
          <Route path="/products/solar-inverters" element={<SolarInverters />} />
          <Route path="/products/home-systems" element={<HomeSystems />} />
          <Route path="/products/street-lights" element={<StreetLights />} />
          <Route path="/products/energy-storage" element={<EnergyStorage />} />
          <Route path="/products/electric-motorcycles" element={<ElectricMotorcycles />} />
          <Route path="/products/electric-tricycles" element={<ElectricTricycles />} />
          <Route path="/products/ev-chargers" element={<EVChargers />} />
          <Route path="/news" element={<News />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

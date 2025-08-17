import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[60vh] md:h-[85vh] lg:h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
            Powering A Sustainable Future
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-6 md:mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Ecomotech delivers innovative solar power solutions that help businesses and homeowners reduce their carbon footprint while saving on energy costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              Explore Products
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

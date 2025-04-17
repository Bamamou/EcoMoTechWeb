
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Powering A Sustainable Future
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Ecomotech delivers innovative solar power solutions that help businesses and homeowners reduce their carbon footprint while saving on energy costs.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-6 text-lg">
              Explore Products
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

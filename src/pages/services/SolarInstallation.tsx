import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Settings } from "lucide-react";

const SolarInstallation = () => {
  return (
    <ServiceTemplate
      icon={<Settings className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="Solar PV Installation"
      description="Professional installation of solar panels for residential and commercial properties, ensuring optimal performance and safety."
      features={[
        "Customized system design",
        "High-efficiency solar panels",
        "Professional installation",
        "Quality inverters and components",
        "Performance monitoring",
        "Warranty coverage"
      ]}
      process={[
        {
          title: "Initial Assessment",
          description: "Site survey and energy consumption analysis to determine the optimal system size."
        },
        {
          title: "System Design",
          description: "Custom design of your solar PV system based on your energy needs and site conditions."
        },
        {
          title: "Installation",
          description: "Professional installation by our certified team following industry best practices."
        },
        {
          title: "Testing & Commissioning",
          description: "Thorough testing and certification of the installed system."
        }
      ]}
      benefits={[
        "Reduced electricity bills",
        "Increased property value",
        "Environmental sustainability",
        "Energy independence",
        "Government incentives eligibility",
        "Long-term energy savings"
      ]}
    />
  );
};

export default SolarInstallation;
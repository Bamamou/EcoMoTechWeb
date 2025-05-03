import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Wrench } from "lucide-react";

const EVRepair = () => {
  return (
    <ServiceTemplate
      icon={<Wrench className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="Electric Vehicle Repair"
      description="Specialized repair and maintenance services for electric motorcycles and tricycles, ensuring peak performance and longevity."
      features={[
        "Diagnostic services",
        "Battery maintenance",
        "Motor repairs",
        "Controller servicing",
        "Firmware updates",
        "Performance optimization"
      ]}
      process={[
        {
          title: "Diagnostic Assessment",
          description: "Comprehensive diagnosis of vehicle issues using advanced tools."
        },
        {
          title: "Service Planning",
          description: "Development of repair strategy and cost estimation."
        },
        {
          title: "Expert Repair",
          description: "Professional repair service by certified technicians."
        },
        {
          title: "Quality Testing",
          description: "Thorough testing and validation of repairs."
        }
      ]}
      benefits={[
        "Extended vehicle life",
        "Optimal performance",
        "Safe operation",
        "Warranty preservation",
        "Cost-effective maintenance",
        "Expert support"
      ]}
    />
  );
};

export default EVRepair;
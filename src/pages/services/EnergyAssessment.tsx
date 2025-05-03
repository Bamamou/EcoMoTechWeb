import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Zap } from "lucide-react";

const EnergyAssessment = () => {
  return (
    <ServiceTemplate
      icon={<Zap className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="Energy Efficiency Assessment"
      description="Comprehensive energy audits and recommendations for improving energy efficiency in homes and businesses."
      features={[
        "Detailed energy analysis",
        "Consumption patterns",
        "Equipment assessment",
        "Thermal imaging",
        "Cost-saving opportunities",
        "Carbon footprint analysis"
      ]}
      process={[
        {
          title: "Data Collection",
          description: "Gathering historical energy usage data and site information."
        },
        {
          title: "On-site Assessment",
          description: "Thorough inspection of facilities and equipment."
        },
        {
          title: "Analysis & Recommendations",
          description: "Detailed analysis and development of improvement strategies."
        },
        {
          title: "Implementation Planning",
          description: "Creation of actionable implementation roadmap."
        }
      ]}
      benefits={[
        "Reduced energy costs",
        "Improved efficiency",
        "Environmental impact",
        "Regulatory compliance",
        "Enhanced comfort",
        "Sustainable operations"
      ]}
    />
  );
};

export default EnergyAssessment;
import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Factory } from "lucide-react";

const SolarMaintenance = () => {
  return (
    <ServiceTemplate
      icon={<Factory className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="Solar PV Farm Maintenance"
      description="Comprehensive maintenance services for solar farms, including regular inspections, cleaning, and performance optimization."
      features={[
        "Regular performance monitoring",
        "Panel cleaning and maintenance",
        "Inverter servicing",
        "Electrical system checks",
        "Preventive maintenance",
        "24/7 emergency support"
      ]}
      process={[
        {
          title: "Inspection & Assessment",
          description: "Thorough inspection of all system components and performance analysis."
        },
        {
          title: "Maintenance Planning",
          description: "Development of customized maintenance schedules and procedures."
        },
        {
          title: "Regular Servicing",
          description: "Scheduled cleaning, testing, and preventive maintenance."
        },
        {
          title: "Performance Reporting",
          description: "Detailed reporting on system performance and maintenance activities."
        }
      ]}
      benefits={[
        "Maximized system efficiency",
        "Extended equipment lifespan",
        "Reduced downtime",
        "Optimal power generation",
        "Prevention of major issues",
        "Compliance with warranty requirements"
      ]}
    />
  );
};

export default SolarMaintenance;
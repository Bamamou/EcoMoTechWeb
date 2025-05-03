import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { BatteryCharging } from "lucide-react";

const EVChargerInstallation = () => {
  return (
    <ServiceTemplate
      icon={<BatteryCharging className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="EV Charger Installation"
      description="Expert installation of EV charging stations for both residential and commercial applications, with smart integration capabilities."
      features={[
        "Level 2 & DC fast charging",
        "Smart charging capabilities",
        "Load management",
        "Remote monitoring",
        "Payment integration options",
        "Network connectivity"
      ]}
      process={[
        {
          title: "Site Assessment",
          description: "Evaluation of electrical capacity and optimal charger location."
        },
        {
          title: "Equipment Selection",
          description: "Recommendation of suitable charging equipment based on needs."
        },
        {
          title: "Professional Installation",
          description: "Expert installation following safety standards and regulations."
        },
        {
          title: "Testing & Configuration",
          description: "Complete system testing and smart features setup."
        }
      ]}
      benefits={[
        "Convenient charging solution",
        "Increased property value",
        "Future-ready infrastructure",
        "Energy management features",
        "Remote monitoring capability",
        "Compliance with standards"
      ]}
    />
  );
};

export default EVChargerInstallation;
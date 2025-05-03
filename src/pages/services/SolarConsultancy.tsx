import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { LightbulbIcon } from "lucide-react";

const SolarConsultancy = () => {
  return (
    <ServiceTemplate
      icon={<LightbulbIcon className="w-16 h-16 text-ecomotech-green mx-auto" />}
      title="Solar PV Consultancy"
      description="Expert consultation services for solar PV projects, including feasibility studies, system design, and ROI analysis."
      features={[
        "Feasibility studies",
        "System design",
        "Financial analysis",
        "Technical specifications",
        "Project management",
        "Regulatory compliance"
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "Understanding project requirements and objectives."
        },
        {
          title: "Technical Analysis",
          description: "Detailed assessment of site conditions and system requirements."
        },
        {
          title: "Design & Planning",
          description: "Development of comprehensive system design and project plan."
        },
        {
          title: "Implementation Support",
          description: "Guidance throughout project execution and commissioning."
        }
      ]}
      benefits={[
        "Optimized system design",
        "Maximum ROI",
        "Risk mitigation",
        "Technical expertise",
        "Regulatory compliance",
        "Project success"
      ]}
    />
  );
};

export default SolarConsultancy;
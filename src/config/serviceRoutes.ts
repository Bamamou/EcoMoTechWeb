import { Settings, Factory, BatteryCharging, Wrench, LightbulbIcon, Zap } from "lucide-react";

export const serviceRoutes = [
  {
    icon: Settings,
    title: "Solar PV Installation",
    description: "Professional installation of solar panels for residential and commercial properties.",
    path: "/services/solar-installation",
    component: "SolarInstallation"
  },
  {
    icon: Factory,
    title: "Solar PV Farm Maintenance",
    description: "Comprehensive maintenance services for solar farms.",
    path: "/services/solar-maintenance",
    component: "SolarMaintenance"
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    description: "Expert installation of EV charging stations.",
    path: "/services/ev-charger-installation",
    component: "EVChargerInstallation"
  },
  {
    icon: Wrench,
    title: "Electric Vehicle Repair",
    description: "Specialized repair and maintenance services for electric vehicles.",
    path: "/services/ev-repair",
    component: "EVRepair"
  },
  {
    icon: LightbulbIcon,
    title: "Solar PV Consultancy",
    description: "Expert consultation services for solar PV projects.",
    path: "/services/solar-consultancy",
    component: "SolarConsultancy"
  },
  {
    icon: Zap,
    title: "Energy Efficiency Assessment",
    description: "Comprehensive energy audits and recommendations.",
    path: "/services/energy-assessment",
    component: "EnergyAssessment"
  }
];
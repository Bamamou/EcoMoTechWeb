export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  posted: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: "solar-project-manager",
    title: "Solar Project Manager",
    department: "Renewable Energy",
    location: "Shanghai, China",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead and oversee utility-scale solar installation projects from inception to completion, ensuring delivery within scope, budget, and timeline.",
    responsibilities: [
      "Manage multiple solar PV installation projects simultaneously",
      "Coordinate with stakeholders, contractors, and regulatory bodies",
      "Develop and maintain project schedules and budgets",
      "Ensure compliance with safety standards and regulations",
      "Perform risk assessments and develop mitigation strategies"
    ],
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "5+ years experience in solar PV project management",
      "PMP certification preferred",
      "Strong knowledge of solar PV systems and installation methods",
      "Excellent communication and leadership skills"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Performance bonuses",
      "Professional development opportunities",
      "Flexible working arrangements"
    ],
    posted: "2024-04-15"
  },
  {
    id: "ev-software-engineer",
    title: "Senior Software Engineer - EV Charging Platform",
    department: "App Development",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop and maintain our EV charging station management platform, focusing on real-time monitoring, payment processing, and user experience.",
    responsibilities: [
      "Design and implement scalable backend services",
      "Develop RESTful APIs for mobile and web applications",
      "Integrate payment gateways and charging station protocols",
      "Implement real-time monitoring and alerting systems",
      "Collaborate with UI/UX designers and front-end developers"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "4+ years experience in backend development",
      "Proficiency in Node.js, TypeScript, and REST APIs",
      "Experience with real-time communication protocols",
      "Knowledge of payment gateway integration"
    ],
    benefits: [
      "Competitive salary",
      "Stock options",
      "Remote work flexibility",
      "Health and dental insurance",
      "Professional development budget"
    ],
    posted: "2024-04-18"
  },
  {
    id: "battery-systems-engineer",
    title: "Energy Storage Systems Engineer",
    department: "Battery Energy Storage",
    location: "Beijing, China",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and optimize battery energy storage systems for residential and commercial applications.",
    responsibilities: [
      "Design battery storage systems and integration solutions",
      "Perform technical analysis and system modeling",
      "Develop technical specifications and documentation",
      "Collaborate with project teams on system implementation",
      "Provide technical support for installations"
    ],
    requirements: [
      "Master's degree in Electrical Engineering or related field",
      "3+ years experience with battery storage systems",
      "Knowledge of power electronics and grid integration",
      "Familiarity with relevant codes and standards",
      "Experience with system modeling software"
    ],
    benefits: [
      "Competitive salary package",
      "Health and life insurance",
      "Annual bonus",
      "Professional certification support",
      "Relocation assistance"
    ],
    posted: "2024-04-10"
  },
  // ... More job postings to follow
];
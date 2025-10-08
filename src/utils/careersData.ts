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
  {
    id: "product-engineer",
    title: "Product Engineer - Renewable Energy Solutions",
    department: "Engineering",
    location: "Shanghai, China / Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Drive the development and optimization of our renewable energy product portfolio, from solar systems to battery storage solutions and electric mobility products. You will be responsible for product design, testing, quality assurance, and continuous improvement initiatives.",
    responsibilities: [
      "Lead product development lifecycle from concept through production for renewable energy products",
      "Design and optimize solar PV systems, battery storage solutions, and electric vehicle charging equipment",
      "Conduct product testing, validation, and certification compliance (IEC, UL, CE standards)",
      "Perform failure analysis and implement corrective actions to improve product reliability",
      "Collaborate with cross-functional teams including R&D, manufacturing, and quality assurance",
      "Create detailed technical documentation including specifications, test reports, and user manuals",
      "Manage product BOM (Bill of Materials) and component sourcing strategies",
      "Support manufacturing teams with design for manufacturability (DFM) initiatives",
      "Monitor field performance data and implement product improvements",
      "Stay current with industry trends, emerging technologies, and competitive products"
    ],
    requirements: [
      "Bachelor's or Master's degree in Electrical Engineering, Mechanical Engineering, or related field",
      "3-5 years of experience in product engineering, preferably in renewable energy or power electronics",
      "Strong knowledge of solar PV systems, battery technologies (Li-ion, LFP), and power conversion systems",
      "Proficiency in CAD software (SolidWorks, AutoCAD) and simulation tools (MATLAB, ANSYS, LTspice)",
      "Experience with product testing equipment and methodologies",
      "Understanding of international standards (IEC 62109, IEC 62040, UL 1741, UL 9540)",
      "Knowledge of battery management systems (BMS) and inverter technologies",
      "Strong analytical and problem-solving skills with data-driven decision-making ability",
      "Excellent project management skills and ability to manage multiple projects simultaneously",
      "Proficiency in English; Mandarin is a plus"
    ],
    benefits: [
      "Competitive salary with performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "Professional development and certification support (PE, PMP, NABCEP)",
      "Stock options or equity participation",
      "Flexible hybrid work arrangements",
      "Annual training and conference attendance budget",
      "Relocation assistance for qualified candidates",
      "25 days paid vacation plus public holidays"
    ],
    posted: "2024-10-08"
  },
  {
    id: "project-engineer-renewable",
    title: "Project Engineer - Renewable Energy & Solar Appliances",
    department: "Engineering",
    location: "Beijing, China / Field-based",
    type: "Full-time",
    experience: "4+ years",
    description: "Support the successful execution of renewable energy projects with focus on solar-powered systems and appliances. This role requires hands-on expertise in solar product deployment, system integration, and field engineering for residential, commercial, and off-grid applications.",
    responsibilities: [
      "Provide technical support for solar PV installations, solar water pumps, and solar-powered appliances",
      "Design and engineer solar home systems, street lighting, and off-grid power solutions",
      "Conduct site assessments and feasibility studies for renewable energy projects",
      "Develop electrical schematics, single-line diagrams, and system layouts",
      "Oversee installation, commissioning, and testing of solar-powered equipment",
      "Troubleshoot and resolve technical issues during project implementation",
      "Ensure compliance with local electrical codes, safety standards, and grid interconnection requirements",
      "Coordinate with contractors, suppliers, and installation teams",
      "Perform system performance monitoring and optimization",
      "Prepare technical reports, project documentation, and as-built drawings",
      "Provide training to installation teams and end-users on solar appliance operation and maintenance",
      "Support procurement activities including equipment specifications and vendor evaluation"
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering, Renewable Energy Engineering, or related field",
      "4+ years of hands-on experience in renewable energy projects, specifically solar PV systems",
      "Deep understanding of solar-powered appliances including water pumps, refrigeration, lighting, and home systems",
      "Proficiency in solar system design software (PVsyst, Helioscope, AutoCAD Electrical)",
      "Strong knowledge of photovoltaic technology, inverters, charge controllers, and battery storage",
      "Experience with off-grid and hybrid solar systems for rural and remote applications",
      "Familiarity with solar installation best practices and mounting systems",
      "Understanding of electrical safety standards (NEC, IEC 60364) and solar-specific codes",
      "Excellent troubleshooting and diagnostic skills for electrical and mechanical systems",
      "Ability to read and interpret electrical drawings and technical specifications",
      "Strong communication skills for interfacing with clients, contractors, and stakeholders",
      "Willingness to travel to project sites (up to 40-50%)",
      "Valid driver's license; professional engineering license (PE) is a plus"
    ],
    benefits: [
      "Competitive salary package with project completion bonuses",
      "Comprehensive health and life insurance",
      "Company vehicle or travel allowance for field work",
      "Professional certification support (NABCEP PV Installation Professional, PE license)",
      "Career advancement opportunities in project management",
      "Performance-based annual bonuses",
      "Field equipment and safety gear provided",
      "Continuous technical training on new solar technologies",
      "20 days paid vacation plus public holidays"
    ],
    posted: "2024-10-08"
  },
  {
    id: "marketing-manager-renewable-energy",
    title: "Marketing Manager - Renewable Energy & Clean Technology",
    department: "Marketing & Communications",
    location: "Shanghai, China / Hybrid",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead our marketing initiatives across renewable energy products and clean technology solutions. This role requires a unique blend of technical understanding and marketing expertise to effectively communicate complex energy solutions to diverse audiences. Bilingual fluency in French and English is essential for managing our international markets and francophone African regions.",
    responsibilities: [
      "Develop and execute comprehensive marketing strategies for solar PV systems, battery storage, EV charging infrastructure, and electric mobility products",
      "Create go-to-market plans for new product launches in renewable energy sector",
      "Manage multi-channel marketing campaigns (digital, social media, email, events, trade shows)",
      "Develop technical marketing content including white papers, case studies, product brochures, and webinars",
      "Translate complex technical concepts into compelling marketing messages for B2B and B2C audiences",
      "Manage brand positioning and messaging across international markets, particularly francophone Africa",
      "Collaborate with engineering and product teams to understand technical specifications and value propositions",
      "Conduct market research and competitive analysis in the renewable energy sector",
      "Establish and monitor KPIs for marketing campaigns (ROI, lead generation, conversion rates, brand awareness)",
      "Manage marketing budget allocation and vendor relationships",
      "Oversee content creation for website, social media platforms, and industry publications",
      "Coordinate with sales teams to develop lead generation and nurturing programs",
      "Plan and execute participation in international renewable energy trade shows and conferences",
      "Build strategic partnerships with industry associations, NGOs, and government agencies",
      "Monitor industry trends, policy changes, and emerging technologies in clean energy sector"
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, Communications, or related field; MBA is a plus",
      "5+ years of progressive marketing experience, preferably in renewable energy, clean tech, or B2B technology sector",
      "BILINGUAL FLUENCY in French and English (written and spoken) is MANDATORY",
      "Strong understanding of renewable energy technologies: solar PV, battery storage (BESS), EV charging, inverters, and energy management systems",
      "Ability to comprehend and communicate technical concepts including kWh, kW, efficiency ratings, grid integration, and energy storage",
      "Familiarity with energy industry terminology and sustainable development goals (SDGs)",
      "Proven track record of developing and executing successful marketing campaigns with measurable results",
      "Expertise in digital marketing tools: Google Analytics, SEO/SEM, CRM platforms (HubSpot, Salesforce), marketing automation",
      "Strong content creation and copywriting skills for technical audiences",
      "Experience with B2B marketing strategies including account-based marketing (ABM)",
      "Excellent project management skills with ability to manage multiple campaigns simultaneously",
      "Data-driven mindset with strong analytical skills for campaign performance optimization",
      "Experience in emerging markets, particularly African markets, is highly preferred",
      "Proficiency in design tools (Canva, Adobe Creative Suite) is a plus",
      "Strong presentation and stakeholder management skills",
      "Self-motivated, creative, and results-oriented with entrepreneurial spirit"
    ],
    benefits: [
      "Competitive salary package with performance-based bonuses (up to 20% of base salary)",
      "Comprehensive health, dental, and vision insurance for employee and family",
      "Professional development budget for marketing certifications (Google Ads, HubSpot, Hootsuite)",
      "International travel opportunities for trade shows and market visits",
      "Flexible hybrid work arrangement (3 days office / 2 days remote)",
      "Stock options or company equity participation",
      "Annual marketing conference attendance (e.g., RE+ Expo, Intersolar, Africa Energy Forum)",
      "Language training support for additional languages (Mandarin, Spanish, Arabic)",
      "Career advancement path to Director of Marketing or CMO",
      "Collaborative and innovative work environment",
      "Access to latest marketing tools and technologies",
      "25 days paid vacation plus public holidays",
      "Relocation assistance for qualified international candidates"
    ],
    posted: "2024-10-08"
  }
];
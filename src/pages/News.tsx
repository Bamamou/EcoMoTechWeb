import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getPageSEO } from "@/lib/seo";

export const newsItems = [
  {
    id: 12,
    title: "Essential Components and Best Practices for Commercial PV Systems Integrated with Battery Energy Storage and Grid Connection",
    excerpt: "Comprehensive guide to designing commercial photovoltaic installations with battery energy storage systems, covering key components, integration techniques, and grid-connection requirements.",
    content: "Commercial photovoltaic (PV) installations combined with Battery Energy Storage Systems (BESS) are increasingly deployed to enhance energy reliability, support peak shaving, and enable participation in demand response programs. This comprehensive guide covers the essential components, integration techniques, grid-connection requirements, and applicable standards for successful implementation.",
    date: "September 16, 2025",
    author: "EcoMoTech Technical Team",
    category: "Technical Guide",
    image: "/EcoMoTechWeb/images/News/components.png",
    link: "/news/commercial-pv-bess-systems"
  },
  {
    id: 1,
    title: "Ecomotech Launches New High-Efficiency Solar Panel Series",
    excerpt: "Our latest solar panel technology achieves record-breaking efficiency rates, making solar energy more accessible and affordable than ever before.",
    content: "Ecomotech is proud to announce the launch of our latest innovation in solar technology...",
    date: "April 15, 2024",
    author: "David Chen",
    category: "Product News",
    image: "/EcoMoTechWeb/images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg",
    link: "/news/new-solar-panel-series"
  },
  {
    id: 2,
    title: "Expanding Our Reach: New Distribution Center Opens",
    excerpt: "Ecomotech expands operations with a new distribution center to better serve customers across the region with faster delivery times and improved logistics.",
    content: "Ecomotech has officially opened our new 50,000 square foot distribution center in the heart of the Midwest, marking a significant expansion of our operational capabilities. This state-of-the-art facility will serve as a central hub for our growing network of installers and partners across the central United States, allowing for faster deliveries and more responsive service.\n\nThe new distribution center features advanced inventory management systems, dedicated quality control areas, and expanded warehouse space that will increase our stocking capacity by over 200%. This strategic investment will reduce average delivery times by up to 60% for customers in the region.\n\n'This expansion represents our commitment to providing the best possible service to our growing customer base,' said Michael Johnson, Chief Operations Officer at Ecomotech. 'By strengthening our distribution network, we're ensuring that high-quality solar solutions are readily available to meet the increasing demand for renewable energy.'",
    date: "March 22, 2023",
    author: "Michael Johnson",
    category: "Company News",
    image: "/EcoMoTechWeb/images/News/warehouse.jpg",
    link: "/news/distribution-center"
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions for Remote Communities",
    excerpt: "Our team has successfully implemented off-grid solar solutions for remote villages, bringing reliable electricity to communities for the first time.",
    content: "Ecomotech is proud to announce the successful completion of a landmark project bringing sustainable energy to five remote villages in developing regions. This initiative, part of our 'Power for All' program, has provided reliable electricity to over 2,000 people who previously had limited or no access to power.\n\nThe project utilized our off-grid solar and battery storage systems, specially designed to withstand challenging environmental conditions while requiring minimal maintenance. Each village installation includes a centralized solar array, battery storage system, and a local micro-grid that distributes power to homes, community centers, and small businesses.\n\n'The impact of reliable electricity on these communities has been transformative,' noted project lead Emma Nelson. 'From extended hours for education and healthcare services to new small business opportunities, we're seeing how sustainable energy creates a foundation for community development.'\n\nThis initiative represents Ecomotech's ongoing commitment to ensuring that renewable energy benefits all communities, regardless of their location or economic status. Plans are already underway to expand the program to an additional twelve villages in the coming year.",
    date: "February 15, 2023",
    author: "Emma Nelson",
    category: "Projects",
    image: "/EcoMoTechWeb/images/News/Sustainable Energy Solutions for Remote Communities.jpg",
    link: "/news/remote-communities"
  },
  {
    id: 4,
    title: "Powering Africa Together Through Corporate–Local Collaboration",
    excerpt: "Africa stands at a pivotal moment of its renewable energy journey, knowing how big corporations and local renewable energy firms can team up to unlock renewable energy success is crucial.",
    content: "Ecomotech has entered into a strategic research partnership with the renowned Green Energy Institute at State University to accelerate the development of next-generation energy storage solutions. This collaboration brings together Ecomotech's industry expertise with the cutting-edge research capabilities of one of the world's leading renewable energy research institutions.\n\nThe three-year partnership will focus on developing advanced battery technology specifically designed for solar energy storage applications. Research will target significant improvements in storage capacity, charge/discharge efficiency, and overall lifespan – addressing key challenges in current renewable energy systems.\n\n'Effective energy storage is the missing piece in making renewable energy truly competitive with traditional power sources,' said Dr. James Williams, Director of Research at Ecomotech. 'This partnership combines the theoretical innovation of academia with our practical experience implementing real-world solar solutions.'\n\nThe research initiative has received partial funding through a government renewable energy innovation grant, with both Ecomotech and State University making significant resource commitments. The partners aim to have commercially viable prototypes ready for testing within 18 months.",
    date: "January 28, 2023",
    author: "Dr. James Williams",
    category: "Research & Development",
    image: "/EcoMoTechWeb/images/News/Partnership.png",
    link: "/news/research-partnership"
  },
  {
    id: 5,
    title: "The Role of Resource Assessment in Renewable Energy Project Development",
    excerpt: "Discover how accurate resource assessment is essential for successful renewable energy projects in Guinea and across West Africa.",
    content: "Renewable energy project development begins with a fundamental step: resource assessment. Without accurate knowledge of the resource potential, investments risk being misallocated, projects underperform, and energy access goals remain unmet. For solar projects in Guinea—a country endowed with vast solar potential but facing pressing energy access challenges—resource assessment is not just a technical exercise, but a cornerstone of sustainable development.\n\nResource assessment determines whether a site can reliably generate the expected amount of energy over the project's lifetime. It ensures project bankability, helps attract financing, and minimizes risks for developers, governments, and communities. For solar projects, precise assessment of solar irradiance is vital to estimate annual energy production, optimize system design, and ensure long-term financial viability.\n\nGuinea lies within the high solar irradiation belt of West Africa, with average GHI values between 4.5–5.5 kWh/m²/day—ideal for photovoltaic projects. However, the country's alternating rainy and dry seasons introduce significant fluctuations in solar availability, making accurate resource assessment crucial for project success.\n\nCase studies from Guinea's solar initiatives, including the Kaloum Solar Project in Conakry and the Boke Mini-Grid Pilot, have demonstrated that projects with rigorous, long-term solar resource assessments secured stronger financing and achieved better-than-expected performance, while those relying solely on satellite data without validation faced operational underperformance.",
    date: "September 2, 2025",
    author: "EcoMoTech Technical Team",
    category: "Technical Analysis",
    image: "/EcoMoTechWeb/images/News/Resource Assessment in Renewable Energy Project.png",
    link: "/news/resource-assessment"
  },
  {
    id: 6,
    title: "Ecomotech Solar Street Lighting Transforms Urban Safety",
    excerpt: "New case study shows 60% reduction in nighttime incidents following installation of solar-powered street lights in urban neighborhoods.",
    content: "A newly released case study has documented significant safety improvements in urban areas following the installation of Ecomotech's solar street lighting systems. The study, conducted over 18 months in collaboration with municipal authorities, found a remarkable 60% reduction in nighttime safety incidents in previously underlit neighborhoods.\n\nThe project installed over 500 of our StreetBright solar-powered LED lighting systems across five urban districts. These self-contained units operate independently from the electrical grid, featuring motion-sensing capabilities that increase brightness when pedestrians or vehicles approach.\n\n'Beyond the obvious environmental benefits, this project demonstrates how sustainable technology can directly improve quality of life and community safety,' noted Robert Kim, Urban Solutions Manager at Ecomotech. 'The reliability of these systems, even during grid outages, adds an additional layer of resilience to urban infrastructure.'\n\nThe case study also highlighted significant municipal cost savings. With no trenching required for electrical connections and zero ongoing electricity costs, the solar street lighting solution proved to be 40% more economical over a 10-year period compared to conventional lighting systems.\n\nBased on these results, three additional cities have initiated similar programs using Ecomotech's solar street lighting technology, with installations scheduled to begin next quarter.",
    date: "November 5, 2022",
    author: "Robert Kim",
    category: "Case Studies",
    image: "/EcoMoTechWeb/images/News/Ecomotech Solar Street Lighting Transforms Urban Safety.jpg",
    link: "/news/street-lighting"
  },
  {
    id: 7,
    title: "Revolutionizing Transportation: Electric Mobility Takes Root in Africa",
    excerpt: "Ecomotech's electric motorcycle and tricycle initiatives are transforming urban mobility across major African cities, reducing emissions and creating sustainable transportation solutions.",
    content: "Ecomotech's pioneering electric mobility program has reached a significant milestone in its African expansion, with over 1,000 electric motorcycles and tricycles now operating across five major cities. This initiative is reshaping urban transportation while addressing environmental concerns and economic opportunities for local communities.\n\nThe program has created over 500 direct jobs and reduced carbon emissions by an estimated 1,200 tons annually. Our vehicles are specifically designed to handle local conditions and are supported by our growing network of charging stations and service centers.",
    date: "October 15, 2022",
    author: "Marcus Adebayo",
    category: "Electric Mobility",
    image: "/EcoMoTechWeb/images/Electric motorcycles/KingChe red front.jpg",
    link: "/news/electric-mobility-africa"
  },
  {
    id: 8,
    title: "Expanding EV Charging Infrastructure Across African Cities",
    excerpt: "Ecomotech announces comprehensive plan to install 200 solar-powered EV charging stations across major African urban centers, supporting the growing electric vehicle ecosystem.",
    content: "In a landmark move for sustainable transportation in Africa, Ecomotech has unveiled plans to install 200 solar-powered EV charging stations across major urban centers. This initiative represents the largest electric vehicle charging infrastructure project in the region to date.\n\nThe charging stations will be powered by our high-efficiency solar panels and equipped with energy storage systems, ensuring reliable charging capability even during grid outages. The first phase of installations will focus on major metropolitan areas, with expansion plans for secondary cities and intercity corridors.",
    date: "September 28, 2022",
    author: "Sarah Okonjo",
    category: "Infrastructure",
    image: "/EcoMoTechWeb/images/News/Charging station.jpg",
    link: "/news/ev-charging-africa"
  },
  {
    id: 10,
    title: "Introduction to Renewable Energy Feasibility Assessments",
    excerpt: "Nearly half of renewable energy projects worldwide fail to move beyond the planning stage due to poor feasibility assessments. Learn how structured evaluation is essential before committing resources to any project.",
    content: "Did you know that nearly half of renewable energy projects worldwide fail to move beyond the planning stage—not because of technology limitations, but because of poor feasibility assessments? This reality highlights why a structured evaluation is essential before committing time, money, and resources to any project...",
    date: "August 27, 2025",
    author: "EcoMoTech Research Team",
    category: "Research & Development",
    image: "/EcoMoTechWeb/images/News/Renewable Energy Feasibility Assessment.jpg",
    link: "/news/renewable-energy-feasibility-assessments"
  },
  {
    id: 9,
    title: "The Growth of EV Charging Infrastructure in Africa",
    excerpt: "Exploring the development and future of electric vehicle charging infrastructure across Africa, supporting sustainable transportation solutions for the continent.",
    content: "The electric vehicle charging infrastructure in Africa is experiencing unprecedented growth, marking a significant shift towards sustainable transportation across the continent. This development represents a crucial step in addressing both environmental concerns and the growing demand for clean mobility solutions.\n\nRecent investments in charging infrastructure have focused on major urban centers, with plans for expansion into rural areas. The integration of solar-powered charging stations has been particularly successful, providing reliable charging capabilities even in areas with unstable grid connections.\n\nThis infrastructure development is creating new opportunities for local businesses, job creation, and technological advancement across the African continent.",
    date: "June 20, 2025",
    author: "EcoMoTech Infrastructure Team",
    category: "Infrastructure",
    image: "/EcoMoTechWeb/images/News/Charging station in Africa.png",
    link: "/news/ev-charging-infrastructure-africa"
  },
  {
    id: 10,
    title: "Énergie Solaire pour les Centres de Santé Communautaires : Une Révolution pour la Santé Rurale",
    excerpt: "Découvrez comment l'énergie solaire révolutionne les soins de santé ruraux en Afrique subsaharienne, transformant l'accès aux services médicaux pour des millions de personnes.",
    content: "Dans de nombreuses régions rurales d'Afrique subsaharienne, l'accès à une électricité fiable demeure un défi majeur, particulièrement pour les infrastructures essentielles telles que les centres de santé. Environ 25 000 établissements de santé n'ont aucun accès à l'électricité, tandis que près de 70 000 autres ne bénéficient que d'un accès partiel ou intermittent.\n\nL'adoption de solutions d'énergie solaire pour les centres de santé communautaires représente une véritable révolution, permettant des consultations 24h/24, la conservation des vaccins, l'amélioration des procédures médicales et la préparation aux urgences. Cette technologie transforme non seulement la qualité des soins mais génère également des avantages socio-économiques et environnementaux durables.\n\nLes projets réussis à Madagascar, en RD Congo, en Zambie, au Ghana, au Bénin et au Sénégal démontrent une réduction de plus de 60% de la dépendance aux combustibles fossiles et une amélioration significative des résultats pour les patients.",
    date: "10 septembre 2025",
    author: "Équipe technique EcoMoTech",
    category: "Santé & Énergie Solaire",
    image: "/EcoMoTechWeb/images/News/energie solaire.png",
    link: "/news/solar-healthcare-lighting"
  },
  {
    id: 11,
    title: "Location de Systèmes de Stockage d'Énergie Tout-en-Un (BESS) : Un Modèle Innovant au Service de la Transition Énergétique",
    excerpt: "Découvrez comment la location de systèmes BESS révolutionne l'accès au stockage d'énergie, offrant flexibilité, efficacité économique et durabilité pour tous types d'organisations.",
    content: "Un Battery Energy Storage System (BESS) tout-en-un est une solution intégrée combinant batteries, onduleurs, systèmes de gestion (BMS/EMS) et dispositifs de sécurité dans un seul module prêt à l'emploi. La location de ces systèmes consiste à mettre à disposition, pour une durée déterminée, un équipement complet permettant de stocker et restituer l'énergie sans que l'utilisateur ait à supporter les coûts d'acquisition ni la gestion technique lourde.\n\nLes principaux avantages incluent l'efficacité économique sans investissement initial élevé, la flexibilité et évolutivité selon la demande, la réduction des risques avec maintenance incluse, l'optimisation des flux de trésorerie en OPEX plutôt qu'en CAPEX, et l'accès à la dernière technologie. Les applications couvrent l'intégration des énergies renouvelables, la stabilisation du réseau, la gestion des pointes, l'alimentation de secours et les événements temporaires.\n\nLes analystes prévoient une croissance annuelle de plus de 20% du marché des BESS en location d'ici 2030, portée par la décarbonation des systèmes électriques et l'essor des énergies intermittentes.",
    date: "14 septembre 2025",
    author: "Équipe technique EcoMoTech",
    category: "Stockage d'Énergie BESS",
    image: "/EcoMoTechWeb/images/News/battery-15kw home.png",
    link: "/news/bess-rental-services"
  }
];

const News = () => {
  // SEO optimization
  const newsSEO = getPageSEO('news');
  useSEO(newsSEO);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const itemsPerPage = 4;

  // Filter news items based on search query and selected category
  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "All Categories" || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Reset to first page when search changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Company News</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Stay updated with the latest developments, innovations, and announcements from Ecomotech.
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Search News</h3>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pr-10"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {["All Categories", "Product News", "Company News", "Projects", "Research & Development", "Sustainability", "Case Studies", "Electric Mobility", "Infrastructure"].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left block px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-ecomotech-green text-white'
                            : 'hover:bg-white hover:text-ecomotech-green'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-ecomotech-green text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
                <p className="opacity-90 mb-4">
                  Stay informed with our latest news, product updates, and industry insights.
                </p>
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white text-gray-800"
                  />
                  <Button className="w-full bg-white hover:bg-gray-100 text-ecomotech-green">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No results found for "{searchQuery}"</p>
                </div>
              ) : (
                <>
                  <div className="space-y-8">
                    {currentItems.map((item) => (
                      <article key={item.id} className="bg-ecomotech-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <div className="h-64 md:h-full overflow-hidden">
                              <ResponsiveImage
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                fallback="https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6 md:p-8">
                            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-3 gap-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{item.date}</span>
                              </div>
                              <div>
                                <span className="bg-ecomotech-green bg-opacity-10 text-ecomotech-dark-green px-3 py-1 rounded-full">
                                  {item.category}
                                </span>
                              </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 hover:text-ecomotech-green transition-colors">
                              <Link
                                to={item.link}
                                className="hover:text-ecomotech-blue transition-colors"
                              >
                                {item.title}
                              </Link>
                            </h2>
                            <p className="text-gray-600 mb-6">{item.excerpt}</p>
                            <Link
                              to={item.link}
                              className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                            >
                              <span>Read Full Story</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <Button
                          key={number}
                          variant={currentPage === number ? "default" : "outline"}
                          onClick={() => paginate(number)}
                          className="w-10"
                        >
                          {number}
                        </Button>
                      ))}

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;

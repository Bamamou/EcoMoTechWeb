
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";

const newsItems = [
  {
    id: 1,
    title: "Ecomotech Launches New High-Efficiency Solar Panel Series",
    excerpt: "Our latest solar panel technology achieves record-breaking efficiency rates, making solar energy more accessible and affordable than ever before.",
    content: "Ecomotech is proud to announce the launch of our latest innovation in solar technology: the EcoMax Pro series. These panels achieve a remarkable 23% efficiency rate, setting a new standard in the industry. The EcoMax Pro series features our proprietary cell structure that maximizes sunlight capture even in low-light conditions, ensuring optimal performance year-round.\n\nThis breakthrough is the result of three years of intensive R&D by our engineering team, combining cutting-edge materials science with advanced manufacturing techniques. The new panels are not only more efficient but also more durable, with an expected lifespan exceeding 30 years under normal operating conditions.\n\n'We believe the EcoMax Pro series represents a significant step forward in making solar energy more accessible and cost-effective,' said Sarah Rodriguez, Chief Technology Officer at Ecomotech. 'By increasing efficiency while maintaining competitive pricing, we're helping customers achieve faster returns on their renewable energy investments.'",
    date: "April 10, 2023",
    author: "David Chen",
    category: "Product News",
    image: "https://images.unsplash.com/photo-1497440001736-76dde04f31b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/1"
  },
  {
    id: 2,
    title: "Expanding Our Reach: New Distribution Center Opens",
    excerpt: "Ecomotech expands operations with a new distribution center to better serve customers across the region with faster delivery times and improved logistics.",
    content: "Ecomotech has officially opened our new 50,000 square foot distribution center in the heart of the Midwest, marking a significant expansion of our operational capabilities. This state-of-the-art facility will serve as a central hub for our growing network of installers and partners across the central United States, allowing for faster deliveries and more responsive service.\n\nThe new distribution center features advanced inventory management systems, dedicated quality control areas, and expanded warehouse space that will increase our stocking capacity by over 200%. This strategic investment will reduce average delivery times by up to 60% for customers in the region.\n\n'This expansion represents our commitment to providing the best possible service to our growing customer base,' said Michael Johnson, Chief Operations Officer at Ecomotech. 'By strengthening our distribution network, we're ensuring that high-quality solar solutions are readily available to meet the increasing demand for renewable energy.'",
    date: "March 22, 2023",
    author: "Michael Johnson",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/2"
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions for Remote Communities",
    excerpt: "Our team has successfully implemented off-grid solar solutions for remote villages, bringing reliable electricity to communities for the first time.",
    content: "Ecomotech is proud to announce the successful completion of a landmark project bringing sustainable energy to five remote villages in developing regions. This initiative, part of our 'Power for All' program, has provided reliable electricity to over 2,000 people who previously had limited or no access to power.\n\nThe project utilized our off-grid solar and battery storage systems, specially designed to withstand challenging environmental conditions while requiring minimal maintenance. Each village installation includes a centralized solar array, battery storage system, and a local micro-grid that distributes power to homes, community centers, and small businesses.\n\n'The impact of reliable electricity on these communities has been transformative,' noted project lead Emma Nelson. 'From extended hours for education and healthcare services to new small business opportunities, we're seeing how sustainable energy creates a foundation for community development.'\n\nThis initiative represents Ecomotech's ongoing commitment to ensuring that renewable energy benefits all communities, regardless of their location or economic status. Plans are already underway to expand the program to an additional twelve villages in the coming year.",
    date: "February 15, 2023",
    author: "Emma Nelson",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1534949522533-7c851c1bc891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/3"
  },
  {
    id: 4,
    title: "Ecomotech Partners with Leading Research University",
    excerpt: "New research partnership aims to develop next-generation solar storage technology with higher capacity and longer lifespan.",
    content: "Ecomotech has entered into a strategic research partnership with the renowned Green Energy Institute at State University to accelerate the development of next-generation energy storage solutions. This collaboration brings together Ecomotech's industry expertise with the cutting-edge research capabilities of one of the world's leading renewable energy research institutions.\n\nThe three-year partnership will focus on developing advanced battery technology specifically designed for solar energy storage applications. Research will target significant improvements in storage capacity, charge/discharge efficiency, and overall lifespan – addressing key challenges in current renewable energy systems.\n\n'Effective energy storage is the missing piece in making renewable energy truly competitive with traditional power sources,' said Dr. James Williams, Director of Research at Ecomotech. 'This partnership combines the theoretical innovation of academia with our practical experience implementing real-world solar solutions.'\n\nThe research initiative has received partial funding through a government renewable energy innovation grant, with both Ecomotech and State University making significant resource commitments. The partners aim to have commercially viable prototypes ready for testing within 18 months.",
    date: "January 28, 2023",
    author: "Dr. James Williams",
    category: "Research & Development",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/4"
  },
  {
    id: 5,
    title: "Annual Sustainability Report Shows Record Carbon Offset",
    excerpt: "Ecomotech's installed systems prevented over 500,000 metric tons of CO2 emissions last year, equivalent to planting 25 million trees.",
    content: "Ecomotech has released its annual sustainability report, revealing that our solar installations collectively prevented more than 500,000 metric tons of carbon dioxide emissions in the past year. This milestone represents a 35% increase from the previous year and is equivalent to the carbon sequestration capability of approximately 25 million mature trees.\n\n'These numbers aren't just statistics – they represent real environmental impact,' said Elena Gomez, Sustainability Director at Ecomotech. 'Each solar panel we install contributes to the vital work of reducing our global carbon footprint.'\n\nThe report also highlights Ecomotech's internal sustainability initiatives, including our transition to 100% renewable energy across all manufacturing facilities, a 40% reduction in water usage through improved processes, and significant decreases in packaging waste through our redesigned packaging program.\n\nThe company has set ambitious targets for the coming year, aiming to increase total carbon offset by an additional 40% while further reducing the environmental impact of our manufacturing and distribution operations.\n\n'As a renewable energy company, we believe we must lead by example in all aspects of sustainability,' added Gomez. 'Our commitment extends beyond the products we create to encompass every aspect of how we operate as a business.'",
    date: "December 10, 2022",
    author: "Elena Gomez",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1141&q=80",
    link: "/news/5"
  },
  {
    id: 6,
    title: "Ecomotech Solar Street Lighting Transforms Urban Safety",
    excerpt: "New case study shows 60% reduction in nighttime incidents following installation of solar-powered street lights in urban neighborhoods.",
    content: "A newly released case study has documented significant safety improvements in urban areas following the installation of Ecomotech's solar street lighting systems. The study, conducted over 18 months in collaboration with municipal authorities, found a remarkable 60% reduction in nighttime safety incidents in previously underlit neighborhoods.\n\nThe project installed over 500 of our StreetBright solar-powered LED lighting systems across five urban districts. These self-contained units operate independently from the electrical grid, featuring motion-sensing capabilities that increase brightness when pedestrians or vehicles approach.\n\n'Beyond the obvious environmental benefits, this project demonstrates how sustainable technology can directly improve quality of life and community safety,' noted Robert Kim, Urban Solutions Manager at Ecomotech. 'The reliability of these systems, even during grid outages, adds an additional layer of resilience to urban infrastructure.'\n\nThe case study also highlighted significant municipal cost savings. With no trenching required for electrical connections and zero ongoing electricity costs, the solar street lighting solution proved to be 40% more economical over a 10-year period compared to conventional lighting systems.\n\nBased on these results, three additional cities have initiated similar programs using Ecomotech's solar street lighting technology, with installations scheduled to begin next quarter.",
    date: "November 5, 2022",
    author: "Robert Kim",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef44f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    link: "/news/6"
  }
];

const categories = [
  "All Categories",
  "Product News",
  "Company News",
  "Projects",
  "Research & Development",
  "Sustainability",
  "Case Studies"
];

const NewsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Company News</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Stay updated with the latest developments, innovations, and announcements from Ecomotech.
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {newsItems.map((item) => (
                  <article key={item.id} className="bg-ecomotech-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-64 md:h-full overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                          <Link to={item.link}>{item.title}</Link>
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
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-ecomotech-light-gray"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative inline-flex items-center px-4 py-2 border border-ecomotech-green bg-ecomotech-green bg-opacity-10 text-sm font-medium text-ecomotech-green"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-ecomotech-light-gray"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-ecomotech-light-gray"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>

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
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-ecomotech-light-gray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block px-3 py-2 rounded-md transition-colors ${
                          index === 0 ? 
                          'bg-ecomotech-green text-white' : 
                          'hover:bg-white hover:text-ecomotech-green'
                        }`}
                      >
                        {category}
                      </a>
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;

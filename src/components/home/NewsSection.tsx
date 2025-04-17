
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Ecomotech Launches New High-Efficiency Solar Panel Series",
    excerpt: "Our latest solar panel technology achieves record-breaking efficiency rates, making solar energy more accessible and affordable.",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1497440001736-76dde04f31b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/1"
  },
  {
    id: 2,
    title: "Expanding Our Reach: New Distribution Center Opens",
    excerpt: "Ecomotech expands operations with a new distribution center to better serve customers across the region with faster delivery times.",
    date: "March 22, 2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/2"
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions for Remote Communities",
    excerpt: "Our team has successfully implemented off-grid solar solutions for remote villages, bringing reliable electricity to communities for the first time.",
    date: "February 15, 2023",
    image: "https://images.unsplash.com/photo-1534949522533-7c851c1bc891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/news/3"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
          >
            <span>View All News</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-ecomotech-light-gray rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-ecomotech-green transition-colors">
                  <Link to={item.link}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

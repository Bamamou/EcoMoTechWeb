import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ElectricMobilitySection from "@/components/home/ElectricMobilitySection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { getImagePath } from "@/utils/imagePaths";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { useSEO } from "@/hooks/useSEO";
import { pageSEO, organizationSchema } from "@/lib/seo";

const latestNews = [
  {
    title: "Ecomotech Launches New High-Efficiency Solar Panel Series",
    date: "April 15, 2024",
    category: "Product News",
    excerpt: "Our latest solar panel technology achieves record-breaking efficiency rates...",
    link: "/news/new-solar-panel-series",
    image: getImagePath("images/News/Ecomotech Launches New High-Efficiency Solar Panel Series.jpg"),
  },
  {
    title: "Expanding Our Reach: New Distribution Center Opens",
    date: "March 22, 2023",
    category: "Company News",
    excerpt: "Ecomotech expands operations with a new distribution center...",
    link: "/news/distribution-center",
    image: getImagePath("images/News/warehouse.jpg"),
  },
  {
    title: "Sustainable Energy Solutions for Remote Communities",
    date: "February 15, 2023",
    category: "Projects",
    excerpt: "Bringing reliable electricity to communities for the first time...",
    link: "/news/remote-communities",
    image: getImagePath("images/News/Sustainable Energy Solutions for Remote Communities.jpg")
  }
];

const Index = () => {
  // SEO Optimization for homepage
  useSEO({
    ...pageSEO.home,
    ogImage: getImagePath("images/og-home.jpg"),
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        {
          "@type": "WebSite",
          "@id": "https://ecomotech.online/#website",
          "url": "https://ecomotech.online",
          "name": "EcoMoTech",
          "description": "Leading provider of renewable energy and electric mobility solutions",
          "publisher": {
            "@id": "https://ecomotech.online/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://ecomotech.online/products?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://ecomotech.online/#webpage",
          "url": "https://ecomotech.online",
          "name": "EcoMoTech - Renewable Energy & Electric Mobility Solutions",
          "isPartOf": {
            "@id": "https://ecomotech.online/#website"
          },
          "about": {
            "@id": "https://ecomotech.online/#organization"
          },
          "description": "Discover cutting-edge renewable energy solutions including solar panels, electric vehicles, EV chargers, and energy storage systems.",
          "breadcrumb": {
            "@id": "https://ecomotech.online/#breadcrumb"
          }
        }
      ]
    }
  });
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ElectricMobilitySection />
      <StatsSection />
      <TestimonialsSection />
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600">Stay updated with our latest developments and innovations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Link 
                key={index} 
                to={news.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <ResponsiveImage
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-ecomotech-blue text-white text-sm px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-ecomotech-blue transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <span className="text-ecomotech-blue font-medium inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/news"
              className="inline-flex items-center text-ecomotech-blue hover:text-ecomotech-dark-blue font-medium"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

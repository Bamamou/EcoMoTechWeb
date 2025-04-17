
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ElectricMobilitySection from "@/components/home/ElectricMobilitySection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsSection from "@/components/home/NewsSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ElectricMobilitySection />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;

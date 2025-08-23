import React from "react";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import styles from '@/styles/AboutUs.module.css';
import { ResponsiveImage, img } from "@/components/ui/responsive-image";
import { useSEO } from "@/hooks/useSEO";
import { getPageSEO } from "@/lib/seo";

const AboutPage = () => {
  // SEO optimization
  const aboutSEO = getPageSEO('about');
  useSEO(aboutSEO);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Ecomotech</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              We're on a mission to accelerate the transition to sustainable energy through innovative solar solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700 mb-6">
                Founded in 2010, Ecomotech began with a simple vision: to make renewable energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading provider of solar energy solutions across multiple countries.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've developed cutting-edge solar technologies that maximize energy production while minimizing environmental impact. Our commitment to innovation, quality, and customer satisfaction has established us as a trusted partner in the renewable energy industry.
              </p>
              <p className="text-gray-700">
                Today, Ecomotech continues to push the boundaries of what's possible in solar energy, driven by our belief that clean, sustainable power is the foundation of a better future for our planet.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-ecomotech-green rounded-lg opacity-10 transform rotate-3"></div>
              <ResponsiveImage 
                src="/EcoMoTechWeb/images/AboutUs/BJTU.jpg" 
                alt="Ecomotech team" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700">
                To accelerate the global transition to sustainable energy by providing innovative, reliable, and cost-effective solar power solutions that reduce environmental impact and enhance energy independence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-ecomotech-blue mb-6"></div>
              <p className="text-gray-700">
                A world powered by clean, renewable energy, where sustainable resources are accessible to all, and where our technological innovations contribute to a healthier planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              The principles that guide everything we do at Ecomotech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously push the boundaries of solar technology, seeking new ways to improve efficiency, performance, and sustainability.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Quality
              </h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring that every solution we provide meets the highest standards of reliability and durability.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct our business with unwavering honesty, transparency, and ethical standards, building trust with our customers, partners, and communities.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to minimizing environmental impact across all our operations, from product development to packaging and distribution.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Customer Focus
              </h3>
              <p className="text-gray-600">
                We prioritize our customers' needs, providing personalized solutions, exceptional service, and lasting support throughout their renewable energy journey.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-ecomotech-green text-white rounded-full mr-3">
                  <Check size={16} />
                </span>
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe in the power of partnership and teamwork, working closely with stakeholders to deliver integrated solutions that drive the renewable energy transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-ecomotech-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Meet the experts leading Ecomotech's mission to revolutionize renewable energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <ResponsiveImage 
                    src="/EcoMoTechWeb/images/AboutUs/ID photo.jpg" 
                    alt="Nicolas Bamamou - CEO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Nicolas Bamamou</h3>
                <p className={styles.memberRole}>Chief Executive Officer</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  With over 10 years of experience in renewable energy, Nicolas leads Ecomotech's strategic vision and global operations.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <ResponsiveImage 
                    src="/EcoMoTechWeb/images/AboutUs/Kagoma.jpg"  
                    alt="Kagoma Jaros - CTO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Kagoma Jaros</h3>
                <p className={styles.memberRole}>Chief Technology Officer</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  Kagoma from Tanzania drives Ecomotech's technology development, focusing on innovation and enhancing our product performance.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className={styles.teamMember}>
              <div className={styles.teamImageWrapper}>
                <div className={styles.imageContainer}>
                  <ResponsiveImage 
                    src="/EcoMoTechWeb/images/AboutUs/Njie.jpg" 
                    alt="Sulayman Njie - COO" 
                    className={styles.memberImage}
                  />
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>Sulayman Njie</h3>
                <p className={styles.memberRole}>Chief Operations Officer</p>
                <div className={styles.divider}></div>
                <p className={styles.memberBio}>
                  Njie also known as Brainysoul oversees Ecomotech's operations, ensuring efficient production and delivery of our solar solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

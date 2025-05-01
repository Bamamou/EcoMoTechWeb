import React from "react";
import Layout from "@/components/layout/Layout";
import styles from '@/styles/SolarPumbs.module.css';

const SolarPumbs = () => {
  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Solar Water Pumps</h1>
          <p className={styles.heroDescription}>
            Efficient solar-powered pumping solutions for agriculture, irrigation, and water supply systems.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coming Soon Message */}
            <div className="md:col-span-2 text-center p-12 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-ecomotech-blue mb-4">Coming Soon</h3>
              <p className="text-gray-600">
                Our advanced solar water pumping solutions are currently being finalized. 
                These systems will provide efficient, reliable, and sustainable water pumping 
                for agricultural, commercial, and residential applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolarPumbs;
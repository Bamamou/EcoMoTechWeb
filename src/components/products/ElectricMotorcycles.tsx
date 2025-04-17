import React from "react";
import { electricMotorcycleProducts } from "@/utils/productData";
import ProductCard from "./ProductCard";
import Layout from "@/components/layout/Layout";

const ElectricMotorcycles = () => {
  return (
    <Layout>
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Electric Motorcycles</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              High-performance electric motorcycles designed for sustainable urban mobility and exceptional riding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electricMotorcycleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricMotorcycles;
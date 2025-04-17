
import React from "react";

const stats = [
  {
    value: "500+",
    label: "Projects Completed"
  },
  {
    value: "20+",
    label: "Countries Served"
  },
  {
    value: "100MW+",
    label: "Installed Capacity"
  },
  {
    value: "1000+",
    label: "Happy Customers"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-ecomotech-green text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

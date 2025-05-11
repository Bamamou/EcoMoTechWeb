import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed"
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries Served"
  },
  {
    value: 100,
    suffix: "MW+",
    label: "Installed Capacity"
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Customers"
  }
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section
      ref={ref}
      className="py-10 bg-gradient-to-r bg-ecomotech-dark-green text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white text-green-700 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-3xl font-extrabold mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

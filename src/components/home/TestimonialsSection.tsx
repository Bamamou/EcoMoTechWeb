
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Switching to Ecomotech's solar panels has drastically reduced our energy bills and carbon footprint. The installation team was professional and efficient, and the system has been running flawlessly for over a year now.",
    author: "John Davis",
    position: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "As a business owner, I was looking for sustainable energy solutions that would also make financial sense. Ecomotech delivered on both fronts. Their commercial solar installation has exceeded our expectations in terms of performance and ROI.",
    author: "Sarah Johnson",
    position: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The energy storage system from Ecomotech has been a game-changer for our remote facility. We now have reliable power 24/7, regardless of grid conditions. The customer support has been exceptional throughout the entire process.",
    author: "Michael Chen",
    position: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from customers who have transformed their energy usage with our solar solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-30">
            <Quote size={60} className="text-ecomotech-green" />
          </div>

          {/* Testimonial */}
          <div className="bg-ecomotech-light-gray p-8 md:p-12 rounded-lg shadow-md relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <p className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-xl font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-ecomotech-gray hover:bg-ecomotech-green hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-ecomotech-green' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-ecomotech-gray hover:bg-ecomotech-green hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

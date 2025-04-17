
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497440001736-76dde04f31b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}>
        <div className="absolute inset-0 bg-ecomotech-dark-blue opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Energy Future?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact Ecomotech today to learn how our solar power solutions can help you reduce costs, minimize your environmental impact, and achieve energy independence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
              <Phone className="h-12 w-12 mb-4 text-ecomotech-green" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:18810799128" className="text-white hover:text-ecomotech-green transition-colors">
                18810799128
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
              <Mail className="h-12 w-12 mb-4 text-ecomotech-green" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:ecomotech@outlook.com" className="text-white hover:text-ecomotech-green transition-colors">
                ecomotech@outlook.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
              <Calendar className="h-12 w-12 mb-4 text-ecomotech-green" />
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <span className="text-white">Book a consultation</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-6 text-lg w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-ecomotech-dark-blue px-8 py-6 text-lg w-full sm:w-auto">
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

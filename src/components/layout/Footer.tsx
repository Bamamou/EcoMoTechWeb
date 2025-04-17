import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-ecomotech-green">Eco</span>
              <span className="text-ecomotech-blue">motech</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Leading provider of solar power systems and renewable energy solutions.
              We're committed to creating a sustainable future through innovative green technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {/* Solar Products */}
              <li>
                <Link to="/products/solar-panels" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link to="/products/solar-inverters" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar Inverters
                </Link>
              </li>
              <li>
                <Link to="/products/home-systems" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar Home Systems
                </Link>
              </li>
              <li>
                <Link to="/products/street-lights" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar Street Lights
                </Link>
              </li>
              <li>
                <Link to="/products/energy-storage" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Energy Storage Systems
                </Link>
              </li>

              {/* Electric Mobility Products */}
              <li>
                <Link to="/products/electric-motorcycles" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Electric Motorcycles
                </Link>
              </li>
              <li>
                <Link to="/products/electric-tricycles" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Electric Tricycles
                </Link>
              </li>
              <li>
                <Link to="/products/ev-chargers" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  EV Chargers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#solar-installation" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar PV Installation
                </Link>
              </li>
              <li>
                <Link to="/services#farm-maintenance" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar Farm Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#ev-installation" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  EV Charger Installation
                </Link>
              </li>
              <li>
                <Link to="/services#ev-repair" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  EV Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services#consultancy" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  Solar PV Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-ecomotech-green mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Green Energy Street, Renewable City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-ecomotech-green mr-2 flex-shrink-0" />
                <a href="tel:18810799128" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  18810799128
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-ecomotech-green mr-2 flex-shrink-0" />
                <a href="mailto:ecomotech@outlook.com" className="text-gray-400 hover:text-ecomotech-green transition-colors">
                  ecomotech@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ecomotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

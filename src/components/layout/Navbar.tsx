import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { name: "Solar PV Installation", href: "/services/solar-installation" },
  { name: "Solar PV Farm Maintenance", href: "/services/solar-maintenance" },
  { name: "EV Charger Installation", href: "/services/ev-charger-installation" },
  { name: "Electric Vehicle Repair", href: "/services/ev-repair" },
  { name: "Solar PV Consultancy", href: "/services/solar-consultancy" },
  { name: "Energy Efficiency Assessment", href: "/services/energy-assessment" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Products", 
      path: "/products",
      dropdown: true,
      items: [
        { name: "Solar Panels", path: "/products/solar-panels" },
        { name: "Solar Inverters", path: "/products/solar-inverters" },
        { name: "Home Systems", path: "/products/home-systems" },
        { name: "Street Lights", path: "/products/street-lights" },
        { name: "Energy Storage", path: "/products/energy-storage" },
        { name: "Solar Pumbs", path: "/products/solar-pumbs" },
        { name: "Electric Motorcycles", path: "/products/electric-motorcycles" },
        { name: "Electric Tricycles", path: "/products/electric-tricycles" },
        { name: "EV Chargers", path: "/products/ev-chargers" },
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: true,
      items: [
        { name: "Solar PV Installation", path: "/services/solar-installation" },
        { name: "Solar Farm Maintenance", path: "/services/solar-maintenance" },
        { name: "EV Charger Installation", path: "/services/ev-charger-installation" },
        { name: "Electric Vehicle Repair", path: "/services/ev-repair" },
        { name: "Solar PV Consultancy", path: "/services/solar-consultancy" },
        { name: "Energy Efficiency Assessment", path: "/services/energy-assessment" },
      ]
    },
    { name: "About Us", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Join Us", path: "/join-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-ecomotech-green">
            Eco<span className="text-ecomotech-blue">motech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button 
                  className="flex items-center space-x-1 text-gray-800 hover:text-ecomotech-green font-medium transition-colors"
                  onClick={() => toggleDropdown(link.name)}
                >
                  <span>{link.name}</span>
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-gray-800 hover:text-ecomotech-green font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-left">
                  {link.items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-ecomotech-gray hover:text-ecomotech-green transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                {link.dropdown ? (
                  <>
                    <button 
                      className="flex items-center justify-between w-full text-gray-800 hover:text-ecomotech-green font-medium"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 border-l-2 border-ecomotech-green">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-2 text-gray-700 hover:text-ecomotech-green"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className="block text-gray-800 hover:text-ecomotech-green font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button className="w-full bg-ecomotech-green hover:bg-ecomotech-dark-green text-white">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Icon } from '@iconify/react';
import Layout from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";
import { ResponsiveImage } from "@/components/ui/responsive-image";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'ecomotech',
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'ECOMOTECH',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ecomotech Team',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'L2DkGjfmnyn-pOmed'
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-ecomotech-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Have questions about our products or services? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-4">
                <Icon 
                  icon="logos:whatsapp-icon" 
                  className="h-8 w-8" 
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/8618810799128" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <span>+86 188 1079 9128</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:ecomotech@outlook.com" 
                className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <span>ecomotech@outlook.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 group-hover:text-purple-500 transition-colors">
                28 Yizhuang Economic Development Zone<br />
                Daxing District, Beijing, 16801
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center p-6 bg-ecomotech-light-gray rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representations Section */}
      <section className="py-16 bg-ecomotech-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <div className="w-24 h-1 bg-ecomotech-green mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Connect with our regional offices and partners across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tanzania */}
            <a 
              //href="https://ecomotech-tz.com"  to be updated in the future
              href="https://afrimes.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <ResponsiveImage 
                  src="images/flags/tanzania.webp" 
                  alt="Tanzania Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech Tanzania</h3>
                <p className="text-gray-600 mb-4">Dar es Salaam, Tanzania</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* The Gambia */}
            <a 
              //href="https://ecomotech-gambia.com"  to be updated 
              href="https://ecomotech-thegambia.netlify.app/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <ResponsiveImage 
                  src="images/flags/the gambia.webp" 
                  alt="Gambia Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech The Gambia</h3>
                <p className="text-gray-600 mb-4">Banjul, The Gambia</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* Guinea */}
            <a 
             // href="https://ecomotech-guinea.com" to be updated
              href="https://ecomotech.github.io/ecomotech-guinea/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <ResponsiveImage 
                  src="images/flags/guinea.png" 
                  alt="Guinea Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech Guinea</h3>
                <p className="text-gray-600 mb-4">Conakry, Guinea</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>

            {/* DR Congo */}
            <a 
              //href="https://ecomotech-drc.com"  to be updated 
              href="https://afrimes.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg 
                            shadow-sm hover:shadow-lg transition-all duration-300
                            transform hover:-translate-y-1">
                <ResponsiveImage 
                  src="images/flags/drc.webp" 
                  alt="DR Congo Flag" 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">EcoMoTech DR Congo</h3>
                <p className="text-gray-600 mb-4">Kinshasa, DR Congo</p>
                <span className="text-ecomotech-green group-hover:text-ecomotech-dark-green 
                               flex items-center transition-colors">
                  Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-ecomotech-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-ecomotech-green mb-6"></div>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message" 
                    required 
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    required 
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="bg-ecomotech-green hover:bg-ecomotech-dark-green text-white px-8 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div>
              <div className="h-full min-h-[400px] md:min-h-0 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                {/* Using Coyah, Guinea Conakry coordinates: approximately 9.7086, -13.3847 */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1234567890123!2d116.49664!3d39.795866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f1a7e5d6b8b8b9%3A0x1d13f6b5b9b9b9b9!2sYizhuang%20Economic%20Development%20Zone!5e0!3m2!1sen!2scn!4v1625097200000!5m2!1sen!2scn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="Ecomotech Office Location in Yizhuang, Beijing"
                ></iframe>
              </div>
              
              <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Our Main Office</h3>
                <p className="text-gray-600">
                  <MapPin className="inline-block mr-2 h-5 w-5 text-ecomotech-green" />
                  28 Yizhuang Economic Development Zone, Daxing District, Beijing, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-ecomotech-blue mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Find answers to the most common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">What types of solar panels do you offer?</h3>
                <p className="text-gray-600">
                  Ecomotech offers a wide range of solar panels including monocrystalline, polycrystalline, and thin-film panels. Our product line caters to various needs, from residential installations to commercial and industrial applications.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">How long do solar panels typically last?</h3>
                <p className="text-gray-600">
                  Our solar panels are designed for durability and longevity. Most Ecomotech panels come with a 25-year performance warranty and can continue producing electricity for 30+ years, though efficiency may gradually decrease over time.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Do you provide installation services?</h3>
                <p className="text-gray-600">
                  Yes, Ecomotech offers professional installation services through our network of certified installation partners. We handle everything from initial site assessment to final system commissioning to ensure optimal performance.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">What financing options are available?</h3>
                <p className="text-gray-600">
                  We offer various financing options including direct purchase, leasing, and power purchase agreements (PPAs). Our team can help determine the best financing solution based on your specific needs and circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

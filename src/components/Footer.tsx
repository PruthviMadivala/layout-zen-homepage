
import { Coffee, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Menu",
      links: ["Coffee & Espresso", "Tea Selection", "Pastries", "Sandwiches", "Seasonal Specials"]
    },
    {
      title: "About",
      links: ["Our Story", "Meet the Team", "Coffee Source", "Events", "Catering"]
    },
    {
      title: "Visit",
      links: ["Location", "Hours", "Parking", "WiFi Info", "Accessibility"]
    },
    {
      title: "Connect",
      links: ["Newsletter", "Loyalty Program", "Gift Cards", "Reviews", "Contact"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center text-2xl font-bold mb-4">
              <Coffee className="h-8 w-8 text-amber-400 mr-2" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Brew & Bean
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your neighborhood coffee house where every cup is crafted with passion and every customer is family.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Brew & Bean Coffee House. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

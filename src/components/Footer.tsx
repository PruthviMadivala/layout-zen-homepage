
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "API Reference", "Changelog"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"]
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Contact", "Status", "Security"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies", "GDPR", "DPA"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              LayoutZen
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building the future of web development, one layout at a time.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
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
            © 2024 LayoutZen. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ for developers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

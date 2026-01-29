import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from 'lucide-react';

/* Move static data outside component */
const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Mobile App', href: '#mobile' },
  ],
  Solutions: [
    { name: 'General Contractors', href: '#gc' },
    { name: 'Subcontractors', href: '#sub' },
    { name: 'Project Owners', href: '#owners' },
    { name: 'EPC Firms', href: '#epc' },
    { name: 'Real Estate', href: '#realestate' },
  ],
  Resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'API Reference', href: '#api' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Blog', href: '#blog' },
    { name: 'Webinars', href: '#webinars' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Press Kit', href: '#press' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <span className="text-2xl font-bold text-white">Strivo Brickly</span>
            </div>

            <p className="text-gray-400 mb-6">
              Complete construction management platform for on-time, on-budget project delivery.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:hr.strivobrickly@gmail.com">hr.strivobrickly@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+91234567890">+91234567890</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span>Delhi,NCR</span>
              </div>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Strivo Brickly. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

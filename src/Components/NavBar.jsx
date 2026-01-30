import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import logo from '../assets/logo.png';

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <span className=""> <img
                src={logo}
                alt="Company Logo"
                className="h-14 w-auto"
              /></span>
            </div>
            <span
              className={`text-2xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              Strivo Brickly
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 group">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  relative font-medium transition-all duration-300
                  group-hover:opacity-40 hover:!opacity-100
                  hover:text-primary-600 hover:-translate-y-0.5
                  ${isScrolled
                    ? "text-gray-700"
                    : "text-white"
                  }
                `}
              >
                {item.label}

                {/* underline */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-0.5 w-0 bg-primary-600
                    transition-all duration-300
                    group-hover:w-0 hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-gray-700" : "text-white"
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 space-y-2">
              <Button variant="secondary" size="sm" className="w-full">
                Sign In
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
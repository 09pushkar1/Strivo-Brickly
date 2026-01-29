import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className={`text-2xl font-display font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                BuildPro
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium transition-colors hover:text-primary-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Features
            </a>
            <a href="#how-it-works" className={`font-medium transition-colors hover:text-primary-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              How It Works
            </a>
            <a href="#testimonials" className={`font-medium transition-colors hover:text-primary-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Testimonials
            </a>
            <a href="#pricing" className={`font-medium transition-colors hover:text-primary-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Pricing
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#features" className="block py-2 text-gray-700 font-medium hover:text-primary-600">
              Features
            </a>
            <a href="#how-it-works" className="block py-2 text-gray-700 font-medium hover:text-primary-600">
              How It Works
            </a>
            <a href="#testimonials" className="block py-2 text-gray-700 font-medium hover:text-primary-600">
              Testimonials
            </a>
            <a href="#pricing" className="block py-2 text-gray-700 font-medium hover:text-primary-600">
              Pricing
            </a>
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
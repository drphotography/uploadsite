import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-red-600">DR</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-indigo-600 transition-colors">Home</a>
            <a href="#portfolio" className="text-white hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#about" className="text-white hover:text-indigo-600 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-indigo-600 transition-colors">Services</a>
            <a href="#testimonials" className="text-white hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-indigo-600">Home</a>
            <a href="#portfolio" className="block px-3 py-2 text-white hover:text-indigo-600">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-indigo-600">About</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-indigo-600">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-white hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 bg-red-600 text-white rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
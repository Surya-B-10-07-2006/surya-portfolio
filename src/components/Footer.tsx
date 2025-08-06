import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Surya B</h3>
            <p className="text-gray-400">Data Analyst in Training</p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Surya B</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-blue-800 hover:bg-blue-700 rounded-full transition-all duration-200 transform hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Surya B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-blue-800">Hi !</span> I am
              <br />
              <span className="text-teal-700">Surya</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Passionate about uncovering insights from data and transforming raw datasets into actionable intelligence. 
              Pursuing B.Tech in AI & Data Science at Sri Eshwar College of Engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-200 flex items-center space-x-2">
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="mailto:mrsuryammp@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-blue-800 transform hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-blue-800 transform hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-blue-800 transform hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-gray-500">
              <MapPin size={18} className="mr-2" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 shadow-2xl overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Surya B - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
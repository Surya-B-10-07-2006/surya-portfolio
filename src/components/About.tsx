import React from 'react';
import { GraduationCap, Target, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-800">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Transforming Data into Insights
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a Data Analyst in training pursuing a B.Tech in Artificial Intelligence & Data Science 
              at Sri Eshwar College of Engineering, Coimbatore. Passionate about uncovering insights from data, 
              I focus on data analysis, machine learning, and dashboard development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With a strong interest in solving real-world problems using data, I specialize in creating 
              clean, informative, and interactive visualizations that empower decision-makers. My goal is 
              to leverage analytical tools and programming skills to transform raw datasets into actionable intelligence.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 font-semibold">
                Open to internships, remote work, and collaborative projects in data analytics and visualization.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-800 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Education</h4>
              </div>
              <p className="text-gray-700">
                <strong>B.Tech in Artificial Intelligence & Data Science</strong>
                <br />
                Sri Eshwar College of Engineering, Coimbatore
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-teal-700 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Focus Areas</h4>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Data Analysis & Visualization</li>
                <li>• Machine Learning</li>
                <li>• Dashboard Development</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-orange-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Availability</h4>
              </div>
              <p className="text-gray-700">
                Available for internships, remote work, and collaborative projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
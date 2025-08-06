import React from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  codeUrl: string;
  demoUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
        {project.title.split(' ').map(word => word[0]).join('')}
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            {project.status}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Zap size={18} className="mr-2 text-yellow-500" />
            Key Features:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.codeUrl}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          <a
            href={project.demoUrl}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'AI-Powered Data Analytics Dashboard',
      category: 'AI & Data Science',
      status: 'In Development',
      description: 'A comprehensive dashboard for visualizing complex datasets, integrating machine learning insights and predictive analytics.',
      features: [
        'Real-time data visualization',
        'ML model predictions',
        'Interactive charts',
        'Export functionality'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Flask'],
      image: '/api/placeholder/400/300',
      codeUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Personal Portfolio Website',
      category: 'Frontend',
      status: 'Completed',
      description: 'A modern, responsive portfolio showcasing my projects, skills, and journey in data and web development.',
      features: [
        'Responsive design',
        'Dark/Light theme',
        'Smooth animations',
        'Contact form'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/api/placeholder/400/300',
      codeUrl: '#',
      demoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-800">Work</span>
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my latest projects demonstrating my skills in data analysis, web development, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
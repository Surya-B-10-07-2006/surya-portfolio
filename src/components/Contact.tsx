import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mrsuryammp@gmail.com',
      href: 'mailto:mrsuryammp@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8189840977',
      href: 'tel:+918189840977',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: '#',
      color: 'text-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'Surya-B-10-07-2006',
      href: '#',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'surya-b-499669328',
      href: '#',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-800">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Available for remote work, internships, and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      <Icon className={item.color} size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <div className="p-3 bg-gray-100 rounded-lg mr-4">
                        <Icon className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{social.label}</p>
                        <p className="text-gray-600">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center text-blue-800 mb-2">
                <CheckCircle size={20} className="mr-2" />
                <span className="font-semibold">Available for:</span>
              </div>
              <ul className="text-blue-700 space-y-1">
                <li>• Remote work opportunities</li>
                <li>• Internships in data analytics</li>
                <li>• Collaborative projects</li>
                <li>• Freelance data analysis work</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
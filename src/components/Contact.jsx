import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Let's collaborate on exciting projects or just have a chat about technology!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sarthak-devlal-0212a1339/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sarthaksource/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
          <a
            href="mailto:devlalsarthak@gmail.com"
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            <Mail size={20} className="mr-2" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
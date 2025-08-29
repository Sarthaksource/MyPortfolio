import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    } shadow-lg`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            {['about', 'education', 'projects', 'experience', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 cursor-pointer ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
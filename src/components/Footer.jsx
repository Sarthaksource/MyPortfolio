import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-1 text-center ${
      darkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'
    }`}>
          As you <strong>Grow</strong> You Change As you <strong>Change</strong> You Grow
    </footer>
  );
};

export default Footer;
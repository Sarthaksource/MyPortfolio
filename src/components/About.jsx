import React from 'react';
import { User } from 'lucide-react';
import pfp from '../assets/pfp.jpg';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img src={pfp} alt="Profile" className="w-full h-full object-cover mr-16"/>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Hello! I'm Sarthak</h2>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate Frontend Developer with expertise in React, JavaScript, and modern web technologies. 
              I love creating beautiful, user-friendly interfaces and bringing creative ideas to life through code. 
              With a strong foundation in computer science and hands-on experience in web development, 
              I'm always eager to learn new technologies and tackle challenging projects.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              When I'm not coding, you can find me exploring new frameworks, sharing my knowledge with the developer community. I believe in writing clean, maintainable code and creating exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
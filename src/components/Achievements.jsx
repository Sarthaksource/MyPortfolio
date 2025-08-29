import React from 'react';
import { Award } from 'lucide-react';

const Achievements = ({ darkMode, achievementsData }) => {
  return (
    <section id="achievements" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Award size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold mb-4">Achievements & Certifications</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Recognition and certifications I've earned
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <a
                href={achievement.certificate}
                target="_blank"
                className="font-medium text-blue-500 flex items-center w-full"
              >
                <Award size={24} className="text-yellow-500 mr-3 flex-shrink-0" />
                <span>{achievement.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

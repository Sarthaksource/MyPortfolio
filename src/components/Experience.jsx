import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = ({ darkMode, experienceData }) => {
  return (
    <section id="experience" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Briefcase size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My career journey and key accomplishments
          </p>
        </div>
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">{job.position}</h3>
                  <p className="text-lg font-medium">{job.company}</p>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {job.period}
                </span>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {job.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
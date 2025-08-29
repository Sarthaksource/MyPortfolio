import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = ({ darkMode, educationData }) => {
  return (
    <section id="education" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <GraduationCap size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold mb-4">Education & Qualifications</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My academic journey and learning milestones
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Degree/Exam</th>
                <th className="px-6 py-4 text-left">Institution</th>
                <th className="px-6 py-4 text-left">Year</th>
                <th className="px-6 py-4 text-left">GPA/Marks(%)</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu, index) => (
                <tr
                  key={index}
                  className={`border-b transition-colors duration-300 hover:bg-blue-50 ${
                    darkMode ? 'border-gray-600 hover:bg-gray-600' : 'border-gray-200'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold">{edu.degree}</td>
                  <td className="px-6 py-4">{edu.institution}</td>
                  <td className="px-6 py-4">{edu.year}</td>
                  <td className="px-6 py-4">{edu.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
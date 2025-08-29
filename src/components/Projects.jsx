import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ darkMode, projectsData, visibleProjects }) => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Check out some of my recent work
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-item transform transition-all duration-500 h-full ${
                visibleProjects.includes(project.id)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div
                className={`rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden h-full flex flex-col ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="relative h-48 w-full">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p
                    className={`text-sm mb-4 flex-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex items-center mt-auto">
                    {project.live && (
                      <a
                        className="text-m font-medium text-white-600 hover:text-red-500 transition-colors mr-10"
                        href={project.live}
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      className="text-m font-medium text-white-600 hover:text-blue-500 transition-colors mr-10"
                      href={project.github}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

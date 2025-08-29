import React, { useState, useEffect } from 'react';

// Import Data
import { education, projects, experience, achievements } from './data/portfolioData';

// Import Components
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Animate projects on scroll (This logic stays here as it orchestrates the page)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            if (projectId && !visibleProjects.includes(projectId)) {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, projectId]);
              }, parseInt(projectId) * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleProjects]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />
      <main>
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} educationData={education} />
        <Projects darkMode={darkMode} projectsData={projects} visibleProjects={visibleProjects} />
        <Experience darkMode={darkMode} experienceData={experience} />
        <Achievements darkMode={darkMode} achievementsData={achievements} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Performed clustering analysis on customer transaction data using K-Means and PCA in Python.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Data Visualization"],
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Sales Modeling",
      description: "Developed a regression model to forecast sales using machine learning techniques.",
      tags: ["R", "ggplot2", "Tidyverse", "Regression Analysis"],
      github: "#",
      demo: "#"
    },
    {
      title: "SQL Data Dashboard",
      description: "Designed an interactive dashboard to analyze business performance using SQLite and Tableau.",
      tags: ["SQL", "SQLite", "Tableau", "Data Visualization"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    { name: "Python", icon: "python" },
    { name: "Scikit-Learn", icon: "scikitlearn" },
    { name: "RStudio", icon: "rstudio" },
    { name: "SQLite", icon: "sqlite" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <img 
            src="Sivuyiso_.JPG"
            alt="Profile"
            className="rounded-full w-32 h-32 mb-8 border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Sivuyiso Mvani
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Graduate Data Analyst | Machine Learning Enthusiast | SQL & Python Developer
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/sivuyisomvani"  target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github size={25} />
            </a>
            <a href="https://www.linkedin.com/in/sivuyiso-mvani/"  target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={25} />
            </a>
            <a href="mailto:sivuyisomvn@gmail.com"  target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Mail size={25} />
            </a>
            <a href="https://github.com/sivuyisomvani"  target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FileText size={25} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          I am a graduate data analyst with a strong background in statistics, data science, and programming. 
          Proficient in Python, R, and SQL, I specialize in data visualization, predictive modeling, 
          and statistical analysis to extract meaningful insights from complex datasets.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-300 hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:sivuyisomvn@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © 2025 Sivuyiso Mvani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

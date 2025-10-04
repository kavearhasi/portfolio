import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState('android');

  const androidProjects = [
    {
      title: "TaskFlow - Productivity App",
      description: "A comprehensive task management application built with Jetpack Compose, featuring real-time synchronization, offline support, and intuitive gesture-based interactions.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Kotlin", "Jetpack Compose", "Room Database", "Coroutines"],
      github: "#",
      demo: "#"
    },
    {
      title: "WeatherWise - Smart Weather App",
      description: "An elegant weather application with location-based forecasts, interactive maps, and personalized weather insights using modern Android architecture patterns.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Kotlin", "MVVM", "Retrofit", "Google Maps API"],
      github: "#",
      demo: "#"
    },
    {
      title: "FitTracker - Health & Fitness",
      description: "A comprehensive fitness tracking app with workout planning, progress monitoring, and social features, built using clean architecture principles.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Kotlin", "Clean Architecture", "Dagger Hilt", "Firebase"],
      github: "#",
      demo: "#"
    }
  ];

  const fullStackProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with user authentication, payment integration, inventory management, and responsive design.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      title: "Content Management System",
      description: "A robust CMS with role-based access control, content versioning, and SEO optimization features for modern web applications.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable chat application with real-time messaging, file sharing, and group management capabilities.",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Node.js", "Socket.io", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    }
  ];

  const currentProjects = activeTab === 'android' ? androidProjects : fullStackProjects;

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            My Work: From{' '}
            <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
              Concept to Code
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#BDBDBD]/10 p-1 rounded-lg border border-[#BDBDBD]/20">
            <button
              onClick={() => setActiveTab('android')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'android'
                  ? 'bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A]'
                  : 'text-[#BDBDBD] hover:text-[#F5F5F7]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android Specialization</span>
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'fullstack'
                  ? 'bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A]'
                  : 'text-[#BDBDBD] hover:text-[#F5F5F7]'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Full-Stack Foundation</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg overflow-hidden hover:border-[#F94800]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F5F5F7] mb-3 group-hover:text-[#F94800] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#BDBDBD] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#F94800]/10 text-[#F94800] text-sm rounded-full border border-[#F94800]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-[#BDBDBD] hover:text-[#F94800] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-[#BDBDBD] hover:text-[#FF8A00] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
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
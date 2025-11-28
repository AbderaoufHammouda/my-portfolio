import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: 'VisitAlgeria',
      timeline: 'February → May 2025',
      description: 'A tourism-oriented web platform to help international travelers explore Algeria. Includes places to visit, things to do, travel tips, and a trip-planning feature.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
      image: '/projects/screen.png',
      liveDemo: '#',
      github: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'DZ Rent-It',
      timeline: 'October 2025 → Present',
      description: 'A rental marketplace for Algerians to list, discover, and book items or properties. Currently under development with modern UX and backend features.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind'],
      image: '/projects/dz-rent-it.png',
      liveDemo: '#',
      github: '#',
      status: 'In Development'
    },
    {
      id: 3,
      title: 'AI-Powered Gesture Detector',
      timeline: 'November 2025',
      description: 'A computer-vision project that detects hand gestures in real-time using machine learning.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      image: '/projects/gesture-detector.png',
      liveDemo: '#',
      github: '#',
      status: 'Completed'
    }
  ];

  return (
    <main className="flex-grow px-4 py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center opacity-0 animate-fadeInUp">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of my recent work showcasing web development, machine learning, and full-stack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group gradient-border rounded-2xl overflow-hidden bg-black hover:shadow-card-glow transition-all duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  e.target.parentElement.innerHTML = `<span class="material-symbols-outlined text-6xl text-primary/40">code</span>`;
                }}
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Title & Timeline */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="tech-badge px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-auto">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3 py-2 bg-primary text-background-dark rounded-lg text-xs font-bold hover:shadow-button-glow transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3 py-2 border-2 border-primary/50 text-primary rounded-lg text-xs font-bold hover:bg-primary/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
                <button
                  onClick={() => {
                    console.log('Info button clicked, project id:', project.id);
                    if (project.id === 1) {
                      console.log('Navigating to /projects/visit-algeria');
                      navigate('/projects/visit-algeria');
                    }
                  }}
                  className="flex items-center justify-center gap-1 px-3 py-2 border border-primary/30 text-gray-300 rounded-lg text-xs font-bold hover:border-primary hover:text-primary transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = {
    'visit-algeria': {
      title: 'VisitAlgeria',
      subtitle: 'UI/UX Case Study',
      role: 'UI/UX Designer',
      timeline: 'February → May 2025',
      tools: ['Figma', 'Illustrator', 'Photoshop'],
      overview: 'VisitAlgeria is a tourism platform that helps travelers discover destinations, plan trips, and explore local experiences across Algeria. I designed the full UI/UX for the platform to deliver a modern, intuitive, and visually appealing user experience.',
      problem: 'Many travel websites in Algeria feel outdated, lack proper navigation, and don\'t highlight the beauty of local destinations. The goal was to build a clean, modern interface that is easy to explore and visually inspiring.',
      goals: [
        'Simplify navigation for tourists',
        'Highlight key destinations with strong visuals',
        'Create a modern and consistent UI',
        'Improve user engagement and discoverability'
      ],
      targetUsers: [
        'Local travelers',
        'Foreign tourists visiting Algeria',
        'Students planning trips',
        'Families and adventure seekers'
      ],
      designProcess: [
        {
          title: 'Research',
          description: 'Competitive analysis, user needs identification, and pain point discovery'
        },
        {
          title: 'Wireframes',
          description: 'Low-fidelity sketches and user flow mapping'
        },
        {
          title: 'High-Fidelity Design',
          description: 'Polished UI screens with consistent visual language'
        },
        {
          title: 'Prototype',
          description: 'Interactive prototype with smooth transitions'
        }
      ],
      designSystem: {
        colors: ['#0080FF', '#00D4FF', '#1A1A1A', '#FFFFFF'],
        typography: ['Space Grotesk', 'Inter'],
        components: ['Cards', 'Buttons', 'Input Fields', 'Navigation']
      },
      screens: [
        { src: '/projects/screen.png', title: 'Homepage - Hero Section', category: 'Homepage' },
        { src: '/projects/screen2.png', title: 'Reviews Page', category: 'Reviews' },
        { src: '/projects/screen3.png', title: 'Hotel Details', category: 'Hotels' },
        { src: '/projects/screen4.png', title: 'Hotels Listing', category: 'Hotels' },
        { src: '/projects/screen5.png', title: 'Photo Gallery', category: 'Gallery' },
        { src: '/projects/screen6.png', title: 'Facilities & Services', category: 'Hotels' },
        { src: '/projects/screen7.png', title: 'Admin Dashboard', category: 'Dashboard' }
      ],
      learnings: 'Working on VisitAlgeria helped me practice consistent visual hierarchy, improve responsive design skills, and create a strong user flow for travel platforms. I learned how to balance aesthetic appeal with functional navigation.',
      conclusion: 'The final design gives users a smooth and engaging way to explore Algeria. The clean layout, strong visuals, and intuitive navigation make the platform both modern and easy to use.',
      liveDemo: '#',
      github: '#'
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </main>
    );
  }

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.screens.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.screens.length) % project.screens.length);
  };

  return (
    <main className="flex-grow px-4 py-16">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-primary font-semibold mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {project.role}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {project.timeline}
            </span>
          </div>
        </div>
      </div>

      {/* Tools Used */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-100">
        <div className="gradient-border rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">Tools Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="tech-badge px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-200">
        <div className="gradient-border rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">01.</span> Project Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-300">
        <div className="gradient-border rounded-2xl p-8 bg-primary/5">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">02.</span> Problem Statement
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.problem}</p>
        </div>
      </div>

      {/* Goals & Target Users */}
      <div className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="gradient-border rounded-2xl p-8 opacity-0 animate-slideInLeft delay-400">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-primary">03.</span> Goals
          </h2>
          <ul className="space-y-3">
            {project.goals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="gradient-border rounded-2xl p-8 opacity-0 animate-slideInLeft delay-500">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-primary">04.</span> Target Users
          </h2>
          <ul className="space-y-3">
            {project.targetUsers.map((user, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-600">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-primary">05.</span> Design Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.designProcess.map((step, idx) => (
            <div key={idx} className="gradient-border rounded-xl p-6 text-center hover:shadow-card-glow transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final UI Screens */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center opacity-0 animate-fadeInUp delay-700">
          <span className="text-primary">06.</span> Final UI Screens
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.screens.map((screen, idx) => (
            <div
              key={idx}
              className="gradient-border rounded-xl overflow-hidden cursor-pointer hover:shadow-card-glow transition-all opacity-0 animate-fadeInUp group"
              style={{ animationDelay: `${800 + idx * 100}ms` }}
              onClick={() => openLightbox(idx)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <img
                  src={screen.src}
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="p-4 bg-black">
                <span className="text-xs text-primary font-semibold">{screen.category}</span>
                <h4 className="text-sm font-medium text-white mt-1">{screen.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design System */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-1000">
        <div className="gradient-border rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-primary">07.</span> Design System
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Colors</h3>
              <div className="flex gap-2">
                {project.designSystem.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-lg border-2 border-primary/30"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Typography</h3>
              <div className="space-y-2">
                {project.designSystem.typography.map((font, idx) => (
                  <p key={idx} className="text-gray-300">{font}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Components</h3>
              <div className="flex flex-wrap gap-2">
                {project.designSystem.components.map((comp, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I Learned */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-1100">
        <div className="gradient-border rounded-2xl p-8 bg-primary/5">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">08.</span> What I Learned
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.learnings}</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-6xl mx-auto mb-16 opacity-0 animate-fadeInUp delay-1200">
        <div className="gradient-border rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">09.</span> Conclusion
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">{project.conclusion}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark rounded-full font-bold hover:shadow-button-glow transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-primary transition-colors z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-primary transition-colors z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.screens[currentImage].src}
              alt={project.screens[currentImage].title}
              className="w-full h-auto rounded-lg shadow-glow"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{project.screens[currentImage].title}</p>
              <p className="text-gray-400 text-sm">{currentImage + 1} / {project.screens.length}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;

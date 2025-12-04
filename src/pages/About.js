import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const technologies = ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'GitHub', 'Jupyter Notebook', 'TensorFlow', 'Figma'];
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <main className="flex-grow py-12 md:py-16">
      {/* Hero Section */}
      <div className="px-4 mb-16 opacity-0 animate-fadeInUp">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 mb-16 opacity-0 animate-scaleIn delay-200">
        <div className="gradient-border rounded-xl p-8 md:p-12 shadow-card-glow">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-30"></div>
              <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full border-4 border-primary shadow-glow">
                <img className="h-full w-full rounded-full object-cover" src="/profile.png" alt="Abderaouf HAMMOUDA"/>
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
                Hi, I'm <span className="text-primary font-semibold">Abderaouf HAMMOUDA</span>, a third-year Computer Science engineering student at ESTIN. I'm passionate about creating modern digital experiences, with a strong interest in front-end development, UI/UX design, machine learning, and data science.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-400">
                I work with technologies such as <span className="text-primary">C, C++, Python, HTML, CSS, JavaScript, React</span>, and <span className="text-primary">Figma</span>, and I enjoy combining clean design with solid engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="px-4 mb-16 opacity-0 animate-fadeInUp delay-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-primary">Technologies</span> & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="tech-badge px-5 py-2.5 bg-primary/10 border border-primary/40 rounded-full text-sm md:text-base font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fadeInUp delay-400">
          My <span className="text-primary">Journey</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* VisitAlgeria Card */}
          <div className="gradient-border rounded-xl p-8 opacity-0 animate-slideInLeft delay-500 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">travel_explore</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">VisitAlgeria</h3>
                <p className="text-sm text-gray-400 mb-3">Founder & UI/UX Designer</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              During my second year at ESTIN, I founded VisitAlgeria, a web application developed as part of the multidisciplinary project module. I was responsible for the UI/UX design and contributed to the front-end development, transforming the idea into a functional and visually refined platform.
            </p>
          </div>

          {/* DZ-Rent-It Card */}
          <div className="gradient-border rounded-xl p-8 opacity-0 animate-slideInLeft delay-600 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">DZ-Rent-It</h3>
                <p className="text-sm text-gray-400 mb-3">Front-End Developer</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              I'm currently working on DZ-Rent-It, where I serve as a front-end developer, improving the user interface and ensuring an engaging and smooth user experience.
            </p>
          </div>

          {/* CTF Competitions - October 2024 */}
          <Link to="/competitions/nextrace-2024" className="gradient-border rounded-xl p-8 opacity-0 animate-slideInLeft delay-700 hover:shadow-glow transition-shadow block">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">shield</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">NextRace 2024</h3>
                <p className="text-sm text-gray-400 mb-3">Team "Attack On Tal3a" - 7th Place</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              In October 2024, I participated in a Capture The Flag cybersecurity competition organized by the Nexus Security Club at ESTIN Béjaïa. Competing with my team "Attack On Tal3a", we finished <span className="text-primary font-semibold">7th place out of 25 teams</span>. I personally earned <span className="text-primary font-semibold">2100 points</span> by solving multiple challenges, gaining valuable experience in cybersecurity and problem-solving.
            </p>
            <div className="mt-4 flex items-center text-primary text-sm font-medium group">
              View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* CTF Competitions - October 2025 */}
          <Link to="/competitions/nextrace-2025" className="gradient-border rounded-xl p-8 opacity-0 animate-slideInLeft delay-800 hover:shadow-glow transition-shadow block">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">military_tech</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">NextRace 2025</h3>
                <p className="text-sm text-gray-400 mb-3">Team "Attack On Tal3a 2.0" - 4th Place</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-300">
              In October 2025, I competed again with my upgraded team "Attack On Tal3a 2.0", achieving an impressive <span className="text-primary font-semibold">4th place out of 25 teams</span>. As team leader and the highest scorer with <span className="text-primary font-semibold">3500 points</span>, I solved several complex challenges using creative approaches. This experience strengthened my technical skills in cybersecurity, problem-solving, and challenge analysis.
            </p>
            <div className="mt-4 flex items-center text-primary text-sm font-medium group">
              View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </div>

      {/* What Sets Me Apart Section */}
      <div className="px-4 mb-16 opacity-0 animate-fadeInUp delay-500">
        <div className="gradient-border rounded-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What Sets Me <span className="text-primary">Apart</span>
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300">
            <p>
              My ability to <span className="text-primary font-semibold">blend design sensibility with technical skill</span> is what truly distinguishes me. I don't just build interfaces—I craft user-focused solutions that balance aesthetics, usability, and performance.
            </p>
            <p>
              My background in <span className="text-primary font-semibold">machine learning and data science</span> also gives me a deeper analytical approach, allowing me to tackle problems from multiple angles and create more intelligent, data-driven solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Who I Am Section */}
      <div className="px-4 mb-12 opacity-0 animate-scaleIn delay-600">
        <div className="gradient-border rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who <span className="text-primary">I Am</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
            I consider myself a <span className="text-primary font-semibold">curious and creative problem-solver</span>. I enjoy learning new technologies, exploring innovative ideas, and collaborating with others. Whether designing, coding, or brainstorming with a team, I stay motivated, adaptable, and committed to delivering high-quality results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/" className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold transition-shadow hover:shadow-button-glow">
              Back Home
            </Link>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowContactModal(true);
              }} 
              className="flex items-center justify-center rounded-full h-12 px-8 border-2 border-primary bg-transparent text-primary text-base font-bold transition-colors hover:bg-primary/20"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-sm" 
            onClick={() => setShowContactModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative z-10 w-full max-w-md animate-scaleIn" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black border border-primary/20 rounded-2xl p-8 shadow-glow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowContactModal(false);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
                  type="button"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-8 text-center">Choose how you'd like to reach me</p>
              
              <div className="space-y-4">
                {/* Email Option */}
                <a 
                  href="mailto:abderaoufhammouda@gmail.com"
                  className="block border border-primary/20 rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 hover:shadow-card-glow transition-all group bg-black"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-400 mb-1">Email Me</p>
                    <p className="text-primary font-medium">abderaoufhammouda@gmail.com</p>
                  </div>
                  <svg className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Phone Option */}
                <a 
                  href="tel:+213792276114"
                  className="block border border-primary/20 rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 hover:shadow-card-glow transition-all group bg-black"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-400 mb-1">Call Me</p>
                    <p className="text-primary font-medium">+213 792276114</p>
                  </div>
                  <svg className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default About;

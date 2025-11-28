import React, { useState } from 'react';

const Home = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  return (
    <main className="flex-grow">
      <div className="flex flex-col-reverse items-center gap-12 px-4 py-16 md:flex-row md:py-24">
        <div className="flex w-full flex-col gap-8 text-center md:w-3/5 md:text-left opacity-0 animate-fadeInUp delay-200">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl">
              Hi, It's <span className="text-primary">Abderaouf HAMMOUDA</span>
            </h1>
            <h2 className="text-lg font-medium text-gray-400 sm:text-xl">
              I'm a 3rd Year ESTIN student.
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-300">
              I am passionate about computer science, specializing in front-end development, machine learning, data science, and UI/UX design. I love building beautiful and responsive interfaces.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 md:justify-start">
            <a className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary transition-all hover:bg-primary hover:text-background-dark hover:shadow-button-glow" href="https://github.com/AbderaoufHammouda/AbderaoufHammouda.git" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
              </svg>
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary transition-all hover:bg-primary hover:text-background-dark hover:shadow-button-glow" href="https://www.linkedin.com/in/abderaouf-hammouda-31b3b9392" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary transition-all hover:bg-primary hover:text-background-dark hover:shadow-button-glow" href="https://www.instagram.com/iamnotraouf/" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.289 3.882 3.748 2.333 6.983 2.185 8.25.12 8.63.11 11.85.11h.3zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.357-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
            <button onClick={() => setShowHireModal(true)} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-shadow hover:shadow-button-glow">
              <span className="truncate">Hire</span>
            </button>
            <button onClick={() => setShowContactModal(true)} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 border-2 border-primary bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
              <span className="truncate">Contact</span>
            </button>
          </div>
        </div>
        
        <div className="relative flex w-full items-center justify-center md:w-2/5 opacity-0 animate-scaleIn delay-400">
          <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-40"></div>
          <div className="relative h-64 w-64 rounded-full border-4 border-primary shadow-glow md:h-80 md:w-80 lg:h-96 lg:w-96">
            <img className="h-full w-full rounded-full object-cover" alt="Abderaouf Hammouda" src="/profile.png"/>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn" onClick={() => setShowContactModal(false)}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>
          <div className="relative z-10 w-full max-w-md animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="gradient-border rounded-2xl p-8 bg-black shadow-glow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowContactModal(false);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors z-50"
                  type="button"
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
                  className="gradient-border rounded-xl p-6 flex items-center gap-4 hover:shadow-card-glow transition-all group"
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
                  className="gradient-border rounded-xl p-6 flex items-center gap-4 hover:shadow-card-glow transition-all group"
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

      {/* Hire Me Modal */}
      {showHireModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md" onClick={() => setShowHireModal(false)}></div>
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>
            <div className="relative z-50 inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full gradient-border" onClick={(e) => e.stopPropagation()}>
              <div className="p-8 bg-black">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary">Hire Me</h3>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowHireModal(false);
                    }}
                    className="text-gray-400 hover:text-primary transition-colors"
                    type="button"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">Let's work together on your next project</p>
              
              <form action="https://formspree.io/f/xdkroreb" method="POST" className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-black text-white">Select a range</option>
                    <option value="$10 - $50" className="bg-black text-white">$10 - $50</option>
                    <option value="$50 - $100" className="bg-black text-white">$50 - $100</option>
                    <option value="$100 - $500" className="bg-black text-white">$100 - $500</option>
                    <option value="$500 - $1,000" className="bg-black text-white">$500 - $1,000</option>
                    <option value="$1,000 - $5,000" className="bg-black text-white">$1,000 - $5,000</option>
                    <option value="$5,000+" className="bg-black text-white">$5,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-shadow hover:shadow-button-glow"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

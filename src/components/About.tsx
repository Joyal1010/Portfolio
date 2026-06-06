const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 transition-colors duration-500">
      <h2 className="font-serif text-3xl mb-16 text-neutral-900 dark:text-white transition-colors duration-500">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Photo */}
        <div className="md:col-span-5 w-full max-w-sm mx-auto md:max-w-none md:mx-0 aspect-[4/5] rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center overflow-hidden transition-colors duration-500 relative group shadow-sm">
          <img 
            src="/profile.jpeg" 
            alt="Joyal Tom Thomas" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-300/20 to-transparent dark:from-white/5 pointer-events-none transition-colors duration-500" />
        </div>
        
        {/* Content */}
        <div className="md:col-span-7 flex flex-col gap-12">
          
          {/* Description & Contact Grid */}
          <div className="flex flex-col gap-12">
            <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg leading-relaxed transition-colors duration-500">
              I am a passionate software developer with a keen eye for minimalist design and high-performance engineering. I thrive on translating complex ideas into elegant, user-centric digital experiences that blend aesthetic precision with technical robustness.
            </p>
            
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 transition-colors duration-500">
                Contact Details
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-800 dark:text-neutral-200 font-light transition-colors duration-500">
                <li>Joyal Tom Thomas</li>
                <li className="text-neutral-500 dark:text-neutral-500 transition-colors duration-500">Kannur, Kerala, India</li>
                <li>
                  <a href="tel:9497410798" className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-0.5">
                    9497410798
                  </a>
                </li>
                <li>
                  <a href="mailto:joyaltomthomas@gmail.com" className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-0.5">
                    joyaltomthomas@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 transition-colors duration-500" />
          
          {/* Experience */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-8 transition-colors duration-500">
              Experience
            </h3>
            <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-8 ml-3 transition-colors duration-500">
              <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white transition-colors duration-500" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white transition-colors duration-500">Intern</h4>
                <span className="text-sm text-neutral-500 font-medium tracking-widest uppercase">3 Months</span>
              </div>
              <a 
                href="https://www.linkedin.com/company/kerala-development-and-innovation-strategic-council/"
                target="_blank" rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 font-light transition-colors duration-500 hover:text-black dark:hover:text-white border-b border-transparent hover:border-black dark:hover:border-white pb-0.5 inline-block"
              >
                Kerala Development and Innovation Strategic Council (K-DISC)
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-8 transition-colors duration-500">
              Education
            </h3>
            <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-8 ml-3 transition-colors duration-500">
              <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-colors duration-500" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white transition-colors duration-500">Bachelor of Technology</h4>
                <span className="text-sm text-neutral-500 font-medium tracking-widest uppercase">2nd Year</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 font-light transition-colors duration-500 mb-4">
                Computer Science and Engineering
              </p>
              <a 
                href="https://www.cusat.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors pb-0.5">
                  School of Engineering, CUSAT
                </span>
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 transition-colors duration-500" />
          
          {/* Skills */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6 transition-colors duration-500">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['UI/UX Design', 'Problem Solving', 'Mentoring & Leadership', 'Public Speaking', 'Robotics & IoT', 'Web Development'].map((skill, i) => (
                <span 
                  key={i} 
                  className="text-xs font-medium text-neutral-700 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors duration-500 hover:border-neutral-400 dark:hover:border-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Resume Download */}
          <div className="pt-4">
            <a 
              href="/Resume.html" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <span>View Resume</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

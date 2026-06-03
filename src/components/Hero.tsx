import Aurora from './Aurora';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-start w-full py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40 transition-opacity duration-500">
        <Aurora
          colorStops={theme === 'dark' ? ["#2c2c2c", "#5227FF", "#000000"] : ["#e2e8f0", "#B497CF", "#ffffff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pointer-events-none">
        <div className="mb-8 flex flex-col gap-0.5">
          <span className="block text-neutral-500 dark:text-neutral-400 font-medium tracking-widest uppercase text-sm transition-colors duration-500">Hello!</span>
          <span className="block text-neutral-800 dark:text-neutral-200 text-xl font-light transition-colors duration-500">I'm Joyal Tom Thomas</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-neutral-900 dark:text-white transition-colors duration-500">
          Crafting digital <br />
          <span className="text-neutral-400 dark:text-neutral-500 transition-colors duration-500">experiences with</span> <br />
          purpose.
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl text-lg md:text-xl leading-relaxed mb-12 font-light transition-colors duration-500">
          True engineering begins with the art of noticing. By observing the subtle complexities of daily environments, I develop purposeful software designed to untangle real-world problems and optimize human experience.
        </p>
        <a 
          href="#contact" 
          className="group inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-medium pb-2 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors pointer-events-auto"
        >
          <span>Let's collaborate</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import BorderGlow from './BorderGlow';
import { useTheme } from '../ThemeContext';

const PROJECTS = [
  {
    title: 'skillundo.tech',
    description: 'A platform built for students to sell their skills to other students - peer to peer.',
    tags: ['Web Platform', 'P2P', 'Student Network'],
    link: 'https://www.skillundo.tech',
  }
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-16 transition-colors duration-500">
      <h2 className="font-serif text-3xl mb-16 text-neutral-900 dark:text-white transition-colors duration-500">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <BorderGlow
            key={index}
            className="transition-all duration-500 hover:-translate-y-2 h-full"
            backgroundColor={theme === 'dark' ? "#171717" : "#ffffff"}
            borderRadius={16}
            colors={theme === 'dark' ? ['#5227FF', '#c084fc', '#7cff67'] : ['#e2e8f0', '#B497CF', '#ffffff']}
            glowColor="260 100 70"
            glowIntensity={0.5}
          >
            <a 
              href={project.link}
              className="group block p-8 h-full w-full outline-none"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-2xl text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">{project.title}</h3>
                <svg 
                  className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-8 h-12 transition-colors duration-500">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium text-neutral-600 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-950/50 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
};

export default Projects;

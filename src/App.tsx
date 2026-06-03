
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Activities from './components/Activities';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import LogoLoopComponent from './components/LogoLoop';
import PulsatingDots from './components/ui/pulsating-loader';
import { useTheme } from './ThemeContext';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs, SiFigma } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoLoop = LogoLoopComponent as any;

const techLogos = [
  { node: <SiReact className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVite className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiNodedotjs className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "Figma", href: "https://www.figma.com" },
  { node: <VscVscode className="text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity" />, title: "VS Code", href: "https://code.visualstudio.com" },
];

function App() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PulsatingDots />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-300 dark:selection:bg-neutral-800 selection:text-neutral-900 dark:selection:text-neutral-50 flex flex-col relative transition-colors duration-500">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent my-12 transition-colors duration-500" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent my-8 transition-colors duration-500" />
        <Activities />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent my-8 transition-colors duration-500" />
        
        {/* Technologies Loop */}
        <div className="py-12 w-full overflow-hidden max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-8">
            Technologies & Tools
          </p>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={64}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={theme === 'dark' ? '#0a0a0a' : '#fafafa'}
          />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent my-8 transition-colors duration-500" />
        <About />
      </main>
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-6 pb-2 pointer-events-none">
      <div className="w-full px-6 md:px-12 flex items-center justify-between pointer-events-auto">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="JT Logo" className="h-16 w-auto rounded-sm mix-blend-multiply dark:mix-blend-lighten invert dark:invert-0 transition-all duration-500" />
        </a>
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300 backdrop-blur-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-6 py-3 transition-colors duration-500">
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 transition-colors duration-500"></div>
          <a href="/Resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors group">
            <span>Resume</span>
            <svg className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

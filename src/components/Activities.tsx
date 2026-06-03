import { useTheme } from '../ThemeContext';
import SpotlightCard from './SpotlightCard';

const activities = [
  {
    title: "LUMORA 2026 - UI/UX Hackathon",
    organizer: "Google Developer Group on Campus, MACE",
    description: "Participated in an intensive UI/UX design hackathon, building scalable and accessible user interfaces.",
    image: "/activity-1.jpg",
    link: "https://www.linkedin.com/company/gdgmaceoncampus/posts/?feedView=all"
  },
  {
    title: "Ideathon 2025",
    organizer: "Equal Opportunity Cell & Skill Orientation Centre, CUSAT",
    description: "Engaged in collaborative problem-solving to pitch innovative tech solutions to real-world challenges.",
    image: "/activity-2.jpg",
    link: "#"
  },
  {
    title: "ENCRYPTA <3.0>",
    organizer: "IEEE SB NSSCE",
    description: "Competed in an intense cybersecurity and coding challenge.",
    image: "/activity-3.jpg",
    link: "https://www.linkedin.com/company/ieeesbnssce/"
  },
  {
    title: "VS Code Dev Days",
    organizer: "ACES CUSAT & TinkerHub SOE",
    description: "Explored advanced development environments and workflow optimizations.",
    image: "/activity-4.jpg",
    link: "https://www.linkedin.com/company/tinkerhub-cusat/posts/?feedView=all"
  },
  {
    title: "Build Your First Robot Workshop",
    organizer: "IEEE RAS CUSAT SB",
    description: "Hands-on experience with foundational robotics and IoT hardware integration.",
    image: "/activity-5.jpg",
    link: "https://www.linkedin.com/company/ieee-cusat-sb/posts/?feedView=all"
  },
  {
    title: "Alumni Tech Talk",
    organizer: "Little Kites Club",
    description: "Delivered a talk to high school students on computers, coding, and navigating a career in technology.",
    image: "/activity-6.jpg",
    link: "#"
  }
];

const Activities = () => {
  const { theme } = useTheme();

  return (
    <section id="activities" className="max-w-5xl mx-auto px-6 py-16 transition-colors duration-500">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="font-serif text-3xl mb-2 text-neutral-900 dark:text-white transition-colors duration-500">Involvements</h2>
          <p className="text-neutral-500 font-light text-sm">Talks, hackathons, and workshops.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, i) => (
          <a key={i} href={activity.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <SpotlightCard 
              className="h-full rounded-3xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 transition-colors duration-500 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm"
              spotlightColor={theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 mb-6 relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyNjI2MjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzUyNTI1MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QZW5kaW5nIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }} 
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 dark:bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2 transition-colors">{activity.title}</h3>
                <p className="text-xs text-neutral-500 font-medium tracking-widest uppercase mb-4">{activity.organizer}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="mt-auto pt-6 flex justify-end">
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </SpotlightCard>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Activities;

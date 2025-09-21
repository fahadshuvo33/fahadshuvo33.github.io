// src/data/projects.ts
import type { ProjectData } from './types'

export const projects: ProjectData = {
  fullStack: [
    {
      name: 'Mitnity: Event Management SaaS',
      description: 'Developing multi-tenant event platform with dynamic subdomains.',
      tech: ['Django', 'Docker', 'PostgreSQL', 'Redis', 'Vue.js'],
      category: 'Full Stack',
      status: 'in-progress',
      github: 'github.com/fahadshuvo33/mitnity',

      images: {
        thumbnail: '',
        screenshots: [],
        architecture: '',
      },

      features: [
        'Multi-tenant architecture',
        'Event creation and management',
        'Ticketing system',
        'Real-time notifications',
      ],
    },
  ],
  frontend: [
    {
      name: 'QuranVerse: Educational Web App',
      description: 'Interactive Svelte application with 6000+ verses',
      tech: ['Svelte', 'Tailwind CSS', 'Quran APIs'],
      category: 'Frontend',
      status: 'completed',
      github: 'github.com/fahadshuvo33/quranverse',
      live: 'https://quranverse.islam.cl/',

      images: {
        thumbnail: '',
        screenshots: [],
        demo: '', // Animated demo
      },
    },
  ],
  bots: [
    {
      name: 'GitScope Bot',
      description:
        'A Telegram bot that can search for public repositories and profiles on GitHub using the GitHub API',
      tech: ['Python', 'Python-dotenv', 'Python Telegram Bot', 'Asyncio', 'GitHub API'],
      category: 'Bot Development',
      status: 'maintained',
      github: 'https://github.com/fahadshuvo33/gitscope-bot',
      features: [
        'Search for public repositories with keywords',
        'Search for public profiles with usernames',
        'Search for trending repositories',
        'Search for repositories with specific programming languages',
      ],
    },
    {
      name: 'QuoteBot: Multi-Platform Bot',
      description:
        'Cross-platform bot serving 200+ daily inspirational quotes across Telegram and Discord',
      tech: ['Python', 'Telegram Bot API', 'Discord Bot API', 'Asyncio', 'API Ninja'],
      category: 'Bot Development',
      status: 'maintained',
      github: 'github.com/fahadshuvo33/quotebot',
      features: [
        'Multi-platform support (Telegram & Discord)',
        '200+ daily quotes',
        'Async architecture for performance',
        'Category-based quote filtering',
        'Admin commands for bot management',
      ],
    },
  ],
}

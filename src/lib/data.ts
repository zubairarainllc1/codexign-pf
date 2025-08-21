export type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  imageHint: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  category: 'Web' | 'Mobile' | 'AI';
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Invoice Generator',
    description: 'A web app to create and manage invoices with ease.',
    fullDescription: 'Developed a comprehensive invoice generator that allows users to create, send, and track professional invoices. Features include customizable templates, client management, payment tracking, and PDF exporting. Built with modern web technologies for a seamless user experience.',
    image: '/invoice.png',
    imageHint: 'invoice generator',
    tags: ['Web', 'React', 'Node.js', 'PDF Generation', 'Stripe'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'Web',
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'A cross-platform mobile app to track workouts and progress.',
    fullDescription: 'A mobile application built with Flutter for both iOS and Android. It allows users to log their workouts, track progress over time with charts and statistics, set goals, and follow pre-made workout plans. Includes local data persistence using SQLite.',
    image: '/web.jpg',
    imageHint: 'mobile app fitness',
    tags: ['Mobile', 'Flutter', 'Dart', 'SQLite'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'Mobile',
  },
  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description: 'An intelligent customer support chatbot for websites.',
    fullDescription: 'Integrated a powerful AI chatbot using OpenAI\'s GPT models to provide instant, 24/7 customer support. The chatbot can understand natural language, answer frequently asked questions, and escalate complex queries to human agents. The project involved fine-tuning the AI model and building a custom chat interface.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chatbot interface',
    tags: ['AI', 'Python', 'LLM', 'JavaScript', 'Web Sockets'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'AI',
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    description: 'A complete visual and technical overhaul for a B2B company.',
    fullDescription: 'Led the redesign of a corporate website to improve user experience, SEO, and lead generation. The new site features a clean, professional design, a custom CMS built with PHP for easy content management, and is optimized for performance and accessibility.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'corporate website',
    tags: ['Web', 'PHP', 'JavaScript', 'CSS', 'HTML'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'Web',
  },
  {
    id: 5,
    title: 'Recipe Sharing Mobile App',
    description: 'A social app for food lovers to share and discover recipes.',
    fullDescription: 'A Flutter-based mobile app that provides a platform for users to create profiles, post their own recipes with photos and instructions, and browse recipes from others. Features include a search and filter system, user ratings, and a "favorites" list.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app recipe',
    tags: ['Mobile', 'Flutter', 'Dart', 'Firebase'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'Mobile',
  },
  {
    id: 6,
    title: 'Automated Content Summarizer',
    description: 'An AI tool to summarize long articles and documents.',
    fullDescription: 'A web-based tool that uses AI to generate concise summaries of long texts, articles, or documents. Users can paste text or provide a URL. The backend, built with Python and FastAPI, leverages transformer models for high-quality summarization.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ai tool interface',
    tags: ['AI', 'Python', 'FastAPI', 'LLM', 'React'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'AI',
  },
];

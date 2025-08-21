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
    liveUrl: 'https://google.com/',
    codeUrl: '#',
    category: 'Web',
  },
  {
    id: 2,
    title: 'Multi-Tool Site',
    description: 'A multi-tool site with productive & social media tools with AI integrations.',
    fullDescription: 'A comprehensive web platform featuring a variety of productivity and social media tools, enhanced with AI integrations to streamline workflows. Built with a modern stack including React and Node.js for a powerful and responsive user experience.',
    image: '/web.jpg',
    imageHint: 'productivity tools dashboard',
    tags: ['Web', 'React', 'Node.js', 'AI'],
    liveUrl: 'https://google.com/',
    codeUrl: '#',
    category: 'Web',
  },
  {
    id: 3,
    title: 'Professional Documents Generator',
    description: 'A tool to generate professional documents like invoices, CVs, and business cards.',
    fullDescription: 'This application provides templates and tools to effortlessly create a range of professional documents. From generating polished invoices and CVs to designing sleek business cards, this tool streamlines your professional branding needs. Built with a focus on user experience and high-quality output.',
    image: '/tool.jpg',
    imageHint: 'document generator interface',
    tags: ['Web', 'React', 'Node.js', 'PDF Generation'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'Web',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A stunning, modern portfolio to showcase skills and projects effectively.',
    fullDescription: 'A fully responsive and dynamic portfolio website built with Next.js and Tailwind CSS. It features smooth animations, an AI-powered tagline generator, and a clean, modern design to effectively showcase projects and skills to potential clients and employers.',
    image: '/extra.jpg',
    imageHint: 'portfolio website design',
    tags: ['Web', 'Next.js', 'Tailwind CSS', 'AI'],
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

import { Code, Smartphone, Database, BrainCircuit, PenTool, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "End-to-end development of responsive, high-performance web applications tailored to your needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (Flutter)",
    description: "Cross-platform mobile applications for iOS and Android with a single, beautiful codebase using Flutter.",
  },
  {
    icon: Database,
    title: "Backend APIs & Databases",
    description: "Robust and scalable backend systems, REST/GraphQL APIs, and efficient database management with Node.js & MySQL.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description: "Leveraging Large Language Models (LLMs) to build intelligent chatbots, automation tools, and smart features.",
  },
  {
    icon: PenTool,
    title: "UI/UX & Frontend Engineering",
    description: "Crafting intuitive, accessible, and visually appealing user interfaces with modern frontend technologies.",
  },
  {
    icon: GitFork,
    title: "Maintenance & Optimization",
    description: "Ongoing support, performance tuning, and feature enhancements to keep your applications running smoothly.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            A comprehensive suite of services to bring your ideas to life.
          </p>
        </AnimatedSection>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="group h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <h3 className="flex-grow font-headline text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-grow text-muted-foreground">
                    {service.description}
                  </p>
                  <Link href="#contact" className="mt-4 font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
                    Get a Quote &rarr;
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Download, CheckCircle, Briefcase, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { AnimatedSection } from '../animated-section';

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Python",
  "Node.js", "Express", "Flutter", "Dart", "MySQL", 
  "REST", "GraphQL", "AI/LLM", "Auth/JWT", "CI/CD", "Docker"
];

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: CheckCircle, value: "100+", label: "Projects Shipped" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Clock, value: "24-Hour", label: "Response Time" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            A little bit about my journey and expertise.
          </p>
        </AnimatedSection>
        
        <div className="mt-16">
          <AnimatedSection>
            <div className="space-y-6 text-base text-muted-foreground max-w-3xl mx-auto">
               <div className="flex justify-center">
                <div className="relative h-64 w-64 lg:h-80 lg:w-80">
                <Image
                    src="/profile.png"
                    alt="Zubair Arain"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 backdrop-blur-sm"></div>
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-lg bg-accent/20 backdrop-blur-sm"></div>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-foreground text-center">Who I Am</h3>
              <p className="text-center">
                I'm a creative professional from Hyderabad, Pakistan, offering full-stack development, graphic design, and custom AI solutions. Passionate about clean design, intuitive interfaces, and powerful web experiences.  With years of experience in the digital space, I've helped numerous clients transform their ideas into reality through thoughtful design and robust development.
              </p>
              <p className="text-center">
                My approach is rooted in writing clean, scalable code and a commitment to engineering excellence. I thrive on solving complex problems and turning ambitious ideas into reality, ensuring every project is delivered to the highest standard.
              </p>
              <div className="flex justify-center">
                 {/* Add a comment for the user to replace '#' with the actual CV file path */}
                <Button asChild size="lg">
                  <a href="/zubair-arain-cv.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20" delay={200}>
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-y divide-border rounded-lg md:grid-cols-4 md:divide-x md:divide-y-0">
              {stats.map((stat, index) => (
                <div key={stat.label} className="p-6 text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-3 text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-20">
            <h3 className="text-center font-headline text-2xl font-semibold text-foreground">My Skillset</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm rounded-md">
                  {skill}
                </Badge>
              ))}
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

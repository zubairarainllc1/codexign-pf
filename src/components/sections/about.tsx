
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
  { icon: CheckCircle, value: "50+", label: "Projects Shipped" },
  { icon: Users, value: "30+", label: "Happy Clients" },
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

        <div className="mt-16 flex justify-center">
            <AnimatedSection delay={200}>
                <div className="relative h-64 w-64 lg:h-80 lg:w-80">
                <Image
                    src="https://i.ibb.co/TBnv0W1P/profile.png"
                    alt="Zubair Arain"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 backdrop-blur-sm"></div>
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-lg bg-accent/20 backdrop-blur-sm"></div>
                </div>
            </AnimatedSection>
        </div>

        <div className="mt-16">
          <AnimatedSection>
            <div className="space-y-6 text-base text-muted-foreground max-w-3xl mx-auto">
              <h3 className="font-headline text-2xl font-semibold text-foreground text-center">Who I Am</h3>
              <p className="text-center">
                I’m Zubair Arain (Codexign), a full-stack developer specializing in creating seamless, end-to-end digital solutions. From dynamic websites and robust APIs to intuitive mobile apps and innovative AI-powered features, I am passionate about building technology that not only functions flawlessly but also provides a delightful user experience.
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

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

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

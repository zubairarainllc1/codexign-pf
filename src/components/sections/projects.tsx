"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Eye, Github, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { projectsData } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            A selection of projects that I'm proud of.
          </p>
        </AnimatedSection>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.slice(0, 4).map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <span className="flex items-center text-sm font-semibold text-primary">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AITaglineGenerator } from '@/components/ai-tagline-generator';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '../animated-section';

export function HeroSection() {
  const [tagline, setTagline] = useState(
    'Full-Stack Engineer • AI Integrator • Building web, mobile & software that scale'
  );

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div 
          className={cn(
            "absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full",
            "bg-[radial-gradient(circle_farthest-side,rgba(79,70,229,0.2),rgba(255,255,255,0))]",
            "animate-[spin_20s_linear_infinite]"
          )}
        />
        <div 
          className={cn(
            "absolute bottom-0 right-[-20%] top-auto h-[500px] w-[500px] rounded-full",
            "bg-[radial-gradient(circle_farthest-side,rgba(34,211,238,0.2),rgba(255,255,255,0))]",
            "animate-[spin_25s_linear_infinite]"
          )}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 text-center">
        <AnimatedSection>
          <span className="font-headline text-lg font-medium text-primary">zubair arain</span>
          <h1 className="mt-2 font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Codexign
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="group mx-auto mt-6 max-w-3xl flex items-center justify-center gap-2">
            <p className="text-lg text-muted-foreground sm:text-xl">
              {tagline}
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#projects">
                <ArrowDown className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

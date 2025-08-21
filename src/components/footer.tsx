"use client";

import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
  ];

  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Link href="#home" className="flex items-center">
              <Image 
                src="https://i.ibb.co/XfGPJvYj/Codexign.png" 
                alt="Codexign Logo" 
                width={120} 
                height={30}
              />
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Crafting digital experiences, one line of code at a time.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Zubair Arain. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScrollSpy } from '@/lib/hooks/use-scroll-spy';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeSection = useScrollSpy(NAV_ITEMS.map(item => item.id), {
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ id, label, isMobile = false }: { id: string; label: string; isMobile?: boolean; }) => (
    <Link
      href={`#${id}`}
      onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
      className={cn(
        "relative py-2 text-sm font-medium transition-colors duration-300",
        activeSection === id
          ? "text-primary"
          : "text-foreground/70 hover:text-foreground",
        {
          "after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-transform after:duration-300": activeSection === id,
          "after:scale-x-0": activeSection !== id
        },
        isMobile && "text-lg"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <Image 
            src="https://i.ibb.co/XfGPJvYj/Codexign.png" 
            alt="Codexign Logo" 
            width={140} 
            height={35}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(item => <NavLink key={item.id} {...item} />)}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-sm sm:max-w-xs">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                     <Image 
                        src="https://i.ibb.co/XfGPJvYj/Codexign.png" 
                        alt="Codexign Logo" 
                        width={140} 
                        height={35}
                        priority
                      />
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col items-center gap-8">
                  {NAV_ITEMS.map(item => <NavLink key={item.id} {...item} isMobile />)}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

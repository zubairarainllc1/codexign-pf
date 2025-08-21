"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Mail, Copy, Send } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
  { name: 'GitHub', icon: Github, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
];

const directEmail = "codexignllc@gmail.com";

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is a placeholder. In a real application, you would send this data to a backend endpoint,
    // a service like Formspree, or a serverless function.
    console.log("Form submitted:", values);

    // For demonstration, we'll just show a success toast.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    form.reset();
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    toast({ title: "Email Copied!", description: "My email address is in your clipboard." });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-1">
             <Card>
              <CardHeader className="text-center">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Find me on social media or send a direct email.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Button onClick={copyEmail} className="w-full justify-start gap-3" variant="outline">
                  <Mail className="h-5 w-5" />
                  <span className="truncate">{directEmail}</span>
                  <Copy className="ml-auto h-4 w-4 text-muted-foreground" />
                </Button>

                <div className="flex justify-center space-x-2">
                  {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild>
                       {/* Add comment for user to replace '#' with actual social links */}
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-2" delay={150}>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll do my best to respond as quickly as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                           <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me about your project..." rows={5} {...field} />
                          </FormControl>
                           <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

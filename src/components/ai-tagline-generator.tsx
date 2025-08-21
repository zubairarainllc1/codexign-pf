"use client";

import { useState } from 'react';
import { Sparkles, Copy, Loader2 } from 'lucide-react';
import { suggestTaglines, type SuggestTaglinesOutput } from '@/ai/flows/suggest-taglines';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from './animated-section';

interface AITaglineGeneratorProps {
  onTaglineSelect: (tagline: string) => void;
}

export function AITaglineGenerator({ onTaglineSelect }: AITaglineGeneratorProps) {
  const [keywords, setKeywords] = useState('full-stack developer, AI, web, mobile, software');
  const [suggestions, setSuggestions] = useState<SuggestTaglinesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywords.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some keywords.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestTaglines({ keywords });
      setSuggestions(result);
    } catch (error) {
      console.error('Error generating taglines:', error);
      toast({
        title: 'Generation Failed',
        description: 'Could not generate taglines. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: 'Tagline copied to clipboard.',
    });
    onTaglineSelect(text);
  };

  return (
    <Card className="w-full max-w-lg border-0 shadow-none sm:border sm:shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Tagline Generator
        </CardTitle>
        <CardDescription>
          Enter some keywords about your skills and let AI craft the perfect tagline for you.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleGenerate}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Textarea
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., React, Node.js, AI enthusiast..."
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Taglines
              </>
            )}
          </Button>
        </CardContent>
      </form>
      {suggestions && suggestions.taglines.length > 0 && (
        <CardFooter className="flex-col items-start gap-4">
          <h3 className="text-sm font-semibold text-foreground">Suggestions:</h3>
          <div className="w-full space-y-2">
            {suggestions.taglines.map((tagline, index) => (
              <AnimatedSection delay={index * 100} key={index}>
                <div
                  className="group flex items-center justify-between rounded-lg border bg-secondary/30 p-3 text-sm"
                >
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{tagline}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(tagline)}
                    className="h-8 w-8 opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy tagline</span>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

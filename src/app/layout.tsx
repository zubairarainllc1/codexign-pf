import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontBody = Inter({ subsets: ['latin'], variable: '--font-body' });
const fontHeadline = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
});

const APP_NAME = "Codexign";
const APP_DESCRIPTION = "Zubair Arain's portfolio. A full-stack developer specializing in building web, mobile & software that scale.";

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} - by Zubair Arain`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  openGraph: {
    title: `${APP_NAME} - by Zubair Arain`,
    description: APP_DESCRIPTION,
    type: 'website',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: APP_NAME,
    images: [
      {
        url: 'https://your-domain.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - by Zubair Arain`,
    description: APP_DESCRIPTION,
    images: ['https://your-domain.com/og-image.png'], // Replace with your actual OG image URL
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Codexign",
            "url": "https://your-domain.com", // Replace with your actual domain
            "author": {
              "@type": "Person",
              "name": "Zubair Arain",
              "jobTitle": "Full-Stack Developer",
              "url": "https://your-domain.com" // Replace with your actual domain
            }
          })}}
        />
      </head>
      <body className={cn("font-body antialiased", fontBody.variable, fontHeadline.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

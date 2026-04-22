import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // SEO Dasar
  title: {
    default: 'Nathaniel Jonathan Rusli | AI and Data Enthusiast',
    template: '%s | Nathaniel Jonathan  Rusli'
  },
  description: 'Nathaniel Jonathan Rusli\'s Portfolio Website.',
  keywords: [
    'Nathaniel Jonathan Rusli',
    'Nathaniel JR', 
    'Software Engineer', 
    'AI Engineering', 
    'ITB', 
    'Quantitative Finance', 
    'Machine Learning',
    'Data Science' 
  ],
  authors: [{ name: 'Nathaniel Jonathan Rusli' }],
  creator: 'Nathaniel Jonathan Rusli',

  // OpenGraph (Preview for LinkedIn and WhatsApp)
  openGraph: {
    title: 'Nathaniel Jonathan Rusli | AI and Data Enthusiast',
    description: 'Nathaniel Jonathan Rusli\'s Portfolio Website',
    url: 'https://nathanieljr.dev',
    siteName: 'Nathaniel Portfolio',
    images: [
      {
        url: '/seo/nate-seo.png',
        width: 1200,
        height: 630,
        alt: 'Nathaniel Jonathan Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Jonathan Rusli | AI and Data Enthusiast',
    description: 'Nathaniel Jonathan Rusli\'s Portfolio Website',
    images: ['/seo/nate-seo.png'],
  },

  // SEO Robot
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-[100dvh] antialiased">
      <body className="min-h-[100dvh] flex flex-col bg-black text-white font-sans overscroll-y-none">
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://retrobuildcon.com'),
  title: {
    default: 'RBC | Retro Build Con - Premium Interior Design & Construction',
    template: '%s | Retro Build Con'
  },
  description: 'Transform your space with Retro Build Con - Bhubaneswar\'s leading interior design and construction company. Expert architectural services, modern designs, and premium craftsmanship.',
  keywords: ['interior design', 'construction', 'architecture', 'home renovation', 'Bhubaneswar', 'luxury homes', 'commercial design'],
  authors: [{ name: 'Divyajit Das' }],
  creator: 'Retro Build Con',
  publisher: 'Retro Build Con',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://retrobuildcon.com',
    siteName: 'Retro Build Con',
    title: 'RBC | Premium Interior Design & Construction Services in Bhubaneswar',
    description: 'Transform your space with Retro Build Con - Bhubaneswar\'s leading interior design and construction company.',
    images: [
      {
        url: 'https://res.cloudinary.com/deibtmhm1/image/upload/v1744644086/WhatsApp_Image_2025-03-14_at_11.44.00_AM-removebg-preview_zvha4g.png',
        width: 1200,
        height: 630,
        alt: 'Retro Build Con Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBC | Premium Interior Design & Construction Services',
    description: 'Transform your space with Retro Build Con - Bhubaneswar\'s leading interior design and construction company.',
    images: ['https://res.cloudinary.com/deibtmhm1/image/upload/v1744644086/WhatsApp_Image_2025-03-14_at_11.44.00_AM-removebg-preview_zvha4g.png'],
  },
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
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
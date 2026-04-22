import { Poppins, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyElements from './components/StickyElements';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--tw-poppins',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--tw-dm-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.thynkwise.ai'),
  title: 'Thynkwise',
  description:
    'Thynkwise delivers technology consulting, sales systems, AI experiences, digital services, and cloud infrastructure.',
  keywords:
    'Thynkwise, technology consulting, sales consulting, AI avatars, digital services, cloud infrastructure',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  openGraph: {
    type: 'website',
    siteName: 'Thynkwise',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Thynkwise Technologies',
              url: 'https://www.thynkwise.ai',
              logo: 'https://www.thynkwise.ai/logo.png',
              description:
                'Thynkwise is a technology and consulting company offering sales systems, AI experiences, digital delivery, and cloud infrastructure services.',
              knowsAbout: [
                'Technology Consulting',
                'Sales Consulting',
                'CRM Implementation',
                'AI Avatars',
                'Digital Services',
                'Cloud Infrastructure',
                'Cybersecurity',
                'Managed Services',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyElements />
        <script src="https://vibot.thynkwise.co.in/embed.js" data-bot-id="778340c8-d4c8-40ba-93c4-d3381dedfc31"></script>
      </body>
    </html>
  );
}

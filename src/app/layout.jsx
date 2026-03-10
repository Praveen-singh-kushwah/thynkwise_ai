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
  title: 'Thynkwise | Managed Cloud, Cybersecurity & GPU Services — AWS · Azure · GCP',
  description:
    'Thynkwise is a multi-cloud managed services company. Official reseller of AWS, Azure, Google Cloud & Indian sovereign clouds. End-to-end cloud migration, cybersecurity, GPUaaS, and FinOps — one partner, one SLA.',
  keywords:
    'managed cloud services, multi-cloud management, AWS reseller, Azure managed services, Google Cloud partner, cloud migration, GPUaaS, cybersecurity managed services, cloud cost optimization, BFSI cloud',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  openGraph: {
    type: 'website',
    title: 'Thynkwise | Managed Cloud, Cybersecurity & GPU Services — AWS · Azure · GCP',
    description:
      'Thynkwise is a multi-cloud managed services company. Official reseller of AWS, Azure, Google Cloud & Indian sovereign clouds.',
    url: 'https://www.thynkwise.ai/',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Thynkwise | Managed Cloud, Cybersecurity & GPU Services — AWS · Azure · GCP',
    description:
      'Thynkwise is a multi-cloud managed services company. Official reseller of AWS, Azure, Google Cloud & Indian sovereign clouds.',
    images: ['https://www.thynkwise.ai/assets/og-home.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        {/* JetBrains Mono — not in next/font/google, load via link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.thynkwise.ai/" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Thynkwise Technologies',
              url: 'https://www.thynkwise.ai',
              logo: 'https://www.thynkwise.ai/assets/logo.png',
              description:
                'Thynkwise is a multi-cloud managed services company — official reseller and managed partner for AWS, Microsoft Azure, Google Cloud, and Indian sovereign clouds.',
              knowsAbout: ['Cloud Computing', 'Managed Services', 'AWS', 'Azure', 'Google Cloud', 'Cybersecurity', 'GPU Computing', 'FinOps', 'Cloud Migration', 'BFSI Cloud', 'Sovereign Cloud', 'AI Infrastructure'],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyElements />
      </body>
    </html>
  );
}
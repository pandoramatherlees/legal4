import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import StructuredData from '@/components/structured-data';
import { LEGAL_SERVICE_SCHEMA } from '@/data/structured-data';

const SITE_URL = 'https://immigration.taylorhampton.co.uk';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Taylor Hampton Solicitors | UK Immigration',
    template: '%s | Taylor Hampton Solicitors',
  },
  description:
    'Specialist UK immigration solicitors advising on Global Talent, Spouse, Skilled Worker visas and more. Based in London, serving clients worldwide.',
  openGraph: {
    siteName: 'Taylor Hampton Solicitors — UK Immigration',
    title: 'Taylor Hampton Solicitors UK Immigration',
    description:
      'Specialist UK immigration solicitors advising on Global Talent, Spouse, Skilled Worker visas and more.',
    images: [
      {
        url: '/assets/social/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Taylor Hampton Solicitors UK Immigration',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/social/twitter-card.png'],
  },
  icons: {
    icon: [
      { url: '/assets/logos/favicon.ico' },
      { url: '/assets/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/logos/apple-touch-icon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  themeColor: '#1a2332',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <StructuredData data={LEGAL_SERVICE_SCHEMA} />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <div className="min-h-screen bg-cream">
          <Header />
          <main id="main-content" className="pt-[68px] md:pt-[84px]">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Taylor Hampton Solicitors | UK Immigration',
  description: 'Taylor Hampton Solicitors UK Immigration — Experts in UK Global Talent Visas and UK Immigration Law for the creative industries.',
  openGraph: {
    title: 'Taylor Hampton Solicitors UK Immigration',
    description: 'Experts in UK Global Talent Visas and UK Immigration Law',
    images: [{ url: '/assets/social/og-image.png', width: 1200, height: 630 }],
    type: 'website',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-cream">
          <Header />
          <main className="pt-[68px] md:pt-[84px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

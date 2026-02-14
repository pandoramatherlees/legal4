import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BtnGold, BtnOutline } from '@/components/atoms';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream">
      <div className="text-center px-6 py-20 max-w-lg mx-auto">
        <p className="text-gold text-[0.78rem] font-semibold tracking-[0.2em] uppercase mb-4">
          404 Error
        </p>
        <h1 className="font-serif text-[2rem] md:text-[2.6rem] font-bold text-navy mb-4 text-balance">
          Page Not Found
        </h1>
        <p className="text-secondary text-[0.94rem] leading-relaxed mb-10">
          The page you are looking for does not exist or may have been moved. Please use the links
          below to navigate back to our site.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BtnGold href="/">
            Return to Homepage <ArrowRight size={15} />
          </BtnGold>
          <BtnOutline href="/contact">
            Contact Us
          </BtnOutline>
        </div>
      </div>
    </div>
  );
}

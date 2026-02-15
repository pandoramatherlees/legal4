import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { LEGAL_LINKS } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 text-[0.85rem]">
      {/* Awards */}
      <div className="border-b border-white/[0.06] py-10">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8 text-center">
          <p className="text-white/30 text-[0.65rem] tracking-[0.25em] uppercase mb-7">Recognition &amp; Accreditation</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/badges/sme500-award-2026-web.png" alt="SME 500 UK — Best Immigration Law Firm of the Year 2026" width={120} height={88} className="h-[76px] md:h-[88px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/badges/legal100-award-2025-web.jpeg" alt="Lawyer International Legal 100 — 2025 Winner" width={120} height={88} className="h-[76px] md:h-[88px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <a href="https://www.sra.org.uk/consumers/register/organisation/?sraNumber=558225" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/badges/sra-regulated-badge-web.png" alt="Regulated by the Solicitors Regulation Authority" width={100} height={72} className="h-[60px] md:h-[72px] w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Col 1 */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rotate-45 rounded-[2px] bg-navy-brand border border-gold/20" />
                <span className="absolute inset-0 flex items-center justify-center font-serif italic text-white text-xs">th</span>
              </div>
              <div className="leading-none">
                <span className="block font-serif text-white text-[0.95rem] font-bold">Taylor Hampton</span>
                <span className="block text-gold-light text-[0.62rem] tracking-[0.18em] uppercase mt-px">Solicitors UK Immigration</span>
              </div>
            </div>
            <p className="text-[0.82rem] italic text-white/40 mb-5 leading-relaxed font-serif">
              &quot;Experts in UK Global Talent Visas and UK Immigration Law&quot;
            </p>
            <div className="space-y-2.5 text-[0.82rem]">
              <p className="flex items-start gap-2.5"><MapPin size={13} className="text-gold mt-[3px] shrink-0" /> 38 Southwark Bridge Road, London SE1 9EU</p>
              <p className="flex items-center gap-2.5"><Phone size={13} className="text-gold shrink-0" /> <a href="tel:+442031430322" className="hover:text-white transition-colors">+44 203 143 0322</a></p>
              <p className="flex items-center gap-2.5"><Mail size={13} className="text-gold shrink-0" /> <a href="mailto:enquiries@taylorhampton.co.uk" className="hover:text-white transition-colors">enquiries@taylorhampton.co.uk</a></p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif text-white text-[0.85rem] font-bold mb-4 tracking-[0.02em]">Services</h4>
            <div className="space-y-2.5 text-[0.82rem]">
              {[
                { href: '/global-talent', l: 'Global Talent Visas' },
                { href: '/spouse', l: 'Spouse & Partner Visas' },
                { href: '/skilled-worker', l: 'Skilled Worker Visas' },
                { href: '/fees', l: 'Our Fees' },
                { href: '/contact', l: 'Contact Us' },
              ].map((x) => <Link key={x.href} href={x.href} className="block hover:text-gold transition-colors">{x.l}</Link>)}
              <a href="/#faq" className="block hover:text-gold transition-colors">FAQ</a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-serif text-white text-[0.85rem] font-bold mb-4 tracking-[0.02em]">Legal</h4>
            <div className="space-y-2.5 text-[0.82rem]">
              {LEGAL_LINKS.map((x) => (
                <Link key={x.href} href={x.href} className="block hover:text-gold transition-colors">
                  {x.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 space-y-3">
          <p className="text-[0.72rem] leading-relaxed">Taylor Hampton Solicitors is authorised and regulated by the Solicitors Regulation Authority (SRA Number: 83082065). VAT Registration Number: to be confirmed.</p>
          <p className="text-[0.72rem] leading-relaxed text-white/40">This website provides general information about UK immigration law. It does not constitute legal advice. Please contact us for advice specific to your circumstances.</p>
          <p className="text-[0.68rem] text-white/30">&copy; {new Date().getFullYear()} Taylor Hampton Solicitors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

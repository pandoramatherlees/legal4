'use client';
import { useScrollReveal } from './hooks';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function GoldRule({ align = 'center', className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-6 ${align === 'left' ? 'justify-start' : 'justify-center'} ${className}`}>
      <span className="block h-[2px] w-14 bg-gradient-to-r from-transparent to-gold" />
      <span className="block w-[8px] h-[8px] rotate-45 border-[1.5px] border-gold" />
      <span className="block h-[2px] w-14 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

export function SectionWrap({ children, bg = 'cream', className = '', id, pattern = false, goldTop = false }) {
  const ref = useScrollReveal();
  const bgMap = {
    cream: 'bg-cream',
    white: 'bg-warm-white',
    navy: 'bg-navy',
    'navy-brand': 'bg-navy-brand',
  };
  return (
    <section ref={ref} id={id} className={`relative py-20 md:py-28 ${bgMap[bg] || ''} ${className}`}>
      {goldTop && <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />}
      {pattern && <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/assets/decorative/subtle-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '20px 20px' }} />}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ children, sub, align = 'center', light = false }) {
  const a = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`${a} mb-12 animate-on-scroll`}>
      <h2 className={`font-serif text-[1.7rem] md:text-[2.1rem] font-bold leading-snug ${light ? 'text-white' : 'text-navy'}`}>{children}</h2>
      <GoldRule align={align} />
      {sub && <p className={`text-[0.94rem] max-w-2xl leading-relaxed mx-auto ${light ? 'text-white/60' : 'text-secondary'}`}>{sub}</p>}
    </div>
  );
}

export function BtnGold({ children, onClick, href, className = '' }) {
  const cls = `group inline-flex items-center gap-2.5 bg-gold text-white text-[0.82rem] font-semibold tracking-[0.08em] uppercase px-7 py-[14px] rounded-sm transition-all duration-300 hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(184,148,76,0.35)] hover:-translate-y-[1px] ${className}`;
  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function BtnOutline({ children, onClick, href, light = false, className = '' }) {
  const base = light
    ? 'border-white/40 text-white hover:bg-white/10 hover:border-white/70'
    : 'border-gold/60 text-gold hover:bg-gold hover:text-white hover:border-gold';
  const cls = `group inline-flex items-center gap-2.5 border text-[0.82rem] font-semibold tracking-[0.08em] uppercase px-7 py-[14px] rounded-sm transition-all duration-300 hover:-translate-y-[1px] ${base} ${className}`;
  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function Hero({ image, title, subtitle, children }) {
  return (
    <div className="relative min-h-[480px] md:min-h-[540px] flex items-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-8 pb-14 pt-32 md:pt-40">
        <h1 className="font-serif text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-white leading-[1.15] mb-5 max-w-[680px] animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-[1.05rem] md:text-lg max-w-[560px] leading-relaxed mb-9" style={{ animation: 'fadeInUp 0.7s ease-out 0.12s forwards', opacity: 0 }}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="flex flex-wrap gap-4" style={{ animation: 'fadeInUp 0.7s ease-out 0.24s forwards', opacity: 0 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export function CtaBanner({ heading, sub, btnLabel = 'Get in Touch' }) {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy-brand" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url(/assets/decorative/subtle-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '20px 20px' }} />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8 text-center">
        <h2 className="font-serif text-[1.6rem] md:text-[2rem] font-bold text-white mb-3">{heading}</h2>
        {sub && <p className="text-white/60 text-[0.92rem] mb-9 max-w-lg mx-auto">{sub}</p>}
        <BtnGold href="/contact">{btnLabel} <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></BtnGold>
      </div>
    </div>
  );
}

export function ReviewedNote() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-5">
      <p className="text-secondary/60 text-[0.72rem] italic">Date last reviewed: February 2026. Visa rules and criteria must be checked against current Home Office guidance before application.</p>
    </div>
  );
}

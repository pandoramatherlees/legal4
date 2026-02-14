import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Award, Shield, Users,
  Briefcase, Heart, Globe, Star, Scale, FileText, ArrowRight, CheckCircle2,
  Building2, Music, Palette, Clapperboard, GraduationCap, Handshake,
  BadgeCheck, PoundSterling, Send, ExternalLink, Sparkles, Theater,
  CircleDot, Diamond, ChevronDown, Quote, Landmark
} from 'lucide-react';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HOOKS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.animate-on-scroll').forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  });
  return ref;
}

function useScrollPosition() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return y;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DESIGN ATOMS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function GoldRule({ align = 'center', className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-6 ${align === 'left' ? 'justify-start' : 'justify-center'} ${className}`}>
      <span className="block h-[2px] w-14 bg-gradient-to-r from-transparent to-gold" />
      <span className="block w-[8px] h-[8px] rotate-45 border-[1.5px] border-gold" />
      <span className="block h-[2px] w-14 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

function SectionWrap({ children, bg = 'cream', className = '', id, pattern = false, goldTop = false }) {
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

function SectionHeading({ children, sub, align = 'center', light = false }) {
  const a = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`${a} mb-12 animate-on-scroll`}>
      <h2 className={`font-serif text-[1.7rem] md:text-[2.1rem] font-bold leading-snug ${light ? 'text-white' : 'text-navy'}`}>{children}</h2>
      <GoldRule align={align} />
      {sub && <p className={`text-[0.94rem] max-w-2xl leading-relaxed mx-auto ${light ? 'text-white/60' : 'text-secondary'}`}>{sub}</p>}
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUTTONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function BtnGold({ children, onClick, className = '' }) {
  return (
    <button onClick={onClick} className={`group inline-flex items-center gap-2.5 bg-gold text-white text-[0.82rem] font-semibold tracking-[0.08em] uppercase px-7 py-[14px] rounded-sm transition-all duration-300 hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(184,148,76,0.35)] hover:-translate-y-[1px] ${className}`}>
      {children}
    </button>
  );
}

function BtnOutline({ children, onClick, light = false, className = '' }) {
  const base = light
    ? 'border-white/40 text-white hover:bg-white/10 hover:border-white/70'
    : 'border-gold/60 text-gold hover:bg-gold hover:text-white hover:border-gold';
  return (
    <button onClick={onClick} className={`group inline-flex items-center gap-2.5 border text-[0.82rem] font-semibold tracking-[0.08em] uppercase px-7 py-[14px] rounded-sm transition-all duration-300 hover:-translate-y-[1px] ${base} ${className}`}>
      {children}
    </button>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function Hero({ image, title, subtitle, children }) {
  return (
    <div className="relative min-h-[480px] md:min-h-[540px] flex items-end overflow-hidden">
      {/* Image */}
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* Content */}
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HEADER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'global-talent', label: 'Global Talent Visas' },
  { id: 'spouse', label: 'Spouse & Partner Visas' },
  { id: 'skilled-worker', label: 'Skilled Worker Visas' },
  { id: 'fees', label: 'Fees' },
  { id: 'contact', label: 'Contact' },
];

function Header({ page, go }) {
  const y = useScrollPosition();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;

  const nav = (id) => { go(id); setOpen(false); };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy shadow-lg shadow-navy/20' : 'bg-navy/90 backdrop-blur-sm'}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-[68px] md:h-[84px]">
        {/* Logo */}
        <button onClick={() => nav('home')} className="flex items-center gap-3.5 group" aria-label="Home">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rotate-45 rounded-[3px] bg-navy-brand border border-gold/25 group-hover:border-gold/50 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center font-serif italic text-white text-[0.85rem] tracking-tight">th</span>
          </div>
          <div className="hidden sm:block leading-none">
            <span className="block font-serif text-white text-[1.08rem] font-bold tracking-[0.02em]">Taylor Hampton</span>
            <span className="block text-gold-light text-[0.72rem] tracking-[0.22em] uppercase mt-0.5">Solicitors UK Immigration</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => nav(n.id)}
              className={`px-3.5 py-2 text-[1rem] tracking-[0.02em] rounded-sm transition-colors duration-200 ${page === n.id ? 'text-gold' : 'text-white/90 hover:text-white'}`}>
              {n.label}
            </button>
          ))}
          <BtnGold onClick={() => nav('contact')} className="ml-4 !py-[10px] !px-6 !text-[0.88rem]">
            Get in Touch
          </BtnGold>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white/80 hover:text-white p-2 -mr-2" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-navy border-t border-white/[0.06] px-6 py-5 space-y-1">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => nav(n.id)}
              className={`block w-full text-left px-4 py-3 rounded-sm text-[0.88rem] transition-colors ${page === n.id ? 'text-gold bg-white/[0.04]' : 'text-white/90 hover:text-white hover:bg-white/[0.03]'}`}>
              {n.label}
            </button>
          ))}
          <BtnGold onClick={() => nav('contact')} className="!w-full !justify-center mt-4">
            Get in Touch
          </BtnGold>
        </nav>
      </div>
    </header>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FOOTER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function Footer({ go }) {
  return (
    <footer className="bg-navy text-white/60 text-[0.85rem]">
      {/* Awards */}
      <div className="border-b border-white/[0.06] py-10">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8 text-center">
          <p className="text-white/30 text-[0.65rem] tracking-[0.25em] uppercase mb-7">Recognition &amp; Accreditation</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            <img src="/assets/badges/sme500-award-2026-web.png" alt="SME 500 UK — Best Immigration Law Firm of the Year 2026" className="h-[76px] md:h-[88px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/assets/badges/legal100-award-2025-web.jpeg" alt="Lawyer International Legal 100 — 2025 Winner" className="h-[76px] md:h-[88px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <a href="https://www.sra.org.uk/consumers/register/" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity duration-300">
              <img src="/assets/badges/sra-regulated-badge-web.png" alt="Regulated by the Solicitors Regulation Authority" className="h-[60px] md:h-[72px] object-contain" />
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
              "Experts in UK Global Talent Visas and UK Immigration Law"
            </p>
            <div className="space-y-2.5 text-[0.82rem]">
              <p className="flex items-start gap-2.5"><MapPin size={13} className="text-gold mt-[3px] shrink-0" /> 38 Southwark Bridge Road, London SE1 9EU</p>
              <p className="flex items-center gap-2.5"><Phone size={13} className="text-gold shrink-0" /> <a href="tel:02074275970" className="hover:text-white transition-colors">020 7427 5970</a></p>
              <p className="flex items-center gap-2.5"><Mail size={13} className="text-gold shrink-0" /> <a href="mailto:enquiries@taylorhampton.co.uk" className="hover:text-white transition-colors">enquiries@taylorhampton.co.uk</a></p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif text-white text-[0.85rem] font-bold mb-4 tracking-[0.02em]">Services</h4>
            <div className="space-y-2.5 text-[0.82rem]">
              {[
                { id: 'global-talent', l: 'Global Talent Visas' },
                { id: 'spouse', l: 'Spouse & Partner Visas' },
                { id: 'skilled-worker', l: 'Skilled Worker Visas' },
                { id: 'fees', l: 'Our Fees' },
                { id: 'contact', l: 'Contact Us' },
              ].map((x) => <button key={x.id} onClick={() => go(x.id)} className="block hover:text-gold transition-colors">{x.l}</button>)}
            </div>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-serif text-white text-[0.85rem] font-bold mb-4 tracking-[0.02em]">Legal</h4>
            <div className="space-y-2.5 text-[0.82rem]">
              <p className="cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
              <p className="cursor-pointer hover:text-white transition-colors">Terms of Use</p>
              <p className="cursor-pointer hover:text-white transition-colors">Complaints</p>
              <p className="cursor-pointer hover:text-white transition-colors">Accessibility</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 space-y-3">
          <p className="text-[0.72rem] leading-relaxed">Taylor Hampton Solicitors is authorised and regulated by the Solicitors Regulation Authority (SRA Number: 83082065). VAT Registration Number: to be confirmed.</p>
          <p className="text-[0.72rem] leading-relaxed text-white/40">This website provides general information about UK immigration law. It does not constitute legal advice. Please contact us for advice specific to your circumstances.</p>
          <p className="text-[0.68rem] text-white/30">&copy; 2026 Taylor Hampton Solicitors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CTA BANNER (reused)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function CtaBanner({ heading, sub, btnLabel = 'Get in Touch', go }) {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy-brand" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url(/assets/decorative/subtle-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '20px 20px' }} />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8 text-center">
        <h2 className="font-serif text-[1.6rem] md:text-[2rem] font-bold text-white mb-3">{heading}</h2>
        {sub && <p className="text-white/60 text-[0.92rem] mb-9 max-w-lg mx-auto">{sub}</p>}
        <BtnGold onClick={() => go('contact')}>{btnLabel} <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></BtnGold>
      </div>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// REVIEWED NOTE (reused)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function ReviewedNote() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-5">
      <p className="text-secondary/60 text-[0.72rem] italic">Date last reviewed: February 2026. Visa rules and criteria must be checked against current Home Office guidance before application.</p>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 1 — HOME
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function HomePage({ go }) {
  return (
    <>
      <Hero
        image="/assets/photos/IMG_1983.jpeg"
        title="Specialists in UK Immigration for the Creative Industries"
        subtitle="Expert legal guidance on Global Talent visas, Skilled Worker visas and family immigration — trusted by artists, musicians, performers and cultural organisations worldwide."
      >
        <BtnGold onClick={() => go('global-talent')}>Explore Global Talent Visas <ChevronRight size={15} /></BtnGold>
        <BtnOutline light onClick={() => go('contact')}>Contact Us</BtnOutline>
      </Hero>

      {/* ── Intro ── */}
      <SectionWrap bg="white" goldTop>
        <div className="max-w-[680px] mx-auto text-center animate-on-scroll">
          <SectionHeading>Focused Immigration Expertise for Exceptional Talent</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Taylor Hampton provides strategic UK immigration advice with a specialism in the creative and cultural sectors. We understand the unique needs of international artists, musicians, performers and the organisations that support them.</p>
            <p>Our deep understanding of Global Talent visa routes means we work closely with arts companies, cultural organisations, galleries, music institutions, conservatoires, theatre companies, artist management agencies, music promoters and live performance venues.</p>
            <p>With an international reach, we advise clients worldwide who are seeking to live and work in the United Kingdom — supporting inward talent and facilitating UK-based creative work.</p>
          </div>
        </div>
      </SectionWrap>

      {/* ── Services ── */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading>Our Immigration Services</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { icon: <Sparkles size={26} />, title: 'Global Talent Visas', desc: 'For internationally recognised artists, musicians, performers, directors and creative leaders. Our primary specialism.', id: 'global-talent' },
            { icon: <Heart size={26} />, title: 'Spouse & Partner Visas', desc: 'Supporting families. Expert guidance for partners and spouses of visa holders seeking to build their lives in the UK.', id: 'spouse' },
            { icon: <Briefcase size={26} />, title: 'Skilled Worker Visas', desc: 'For UK employers and skilled professionals. Navigating sponsorship, compliance and applications.', id: 'skilled-worker' },
          ].map((s, i) => (
            <button key={i} onClick={() => go(s.id)}
              className={`animate-on-scroll text-left bg-white rounded-md p-8 border border-navy/[0.06] border-t-[3px] border-t-gold/40 shadow-[0_2px_16px_rgba(26,35,50,0.05)] hover:shadow-[0_12px_40px_rgba(184,148,76,0.12)] hover:-translate-y-1 transition-all duration-400 group`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-2.5">{s.title}</h3>
              <p className="text-secondary text-[0.85rem] leading-relaxed mb-5">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-gold text-[0.78rem] font-semibold tracking-[0.04em] uppercase group-hover:gap-2.5 transition-all duration-300">
                Learn More <ArrowRight size={13} />
              </span>
            </button>
          ))}
        </div>
      </SectionWrap>

      {/* ── Why Taylor Hampton ── */}
      <SectionWrap bg="navy" pattern>
        <SectionHeading light>Why Choose Taylor Hampton</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            { icon: <Palette size={20} />, t: 'Recognised expertise in creative sector immigration' },
            { icon: <Building2 size={20} />, t: 'Trusted by leading arts organisations and cultural institutions' },
            { icon: <Users size={20} />, t: 'Responsive, personal service from qualified immigration solicitors' },
            { icon: <PoundSterling size={20} />, t: 'Clear, transparent pricing with no hidden fees' },
            { icon: <Award size={20} />, t: 'Part of an established, award-winning London law practice' },
          ].map((d, i) => (
            <div key={i} className="animate-on-scroll flex items-start gap-4 p-5 rounded-md bg-white/[0.05] border border-white/[0.08]" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-gold shrink-0 mt-px">{d.icon}</div>
              <p className="text-white/80 text-[0.88rem] leading-relaxed">{d.t}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* ── About the Firm ── */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <SectionHeading align="left">Part of Taylor Hampton Solicitors</SectionHeading>
            <div className="space-y-4 text-body text-[0.9rem] leading-[1.75]">
              <p>Taylor Hampton's UK Immigration Practice is part of Taylor Hampton Solicitors, founded on the simple mission to uphold our clients' reputation. We value excellence and professionalism and show this through the continued results achieved with every case we are instructed on.</p>
              <p>As recognised by Chambers &amp; Partners in their Defamation/Reputation Management (UK Wide) 2026 rankings and by the Legal 500 for Reputation Management as a "Firm to Watch" in 2026.</p>
              <p>Our exceptional achievements include acting for claimants in landmark cases which led to the enactment by Parliament of the "serious harm to reputation" test in the Defamation Act 2013, as well as the pivotal 2019 case of <em className="text-navy font-semibold not-italic">Lachaux v Independent Newspapers</em> in the Supreme Court. This case established the principle that serious harm to reputation should be assessed by reference to the impact that the statement is actually shown to have had. In the realm of privacy law, the firm was involved in the case of <em className="text-navy font-semibold not-italic">Gulati v MGN</em>, which led to hugely increased awards of damages in privacy lawsuits.</p>
              <p>Taylor Hampton has also been at the forefront of the phone hacking litigation against News Group Newspapers. This led to the closure of the <em>News of the World</em> newspaper, the initiation of the Leveson Inquiry and the blocking of News Corporation's takeover bid for BSkyB. Additionally, Taylor Hampton played a key role in initiating class actions against Mirror Group Newspapers.</p>
              <p>We are proud to represent a diverse range of clients, from A-list celebrities to small businesses, always prioritising their personal and commercial objectives at every stage of the legal process.</p>
            </div>
          </div>
          <div className="lg:col-span-5 animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="relative">
              <img src="/assets/photos/pexels-sonya-livshits-113472440-9828321.jpg" alt="London street scene" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 rounded-md -z-10" />
            </div>
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Ready to discuss your immigration needs?" sub="Our specialist immigration team is here to help. Contact us for a confidential consultation." go={go} />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 2 — GLOBAL TALENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function GlobalTalentPage({ go }) {
  return (
    <>
      <Hero
        image="/assets/photos/pexels-jdominici-269128.jpg"
        title="Global Talent Visa — Arts, Music & Creative Industries"
        subtitle="The Global Talent visa route enables internationally recognised artists, musicians, performers and creative professionals to live and work in the UK without a sponsor."
      />

      {/* What is it */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">What is the Global Talent Visa?</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>The Global Talent visa is designed for individuals who are leaders or emerging leaders in their field. It is one of the most flexible visa routes available for talented professionals seeking to establish themselves in the United Kingdom.</p>
            <p>Unlike many other immigration routes, the Global Talent visa does not require a job offer or sponsor. Holders can work freely, be self-employed, change roles and take on multiple projects without restriction.</p>
            <p>The route can lead to settlement (Indefinite Leave to Remain) and, in time, British citizenship. Applications are endorsed through designated competent bodies relevant to the applicant's field of expertise.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Who Can Apply */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading sub="The Global Talent visa is suitable for individuals across the arts, music, theatre and creative industries, including:">Who Can Apply?</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Palette size={20} />, t: 'Visual artists, sculptors and installation artists' },
            { icon: <Music size={20} />, t: 'Musicians, composers, conductors and musical directors' },
            { icon: <Theater size={20} />, t: 'Actors, theatre directors, choreographers and performers' },
            { icon: <Clapperboard size={20} />, t: 'Film and television creatives' },
            { icon: <Diamond size={20} />, t: 'Fashion designers and architects with international recognition' },
            { icon: <Building2 size={20} />, t: 'Senior leaders and executives in arts and cultural organisations' },
            { icon: <Award size={20} />, t: 'Individuals who have received major prizes, awards or critical recognition' },
            { icon: <Sparkles size={20} />, t: 'Emerging talent with demonstrable potential to lead in their field' },
          ].map((d, i) => (
            <div key={i} className="animate-on-scroll flex items-start gap-3 bg-white rounded-md p-5 border border-navy/[0.06] shadow-[0_1px_8px_rgba(26,35,50,0.03)]" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="text-gold shrink-0 mt-px">{d.icon}</div>
              <p className="text-body text-[0.85rem] leading-relaxed">{d.t}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* Endorsement */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">The Endorsement Process</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Applications for the Global Talent visa require endorsement from a designated body recognised by the Home Office. For applicants working in arts and culture, Arts Council England is the relevant endorsing body.</p>
            <p>The endorsement assesses whether the applicant is a recognised leader or an emerging leader with exceptional promise in their field. The assessment considers evidence of the applicant's achievements, standing and contribution to their discipline.</p>
            <p>Taylor Hampton guides clients through the entire endorsement process, helping to compile compelling evidence portfolios that present their careers and accomplishments in the strongest possible terms.</p>
          </div>
        </div>
      </SectionWrap>

      {/* How we help */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading>How Taylor Hampton Supports Your Application</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[720px] mx-auto">
          {[
            'Initial assessment of eligibility and strength of application',
            'Strategic advice on evidence gathering and presentation',
            'Preparation and review of the endorsement application',
            'Full visa application management following successful endorsement',
            'Advice on dependants, travel and long-term settlement planning',
            'Liaison with arts organisations, galleries, institutions and promoters where relevant',
          ].map((t, i) => (
            <div key={i} className="animate-on-scroll flex items-start gap-3" style={{ transitionDelay: `${i * 50}ms` }}>
              <CheckCircle2 size={17} className="text-gold shrink-0 mt-[3px]" />
              <p className="text-body text-[0.88rem] leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* Organisations */}
      <SectionWrap bg="white" goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 animate-on-scroll">
            <SectionHeading align="left">Supporting Arts Organisations and Cultural Partners</SectionHeading>
            <p className="text-body text-[0.92rem] leading-[1.75] mb-6">Taylor Hampton works with a wide range of creative and cultural organisations, providing immigration advice that supports their international programmes and recruitment.</p>
            <div className="space-y-3">
              {[
                'Galleries and exhibition spaces bringing international artists to the UK',
                'Music institutions, conservatoires and orchestras recruiting overseas talent',
                'Theatre companies and producers engaging international performers and directors',
                'Artist management agencies, music management companies and promoters',
                'Live performance venues and festival organisers',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-gold shrink-0 mt-[3px]" />
                  <p className="text-body text-[0.88rem] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <img src="/assets/photos/pexels-streetlevelphotos-11796156.jpg" alt="Red bus near Parliament" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Discuss your Global Talent visa application with our specialist team" go={go} />
      <ReviewedNote />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 3 — SPOUSE & PARTNER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function SpousePage({ go }) {
  return (
    <>
      <Hero
        image="/assets/photos/pexels-yosstraore-2611465.jpg"
        title="Spouse & Partner Visas"
        subtitle="Expert guidance for partners and families navigating UK immigration together."
      />

      {/* Overview */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Overview</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>The spouse and partner visa routes enable the partners and families of those living in the United Kingdom to join them and build a life together. These routes are available to spouses, civil partners, unmarried partners and fianc&eacute;(e)s of British citizens or persons settled in the UK.</p>
            <p>Partner visas are also available to those joining individuals who hold certain immigration permissions, including Global Talent visa holders and Skilled Worker visa holders.</p>
            <p>The route leads to settlement after a qualifying period, providing a clear and structured pathway to permanent residence in the United Kingdom. Applications require evidence of a genuine and subsisting relationship, alongside meeting financial requirements and demonstrating suitable accommodation arrangements.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Considerations */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading>Key Considerations</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          {[
            { h: 'Financial Requirements', p: 'Applicants must meet a minimum income threshold. We advise on how the financial requirement is assessed and the evidence needed to satisfy it.' },
            { h: 'Evidence of Relationship', p: 'The Home Office requires detailed evidence that the relationship is genuine and subsisting. We guide you on what to include and how to present it.' },
            { h: 'English Language', p: 'Most applicants must demonstrate English language ability. We advise on the requirements and available exemptions.' },
            { h: 'Applications from Abroad & Within the UK', p: 'Whether you are applying to enter the UK for the first time or switching from another visa route, we manage both in-country and overseas applications.' },
            { h: 'Extensions & Settlement', p: 'We support applications for extending your leave and, when eligible, applying for Indefinite Leave to Remain.' },
            { h: 'Complex Situations', p: 'Previous immigration history, refusals or relationship changes can be sensitively addressed with the right legal guidance.' },
          ].map((c, i) => (
            <div key={i} className="animate-on-scroll bg-white rounded-md p-7 border border-navy/[0.06] border-l-[3px] border-l-gold/35 shadow-[0_2px_12px_rgba(26,35,50,0.04)]" style={{ transitionDelay: `${i * 50}ms` }}>
              <h3 className="font-serif font-bold text-navy text-[1rem] mb-2">{c.h}</h3>
              <p className="text-secondary text-[0.85rem] leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* How we help */}
      <SectionWrap bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 animate-on-scroll order-2 lg:order-1">
            <img src="/assets/photos/pexels-matreding-16124559.jpg" alt="Elegant London residential street" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
          </div>
          <div className="lg:col-span-7 animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: '80ms' }}>
            <SectionHeading align="left">How We Help</SectionHeading>
            <p className="text-body text-[0.92rem] leading-[1.75] mb-6">We understand how important family immigration is. Our approach is thorough, supportive and sensitive to the personal circumstances of every client.</p>
            <div className="space-y-3">
              {[
                'Thorough assessment of eligibility before application',
                'Guidance on compiling evidence and meeting financial requirements',
                'Application preparation and submission',
                'Advice on extensions, further leave and settlement applications',
                'Sensitive handling of personal and family circumstances',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-gold shrink-0 mt-[3px]" />
                  <p className="text-body text-[0.88rem] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="We understand how important family immigration is" sub="Contact us to discuss your situation in confidence." go={go} />
      <ReviewedNote />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 4 — SKILLED WORKER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function SkilledWorkerPage({ go }) {
  return (
    <>
      <Hero
        image="/assets/photos/pexels-chaitaastic-2031726.jpg"
        title="Skilled Worker Visas"
        subtitle="Supporting UK employers and skilled professionals with sponsor licence applications, compliance and visa management."
      />

      {/* Overview */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Overview</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>The Skilled Worker visa is the principal route for individuals who have a confirmed job offer from a UK employer holding a valid sponsor licence. It covers a wide range of roles and sectors across the UK economy.</p>
            <p>To qualify, the role must meet minimum skill level and salary thresholds set by the Home Office. The visa can lead to settlement after a qualifying period, providing a clear pathway to long-term residence in the United Kingdom.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Employers */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <SectionHeading align="left">Guidance for UK Employers</SectionHeading>
            <p className="text-body text-[0.92rem] leading-[1.75] mb-6">We advise employers at every stage of the sponsorship process, from initial licence applications through to ongoing compliance.</p>
            <div className="space-y-3">
              {[
                'Sponsor licence applications — initial and renewal',
                'Compliance duties and record-keeping obligations',
                'Certificate of Sponsorship (CoS) assignments',
                'Right to work checks and ongoing monitoring',
                'Risk of enforcement action for non-compliance',
                'Supporting HR teams and management',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-gold shrink-0 mt-[3px]" />
                  <p className="text-body text-[0.88rem] leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <img src="/assets/photos/pexels-lina-2773700.jpg" alt="Underground sign at Canary Wharf" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </SectionWrap>

      {/* Individuals */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Guidance for Skilled Workers</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {[
              'Eligibility assessment and role suitability',
              'Salary requirements and going rates',
              'Changing employer while on a Skilled Worker visa',
              'Extending leave and applying for settlement',
              'Dependant applications for partners and children',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-gold shrink-0 mt-[3px]" />
                <p className="text-body text-[0.88rem] leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* Sectors */}
      <SectionWrap bg="navy" pattern>
        <SectionHeading light sub="The Skilled Worker route is relevant across many sectors, with particular relevance to:">Relevant Sectors</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[780px] mx-auto">
          {[
            { icon: <Palette size={24} />, l: 'Creative Industries & Arts' },
            { icon: <Globe size={24} />, l: 'Technology & Digital Services' },
            { icon: <GraduationCap size={24} />, l: 'Healthcare & Education' },
            { icon: <Briefcase size={24} />, l: 'Professional & Business Services' },
          ].map((s, i) => (
            <div key={i} className="animate-on-scroll text-center bg-white/[0.05] border border-white/[0.08] rounded-md p-6" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-gold flex justify-center mb-3">{s.icon}</div>
              <p className="text-white/90 text-[0.82rem] font-semibold leading-snug">{s.l}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      <CtaBanner heading="Whether you are an employer or an individual, we can help" sub="Contact us to navigate the Skilled Worker visa process with confidence." go={go} />
      <ReviewedNote />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 5 — FEES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FEES = [
  {
    title: 'Global Talent Visa', icon: <Sparkles size={20} className="text-gold" />,
    rows: [
      ['Stage 1: Endorsement Application', 'From £3,500 + VAT'],
      ['Stage 2: Visa Application', 'From £2,500 + VAT'],
      ['Combined Stage 1 & 2', 'From £5,500 + VAT'],
    ],
  },
  {
    title: 'Spouse / Partner Visa', icon: <Heart size={20} className="text-gold" />,
    rows: [
      ['Initial Application', 'From £3,000 + VAT'],
      ['Extension Application', 'From £2,000 + VAT'],
      ['Indefinite Leave to Remain', 'From £2,500 + VAT'],
    ],
  },
  {
    title: 'Skilled Worker Visa', icon: <Briefcase size={20} className="text-gold" />,
    rows: [
      ['Individual Application', 'From £2,500 + VAT'],
      ['Sponsor Licence Application', 'From £3,000 + VAT'],
      ['Certificate of Sponsorship Assignment', 'From £500 + VAT per CoS'],
    ],
  },
  {
    title: 'Other Services', icon: <FileText size={20} className="text-gold" />,
    rows: [
      ['Indefinite Leave to Remain (General)', 'From £2,500 + VAT'],
      ['British Citizenship / Naturalisation', 'From £2,000 + VAT'],
      ['Immigration Appeals', 'Fees on application'],
      ['Emergency / Expedited Services', 'Additional charges apply'],
    ],
  },
];

function FeesPage({ go }) {
  return (
    <>
      <Hero
        image="/assets/photos/pexels-flaval-16015714.jpg"
        title="Our Immigration Fees"
        subtitle="Transparent pricing for our immigration legal services."
      />

      <SectionWrap bg="white" goldTop>
        <SectionHeading sub="We believe in clear, transparent pricing. The fees below represent our professional charges for standard immigration matters.">Fee Schedule</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {FEES.map((cat, i) => (
            <div key={i} className="animate-on-scroll bg-white rounded-md border border-navy/[0.06] border-t-[3px] border-t-gold/40 shadow-[0_2px_16px_rgba(26,35,50,0.05)] overflow-hidden" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="flex items-center gap-3 px-7 pt-7 pb-4">
                {cat.icon}
                <h3 className="font-serif text-[1.05rem] font-bold text-navy">{cat.title}</h3>
              </div>
              <div className="px-7 pb-7">
                {cat.rows.map((r, j) => (
                  <div key={j} className={`flex justify-between items-start gap-4 py-3.5 ${j < cat.rows.length - 1 ? 'border-b border-navy/[0.06]' : ''}`}>
                    <span className="text-body text-[0.85rem]">{r[0]}</span>
                    <span className="text-navy font-semibold text-[0.85rem] whitespace-nowrap shrink-0">{r[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Caveats */}
        <div className="animate-on-scroll max-w-[740px] mx-auto bg-navy/[0.03] rounded-md p-7 border border-navy/[0.06]">
          <h3 className="font-serif font-bold text-navy text-[0.95rem] mb-4 flex items-center gap-2.5">
            <Shield size={17} className="text-gold" /> Important Information About Our Fees
          </h3>
          <div className="space-y-3 text-secondary text-[0.85rem] leading-relaxed">
            <p>All fees are exclusive of VAT at the prevailing rate (currently 20%).</p>
            <p>Fees quoted are for our professional charges only and do not include Home Office application fees, Immigration Health Surcharge, biometric enrolment fees or other disbursements.</p>
            <p>The final fee may vary depending on the complexity of your case. We will provide a detailed fee estimate following an initial assessment.</p>
            <p>Fee information is provided for guidance and was last reviewed in February 2026. Please contact us for a current quotation.</p>
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Need a detailed fee estimate?" sub="Contact us for a quotation tailored to your specific circumstances." go={go} />
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PAGE 6 — CONTACT & TESTIMONIALS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const TESTIMONIALS = [
  { q: 'Taylor Hampton guided me through the entire Global Talent visa process with professionalism and genuine care. Their understanding of the arts sector made all the difference.', a: 'Visual Artist, USA' },
  { q: 'The team made a stressful process feel manageable. Their advice on our spouse visa application was clear, practical and reassuring.', a: 'Partner of Skilled Worker Visa Holder, Brazil' },
  { q: 'As a theatre company bringing international directors to the UK, we rely on Taylor Hampton for expert, responsive immigration advice.', a: 'Executive Director, London Theatre Company' },
  { q: 'Leena and her colleagues provided outstanding support with our sponsor licence and skilled worker applications. Thoroughly recommended.', a: 'HR Director, Arts Organisation' },
  { q: 'From initial consultation to visa approval, the service was exceptional. They truly understand the needs of international musicians.', a: 'Conductor, Germany' },
];

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', visa: '', message: '', consent: false });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  const inputCls = 'w-full px-4 py-3 bg-cream border border-navy/[0.08] rounded-sm text-[0.88rem] text-body placeholder:text-secondary/50 focus:outline-none focus:border-gold/50 focus:ring-[2px] focus:ring-gold/10 transition-all duration-200';

  return (
    <>
      <Hero
        image="/assets/photos/IMG_5242.jpeg"
        title="Get in Touch"
        subtitle="We are here to help. Contact our immigration team to discuss your requirements."
      />

      {/* Contact + Form */}
      <SectionWrap bg="white" goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-5 animate-on-scroll">
            <SectionHeading align="left">Contact Details</SectionHeading>
            <div className="space-y-6 mb-10">
              {[
                { icon: <MapPin size={17} />, label: 'Address', value: <span>Taylor Hampton Solicitors<br />38 Southwark Bridge Road<br />London SE1 9EU</span> },
                { icon: <Phone size={17} />, label: 'Telephone', value: <a href="tel:02074275970" className="hover:text-gold transition-colors">020 7427 5970</a> },
                { icon: <Mail size={17} />, label: 'Email', value: <a href="mailto:enquiries@taylorhampton.co.uk" className="hover:text-gold transition-colors">enquiries@taylorhampton.co.uk</a> },
                { icon: <Clock size={17} />, label: 'Office Hours', value: 'Monday to Friday, 9:00am – 6:00pm' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-cream flex items-center justify-center text-gold shrink-0">{c.icon}</div>
                  <div>
                    <p className="font-semibold text-navy text-[0.82rem] mb-0.5">{c.label}</p>
                    <div className="text-secondary text-[0.88rem] leading-relaxed">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-cream rounded-sm border border-navy/[0.06] h-44 flex flex-col items-center justify-center">
              <MapPin size={24} className="text-gold mb-2" />
              <p className="text-secondary text-[0.82rem] font-semibold">38 Southwark Bridge Road</p>
              <p className="text-secondary/60 text-[0.75rem]">London SE1 9EU</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 animate-on-scroll" style={{ transitionDelay: '80ms' }}>
            <SectionHeading align="left">Send an Enquiry</SectionHeading>

            {sent ? (
              <div className="bg-teal/[0.06] border border-teal/15 rounded-sm p-10 text-center">
                <CheckCircle2 size={36} className="text-teal mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Thank You</h3>
                <p className="text-secondary text-[0.88rem]">Your enquiry has been received. We will respond within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-navy mb-1.5">Full Name <span className="text-gold">*</span></label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-navy mb-1.5">Email Address <span className="text-gold">*</span></label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-navy mb-1.5">Telephone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-navy mb-1.5">Visa Type of Interest</label>
                    <select name="visa" value={form.visa} onChange={handleChange} className={`${inputCls} appearance-none`}>
                      <option value="">Please select…</option>
                      <option value="global-talent">Global Talent Visa</option>
                      <option value="spouse">Spouse &amp; Partner Visa</option>
                      <option value="skilled-worker">Skilled Worker Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.82rem] font-semibold text-navy mb-1.5">Brief Description of Your Enquiry</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent" required checked={form.consent} onChange={handleChange} className="mt-1 accent-gold" />
                  <span className="text-[0.78rem] text-secondary leading-relaxed">I consent to Taylor Hampton Solicitors processing my personal data for the purpose of responding to this enquiry. See our Privacy Policy.</span>
                </label>
                <BtnGold className="!w-full md:!w-auto !justify-center">
                  <Send size={15} /> Send Enquiry
                </BtnGold>
              </form>
            )}
          </div>
        </div>
      </SectionWrap>

      {/* Leena profile */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading>Your Immigration Solicitor</SectionHeading>
        <div className="max-w-[800px] mx-auto animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-9">
            <div className="shrink-0">
              <div className="relative">
                <img src="/assets/photos/leena-chouhan-400.jpeg" alt="Leena Chouhan" className="w-36 h-36 rounded-full object-cover shadow-lg border-[3px] border-white" />
                <div className="absolute -inset-1.5 rounded-full border border-gold/20 -z-10" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-0.5">Leena Chouhan</h3>
              <p className="text-gold text-[0.82rem] font-semibold tracking-[0.04em] mb-4">Solicitor — Immigration</p>
              <div className="space-y-3 text-body text-[0.88rem] leading-[1.75]">
                <p>Leena is a specialist immigration solicitor at Taylor Hampton with particular expertise in Global Talent visas for the creative industries. She advises international artists, musicians, performers and creative professionals on all aspects of their UK immigration needs.</p>
                <p>With a thorough understanding of the arts and cultural sectors, Leena is well placed to guide clients through the endorsement and visa application processes. She also has significant experience in spouse and partner visa applications and skilled worker immigration.</p>
                <p>Leena is committed to providing clear, strategic advice tailored to each client's circumstances. She understands the pressures faced by creative professionals working to international schedules and is known for her responsive, practical approach.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* Testimonials */}
      <SectionWrap bg="navy" pattern>
        <SectionHeading light>What Our Clients Say</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="animate-on-scroll bg-white/[0.05] border border-white/[0.08] rounded-md p-7 flex flex-col" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-6 h-[2px] bg-gold/60 mb-5" />
              <p className="text-white/80 text-[0.88rem] leading-[1.7] italic flex-1 mb-5">"{t.q}"</p>
              <p className="text-gold/70 text-[0.75rem] font-semibold tracking-[0.02em]">— {t.a}</p>
            </div>
          ))}
        </div>
      </SectionWrap>
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  APP ROOT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function App() {
  const [page, setPage] = useState('home');

  const go = useCallback((id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const pages = {
    'home': <HomePage go={go} />,
    'global-talent': <GlobalTalentPage go={go} />,
    'spouse': <SpousePage go={go} />,
    'skilled-worker': <SkilledWorkerPage go={go} />,
    'fees': <FeesPage go={go} />,
    'contact': <ContactPage />,
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header page={page} go={go} />
      <main className="pt-[68px] md:pt-[84px]">
        {pages[page] || pages.home}
      </main>
      <Footer go={go} />
    </div>
  );
}

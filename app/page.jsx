import Link from 'next/link';
import {
  Sparkles, Heart, Briefcase, Palette, Building2, Users,
  PoundSterling, Award, ArrowRight, ChevronRight
} from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, BtnGold, BtnOutline, CtaBanner } from '@/components/atoms';

export const metadata = {
  title: 'UK Immigration Solicitors for the Creative Industries',
  description:
    'Taylor Hampton Solicitors — specialist UK immigration lawyers advising on Global Talent, Spouse and Skilled Worker visas for artists, musicians and creative professionals.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk',
  },
  openGraph: {
    title: 'UK Immigration Solicitors for the Creative Industries | Taylor Hampton',
    description:
      'Specialist UK immigration lawyers advising on Global Talent, Spouse and Skilled Worker visas for artists, musicians and creative professionals.',
    url: 'https://immigration.taylorhampton.co.uk',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        image="/assets/photos/IMG_1983.jpeg"
        alt="London cityscape representing UK immigration and the creative industries"
        title="Specialists in UK Immigration for the Creative Industries"
        subtitle="Expert legal guidance on Global Talent visas, Skilled Worker visas and family immigration — trusted by artists, musicians, performers and cultural organisations worldwide."
      >
        <BtnGold href="/global-talent">Explore Global Talent Visas <ChevronRight size={15} /></BtnGold>
        <BtnOutline light href="/contact">Contact Us</BtnOutline>
      </Hero>

      {/* Intro */}
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

      {/* Services */}
      <SectionWrap bg="cream" pattern goldTop>
        <SectionHeading>Our Immigration Services</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { icon: <Sparkles size={26} />, title: 'Global Talent Visas', desc: 'For internationally recognised artists, musicians, performers, directors and creative leaders. Our primary specialism.', href: '/global-talent' },
            { icon: <Heart size={26} />, title: 'Spouse & Partner Visas', desc: 'Supporting families. Expert guidance for partners and spouses of visa holders seeking to build their lives in the UK.', href: '/spouse' },
            { icon: <Briefcase size={26} />, title: 'Skilled Worker Visas', desc: 'For UK employers and skilled professionals. Navigating sponsorship, compliance and applications.', href: '/skilled-worker' },
          ].map((s, i) => (
            <Link key={i} href={s.href}
              className={`animate-on-scroll text-left bg-white rounded-md p-8 border border-navy/[0.06] border-t-[3px] border-t-gold/40 shadow-[0_2px_16px_rgba(26,35,50,0.05)] hover:shadow-[0_12px_40px_rgba(184,148,76,0.12)] hover:-translate-y-1 transition-all duration-400 group`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-2.5">{s.title}</h3>
              <p className="text-secondary text-[0.85rem] leading-relaxed mb-5">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-gold text-[0.78rem] font-semibold tracking-[0.04em] uppercase group-hover:gap-2.5 transition-all duration-300">
                Learn More <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrap>

      {/* Why Choose */}
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

      {/* About the Firm */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <SectionHeading align="left">Part of Taylor Hampton Solicitors</SectionHeading>
            <div className="space-y-4 text-body text-[0.9rem] leading-[1.75]">
              <p>Taylor Hampton&apos;s UK Immigration Practice is part of Taylor Hampton Solicitors, founded on the simple mission to uphold our clients&apos; reputation. We value excellence and professionalism and show this through the continued results achieved with every case we are instructed on.</p>
              <p>As recognised by Chambers &amp; Partners in their Defamation/Reputation Management (UK Wide) 2026 rankings and by the Legal 500 for Reputation Management as a &quot;Firm to Watch&quot; in 2026.</p>
              <p>Our exceptional achievements include acting for claimants in landmark cases which led to the enactment by Parliament of the &quot;serious harm to reputation&quot; test in the Defamation Act 2013, as well as the pivotal 2019 case of <em className="text-navy font-semibold not-italic">Lachaux v Independent Newspapers</em> in the Supreme Court. This case established the principle that serious harm to reputation should be assessed by reference to the impact that the statement is actually shown to have had. In the realm of privacy law, the firm was involved in the case of <em className="text-navy font-semibold not-italic">Gulati v MGN</em>, which led to hugely increased awards of damages in privacy lawsuits.</p>
              <p>Taylor Hampton has also been at the forefront of the phone hacking litigation against News Group Newspapers. This led to the closure of the <em>News of the World</em> newspaper, the initiation of the Leveson Inquiry and the blocking of News Corporation&apos;s takeover bid for BSkyB. Additionally, Taylor Hampton played a key role in initiating class actions against Mirror Group Newspapers.</p>
              <p>We are proud to represent a diverse range of clients, from A-list celebrities to small businesses, always prioritising their personal and commercial objectives at every stage of the legal process.</p>
            </div>
          </div>
          <div className="lg:col-span-5 animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/photos/pexels-sonya-livshits-113472440-9828321.jpg" alt="A quiet London street reflecting the heritage and character of Taylor Hampton Solicitors" width={600} height={800} loading="lazy" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 rounded-md -z-10" />
            </div>
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Ready to discuss your immigration needs?" sub="Our specialist immigration team is here to help. Contact us for a confidential consultation." />
    </>
  );
}

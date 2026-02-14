import {
  CheckCircle2, Palette, Globe, GraduationCap, Briefcase
} from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';
import StructuredData from '@/components/structured-data';
import { buildFaqSchema } from '@/data/structured-data';

export const metadata = {
  title: 'Skilled Worker Visas',
  description:
    'UK Skilled Worker visa advice for employers and individuals. Sponsor licence applications, compliance guidance and visa management from specialist immigration solicitors.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/skilled-worker',
  },
  openGraph: {
    title: 'Skilled Worker Visas | Taylor Hampton Solicitors',
    description:
      'UK Skilled Worker visa advice for employers and individuals. Sponsor licence applications and compliance guidance.',
    url: 'https://immigration.taylorhampton.co.uk/skilled-worker',
  },
};

const SW_FAQ = [
  {
    question: 'What is a UK sponsor licence?',
    answer:
      'A sponsor licence is a permission granted to UK employers by the Home Office, allowing them to employ workers from outside the UK on a Skilled Worker visa.',
  },
  {
    question: 'Can I change employer on a Skilled Worker visa?',
    answer:
      'Yes, but you must apply for a new visa with sponsorship from your new employer before you start working for them.',
  },
  {
    question: 'Does the Skilled Worker visa lead to settlement?',
    answer:
      'Yes. The Skilled Worker visa can lead to Indefinite Leave to Remain (settlement) after a qualifying period, typically five years.',
  },
];

export default function SkilledWorkerPage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(SW_FAQ)} />
      <Hero
        image="/assets/photos/pexels-chaitaastic-2031726.jpg"
        alt="Modern London office buildings representing skilled worker immigration"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photos/pexels-lina-2773700.jpg" alt="London Underground sign at Canary Wharf, representing the UK professional landscape" width={600} height={800} loading="lazy" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
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

      <CtaBanner heading="Whether you are an employer or an individual, we can help" sub="Contact us to navigate the Skilled Worker visa process with confidence." />
      <ReviewedNote />
    </>
  );
}

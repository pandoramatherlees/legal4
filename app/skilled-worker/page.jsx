import {
  CheckCircle2, Palette, Globe, GraduationCap, Briefcase
} from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';
import StructuredData from '@/components/structured-data';
import { buildFaqSchema, LEGAL_SERVICE_SCHEMA } from '@/data/structured-data';

export const metadata = {
  title: 'How Do I Apply for a UK Skilled Worker Visa in 2026? | Taylor Hampton',
  description:
    'UK Skilled Worker visa advice for employers and individuals. Sponsor licence applications, compliance guidance and visa management from specialist immigration solicitors in London.',
  alternates: {
    canonical: 'https://taylorhamptonimmigration.london/skilled-worker',
  },
  openGraph: {
    title: 'Skilled Worker Visas | Taylor Hampton Solicitors',
    description:
      'UK Skilled Worker visa advice for employers and individuals. Sponsor licence applications and compliance guidance.',
    url: 'https://taylorhamptonimmigration.london/skilled-worker',
  },
};

const SW_FAQ = [
  {
    question: 'Do I need a job offer for a Skilled Worker visa?',
    answer:
      'Yes. A confirmed job offer from a UK employer holding a valid sponsor licence is required before applying for a Skilled Worker visa.',
  },
  {
    question: 'Can I change employer on a Skilled Worker visa?',
    answer:
      'Yes, but you must obtain a new Certificate of Sponsorship from your new employer and submit a new visa application before starting the new role.',
  },
  {
    question: 'How long does a Skilled Worker visa last?',
    answer:
      'The visa is typically granted for the length of the Certificate of Sponsorship up to a maximum permitted period, with the option to extend.',
  },
  {
    question: 'Can my family join me in the UK on a Skilled Worker visa?',
    answer:
      'Yes. A spouse, partner and dependent children may apply as dependants subject to meeting financial and relationship requirements.',
  },
  {
    question: 'Does the Skilled Worker visa lead to settlement?',
    answer:
      'Yes. After completing the qualifying residence period, typically five years, applicants may apply for Indefinite Leave to Remain if eligibility criteria are met.',
  },
  {
    question: 'What happens if my employer loses their sponsor licence?',
    answer:
      'If a sponsor licence is revoked, the worker\'s visa may be curtailed and alternative sponsorship must usually be secured within a limited timeframe. Early legal advice is essential.',
  },
];

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://taylorhamptonimmigration.london/skilled-worker#article',
  headline: 'How Do I Apply for a UK Skilled Worker Visa in 2026?',
  description:
    'Legal guidance on applying for a UK Skilled Worker visa including sponsor licence requirements, salary thresholds, the application process and settlement pathway.',
  author: {
    '@type': 'Organization',
    name: 'Taylor Hampton Solicitors — UK Immigration',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Taylor Hampton Solicitors — UK Immigration',
    logo: {
      '@type': 'ImageObject',
      url: 'https://taylorhamptonimmigration.london/logo.png',
    },
  },
  mainEntityOfPage: 'https://taylorhamptonimmigration.london/skilled-worker',
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
};

export default function SkilledWorkerPage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(SW_FAQ)} />
      <StructuredData data={LEGAL_SERVICE_SCHEMA} />
      <StructuredData data={ARTICLE_SCHEMA} />

      {/* AEO: Question-driven H1 and extractable summary */}
      <div className="sr-only">
        <h1>How Do I Apply for a UK Skilled Worker Visa in 2026?</h1>
        <p>
          A UK Skilled Worker visa allows individuals with a confirmed job offer from a licensed UK
          sponsor to live and work in the United Kingdom. The role must meet minimum skill and salary
          thresholds under the points-based system. Applicants must obtain a Certificate of Sponsorship
          and meet English language and financial requirements. The route can lead to settlement after
          a qualifying period.
        </p>
      </div>

      <Hero
        image="/assets/photos/skilledworkervisa.jpg"
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

      {/* Step by Step Process */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="max-w-[700px] mx-auto animate-on-scroll">
          <SectionHeading align="left">Step by Step Skilled Worker Visa Process</SectionHeading>
          <div className="space-y-6">
            {[
              {
                stage: 'Stage One',
                title: 'Secure a Job Offer',
                body: 'The applicant must receive a job offer from a UK employer holding a valid sponsor licence.',
              },
              {
                stage: 'Stage Two',
                title: 'Certificate of Sponsorship',
                body: 'The employer assigns a Certificate of Sponsorship confirming the role details, salary and occupation code.',
              },
              {
                stage: 'Stage Three',
                title: 'Eligibility Assessment',
                body: 'The application must meet the required skill level, salary threshold and English language requirement under the points-based system.',
              },
              {
                stage: 'Stage Four',
                title: 'Submit Visa Application',
                body: 'Applications are submitted online either from overseas or within the United Kingdom where switching is permitted.',
              },
              {
                stage: 'Stage Five',
                title: 'Decision and Grant of Leave',
                body: 'If approved, leave is granted for a defined period with eligibility for extension and settlement.',
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="shrink-0 w-[90px] text-right">
                  <span className="text-gold text-[0.75rem] font-semibold uppercase tracking-wider">{s.stage}</span>
                </div>
                <div className="border-l border-navy/10 pl-4">
                  <p className="text-[0.92rem] font-semibold text-navy mb-1">{s.title}</p>
                  <p className="text-body text-[0.88rem] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* Employers */}
      <SectionWrap bg="white">
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
      <SectionWrap bg="cream" pattern goldTop>
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

      {/* Settlement */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Settlement and Indefinite Leave to Remain</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Skilled Worker visa holders may apply for Indefinite Leave to Remain after completing the qualifying period, typically five years of continuous lawful residence.</p>
            <p>Applicants must demonstrate ongoing sponsorship by a licensed employer, compliance with salary requirements at settlement stage, Knowledge of Life in the UK and English language ability. Strategic planning ensures eligibility is preserved throughout the sponsorship period.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Common Challenges */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Common Challenges in Skilled Worker Applications</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Applications may be refused due to incorrect occupation code selection, salary miscalculation, invalid Certificates of Sponsorship or failure to meet evidential requirements.</p>
            <p>Employers face compliance risks if record-keeping and reporting duties are not properly maintained. Early legal assessment reduces risk for both employers and sponsored workers.</p>
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

      {/* FAQs */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] mx-auto">
          <SectionHeading align="left">Frequently Asked Questions</SectionHeading>
          <div className="space-y-6">
            {SW_FAQ.map((item, i) => (
              <div key={i} className="animate-on-scroll border-b border-navy/10 pb-6 last:border-0" style={{ transitionDelay: `${i * 40}ms` }}>
                <p className="text-[0.92rem] font-semibold text-navy mb-2">{item.question}</p>
                <p className="text-body text-[0.88rem] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Whether you are an employer or an individual, we can help" sub="Contact us to navigate the Skilled Worker visa process with confidence." />
      <ReviewedNote />
    </>
  );
}

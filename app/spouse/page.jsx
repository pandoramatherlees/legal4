import { CheckCircle2 } from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';
import StructuredData from '@/components/structured-data';
import { buildFaqSchema, LEGAL_SERVICE_SCHEMA } from '@/data/structured-data';

export const metadata = {
  title: 'How Do I Apply for a UK Spouse or Partner Visa in 2026? | Taylor Hampton',
  description:
    'Expert advice on UK spouse and partner visa applications, extensions and settlement. Supporting families and partners navigating UK immigration from specialist solicitors in London.',
  alternates: {
    canonical: 'https://taylorhamptonimmigration.london/spouse',
  },
  openGraph: {
    title: 'Spouse & Partner Visas | Taylor Hampton Solicitors',
    description:
      'Expert advice on UK spouse and partner visa applications, extensions and settlement.',
    url: 'https://taylorhamptonimmigration.london/spouse',
  },
};

const SPOUSE_FAQ = [
  {
    question: 'What is the minimum income requirement for a spouse visa?',
    answer:
      'Applicants must meet the applicable minimum income threshold through employment income, self-employment income, savings or a combination of permitted sources. The threshold is subject to change and must be checked at the time of application.',
  },
  {
    question: 'Can I apply for a spouse visa from inside the UK?',
    answer:
      'In many cases it is possible to switch to a spouse or partner visa from within the United Kingdom, provided you hold valid immigration status and are not on a prohibited route.',
  },
  {
    question: 'How long does a spouse visa last?',
    answer:
      'An initial spouse visa is typically granted for a limited period before requiring an extension. After completing the qualifying period applicants may apply for Indefinite Leave to Remain.',
  },
  {
    question: 'What counts as proof of a genuine relationship?',
    answer:
      'Evidence may include joint tenancy agreements, shared financial commitments, correspondence addressed jointly, photographs, travel records and evidence of ongoing communication.',
  },
  {
    question: 'Can my partner work in the UK on a spouse visa?',
    answer:
      'Yes. Spouse and partner visa holders are generally permitted to work and study in the United Kingdom.',
  },
  {
    question: 'What happens if we separate during the visa period?',
    answer:
      'If a relationship permanently breaks down during the visa period there may be immigration consequences. Legal advice should be sought immediately to understand the available options.',
  },
];

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://taylorhamptonimmigration.london/spouse#article',
  headline: 'How Do I Apply for a UK Spouse or Partner Visa in 2026?',
  description:
    'Legal guidance on applying for a UK spouse or partner visa including financial requirements, relationship evidence and the settlement pathway.',
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
  mainEntityOfPage: 'https://taylorhamptonimmigration.london/spouse',
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
};

export default function SpousePage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(SPOUSE_FAQ)} />
      <StructuredData data={LEGAL_SERVICE_SCHEMA} />
      <StructuredData data={ARTICLE_SCHEMA} />

      {/* AEO: Question-driven H1 and extractable summary */}
      <div className="sr-only">
        <h1>How Do I Apply for a UK Spouse or Partner Visa in 2026?</h1>
        <p>
          A UK spouse or partner visa allows the husband, wife, civil partner, unmarried partner or
          fiancé(e) of a British citizen or settled person to live in the United Kingdom. Applicants
          must demonstrate a genuine and subsisting relationship, meet financial requirements and
          satisfy English language criteria. The route can lead to Indefinite Leave to Remain after
          a qualifying period.
        </p>
      </div>

      <Hero
        image="/assets/photos/pexels-yosstraore-2611465.jpg"
        alt="A couple walking together in London, representing spouse and partner visas"
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

      {/* Step by Step Process */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] mx-auto animate-on-scroll">
          <SectionHeading align="left">Step by Step Spouse and Partner Visa Process</SectionHeading>
          <div className="space-y-6">
            {[
              {
                stage: 'Stage One',
                title: 'Confirm Eligibility',
                body: 'We assess relationship status, immigration status of the sponsor and financial position to confirm the application can proceed.',
              },
              {
                stage: 'Stage Two',
                title: 'Financial Assessment',
                body: 'We review employment income, self-employment income, savings or alternative financial sources to confirm whether the minimum threshold is met.',
              },
              {
                stage: 'Stage Three',
                title: 'Compile Relationship Evidence',
                body: 'Evidence may include marriage or civil partnership certificates, joint financial documents, cohabitation evidence, travel records and communication history.',
              },
              {
                stage: 'Stage Four',
                title: 'Submit Application',
                body: 'Applications may be submitted from overseas or within the United Kingdom where switching is permitted.',
              },
              {
                stage: 'Stage Five',
                title: 'Decision and Grant of Leave',
                body: 'If approved, leave is usually granted for an initial period with a clear pathway to extension and settlement.',
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

      {/* Settlement */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Settlement and Indefinite Leave to Remain</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Spouse and partner visa holders may apply for Indefinite Leave to Remain after completing the relevant qualifying period, typically five years under the standard route.</p>
            <p>Applicants must demonstrate a continued genuine and subsisting relationship, compliance with financial requirements, English language ability and Knowledge of Life in the UK. Careful preparation is required to avoid disruption to lawful residence.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Common Challenges */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Common Challenges in Partner Visa Applications</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>Applications are frequently refused due to insufficient financial evidence, gaps in cohabitation documentation or failure to meet evidential formatting requirements.</p>
            <p>Previous refusals, overstays or complex immigration histories require careful legal analysis before submitting a new application. Early advice significantly improves outcomes.</p>
          </div>
        </div>
      </SectionWrap>

      {/* How we help */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 animate-on-scroll order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photos/pexels-matreding-16124559.jpg" alt="Elegant London residential street reflecting the family immigration journey" width={600} height={800} loading="lazy" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
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

      {/* FAQs */}
      <SectionWrap bg="white">
        <div className="max-w-[700px] mx-auto">
          <SectionHeading align="left">Frequently Asked Questions</SectionHeading>
          <div className="space-y-6">
            {SPOUSE_FAQ.map((item, i) => (
              <div key={i} className="animate-on-scroll border-b border-navy/10 pb-6 last:border-0" style={{ transitionDelay: `${i * 40}ms` }}>
                <p className="text-[0.92rem] font-semibold text-navy mb-2">{item.question}</p>
                <p className="text-body text-[0.88rem] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="We understand how important family immigration is" sub="Contact us to discuss your situation in confidence." />
      <ReviewedNote />
    </>
  );
}

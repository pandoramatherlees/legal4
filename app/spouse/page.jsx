import { CheckCircle2 } from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';
import StructuredData from '@/components/structured-data';
import { buildFaqSchema } from '@/data/structured-data';

export const metadata = {
  title: 'Spouse & Partner Visas',
  description:
    'Expert advice on UK spouse and partner visa applications, extensions and settlement. Supporting families and partners navigating UK immigration.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/spouse',
  },
  openGraph: {
    title: 'Spouse & Partner Visas | Taylor Hampton Solicitors',
    description:
      'Expert advice on UK spouse and partner visa applications, extensions and settlement.',
    url: 'https://immigration.taylorhampton.co.uk/spouse',
  },
};

const SPOUSE_FAQ = [
  {
    question: 'What is the UK spouse visa financial requirement?',
    answer:
      'Applicants must meet a minimum income threshold to qualify for a UK spouse visa. Taylor Hampton advises on how the financial requirement is assessed and the evidence needed to satisfy it.',
  },
  {
    question: 'Can I apply for a spouse visa from within the UK?',
    answer:
      'Yes. Both in-country and overseas applications are possible depending on your current immigration status. We manage both types of application.',
  },
  {
    question: 'How long does it take to get settlement on a spouse visa?',
    answer:
      'The spouse visa route leads to settlement (Indefinite Leave to Remain) after a qualifying period, typically five years.',
  },
];

export default function SpousePage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(SPOUSE_FAQ)} />
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

      {/* How we help */}
      <SectionWrap bg="white">
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

      <CtaBanner heading="We understand how important family immigration is" sub="Contact us to discuss your situation in confidence." />
      <ReviewedNote />
    </>
  );
}

import {
  Palette, Music, Theater, Clapperboard, Diamond, Building2,
  Award, Sparkles, CheckCircle2
} from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';
import StructuredData from '@/components/structured-data';
import { buildFaqSchema, LEGAL_SERVICE_SCHEMA } from '@/data/structured-data';

export const metadata = {
  title: 'How Do I Apply for a UK Global Talent Visa? | Taylor Hampton',
  description:
    'Expert legal advice on UK Global Talent visas for artists, musicians, performers and creative professionals. Endorsed through Arts Council England. Based in London.',
  alternates: {
    canonical: 'https://taylorhamptonimmigration.london/global-talent',
  },
  openGraph: {
    title: 'Global Talent Visa — Arts & Creative Industries | Taylor Hampton',
    description:
      'Expert legal advice on UK Global Talent visas for artists, musicians, performers and creative professionals.',
    url: 'https://taylorhamptonimmigration.london/global-talent',
  },
};

const GT_FAQ = [
  {
    question: 'Do I need a job offer for a Global Talent visa?',
    answer:
      'No. The Global Talent visa does not require a sponsor or job offer. Applicants may work freelance, be self-employed or undertake multiple projects simultaneously without restriction.',
  },
  {
    question: 'Who endorses arts and creative applicants for the Global Talent visa?',
    answer:
      'Arts Council England is the designated endorsing body for applicants in arts and culture. They assess whether the applicant meets the criteria for Exceptional Talent or Exceptional Promise.',
  },
  {
    question: 'How long can I stay on a Global Talent visa?',
    answer:
      'Applicants may request between one and five years of leave depending on their circumstances and long-term settlement planning.',
  },
  {
    question: 'Can I bring family members on a Global Talent visa?',
    answer:
      'Yes. A spouse, partner and dependent children may apply as dependants subject to meeting relationship and financial requirements.',
  },
  {
    question: 'Can the Global Talent visa lead to settlement?',
    answer:
      'Yes. The route can lead to Indefinite Leave to Remain after three years for Exceptional Talent applicants, or five years for Exceptional Promise applicants, subject to meeting residence and ongoing professional activity requirements.',
  },
  {
    question: 'What are the most common reasons Global Talent applications are refused?',
    answer:
      'Applications are often refused where evidence lacks independent verification, where recommendation letters are insufficiently authoritative, or where international recognition is not clearly demonstrated. Careful structuring of the evidence portfolio significantly increases the likelihood of success.',
  },
];

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://taylorhamptonimmigration.london/global-talent#article',
  headline: 'How Do I Apply for a UK Global Talent Visa in the Arts, Music and Creative Industries?',
  description:
    'Legal guidance on applying for a UK Global Talent visa for artists and creative professionals including endorsement through Arts Council England and settlement pathways.',
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
  mainEntityOfPage: 'https://taylorhamptonimmigration.london/global-talent',
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
};

export default function GlobalTalentPage() {
  return (
    <>
      <StructuredData data={buildFaqSchema(GT_FAQ)} />
      <StructuredData data={LEGAL_SERVICE_SCHEMA} />
      <StructuredData data={ARTICLE_SCHEMA} />

      {/* AEO: Question-driven H1 and extractable summary */}
      <div className="sr-only">
        <h1>How Do I Apply for a UK Global Talent Visa in the Arts, Music and Creative Industries?</h1>
        <p>
          The UK Global Talent visa allows internationally recognised artists, musicians and creative
          professionals to live and work in the United Kingdom without requiring a sponsor. Applicants
          must first obtain endorsement from a designated body such as Arts Council England before
          submitting a visa application. The route offers significant flexibility and can lead to
          settlement and British citizenship.
        </p>
      </div>

      <Hero
        image="/assets/photos/pexels-jdominici-269128.jpg"
        alt="Creative arts performance representing the Global Talent visa route"
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
            <p>The route can lead to settlement (Indefinite Leave to Remain) and, in time, British citizenship. Applications are endorsed through designated competent bodies relevant to the applicant&apos;s field of expertise.</p>
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
            <p>The endorsement assesses whether the applicant is a recognised leader or an emerging leader with exceptional promise in their field. The assessment considers evidence of the applicant&apos;s achievements, standing and contribution to their discipline.</p>
            <p>Taylor Hampton guides clients through the entire endorsement process, helping to compile compelling evidence portfolios that present their careers and accomplishments in the strongest possible terms.</p>
          </div>
        </div>
      </SectionWrap>

      {/* Step by Step Process */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="max-w-[700px] mx-auto animate-on-scroll">
          <SectionHeading align="left">Step by Step Global Talent Visa Process</SectionHeading>
          <div className="space-y-6">
            {[
              {
                stage: 'Stage One',
                title: 'Eligibility Assessment',
                body: 'An initial assessment determines whether the applicant meets the criteria for Exceptional Talent or Exceptional Promise.',
              },
              {
                stage: 'Stage Two',
                title: 'Evidence Preparation',
                body: 'Applicants must compile a structured portfolio including professional achievements, international recognition, letters of recommendation and supporting documentation.',
              },
              {
                stage: 'Stage Three',
                title: 'Endorsement Application',
                body: 'The application is submitted to the relevant endorsing body, such as Arts Council England for arts and culture applicants.',
              },
              {
                stage: 'Stage Four',
                title: 'Visa Application',
                body: 'Once endorsement is granted, the applicant submits the visa application to the Home Office.',
              },
              {
                stage: 'Stage Five',
                title: 'Decision and Grant of Leave',
                body: 'If approved, leave may be granted for up to five years with the option to extend and apply for settlement.',
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
      <SectionWrap bg="white">
        <div className="max-w-[700px] animate-on-scroll">
          <SectionHeading align="left">Settlement and Long-Term Planning</SectionHeading>
          <div className="space-y-4 text-body text-[0.92rem] leading-[1.75]">
            <p>The Global Talent visa provides a pathway to Indefinite Leave to Remain. Applicants endorsed under Exceptional Talent may qualify for settlement after three years. Those endorsed under Exceptional Promise typically qualify after five years, subject to residence and ongoing professional activity requirements.</p>
            <p>Strategic planning is important to ensure continuity of lawful residence and eligibility for British citizenship where desired. Taylor Hampton advises clients on both immediate applications and long-term immigration planning.</p>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photos/pexels-streetlevelphotos-11796156.jpg" alt="Iconic London red bus near the Houses of Parliament, representing the UK arts and culture scene" width={600} height={800} loading="lazy" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </SectionWrap>

      {/* FAQs */}
      <SectionWrap bg="cream" pattern goldTop>
        <div className="max-w-[700px] mx-auto">
          <SectionHeading align="left">Frequently Asked Questions</SectionHeading>
          <div className="space-y-6">
            {GT_FAQ.map((item, i) => (
              <div key={i} className="animate-on-scroll border-b border-navy/10 pb-6 last:border-0" style={{ transitionDelay: `${i * 40}ms` }}>
                <p className="text-[0.92rem] font-semibold text-navy mb-2">{item.question}</p>
                <p className="text-body text-[0.88rem] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Discuss your Global Talent visa application with our specialist team" />
      <ReviewedNote />
    </>
  );
}

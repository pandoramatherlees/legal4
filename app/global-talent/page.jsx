'use client';
import {
  Palette, Music, Theater, Clapperboard, Diamond, Building2,
  Award, Sparkles, CheckCircle2
} from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner, ReviewedNote } from '@/components/atoms';

export default function GlobalTalentPage() {
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
            <img src="/assets/photos/pexels-streetlevelphotos-11796156.jpg" alt="Red bus near Parliament" className="rounded-md shadow-xl w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </SectionWrap>

      <CtaBanner heading="Discuss your Global Talent visa application with our specialist team" />
      <ReviewedNote />
    </>
  );
}

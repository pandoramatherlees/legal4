'use client';
import { Sparkles, Heart, Briefcase, FileText, Shield } from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, CtaBanner } from '@/components/atoms';

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

export default function FeesPage() {
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

      <CtaBanner heading="Need a detailed fee estimate?" sub="Contact us for a quotation tailored to your specific circumstances." />
    </>
  );
}

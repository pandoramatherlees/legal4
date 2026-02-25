import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Hero, SectionWrap, SectionHeading } from '@/components/atoms';
import ContactForm from '@/components/contact-form';
import TestimonialCarousel from '@/components/testimonial-carousel';
import StructuredData from '@/components/structured-data';
import { ATTORNEY_SCHEMA } from '@/data/structured-data';
import { TESTIMONIALS } from '@/data/testimonials';

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Taylor Hampton Solicitors for expert UK immigration advice. Call +44 203 143 0322 or send an enquiry online. Based at 20-21 Jockey\'s Fields, London, WC1R 4BW.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/contact',
  },
  openGraph: {
    title: 'Contact Us | Taylor Hampton Solicitors',
    description:
      'Contact Taylor Hampton Solicitors for expert UK immigration advice. Call +44 203 143 0322 or send an enquiry online.',
    url: 'https://immigration.taylorhampton.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={ATTORNEY_SCHEMA} />
      <Hero
        image="/assets/photos/IMG_5242.jpeg"
        alt="Taylor Hampton Solicitors office entrance in London"
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
                {
                  icon: <MapPin size={17} />,
                  label: 'Address',
                  value: (
                    <span>
                      Taylor Hampton Solicitors
                      <br />
                      20-21 Jockey&apos;s Fields
                      <br />
                      London, WC1R 4BW
                    </span>
                  ),
                },
                {
                  icon: <Phone size={17} />,
                  label: 'Telephone',
                  value: (
                    <a href="tel:+442031430322" className="hover:text-gold transition-colors">
                      +44 203 143 0322
                    </a>
                  ),
                },
                {
                  icon: <Mail size={17} />,
                  label: 'Email',
                  value: (
                    <a
                      href="mailto:enquiries@taylorhampton.co.uk"
                      className="hover:text-gold transition-colors"
                    >
                      enquiries@taylorhampton.co.uk
                    </a>
                  ),
                },
                {
                  icon: <Clock size={17} />,
                  label: 'Office Hours',
                  value: 'Monday to Friday, 9:00am \u2013 6:00pm',
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-cream flex items-center justify-center text-gold shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-[0.82rem] mb-0.5">{c.label}</p>
                    <div className="text-secondary text-[0.88rem] leading-relaxed">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-sm border border-navy/[0.06] overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                title="Taylor Hampton Solicitors office location at 20-21 Jockey's Fields, London, WC1R 4BW"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8!2d-0.1128!3d51.5184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4b9d0d1b1f%3A0x1234567890abcdef!2s20-21+Jockey%27s+Fields%2C+London+WC1R+4BW!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 animate-on-scroll animate-delay-100">
            <SectionHeading align="left">Send an Enquiry</SectionHeading>
            <ContactForm />
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photos/leena-chouhan-400.jpeg"
                  alt="Leena Chouhan, Head of Immigration at Taylor Hampton Solicitors"
                  width={144}
                  height={144}
                  loading="lazy"
                  className="w-36 h-36 rounded-full object-cover shadow-lg border-[3px] border-white"
                />
                <div className="absolute -inset-1.5 rounded-full border border-gold/20 -z-10" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-0.5">
                Leena Chouhan
              </h3>
              <p className="text-gold text-[0.82rem] font-semibold tracking-[0.04em] mb-4">
                Head of UK Immigration &mdash; Solicitor
              </p>
              <div className="space-y-3 text-body text-[0.88rem] leading-[1.75]">
                <p>
                  Leena Chouhan is a highly experienced UK immigration solicitor with over 20
                  years&apos; post&#8209;qualification experience. She currently serves as Head of
                  UK Immigration at Taylor Hampton, specialising in Global Talent visas, Skilled
                  Worker immigration, and a wide range of UK visa and settlement matters.
                </p>
                <p>
                  Leena qualified as a solicitor in 2004 and has held senior roles at EY,
                  Fragomen, and Moore Barlow, as well as running her own immigration practice.
                  This extensive experience equips her with a deep understanding of both corporate
                  and personal immigration issues.
                </p>
                <p>
                  She advises a diverse clientele &mdash; from international artists, performers,
                  and creative professionals to corporate employers &mdash; on Endorsement
                  applications, Sponsor Licences, Skilled Worker visas, Spouse visas, Indefinite
                  Leave to Remain, Naturalisation, and other UK immigration matters.
                </p>
                <p>
                  Known for being approachable, responsive, and practical, Leena has built a
                  strong reputation for repeat business and referrals through her tailored,
                  strategic advice and commitment to client success. She understands the pressures
                  faced by clients working to international schedules and delivers solutions in a
                  friendly, supportive, and results&#8209;focused manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* Testimonials */}
      <SectionWrap bg="navy" pattern>
        <SectionHeading light>What Our Clients Say</SectionHeading>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white/[0.05] border border-white/[0.08] rounded-md p-7 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-6 h-[2px] bg-gold/60 mb-5" />
              <p className="text-white/80 text-[0.88rem] leading-[1.7] italic flex-1 mb-5">
                &quot;{t.q}&quot;
              </p>
              <p className="text-gold/70 text-[0.75rem] font-semibold tracking-[0.02em]">
                &mdash; {t.a}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </SectionWrap>
    </>
  );
}

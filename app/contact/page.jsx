'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import { Hero, SectionWrap, SectionHeading, BtnGold } from '@/components/atoms';

const TESTIMONIALS = [
  { q: 'Taylor Hampton guided me through the entire Global Talent visa process with professionalism and genuine care. Their understanding of the arts sector made all the difference.', a: 'Visual Artist, USA' },
  { q: 'The team made a stressful process feel manageable. Their advice on our spouse visa application was clear, practical and reassuring.', a: 'Partner of Skilled Worker Visa Holder, Brazil' },
  { q: 'As a theatre company bringing international directors to the UK, we rely on Taylor Hampton for expert, responsive immigration advice.', a: 'Executive Director, London Theatre Company' },
  { q: 'Leena and her colleagues provided outstanding support with our sponsor licence and skilled worker applications. Thoroughly recommended.', a: 'HR Director, Arts Organisation' },
  { q: 'From initial consultation to visa approval, the service was exceptional. They truly understand the needs of international musicians.', a: 'Conductor, Germany' },
];

export default function ContactPage() {
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
                <p>Leena is committed to providing clear, strategic advice tailored to each client&apos;s circumstances. She understands the pressures faced by creative professionals working to international schedules and is known for her responsive, practical approach.</p>
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
              <p className="text-white/80 text-[0.88rem] leading-[1.7] italic flex-1 mb-5">&quot;{t.q}&quot;</p>
              <p className="text-gold/70 text-[0.75rem] font-semibold tracking-[0.02em]">— {t.a}</p>
            </div>
          ))}
        </div>
      </SectionWrap>
    </>
  );
}

import { SectionWrap, SectionHeading } from '@/components/atoms';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Taylor Hampton Solicitors UK Immigration website. How we collect, use and protect your personal data under UK GDPR.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/privacy',
  },
};

function LegalSection({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-[1.15rem] font-bold text-navy mb-3">{title}</h2>
      <div className="space-y-3 text-body text-[0.9rem] leading-[1.75]">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <SectionWrap bg="white" goldTop>
      <div className="max-w-[740px] mx-auto">
        <SectionHeading>Privacy Policy</SectionHeading>

        <LegalSection title="Introduction">
          <p>
            Taylor Hampton Solicitors is committed to protecting your personal data. This Privacy
            Policy explains how we collect, use, store and protect information gathered through
            this website (immigration.taylorhampton.co.uk).
          </p>
          <p>
            We are the data controller for personal data processed through this website. We are
            registered with the Information Commissioner&apos;s Office and comply with the UK
            General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </LegalSection>

        <LegalSection title="Data We Collect">
          <p>We may collect the following personal data when you use our enquiry form:</p>
          <ul className="list-disc list-inside space-y-1 text-secondary">
            <li>Full name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Visa type of interest</li>
            <li>Details of your enquiry</li>
          </ul>
          <p>
            We also collect standard website analytics data such as IP addresses, browser type,
            pages visited and referring URLs through cookies and similar technologies.
          </p>
        </LegalSection>

        <LegalSection title="How We Use Your Data">
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 text-secondary">
            <li>To respond to your enquiry and provide legal advice</li>
            <li>To administer our client relationship</li>
            <li>To improve our website and services</li>
            <li>To comply with our legal and regulatory obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="Lawful Basis for Processing">
          <p>
            We process your data on the basis of <strong>legitimate interest</strong> (responding
            to your enquiry and providing legal services), <strong>consent</strong> (where you
            have opted in via our contact form), and <strong>legal obligation</strong> (compliance
            with SRA requirements and anti-money laundering regulations).
          </p>
        </LegalSection>

        <LegalSection title="Data Retention">
          <p>
            Enquiry data is retained for a period of six years from the date of last contact, in
            accordance with our professional obligations. Website analytics data is retained for
            26 months. You may request deletion of your data at any time, subject to our legal
            obligations.
          </p>
        </LegalSection>

        <LegalSection title="Data Sharing">
          <p>
            We do not sell or share your personal data with third parties for marketing purposes.
            We may share data with trusted service providers (such as our form processing
            service, Formspree) who process data on our behalf, and with regulatory bodies where
            required by law.
          </p>
        </LegalSection>

        <LegalSection title="Your Rights">
          <p>Under UK GDPR, you have the following rights:</p>
          <ul className="list-disc list-inside space-y-1 text-secondary">
            <li>Right of access to your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure (right to be forgotten)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a
              href="mailto:enquiries@taylorhampton.co.uk"
              className="text-gold underline hover:text-gold-light"
            >
              enquiries@taylorhampton.co.uk
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>
            This website uses cookies to enhance your experience and for analytics purposes. You
            can manage your cookie preferences through your browser settings. For more detail on
            the cookies we use, please contact us.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data
            rights, please contact us:
          </p>
          <p className="text-secondary">
            Taylor Hampton Solicitors
            <br />
            20-21 Jockey's Fields, London, WC1R 4BW
            <br />
            Telephone:{' '}
            <a href="tel:+442031430322" className="text-gold hover:text-gold-light">
              +44 203 143 0322
            </a>
            <br />
            Email:{' '}
            <a
              href="mailto:enquiries@taylorhampton.co.uk"
              className="text-gold hover:text-gold-light"
            >
              enquiries@taylorhampton.co.uk
            </a>
          </p>
          <p>
            If you are unhappy with our handling of your personal data, you have the right to
            complain to the Information Commissioner&apos;s Office (ICO) at{' '}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-gold-light"
            >
              ico.org.uk
            </a>
            .
          </p>
        </LegalSection>

        <p className="text-secondary/60 text-[0.78rem] italic">
          This policy was last updated in February 2026.
        </p>
      </div>
    </SectionWrap>
  );
}

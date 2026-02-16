import { SectionWrap, SectionHeading } from '@/components/atoms';

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for the Taylor Hampton Solicitors UK Immigration website. Read our website terms, disclaimers and intellectual property notices.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/terms',
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

export default function TermsPage() {
  return (
    <SectionWrap bg="white" goldTop>
      <div className="max-w-[740px] mx-auto">
        <SectionHeading>Terms of Use</SectionHeading>

        <LegalSection title="Introduction">
          <p>
            These Terms of Use govern your access to and use of the website
            immigration.taylorhampton.co.uk, operated by Taylor Hampton Solicitors. By using this
            website, you agree to be bound by these terms.
          </p>
        </LegalSection>

        <LegalSection title="Information Only">
          <p>
            The content on this website is provided for general information purposes only. It does
            not constitute legal advice and should not be relied upon as such. No solicitor-client
            relationship is created by your use of this website or by submitting an enquiry through
            our contact form.
          </p>
          <p>
            For advice specific to your circumstances, please contact us directly. Immigration law
            and rules are subject to change, and the information on this website may not reflect the
            most current legal developments.
          </p>
        </LegalSection>

        <LegalSection title="Intellectual Property">
          <p>
            All content on this website, including text, design, logos and images, is the property
            of Taylor Hampton Solicitors or its licensors and is protected by copyright and other
            intellectual property laws. You may not reproduce, distribute or modify any content
            without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection title="Third-Party Links">
          <p>
            This website may contain links to external websites. We are not responsible for the
            content, privacy practices or availability of those sites. Linking to a third-party
            website does not imply endorsement.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of Liability">
          <p>
            Taylor Hampton Solicitors makes no warranties or representations about the accuracy or
            completeness of the content on this website. To the fullest extent permitted by law, we
            exclude liability for any loss or damage arising from your use of this website or
            reliance on its content.
          </p>
        </LegalSection>

        <LegalSection title="Governing Law">
          <p>
            These Terms of Use are governed by the laws of England and Wales. Any disputes arising
            from the use of this website shall be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>
        </LegalSection>

        <LegalSection title="Changes to These Terms">
          <p>
            We may update these Terms of Use from time to time. Any changes will be posted on this
            page with an updated revision date. Continued use of the website constitutes acceptance
            of the revised terms.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <p className="text-secondary">
            Taylor Hampton Solicitors
            <br />
            20-21 Jockey's Fields, London, WC1R 4BW
            <br />
            Email:{' '}
            <a
              href="mailto:enquiries@taylorhampton.co.uk"
              className="text-gold hover:text-gold-light"
            >
              enquiries@taylorhampton.co.uk
            </a>
          </p>
        </LegalSection>

        <p className="text-secondary/60 text-[0.78rem] italic">
          These terms were last updated in February 2026.
        </p>
      </div>
    </SectionWrap>
  );
}

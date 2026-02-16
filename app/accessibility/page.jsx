import { SectionWrap, SectionHeading } from '@/components/atoms';

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'Accessibility statement for the Taylor Hampton Solicitors UK Immigration website. Our commitment to WCAG 2.1 AA accessibility standards.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/accessibility',
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

export default function AccessibilityPage() {
  return (
    <SectionWrap bg="white" goldTop>
      <div className="max-w-[740px] mx-auto">
        <SectionHeading>Accessibility Statement</SectionHeading>

        <LegalSection title="Our Commitment">
          <p>
            Taylor Hampton Solicitors is committed to ensuring that our website
            (immigration.taylorhampton.co.uk) is accessible to as wide an audience as possible,
            including people with disabilities. We aim to conform to the Web Content Accessibility
            Guidelines (WCAG) 2.1 at Level AA.
          </p>
        </LegalSection>

        <LegalSection title="What We Have Done">
          <p>
            We have taken the following steps to make this website more accessible:
          </p>
          <ul className="list-disc list-inside space-y-1 text-secondary">
            <li>Used clear, readable fonts with sufficient contrast ratios</li>
            <li>Provided a skip navigation link to bypass repeated content</li>
            <li>Added visible focus indicators for keyboard navigation</li>
            <li>Ensured all images have meaningful alternative text</li>
            <li>Used semantic HTML elements and ARIA attributes</li>
            <li>Made forms accessible with associated labels and error messaging</li>
            <li>Ensured the website is navigable using a keyboard alone</li>
            <li>Provided a responsive design that works on different screen sizes</li>
          </ul>
        </LegalSection>

        <LegalSection title="Known Limitations">
          <p>
            We are aware that some areas of the site may not yet be fully accessible. We are
            continuing to improve accessibility across all pages and welcome feedback on areas
            where we can do better.
          </p>
        </LegalSection>

        <LegalSection title="Feedback and Contact">
          <p>
            If you experience any difficulty accessing our website or have suggestions for
            improvement, please contact us:
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
            We take accessibility concerns seriously and will respond to feedback within five
            working days.
          </p>
        </LegalSection>

        <LegalSection title="Enforcement">
          <p>
            If you are not satisfied with our response, you can contact the Equality Advisory
            Support Service (EASS) at{' '}
            <a
              href="https://www.equalityadvisoryservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-gold-light"
            >
              www.equalityadvisoryservice.com
            </a>
            .
          </p>
        </LegalSection>

        <p className="text-secondary/60 text-[0.78rem] italic">
          This statement was last updated in February 2026.
        </p>
      </div>
    </SectionWrap>
  );
}

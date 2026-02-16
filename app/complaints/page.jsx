import { SectionWrap, SectionHeading } from '@/components/atoms';

export const metadata = {
  title: 'Complaints Procedure',
  description:
    'Taylor Hampton Solicitors complaints procedure. How to raise a complaint, our internal process and contact details for the Legal Ombudsman.',
  alternates: {
    canonical: 'https://immigration.taylorhampton.co.uk/complaints',
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

export default function ComplaintsPage() {
  return (
    <SectionWrap bg="white" goldTop>
      <div className="max-w-[740px] mx-auto">
        <SectionHeading>Complaints Procedure</SectionHeading>

        <LegalSection title="Our Commitment">
          <p>
            Taylor Hampton Solicitors is committed to providing a high-quality legal service. We
            value the opportunity to put things right if something goes wrong. If you are unhappy
            with any aspect of the service you have received, we want to hear from you so that we
            can address your concerns.
          </p>
        </LegalSection>

        <LegalSection title="How to Raise a Complaint">
          <p>
            If you wish to make a complaint, please contact us in writing, setting out the details
            of your concern:
          </p>
          <p className="text-secondary">
            The Complaints Partner
            <br />
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

        <LegalSection title="What Happens Next">
          <p>Upon receiving your complaint, we will:</p>
          <ol className="list-decimal list-inside space-y-2 text-secondary">
            <li>
              Acknowledge your complaint in writing within three working days of receiving it.
            </li>
            <li>
              Investigate the matter thoroughly, reviewing the relevant file and speaking to the
              members of staff involved.
            </li>
            <li>
              Provide you with a substantive written response within 14 days. If the matter
              requires more time, we will notify you and provide a revised timeframe.
            </li>
            <li>
              If you remain dissatisfied, you may request a review by a senior partner. We will
              respond within a further 14 days.
            </li>
          </ol>
        </LegalSection>

        <LegalSection title="The Legal Ombudsman">
          <p>
            If we are unable to resolve your complaint to your satisfaction, you may be able to
            refer it to the Legal Ombudsman, who independently investigates complaints about legal
            services.
          </p>
          <p>
            You must normally refer your complaint to the Legal Ombudsman within six months of
            receiving a final written response from us, and within one year of the act or omission
            about which you are complaining (or within one year of when you should reasonably have
            known about it).
          </p>
          <div className="bg-cream rounded-sm p-6 border border-navy/[0.06]">
            <p className="font-semibold text-navy text-[0.88rem] mb-2">Legal Ombudsman</p>
            <p className="text-secondary text-[0.85rem]">
              PO Box 6167, Slough SL1 0EH
              <br />
              Telephone:{' '}
              <a href="tel:03005550333" className="text-gold hover:text-gold-light">
                0300 555 0333
              </a>
              <br />
              Email:{' '}
              <a
                href="mailto:enquiries@legalombudsman.org.uk"
                className="text-gold hover:text-gold-light"
              >
                enquiries@legalombudsman.org.uk
              </a>
              <br />
              Website:{' '}
              <a
                href="https://www.legalombudsman.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-gold-light"
              >
                www.legalombudsman.org.uk
              </a>
            </p>
          </div>
        </LegalSection>

        <LegalSection title="Solicitors Regulation Authority">
          <p>
            If your complaint relates to the conduct of a solicitor (as distinct from the quality
            of the service), you may also contact the Solicitors Regulation Authority (SRA):
          </p>
          <div className="bg-cream rounded-sm p-6 border border-navy/[0.06]">
            <p className="font-semibold text-navy text-[0.88rem] mb-2">
              Solicitors Regulation Authority
            </p>
            <p className="text-secondary text-[0.85rem]">
              The Cube, 199 Wharfside Street, Birmingham B1 1RN
              <br />
              Website:{' '}
              <a
                href="https://www.sra.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-gold-light"
              >
                www.sra.org.uk
              </a>
            </p>
          </div>
        </LegalSection>

        <p className="text-secondary/60 text-[0.78rem] italic">
          This procedure was last updated in February 2026.
        </p>
      </div>
    </SectionWrap>
  );
}

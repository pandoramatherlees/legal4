const SITE_URL = 'https://immigration.taylorhampton.co.uk';

export const LEGAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Taylor Hampton Solicitors — UK Immigration',
  description:
    'Specialist UK immigration solicitors advising on Global Talent, Spouse, Skilled Worker visas and more. Based in London.',
  url: SITE_URL,
  telephone: '+442074275970',
  email: 'enquiries@taylorhampton.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '38 Southwark Bridge Road',
    addressLocality: 'London',
    postalCode: 'SE1 9EU',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5045,
    longitude: -0.0935,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
};

export const ATTORNEY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Leena Chouhan',
  jobTitle: 'Solicitor — Immigration',
  worksFor: {
    '@type': 'LegalService',
    name: 'Taylor Hampton Solicitors',
  },
  description:
    'Specialist immigration solicitor with particular expertise in Global Talent visas for the creative industries.',
  url: `${SITE_URL}/contact`,
};

export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

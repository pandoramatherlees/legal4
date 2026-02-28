export default function sitemap() {
  const baseUrl = 'https://taylorhamptonimmigration.london';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/global-talent`, lastModified: new Date() },
    { url: `${baseUrl}/spouse`, lastModified: new Date() },
    { url: `${baseUrl}/skilled-worker`, lastModified: new Date() },
    { url: `${baseUrl}/fees`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/news-articles`, lastModified: new Date() },
    { url: `${baseUrl}/news-articles/uk-global-talent-visa-guide`, lastModified: new Date() },
  ];
}

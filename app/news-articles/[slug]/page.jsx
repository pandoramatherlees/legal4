import { ARTICLES } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Taylor Hampton Solicitors`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const paragraphs = article.content
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white pt-[84px]">
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <Link href="/news-articles" className="text-gold/70 hover:text-gold text-sm mb-6 inline-block transition-colors">
            ← Back to News Articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-gold text-[0.75rem] tracking-[0.2em] uppercase font-semibold">
              {article.category}
            </span>
            <span className="text-white/30">·</span>
            <time className="text-white/50 text-sm">{article.date}</time>
            {article.author && (
              <>
                <span className="text-white/30">·</span>
                <span className="text-white/50 text-sm">{article.author}</span>
              </>
            )}
          </div>
          <h1 className="font-serif text-white text-3xl md:text-4xl font-bold leading-snug">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href="/news-articles"
              className="text-gold font-semibold hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

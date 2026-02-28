import { ARTICLES } from '@/data/articles';
import Link from 'next/link';

export const metadata = {
  title: 'News Articles | Taylor Hampton Solicitors',
  description: 'Immigration law insights, updates and analysis from the team at Taylor Hampton Solicitors.',
};

export default function NewsArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.id - a.id);

  return (
    <main className="min-h-screen bg-white pt-[84px]">
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <p className="text-gold text-[0.78rem] tracking-[0.25em] uppercase mb-4">Taylor Hampton</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">News Articles</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Immigration law insights, legal updates and expert analysis from our solicitors.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          {sorted.length === 0 ? (
            <p className="text-gray-500">No articles published yet. Check back soon.</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {sorted.map((article) => (
                <article key={article.id} className="py-10 group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-gold text-[0.75rem] tracking-[0.2em] uppercase font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-300">·</span>
                    <time className="text-gray-400 text-sm">{article.date}</time>
                    {article.author && (
                      <>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-400 text-sm">{article.author}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mb-3 group-hover:text-gold transition-colors duration-200">
                    <Link href={`/news-articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-3xl mb-4">{article.excerpt}</p>
                  <Link
                    href={`/news-articles/${article.slug}`}
                    className="text-gold text-sm font-semibold tracking-wide hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

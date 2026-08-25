import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { posts as rawPosts } from "../config/journal";
import { useLocale } from "../hooks/useLocale";
import { localize } from "../i18n/localize";

export default function Journal() {
  const { t, locale } = useLocale();
  const posts = localize(rawPosts, locale);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title={t("nav.journal")}
        description={t("seo.journal.desc")}
        path="/journal"
      />
      <section className="bg-gray-900 py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">{t("journal.label")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            {t("journal.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("journal.subtitle")}
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid gap-8 max-w-3xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className="group block p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white group-hover:gap-2.5 transition-all">
                  {t("journal.readMore")} <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

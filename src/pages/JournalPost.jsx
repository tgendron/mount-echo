import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { posts } from "../config/journal";
import { useLocale } from "../hooks/useLocale";

export default function JournalPost() {
  const { t, locale } = useLocale();
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/journal" replace />;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/journal/${post.slug}`}
        ogType="article"
      />
      <section className="bg-gray-900 py-20 md:py-28">
        <Container className="max-w-3xl">
          <Link to="/journal" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> {t("journal.back")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-gray-300">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-gray-400 mt-4">{t("journal.by")} {post.author}</p>
        </Container>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <Container className="max-w-3xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {post.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-serif text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={i} className="font-semibold text-gray-900 dark:text-white mt-6 mb-2">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 my-4">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Handle bold text within paragraphs
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold text-gray-900 dark:text-white">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 text-center">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{t("journal.cta.title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{t("journal.cta.sub")}</p>
            <Link to="/book" className="btn btn-primary" style={{ backgroundColor: "#1a365d" }}>
              {t("journal.cta.btn")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

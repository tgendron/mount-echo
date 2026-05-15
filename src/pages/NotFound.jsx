import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import { useLocale } from "../contexts/LocaleContext";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="min-h-[60vh] flex items-center bg-white dark:bg-gray-900">
      <Container className="text-center">
        <p className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-4">{t("notfound.code")}</p>
        <h1 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("notfound.title")}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{t("notfound.body")}</p>
        <Link to="/" className="btn btn-primary" style={{ backgroundColor: "#1a365d" }}>
          {t("notfound.btn")}
        </Link>
      </Container>
    </section>
  );
}

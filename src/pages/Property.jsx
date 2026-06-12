import { useEffect } from "react";
import { Link } from "react-router-dom";
import { property } from "../config/property";
import { Bed, MapPin } from "lucide-react";
import { iconMap } from "../config/icons";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { useLocale } from "../hooks/useLocale";

export default function Property() {
  const { t } = useLocale();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="The Property"
        description="Four private bedrooms across two floors, shared common spaces, and the wild beauty of the Pacific Northwest. Explore Mount Echo."
        path="/property"
      />
      {/* Hero */}
      <section className="bg-gray-900 py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">{t("property.label")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            {t("property.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("property.desc")}
          </p>
        </Container>
      </section>

      {/* Floors & Rooms */}
      {property.floors.map((floor) => (
        <section key={floor.id} className="py-20 even:bg-gray-50 dark:even:bg-gray-800">
          <Container>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{floor.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10">{floor.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {floor.rooms.map((room) => (
                <div key={room.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <Bed size={40} className="text-gray-300 dark:text-gray-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">{room.name}</h3>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">{t(`property.bed.${room.beds.toLowerCase()}`)}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{room.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((f) => (
                        <span key={f} className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Common Areas */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            {t("property.shared")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {property.commonAreas.map((area) => (
              <div key={area.id} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{area.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            {t("property.amenities")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {property.amenities.map((a) => {
              const Icon = iconMap[a.icon] || iconMap.Star;
              return (
                <div key={a.id} className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl p-4">
                  <Icon size={20} className="text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{a.name}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Nearby Nature */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            {t("property.nature")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {property.nearbyNature.map((spot) => (
              <div key={spot.name} className="flex gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-800">
                <MapPin size={20} className="text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{spot.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{spot.distance}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <Container className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t("property.cta.title")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{t("property.cta.sub")}</p>
          <Link to="/book" className="btn btn-accent text-base px-10 py-4">
            {t("property.cta.btn")}
          </Link>
        </Container>
      </section>
    </>
  );
}

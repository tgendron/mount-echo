import { useEffect } from "react";
import { Camera, BarChart3, Rocket, Database, Calendar, Mail, CreditCard, Globe, Image, Shield } from "lucide-react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { useLocale } from "../hooks/useLocale";

const backlogItems = [
  {
    priority: "high",
    category: "Content",
    title: "Professional Photography",
    description: "Replace all placeholder gradients and icons with real property photography. Need hero shots for each experience, room photos, common areas, nature/trails, and lifestyle shots. Consider hiring a photographer for a 2-day shoot.",
    icon: Camera,
    effort: "External — 2-day photo shoot",
  },
  {
    priority: "high",
    category: "Content",
    title: "Image Optimization Pipeline",
    description: "Once photos are in, set up WebP conversion, responsive srcset attributes, lazy loading, and a CDN (Cloudflare Images or Imgix). Add blur-up placeholders for perceived performance.",
    icon: Image,
    effort: "1-2 days dev work",
  },
  {
    priority: "high",
    category: "Infrastructure",
    title: "Deploy to Production",
    description: "Shipped: deployed to Vercel (mount-echo.vercel.app) with SPA rewrites and SSL. Remaining: connect a custom domain and configure preview-branch deployments.",
    icon: Rocket,
    effort: "1-2 hours",
  },
  {
    priority: "low",
    category: "Infrastructure",
    title: "Connect Custom Domain (optional)",
    description: "Canonical URLs now point at the live mount-echo.vercel.app origin, so SEO and social share cards work. If a branded domain is wanted, register/connect mountecho.com (or similar) in Vercel, then update siteUrl in src/components/common/SEO.jsx plus the matching values in index.html, public/sitemap.xml, and public/robots.txt. Also swap the placeholder hello@mountecho.com contact email in Footer.jsx / BookingInquiry.jsx for a real inbox.",
    icon: Globe,
    effort: "1-2 hrs (domain purchase + DNS)",
  },
  {
    priority: "high",
    category: "Analytics",
    title: "Analytics & Event Tracking",
    description: "Add Plausible or PostHog for privacy-friendly analytics. Track: page views per experience, booking form submissions, scroll depth on experience pages, CTA click-through rates. Needs an account — also unlocks the French traffic data that gates content translation.",
    icon: BarChart3,
    effort: "2-3 hours",
  },
  {
    priority: "high",
    category: "Infrastructure",
    title: "Set VITE_ADMIN_PASSWORD for Preview Deployments",
    description: "The admin gate password is set for Production via the Vercel CLI, but the CLI could not target the Preview environment non-interactively. Add the same variable for Preview in the Vercel dashboard (Settings → Environment Variables) so branch deploys can access /admin. Until then, preview deploys safely deny all admin access.",
    icon: Shield,
    effort: "2 minutes — Vercel dashboard",
  },
  {
    priority: "medium",
    category: "Backend",
    title: "Supabase Backend",
    description: "Replace localStorage admin with Supabase. Tables: bookings, inquiries, concierge_requests, availability. Add Row Level Security, real auth for admin, and real-time updates. The admin pages are already structured for this swap.",
    icon: Database,
    effort: "3-5 days dev work",
  },
  {
    priority: "medium",
    category: "Backend",
    title: "Real Availability Calendar",
    description: "Connect the availability calendar to actual booking data. Support date range selection, conflict detection, and hold/tentative states. Consider integrating with Cal.com or building on Supabase.",
    icon: Calendar,
    effort: "2-3 days dev work",
  },
  {
    priority: "medium",
    category: "Automation",
    title: "Email Automation",
    description: "Set up transactional and marketing emails: inquiry confirmation, pre-arrival sequence (1 week, 3 days, 1 day before), post-stay follow-up + review request. Use Resend or Postmark.",
    icon: Mail,
    effort: "2-3 days dev work",
  },
  {
    priority: "medium",
    category: "Security",
    title: "Real Admin Authentication",
    description: "Replace the sessionStorage password gate with proper auth. Options: Supabase Auth (email + password), Clerk, or NextAuth. Add role-based access if needed for concierge staff vs. owners.",
    icon: Shield,
    effort: "1-2 days dev work",
  },
  {
    priority: "low",
    category: "Revenue",
    title: "Stripe Checkout (dynamic) & Webhooks",
    description: "Shipped: a $500 deposit via Stripe Payment Link on the booking page (set VITE_STRIPE_DEPOSIT_URL). Remaining: serverless Stripe Checkout for dynamic amounts (50% of the experience price), webhook handling to mark inquiries paid, balance reminders, and receipts.",
    icon: CreditCard,
    effort: "3-5 days dev work",
  },
  {
    priority: "low",
    category: "Growth",
    title: "Multi-Property Support",
    description: "The architecture already supports this. Add a propertyId to configs, create a property selector on the home page, and scope availability/booking to specific properties. For when Mount Echo expands to location #2.",
    icon: Globe,
    effort: "2-3 days refactor",
  },
];

const priorityConfig = {
  high: { labelKey: "backlog.high", color: "bg-red-50 text-red-600 border-red-100" },
  medium: { labelKey: "backlog.medium", color: "bg-amber-50 text-amber-600 border-amber-100" },
  low: { labelKey: "backlog.future", color: "bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700" },
};

export default function Backlog() {
  const { t } = useLocale();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const grouped = {
    high: backlogItems.filter((i) => i.priority === "high"),
    medium: backlogItems.filter((i) => i.priority === "medium"),
    low: backlogItems.filter((i) => i.priority === "low"),
  };

  return (
    <>
      <SEO title="Product Backlog" description="Mount Echo development roadmap and feature backlog." path="/admin/backlog" />

      <section className="bg-gray-900 py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">{t("backlog.label")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            {t("backlog.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("backlog.subtitle")}
          </p>
        </Container>
      </section>

      {/* Shipped */}
      <section className="py-12 bg-green-50/50 dark:bg-green-950/20 border-b border-green-100 dark:border-green-900">
        <Container>
          <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            {t("backlog.shipped")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "React SPA with Vite + Tailwind",
              "4 themed experience pages (CSS variable injection)",
              "Property page with rooms, amenities, nature",
              "Booking inquiry form (Formspree)",
              "Admin dashboard with password gate",
              "Availability calendar with room indicators",
              "Inquiry management with status filters",
              "Concierge request tracking",
              "Google Fonts (Inter + Playfair Display)",
              "Per-page SEO meta tags (react-helmet-async)",
              "Journal / blog with 3 seed posts",
              "Responsive design (mobile / tablet / desktop)",
              "About page with values",
              "Env-gated admin password (VITE_ADMIN_PASSWORD)",
              "Vercel SPA rewrites + robots.txt + sitemap.xml",
              "OG share image + LodgingBusiness JSON-LD",
              "Code-split bundle (984 kB → 354 kB)",
              "Bilingual UI incl. localized dates (EN/FR)",
              "Full EN/FR content (experiences, property, journal)",
              "Light/dark mode across all pages",
              "Nearby-experiences by retreat type (region-matched)",
              "Located in Knowlton / Eastern Townships, Québec",
              "Backlog moved behind the admin gate",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-green-800 dark:text-green-300 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 border border-green-100 dark:border-green-900">
                <span className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Backlog by priority */}
      {(["high", "medium", "low"]).map((priority) => (
        <section key={priority} className="py-12 border-b border-gray-100 dark:border-gray-700">
          <Container>
            <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${priorityConfig[priority].color}`}>
                {t(priorityConfig[priority].labelKey)}
              </span>
            </h2>
            <div className="grid gap-4">
              {grouped[priority].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-5 md:p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                          <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">{item.description}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{t("backlog.effort")}: {item.effort}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

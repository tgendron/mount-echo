import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Tag } from "./notion";
import { useLocale } from "../../hooks/useLocale";

const iso = (y, m, d) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

// Rent is due on `dueDay` every month; generate those entries for a given month.
function rentEvent(y, m, dueDay, label) {
  const last = new Date(y, m + 1, 0).getDate();
  return { id: `rent-${y}-${m}`, date: iso(y, m, Math.min(dueDay, last)), type: "rent", title: label };
}

export default function TenantCalendar({ events, dueDay }) {
  const { t, locale } = useLocale();
  const tag = locale === "fr" ? "fr-CA" : "en-CA";
  const today = new Date();
  const [cursor, setCursor] = useState({ y: today.getFullYear(), m: today.getMonth() });

  const all = [
    ...events,
    rentEvent(cursor.y, cursor.m, dueDay, t("tenant.calendar.rentDue")),
    rentEvent(cursor.y, cursor.m + 1, dueDay, t("tenant.calendar.rentDue")),
    rentEvent(cursor.y, cursor.m + 2, dueDay, t("tenant.calendar.rentDue")),
  ];
  const byDate = all.reduce((acc, e) => ((acc[e.date] ||= []).push(e), acc), {});

  const first = new Date(cursor.y, cursor.m, 1);
  const daysInMonth = new Date(cursor.y, cursor.m + 1, 0).getDate();
  const leading = first.getDay();
  const cells = [...Array(leading).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const weekdays = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, 7 + i).toLocaleDateString(tag, { weekday: "short" }));
  const monthLabel = first.toLocaleDateString(tag, { month: "long", year: "numeric" });
  const todayIso = iso(today.getFullYear(), today.getMonth(), today.getDate());

  const horizon = new Date(today); horizon.setDate(horizon.getDate() + 60);
  const upcoming = all
    .filter((e) => { const d = parse(e.date); return d >= new Date(todayIso) && d <= horizon; })
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .filter((e, i, arr) => arr.findIndex((x) => x.date === e.date && x.title === e.title) === i);

  const move = (delta) => setCursor(({ y, m }) => { const d = new Date(y, m + delta, 1); return { y: d.getFullYear(), m: d.getMonth() }; });

  return (
    <Section id="calendar" icon="🗓️" title={t("tenant.nav.calendar")}>
      <div className="rounded-xl border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5 p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <button type="button" onClick={() => move(-1)} aria-label={t("tenant.calendar.prev")} className="p-1.5 rounded-md hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10 text-[#0B0B0B] dark:text-white"><ChevronLeft size={18} /></button>
          <p className="font-semibold capitalize text-[#0B0B0B] dark:text-white">{monthLabel}</p>
          <button type="button" onClick={() => move(1)} aria-label={t("tenant.calendar.next")} className="p-1.5 rounded-md hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10 text-[#0B0B0B] dark:text-white"><ChevronRight size={18} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {weekdays.map((w) => (
            <div key={w} className="text-[10px] uppercase tracking-wider text-[#0B0B0B]/40 dark:text-white/40 py-1">{w}</div>
          ))}
          {cells.map((d, i) => {
            if (!d) return <div key={`b${i}`} />;
            const key = iso(cursor.y, cursor.m, d);
            const evs = byDate[key] || [];
            const isToday = key === todayIso;
            return (
              <div key={key} className={`min-h-[52px] rounded-md border p-1 text-left ${isToday ? "border-[#0B0B0B] dark:border-white" : "border-[#0B0B0B]/8 dark:border-white/8"}`}>
                <span className={`text-[11px] ${isToday ? "font-bold text-[#0B0B0B] dark:text-white" : "text-[#0B0B0B]/60 dark:text-white/60"}`}>{d}</span>
                <div className="mt-0.5 space-y-0.5">
                  {evs.slice(0, 2).map((e) => (
                    <div key={e.id} className="truncate"><Tag tone={e.type}>{e.title}</Tag></div>
                  ))}
                  {evs.length > 2 && <span className="text-[10px] text-[#0B0B0B]/50 dark:text-white/50">+{evs.length - 2}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0B0B0B]/60 dark:text-white/60 mb-3">{t("tenant.calendar.upcoming")}</h3>
      {upcoming.length === 0 ? (
        <p className="text-sm text-[#0B0B0B]/50 dark:text-white/50">{t("tenant.calendar.none")}</p>
      ) : (
        <ul className="divide-y divide-[#0B0B0B]/10 dark:divide-white/10">
          {upcoming.map((e) => (
            <li key={`${e.id}-${e.date}`} className="flex items-center gap-4 py-2.5 text-sm">
              <time dateTime={e.date} className="font-mono text-[11px] w-24 shrink-0 text-[#0B0B0B]/50 dark:text-white/50">
                {parse(e.date).toLocaleDateString(tag, { month: "short", day: "numeric" })}
              </time>
              <Tag tone={e.type}>{t(`tenant.tag.${e.type}`)}</Tag>
              <span className="text-[#0B0B0B] dark:text-white/90">{e.title}</span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

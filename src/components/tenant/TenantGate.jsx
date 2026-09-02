import { useState } from "react";
import { Link } from "react-router-dom";
import { unitIds } from "../../config/tenants";
import { useLocale } from "../../hooks/useLocale";

// Per-unit access codes. Client-side gate like the admin one — an obscurity
// layer, not real auth (real auth is on the backlog). With a code unset, that
// unit denies everyone rather than falling open.
const CODES = {
  10: import.meta.env.VITE_TENANT_CODE_10,
  12: import.meta.env.VITE_TENANT_CODE_12,
};

export default function TenantGate({ onAuth }) {
  const { t } = useLocale();
  const [unit, setUnit] = useState(unitIds[0]);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() guards against a stray newline/space in the stored env value
    const expected = (CODES[unit] || "").trim();
    if (expected && code === expected) {
      sessionStorage.setItem("tenant_unit", unit);
      onAuth(unit);
    } else {
      setError(true);
    }
  };

  const field =
    "w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B0B0B] dark:focus:ring-white bg-white dark:bg-white/5 text-[#0B0B0B] dark:text-white";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0] dark:bg-[#0B0B0B] px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="font-serif text-lg font-bold text-[#0B0B0B] dark:text-white">Mount Echo</Link>
        <h1 className="font-serif text-3xl font-bold text-[#0B0B0B] dark:text-white mt-6 mb-2">{t("tenant.gate.title")}</h1>
        <p className="text-sm text-[#0B0B0B]/60 dark:text-white/60 mb-8">{t("tenant.gate.sub")}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tenant-unit" className="block text-xs font-medium uppercase tracking-wider text-[#0B0B0B]/60 dark:text-white/60 mb-2">{t("tenant.gate.unit")}</label>
            <select id="tenant-unit" value={unit} onChange={(e) => { setUnit(e.target.value); setError(false); }} className={`${field} border-[#0B0B0B]/15 dark:border-white/15`}>
              {unitIds.map((u) => (
                <option key={u} value={u}>{u} chemin du Mont Echo</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tenant-code" className="block text-xs font-medium uppercase tracking-wider text-[#0B0B0B]/60 dark:text-white/60 mb-2">{t("tenant.gate.code")}</label>
            <input
              id="tenant-code"
              type="password"
              autoComplete="current-password"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(false); }}
              className={`${field} ${error ? "border-red-400" : "border-[#0B0B0B]/15 dark:border-white/15"}`}
              autoFocus
            />
            {error && <p className="text-xs text-red-500 mt-2" role="alert">{t("tenant.gate.error")}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full">{t("tenant.gate.btn")}</button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { LayoutDashboard, Calendar, MessageSquare, ConciergeBell, LogOut, Menu, X } from "lucide-react";

const adminLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Availability", path: "/admin/availability", icon: Calendar },
  { label: "Inquiries", path: "/admin/inquiries", icon: MessageSquare },
  { label: "Concierge", path: "/admin/concierge", icon: ConciergeBell },
];

function AdminAuth({ onAuth }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // MVP: simple password gate — replace with real auth
    if (password === "mountecho2026") {
      sessionStorage.setItem("admin_auth", "true");
      onAuth();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 w-full max-w-sm">
        <h1 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Admin Access</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Enter the admin password to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className={`w-full rounded-lg border px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 ${error ? "border-red-300" : "border-gray-200 dark:border-gray-600"}`}
            placeholder="Password"
            autoFocus
          />
          {error && <p className="text-xs text-red-500 mb-4">Incorrect password.</p>}
          <button type="submit" className="btn btn-primary w-full" style={{ backgroundColor: "#1a365d" }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("admin_auth") === "true");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  if (!authed) return <AdminAuth onAuth={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100 dark:border-gray-700">
          <Link to="/admin" className="font-serif text-lg font-bold text-gray-900 dark:text-white">Mount Echo</Link>
          <button className="lg:hidden p-1 text-gray-500 dark:text-gray-400" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {adminLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === path
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => { sessionStorage.removeItem("admin_auth"); setAuthed(false); }}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors w-full"
          >
            <LogOut size={16} /> Sign Out
          </button>
          <Link to="/" className="block mt-2 px-3 py-2 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
            &larr; Back to site
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center px-4 lg:px-8">
          <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300 mr-4" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <h1 className="text-sm font-medium text-gray-900 dark:text-white">
            {adminLinks.find((l) => l.path === location.pathname)?.label || "Admin"}
          </h1>
        </header>
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

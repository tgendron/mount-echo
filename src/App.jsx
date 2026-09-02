import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import Property from "./pages/Property";
import BookingInquiry from "./pages/BookingInquiry";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import NotFound from "./pages/NotFound";

// Admin area is code-split so guests never download it
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Availability = lazy(() => import("./pages/admin/Availability"));
const Inquiries = lazy(() => import("./pages/admin/Inquiries"));
const Concierge = lazy(() => import("./pages/admin/Concierge"));
const Backlog = lazy(() => import("./pages/Backlog"));
const TenantPortal = lazy(() => import("./pages/tenant/TenantPortal"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* Guest-facing */}
          <Route element={<GuestLayout />}>
            <Route index element={<Home />} />
            {/* Claude Camp merged into Coding & Claude Camp — keep old links alive */}
            <Route path="experience/claude-camp" element={<Navigate to="/experience/coding-bootcamps" replace />} />
            <Route path="experience/:slug" element={<ExperiencePage />} />
            <Route path="property" element={<Property />} />
            <Route path="book" element={<BookingInquiry />} />
            <Route path="about" element={<About />} />
            <Route path="journal" element={<Journal />} />
            <Route path="journal/:slug" element={<JournalPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Tenant portal — long-term renters of units 10 and 12 */}
          <Route path="tenant" element={<TenantPortal />} />

          {/* Admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="availability" element={<Availability />} />
            <Route path="inquiries" element={<Inquiries />} />
            <Route path="concierge" element={<Concierge />} />
            <Route path="backlog" element={<Backlog />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

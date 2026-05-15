import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import Property from "./pages/Property";
import BookingInquiry from "./pages/BookingInquiry";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import Backlog from "./pages/Backlog";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Availability from "./pages/admin/Availability";
import Inquiries from "./pages/admin/Inquiries";
import Concierge from "./pages/admin/Concierge";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest-facing */}
        <Route element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="experience/:slug" element={<ExperiencePage />} />
          <Route path="property" element={<Property />} />
          <Route path="book" element={<BookingInquiry />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:slug" element={<JournalPost />} />
          <Route path="backlog" element={<Backlog />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="availability" element={<Availability />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="concierge" element={<Concierge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] dark:bg-[#0B0B0B]">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children, onSearch }) {
  const [collapsed, setCollapsed] = useState(true);

  // par défaut : mobile fermé / desktop ouvert
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setCollapsed(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white min-h-screen flex flex-col">
      {/* Header occupe 100% en haut */}
      <Header onToggleSidebar={() => setCollapsed(c => !c)} onSearch={onSearch} />

      {/* Zone en dessous = Sidebar + contenu */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} />
        <main className="flex-1 overflow-y-auto pt-[56px]">{children}</main>
      </div>

      {/* Footer fixé en bas */}
      <Footer />
    </div>
  );
}

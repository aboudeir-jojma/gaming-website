"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect, useState } from "react";
import Script from "next/script";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

export default function Layout({ children, onSearch }) {
  const [collapsed, setCollapsed] = useState(true);

  // Par défaut : mobile (sidebar fermée) / desktop (ouverte)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setCollapsed(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Décalage du contenu quand le sidebar est fixe
  const marginLeft = collapsed ? "ml-16 md:ml-16" : "ml-48 md:ml-48";

  return (
    <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white min-h-screen flex flex-col overflow-x-hidden w-full">
      {/* --- Google Analytics --- */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PRC5SDWDSS"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PRC5SDWDSS');
        `}
      </Script>
      {/* --- /Google Analytics --- */}

      {/* Header plein écran */}
      <Header onToggleSidebar={() => setCollapsed((c) => !c)} onSearch={onSearch} />

      {/* Zone principale : sidebar fixe + contenu décalé */}
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} />

<main
  className={`flex-1 overflow-y-auto pt-[35px]  w-full transition-all duration-300`}
  style={{
   marginLeft:  collapsed ? "40px" : "90px" }}
>
  {children}
</main>

      </div>

      {/* Footer */}
      <Footer collapsed={collapsed}  />
      <BackToTopButton />


         <SpeedInsights />
    </div>
  );
}

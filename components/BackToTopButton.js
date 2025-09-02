"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { ArrowUpCircle } from "lucide-react"; // 👈 nouvel icône

export default function BackToTopButton({


  inline = false,           // 👈 nouveau : mode inline
  label = "Back to top",    // 👈 texte personnalisable
  className = ""            // 👈 classes additionnelles
}) {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation("common");
  useEffect(() => {
    if (inline) {
      // En mode inline, toujours visible dans le footer
      setVisible(true);
      return;
    }
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [inline]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  // Style commun
  const base =
    "flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white " +
    "rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition-colors duration-300 " +
    className;

  if (inline) {
    // 👉 Version intégrée au footer (pas de position fixed)
    return (
      <button onClick={scrollToTop} aria-label={label} className={base}>
        <span className="text-xl">↑</span> {label}
      </button>
    );
  }

  // 👉 Version flottante (actuelle)
  return (
    <button
      onClick={scrollToTop}
      aria-label={label}
      className={`fixed bottom-8 right-8 z-50 ${base}`}
    >
      <ArrowUpCircle className="w-5 h-5" />
         {t("backToTop")}
    </button>
  );
}

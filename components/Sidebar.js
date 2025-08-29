"use client";
import Link from "next/link";
import { useTranslation } from 'next-i18next';


export default function Sidebar({ collapsed }) {
  const { t } = useTranslation('common');
  
  const items = [
    {href:"/", label:t('sidebar.home'), icon:"🏠"},
    {href:"/category/racing", label:t('sidebar.racing'), icon:"🏎️"},
    {href:"/category/puzzle", label:t('sidebar.puzzle'), icon:"🧩"},
    {href:"/category/action", label:t('sidebar.action'), icon:"⚔️"},
    {href:"/category/sports", label:t('sidebar.sports'), icon:"🏀"},
    {href:"/category/adventure", label:t('sidebar.adventure'), icon:"🧗"},
    {href:"/category/simulation", label:t('sidebar.simulation'), icon:"🧑‍💻"},
    {href:"/category/food", label:t('sidebar.food'), icon:"🥗"},
    {href:"/category/nature", label:t('sidebar.nature'), icon:"🌍"},
    {href:"/category/animals", label:t('sidebar.animals'), icon:"🦋"},
    {href:"/category/arcade", label:t('sidebar.arcade'), icon:"👾"},
    {href:"/category/brain", label:t('sidebar.brain'), icon:"🧠"},
    {href:"/category/strategy", label:t('sidebar.strategy'), icon:"🏰"},
    {href:"/category/creative", label:t('sidebar.creative'), icon:"🎨"},
    {href:"/category/horror", label:t('sidebar.horror'), icon:"🧟"},
    {href:"/category/shooter", label:t('sidebar.shooter'), icon:"💣"},
    {href:"/category/multiplayer", label:t('sidebar.multiplayer'), icon:"🌐"},
  ];

// ...existing code...
  return (
    <aside
      className={`flex flex-col shrink-0 border-r border-white/5 bg-white text-black dark:bg-[#0b0c12] dark:text-white transition-all duration-200 sticky top-0 z-30 overflow-y-auto
      ${collapsed ? "w-14" : "w-56"}`}
    >
      <nav className="flex flex-col flex-1 gap-1 p-2">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            title={collapsed ? i.label : undefined}
          >
            <span className="text-lg">{i.icon}</span>
            {!collapsed && <span>{i.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


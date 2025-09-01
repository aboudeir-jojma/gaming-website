"use client";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


export default function Sidebar({ collapsed }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  
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
      className={`flex flex-col shrink-0 border-r-2 border-gray-300 dark:border-gray-600 bg-gray-100 text-black dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-xl transition-all duration-300 fixed top-[56px] left-0 h-[calc(100vh-56px)] z-30 overflow-y-auto no-scrollbar
      ${collapsed ? "w-16" : "w-48"}`}
    >
      <nav className="flex flex-col flex-1 gap-2 p-3">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105 ${router.pathname === i.href ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 shadow-md' : ''} ${collapsed ? 'justify-center' : ''}`}
            title={collapsed ? i.label : undefined}
          >
            <span className="text-xl">{i.icon}</span>
            {!collapsed && <span className="font-medium">{i.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


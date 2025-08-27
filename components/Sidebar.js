"use client";
import Link from "next/link";

export default function Sidebar({ collapsed }) {
  const items = [
    {href:"/", label:"Home", icon:"🏠"},
    {href:"/category/racing", label:"Racing", icon:"🏎️"},
    {href:"/category/puzzle", label:"Puzzle", icon:"🧩"},
    {href:"/category/action", label:"Action", icon:"⚔️"},
    {href:"/category/sports", label:"Sports", icon:"🏀"},
    {href:"/category/adventure", label:"Adventure", icon:"🧗"},
    {href:"/category/simulation", label:"Simulation", icon:"🧑‍💻"},
    {href:"/category/food", label:"Food", icon:"🥗"},
    {href:"/category/nature", label:"Nature", icon:"🌍"},
    {href:"/category/animals", label:"Animals", icon:"🦋"},
    {href:"/category/arcade", label:"Arcade", icon:"👾"},
    {href:"/category/brain", label:"Brain", icon:"🧠"},
    {href:"/category/strategy", label:"Strategy", icon:"🏰"},
    {href:"/category/creative", label:"Creative", icon:"🎨"},
    {href:"/category/horror", label:"Horror", icon:"🧟"},
    {href:"/category/shooter", label:"Shooter", icon:"💣"},
    {href:"/category/multiplayer", label:"Multiplayer", icon:"🌐"},
  ];

// ...existing code...
  return (
    <aside
      className={`flex flex-col h-[calc(100dvh-56px)] shrink-0 border-r border-white/5 bg-white text-black dark:bg-[#0b0c12] dark:text-white transition-all duration-200
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


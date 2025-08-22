import Link from "next/link";

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`h-[calc(100dvh-56px)] shrink-0 border-r border-white/5 bg-[#0c0d11] transition-all duration-200
      ${collapsed ? "w-14" : "w-56"}`}
    >
      <nav className="flex flex-col gap-1 p-2">
        {[
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

// nouvelles catégories proposées
{href:"/category/arcade", label:"Arcade", icon:"👾"},
{href:"/category/brain", label:"Brain", icon:"🧠"},
{href:"/category/strategy", label:"Strategy", icon:"🏰"},
{href:"/category/creative", label:"Creative", icon:"🎨"},
{href:"/category/horror", label:"Horror", icon:"🧟"},
{href:"/category/shooter", label:"Shooter", icon:"💣"},
{href:"/category/multiplayer", label:"Multiplayer", icon:"🌐"},

        ].map(i=>(
          <Link key={i.href} href={i.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-white/5">
            <span className="text-lg">{i.icon}</span>
            {!collapsed && <span>{i.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

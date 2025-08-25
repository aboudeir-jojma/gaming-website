"use client";
import { useState } from "react";
import Link from 'next/link';

export default function Header({ onToggleSidebar }) {
  const [q, setQ] = useState("");
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-[#12131a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-xl bg-card px-3 py-2 text-sm hover:opacity-90"
          aria-label="Toggle sidebar"
        >☰</button>

   <Link href="/">
     <div className="text-lg font-extrabold tracking-tight">PcGameOn</div>
</Link>

        <div className="ml-auto w-full max-w-xl">
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Search"
            className="w-full rounded-2xl bg-card px-4 py-2 outline-none"
          />
        </div>

       
      </div>
    </header>
  );
}

"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-dvh flex-col">
      <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
      <div className="mx-auto flex w-full max-w-7xl gap-4 px-4">
        <Sidebar collapsed={collapsed} />
        <main className="min-h-[calc(100dvh-56px)] flex-1 pb-16">{children}</main>
      </div>
    </div>
  );
}

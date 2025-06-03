"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 rounded-full p-2 bg-zinc-200 dark:bg-zinc-800 hover:scale-105 shadow-md transition-all"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "🌞" : "🌚"}
    </button>
  );
}

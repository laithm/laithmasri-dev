"use client";

import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeToggle />
        {children}
      </div>
    </ThemeProvider>
  );
}

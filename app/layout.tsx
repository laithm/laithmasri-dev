import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientRoot from "@/components/ClientRoot";
import RightSidebar from "@/components/RightSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laith Masri – Quantitative Engineer",
  description:
    "Engineer. Researcher. Scripter. Building at the edge of circuits, code, and capital.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {/* ✅ Correctly use both components here */}
        <RightSidebar />
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}


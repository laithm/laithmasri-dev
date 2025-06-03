export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 flex flex-col items-center relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Top-left corner heading */}
      <div className="absolute top-4 left-6 text-lg font-semibold opacity-70">
        Laith Masri
      </div>

      {/* Logo with conditional hover pulse */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 transition-all duration-700 ease-out scale-110 group-hover:animate-ping"></div>

        <img
          src="/favicon.png"
          alt="Laith Masri logo"
          className="
            relative z-10 w-32 h-32
            transition-transform duration-1000 ease-out
            group-hover:rotate-[360deg] group-hover:scale-[2.5]
          "
        />
      </div>

      {/* Description */}
      <p className="mb-12 max-w-2xl text-xl text-center opacity-80">
        Engineering student @ Aston (MEng EEE). Exploring AI, circuits, and
        financial systems through hands-on research and builds. Freelance Roblox
        developer — scripting, system design, and game creation.
      </p>

      {/* Nav */}
      <nav className="flex flex-col gap-6 text-lg text-center sm:flex-row">
        <a href="/lab" className="hover:underline">
          🧠 Lab Logs
        </a>
        <a href="/research" className="hover:underline">
          📚 Research
        </a>
        <a href="/quant" className="hover:underline">
          📈 Quant Models
        </a>
        <a href="/engineering" className="hover:underline">
          ⚙️ Engineering Projects
        </a>
        <a href="/roblox" className="hover:underline">
          🕹 Roblox Projects
        </a>
      </nav>
    </main>
  );
}

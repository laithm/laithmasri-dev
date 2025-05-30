export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center relative">
      {/* Top-left corner heading */}
      <div className="absolute top-4 left-6 text-lg font-semibold text-white opacity-70">
        Laith Masri
      </div>

      {/* Logo with conditional hover pulse */}
      <div className="group relative mb-8">
        {/* Pulsing ring only on hover */}
        <div className="
          absolute inset-0 rounded-full bg-cyan-500 opacity-20 scale-110
          transition-all duration-700 ease-out
          group-hover:animate-ping
        "></div>

        {/* Interactive icon */}
        <img
          src="/favicon.png"
          alt="Laith Masri logo"
          className="
            relative z-10
            w-32 h-32
            transition-transform duration-1000 ease-out
            group-hover:rotate-[360deg] group-hover:scale-[2.5]
          "
        />
      </div>

      {/* Description */}
      <p className="text-xl text-gray-400 mb-12 max-w-2xl text-center">
        Engineering student @ Aston (MEng EEE). Exploring AI, circuits, and financial systems through hands-on research and builds. Freelance Roblox developer — scripting, system design, and game creation.
      </p>

      {/* Nav */}
      <nav className="flex flex-col sm:flex-row gap-6 text-lg text-center">
        <a href="/lab" className="hover:underline">🧠 Lab Logs</a>
        <a href="/research" className="hover:underline">📚 Research</a>
        <a href="/quant" className="hover:underline">📈 Quant Models</a>
        <a href="/engineering" className="hover:underline">⚙️ Engineering Projects</a>
        <a href="/roblox" className="hover:underline">🕹 Roblox Projects</a>
      </nav>
    </main>
  );
}

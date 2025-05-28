export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-center">Laith Masri</h1>
      <p className="text-xl text-gray-400 mb-10 max-w-2xl text-center">
        Quantitative engineer & researcher. MEng EEE @ Aston. Building at the edge of AI, circuits, and markets.
      </p>

      <nav className="flex flex-col sm:flex-row gap-6 text-lg text-center">
        <a href="/lab" className="hover:underline">🧠 Lab Logs</a>
        <a href="/research" className="hover:underline">📚 Research</a>
        <a href="/quant" className="hover:underline">📈 Quant Models</a>
        <a href="/code" className="hover:underline">⚙️ Engineering Projects</a>
      </nav>
    </main>
  );
}

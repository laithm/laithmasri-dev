"use client";

import { useState } from "react";

export default function LeftSidebar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-6 left-6 z-50 flex flex-col gap-1 group"
        onClick={() => setVisible(!visible)}
      >
        <span className="w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-all" />
        <span className="w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-all" />
        <span className="w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-all" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white text-black z-40 shadow-md transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">🚀 Menu</h2>
          <ul className="space-y-3">
            <li>
              <a href="/projects" className="hover:underline">
                💻 Projects
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                👤 About Me
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                ✍️ Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


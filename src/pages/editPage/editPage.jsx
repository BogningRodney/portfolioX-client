import { useState } from "react";

export default function EditPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-white flex">

      {/* ICON OPEN SIDEBAR */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="absolute left-4 top-4 z-50 text-purple-500"
      >
        <img src="/icons/folder.svg" className="w-10 h-10" />
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white shadow-xl border-r border-purple-300
          transform transition-transform duration-300 z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-3 top-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div className="p-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded">
            Import file
          </button>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-full h-20 bg-gray-300 rounded" />
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto p-10 ml-0">
        <div className="max-w-4xl mx-auto">

          <div className="w-full h-80 bg-gray-300 rounded mb-8" />

          <h1 className="text-4xl font-bold mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>

          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-40 bg-gray-300 rounded" />
            ))}
          </div>

        </div>
      </main>

    </div>
  );
}

import React, { useState } from "react";

const filters = ["All", "web developer", "web designer", "Graphiste"];

const Models = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Header */}
      <header className="flex justify-between items-center px-4 mb-10">
        <img src="/logo/logo.png" alt="logo" className="w-12" />

        <div className="text-2xl cursor-pointer">
          <span className="text-gray-700">👤</span>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-purple-600 mb-10">
        The easiest way to create your portfolio
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder=""
          className="w-full max-w-2xl border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-purple-500 transition"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-md border border-purple-400 text-purple-600 text-sm font-medium transition 
            ${
              activeFilter === filter
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white hover:bg-purple-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 bg-gray-200 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Models;

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 lg:px-20">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7  rounded-full flex items-center justify-center text-white font-bold">
          <img src="/logo/logo.png" alt="" />
        </div>
        <h1 className="font-semibold text-lg">PortfoliX</h1>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-gray-700">
        <li className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1 cursor-pointer">
           <a href="/">Home</a>
        </li>
        <li className="cursor-pointer"> <a href="/models">Models</a></li>
        <li className="cursor-pointer"><a href="edit">Edit</a></li>
        <li className="cursor-pointer"><a href="/login">Login</a></li>
        <li className="cursor-pointer"><a href="/logout">Sign Up</a></li>
      </ul>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full pl-8 pr-4 py-2 text-sm"
        />
        <span className="absolute top-2.5 left-3 text-xs">🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;

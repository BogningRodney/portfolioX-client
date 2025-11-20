import React from 'react'


const Logout = () => {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      {/* Logo */}
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center">
          <img src="/logo/logo.png" alt="logo" className="w-20" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-10">
        Create an account
      </h1>

      {/* Form */}
      <form className="w-full max-w-sm flex flex-col gap-6">

        {/* Email */}
        <div className="relative">
          <span className="absolute left-0 top-1.5 text-gray-500 text-xl">
            ✉️
          </span>
          <input
            type="email"
            placeholder="enter your name"
            className="w-full border-b border-gray-400 pl-8 pb-2 focus:outline-none focus:border-purple-500 transition"
          />
        </div>


        {/* Email */}
        <div className="relative">
          <span className="absolute left-0 top-1.5 text-gray-500 text-xl">
            ✉️
          </span>
          <input
            type="email"
            placeholder="enter your email"
            className="w-full border-b border-gray-400 pl-8 pb-2 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="enter your password"
            className="w-full border-b border-gray-400 pb-2 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 rounded-md font-medium hover:bg-purple-600 transition mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Logout

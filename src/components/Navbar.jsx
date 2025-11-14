import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-[#FFF2E1] font-poppins fixed top-0 left-0 w-full z-50">
      <div className="text-[#113C49] flex items-center justify-center font-bold">
        <span className="relative inline-flex items-center justify-center w-6 h-6 ">
          {/* Rhombus background */}
          <span className="absolute inset-0 bg-[#65DAFF] rotate-45"></span>
          {/* Text inside diamond */}
          <span className="relative text-[#113C49] ml-10">
            Sk<span className="text-[#113C49]">illine</span>
          </span>
        </span>
      </div>
      <div className="flex gap-40 items-center">
        <ul className="hidden md:flex gap-16 text-gray-700 font-medium">
          <li className="text-[#252641] cursor-pointer">Home</li>
          <li className="text-[#252641] cursor-pointer">Careers</li>
          <li className="text-[#252641] cursor-pointer">Blog</li>
          <li className="text-[#252641] cursor-pointer">About Us</li>
        </ul>
        <div className="flex gap-10">
          <button className="px-6 py-1 bg-white rounded-full cursor-pointer text-[#6C6C6C]">
            Login
          </button>
          <button className="px-6 py-1 cursor-pointer text-white rounded-full bg-[#F48C06]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

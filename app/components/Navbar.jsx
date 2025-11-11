import React, { useEffect, useRef, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  
  const openMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-full");
    sideMenuRef.current.classList.add("translate-x-0");
  }

    const closeMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-0");
    sideMenuRef.current.classList.add("translate-x-full");
    };


  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-all duration-300
          ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        {/* Logo */}
        <h1 className="w-28 cursor-pointer flex items-center gap-2 text-xl font-bold">
          <VscCode className="w-8 h-8" />
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm">
          <li className="hover:text-purple-500 transition">
            <a href="#top">Home</a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a href="#about">About me</a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a href="#work">My Work</a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-gray-100 transition"
          >
            Contact <MdArrowOutward className="w-3 h-3" />
          </a>

          <button onClick={openMenu} className="block md:hidden ml-3 cursor-pointer">
            <AiOutlineMenuFold className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-purple-50 z-50
                     transform translate-x-full transition-transform duration-500 shadow-lg ${isScroll ? "" : "bg-purple shadow-sm bg-opacity-50"}`}
        >
          <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer">
            <IoMdClose className="w-7 h-7" />
          </div>

          <li className="hover:text-purple-500 transition">
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li className="hover:text-purple-500 transition">
            <a onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;

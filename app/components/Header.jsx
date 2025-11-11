import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-medium">
         Hi, I'm Sunny Kumar
      </h3>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold leading-tight">
        Software engineer based in New York City.
      </h1>

      <p className="text-gray-700 text-base sm:text-lg max-w-xl">
        I am a software engineer from NYC, USA. I specialize in building modern and scalable web applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
          hover:bg-gray-900 transition-all duration-300"
        >
          Contact me <FaArrowRight />
        </a>

        <a
          href="/Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
           hover:bg-gray-100 transition-all duration-300"
        >
          My resume <MdDownload className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default Header

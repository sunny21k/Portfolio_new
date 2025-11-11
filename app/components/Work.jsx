import { workData } from '@/assets/assets'
import { IoIosSend } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import React from 'react'

const Work = () => {
  return (
    <div id='work' className="w-full px-[10%] py-20 scroll-mt-20">
      {/* Section Titles */}
      <div className="text-center mb-16">
        <h4 className="font-semibold text-lg mb-2">Projects & Creations</h4>
        <h2 className="text-gray-800 text-5xl font-bold">Welcome to My Project Section</h2>
      </div>

      <p className="mb-12 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        Explore some of my work showcasing my expertise in full stack development, from front-end designs 
        to back-end solutions. Each project reflects my passion for creating efficient, user-friendly, 
        and technically sound applications.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className='relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl 
            transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-end p-6'
          >
            <h2 className='text-white text-md font-bold mb-2'>{project.title}</h2>
            <p className='text-gray-300 text-sm mb-4'>{project.description}</p>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[2px_2px_0_#000] 
            group-hover:bg-purple-400 transform group-hover:-translate-y-1 transition-all duration-300'>
              <IoIosSend className='w-5 h-5 text-black' />
            </div>
          </a>
        ))}
      </div>

      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto my-20 hover:bg-purple-100 duration-500'>
        Show more <MdArrowOutward className="w-3 h-3" />
      </a>
    </div>
  )
}

export default Work

import { workData } from '@/assets/assets'
import { IoIosSend } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
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
          <div
            key={index}
            className='relative aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition'
            style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5'>
              <h2 className='text-white text-lg font-semibold'>{project.title}</h2>
              <p className='text-gray-200 text-sm mb-3'>{project.description}</p>
              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-300 transition'>
                <IoIosSend className='w-5 h-5 text-black' />
              </div>
            </div>
          </div>
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

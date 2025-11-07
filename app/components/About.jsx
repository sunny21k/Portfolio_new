import { infoList, toolsData } from '@/assets/assets'
import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full px-[10%] py-20 scroll-mt-20">
      {/* Section Titles */}
      <div className="text-center mb-16">
        <h4 className="font-semibold text-lg mb-2">Introduction</h4>
        <h2 className="text-gray-800 text-5xl font-bold">About Me</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-16">
        <div className="flex-1">
          <p className="mb-12 text-gray-700 text-lg leading-relaxed max-w-3xl">
            I’m a passionate full stack developer driven by curiosity and a desire to grow. 
            I enjoy building modern, user-friendly web applications using technologies like React, Next.js, and Node.js, 
            and love tackling challenges that push my skills and deliver meaningful results.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {infoList.map(({ title, description, icon }, index) => (
              <li
                key={index}
                className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200 bg-white shadow-sm 
                    hover:shadow-lg hover:-translate-y-2 hover:bg-purple-50 transition-all duration-300 hover:[box-shadow:4px_4px_0_#000]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-snug">{description}</p>
              </li>
            ))}
          </ul>

        <h4 className="my-6 text-gray-700 text-lg sm:text-xl font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
            Tech Stack
        </h4>

        <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
                <li key={index}
                className="flex flex-col items-center justify-center w-16 sm:w-20 aspect-square border border-gray-400
                    rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2"
                >
                {tool.icon}
                <span className="text-xs sm:text-sm text-gray-700 mt-1 text-center">{tool.name}</span>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About

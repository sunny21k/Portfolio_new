import React from 'react'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div id='contact' className="w-full px-[10%] py-20 scroll-mt-20">
      {/* Section Titles */}
      <div className="text-center mb-16">
        <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
        <h2 className="text-gray-800 text-5xl font-bold">Contact Me</h2>
      </div>

      <p className="mb-12 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        Have a project, idea, or just want to say hello? Fill out the form below or reach me through the contact info.
      </p>

    <form className="max-w-2xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
            <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
            />
            <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
            />
        </div>

        <textarea
            rows="6"
            placeholder="Enter your message"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200 transition resize-none"
        />

        <button
        type="submit"
        className="bg-black cursor-pointer text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 justify-center 
            hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
        >
        Submit
        <IoIosSend className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p>Sending...</p>
    </form>
    </div>
  )
}

export default Contact
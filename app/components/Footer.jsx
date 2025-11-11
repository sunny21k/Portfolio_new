import React from 'react'
import { MdMail } from "react-icons/md";
import { VscCode } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <VscCode className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <MdMail className='w-6'/>
                sunnyk215382433@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Sunny Kumar — From idea → code → creation.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/sunny21k">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/sunny-kumar2/">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
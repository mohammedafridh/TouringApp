import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'

const NewsLetter = () => {
    return (
        <div className='bg-black pt-16 pb-16 flex items-center justify-center flex flex-col text-white'>
            <BsEnvelopePaper className=' w-16 h-16 mb-2' />

            <h1 className='font-semibold text-lg sm:text-xl md:text-2xl tracking-widest'>Your Travel Journey Starts Here</h1>
            <p className='text-xs sm:text-sm font-normal text-gray-300 mt-2'>Sign up and we'll send the best deals to you</p>

            <div className='w-full'>
                <input type="text" placeholder='Email' 
                className='border-none outline-none bg-white block mx-auto rounded-lg mt-5 px-6 py-3.5 text-black 
                 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]'
                />

                <button className='bg-blue-700 hover:bg-blue-900 transition-all duration-200 px-6 py-3.5 mt-4 rounded-lg 
                block mx-auto cursor-pointer w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] outline-none'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
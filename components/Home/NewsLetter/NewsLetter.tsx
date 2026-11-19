import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'

const NewsLetter = () => {
    return (
        <div className='bg-black pt-16 pb-8 flex items-center justify-center flex flex-col text-white'>
            <BsEnvelopePaper className=' w-[50px] h-[100px] mb-2' />

            <h1 className='font-semibold text-lg'>Your Travel Journey Starts Here</h1>
            <p className='text-xs font-normal text-gray-300 mt-2'>Sign up and we'll send the best deals to you</p>

            <div className='flex flex-col gap-2'>
                <input type="text" placeholder='Email' 
                className='border-none outline-none bg-white rounded-sm mt-5 p-2 text-black text-sm w-[400px]'
                />

                <button className='bg-blue-700 p-2 rounded-sm text-sm cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
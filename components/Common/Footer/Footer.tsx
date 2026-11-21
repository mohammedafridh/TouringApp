import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='p-16'>
            <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {/* 1st section */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>About US</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Careers</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Blog</p>
                </div>

                {/* 2nd section */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Support</h1>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Contact</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Privacy Policy</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Terms & Conditions</p>
                </div>

                {/* 3rd section */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Other Services</h1>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Travel Agents</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Car Hire</p>
                    <p className='text-gray-900 hover:text-blue-800 cursor-pointer font-medium text-sm'>Flight Finder</p>
                </div>

                {/* 4th section */}
                <div className='space-y-3'>
                    <h1 className='text-lg font-bold'>Contact Us</h1>
                    <div className='mt-5'>
                        <h1 className='text-sm text-gray-700'>Our Mobile Number</h1>
                        <h1 className='text-base font-bold text-blue-900'>+94 763 641 541</h1>
                    </div>

                    <div>
                        <h1 className='text-sm text-gray-700'>Our Email Address</h1>
                        <h1 className='text-base font-bold text-blue-900'>srilankantouring@gmail.com</h1>
                    </div>
                </div>
            </div>

            {/* bottom section */}
            <div className='w-[80%] mx-auto border-t mt-8 pt-8 text-gray-600 flex flex-col md:flex-row items-center
        justify-between text-sm'>
                <p className='text-center md:text-left'>&copy; 2026 Touring Sri Lanka. All rights reserved</p>
                <div className='flex space-x-4 items-center mt-4 md:mt-0'>
                    <span> Social :</span>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'><FaWhatsapp /></Link>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'><FaTwitter /></Link>
                    <Link href="#" className='text-gray-500 hover:text-gray-800'><FaFacebook /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
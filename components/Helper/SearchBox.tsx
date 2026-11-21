import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        {/* 1st item */}
        <div className='flex items-center space-x-4 w-full'>
            <FaMap className='text-blue-600 w-6 h-6 shrink-0'/>
            <div className='min-w-0 flex-1'>
                <p className='text-lg font-medium mb-[0.2rem]'>Locations</p>
                <input type="text" placeholder='Where are you going?'  className='border-none outline-none w-full'/>
            </div>
        </div>

         {/* 2nd item */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='text-blue-600 w-6 h-6'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                <input type="date"  className='border-none outline-none'/>
            </div>
        </div>

        {/* 3rd item */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='text-blue-600 w-6 h-6'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                <input type="date"  className='border-none outline-none'/>
            </div>
        </div>

        {/* 4th item */}
        <div className='flex items-center space-x-6'>
            <FaUserGroup className='text-blue-600 w-6 h-6'/>
            <div>
                 <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                <input type="text" placeholder='1 Guest 1 Room'  className='border-none outline-none'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBox
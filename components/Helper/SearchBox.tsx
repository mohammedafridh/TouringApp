import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { useFormContext } from "react-hook-form"
import { FieldError } from './FieldError'


// export type SearchValues = {
//     name: string
//     startDate: string
//     endDate: string
//     guests: string
// }

// type SearchBoxProps = {
//     values: SearchValues
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

const SearchBox = () => {

    const { register, formState: { errors } } = useFormContext()

    return (
        <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] md:w-[95%]'>
            {/* 1st item */}
            <div className='flex items-center space-x-4 w-full'>
                <FaMap className='text-blue-600 w-6 h-6 shrink-0' />
                <div className='min-w-0 flex-1'>
                    <p className='text-lg font-medium mb-[0.2rem]'>Name<span className='text-rose-600'>*</span></p>
                    <input {...register("name")}
                        type="text"
                        placeholder='Enter your name?'
                        className='border-none outline-none w-full' />
                    <FieldError message={errors.name?.message as string} />
                </div>
            </div>

            {/* 2nd item */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='text-blue-600 w-6 h-6' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                    <input {...register("startDate")} type="date" className='border-none outline-none' />
                    <FieldError message={errors.startDate?.message as string} />
                </div>
            </div>

            {/* 3rd item */}
            <div className='flex items-center space-x-6'>
                <FaCalendarWeek className='text-blue-600 w-6 h-6' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                    <input {...register("endDate")} type="date" className='border-none outline-none' />
                    <FieldError message={errors.endDate?.message as string} />

                </div>
            </div>

            {/* 4th item */}
            <div className='flex items-center space-x-6'>
                <FaUserGroup className='text-blue-600 w-6 h-6 shrink-0' />
                <div>
                    <p className='text-lg font-medium mb-[0.2rem]'>Guests<span className='text-rose-600'>*</span></p>
                    <input {...register("guests", { valueAsNumber: true })} type="number" placeholder='1 Guest 1 Room' className='border-none outline-none' />
                    <FieldError message={errors.guests?.message as string} />

                </div>
            </div>
        </div>
    )
}

export default SearchBox
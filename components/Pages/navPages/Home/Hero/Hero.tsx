'use client'

import SearchBox from '@/components/Helper/SearchBox'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchSchema = zod
    .object({
        name: zod.string().min(1, 'Name is required'),
        startDate: zod.string().min(1, 'Start Date is required'),
        endDate: zod.string().min(1, 'End Date is required'),
        guests: zod.number().min(1, 'Guests is required'),
    })
    .refine((d) => d.endDate >= d.startDate, {
        message: 'End date must be after start date',
        path: ['endDate'],
    })

    type SearchFormValues = zod.infer<typeof SearchSchema>


const Hero = () => {

    const router = useRouter()

    const initialValues = {
        name: '',
        startDate: '',
        endDate: '',
        guests: 0,
    }

    const methods = useForm<SearchFormValues>({
        defaultValues: initialValues,
        resolver: zodResolver(SearchSchema),
    });

    const { handleSubmit, reset, setValue, getValues, watch } = methods;

    const onSubmit = async (data: SearchFormValues) => {
        console.log('vals', getValues())
    }

    useEffect(() => {
        const today = new Date().toLocaleDateString('en-CA')
        setValue('startDate', today)
        setValue('endDate', today)
    }, [setValue])

    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-60'></div>
            {/* video */}
            <video
                src='/images/beauty_of_sri_lanka.mp4'
                autoPlay
                muted
                loop
                preload='metadata'
                className='h-full w-full object-cover'
            />

            {/* text content */}
            <div className='absolute top-[50%] left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div data-aos="fade-up">
                        <h1 className='text-white uppercase font-bold text-[25px] md:text-[35px] mb-4 md:mb-0
                    lg:text-[45px] tracking[0.7 rem] text-center'>
                            Lets enjoy sri lanka
                        </h1>
                        <p className='text-center text-white uppercase font-normal md:text-base text-lg [word-spacing:5px]'>
                            Beautiful island in indian ocean
                        </p>
                    </div>

                    {/* Search Box */}
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                            <SearchBox />

                            <button
                                type='submit'
                                className='relative bg-rose-500 rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group
                    hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white transition-all ease-out
                    duration-3000'
                            >
                                <span className='absolute right-0 w-8 h-32 bg-white opacity-10 -mt-12 transition-all duration-1000
                        transform translate-x-12 rotate-12 group-hover:-translate-x-40 ease'></span>
                                <span className='relative font-bold'>Search</span>

                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default Hero
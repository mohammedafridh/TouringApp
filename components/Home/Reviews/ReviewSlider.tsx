"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ReviewSlider = () => {

    const stars = 5

  return (
    <div>
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='h-[300px] w-[90%] md:w-[450px] md:h-[350px]'
        >
{reviewData.map((review)=>(
    <SwiperSlide key={review.id} className='rounded-3xl block bg-white'>
        <div className='w-[80%] mx-auto mt-16'>
            {/* Review Text */}
            <p className='text-xs sm:text-sm md:text-base font-semibold'>{review.review}</p>

            {/* stars */}
            <div className='flex items-center gap-1 mt-4'>
                {Array.from({length:stars}).map((_,index)=>(
                    <FaStar key={index} className='text-yellow-500 w-3 h-3 md:w-6 md:h-6'/>
                ))}
            </div>

            {/* Users Profile */}
            <div className='mt-10 flex items-center space-x-4'>
                <Image 
                src={review.image}
                width={60}
                height={60}
                alt="user"
                className='rounded-full'
                />

                <div>
                    <h1 className='font-bold text-lg'>{review.name}</h1>
                </div>
            </div>

        </div>
    </SwiperSlide>
))}
        </Swiper>
    </div>
  )
}

export default ReviewSlider
'use client'
import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    //   superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 5
    //   },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1
    }
};

const DestinationSlider = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
        >
            {destinationData.map((dest)=>(
                    <div key={dest.id} className='m-3'>
                        {/* Image Container */}
                        <div className='relative h-[400px]'>
                            <div className='bg-gray-700 opacity-25 absolute inset-0 rounded-lg'></div>
                            <Image src={dest.image} alt={dest.location} width={500} height={500} 
                            className='rounded-lg w-full h-full'/>
                        </div>

                        {/* text Container */}
                        <h1 className='mt-4 text-lg font-semibold'>{dest.location}</h1>
                        <p className='text-sm text-gray-600'>{dest.travellers} Travellers</p>
                    </div>
                )
            )}
        </Carousel>
  )
}

export default DestinationSlider
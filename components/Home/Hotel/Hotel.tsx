import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='py-20'>
        {/* Heading */}
        <SectionHeading heading='Hotels' subHeading='Explore the famous hotels this month' />

        {/* Hotel contents */}
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {hotelsData.map((hotel,index)=>(
                <div key={hotel.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${index*100}`}>
                <HotelCard hotel={hotel}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotel
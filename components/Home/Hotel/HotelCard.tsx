import Image from 'next/image';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  }
}

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className='relative h-[300px] rounded-lg w-full cursor-pointer group overflow-hidden'>
        <div className='w-8 h-8 bg-white rounded-full absolute top-4 right-4 z-20 text-black flex items-center justify-center'>
          <FaHeart className='w-3 h-3' />
        </div>
        <div className='bg-black opacity-25 z-10 inset-0 absolute'></div>
        <Image src={hotel.image} alt={hotel.location} width={500} height={500} className='w-full h-full object-cover overflow-hidden 
        transition-all duration-300 group-hover:scale-110'/>
      </div>
      <div>
        {/* Content */}
        <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>{hotel.name}</h1>
        <p className='mt-3 mb-6 font-medium text-gray-600 text-sm'>{hotel.location}</p>

        {/* Ratings */}
        <div className='flex items-center space-x-2'>
          <div className='text-white bg-blue-700 p-2 rounded-md text-xs font-bold'>{hotel.rating}</div>
          <p className='text-sm text-gray-800'>Exceptional</p>
          <p className='font-bold text-sm'>{hotel.reviews} Reviews</p>
        </div>

        {/* Prices */}
        <div className='flex space-x-2 mt-3 items-center font-medium'>
          <p className=' text-gray-700 '>Starting from</p>
          <p className='text-blue-600 font-bold'>US${hotel.price}</p>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
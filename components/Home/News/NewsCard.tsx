import Image from 'next/image';
import React from 'react'

type Props = {
    newsData: {
        id: number;
        desc: string;
        image: string;
    }
}

const NewsCard = ({ newsData }: Props) => {
    return (
        <div>
            {/* Image */}
            <div className='relative h-[300px] w-full group overflow-hidden rounded-lg'>
                <div className='absolute bg-gray-600 inset-0 opacity-25 z-10'></div>
                <Image
                    src={newsData.image}
                    alt="news"
                    width={300}
                    height={300}
                    className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-110'
                />
            </div>

            {/* Text Content */}
            <div className='mt-4'>
                <h1 className='font-semibold text-lg hover:text-blue-600 transition-all duration-300 cursor-pointer'>{newsData.desc}</h1>
                <p className='text-sm mt-2 text-gray-500'>{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}</p>
            </div>

        </div>
    )
}

export default NewsCard
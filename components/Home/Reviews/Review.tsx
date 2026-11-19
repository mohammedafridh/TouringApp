import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {

    const stars=5

    return (
        <div className='pt-20 pb-20 flex items-center justify-center bg-blue-700 flex-col'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Text section */}
                <div>
                    <h1 className='text-2xl text-white font-semibold'>What our customers are saying us?</h1>
                    <p className='text-white mt-3 text-sm'>Most of our custommers recommend us for the service we provide. Currently we are the leading touring company in Sri Lanka
                        with a higher customer attraction. Here are some of our Reviews.
                    </p>

                    {/* Ratings */}
                    <div className='mt-4 text-white'>
                        <p className='font-bold text-2xl'>4.88</p>
                        <p className='text-sm'>Overall Rating</p>
                        
                        <div className='flex items-center gap-1 mt-1'>
                            {Array.from({length:stars}).map((_,index)=>(
                                <FaStar key={index} className='text-yellow-500'/>
                            ))}

                        </div>
                        
                    </div>
                </div>

                {/* Review Slider */}
                <div className='overflow-hidden'>
                    <ReviewSlider />
                </div>
            </div>
        </div>
    )
}

export default Review
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='py-20'>
      {/* heading */}
      <SectionHeading heading='Destinations' subHeading='Explore famous destinations' />

      {/* content */}
      <div className='mt-4 w-[80%] mx-auto'>
        <DestinationSlider />
      </div>
    </div>
  )
}

export default Destination
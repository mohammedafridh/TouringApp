import React from 'react'

type Props = {
    heading:string,
    subHeading:string
}

const SectionHeading = ({heading,subHeading}:Props) => {
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='text-xl sm:text-3xl font-bold text-blue-950'>{heading}</h1>
        <p className='text-gray-700 mt-1 font-medium sm:text-base text-sm'>{subHeading}</p>
    </div>
  )
}

export default SectionHeading
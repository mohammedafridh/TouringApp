import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'

// type Props = {
//   values: {
//     name: string,
//     startDate: string,
//     endDate: string,
//     guests: string
//   }
// }

const SearchResult = () => {

  // console.log('name', values.name)

  return (
    <div>
      <SectionHeading heading={`Welcome`} subHeading='Here are your necessary details' />

      <div className='w-[80%] md:w-[80%] mx-auto py-16'>
        <p className='text-sm md:text-base font-semibold'>For a tour of 5 days with 5 guests we recommend you choosing a mini van. Below are the available options for you.
          select one and proceed your booking. </p>
      </div>
    </div>
  )
}

export default SearchResult
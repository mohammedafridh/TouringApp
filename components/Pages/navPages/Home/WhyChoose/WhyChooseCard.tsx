import Image from 'next/image';
import React from 'react'

type Props = {
    chooseDetails: {
        id: number;
        title: string;
        image: string;
        subHeading:string;
    }
}

const WhyChooseCard = ({chooseDetails}:Props) => {
    return (
        <div>
            {/* image */}
            <Image src={chooseDetails.image} alt="" width={70} height={70} className='mx-auto'/>

            {/* content */}
            <h1 className='mt-6 text-center text-lg font-medium text-gray-900'>{chooseDetails.title}</h1>
            <p className='text-center text-xs mt-2 text-gray-700 font-medium'>{chooseDetails.subHeading}</p>
        </div>
    )
}

export default WhyChooseCard
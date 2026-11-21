import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'
import { whyChooseData } from '@/data/data'

const WhyChoose = () => {
    return (
        <div className='pt-16 pb-24'>
            <SectionHeading heading="Why Choose US" subHeading="Here's why we are special" />

            <div className='w-[80%] grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
                {whyChooseData.map((chooseData,index) => (
                    <div key={chooseData.id}  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${index*100}`}>
                        <WhyChooseCard chooseDetails={chooseData}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose
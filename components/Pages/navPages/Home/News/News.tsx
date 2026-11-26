import SectionHeading from '@/components/Helper/SectionHeading'
import { newsData } from '@/data/data'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='py-16'>
        <SectionHeading heading='Exciting Travel News for you' subHeading='Read todays trending travel news'/>

        <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20'>
            {newsData.map((news, index)=>(
                <div key={news.id}  data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={`${index*100}`}>
                    <NewsCard newsData={news}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News
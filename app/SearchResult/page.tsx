'use client'
import SearchResult from '@/components/Pages/otherPages/SearchResult/SearchResult'
import React from 'react'
import { useSearchParams } from 'next/navigation'


const page = () => {
  
  const searchParams = useSearchParams()

  const values = {
    name: searchParams.get('name') ?? '',
    startDate: searchParams.get('startDate') ?? '',
    endDate: searchParams.get('endDate') ?? '',
    guests: searchParams.get('guests') ?? '',
  }

  return (
    <div className='mt-[12vh] py-20'><SearchResult values={values}/></div>
  )
}

export default page
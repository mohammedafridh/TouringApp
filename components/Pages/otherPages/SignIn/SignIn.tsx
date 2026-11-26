'use client'

import Image from 'next/image'
import React,{useState} from 'react'
import { GiSriLanka } from 'react-icons/gi'
import SignInCard from './SignInCard'
import SignUpCard from './SignUpCard'

const SignIn = () => {

  const[openSignInCard,setOpenSignInCard]=useState(true)

  const viewSignInCard = ()=>setOpenSignInCard(true)
  const closeSignInCard = ()=>setOpenSignInCard(false)

  return (
    <div className='overflow-hidden'>
      <div className='relative w-full h-[100vh]'>
        <Image src='/images/login/loginImage.jpg' alt='signIn-image'
          fill
          sizes='100vw'
          quality={100}
          priority
          className='object-cover' />
      </div>

      <div className='absolute top-[50%] left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%]'>
         {openSignInCard ? <SignInCard closeSignInCard={closeSignInCard}/> : <SignUpCard viewSignInCard={viewSignInCard}/>}
      </div>
    </div>
  )
}

export default SignIn
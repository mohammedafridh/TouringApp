import React from 'react'

type Props = {
  viewSignInCard:()=>void
}

const SignUpCard = ({viewSignInCard}:Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-center justify-center w-[90%] md:w-[80%] mx-auto h-full'>
      {/* Text Area */}
      <div className='hidden md:flex flex-col gap-4 w-full px-8'>
        <h3 className='uppercase mt-4 md:mt-2 text-lg md:text-2xl font-semibold font-black text-white [word-spacing:5px]'>Travel every corner in sri lanka</h3>

        <p className='text-white text-sm sm:text-lg'>Sign up to start bookings, track your reservations, and get
          everything ready for your trip to Sri Lanka.</p>
      </div>

      {/* Login Card */}
      <div className='px-2 md:px-8'>
        <div className='bg-white/20 backdrop-blur-md border border-white/30 shadow-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%]  p-8 flex flex-col items-center justify-center rounded-lg'>
          <h1 className='text-4xl font-bold text-white mb-12'>SIGN UP</h1>

          <div className='flex flex-col space-y-4 w-full items-center'>

            <input
              type="text"
              placeholder='Name *'
              className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />

            <input
              type="text"
              placeholder='Contact Number *'
              className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />

            <input
              type="email"
              placeholder='Email *'
              className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />

            <input
              type="password"
              placeholder='Password *'
              className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />

            <button className='m-4 uppercase w-fit text-xl font-semibold hover:bg-blue-800 transition-all duration-300 bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer'>Sign UP</button>

            <p className='text-sm md:text-base text-gray-300'>Do you have an account?
              <span className='font-semibold cursor-pointer text-white' onClick={viewSignInCard}> SIGN IN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpCard
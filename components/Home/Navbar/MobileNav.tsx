import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav:boolean,
    closeNav:()=>void
}

const MobileNav = ({showNav,closeNav}:Props) => {

const viewNav = showNav?"translate-x-0":"translate-x-[-100%]"

    return (
        <div>
            {/* overlay */}
            <div className={`fixed ${viewNav} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}></div>

            {/* nav links */}
            <div className={`fixed ${viewNav} bg-rose-900 w-[80%] sm:w-[60%] justify-center flex flex-col transform transition-all duration-500
        delay-300 h-full z-[1050] text-white space-y-6`}>
                {navLinks.map((links) => {
                    return <Link key={links.id} href={links.url}>
                        <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text=[30px]'>{links.label}</p>
                    </Link>
                })}

                {/* close button */}
                <CgClose onClick={closeNav} className='absolute cursor-pointer top-[1.4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
            </div>
        </div>
    )
}

export default MobileNav
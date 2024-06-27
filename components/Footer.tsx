import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '../data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital
                presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let us discuss how we can work together
                to achieve your goals.
            </p>
            <a href='mailto:rozcodevelopment@gmail.com'>
                <MagicButton
                    title={`Let's get in touch`}
                    icon= { <FaLocationArrow /> }
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-10'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Bryan O.</p>
        
            <div className='flex items-center gap-5 md:gap-3'>
                {socialMedia.map((item) => (
                    <div key={item.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300'>
                        <Link href={item.src}><img
                            src={item.img}
                            alt={item.img}
                            className='w-6 h-6'
                            width={20}
                            height={20}
                         />
                         </Link>
                    </div>
                ))}
            </div>
        
        </div>
    </footer>
  )
}

export default Footer
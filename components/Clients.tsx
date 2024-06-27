import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '../data'

const Clients = () => {
  return (
    <div className='pt-10' id='testimonials'>
        <h1 className='heading mb-10'>
            Kind words from 
            <span className='text-purple'> my co-workers!</span>
        </h1>
        <div className='flex flex-col items-center'>
            <div className='h-[50vh] md:h-[30rem] rounded=md flex flex-col antialiased items-center relative overflow-hidden'>
                <InfiniteMovingCards 
                    items ={testimonials}
                    direction='right'
                    speed='slow' 
                />
            </div>
        </div>
    </div> 
  )
}

export default Clients
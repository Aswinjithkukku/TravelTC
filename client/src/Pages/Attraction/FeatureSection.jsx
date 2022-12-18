import React from 'react'
import { GoClippy } from 'react-icons/go'
import { MdSupportAgent, MdAttractions } from 'react-icons/md'

function FeatureSection() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto'>
    <div className='bg-[#0D4C92] py-10 lg:rounded-lg'>
        <div className='space-y-4 text-text p-5 lg:flex justify-between px-16'>
            <div>
            <div className='lg:text-5xl heading text-2xl'>Fast and flexible.</div>
            <div className=''>Book tickets online in minutes, with free cancellation on many attractions </div>
            </div>
        <div className=''>
            <button className='px-7 py-2 bg-text text-darktext'>View!!</button>
        </div>
        </div>
    </div>
</div>
    // <div className='mx-5 my-5 bg-light rounded-2xl py-6 lg:max-w-screen-xl lg:mx-auto px-5'>
    //     <div className='text-2xl font-semibold text-darktext'>We've got you covered</div>
    //     <div className='my-4 space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0'>
    //         <div className='flex space-x-2'>
    //             <div className='text-2xl text-blue'><MdAttractions /> </div>
    //             <div className=''>
    //                 <div className='font-medium text-blue'>Explore top attractions</div>
    //                 <div className='text-sm text-text'>Experience the best of your destination with attractions, tours, activities, and more</div>
    //             </div>
    //         </div>
    //         <div className='flex space-x-2'>
    //             <div className='text-2xl text-blue'><GoClippy /> </div>
    //             <div className=''>
    //                 <div className='font-medium text-blue'>Fast and flexible</div>
    //                 <div className='text-sm text-text'>Book tickets online in minutes, with free cancellation on many attractions</div>
    //             </div>
    //         </div>
    //         <div className='flex space-x-2'>
    //             <div className='text-2xl text-blue'><MdSupportAgent /> </div>
    //             <div className=''>
    //                 <div className='font-medium text-blue'>Support when you need it</div>
    //                 <div className='text-sm text-text'>Booking.com's global Customer Service team is here to help 24/7</div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default FeatureSection
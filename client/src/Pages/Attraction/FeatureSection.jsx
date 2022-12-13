import React from 'react'
import { GoClippy } from 'react-icons/go'
import { MdSupportAgent, MdAttractions } from 'react-icons/md'

function FeatureSection() {
  return (
    <div className='mx-5 my-5 border-y-2 py-6 lg:max-w-6xl lg:mx-auto'>
        <div className='text-xl font-semibold text-text'>We've got you covered</div>
        <div className='my-4 space-y-4 md:grid md:grid-cols-3 md:gap-5 md:space-y-0'>
            <div className='flex space-x-2'>
                <div className='text-2xl text-green-600'><MdAttractions /> </div>
                <div className=''>
                    <div className='font-medium'>Explore top attractions</div>
                    <div className='text-sm'>Experience the best of your destination with attractions, tours, activities, and more</div>
                </div>
            </div>
            <div className='flex space-x-2'>
                <div className='text-2xl text-green-600'><GoClippy /> </div>
                <div className=''>
                    <div className='font-medium'>Fast and flexible</div>
                    <div className='text-sm'>Book tickets online in minutes, with free cancellation on many attractions</div>
                </div>
            </div>
            <div className='flex space-x-2'>
                <div className='text-2xl text-green-600'><MdSupportAgent /> </div>
                <div className=''>
                    <div className='font-medium'>Support when you need it</div>
                    <div className='text-sm'>Booking.com's global Customer Service team is here to help 24/7</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection
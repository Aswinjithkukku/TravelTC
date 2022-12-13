import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GoThumbsup } from 'react-icons/go'
import { SlCalender } from 'react-icons/sl'
import { AiOutlineThunderbolt, AiOutlineMobile } from 'react-icons/ai'
import { FaHotel } from 'react-icons/fa'
import { BsCalendar2X } from 'react-icons/bs'
import PackageSection from './PackageSection'
import MapSection from './MapSection'
import ReviewSection from './ReviewSection'
import PolicySection from './PolicySection'
import FaqSection from './FaqSection'

function HeroSection() {
    return (
        <div className='bg-stone-50'>
            <div className='lg:max-w-6xl lg:mx-auto'>
                <div className=''>
                    <div className='relative lg:grid lg:grid-cols-12 gap-5 my-7 lg:my-0 lg:py-7'>
                        <div className='1st lg:col-span-7'>

                            <div className='bg-light shadow-sm p-2 py-3 space-y-3'>
                                <div className='text-2xl font-semibold text-text'>
                                    Burj Khalifa
                                </div>
                                <div className='flex items-center space-x-3 text-sm'>
                                    <span className='py-1 px-3 bg-green-600 rounded-md text-light text-lg'>4.7/5</span>
                                    <span className='text-text'>(1935 Reviews)</span>
                                    <span className='flex items-center'><CiLocationOn /> Dubai </span>
                                </div>
                                <div className='text-sm flex space-x-1 items-center'>
                                    <span className=''><GoThumbsup /></span>
                                    <span className=''>80% liked it from 20 reviews </span>
                                </div>
                                <span className='text-xs'>Posted on Booking.com</span>
                                <div className='text-sm flex items-center space-x-1 text-green-600'>
                                    <span className=''><SlCalender /> </span>
                                    <span className='text-xs'>Free cancellation available</span>
                                </div>
                            </div>

                            <div className='bg-light py-5 px-3 shadow-sm my-4 lg:flex text-center justify-between w-full grid grid-cols-4'>
                                <div className='text-center'>
                                    <span className='text-4xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                                    <span className='text-sm '>Instant Confirmation </span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-4xl text-orange-500 flex justify-center'><FaHotel /> </span>
                                    <span className='text-sm '>Hotel Pickup</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-4xl text-orange-500 flex justify-center'><AiOutlineMobile /> </span>
                                    <span className='text-sm '>Mobile Voucher</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-4xl text-orange-500 flex justify-center'><BsCalendar2X /> </span>
                                    <span className='text-sm '>Free cancellation upto 24 hours</span>
                                </div>
                            </div>


                            <div className='bg-light py-5 px-3 shadow-sm my-4 w-full'>
                                <div className=''>
                                    <span className='text-xl font-semibold text-orange-500 '>Burj Khalifa and Dubai Aquarium Ticket Combo Highlights</span>
                                </div>
                                <div className='space-y-3 mt-3'>
                                    <div className='flex space-x-2'>
                                        <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                                        <span className='text-sm '>Explore one of the most famous & tallest skyscraper in the world, The Burj Khalifa </span>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                                        <span className='text-sm '>Witness the picturesque views of Dubai's skyline from 124th & 125th floors </span>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                                        <span className='text-sm '>Catch the glimpse of aquatic animals, reptiles like Otters, Water Rats, Sea Horses, & Sea Jellies </span>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                                        <span className='text-sm '>Take a walk to witness various marine species in the 48 m long tunnel in the Dubai Aquarium </span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-2'>
                                <>
                                    <div className='flex justify-around py-3 sticky top-0 overflow-x-auto'>
                                        <button className='border-2 w-full py-2 text-center focus:border-b-2 focus:border-semi bg-light'>

                                            <span className=' whitespace-nowrap px-3 py-2'>Package Option</span>
                                        </button>
                                        <button className='border-2 w-full py-2 text-center focus:border-b-2 focus:border-semi bg-light'>

                                            <span className=' px-3 py-2'>Map</span>
                                        </button>
                                        <button className='border-2 w-full py-2 text-center focus:border-b-2 focus:border-semi bg-light'>

                                            <span className=' px-3 py-2'>Reviews</span>
                                        </button>
                                        <button className='border-2 w-full py-2 text-center focus:border-b-2 focus:border-semi bg-light'>

                                            <span className=' px-3 py-2'>Policies</span>
                                        </button>
                                        <button className='border-2 w-full py-2 text-center focus:border-b-2 focus:border-semi bg-light'>

                                            <span className=' px-3 py-2'>FAQs</span>
                                        </button>
                                    </div>

                                    <div id='packageSection' className='p-5 bg-light shadow-sm'>
                                        <PackageSection />
                                    </div>
                                    <div id='mapSection' className='p-5 my-5 bg-light shadow-sm'>
                                        <MapSection />
                                    </div>
                                </>
                            </div>
                        </div>


                        <div className='2nd lg:col-span-5'>
                            <div className='bg-light lg:shadow-sm lg:rounded-lg p-5 space-y-2 sticky top-0'>
                                <div className='space-x-3'>
                                    <span className='text-text'>Starting from</span>
                                    <span className='text-stone-400'>INR 52875</span>
                                </div>
                                <div className='space-x-4'>
                                    <span className='text-2xl font-medium text-orange-500'>
                                        INR 5000
                                    </span>
                                    <span className='bg-stone-300 rounded-md px-2 text-lg text-orange-500 py-1'>6% off</span>
                                </div>
                                <div className='text-orange-500'>per adult</div>
                                <div className=' lg:block mx-3'>
                                    <button className='bg-card w-full py-3 rounded-md shadow-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div id='reviewSection' className=''>
                        <ReviewSection />
                    </div>
                    <div id='policySection' className='py-5'>
                        <PolicySection />
                    </div>
                    <div id='faqSection' className='py-5'>
                        <FaqSection />
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 lg:hidden px-7 py-4 bg-light rounded-t-xl z-10'>
                <button className='bg-card w-full py-3 rounded-md shadow-sm text-light'>Book Now</button>
            </div>
        </div>
    )
}

export default HeroSection
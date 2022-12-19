import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

function AttractionCard() {
    return (
        <div className='lg:grid lg:grid-cols-12 gap-0 py-7'>
            <div className='md:col-span-5 flex justify-center items-center md:border-r-2 border-bluetrans'>
                <div className='space-y-2 w-10/12 '>
                    <div className='flex items-center space-x-2 text-darktext'>
                        <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                        <span className='text-lg '>Destination</span>
                    </div>
                    <div className=''>
                        <input type='text' placeholder='Where do you want to go?' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                    </div>
                </div>
            </div>
            <div className='md:col-span-5 flex justify-center items-center md:border-r-2 border-bluetrans'>
                <div className='space-y-2 w-10/12 '>
                    <div className='flex items-center space-x-2 text-darktext'>
                        <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                        <span className='text-lg'>Date</span>
                    </div>
                    <div className=''>
                        <input type='date' placeholder='Choose date' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                    </div>
                </div>
            </div>
            <div className='md:col-span-2 flex justify-center items-center'>
                <div className=''>
                    <button className='h-14 w-14 bg-blue rounded-full text-light text-3xl flex justify-center items-center'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AttractionCard
import React from 'react'
import { AttractionLandingLinks } from '../../data'
import { SlCalender } from 'react-icons/sl'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { GoThumbsup } from 'react-icons/go'

function ListResultView() {
    return (
        <div className='bg-stone-100 lg:bg-light'>
            <div className='hidden lg:flex border-2 rounded-full bg-stone-100 justify-around'>
                <button className='flex items-center space-x-4 text-lg focus:bg-light hover:bg-stone-300 w-full justify-center rounded-full focus:border-2 focus:border-semi'>
                    <h3 className=''>Our top picks</h3>
                </button>
                <button className='flex items-center space-x-4 text-lg focus:bg-light hover:bg-stone-300 w-full justify-center rounded-full focus:border-2 focus:border-semi'>
                    <h3 className=''>Most Popular</h3>
                </button>
                <button className='flex items-center space-x-4 text-lg focus:bg-light hover:bg-stone-300 w-full justify-center rounded-full focus:border-2 focus:border-semi'>
                    <h3 className=''>Lowest Price</h3>
                </button>
            </div>
            <div className=' py-2'>
                {AttractionLandingLinks?.map((item) => (
                    <div className='grid grid-cols-12 gap-3 text-text bg-light items-center my-3 px-4 lg:border-2 lg:rounded-lg lg:h-44'>
                        <div className='col-span-4'>
                            <img src={item.img} alt={item.name} className='rounded-xl h-24 md:h-40 lg:h-36 w-full' />
                        </div>
                        <div className='col-span-8'>
                            <p className='font-light'>{item.place} </p>
                            <h2 className='font-medium text-card'>{item.name} </h2>
                            <div className='text-sm flex space-x-1 items-center'>
                                <span className=''><GoThumbsup /></span>
                                <span className=''>80% liked it from {item.reviews} reviews </span>
                            </div>
                            <span className='text-xs'>Posted on Booking.com</span>
                            <div className='text-sm flex items-center space-x-1 text-green-600'>
                                <span className=''><SlCalender /> </span>
                                <span className='text-xs'>Free cancellation available</span>
                            </div>
                            <div className='text-sm flex space-x-1 justify-end items-center'>
                                <span className=''>from</span>
                                <span className='text-base font-medium flex items-center'>Rs.{item.price} <AiOutlineRight /> </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='bg-light py-3 flex space-x-2 justify-center items-center'>
                    <span className=''><AiOutlineLeft /> </span>
                    <span className=''>1</span>
                    <span className=''>2</span>
                    <span className=''>....</span>
                    <span className=''>10</span>
                    <span className=''><AiOutlineRight /> </span>
                </div>
            </div>
        </div>
    )
}

export default ListResultView
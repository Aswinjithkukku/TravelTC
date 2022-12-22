import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BsCalendar2Day } from 'react-icons/bs'
import { FaChild } from 'react-icons/fa'
import { GiClockwork } from 'react-icons/gi'
import { IoIosMan } from 'react-icons/io'

function DetailsCard() {


    return (
        <>
            <div className='bg-light  lg:rounded-xl p-5 space-y-2 sticky top-0'>
                <div className=''>
                    <div className=''>
                        <p className='text-main text-xs'><s>AED 1024</s></p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='flex items-center space-x-2'>
                            <h2 className='text-darktext font-bold text-3xl'>AED 910.00</h2>
                            <p className='text-xs text-darktext font-extralight'>per person</p>
                        </span>
                        <span className='bg-soft px-3 py-2 rounded-full text-blue'>20% OFF</span>
                    </div>
                    {/* <div className=''>
                        <p className='text-text text-xs'>*price based on selection below</p>
                    </div> */}
                    <div className='inputs space-y-5 my-4'>

                        <div className='space-y-1'>
                            <div className='flex items-center space-x-2 text-darktext'>
                                <span className='text-lg text-lightblue'><BsCalendar2Day /> </span>
                                <span className='text-lg'>Dates</span>
                            </div>
                            <div className=''>
                                <input type='date' placeholder='Select Date' className='px-3 w-full border placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                            </div>
                        </div>

                        <div className='space-y-1'>
                            <div className='flex items-center space-x-2 text-darktext'>
                                <span className='text-lg '>Tours</span>
                            </div>

                            <div>
                                <div className=''>
                                    <input type='checkbox' className='peer px-3 ' />
                                    <label className='text-darktext ml-1'>Burj Khalifa & Dubai Aquarium Combo</label>
                                    <div className='py-2 space-y-2 overflow-hidden peer-checked:block hidden cursor-pointer'>

                                        <div className='space-y-1'>
                                            <div className='flex items-center space-x-2 text-darktext'>
                                                <span className='text-lg text-lightblue'><GiClockwork /> </span>
                                                <span className='text-lg'>Choose Time Slot</span>
                                            </div>
                                            <div className='mx-1'>
                                                <select className='px-3 w-full border  py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' >
                                                    <option>Choose the slot</option>
                                                    <option>11:30,  127AED</option>
                                                    <option>12:30,  220AED</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='space-y-1'>
                                            <div className='flex items-center space-x-2 text-darktext'>
                                                <span className='text-lg text-lightblue'><AiFillCar /> </span>
                                                <span className='text-lg'>Travel</span>
                                            </div>
                                            <div className='mx-1'>
                                                <select className='px-3 w-full border  py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' >
                                                    <option>Choose the slot</option>
                                                    <option>Private</option>
                                                    <option>Shared</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className=' flex space-x-2'>
                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg text-lightblue'><IoIosMan /> </span>
                                    <span className='text-lg'>Adult</span>
                                </div>
                                <div className=''>
                                    <input type='number' placeholder='Adult number' className='px-3 w-full border placeholder:text-sm placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg text-lightblue'><FaChild /> </span>
                                    <span className='text-lg'>Children</span>
                                </div>
                                <div className=''>
                                    <input type='number' placeholder='Children number' className='px-3 w-full border placeholder:text-sm placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='px-5'>
                            <div className='flex justify-between text-darktext'>
                                <span className=''>adults</span>
                                <span className=''>310 AED</span>
                            </div>
                            <div className='flex justify-between text-darktext'>
                                <span className=''>child</span>
                                <span className=''>170 AED</span>
                            </div>
                            <div className='flex justify-between text-darktext'>
                                <span className=''>Travel</span>
                                <span className=''>100 AED</span>
                            </div>
                            <div className='flex justify-between text-darktext'>
                                <span className='font-semibold text-lg'>Grand Total</span>
                                <span className='font-bold text-xl'>910.00 AED</span>
                            </div>
                        </div>


                        <div className=''>
                            <button className='bg-lightblue text-light w-full py-3 rounded-lg'>Book Now</button>
                        </div>

                    </div>

                    <div className='hidden lg:block py-7 space-y-3'>
                        <div className=''>
                            <p className='text-text'>if you have questions about this tour, please feel free to ask</p>
                        </div>
                        <div className=''>
                            <button className='w-full py-3 border border-text text-text rounded-full'>Ask the Tour Expert</button>
                        </div>
                        <div className=''>
                            <p className='text-text text-xs'>*All questions are replied within 24-48 hrs</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default DetailsCard
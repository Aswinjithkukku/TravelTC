import React from 'react'
import { TiTick } from 'react-icons/ti'

function PackageSection() {
    return (
        <>
            <div className='text-xl font-semibold my-2'>Select Package Options</div>
            <div className='border-2 rounded-xl'>
                <div className='p-4'>
                    <div className='flex space-x-3 py-4'>
                        <div className='flex items-center'>
                            <input type='radio' className='scale-125' />
                        </div>
                        <div className=''>
                            <div className='font-medium lg:text-lg '>Burj Khalifa & Dubai Aquarium Combo</div>
                            <div className='text-xs lg:text-sm'>2 Hours</div>
                            <div className='text-orange-500'>Show details</div>
                        </div>
                        <div className=''>
                            <div className='text-text text-sm lg:text-base'>INR 7,345</div>
                            <div className='text-orange-500 lg:text-lg whitespace-nowrap'>INR 6,550.19</div>
                            <div className='text-xs'>Per Adult</div>
                        </div>
                    </div>
                    <div className=' border-t'>
                        <div className='flex overflow-x-auto space-x-2 py-3 '>
                            <span className=''>
                                <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='burj'
                                    className='rounded-2xl' />
                            </span>
                            <span className=''>
                                <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='burj'
                                    className='rounded-2xl' />
                            </span>
                        </div>
                        <div className='text-text text-sm'>
                            Book the combo tickets to explore Burj Khalifa and the Dubai Aquarium with your loved ones and grab unique experiences!
                        </div>
                        <div className=''>
                            <p className='underline text-text text-sm my-2'>Child Policy:</p>
                            <ul className='text-sm space-y-1 text-text'>
                                <li>Children under 4 years will be considered as infants and entry will be free of cost.</li>
                                <li>Children between the ages of 4 to 12 will be considered as children and charged a child rate.</li>
                                <li>Children above age 12 will be considered as an adult and charged an adult rate.</li>
                            </ul>
                        </div>
                        <div className='text-sm space-y-1'>
                            <div className='font-medium my-2 text-lg'>
                                Price Includes
                            </div>
                            <div className='flex items-center space-x-2'>
                                <span className='text-green-600 text-lg'><TiTick /> </span>
                                <span className=''>Ticket</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <span className='text-green-600 text-lg'><TiTick /> </span>
                                <span className=''>1 At The Top, Burj Khalifa (Level 125 and 124) ticket(s)</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <span className='text-green-600 text-lg'><TiTick /> </span>
                                <span className=''>Admission to: Dubai Aquarium</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <span className='text-green-600 text-lg'><TiTick /> </span>
                                <span className=''>Admission to: Underwater Zoo</span>
                            </div>
                        </div>
                        <div className='text-orange-500 my-4'>Hide details</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageSection
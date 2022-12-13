import React, { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { FilterData } from '../../data'

function FunctionalitySection() {
    const [displayModal, setDisplayModal] = useState(false)
    const [filterModal, setFilterModal] = useState(false)
    return (
        <>
            <div className='lg:max-w-6xl lg:mx-auto mx-5 my-5 lg:my-0'>

                <div className='md:grid lg:grid-cols-12 md:gap-5'></div>
                <div className=''>
                    <div className='border-4 border-card my-4 lg:my-1 rounded-lg'>
                        <div className='border-b-2 border-card'>
                            <input className='w-full py-2' type='text' placeholder='write' />
                        </div>
                        <div className=''>
                            <input className='w-full py-2' type='date' placeholder='write' />
                        </div>
                    </div>
                    {/* sort & filter icons for lg */}
                    <div className='lg:hidden grid grid-cols-2 gap-4 mt-6  text-light'>
                        <div className='bg-card rounded-lg py-1 space-x-1 flex justify-center items-center' onClick={() => setDisplayModal(!displayModal)}>
                            <span className=''>Sort</span>
                            <span className=''><BiSortAlt2 /> </span>
                        </div>
                        <div className='bg-card rounded-lg py-1 space-x-1 flex justify-center items-center' onClick={() => setFilterModal(!filterModal)}>
                            <span className=''>Filter</span>
                            <span className=''><FiFilter /> </span>
                        </div>
                    </div>
                        {/* sort & filter icons ends here */}
                </div>
            </div>
            {/* sort options */}
            <div className={`fixed  bg-light w-full  text-text py-5 rounded-t-2xl transition-all duration-700 z-20  ${displayModal ? 'bottom-0' : "-bottom-full"} `}>
                <div className='mx-5 space-y-3'>
                    <div className=' flex justify-between items-center '>
                        <span className='text-xl font-semibold'> Sort</span>
                        <span className='text-2xl' onClick={() => setDisplayModal(!displayModal)}><AiOutlineClose /> </span>
                    </div>
                    <div className=''>
                        <span className='flex items-center space-x-4 text-lg'>
                            <input type='radio' className='' />
                            <h3 className=''>Our top picks</h3>
                        </span>
                        <span className='flex items-center space-x-4 text-lg'>
                            <input type='radio' className='' />
                            <h3 className=''>Most Popular</h3>
                        </span>
                        <span className='flex items-center space-x-4 text-lg'>
                            <input type='radio' className='' />
                            <h3 className=''>Lowest Price</h3>
                        </span>
                    </div>
                </div>
            </div>
            {/* sort overlay */}
            <div className={`overlay fixed z-10 top-0 left-0 right-0 bottom-0 bg-semi opacity-50  ${displayModal ? 'block' : 'hidden'}`} onClick={() => setDisplayModal(!displayModal)}>
            </div>

            {/* filter options */}
                <div className={`${filterModal ? 'fixed' : 'hidden'} lg:block bg-light top-0 bottom-0 left-0 right-0`}>
                    <div className=' py-5 px-3  overflow-y-auto lg:border-2 lg:rounded-lg'>
                        <div className='flex justify-between items-center my-2'>
                            <span className='text-xl font-semibold'>Filter</span>
                            <span className='text-2xl lg:hidden' onClick={() => setFilterModal(!filterModal)}><AiOutlineClose /> </span>
                        </div>
                        <div className='mt-5 space-y-5 overflow-y-auto text-text'>

                            <div className='space-y-2'>
                                <div className='font-semibold text-black'>Category</div>
                                {FilterData?.category?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <input type='checkbox' className='w-5 h-5' />
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                            <div className='space-y-2'>
                                <div className='font-semibold text-black'>Price</div>
                                {FilterData?.price?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <input type='checkbox' className='w-5 h-5' />
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                            <div className='space-y-2'>
                                <div className='font-semibold text-black'>Other</div>
                                {FilterData?.other?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <input type='checkbox' className='w-5 h-5' />
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                            <div className='space-y-2'>
                                <div className='font-semibold text-black'>City</div>
                                {FilterData?.city?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <input type='checkbox' className='w-5 h-5' />
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

        </>
    )
}

export default FunctionalitySection
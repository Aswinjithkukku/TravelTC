import React, { useState } from 'react'
import { BiSortAlt2, BiSearch } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FilterData } from '../../data'
import { useSelector } from 'react-redux'

function FunctionalitySection() {
    const [displayModal, setDisplayModal] = useState(false)
    const [filterModal, setFilterModal] = useState(false)
    const [viewCategory, setViewCategory] = useState(false)
    const [viewcity, setViewcity] = useState(false)

    const { state } = useSelector(state => state.general)

    return (
        <>
            <div className='lg:max-w-6xl lg:mx-auto bg-blue lg:rounded-xl px-5 py-7 lg:my-0'>

                {/* <div className='md:grid lg:grid-cols-12 md:gap-5'></div> */}
                <div className=''>
                    <div className=' my-4 lg:my-1 rounded-lg space-y-5'>
                        <div className='space-y-3'>
                            <div className='text-text text-lg  opacity-80'>Destination</div>
                            <input className='w-full py-4 px-2 bg-lightblue rounded-lg placeholder:text-light text-light'
                                type='text' placeholder='Destination' />
                        </div>
                        <div className='space-y-3'>
                            <div className='text-text text-lg  opacity-80'>Date</div>
                            <input className=' w-full py-4 px-2 bg-lightblue rounded-lg placeholder:text-light text-light' type='date' placeholder='Choose Date' />
                        </div>
                    </div>
                    {/* sort & filter icons for lg */}
                    <div className='lg:hidden grid grid-cols-2 gap-4 mt-6 py-3 text-light'>
                        <div className='bg-lightblue  shadow-sm rounded-lg py-3 space-x-1 flex justify-center items-center' onClick={() => setDisplayModal(!displayModal)}>
                            <span className=''>Sort</span>
                            <span className=''><BiSortAlt2 /> </span>
                        </div>
                        <div className='bg-lightblue  shadow-sm rounded-lg py-3 space-x-1 flex justify-center items-center' onClick={() => setFilterModal(!filterModal)}>
                            <span className=''>Filter</span>
                            <span className=''><FiFilter /> </span>
                        </div>
                    </div>
                    <div className=' flex space-x-3 mt-3'>
                        <span className=' rounded-full w-14 h-14 bg-main flex items-center justify-center text-light text-2xl'>
                            <BiSearch />
                        </span>
                        <span className='text-light text-xl flex items-center'>
                            Search
                        </span>
                    </div>
                    {/* sort & filter icons ends here */}
                </div>
            </div>
            {/* sort options */}
            <div className={`fixed  bg-blue w-full  text-textblue py-5 rounded-t-2xl transition-all duration-700 z-20  ${displayModal ? 'bottom-0' : "-bottom-full"} `}>
                <div className='mx-5 space-y-3'>
                    <div className=' flex justify-between items-center '>
                        <span className='text-2xl font-semibold'> Sort</span>
                        <span className='text-3xl' onClick={() => setDisplayModal(!displayModal)}><AiOutlineClose /> </span>
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
            <div className={`overlay fixed z-10 top-0 left-0 right-0 bottom-0 bg-lightblue opacity-50  ${displayModal ? 'block' : 'hidden'}`} onClick={() => setDisplayModal(!displayModal)}>
            </div>

            {/* filter options */}
            <div className={`${filterModal ? ' fixed' : 'hidden'}  lg:block bg-light top-0 bottom-0 left-0 right-0`}>
                <div className=' py-5 px-3  overflow-y-auto lg:rounded-lg lg:bg-dark lg:my-10'>
                    <div className='flex justify-between items-center my-2'>
                        <span className='text-2xl lg:text-3xl lg:font-light font-semibold  lg:text-light'>Filter</span>
                        <span className='text-2xl lg:hidden' onClick={() => setFilterModal(!filterModal)}><AiOutlineClose /> </span>
                    </div>
                    <div className='mt-5 space-y-5 overflow-y-auto lg:text-text'>

                        <div className='space-y-2'>
                            <div className='flex justify-between items-center lg:shadow-sm lg:py-2' onClick={() => setViewCategory(!viewCategory)}>
                                <div className='font-semibold text-black lg:text-text lg:font-bold'>Category</div>
                                <div className='hidden lg:block font-semibold text-black lg:text-text lg:font-bold'>{viewCategory ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                            </div>
                            {viewCategory && (
                                <>
                                    {FilterData?.category?.map((item) => (
                                        <div className='flex items-center space-x-4'>
                                            <input type='checkbox' className='w-5 h-5' />
                                            <span className=''>{item.name} </span>
                                        </div>
                                    ))}
                                </>
                            )}
                            {FilterData?.category?.map((item) => (
                                <div className='lg:hidden flex items-center space-x-4'>
                                    <input type='checkbox' className='w-5 h-5' />
                                    <span className=''>{item.name} </span>
                                </div>
                            ))}
                        </div>

                        <div className='space-y-2'>
                            <div className='flex justify-between items-center lg:shadow-sm lg:py-2' onClick={() => setViewcity(!viewcity)}>
                                <div className='font-semibold text-black lg:text-text lg:font-bold'>City</div>
                                <div className='hidden lg:block font-semibold text-black lg:text-text lg:font-bold'>{viewcity ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                            </div>
                            {viewcity && (
                                <>
                                    {/* {FilterData?.city?.map((item) => ( */}
                                    {state?.map((item) => (
                                        <div className='flex items-center space-x-4'>
                                            <input type='checkbox' className='w-5 h-5' />
                                            <span className=''>{item.state} </span>
                                        </div>
                                    ))}
                                </>
                            )}
                            {FilterData?.city?.map((item) => (
                                <div className='lg:hidden flex items-center space-x-4'>
                                    <input type='checkbox' className='w-5 h-5' />
                                    <span className=''>{item.name} </span>
                                </div>
                            ))}
                        </div>

                        <div className='space-y-2'>
                            <div className='font-semibold text-black lg:text-text lg:font-bold'>Price</div>
                                <div className='flex items-center space-x-4'>
                                    <input type='range' min={'0'} max={'100'}  className='w-full'/>
                                    {/* <span className=''> </span> */}
                                </div>
                        </div>

                        <div className='space-y-2'>
                            <div className='font-semibold text-black lg:text-text lg:font-bold'>Other</div>
                            {FilterData?.other?.map((item) => (
                                <div className='flex items-center space-x-4'>
                                    {/* <input type='checkbox' className='w-5 h-5 ' /> */}
                                    <input type="checkbox" id="switch" className='switch' /><label className='forswitch' for="switch">Toggle</label>
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
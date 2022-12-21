import React, { useState } from 'react'
import { BiSortAlt2, BiSearch } from 'react-icons/bi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FiFilter } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillStar, AiOutlineClose, AiOutlineDown, AiOutlineMail, AiOutlineUp } from 'react-icons/ai'
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

            <div className='hidden lg:block bg-soft rounded-xl py-5 '>
                <div className='p-3 text-text space-y-3'>
                    <div className='text-2xl text-darktext'>
                        Need Help?
                    </div>
                    <div className='flex items-center space-x-3 ml-3'>
                        <div className='text-2xl text-blue'><TfiHeadphoneAlt /> </div>
                        <div className='space-y-2'>
                            <div className='text-main'>Call us on</div>
                            <div className=''>+910000000000</div>
                            <div className=''>+910000000000</div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 ml-3'>
                        <div className='text-2xl text-green-600'><BsWhatsapp /> </div>
                        <div className='space-y-2'>
                            <div className='text-main'>Whatsapp us on</div>
                            <div className=''>+910000000000</div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 ml-3'>
                        <div className='text-2xl text-blue'><AiOutlineMail /> </div>
                        <div className='space-y-2'>
                            <div className='text-main'>Email us on</div>
                            <div className=''>test123@email.com</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className=' bg-blue lg:rounded-xl px-5 py-7 lg:my-0'>

                <div className='md:grid lg:grid-cols-12 md:gap-5'></div>
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
                    {/* sort & filter icons for lg *
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
                    {/* sort & filter icons ends here 
                </div>
            </div> */}
            {/* sort options */}
            <div className={`fixed  bg-light w-full  text-textblue py-5 rounded-t-2xl transition-all duration-700 z-20  ${displayModal ? 'bottom-0' : "-bottom-full"} `}>
                <div className='mx-5 space-y-3 text-darktext'>
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
            <div className={`overlay fixed z-10 top-0 left-0 right-0 bottom-0 bg-bluetrans opacity-50  ${displayModal ? 'block' : 'hidden'}`} onClick={() => setDisplayModal(!displayModal)}>
            </div>

            {/* filter options */}
            <div className={`${filterModal ? ' fixed' : 'hidden'}  lg:block bg-light top-0 bottom-0 left-0 right-0 overflow-y-auto`}>
                {/* <div className=' py-5 px-3  overflow-y-auto lg:rounded-lg lg:bg-soft lg:my-10'> */}
                    <div className='flex justify-between items-center my-2 md:my-0 px-5 pt-5 md:pt-0'>
                        <span className='text-2xl lg:text-3xl lg:font-light font-semibold  lg:text-light'>Filter</span>
                        <span className='text-2xl lg:hidden' onClick={() => setFilterModal(!filterModal)}><AiOutlineClose /> </span>
                    </div>
                    <div className='mt-5 space-y-5 overflow-y-auto lg:text-text'>

                        <div className='md:border rounded-xl mb-5'>
                            <div className='p-5 space-y-5'>
                                <div className='1 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Where are you travelling?</p>
                                    </div>
                                    <div className=''>
                                        <input type='date' className='text-text py-2 w-full border border-sky-500 rounded-lg px-2 focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                    </div>
                                </div>
                                <div className='2 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Popular Tags</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Child Friendly</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Taking extra precuations</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Away from the chaos</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Epic challenges</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Virtual experiences</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='3 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Price Range</p>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <input type='range' min={'0'} max={'100'} className='w-full' />
                                    </div>
                                    <div className='flex items-center space-x-4 justify-center'>
                                        <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                        <p> = </p>
                                        <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                    </div>
                                </div>
                                <div className='4 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Duration</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Upto 1 Hour</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>1 to 4 Hour</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>4 Hour to 1 Day</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>1 to 3 Day</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>3 Days or more</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='5 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Tour Rating</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <div className='text-lg text-darktext flex items-center'>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                            </div>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <div className='text-lg text-darktext flex items-center'>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                            </div>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <div className='text-lg text-darktext flex items-center'>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                            </div>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <div className='text-lg text-darktext flex items-center'>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-semisoft'><AiFillStar /></span>
                                            </div>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <div className='text-lg text-darktext flex items-center'>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                                <span className='text-yellow-500'><AiFillStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='6 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Age Group</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>1 & Up</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>3 & Up</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>7 & Up</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>13 & Up</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>18 & Up</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='7 space-y-3'>
                                    <div className='text-text font-medium'>
                                        <p className=''>Specials</p>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Discounted deals</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Free Cancellations</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>Private Groups</p>
                                        </div>
                                        <div className='flex space-x-3'>
                                            <input type='checkbox' className='w-5' />
                                            <p className='text-sm text-darktext'>New on TC.tours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* </div> */}
                </div>
            </div>



        </>
    )
}

export default FunctionalitySection
import React from 'react'
import { GiIsland, GiHoneycomb } from 'react-icons/gi'
import specialoffer from '../../static/images/specialoffer2.jpg'
import combo from '../../static/images/combo.jpg'
import { Link } from 'react-router-dom'

function SpecialofferCardSection() {
    return (
        <div className='lg:max-w-screen-xl lg:mx-auto'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-7'>
                <div className='1 col-span-6'>


                    <div className='  h-[23em] group cursor-pointer'>
                        <div className=' relative '>
                            <div className='overflow-hidden lg:rounded-xl bg-bottom'>
                                <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={specialoffer} alt='special offer' />
                            </div>
                            <div className='absolute top-10 px-10'>
                                <div className=' pt-5'>
                                    <span className='bg-main text-light py-[8px] px-3'>
                                        Holiday Sale
                                    </span>
                                </div>
                                <div className='text-3xl text-darktext font-medium pt-5'>
                                    Special Offers
                                </div>
                                <div className='text-sm text-darktext pt-3'>
                                    <p className=''>Find Your Perfect Hotels Get the best<br />
                                        prices on 20,000+ properties<br />
                                        the best prices on</p>
                                </div>
                                <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>
                                    <Link to='/specialoffer'>
                                    <button className='py-2 px-3 border-main border text-main  '>See Deals</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='2 hidden lg:block col-span-3'>
                    <div className=' h-[23em] group mx-3 cursor-pointer'>
                        <div className='relative'>
                            <div className='overflow-hidden rounded-xl'>
                                <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={combo} alt='combo' />
                            </div>
                            <div className='absolute h-full w-full top-0 bg-cardtransblue rounded-xl'>
                                <div className=' px-10 py-10'>
                                    <div className=' pt-5'>
                                        <span className='text-5xl text-light'>
                                            <GiHoneycomb />
                                        </span>
                                    </div>
                                    <div className='text-3xl text-light font-medium  heading pt-5'>
                                        Combo Packs
                                    </div>
                                    <div className='text-sm text-light pt-3'>
                                        <p className=''>Find Your Perfect combo packages Get the best<br />
                                            prices and properties</p>
                                    </div>
                                    <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>
                                        <Link to='/combo'>
                                            <button className='py-2 px-3 text-sm border-light border text-light hover:bg-light hover:text-darktext '>See Deals</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='3 hidden lg:block col-span-3'>
                    <div className=' h-[23em] group mx-3 cursor-pointer'>
                        <div className='relative'>
                            <div className='overflow-hidden rounded-xl'>
                                <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={combo} alt='combo' />
                            </div>
                            <div className='absolute h-full w-full top-0 bg-cardtransyellow rounded-xl'>
                                <div className=' px-10 py-10'>
                                    <div className=' pt-5'>
                                        <span className='text-5xl text-light'>
                                            <GiIsland />
                                        </span>
                                    </div>
                                    <div className='text-3xl text-light font-medium  heading pt-5'>
                                        Attractions
                                    </div>
                                    <div className='text-sm text-light pt-3'>
                                        <p className=''>Find Your Perfect Attractions Get the best<br />
                                            prices and properties</p>
                                    </div>
                                    <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>

                                        <Link to='/attraction'>
                                            <button className='py-2 px-3 text-sm border-light border text-light hover:bg-light hover:text-darktext '>See Deals</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialofferCardSection
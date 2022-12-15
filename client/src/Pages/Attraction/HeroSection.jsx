import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu, AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai'
import { CgSmartphone } from "react-icons/cg";
import { GrClose } from 'react-icons/gr'
// import { NavbarLinks } from '../../data'
import { MenuLinks } from '../../data'
import india from '../../static/images/india.png'
import { Link } from 'react-router-dom';

import banner from "../../static/images/banner.jpg"
import dubai from "../../static/images/dubai.jpg"
import uae from "../../static/images/uae.jpg"
import { IoLocationOutline } from 'react-icons/io5';
import { BsCalendar2Date } from 'react-icons/bs';

function HeroSection() {
    const [viewMenu, setViewMenu] = useState(false)
    return (
        <div>
            <>
                {viewMenu && (
                    <div className='fixed h-screen bg-light w-screen z-50'>
                        <div className='flex justify-end text-2xl m-5' onClick={() => setViewMenu(!viewMenu)} ><GrClose /> </div>

                        <div className='mx-7 text-lg text-text space-y-7'>

                            <div className='text-2xl font-semibold text-black'>More</div>

                            <div className='space-y-5'>
                                <div className=' space-x-4'>
                                    <span className=''>INR</span>
                                    <span className=''>Indian Rupee</span>
                                </div>
                                <div className='flex space-x-4'>
                                    <span className=''>
                                        <img src={india} alt='india' className='w-7 h-7' />
                                    </span>
                                    <span className=''>English (US)</span>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <span className='text-2xl'><CgSmartphone /> </span>
                                    <span className=''>Download the iphone app</span>
                                </div>
                            </div>

                            <div className='space-y-5'>
                                <div className='font-semibold text-black'>Help and Support</div>
                                {MenuLinks?.helpAndSupport?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <span className=''>{item.icon} </span>
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                            <div className='space-y-5'>
                                <div className='font-semibold text-black'>Inspiration</div>
                                {MenuLinks?.inspiration?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <span className=''>{item.icon} </span>
                                        <span className=''>{item.name} </span>
                                    </div>
                                ))}
                            </div>

                            <div className='space-y-5'>
                                <div className='font-semibold text-black'>Settings and legal</div>
                                {MenuLinks?.settingsAndLegal?.map((item) => (
                                    <div className='flex items-center space-x-4'>
                                        <span className=''>{item.icon} </span>
                                        <span className=''>{item.name}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                )}
                <div className='bg-semisoft'>
                    <div className=' py-3 px-3 lg:max-w-screen-xl lg:mx-auto'>
                        <div className='flex justify-between'>
                            <Link to='/'>
                                <div className='text-3xl font-bold text-main'>TC tours</div>
                            </Link>
                            <div className='flex space-x-5'>
                                <span className='lg:hidden flex items-center text-stone-600 text-2xl '><CgProfile /></span>
                                <span className='lg:hidden flex items-center text-stone-600 text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span>
                                <span className='hidden lg:flex items-center text-stone-600 text-lg font-semibold'>INR</span>
                                <span className='hidden lg:flex items-center text-stone-600 text-2xl'><img src={india} alt='india' className='h-6 w-6' /></span>
                                <span className='hidden lg:flex items-center text-stone-600 text-2xl'><AiOutlineQuestionCircle /> </span>
                                <span className='hidden lg:flex items-center text-stone-600 text-sm bg-light px-3 py-3 rounded-lg shadow-sm'>Register </span>
                                <span className='hidden lg:flex items-center text-stone-600 text-sm bg-light px-3 py-3 rounded-lg shadow-sm'>Sign in</span>
                            </div>
                        </div>
                        <div className=' mt-2'>
                            {/* <div className=''>
              <div className='flex space-x-2 overflow-x-auto'>
                {NavbarLinks?.map((link) => (
                  <button className='flex space-x-1 items-center hover:bg-light px-3 py-1 rounded-full cursor-pointer  focus:border-2 box-border  '>
                    <span className='text-text'>
                      {link.icon}
                    </span>
                    <span className='whitespace-nowrap text-text'>
                      {link.name}
                    </span>
                  </button>
                ))}
              </div>
            </div> */}
                        </div>
                    </div>
                </div>
            </>
            <div className='lg:max-w-screen-xl lg:mx-auto lg:my-14'>
                <main className='mb-36'>
                    <div className=' relative'>
                        <div className='absolute z-50 -bottom-20 w-full flex justify-center'>
                            <div className='bg-light w-9/12 rounded-[2em]'>
                                <div className='lg:grid lg:grid-cols-12 gap-0 py-7'>
                                    <div className='col-span-5 flex justify-center items-center border-r-2 border-bluetrans'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center space-x-2 text-darktext'>
                                                <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                                                <span className='text-lg '>Destination</span>
                                            </div>
                                            <div className=''>
                                                <input type='text' placeholder='Where do you want to go?' className='border-none placeholder:text-text py-3' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-5 flex justify-center items-center border-r-2 border-bluetrans'>
                                    <div className='space-y-2'>
                                            <div className='flex items-center space-x-2 text-darktext'>
                                                <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                                                <span className='text-lg'>Date</span>
                                            </div>
                                            <div className=''>
                                                <input type='date' placeholder='Choose date' className='border-none placeholder:text-text py-3' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-2 flex justify-center items-center'>
                                        <div className=''>
                                            <button className='h-14 w-14 bg-blue rounded-full text-light text-3xl flex justify-center items-center'>
                                                <AiOutlineSearch />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden lg:rounded-[4em] lg:h-[70vh] relative cover '>
                            <div className='absolute top-0 text-center w-full'>
                                <div className='text-3xl lg:text-6xl font-bold text-light heading pt-20'>Discover Beautiful Places</div>
                                <div className='text-light text-lg'>Discover this emirate and its dazzling treasures</div>
                                {/* <div className='hidden md:block text-light bg-trans text-2xl mt-24 py-10'>Explore Your Destination </div> */}
                            </div>
                            <img src={uae} alt='hero' className='cover' />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HeroSection
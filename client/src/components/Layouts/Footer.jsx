import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import travellersChoice from '../../static/images/travellersChoice.png'

function Footer() {

    const [viewSupport, setViewSupport] = useState(false)
    // const [viewDiscover, setViewDiscover] = useState(false)
    // const [viewTerms, setViewTerms] = useState(false)
    // const [viewPartners, setViewPartners] = useState(false)
    // const [viewAbout, setViewAbout] = useState(false)

    const { home } = useSelector(state => state.general)

    return (
        <div className='bg-dark text-text'>
            <div className='mx-5  lg:max-w-screen-xl lg:mx-auto'>

                <div className='md:grid md:grid-cols-5 md:gap-5'>
                    {home?.footer?.map((item) => (
                        <div className='py-4 border-text border-b-2 space-y-2 md:border-none'>
                            <div className='flex justify-between items-center' onClick={() => setViewSupport(!viewSupport)}>
                                <div className='font-medium'>{item.title}</div>
                                <div className='md:hidden text-lg mb-2'>{viewSupport ? < AiOutlineUp /> : < AiOutlineDown />} </div>
                            </div>
                            {viewSupport && (
                                <>
                                    {item?.navLinks?.map((links) => (
                                        <div className='space-y-2 md:hidden'>
                                            <div className='text-sm'>{links?.name}</div>
                                            {/* <div className='text-sm'> Manage your trips</div>
                            <div className='text-sm'> Attractions help center</div>
                            <div className='text-sm'> Safety Resource Center</div> */}
                                        </div>
                                    ))}
                                </>
                            )}
                            {item?.navLinks?.map((links) => (
                             <div className='space-y-2 hidden md:block'>
                        <div className='text-sm'> {links?.name}</div>
                        {/* <div className='text-sm'> Manage your trips</div>
                        <div className='text-sm'> Attractions help center</div>
                        <div className='text-sm'> Safety Resource Center</div> */}
                    </div>
                    ))}
                        </div>
                    ))}

                    {/* <div className='py-4 border-text border-b-2 space-y-2 md:border-none'>
                        <div className='flex justify-between items-center' onClick={() => setViewDiscover(!viewDiscover)}>
                            <div className=' font-medium'>Discover</div>
                            <div className='md:hidden text-lg mb-2'>{viewDiscover ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                        </div>
                        {viewDiscover && (
                            <div className='space-y-2 md:hidden'>
                                <div className='text-sm'> Genius loyalty program</div>
                                <div className='text-sm'> Seasonal and holiday deals</div>
                                <div className='text-sm'> Travel articles</div>
                                <div className='text-sm'> Travel communities</div>
                                <div className='text-sm'> Booking.com for Business</div>
                            </div>
                        )}
                        <div className='space-y-2 hidden md:block'>
                            <div className='text-sm'> Genius loyalty program</div>
                            <div className='text-sm'> Seasonal and holiday deals</div>
                            <div className='text-sm'> Travel articles</div>
                            <div className='text-sm'> Travel communities</div>
                            <div className='text-sm'> Booking.com for Business</div>
                        </div>
                    </div>

                    <div className='py-4 border-text border-b-2 space-y-2 md:border-none'>
                        <div className='flex justify-between items-center' onClick={() => setViewTerms(!viewTerms)}>
                            <div className=' font-medium'>Terms and settings</div>
                            <div className='md:hidden text-lg mb-2'>{viewTerms ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                        </div>
                        {viewTerms && (
                            <div className='space-y-2 md:hidden'>
                                <div className='text-sm'> Privacy & cookies</div>
                                <div className='text-sm'> Terms & conditions</div>
                                <div className='text-sm'> Grievance officer</div>
                                <div className='text-sm'> MSA statement</div>
                            </div>
                        )}
                        <div className='space-y-2 hidden md:block'>
                            <div className='text-sm'> Privacy & cookies</div>
                            <div className='text-sm'> Terms & conditions</div>
                            <div className='text-sm'> Grievance officer</div>
                            <div className='text-sm'> MSA statement</div>
                        </div>
                    </div>

                    <div className='py-4 border-text border-b-2 space-y-2 md:border-none'>
                        <div className='flex justify-between items-center' onClick={() => setViewPartners(!viewPartners)}>
                            <div className=' font-medium'>Partners</div>
                            <div className='md:hidden text-lg mb-2'>{viewPartners ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                        </div>
                        {viewPartners && (
                            <div className='space-y-2 md:hidden'>
                                <div className='text-sm'> Extranet login</div>
                                <div className='text-sm'> Partner help</div>
                                <div className='text-sm'> List your property</div>
                                <div className='text-sm'> Become an affiliate</div>
                            </div>
                        )}
                        <div className='space-y-2 hidden md:block'>
                            <div className='text-sm'> Extranet login</div>
                            <div className='text-sm'> Partner help</div>
                            <div className='text-sm'> List your property</div>
                            <div className='text-sm'> Become an affiliate</div>
                        </div>
                    </div>

                    <div className='py-4 border-text border-b-2 space-y-2 md:border-none'>
                        <div className='flex justify-between items-center' onClick={() => setViewAbout(!viewAbout)}>
                            <div className=' font-medium'>About</div>
                            <div className='md:hidden text-lg mb-2'>{viewAbout ? < AiOutlineUp /> : < AiOutlineDown />}</div>
                        </div>
                        {viewAbout && (
                            <div className='space-y-2 md:hidden'>
                                <div className='text-sm'> About TC.tours.com</div>
                                <div className='text-sm'> How We Work</div>
                                <div className='text-sm'> Sustainability</div>
                                <div className='text-sm'> Press center</div>
                                <div className='text-sm'> Careers</div>
                                <div className='text-sm'> Investor relations</div>
                                <div className='text-sm'> Corporate contact</div>
                            </div>
                        )}
                        <div className='space-y-2 hidden md:block'>
                            <div className='text-sm'> About Tc.tours.com</div>
                            <div className='text-sm'> How We Work</div>
                            <div className='text-sm'> Sustainability</div>
                            <div className='text-sm'> Press center</div>
                            <div className='text-sm'> Careers</div>
                            <div className='text-sm'> Investor relations</div>
                            <div className='text-sm'> Corporate contact</div>
                        </div>
                    </div> */}
                </div>

                <div className='flex justify-center items-center py-7 border-text border-b-2 space-x-5'>
                    <div className=''>
                        <img src={travellersChoice} alt='tc' className='h-10 md:h-auto' />
                    </div>
                </div>

                <div className='text-text text-xs py-5 text-center leading-relaxed space-y-2'>
                    <div className=''>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</div>
                    <div className=''>Copyright © 1996–2022 TravellersChoice.com™. All rights reserved.</div>
                </div>

            </div>
        </div>
    )
}

export default Footer
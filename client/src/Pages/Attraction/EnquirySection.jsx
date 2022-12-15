import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai'
import { CgSmartphone } from "react-icons/cg";
import { GrClose } from 'react-icons/gr'
// import { NavbarLinks } from '../../data'
import { MenuLinks } from '../../data'
import india from '../../static/images/india.png'
import { Link } from 'react-router-dom';

function EnquirySection() {


  const [viewMenu, setViewMenu] = useState(false)
  return (
    <div className='banner lg:h-[100vh] md:h-[100vh] md:bg-top lg:bg-bottom xl:bg-bottom-2'>

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
        <div className=''>
          <div className=' py-7 px-3 lg:max-w-screen-xl lg:mx-auto'>
            <div className='flex justify-between'>
              <Link to='/'>
                <div className='text-4xl font-bold text-light heading'>TC tours</div>
              </Link>
              <div className='flex space-x-7'>
                <span className='lg:hidden flex items-center text-light text-2xl '><CgProfile /></span>
                <span className='lg:hidden flex items-center text-light text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span>
                <span className='hidden lg:flex items-center text-light text-lg font-light '>INR</span>
                <span className='hidden lg:flex items-center text-light text-7xl'><img src={india} alt='india' className='h-10 w-10' /></span>
                <span className='hidden lg:flex items-center justify-center text-light text-4xl bg-main rounded-full w-14 h-14 '><AiOutlineQuestionCircle /> </span>
                <span className='hidden lg:flex items-center text-light text-sm bg-trans  px-3 my-1 rounded-3xl shadow-sm'>Register </span>
                <span className='hidden lg:flex items-center text-light text-sm bg-trans  px-3 my-1 rounded-3xl shadow-sm'>Sign in</span>
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


      <div className='mx-5 py-14 lg:py-24 lg:max-w-4xl lg:mx-auto md:max-w-3xl md:mx-auto'>

        <div className='mb-5 space-y-5'>
          <div className='text-lg lg:text-2xl text-light heading'>
          Pampered. Privileged. Exhilarating
          </div>
          <div className='text-lg lg:text-5xl font-bold text-light mb-2 heading'>
          Discover this emirate and its dazzling treasures
          </div>

        </div>
        {/* <div className='mb-5 bg-trans rounded-2xl p-5 space-y-4 py-7'>
          <div className='text-2xl lg:text-3xl font-bold text-light  mb-2'>
            Find and book a great experience
          </div>

          <div className='text-lg lg:text-lg text-dark'>
            Discover more of your destination and make the most of your trip
          </div>
        </div> */}
      </div>
            <div className=' pb-14 lg:max-w-screen-xl lg:mx-auto md:mx-10'>
        <div className='card px-5 lg:px-14  py-14  lg:rounded-3xl lg:flex space-y-5 lg:space-y-0'>
          <div className='w-full lg:w-6/12 space-y-4'> 
          <div className='text-lg text-white'>Destination</div>
            <input className='px-2 text-light placeholder:text-light w-full lg:w-10/12 py-3 rounded-t-md lg:rounded-xl bg-lighttrans ' type='text' placeholder='Destination or attraction name' />
          </div>
          <div className='w-full lg:w-5/12 space-y-4'>
          <div className='text-lg text-white'>Date of Travel</div>
            <input className='px-2 text-light placeholder:text-light w-full lg:w-10/12 py-3 rounded-b-md lg:rounded-xl bg-lighttrans' type='date' placeholder='Select your date' />
          </div>
          <div className='lg:w-1/12  flex justify-center items-center'>
            <button className='bg-main w-14 h-14 flex justify-center items-center text-2xl text-light rounded-full'>< BiSearch /> </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default EnquirySection
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineClose, AiOutlineMenu, AiOutlineQuestionCircle, AiOutlineRight } from 'react-icons/ai'
import { CgSmartphone } from "react-icons/cg";
import { GrClose } from 'react-icons/gr'
import { MenuLinks } from '../../data'
import india from '../../static/images/india.png'
import { Link } from 'react-router-dom';
import travellersChoice from '../../static/images/travellersChoice.png'
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';


function Navbar() {

  const [viewMenu, setViewMenu] = useState(false)
  const [viewRegister, setViewRegister] = useState(false)
  const [viewlogin, setViewlogin] = useState(false)

  return (
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
      <div className='bg-soft'>
        <div className=' py-3 px-3 lg:max-w-screen-xl lg:mx-auto'>
          <div className='flex justify-between'>
            <Link to='/'>
              <div className=''>
                <img className='h-10 md:h-auto' src={travellersChoice} alt='travellersChoice' />
              </div>
            </Link>
            <div className='flex space-x-5'>
              <span className='lg:hidden flex items-center text-stone-600 text-2xl '><CgProfile /></span>
              <span className='lg:hidden flex items-center text-stone-600 text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span>
              <span className='hidden lg:flex items-center text-stone-600 text-lg font-semibold'>INR</span>
              <span className='hidden lg:flex items-center text-stone-600 text-2xl'><img src={india} alt='india' className='h-6 w-6' /></span>
              <span className='hidden lg:flex items-center text-stone-600 text-2xl'><AiOutlineQuestionCircle /> </span>
              <span className='hidden lg:flex items-center text-light text-sm bg-main px-3  my-3 rounded-lg shadow-sm cursor-pointer' onClick={() => setViewRegister(!viewRegister)}>Register </span>
              <span className='hidden lg:flex items-center text-light text-sm bg-blue px-3  my-3 rounded-lg shadow-sm cursor-pointer' onClick={() => setViewlogin(!viewlogin)}>Sign in</span>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className={`fixed top-0 bottom-0 left-0 right-0 card z-20 ${viewRegister ? "scale-100" : "scale-0"}  duration-200 ease-in transition-all `} >
          <div className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`} onClick={() => setViewRegister(!viewRegister)}>
            <AiOutlineClose />
          </div>
          <Register
            setViewRegister={setViewRegister}
            setViewlogin={setViewlogin}
            viewRegister={viewRegister}
            viewlogin={viewlogin}
          />
        </div>
        <div className={`fixed top-0 bottom-0 left-0 right-0 card z-20 ${viewlogin ? "scale-100" : "scale-0"}  duration-200 ease-in transition-all `} >
          <div className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`} onClick={() => setViewlogin(!viewlogin)}>
            <AiOutlineClose />
          </div>
          <Login
            setViewRegister={setViewRegister}
            setViewlogin={setViewlogin}
            viewRegister={viewRegister}
            viewlogin={viewlogin} />
        </div>
      </>
    </>
  )
}

export default Navbar
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'

function Register({ setViewRegister, setViewlogin, viewlogin, viewRegister }) {
  return (
    <>
      <div className='flex justify-center items-center w-full h-[100vh] z-50'>
        <div className='h-[75vh] w-8/12 bg-[#fcfeff]  rounded-2xl overflow-hidden'>
          <div className='m-4 h-[96%] relative'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute -bottom-14'>
              <path fill="#ffffff" fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <div className=' bgdubai h-[100%]  bg-right rounded-2xl flex justify-between items-center pr-6'>
              <div className='h-full flex items-end z-20'>
                <div className='mb-7'>
                  <div className='text-2xl text-darktext'>Help line</div>
                  <div className='text-sm text-text'>when an unknown printer took a galley of type and scrambled </div>
                </div>
              </div>
              <div className='w-4/12 registercard h-[90%] rounded-2xl'>
                <div className='p-5 space-y-3'>
                  <div className='text-4xl text-soft font-semibold'>Greetings...</div>
                  <div className='space-y-2'>
                    <label className='text-semisoft '> Name</label>
                    <input type='text' placeholder='Tell us Your Name' className='w-full placeholder:text-light bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-light' />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-semisoft '> Email</label>
                    <input type='email' placeholder='Enter Your Email' className='w-full placeholder:text-light bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-light ' />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-semisoft '> PhoneNumber</label>
                    <input type='number' placeholder='Enter Your Phone Number' className='w-full placeholder:text-light bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-light' />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-semisoft '> Password</label>
                    <input type='password' placeholder='Give a password' className='w-full placeholder:text-light bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-light' />
                  </div>
                  <div className='text-semisoft'>
                    <span className='text-xs'>By register you agree to our</span>
                    <span className='text-xs text-blue hover:text-sky-500 cursor-pointer underline'>{' '} Terms and Conditions</span>
                  </div>
                  <div className='flex justify-center'>
                    <button type='submit' className='py-2 rounded-xl px-10 bg-blue hover:bg-light hover:text-blue text-light duration-300 flex items-center space-x-2 cursor-pointer'>
                      <span className=''>Register</span>
                      <span className=''><AiOutlineRight /> </span>
                    </button>

                  </div>
                  <div className='flex items-center justify-between pt-2'>
                    <button className='flex items-center space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-light duration-200'>
                      <span className=''><FcGoogle /></span>
                      <span className=''>Google</span>
                    </button>
                    <button className='flex items-center space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-light duration-200'>
                      <span className='text-blue'><BsFacebook /> </span>
                      <span className=''>Facebook</span>
                    </button>
                  </div>
                  <div className='text-sm pt-1'>
                    <span className='text-light'>Already have an account? {' '}</span>
                    <span className='text-blue underline cursor-pointer' onClick={async () => {
                      await setViewRegister(!viewRegister)
                      await setViewlogin(!viewlogin)
                    }}>Login</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
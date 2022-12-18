import React from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'

function Login({setViewRegister, setViewlogin, viewlogin, viewRegister }) {
  return (
    <>
    <div className='flex justify-center items-center w-full h-[100vh] z-50'>
      <div className='h-[75vh] w-8/12 bg-[#fcfeff]  rounded-2xl overflow-hidden'>
        <div className='m-4 h-[96%] relative'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute -bottom-14'>
            <path fill="#ffffff" fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg> */}
          <div className=' bglogindubai h-[100%]  bg-right rounded-2xl flex justify-start items-center pl-16'>
            <div className='w-4/12 loginCard shadow-md  rounded-2xl'>
              <div className='p-5 space-y-3'>
                <div className='text-4xl text-main font-semibold'>Welcome Back...</div>
                
                <div className='space-y-5 py-4'>
                  <button className='flex items-center shadow-md space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                    <span className='text-3xl'><FcGoogle /></span>
                    <span className=''>Continue with google</span>
                  </button>
                  <button className='flex items-center shadow-md space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                    <span className=' text-3xl text-blue'><BsFacebook /> </span>
                    <span className=''>Continue with facebook</span>
                  </button>
                </div>
                <div className='space-y-2 border-t py-4'>
                  <label className='text-text '> Email</label>
                  <input type='email' placeholder='Enter Your Email' className='w-full placeholder:text-maintrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans ' />
                </div>
                <div className='space-y-2'>
                  <label className='text-text '> Password</label>
                  <input type='password' placeholder='Give a password' className='w-full placeholder:text-maintrans bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans' />
                </div>
                <div className='text-text'>
                  <span className='text-xs'>By Signing In you agree to our</span>
                  <span className='text-xs text-main hover:text-orange-500 cursor-pointer underline'>{' '} Terms and Conditions</span>
                </div>
                <div className='flex justify-between'>
                  <button type='submit' className='py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2'>
                    <span className=''>Sign In</span>
                    <span className=''><AiOutlineRight /> </span>
                  </button>
                  <span className='text-sm flex space-x-1 items-center hover:text-main cursor-pointer px-5 text-maintrans'>
                    <span className=''><RiLockPasswordLine /> </span>
                    <span className=''>Forgot password</span>
                  </span>
                </div>
                <div className='text-sm pt-1'>
                  <span className='text-maintrans'>Dont have an account yet? {' '}</span>
                  <span className='text-main underline cursor-pointer' onClick={async() => {
                    await setViewlogin(!viewlogin)
                    await setViewRegister(!viewRegister)
                  }}>Register</span>
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

export default Login
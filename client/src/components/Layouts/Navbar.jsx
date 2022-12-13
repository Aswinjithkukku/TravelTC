import React,{ useState }  from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai'
import { CgSmartphone } from "react-icons/cg";
import { GrClose } from 'react-icons/gr'
// import { NavbarLinks } from '../../data'
import { MenuLinks } from '../../data'
import india from '../../static/images/india.png'

function Navbar() {

  const [ viewMenu, setViewMenu ] = useState(false)

  return (
    <>
    { viewMenu && (
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
      <div className='bg-card'>
        <div className=' py-3 px-3 lg:max-w-6xl lg:mx-auto'>
          <div className='flex justify-between'>
            <div className='text-2xl font-bold text-text'>TcTours</div>
            <div className='flex space-x-5'>
              <span className='lg:hidden flex items-center text-stone-600 text-2xl '><CgProfile /></span>
              <span className='lg:hidden flex items-center text-stone-600 text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span>
              <span className='hidden lg:flex items-center text-stone-600 text-lg font-semibold'>INR</span>
              <span className='hidden lg:flex items-center text-stone-600 text-2xl'><img src={india} alt='india' className='h-6 w-6' /></span>
              <span className='hidden lg:flex items-center text-stone-600 text-2xl'><AiOutlineQuestionCircle /> </span>
              <span className='hidden lg:flex items-center text-stone-600 text-sm bg-light px-3 py-1 rounded-lg shadow-sm'>Register </span>
              <span className='hidden lg:flex items-center text-stone-600 text-sm bg-light px-3 py-1 rounded-lg shadow-sm'>Sign in</span>
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
  )
}

export default Navbar
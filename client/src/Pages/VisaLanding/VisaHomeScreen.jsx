import React from 'react'
import TermsConditionSection from './TermsConditionSection'
import VisaApplyCard from './VisaApplyCard'
import VisaComponentPage from './VisaComponentPage'
import VisaDocumentSection from './VisaDocumentSection'
import VisaFAQsSection from './VisaFAQsSection'

function VisaHomeScreen() {
  return (
    <>
      <div className='md:max-w-screen-xl md:mx-auto flex py-7'>
        <div className=' w-5/12 text-darktext  space-y-7'>
          <div className='text-5xl'>Dubai Visa</div>
          <div className='flex justify-around items-center'>
            <span className='space-y-2'>
              <div className='text-sm text-text'>Processing Time</div>
              <div className='text-xl'>Up to 48 hours</div>
            </span>
            <span className='space-y-2'>
              <div className='text-sm text-text'>Starting from</div>
              <div className='text-xl'>AED 310.00</div>
            </span>
          </div>
        </div>
        <div className='w-7/12'>Image</div>
      </div>
      <div className=''>
        <div className='bg-semisoft sticky top-0 z-10'>
          <div className='md:max-w-screen-xl md:mx-auto text-darktext '>
            <div className=' overflow-x-auto'>
              <div className=' flex md:grid md:grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center '>
                <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3 border-b-4 border-blue hover:text-lightblue text-lightblue  hover:border-b-4 duration-300 space-x-1 `}>
                  <span className=''>lg </span>
                  <span className=''>Visas</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''>lh </span>
                  <span className=''>Documents</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''>lh</span>
                  <span className=''>Process</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''>lg </span>
                  <span className=''>FAQs</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1 `}>
                  <span className=''>lh </span>
                  <span className=''>Terms & conditions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='md:max-w-screen-xl md:mx-auto'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-8'>
              <VisaComponentPage />
              <VisaDocumentSection />
              <VisaFAQsSection />
            </div>
            <div className='col-span-4 relative'>
              <div className='sticky top-20'>
              <VisaApplyCard />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light'>
          <div className='md:max-w-screen-xl md:mx-auto'>
            <TermsConditionSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default VisaHomeScreen
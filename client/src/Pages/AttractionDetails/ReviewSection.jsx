import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function ReviewSection() {
  return (
    <div className=''>
      {/* <div className='lg:max-w-6xl lg:mx-auto '>
        <div className='bg-light rounded-xl py-10 px-10 lg:px-20'>
          <div className='text-lg font-medium text-text'>
            Write your review
          </div>
          <div className='text-text font-medium text-sm text-center'>
            please
            <span className='underline text-card'>login</span>
            to submit your review
          </div>
        </div> 
      </div> */}
      <div className='lg:max-w-6xl lg:mx-auto py-7'>
        <div className=''>
          <div className='bg-light  lg:rounded-xl my-3 overflow-hidden'>
            <div className='p-3 px-5 bg-semisoft '>
              <div className='flex justify-between items-center'>
                <div className='flex items-end space-x-2'>
                  <span className=''>
                    <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='img' className='rounded-full h-10 w-10' />
                  </span>
                  <span className='text-darktext'> Sam Philipie </span>
                </div>
                <div className=''>
                  <span className='flex text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </div>
              </div>
            </div>
            <div className='p-5'>
              <div className='border-b flex justify-between items-center py-3'>
                <span className='text-darktext font-medium'>"Terreffic"</span>
                <span className='text-text text-sm'>Reviewed 23rd,November</span>
              </div>
              <div className='py-3'>
                <p className='text-text text-sm'>The customer receives a confirmation voucher via email within 2
                  business hours of successful booking.
                  In case the preferred slots are unavailable,
                  an alternate schedule of the customer’s preference will be arranged and a
                  new confirmation voucher will be sent via email. Alternatively</p>
              </div>
            </div>
          </div>

          <div className='bg-light  lg:rounded-xl my-3 overflow-hidden'>
            <div className='p-3 px-5 bg-semisoft '>
              <div className='flex justify-between items-center'>
                <div className='flex items-end space-x-2'>
                  <span className=''>
                    <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='img' className='rounded-full h-10 w-10' />
                  </span>
                  <span className='text-darktext'> Sam Philipie </span>
                </div>
                <div className=''>
                  <span className='flex text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </div>
              </div>
            </div>
            <div className='p-5'>
              <div className='border-b flex justify-between items-center py-3'>
                <span className='text-darktext font-medium'>"Terreffic"</span>
                <span className='text-text text-sm'>Reviewed 23rd,November</span>
              </div>
              <div className='py-3'>
                <p className='text-text text-sm'>The customer receives a confirmation voucher via email within 2
                  business hours of successful booking.
                  In case the preferred slots are unavailable,
                  an alternate schedule of the customer’s preference will be arranged and a
                  new confirmation voucher will be sent via email. Alternatively</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
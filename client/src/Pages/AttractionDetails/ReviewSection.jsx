import React from 'react'

function ReviewSection() {
  return (
    <div className='bg-stone-50'>
      <div className='lg:max-w-6xl lg:mx-auto py-7'>
        <div className='bg-light shadow-sm py-10 px-10 lg:px-20'>
          <div className='text-lg font-medium text-text'>
            Write your review
          </div>
          <div className='text-text font-medium text-sm text-center'>
            please
            <span className='underline text-card'>login</span>
            to submit your review
          </div>
        </div>
      </div>
      <div className='lg:max-w-6xl lg:mx-auto py-7'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
          <div className='bg-light px-3 lg:rounded-xl shadow-sm'>
            <div className='text-center'>
              <div className=''>Excellent</div>
              <div className=''>xxxxx</div>
            </div>
            <div className='text-text font-semibold text-center'>Test manually</div>
            <div className='text-text text-sm'>Very well organised, well behaved staff and extremely easy to move around without any confusion</div>
            <div className='flex justify-end text-card font-medium underline'>read more</div>
            <div className='flex space-x-3'>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
            </div>
          </div>
          <div className='bg-light px-3 lg:rounded-xl shadow-sm'>
            <div className='text-center'>
              <div className=''>Excellent</div>
              <div className=''>xxxxx</div>
            </div>
            <div className='text-text font-semibold text-center'>Test manually</div>
            <div className='text-text text-sm'>Very well organised, well behaved staff and extremely easy to move around without any confusion</div>
            <div className='flex justify-end text-card font-medium underline'>read more</div>
            <div className='flex space-x-3'>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
              <div className='h-24 w-24'>
                <img src='https://images.pexels.com/photos/7199830/pexels-photo-7199830.png?auto=compress&cs=tinysrgb&w=1600' alt='yep' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
import React from 'react'

function EnquirySection() {
  return (
    <div className='bg-stone-100'>
    <div className='mx-5 py-14 lg:py-24 lg:max-w-4xl lg:mx-auto md:max-w-3xl md:mx-auto'>

      <div className='mb-5'>
        <div className='text-2xl lg:text-3xl font-bold text-semi mb-2'>
          Find and book a great experience
        </div>

        <div className='text-base lg:text-lg text-text'>
          Discover more of your destination and make the most of your trip
        </div>
      </div>

      <div className='border-2 border-semi rounded-lg lg:rounded-none lg:flex'>
        <div className='lg:w-5/12'>
        <input className='border w-full py-2 rounded-t-md lg:rounded-none' type='text' placeholder='Destination or attraction name'/>
        </div>
        <div className='lg:w-5/12'>
        <input className='border w-full py-2 rounded-b-md lg:rounded-none' type='date' placeholder='Select your date' />
        </div>
        <div className='lg:w-2/12'>
          <button className='bg-card w-full py-2 border-t-2 rounded-md lg:rounded-none border-semi'> Search</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default EnquirySection
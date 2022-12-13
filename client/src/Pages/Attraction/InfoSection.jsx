import React from 'react'
import { Link } from 'react-router-dom'
import { SlInfo } from 'react-icons/sl'

function InfoSection() {
  return (
    <div className='mx-5 my-7 lg:max-w-6xl lg:mx-auto'>
        <div className='border-2 rounded-md border-stone-300 py-2 lg:py-6 flex items-center px-2 space-x-2'>
            <div className='bg-red-200 text-red-600  text-2xl flex items-center justify-center p-2 '><SlInfo /> </div>
            <div className='text-sm'>Check local guidelines before planning your visit. 
            <Link to='/' className='text-blue-600 underline'>{' '} Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
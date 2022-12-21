import React from 'react'
import { GiIsland } from 'react-icons/gi'
import { MdOutlineAttractions } from 'react-icons/md'

function SearchHomePage() {
  return (
    <div className='py-10'>
        <div className='lg:max-w-screen-xl lg:mx-auto space-y-7'>
            <div className=''>
                <input type='search' placeholder='Search here!!!' className='px-3 bg-trans w-full border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-lg text-darktext' />
            </div>
            <div className=''>
                <div className='flex justify-between space-x-1 lg:grid lg:grid-cols-6 gap-7 '>
                    <div className='space-x-2 flex hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'> <GiIsland /></span>
                        <span className=''>Tours</span>
                    </div>
                    <div className='flex space-x-2 hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'>lg</span>
                        <span className=''>Activities</span>
                    </div>
                    <div className='flex space-x-2 hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'><MdOutlineAttractions /></span>
                        <span className=''>Attraction</span>
                    </div>
                    <div className='flex space-x-2 hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'>lg</span>
                        <span className=''>Landmarks</span>
                    </div>
                    <div className='flex space-x-2 hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'>lg</span>
                        <span className=''>Museums</span>
                    </div>
                    <div className='flex space-x-2 hover:text-lightblue justify-center items-center py-4 rounded-lg border border-lightblue cursor-pointer'>
                        <span className='text-lightblue'>lg</span>
                        <span className=''>Extras</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchHomePage
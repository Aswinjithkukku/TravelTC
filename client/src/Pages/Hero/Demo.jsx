import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import ReactPlayer from 'react-player'

function Demo() {
  return (
    <>
      <div className=' lg:max-w-screen-xl lg:mx-auto my-10'>
        <div className='space-y-7'>
          <div className='text-4xl font-semibold text-dark heading'>
            Burj Khalifa
          </div>
          <div className='text-xl  text-text heading'>
            The largest bulding in the world
          </div>
          <div className='grid grid-cols-5 gap-7 py-5'>
            <div className=''>
              <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                className='object-cover w-full h-[32vh] hidden lg:block rounded-2xl hover:scale-95 duration-1000' />
            </div>
            <div className=''>
              <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                className='object-cover w-full h-[32vh] hidden lg:block rounded-2xl hover:scale-95 duration-1000' />
            </div>
            <div className=''>
              <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                className='object-cover w-full h-[32vh] hidden lg:block rounded-2xl hover:scale-95 duration-1000' />
            </div>
            <div className=''>
              <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                className='object-cover w-full h-[32vh] hidden lg:block rounded-2xl hover:scale-95 duration-1000' />
            </div>
            <div className=''>
              <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                className='object-cover w-full h-[32vh] hidden lg:block rounded-2xl hover:scale-95 duration-1000' />
            </div>
          </div>


        </div>
      </div>
{/* 
     demosection ends here */}

      <div className='lg:max-w-screen-xl lg:mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-7'>
            <div className=' '>
              {/* <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' /> */}
              {/* <iframe src='https://www.youtube.com/watch?v=K4TOrB7at0Y' alt='Burj Khalifa' className='w-full h-[50vh]' /> */}
              <ReactPlayer width={'100%'} height={'50vh'} muted url='https://www.youtube.com/watch?v=DPK3S4ZtJJI' />
              {/* controls  playing loop */}
            </div>
          </div>
          <div className='col-span-5'>
            <div className='space-y-3 mt-3'>
              <div className='flex space-x-2'>
                <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                <span className='text-sm '>Explore one of the most famous & tallest skyscraper in the world, The Burj Khalifa </span>
              </div>
              <div className='flex space-x-2'>
                <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                <span className='text-sm '>Witness the picturesque views of Dubai's skyline from 124th & 125th floors </span>
              </div>
              <div className='flex space-x-2'>
                <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                <span className='text-sm '>Catch the glimpse of aquatic animals, reptiles like Otters, Water Rats, Sea Horses, & Sea Jellies </span>
              </div>
              <div className='flex space-x-2'>
                <span className='text-xl text-orange-500 flex justify-center'><AiOutlineThunderbolt /> </span>
                <span className='text-sm '>Take a walk to witness various marine species in the 48 m long tunnel in the Dubai Aquarium </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo
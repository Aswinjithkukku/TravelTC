import React from 'react'
import { NearbyDestinations } from '../../data'

function MoreDestinations() {
  return (
    <div className='mx-5 my-7 lg:mx-auto lg:max-w-6xl'>
        <div className=''>
        <div className='text-xl font-semibold text-text'>
            Explore more destinations
        </div>
        <p className='text-text my-1'>Find things to do in cities around the world</p>
        </div>
        <div className='overflow-x-auto flex space-x-4 my-5 border-b-2'>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Europe</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>North America</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Asia</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Africa</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Oceania</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>Middle East</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>South America</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Caribbean</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>Central</button>
        </div>
        <div className='md:grid lg:grid-cols-4 md:gap-5 md:grid-cols-2'>
        {NearbyDestinations?.map((image,index) => (
      <div className='mt-2 relative' key={index}>
        <div className='overflow-hidden rounded-2xl'>
        <img className='object-cover rounded-2xl h-[14em] w-full transition-all duration-500 cursor-pointer hover:scale-110' src={image.img} alt={image.name} />
        </div>
        <div className='absolute bottom-2 left-4  text-light'>
          <div className='font-semibold'>{image.name} </div>
          <div className='text-xs'>{image.number}tickets more</div>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default MoreDestinations
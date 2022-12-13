import React from 'react'
import Navigator from '../../components/Layouts/Navigator'
import FunctionalitySection from '../AttractionLanding/FunctionalitySection'
import ListResultView from '../AttractionLanding/ListResultView'

function AttractionLandingPage() {
  return (
    <div>
      <div className='lg:max-w-6xl lg:mx-auto '>
        <Navigator />
        <div className='text-text mx-5 lg:mx-0'>
          <h1 className='font-semibold text-xl'>Dubai Attractions</h1>
          <h4 className='font-semibold text-sm'>855 things to do</h4>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-5 mt-3'>
          <span className='lg:col-span-4'>
            <FunctionalitySection />
          </span>
          <span className='lg:col-span-8'>
            <ListResultView />
          </span>
        </div>
      </div>
    </div>
  )
}

export default AttractionLandingPage
import React, { useEffect } from 'react'
import Navigator from '../../components/Layouts/Navigator'
import FunctionalitySection from '../AttractionLanding/FunctionalitySection'
import ListResultView from '../AttractionLanding/ListResultView'
import { useDispatch } from 'react-redux'
import { getExcursions } from '../../redux/slices/excursionSlice'
import { getState } from '../../redux/slices/generalSlice'
import { useParams } from 'react-router-dom'

function AttractionLandingPage() {
  const dispatch = useDispatch()
  const {id} = useParams()


  useEffect(() => {
    dispatch(getExcursions())
    dispatch(getState())
},[dispatch])

  return (
    <div>
      <div className='lg:max-w-screen-xl lg:mx-auto '>
        <Navigator />
        <div className=' mx-5 my-7 lg:mx-0 space-y-3'>
          <h1 className='font-semibold text-3xl lg:text-5xl text-dark'>Dubai Attractions</h1>
          <h4 className='font-medium text-sm text-text'>855 things to do</h4>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-5 mt-3'>
          <span className='lg:col-span-3'>
            <FunctionalitySection />
          </span>
          <span className='lg:col-span-9'>
            <ListResultView id={id} />
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default AttractionLandingPage
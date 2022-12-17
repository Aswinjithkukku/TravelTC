import React, { useEffect } from 'react'
import Navigator from '../../components/Layouts/Navigator'
import FunctionalitySection from '../AttractionLanding/FunctionalitySection'
import ListResultView from '../AttractionLanding/ListResultView'
import { useDispatch } from 'react-redux'
import { getExcursions } from '../../redux/slices/excursionSlice'
import { getState } from '../../redux/slices/generalSlice'
import { useParams } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'

function AttractionLandingPage() {
  const dispatch = useDispatch()
  const {id} = useParams()


  useEffect(() => {
    dispatch(getExcursions())
    dispatch(getState())
},[dispatch])

  return (
    <div className='relative'>
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
      <div className='hidden lg:block fixed bottom-20 left-14 '>
        <div className='px-3 py-3 rounded-full text-light space-x-3 h-16 w-16 bg-green-500 flex items-center justify-center hover:scale-105 duration-300 transition-all'>
        <span className='text-3xl'> <BsWhatsapp/> </span>
        {/* <span className=''>Chat with us</span> */}
        </div>
      </div>
    </div>
  )
}

export default AttractionLandingPage
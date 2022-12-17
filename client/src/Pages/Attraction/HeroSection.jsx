import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdAttractions } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { IoIosCar } from 'react-icons/io'
import { FaHotel, FaWpforms } from 'react-icons/fa'
import banner from "../../static/images/banner.jpg"
import dubai from "../../static/images/dubai.jpg"
import uae from "../../static/images/uae.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AttractionCard from '../../components/Attractions/AttractionCard'
import FlightCard from '../../components/Attractions/FlightCard'
import HotelCard from '../../components/Attractions/HotelCard'
import CarCard from '../../components/Attractions/CarCard'
import { IoLocationOutline } from 'react-icons/io5'

function HeroSection() {
    const [viewAttraction, setViewAttraction] = useState(true)
    const [viewFlight, setViewFlight] = useState(false)
    const [viewHotel, setViewHotel] = useState(false)
    const [viewVisa, setViewVisa] = useState(false)
    const [viewCar, setViewCar] = useState(false)



    const [currentSlide, setCurrentSlide] = useState(0)

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index)
        }
    }

    return (
        <div>
            <div className='lg:max-w-screen-2xl lg:mx-auto lg:pt-14'>
                <main className='md:mb-36'>
                    <div className=' relative'>

                        <div className='overflow-hidden lg:rounded-[4em] lg:h-[70vh] relative bg-cover '>
                            <div className='absolute top-0 text-center w-full z-10'>
                                <div className='text-3xl lg:text-6xl font-bold text-light heading pt-20'>Discover Beautiful Places</div>
                                <div className='text-light md:text-lg '>Discover this emirate and its dazzling treasures</div>
                                {/* <div className='hidden md:block text-light bg-trans text-2xl mt-24 py-10'>Explore Your Destination </div> */}

                                <div className='hidden md:flex justify-between  items-center mt-[26em] mx-10 max-w-8xl'>
                                    <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide - 1)}><AiOutlineLeft /> </span>
                                    <span className='text-3xl text-light font-lg space-x-1 flex '><IoLocationOutline /> Dubai</span>
                                    <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide + 1)}><AiOutlineRight /></span>
                                </div>
                            </div>
                            <Carousel
                                infiniteLoop
                                autoPlay
                                showThumbs={false}
                                interval={9000}
                                showArrows={false}
                                stopOnHover
                                swipeable={false}
                                selectedItem={currentSlide}
                                showIndicators={false}
                                showStatus={false}
                                onChange={updateCurrentSlide}
                            >
                                <div className='bg-inherit h-full'>
                                    <img src={uae} alt='hero' className='bg-cover h-full' />
                                </div>
                                <img src={dubai} alt='hero' className='bg-cover h-full' />
                                <img src={banner} alt='hero' className='bg-cover h-full' />

                            </Carousel>
                        </div>
                        <div className='md:absolute z-10 bottom-36 w-full md:flex justify-center '>
                            <div className=' absolute top-56  md:-top-12  lg:left-60 md:left-40  md:right-40 lg:right-auto bg-light rounded-t-2xl md:rounded-t-[1em] '>
                                <div className='grid grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center '>
                                    <button className={`flex justify-center text-sm md:text-base items-center md:px-3 py-2 rounded-t-xl  hover:text-text hover:bg-blue duration-300 space-x-1 ${viewAttraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewFlight(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewAttraction(true)
                                    }}>
                                        <span className=''><MdAttractions /> </span>
                                        <span className=''>Attraction</span>
                                    </button>
                                    <button className={`flex justify-center text-sm md:text-base items-center md:px-3 py-2 rounded-t-xl  hover:text-text hover:bg-blue duration-300 space-x-1  ${viewFlight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewFlight(true)
                                    }}>
                                        <span className=''><GiCommercialAirplane /> </span>
                                        <span className=''>Flight</span>
                                    </button>
                                    <button className={`flex justify-center text-sm md:text-base items-center md:px-3 py-2 rounded-t-xl  hover:text-text hover:bg-blue duration-300 space-x-1  ${viewHotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewFlight(false)
                                        await setViewHotel(true)
                                    }}>
                                        <span className=''><FaHotel /> </span>
                                        <span className=''>Hotel</span>
                                    </button>
                                    <button className={`flex justify-center text-sm md:text-base items-center md:px-3 py-2 rounded-t-xl  hover:text-text hover:bg-blue duration-300 space-x-1  ${viewVisa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewCar(false)
                                        await setViewFlight(false)
                                        await setViewVisa(true)
                                    }}>
                                        <span className=''><FaWpforms /> </span>
                                        <span className=''>Visa</span>
                                    </button>
                                    <button className={`flex justify-center text-sm md:text-base items-center md:px-3 py-2 rounded-t-xl  hover:text-text hover:bg-blue duration-300 space-x-1  ${viewCar ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewFlight(false)
                                        await setViewCar(true)
                                    }}>
                                        <span className=''><IoIosCar /> </span>
                                        <span className=''>Car</span>
                                    </button>
                                </div>
                            </div>
                            <div className='bg-light w-full md:w-9/12 md:rounded-[2em] relative'>
                                <>
                                    {viewAttraction && (
                                        <AttractionCard />
                                    )}

                                    {viewFlight && (
                                        <FlightCard />
                                    )}
                                    {viewHotel && (
                                        <HotelCard />
                                    )}
                                    {viewCar && (
                                        <CarCard />
                                    )}
                                </>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HeroSection
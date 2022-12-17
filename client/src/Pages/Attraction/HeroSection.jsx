import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import banner from "../../static/images/banner.jpg"
import dubai from "../../static/images/dubai.jpg"
import uae from "../../static/images/uae.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AttractionCard from '../../components/Attractions/AttractionCard'
import FlightCard from '../../components/Attractions/FlightCard'
import HotelCard from '../../components/Attractions/HotelCard'
import CarCard from '../../components/Attractions/CarCard'

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
            <div className='lg:max-w-screen-2xl lg:mx-auto lg:py-14'>
                <main className='md:mb-36'>
                    <div className=' relative'>

                        <div className='overflow-hidden lg:rounded-[4em] lg:h-[70vh] relative cover '>
                            <div className='absolute top-0 text-center w-full z-10'>
                                <div className='text-3xl lg:text-6xl font-bold text-light heading pt-20'>Discover Beautiful Places</div>
                                <div className='text-light md:text-lg '>Discover this emirate and its dazzling treasures</div>
                                {/* <div className='hidden md:block text-light bg-trans text-2xl mt-24 py-10'>Explore Your Destination </div> */}

                                <div className='hidden md:flex justify-between  mx-auto max-w-3xl'>
                                    <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide - 1)}><AiOutlineLeft /> </span>
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
                                <img src={uae} alt='hero' className='bg-cover' />
                                <img src={dubai} alt='hero' className='bg-cover' />
                                <img src={banner} alt='hero' className='bg-cover' />

                            </Carousel>
                        </div>
                        <div className='md:absolute z-10 -bottom-20 w-full md:flex justify-center '>
                            <div className=' md:absolute -top-14 md:-top-12  lg:left-60 md:left-40  md:right-40 lg:right-auto bg-light rounded-t-[2em] '>
                                <div className='grid grid-cols-5 space-x-1 px-3 md:px-10 py-3 md:py-1 items-center '>
                                    <button className={` md:px-3 py-2 rounded-full  hover:text-text hover:bg-blue duration-300 ${viewAttraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewFlight(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewAttraction(true)
                                    }}>Attraction</button>
                                    <button className={` md:px-3 py-2 rounded-full  hover:text-text hover:bg-blue duration-300 ${viewFlight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewFlight(true)
                                    }}>Flight</button>
                                    <button className={` md:px-3 py-2 rounded-full  hover:text-text hover:bg-blue duration-300 ${viewHotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewVisa(false)
                                        await setViewCar(false)
                                        await setViewFlight(false)
                                        await setViewHotel(true)
                                    }}>Hotel</button>
                                    <button className={` md:px-3 py-2 rounded-full  hover:text-text hover:bg-blue duration-300 ${viewVisa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewCar(false)
                                        await setViewFlight(false)
                                        await setViewVisa(true)
                                    }}>Visa</button>
                                    <button className={` md:px-3 py-2 rounded-full  hover:text-text hover:bg-blue duration-300 ${viewCar ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={async () => {
                                        await setViewAttraction(false)
                                        await setViewHotel(false)
                                        await setViewVisa(false)
                                        await setViewFlight(false)
                                        await setViewCar(true)
                                    }}>Car</button>
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
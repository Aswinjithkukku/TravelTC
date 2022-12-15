import React from 'react'
import ActivityAndTourSection from '../Attraction/ActivityAndToursSection'
import AttractionsAndLandmarkSection from '../Attraction/AttractionsAndLandmarkSection'
import BlogSection from '../Attraction/BlogSection'
import EnquirySection from '../Attraction/EnquirySection'
import FeatureSection from '../Attraction/FeatureSection'
import HeroSection from '../Attraction/HeroSection'
import InfoSection from '../Attraction/InfoSection'
import MoreDestinations from '../Attraction/MoreDestinations'
import NearbySection from '../Attraction/NearbySection'
import TopSellingSection from '../Attraction/TopSellingSection'

function AttractionHomePageTwo() {
    return (
        <div className='bg-soft space-y-20'>
            <HeroSection />
            <InfoSection />
            <FeatureSection />
            <ActivityAndTourSection />
            <AttractionsAndLandmarkSection />
            <TopSellingSection />
            {/* <MoreDestinations /> */}
            <BlogSection />
            <NearbySection />
        </div>
    )
}

export default AttractionHomePageTwo
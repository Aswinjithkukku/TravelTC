import React from 'react'
import ActivityAndTourSection from '../Attraction/ActivityAndToursSection'
import AttractionsAndLandmarkSection from '../Attraction/AttractionsAndLandmarkSection'
import BlogSection from '../Attraction/BlogSection'
import HeroSection from '../Attraction/HeroSection'
import FeatureSection from '../Attraction/FeatureSection'
import InfoSection from '../Attraction/InfoSection'
import NearbySection from '../Attraction/NearbySection'
import TopSellingSection from '../Attraction/TopSellingSection'
import SpecialofferCardSection from '../Attraction/SpecialofferCardSection'
import AttractionCardSection from '../Attraction/AttractionCardSection'
import SubscribeSection from '../Attraction/SubscribeSection'

function AttractionHomePage() {
  return (
    <div className='bg-soft space-y-20'>
      <HeroSection />
      <SpecialofferCardSection />
      {/* <FeatureSection /> */}
      <ActivityAndTourSection />
      <AttractionsAndLandmarkSection />
      <TopSellingSection />
      {/* <InfoSection /> */}
      {/* <AttractionCardSection /> */}
      <BlogSection />
      <NearbySection />
      <SubscribeSection />
    </div>
  )
}

export default AttractionHomePage
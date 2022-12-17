import React from 'react'
import ActivityAndTourSection from '../Attraction/ActivityAndToursSection'
import AttractionsAndLandmarkSection from '../Attraction/AttractionsAndLandmarkSection'
import BlogSection from '../Attraction/BlogSection'
import HeroSection from '../Attraction/HeroSection'
import FeatureSection from '../Attraction/FeatureSection'
import InfoSection from '../Attraction/InfoSection'
import NearbySection from '../Attraction/NearbySection'
import TopSellingSection from '../Attraction/TopSellingSection'

function AttractionHomePage() {
  return (
    <div className='bg-soft space-y-20'>
      <HeroSection />
      <InfoSection />
      <FeatureSection />
      <ActivityAndTourSection />
      <AttractionsAndLandmarkSection />
      <TopSellingSection />
      <BlogSection />
      <NearbySection />
    </div>
  )
}

export default AttractionHomePage
import React from 'react'
import ActivityAndTourSection from '../Attraction/ActivityAndToursSection'
import AttractionsAndLandmarkSection from '../Attraction/AttractionsAndLandmarkSection'
import BlogSection from '../Attraction/BlogSection'
import EnquirySection from '../Attraction/EnquirySection'
import FeatureSection from '../Attraction/FeatureSection'
import InfoSection from '../Attraction/InfoSection'
import MoreDestinations from '../Attraction/MoreDestinations'
import NearbySection from '../Attraction/NearbySection'
import TopSellingSection from '../Attraction/TopSellingSection'

function AttractionHomePage() {
  return (
    <div className='bg-soft space-y-20'>
      <EnquirySection />
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

export default AttractionHomePage
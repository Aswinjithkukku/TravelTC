import React from 'react'
import EnquirySection from '../Attraction/EnquirySection'
import FeatureSection from '../Attraction/FeatureSection'
import InfoSection from '../Attraction/InfoSection'
import MoreDestinations from '../Attraction/MoreDestinations'
import NearbySection from '../Attraction/NearbySection'

function AttractionHomePage() {
  return (
    <div className=''>
      <EnquirySection />
      <InfoSection />
      <NearbySection />
      <FeatureSection />
      <MoreDestinations />
    </div>
  )
}

export default AttractionHomePage
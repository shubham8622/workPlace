import React from 'react';
import Header from './Header';
import Herobanner from './HeroBanner';
import Footer from './Footer';
import OnePlatform from './OnePlatform';
import FeatureJob from './FeaturedJob';
const LandingPage = () => {
  return (
    <>
      <Header/>
      <Herobanner/>
      <OnePlatform/>
      <FeatureJob/>
      <Footer/>
    </>
  )
}

export default LandingPage
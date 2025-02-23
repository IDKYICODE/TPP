import React from 'react'
import FeatureSection from '../Component/FeatureSection'
import Testimonials from '../Component/Testimonials'
import Stats from '../Component/Stats'
import Landingpage from '../Component/Landingpage'
import FeaturedProducts from '../Component/FeaturedProducts'
import Vidsection from '../Component/Vidsection'
import Carousel from '../Component/Carousel'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
        <Landingpage/>
        <FeaturedProducts/>
        <Vidsection/>
        <FeatureSection/>
        <Carousel/>
        <Stats/>
        <Testimonials/>
        <Footer/>

    </div>
  )
}

export default Home
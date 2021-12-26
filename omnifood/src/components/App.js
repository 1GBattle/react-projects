import React from 'react'

import Hero from './Hero'
import Nav from './Nav'
import FeaturedIn from './FeaturedIn'
import HowItWorks from './HowItWorks'
import Meals from './Meals'
import Testimonials from './Testimonials'
import PricingFeatures from './PricingFeatures'
import CTA from './CTA'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <main>
        <Nav />
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <PricingFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

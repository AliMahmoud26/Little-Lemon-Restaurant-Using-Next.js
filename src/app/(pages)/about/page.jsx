import About from '@/app/components/About'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import OurHistory from './OurHistory'
import OurTeam from './OurTeam'

const AboutLittleLemon = () => {
  return (
    <main>
      <Navbar />
      <div className="about mt-[-4rem] max-md:mx-[-1rem]">
        <About />
      </div>
      <OurHistory />
      <div className="our-team my-6 mb-18">
        <OurTeam />
      </div>
    </main>
  )
}

export default AboutLittleLemon
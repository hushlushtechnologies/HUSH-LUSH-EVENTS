import React from 'react'
import PageGround from '../components/PageGround'
import IntroductionSection from '../components/about/Introduction'
import PhilosophySection from '../components/about/Philosophy'
import FooterSection from '../sections/FooterSection'
import  AboutUsGallery from '../components/about/AboutGallery'

export default function About() {
  return (
     <>
     <PageGround name="ABOUT"/>
      <IntroductionSection/>
      <PhilosophySection />
       {/* <AboutUsGallery/> */}
        <FooterSection />
     </>
  )
}

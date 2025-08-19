import React from 'react'
import PageGround from '../components/PageGround'
import ContactPage from '../components/contact/ContactSection'
import FooterSection from '../sections/FooterSection'

export default function Contact() {
  return (
     <>
       <PageGround name="Contact Us"/>
       <ContactPage/>
       <FooterSection/>
     </>
  )
}

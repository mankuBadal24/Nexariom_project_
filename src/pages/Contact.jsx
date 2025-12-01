import React from 'react'
import Navbar from './Navbar'
import HeroContact from '../components/ui/HeroContact'
import Footer from './Footer'
import ContactCards from './ContactCards'
import ContactForm from './ContactForm'
import { ContactMap } from './ContactMap'

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <HeroContact />
        <ContactCards />
        <ContactForm />
        <ContactMap />
        </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { HeroFaq } from '../components/ui/HeroFaq'
import { FaqQuestions } from './FaqQuestions'

export const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <HeroFaq />
        <FaqQuestions />
      </div>
      <Footer />
    </div>
  )
}

export default Faq;
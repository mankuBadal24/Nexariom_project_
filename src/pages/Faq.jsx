import React from 'react'
import NavbarSecond from './NavbarSecond'
import Footer from './Footer'
import { HeroFaq } from '../components/ui/HeroFaq'
import { FaqQuestions } from './FaqQuestions'

export const Faq = () => {
  return (
    <div>
      <NavbarSecond />
      <div className="pt-20">
        <HeroFaq />
        <FaqQuestions />
      </div>
      <Footer />
    </div>
  )
}

export default Faq;
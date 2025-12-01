import React from 'react'
import NavbarSecond from './NavbarSecond'
import Footer from './Footer'
import { HeroFaq } from '../components/ui/HeroFaq'

export const Faq = () => {
  return (
    <div>
      <NavbarSecond />
      <div className="pt-20">
        <HeroFaq />
      </div>
      <Footer />
    </div>
  )
}

export default Faq;
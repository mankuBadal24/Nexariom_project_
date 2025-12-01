import React from 'react'
// import Navbar from '../pages/Navbar'
import { ProductContent } from '../pages/ProductContent'
import Footer from './Footer'
import NavbarSecond from './NavbarSecond'

export const Product = () => {
  return (
    <div>
      <NavbarSecond/>
      <div className="pt-20">
         <ProductContent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Product;
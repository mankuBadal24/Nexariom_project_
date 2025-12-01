import React from 'react'
// import Navbar from '../pages/Navbar'
import { ProductContent } from '../pages/ProductContent'
import Footer from './Footer'
import Navbar from './Navbar'

export const Product = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-20">
         <ProductContent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Product;
import { Hero } from "../components/ui/Hero"
import Footer from "./Footer"
import GlobalShipping from "./GlobalShipping"
import Navbar from "./Navbar"
import ShopyByProduct from "./ShopyByProduct"
import SubscribeNewsletter from "./SubscribeNewsletter"
import Testimonials from "./Testimonials"
import FeaturedProducts from "./FeaturedProducts"
import SpecialOffers from "./SpecialOffers"


export const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-20">
         <Hero />
         <ShopyByProduct/>
         <FeaturedProducts/>
         <SpecialOffers/>
         <Testimonials/>
         <GlobalShipping/>
         <SubscribeNewsletter/>
      </div>
      <Footer/>
    </div>
  )
}

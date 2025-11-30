import { Hero } from "../components/ui/Hero"
import GlobalShipping from "./GlobalShipping"
import Navbar from "./Navbar"
import ShopyByProduct from "./ShopyByProduct"
import SubscribeNewsletter from "./SubscribeNewsletter"
import Testimonials from "./Testimonials"



export const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="py-20">
         <Hero />
         <ShopyByProduct/>
         <Testimonials/>
         <GlobalShipping/>
         <SubscribeNewsletter/>
      </div>
    </div>
  )
}

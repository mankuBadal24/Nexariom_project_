import { Hero } from "../components/ui/Hero"
import Navbar from "./Navbar"



export const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="py-20">
         <Hero />
      </div>
    </div>
  )
}

import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./sectors/Hero"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import Message from "./sectors/Message"
import Flavor from "./sectors/Flavor"
import Nutrition from "./sectors/Nutrition"
import Benifit from "./sectors/Benifit"
// import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 3,
  //     effects: true,
  //   })
  // })

  return (

    <main>
      <Navbar />
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <Benifit />
          <div className="h-dvh border bg-amber-400"></div>
        {/* </div>
      </div> */}
    </main>

  )
}

export default App

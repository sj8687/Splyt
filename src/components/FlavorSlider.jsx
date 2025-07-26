import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { flavorlists } from "../constants"
import { useRef } from "react"
import {useMediaQuery} from "react-responsive"
gsap.registerPlugin(ScrollTrigger)


function FlavorSlider() {

    const sliderRef = useRef()

    const isTablet = useMediaQuery({
        query:"(max-width:1024px)",
    })

    useGSAP(()=>{
             const scrollAmt = sliderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {

        // const tl = gsap.timeline({
        //     scrollTrigger:{
        //         trigger:".flavor-section",
        //         start:"2% top",
        //         end:`+=${scrollAmt}px`,
        //         pin:true,
        //         scrub:true
        //     }
        // })

        // tl.to(".flavor-section",{
        //     x:`-${scrollAmt}px`,
        //     ease:"power1.inOut",

        // })


        gsap.to(".flavor-section",{
            transform:"translateX(-340%)",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                scroller:"body",
                start:"top 0%",
                end:"top -150%",
                scrub:true,
                pin:true
            }
        })
        }
       


        const titleTl = gsap.timeline({
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top top",
                end:"bottom 80%",
                scrub:true,
            }
        })

        titleTl.to(".first-text-split",{
            xPercent:-30,
            ease:"power1.inOut",
        })

        .to(".flavor-text-scroll",{
            xPercent:-22,
                        ease:"power1.inOut"


        },"<")

        .to(".second-text-split",{
            xPercent:-10,
            ease:"power1.inOut"
        },"<")
    })
    return (
       <div ref={sliderRef} className="slider-wrapper">
          <div className="flavors">
             {
                flavorlists.map((flavor) => {
                   return (
                     <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                        <img src={`/images/${flavor.color}-bg.svg`} className="absolute bottom-0"></img>

                        <img src={`/images/${flavor.color}-drink.webp`} alt="" className="drinks"/>

                        <img src={`/images/${flavor.color}-elements.webp`} alt="" className="elements" />

                        <h1>{flavor.name}</h1>
                    </div>
                   )
                })
             }
          </div>
       </div>
    )
}

export default FlavorSlider

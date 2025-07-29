import gsap from "gsap"
import { useGSAP } from "@gsap/react"


function Video() {

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".vd-pin-section",
                start:"-15% top",
                end:"200% top",
                scrub:1.5,
                markers:true,
                pin:true
            }
        })

        tl.to(".video-box",{
            clipPath:"circle(100% at 50% 50%)",
            ease:"power1.inOut",
        })
    })
  return (
    <section className="vd-pin-section">
          <div style={{
            clipPath:"circle(6% at 50% 50%)"
          }} className="size-full video-box">
               <video src="/videos/pin-video.mp4" playInline muted loop autoPlay/>

               <div className="abs-center md:scale-100 scale-200">
                <img src="/images/circle-text.svg" alt="" className="spin-circle"/>
                    <div className="play-btn">
                        <img src="/images/play.svg" alt="" className="size-[3vw] ml-[.5vw] "/>

                    </div>
               </div>
          </div>
    </section>
  )
}

export default Video

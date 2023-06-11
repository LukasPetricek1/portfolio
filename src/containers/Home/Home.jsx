import React , { useEffect, useState} from 'react'
import "./home.css"

import { gsap , TextPlugin } from 'gsap/all'
import { BiArrowFromTop } from "react-icons/bi"




function Home() {
  const [tl] = useState(gsap.timeline({ repeat : -1 , ease : "none" , repeatDelay : 0.2}))
  const [masterTl] = useState(gsap.timeline({ repeat : -1}))
  const words = [" Web Developer." , " Designer." , " Video Editor." , " Content Creator."]

  useEffect(() => { 
    gsap.registerPlugin(TextPlugin)
    gsap.to(".cursor" , 0.5 , { 
      opacity : 0,
      repeat: -1
    })

    gsap.to([".img" , ".fuck"] , 0.5 , { 
      scale : 1.02,
      yoyo:true,
      yoyoEase:"linear",
      repeat:-1
    })

    tl.to(".but" , 0.2 , { 
      scale : 1.5
    }).to(".but" , 0.2 , { 
      scale : 1
    })

    words.forEach(word => {
      let TL = gsap.timeline()
      TL.to(".writing" , 1 , { 
        text : word,
        repeat : 1,
        yoyo : true
      })
      masterTl.add(TL)
    })

  } , [])

  return (
    <div className="home" id="home">
      <section className="content">

        <video autoPlay muted loop >
          <source src="./assets/background.mp4" type="video/mp4"/>
        </video>

        <div className="content__text">
          <div className="content__text-content">
            <p className="content__text-content__paragraph" >
              Hi, my name is Lukáš Petříček,<br/>
              I am
              {/* I am <span>Web Developer</span><br/>
              <span>and Designer</span>. */}
              <span className='writing'></span>
              <span className='cursor'> _</span>
            </p>
            <div className="content__text-sign">
              <button className="but" type="button">Contact Me</button>
          </div>
          </div>
          <div className="content__text-podpis">
            <p>- Web developing, UI/UX Designing, Video and Photo Editing. -</p>
          </div>
        </div>

        <div className="content__image">
          <img className="img" src="./assets/man.png" alt="icon" />
        </div>
      </section>
      <a href="/#about"><BiArrowFromTop color="white" className='fuck' /></a>
    </div>
  )
}

export default Home
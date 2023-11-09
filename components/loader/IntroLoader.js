"use client"
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const rollIntro = async () => {
  const tl = gsap.timeline({});

  tl.set(".mvir span", {
    y: "100%",
  })
    .to(".mahavir span", {
      y: "-100%",
      stagger: 0.02,
      duration: 0.8,
      ease: "circ.inOut"
    })
    .to(".mvir span", {
      y: "0%",
      stagger: 0.02,
      duration: 0.8,
      ease: "circ.inOut"
    }, "-=0.8")
    .to(".mvir", {
      delay: 0.2,
      duration: 0.6,
      width: '0',
      ease: "power3.inOut"
    }).to(".mvir", {
      opacity: 0,
      duration: 0.6,
      ease : "circ.inOut"
    })
    .to(".intro-loader", {
      duration: 0.6,
      height: 0,
      ease: "power3.inOut",
    }, "-=0.3")
    .set(".intro-loader", {
      display: 'none',
    });


  await tl.play()
}


const IntroLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  // call rollIntro function when isLoaded is set to true
  useEffect(() => {
    if (isLoaded) {
      rollIntro()
    }
  }, [isLoaded])

  // set isLoaded to true after 1.5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <div className='intro-loader w-screen h-screen absolute z-50 bottom-0 left-0 flex justify-center items-center font-extrabold  bg-[#111111] text-white text-9xl'>
      <div className='flex w-auto  flex-col justify-center items-center overflow-hidden relative tracking-widest'>
        <h1 className='mahavir flex justify-center items-center'>
          {"MAHAVIR.".split('').map((char, index) => {
            return (
              <span key={index} className='char'>{char}</span>
            )
          })}
        </h1>
        <h1 className='mvir flex w-full justify-center items-center absolute'>
          <span>M</span>
          <span className=' flex-1'></span>
          <span>V</span>
          <span>I</span>
          <span>R</span>
          <span>.</span>
        </h1>
      </div>
    </div>
  )
}

export default IntroLoader
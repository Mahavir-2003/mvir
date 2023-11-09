"use client"
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import gsap from 'gsap'
import DashedCircle1 from "../../app/assets/SVG/DashedCircle1.svg"
import DashedCircle2 from "../../app/assets/SVG/DashedCircle2.svg"


const LandingPage = () => {


  return (
    <div className='w-full select-none h-screen flex flex-col justify-center items-center'>
    <Navbar />
    <div className='h-[90vh] w-full rounded-full flex justify-center items-center relative overflow-hidden'>
      <Image src={DashedCircle1} alt='dashed circle' className='absolute h-full dashed-circle-1' />
      <Image src={DashedCircle2} alt='dashed circle' className='absolute h-full dashed-circle-2 w-[90%]' />
        <p className="text-[550px] font-coign text-transparent gradientText z-20  tracking-wide">MAHAVIR PATEL</p>
        <div className='digi h-full w-full bg-yellow-400 absolute z-40'></div>
    </div>
  </div>
  )
}

export default LandingPage
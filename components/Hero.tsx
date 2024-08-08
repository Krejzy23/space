"use client"
import React from 'react'
import { StarsBackground } from './ui/StarsBackground'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full'>
      <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <div className="flex justify-center items-center z-10">
            <h1 className="text-white font-bold">Random Text</h1>
        </div>
        <StarsBackground />
      </div>
    </div>
  )
}

export default Hero
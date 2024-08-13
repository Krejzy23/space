"use client";
import React from "react";
import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import { Cover } from "./ui/Cover";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-410px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="h-[60rem] rounded-md bg-transparent flex flex-col items-center justify-center relative w-full z-50">
        <div className="flex justify-center items-center z-10">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 ">
            Build  <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-600 via-blue-400 to-blue-200">amazing</span> websites <br /> at <Cover>warp speed</Cover>
          </h1>
        </div>
        {/* <StarsBackground />
        <ShootingStars /> */}
      </div>
    </div>
  );
};

export default Hero;

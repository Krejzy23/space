"use client"

import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import {BentoGridDemo} from "@/components/Explore";
import Image from "next/image";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto bg-[#030014] text-white">
      <div className="h-full w-full">
        <NavbarDemo />
        <Hero />
        <BentoGridDemo />
        <Features/>

      </div>

    </main>
  );
}

"use client"
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto bg-black text-white">
      <div className="max-w-7xl w-full">
        <Hero />
        
      </div>

    </main>
  );
}

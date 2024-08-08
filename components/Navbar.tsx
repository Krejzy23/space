"use client";

import React, { Suspense, useState } from "react";
import { Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import { BlackHole } from "./BlackHole";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="w-full h-[40rem] -mt-52">
        <Canvas
          className="w-full min-h-fit bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <BlackHole rotation={[0.1, 4.7077, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="">
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Explore"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Facts"
          ></MenuItem>
        </Menu>
      </div>
    </div>
  );
}

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { BlackHole } from "./ui/BlackHole";


const Features = () => {
  return (
    <div>
      <div className="w-full h-[40rem] mt-56 z-50">
        <Canvas
          className="w-full min-h-fit bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <BlackHole/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Features
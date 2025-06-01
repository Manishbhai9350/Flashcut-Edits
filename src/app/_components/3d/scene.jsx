import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useWindow } from "@/app/hooks/useWindow";
import { useThree } from "@react-three/fiber";
import { Icon } from "./Icon";
import { Editing } from "./Editing";

const Model = () => {
  const meshRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rotationSpeed = 0.1;
  const rotationScaleFactor = .2

  const windowSize = useWindow();

  const TargetY = useRef(0)
  const Time = useRef(0)

  const { width,height } = useThree((v) => v.viewport);

  useEffect(() => {
    if (!meshRef.current) return;
    if (windowSize.width < 400 || innerWidth < 400) {
      // scale down the mesh to 0.6
      meshRef.current.scale.set(0.6, 0.6, 0.6);
    } else {
      // reset scale to normal (1)
      meshRef.current.scale.set(1, 1, 1);
    }
    if (windowSize.width > 500 || innerWidth > 500) {
      meshRef.current.position.x =  width / 2 * 0.55;
      meshRef.current.position.y =  0;
    } else {
      meshRef.current.position.x = 0;
      meshRef.current.position.y -= width / 2 * 0.66;

    }
  }, []);
  useEffect(() => {
    if (!meshRef.current) return;
    if (windowSize.width < 500 || innerWidth < 500) {
      // scale down the mesh to 0.6
      meshRef.current.scale.set(0.5, 0.5, 0.5);
    } else {
      // reset scale to normal (1)
      meshRef.current.scale.set(1, 1, 1);
    }
    if (windowSize.width > 500 || innerWidth > 500) {
      meshRef.current.position.x =  width / 2 * 0.55;
      TargetY.current = 0
    } else {
      meshRef.current.position.x = 0;
      TargetY.current = - height / 2 * .5
    }
  }, [windowSize, width, height]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      // Smooth vertical (Y) position movement
      if(windowSize.width > 500) {
        TargetY.current = y * -.3 ; // Adjust 0.5 to control movement range
      }
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    Time.current += delta
  if (meshRef.current) {
    // Smooth rotation
    meshRef.current.rotation.y += 
      (mousePos.x * rotationScaleFactor - meshRef.current.rotation.y) * rotationSpeed * delta * 20;
    meshRef.current.rotation.x +=
      (mousePos.y * rotationScaleFactor - meshRef.current.rotation.x) * rotationSpeed * delta * 20;

    meshRef.current.position.y += (TargetY.current - meshRef.current.position.y) * rotationSpeed * delta * 20;
  } 
  if(windowSize.width < 500) {
    mousePos.x = Math.sin(Time.current * .6) 
  }
});

  return (
    <group ref={meshRef}>
      <Editing />
    </group>
  );
};

const Scene = () => {
  return (
    <>
  {/* Pink Side of Gradient Key Light (left) */}
  <directionalLight
    position={[-6, 5, 5]}
    intensity={1.2}
    color="#ff6ec4" // Pink
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
  />

  {/* Blue Side of Gradient Key Light (left offset) */}
  <directionalLight
    position={[-4, 5, 5]}
    intensity={1.2}
    color="#7873f5" // Blue
  />

  {/* Fill Light (right) */}
  <directionalLight
    position={[5, 2, 2]}
    intensity={5}
    color="#ffffff"
  />

  {/* Back Light / Rim Light (from behind) */}
  <directionalLight
    position={[0, 5, -5]}
    intensity={1.5}
    color="#4f8fff"
  />

  {/* Ambient Light (soft, subtle) */}
  <ambientLight intensity={0.1} />

  {/* Pink Point Light (center) */}
  <pointLight
    position={[0, 2, 0]}
    intensity={5}
    color="#ff6ec4"
    distance={10}
    decay={2}
  />

  {/* Blue Point Light (center) */}
  <pointLight
    position={[0, 2, 0]}
    intensity={5}
    color="#7873f5"
    distance={10}
    decay={2}
  />

  {/* Your Model */}
  <Model />
</>


  );
};

export default Scene;

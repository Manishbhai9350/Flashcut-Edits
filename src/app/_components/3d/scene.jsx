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
    if (windowSize.width < 1000 || innerWidth < 1000) {
      // scale down the mesh to 0.6
      meshRef.current.scale.set(0.6, 0.6, 0.6);
    } else {
      // reset scale to normal (1)
      meshRef.current.scale.set(1, 1, 1);
    }
    if (windowSize.width > 1000 || innerWidth > 1000) {
      meshRef.current.position.x =  width / 2 * 0.55;
    } else {
      meshRef.current.position.x = 0;

    }
  }, []);
  useEffect(() => {
    if (!meshRef.current) return;
    if (windowSize.width < 1000 || innerWidth < 1000) {
      // scale down the mesh to 0.6
      meshRef.current.scale.set(0.5, 0.5, 0.5);
    } else {
      // reset scale to normal (1)
      meshRef.current.scale.set(1, 1, 1);
    }
    if (windowSize.width > 1000 || innerWidth > 1000) {
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
      if(windowSize.width > 1000) {
        // TargetY.current = y * -.3 ; // Adjust 0.5 to control movement range
      } else {
        TargetY.current = 0 ; // Adjust 0.5 to control movement range
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
  } 
  if(windowSize.width < 1000) {
    mousePos.x = Math.sin(Time.current * .6) + 2
  }
});

  return (
    <group ref={meshRef}>
      <Editing />
    </group>
  );
};

const Scene = () => {
  const ModelGroupRef = useRef(null)
  const windowSize = useWindow()
  const Viewport = useThree(v => v.viewport)
  useEffect(() => {
  if (windowSize.width === 0 || !ModelGroupRef.current) return;

  const Placer3DMirror = document.querySelector('.placer-mirror');
  const { left, top, width, height } = Placer3DMirror.getBoundingClientRect();

  // Decide x center based on screen width
  const centerX = windowSize.width < 1000
    ? left + width / 2                            // Full center
    : left - width / 8;                           // Left half center

  const centerY = windowSize.width < 1000
    ? top + height / 3                           // Full center
    : top + height / 4;

  // Convert to normalized device coordinates
  const normalizedX = (centerX / windowSize.width) * 2 - 1;
  const normalizedY = -(centerY / windowSize.height) * 2 + 1;

  // Convert to Three.js world coordinates
  const worldX = normalizedX * (Viewport.width / 2);
  const worldY = normalizedY * (Viewport.height / 2);

  ModelGroupRef.current.position.x = worldX;
  ModelGroupRef.current.position.y = worldY;

}, [windowSize]);

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
  <group ref={ModelGroupRef}>
  <Model />
  </group>
</>


  );
};

export default Scene;

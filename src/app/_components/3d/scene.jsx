import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useWindow } from "@/app/hooks/useWindow";
import { useThree } from "@react-three/fiber";
import { Icon } from "./Icon";

const RotatingModel = () => {
  const meshRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rotationSpeed = 0.1;
  const rotationScaleFactor = .2

  const windowSize = useWindow();

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
      meshRef.current.position.y -= height / 2 * 0.1;

    }
  }, [windowSize, width, height]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state,delta) => {
    if (meshRef.current) {
      // Smoothly update rotation to target mouse position
      meshRef.current.rotation.y += 
        (mousePos.x * rotationScaleFactor - meshRef.current.rotation.y) * rotationSpeed * delta * 20 ;
      meshRef.current.rotation.x +=
        (mousePos.y * rotationScaleFactor - meshRef.current.rotation.x) * rotationSpeed * delta * 20;
    }
  }, [mousePos]);

  return (
    <group ref={meshRef}>
      <Icon />
    </group>
  );
};

const Scene = () => {
  return (
    <>
      {/* Key Light (Main light) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill Light (Soft light from opposite side to reduce shadows) */}
      <directionalLight position={[-5, 2, 2]} intensity={0.6} color="#ffffff" />

      {/* Back Light / Rim Light (Highlights edges, placed behind the model) */}
      <directionalLight position={[0, 5, -5]} intensity={1} color="#ffffff" />

      {/* Ambient Light (optional, subtle overall light) */}
      <ambientLight intensity={0.15} />

      {/* The 3D Model placeholder */}
      <RotatingModel />

    </>
  );
};

export default Scene;

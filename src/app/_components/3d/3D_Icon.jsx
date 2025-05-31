import { Canvas } from '@react-three/fiber'
import Scene from './scene'

const ICON3D = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 5], fov: 50 }}
    >
        <Scene />
    </Canvas>
  )
}

export default ICON3D
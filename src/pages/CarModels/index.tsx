import './index.css'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

function CarModel() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, -5, 5], fov: 100}}>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  )
}

function Scene() {
  const gltf = useLoader(GLTFLoader, '/WorksHuracan.glb')
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 5, 5]} />
      <primitive object={gltf.scene} position={[0, 0, 0]} scale={[2,2,2]} />
    </>
  )
}

export default CarModel

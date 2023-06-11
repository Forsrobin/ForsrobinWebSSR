import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Ball = ({ image }: { image: string }) => {
  const [decal] = useTexture([image])

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 10, 20]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  )
}

function OrbsCanvas({ image }: { image: string }) {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball image={image} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default OrbsCanvas

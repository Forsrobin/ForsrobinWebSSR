import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF('./models/glass/scene.gltf', true)
  const { animations, scene } = computer
  const mixer = new THREE.AnimationMixer(scene)

  animations.forEach((clip) => {
    const action = mixer.clipAction(clip)
    action.play()
  })

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 7 : 10}
        position={isMobile ? [0, -2.7, 0] : [0, 1, 0]}
        rotation={isMobile ? [-0.01, 1, -0.1] : [-0.01, 1, -2.2]}
      />
    </mesh>
  )
}

const ComputersCanvas = ({ isMobile }: { isMobile: boolean }) => {
  const polarRotation = Math.PI / 2
  const cameraPosition = [20, 3, 5] as [number, number, number]

  return (
    <Canvas className='z-0' shadows dpr={[1, 2]} camera={{ position: cameraPosition, fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} maxPolarAngle={polarRotation} minPolarAngle={polarRotation} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas

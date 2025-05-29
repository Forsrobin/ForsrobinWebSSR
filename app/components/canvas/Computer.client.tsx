import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import CanvasLoader from '../Loader'
import { webglAvailable } from '@app/utils/cn'

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const { scene, animations } = useLoader(GLTFLoader, './models/glass/scene.gltf')
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
        object={scene}
        scale={isMobile ? 6 : 10}
        position={isMobile ? [-1, 0, 0] : [0, 1, 0]}
        rotation={isMobile ? [-0.01, 1, -0.1] : [-0.01, 1, -2.2]}
      />
    </mesh>
  )
}

const ComputersCanvas = ({ isMobile }: { isMobile: boolean }) => {
  const polarRotation = Math.PI / 2
  const [dpr, setDpr] = useState(1)
  const cameraPosition = isMobile ? ([10, 3, 5] as [number, number, number]) : ([20, 3, 5] as [number, number, number])
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    // Perform WebGL check on client side
    if (webglAvailable()) {
      setCanRender(true)
    }
  }, [])

  if (!canRender) {
    return null // Prevent rendering if WebGL is unavailable
  }

  return (
    <Canvas
      className='z-0'
      shadows
      dpr={dpr}
      camera={{ position: cameraPosition, fov: 25 }}
      performance={{ min: 0.5 }}
      gl={{ failIfMajorPerformanceCaveat: false }} // Relax strict performance check
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} maxPolarAngle={polarRotation} minPolarAngle={polarRotation} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas

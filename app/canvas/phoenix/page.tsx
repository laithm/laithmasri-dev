'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  useAnimations,
} from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import { Group, Material, Mesh } from 'three'

function PhoenixModel() {
  const ref = useRef<Group>(null)
  const { scene, animations } = useGLTF('/models/phoenix.glb')
  const { actions } = useAnimations(animations, ref)

  const [rotating, setRotating] = useState(false)
  const [targetRotation, setTargetRotation] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    // Make all materials double-sided
    scene.traverse((child) => {
      if ((child as Mesh).material) {
        const material = (child as Mesh).material as Material
        if ('side' in material) {
          material.side = 2
          material.needsUpdate = true
        }
      }
    })

    // Rotate to face forward
    ref.current.rotation.y = Math.PI

    // Play idle animation
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().play()
    }
  }, [scene, actions, animations])

  // Smooth spin on click
  useFrame(() => {
    if (!ref.current) return
    if (rotating) {
      ref.current.rotation.y += 0.05
      if (ref.current.rotation.y >= targetRotation) {
        ref.current.rotation.y = targetRotation
        setRotating(false)
      }
    }
  })

  const handleClick = () => {
    if (!ref.current) return
    setTargetRotation(ref.current.rotation.y + Math.PI / 2)
    setRotating(true)
  }

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.005}
      position={[0, -1, 0]}
      onClick={handleClick}
      className="cursor-pointer"
    />
  )
}

export default function PhoenixPage() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#000000"
          intensity={1.0}
          position={[0, 5, 0]}
        />
        <Suspense fallback={null}>
          <PhoenixModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={12}
        />
      </Canvas>
    </div>
  )
}


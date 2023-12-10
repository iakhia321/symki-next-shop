/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 scene.gltf 
Author: Red Render (https://sketchfab.com/redrender)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/native-bag-sample-ac44161e5558465b819f1be45eba70ac
Title: Native Bag Sample
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/osnova/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Handle} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Strap} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Handle} position={[0, 0.244, 0]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Handle} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
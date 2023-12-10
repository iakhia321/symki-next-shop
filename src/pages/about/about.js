import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial } from 'three';

import Model from "../../model/basket";

const About = () => (
  <Canvas camera={{ position: [0, 2, 5], zoom: 1 }} style={{ height: '500px', width: '100%', outline: '1px solid black' }}>
    <OrbitControls 
    minDistance={3}  // Минимальное расстояние для зума
    maxDistance={10} // Максимальное расстояние для зума
    />
    <hemisphereLight intensity={1.2} />

    <Suspense fallback={null}>
      <Model material={new MeshBasicMaterial({ color: 'red' })} />
    </Suspense>
  </Canvas>
);

export default About;
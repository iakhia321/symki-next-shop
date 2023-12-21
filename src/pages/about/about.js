import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial } from 'three';
import Model from "../../model/basket";
import './about.sass';

const About = () => (
  <div className=' flex-row'>
    <div className='wrapper'>
    <div className="flex flex-row">
      <Canvas camera={{ position: [10, 10, 10], zoom: 1 }} style={{ height: '500px', width: '500px', outline: '1px solid black' }}>
        <OrbitControls 
          minDistance={4}
          maxDistance={4}
          />
        <hemisphereLight intensity={1.2} />
        <Suspense fallback={null}>
          <Model material={new MeshBasicMaterial({ color: 'red' })} />
        </Suspense>
      </Canvas>
    </div>

    <div className="flex flex-row">
      <Canvas camera={{ position: [10, 10, 10], zoom: 1 }} style={{ height: '500px', width: '500px', outline: '1px solid black' }}>
        <OrbitControls 
          minDistance={4}
          maxDistance={4}
          />
        <hemisphereLight intensity={1.2} />
        <Suspense fallback={null}>
          <Model material={new MeshBasicMaterial({ color: 'red' })} />
        </Suspense>
      </Canvas>
    </div>

    <div className="flex flex-row">
      <Canvas camera={{ position: [10, 10, 10], zoom: 1 }} style={{ height: '500px', width: '500px', outline: '1px solid black' }}>
        <OrbitControls 
          minDistance={4}
          maxDistance={4}
          />
        <hemisphereLight intensity={1.2} />
        <Suspense fallback={null}>
          <Model material={new MeshBasicMaterial({ color: 'red' })} />
        </Suspense>
      </Canvas>
    </div>
  </div>

    <div>
      <h1>History may brand!</h1>
      <p>In 1946, Marcel Boussac, a successful entrepreneur, invited Dior to design for Philippe et Gaston, a Paris fashion house launched in 1925. Dior refused, wishing to make a fresh start under his own name rather than reviving an old brand. In 1946, with Boussac's backing, Dior founded his fashion house.</p>
    </div>
  </div>

  // const priceInputs = document.querySelectorAll
);

export default About;
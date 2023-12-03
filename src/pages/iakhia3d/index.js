'use client';
import React, { useEffect, useRef }  from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from './index.sass';
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { useMotionValue } from 'framer-motion';
import {motion} from 'framer-motion-3d';

export default function index() {
    return(
        <div className={styles.main}>
            <Canvas>
                <ScrollControls pages={5}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={2}/>
                <directionalLight position={[2, 1, 1]} />
                <Cube />
                </ScrollControls>
            </Canvas>
        </div>
    )
}

function Cube() {
    
    const mesh = useRef(null);

    const data = useScroll();

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = -2 + clientX / innerWidth
        const y = -2 +clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => window.removeEventListener("mousemove", manageMouseMove)
    }, [] )
    // useFrame((state, delta) =>{
    //     mesh.current.rotation.x += delta * 0.25;
    //     mesh.current.rotation.y += delta * 0.25;
    //     mesh.current.rotation.z += delta * 0.25;
    // })

    const texture_1 = useLoader(TextureLoader, "/assets/basket.jpg")
    const texture_2 = useLoader(TextureLoader, "/assets/basket1.avif")
    const texture_3 = useLoader(TextureLoader, "/assets/basket2.jpg")
    const texture_4 = useLoader(TextureLoader, "/assets/basket3.jpg")
    const texture_5 = useLoader(TextureLoader, "/assets/basket4.jpg")
    const texture_6 = useLoader(TextureLoader, "/assets/basket5.jpg")

    return(
        <motion.mesh ref={mesh} rotation-y ={mouse.x} rotation-x ={mouse.y}>
            <boxGeometry args={[4,4,4]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
    )
}
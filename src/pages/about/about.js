import './about.sass'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial } from 'three';
import Model from "../../model/basket";

const About = () => (
  <div></div>
);

export default function About() {
    return ( <div class="card">
    <div class="img"></div>
    <div class="content">
        <h3>Science</h3>
        <p>The science of today is the technology of tomorrow – Edward Teller.The science of today is the technology of tomorrow – Edward Teller.The science of today is the technology of tomorrow – Edward Teller.The science of today is the technology of tomorrow – Edward Teller</p>
        <a href="#">
            <button>Explore</button>
        </a>
    </div>
</div>
    )
}

 

export default About;
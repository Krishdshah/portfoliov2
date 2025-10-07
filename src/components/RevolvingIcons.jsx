// src/components/RevolvingIcons.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useWindowSize } from '../hooks/useWindowSize'; // Import the new hook
import './RevolvingIcons.css';

function Icon({ children, position }) {
  return (
    <Html position={position} center>
      <div className="revolving-icon-item">{children}</div>
    </Html>
  );
}

function Scene() {
  const groupRef = useRef();
  const [width] = useWindowSize(); // Get the current window width

  // Determine radius based on screen width
  const radius = width < 768 ? 1.0 : 1.8; // Smaller radius for mobile

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  const icons = [
    { component: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub size={35} /></a>, angle: 0 },
    { component: <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>, angle: Math.PI * (2 / 3) },
    { component: <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer"><FaTwitter size={35} /></a>, angle: Math.PI * (4 / 3) },
  ];

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      {icons.map((icon, index) => (
        <Icon
          key={index}
          position={[
            Math.cos(icon.angle) * radius,
            0,
            Math.sin(icon.angle) * radius
          ]}
        >
          {icon.component}
        </Icon>
      ))}
    </group>
  );
}

function RevolvingIcons() {
  return (
    <div className="revolving-icons-canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={1.5} />
        <Scene />
      </Canvas>
    </div>
  );
}

export default RevolvingIcons;
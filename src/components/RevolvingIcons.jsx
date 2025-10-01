// src/components/RevolvingIcons.jsx
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './RevolvingIcons.css';

function Icon({ children, position }) {
  // ... (This component does not need to be changed)
  return (
    <Html position={position} center>
      <div className="revolving-icon-item">
        {children}
      </div>
    </Html>
  );
}

// Pass the isHovered state down as a prop
function Scene({ isHovered }) {
  const groupRef = useRef();

  // The useFrame hook now gets the 'delta' time since the last frame
  useFrame((state, delta) => {
    // Only update the rotation if isHovered is false
    if (!isHovered && groupRef.current) {
      // smooth pause and resume
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const radius = 1.4;
  const icons = [
    { component: <a href="https://github.com/Krishdshah" target="_blank" rel="noopener noreferrer"><FaGithub size={35} /></a>, angle: 0 },
    { component: <a href="https://linkedin.com/in/thekrishdshah" target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>, angle: Math.PI * (2 / 3) },
    { component: <a href="https://twitter.com/ikrishshah" target="_blank" rel="noopener noreferrer"><FaTwitter size={35} /></a>, angle: Math.PI * (4 / 3) },
  ];

  return (
    <group ref={groupRef} rotation={[0.5, 0.1, 0]}>
      {icons.map((icon, index) => (
        <Icon
          key={index}
          position={[Math.cos(icon.angle) * radius, 0, Math.sin(icon.angle) * radius]}
        >
          {icon.component}
        </Icon>
      ))}
    </group>
  );
}

function RevolvingIcons() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="revolving-icons-canvas-wrapper">
      <Canvas
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1.5} />
        <Scene isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

export default RevolvingIcons;
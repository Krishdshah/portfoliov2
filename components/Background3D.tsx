'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate 3D Particles
    const particleCount = 80;
    const particles: Particle[] = [];
    const spaceRange = 400; // boundary for particles

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * spaceRange * 2,
        y: (Math.random() - 0.5) * spaceRange * 2,
        z: (Math.random() - 0.5) * spaceRange * 2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
      });
    }

    // Mouse coordinates (normalized -1 to 1)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
      targetRotY = mouseX * 0.5; // Yaw rotation
      targetRotX = mouseY * 0.5; // Pitch rotation
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const focalLength = 400; // perspective projection factor
    const connectionDist = 180; // max distance to draw line

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Inertial smoothing for rotation angles (creates a luxurious lag feel)
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      // Projected coordinates storage for drawing lines
      const projected: { sx: number; sy: number; sz: number; depth: number }[] = [];

      // Update and rotate particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // 1. Apply constant drift movement
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounce back if they exceed range boundaries
        if (Math.abs(p.x) > spaceRange) p.vx *= -1;
        if (Math.abs(p.y) > spaceRange) p.vy *= -1;
        if (Math.abs(p.z) > spaceRange) p.vz *= -1;

        // 2. Rotate around X-axis (pitch)
        let y1 = p.y * cosX - p.z * sinX;
        let z1 = p.y * sinX + p.z * cosX;

        // 3. Rotate around Y-axis (yaw)
        let x2 = p.x * cosY + z1 * sinY;
        let z2 = -p.x * sinY + z1 * cosY;

        // 4. Perspective Projection
        // Offset z2 so everything is in front of camera (positive depth)
        const depth = z2 + 600; 
        const scale = focalLength / depth;
        const screenX = x2 * scale + width / 2;
        const screenY = y1 * scale + height / 2;

        projected.push({ sx: screenX, sy: screenY, sz: scale, depth });

        // Draw particle node
        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          const size = Math.max(0.5, scale * 1.8);
          // Color based on depth: closer is blue, farther is deep purple
          const opacity = Math.min(0.6, scale * 0.7);
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`; // sky blue
          ctx.fill();
        }
      }

      // Draw connection lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Compute 3D distance between nodes
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDist) {
            const proj1 = projected[i];
            const proj2 = projected[j];

            // Map opacity to 3D distance
            const factor = (connectionDist - dist) / connectionDist;
            const opacity = factor * factor * 0.15; // subtle lines

            ctx.beginPath();
            ctx.moveTo(proj1.sx, proj1.sy);
            ctx.lineTo(proj2.sx, proj2.sy);
            
            // Draw gradient line matching background bloom
            const grad = ctx.createLinearGradient(proj1.sx, proj1.sy, proj2.sx, proj2.sy);
            grad.addColorStop(0, `rgba(96, 165, 250, ${opacity * (proj1.sz * 0.8)})`); // blue
            grad.addColorStop(1, `rgba(168, 85, 247, ${opacity * (proj2.sz * 0.8)})`); // purple
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(0.2, (proj1.sz + proj2.sz) * 0.3);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-40 w-full h-full pointer-events-none opacity-60 bg-transparent"
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Codecon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015);

    // --- 2. Camera Setup ---
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    // --- 3. Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    
    // Add canvas to container
    container.appendChild(renderer.domElement);

    // Hide loader once canvas is appended
    setLoading(false);

    // --- 4. Main Group & Interactivity Variables ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Array to hold floating items and their parameters
    interface FloatingItem {
      mesh: THREE.Object3D;
      speed: number;
      amp: number;
      offset: number;
      initialY: number;
      rotSpeed: number;
    }
    const floatingItems: FloatingItem[] = [];

    const registerFloating = (mesh: THREE.Object3D, speedScale = 1.0) => {
      floatingItems.push({
        mesh,
        speed: (0.4 + Math.random() * 0.4) * speedScale,
        amp: 0.04 + Math.random() * 0.04,
        offset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y,
        rotSpeed: (0.1 + Math.random() * 0.1) * speedScale
      });
    };

    // --- 5. Materials Factory ---
    const createPhysicalMaterial = (
      colorVal: string, 
      roughness = 0.15, 
      metalness = 0.15, 
      transmission = 0.0
    ) => {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colorVal),
        roughness: roughness,
        metalness: metalness,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        transmission: transmission,
        thickness: transmission > 0 ? 0.6 : 0.0,
        ior: 1.45,
        side: THREE.DoubleSide
      });
    };

    // --- 6. Creating Geometries & Meshes ---

    // 6a. Extrude Settings for Chevrons/Wedges
    const extrudeSettings = {
      steps: 1,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.04,
      bevelOffset: 0,
      bevelSegments: 5
    };

    // 6b. Left Chevron `<` (Orange/Coral)
    const shapeLeft = new THREE.Shape();
    shapeLeft.moveTo(0.7, 1.1);
    shapeLeft.lineTo(-0.35, 0.0);
    shapeLeft.lineTo(0.7, -1.1);
    shapeLeft.lineTo(1.15, -0.75);
    shapeLeft.lineTo(0.3, 0.0);
    shapeLeft.lineTo(1.15, 0.75);
    shapeLeft.closePath();

    const leftGeom = new THREE.ExtrudeGeometry(shapeLeft, extrudeSettings);
    leftGeom.center();
    const leftChevron = new THREE.Mesh(leftGeom, createPhysicalMaterial("#f05e4b", 0.12, 0.1));
    leftChevron.position.set(-1.15, 0.0, 0.1);
    leftChevron.castShadow = true;
    leftChevron.receiveShadow = true;
    mainGroup.add(leftChevron);
    registerFloating(leftChevron, 0.8);

    // 6c. Right Chevron `>` (Blue)
    const rightGeom = leftGeom.clone();
    const rightChevron = new THREE.Mesh(rightGeom, createPhysicalMaterial("#4ba3e3", 0.12, 0.1));
    rightChevron.rotation.y = Math.PI; // Flip around Y axis
    rightChevron.position.set(1.15, 0.0, 0.1);
    rightChevron.castShadow = true;
    rightChevron.receiveShadow = true;
    mainGroup.add(rightChevron);
    registerFloating(rightChevron, 0.8);

    // 6d. Central Pill `|` (Teal - Slightly Glassy)
    const tealPillGeom = new THREE.CapsuleGeometry(0.18, 1.8, 8, 24);
    const tealPill = new THREE.Mesh(tealPillGeom, createPhysicalMaterial("#3fb0ac", 0.12, 0.2, 0.3));
    tealPill.position.set(-0.02, -0.05, 0.1);
    tealPill.rotation.z = -0.08; // Stylized tilt
    tealPill.castShadow = true;
    tealPill.receiveShadow = true;
    mainGroup.add(tealPill);
    registerFloating(tealPill, 0.7);

    // 6e. Right Curly Brace `{` (Cool Grey)
    const curlyPoints = [
      new THREE.Vector3(1.2, 1.4, 0),
      new THREE.Vector3(1.0, 1.2, 0),
      new THREE.Vector3(0.85, 0.6, 0),
      new THREE.Vector3(0.65, 0.15, 0),
      new THREE.Vector3(0.5, 0.0, 0), // center point
      new THREE.Vector3(0.65, -0.15, 0),
      new THREE.Vector3(0.85, -0.6, 0),
      new THREE.Vector3(1.0, -1.2, 0),
      new THREE.Vector3(1.2, -1.4, 0)
    ];
    const curlyCurve = new THREE.CatmullRomCurve3(curlyPoints);
    const curlyGeom = new THREE.TubeGeometry(curlyCurve, 64, 0.11, 16, false);
    const curlyBrace = new THREE.Mesh(curlyGeom, createPhysicalMaterial("#cfd8dc", 0.16, 0.35));
    curlyBrace.position.set(1.4, 0.05, -0.1);
    curlyBrace.castShadow = true;
    curlyBrace.receiveShadow = true;
    mainGroup.add(curlyBrace);
    registerFloating(curlyBrace, 0.9);

    // 6f. Barbells (Spheres connected by cylinder)
    const createBarbell = (colorStr: string, length: number, radius: number, px: number, py: number, pz: number, rz: number) => {
      const bGroup = new THREE.Group();
      
      const sphereG = new THREE.SphereGeometry(radius, 24, 24);
      const cylG = new THREE.CylinderGeometry(radius * 0.6, radius * 0.6, length, 16);
      const mat = createPhysicalMaterial(colorStr, 0.15, 0.1);
      
      const s1 = new THREE.Mesh(sphereG, mat);
      s1.position.y = length / 2;
      s1.castShadow = true;
      s1.receiveShadow = true;

      const s2 = new THREE.Mesh(sphereG, mat);
      s2.position.y = -length / 2;
      s2.castShadow = true;
      s2.receiveShadow = true;

      const cyl = new THREE.Mesh(cylG, mat);
      cyl.castShadow = true;
      cyl.receiveShadow = true;

      bGroup.add(s1, s2, cyl);
      bGroup.position.set(px, py, pz);
      bGroup.rotation.z = rz;
      
      mainGroup.add(bGroup);
      registerFloating(bGroup, 0.7);
      return bGroup;
    };

    // Instantiate Barbells
    createBarbell("#f48fb1", 0.75, 0.18, -1.9, 0.95, -0.2, 0.45);   // Pink Left-Top
    createBarbell("#ff7043", 0.65, 0.18, -2.1, -0.2, -0.1, -0.3);   // Orange Left-Middle
    createBarbell("#ab47bc", 0.85, 0.16, 0.8, 1.15, -0.15, 1.35);   // Purple Top-Right (Horizontal-ish)
    createBarbell("#f48fb1", 0.75, 0.16, 1.6, -0.65, -0.1, -0.65);  // Pink Right-Middle
    createBarbell("#26a69a", 0.75, 0.16, 0.7, -1.25, -0.15, 1.25);  // Green Bottom-Right (Horizontal-ish)

    // 6g. Triangles/Wedges
    const createWedge = (colorStr: string, w: number, h: number, px: number, py: number, pz: number, rz: number) => {
      const triShape = new THREE.Shape();
      triShape.moveTo(0, h / 2);
      triShape.lineTo(w / 2, -h / 2);
      triShape.lineTo(-w / 2, -h / 2);
      triShape.closePath();

      const geom = new THREE.ExtrudeGeometry(triShape, extrudeSettings);
      geom.center();
      const mesh = new THREE.Mesh(geom, createPhysicalMaterial(colorStr, 0.15, 0.1));
      mesh.position.set(px, py, pz);
      mesh.rotation.z = rz;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mainGroup.add(mesh);
      registerFloating(mesh, 0.8);
      return mesh;
    };

    createWedge("#ff9800", 0.45, 0.85, -0.38, 1.05, -0.1, 0.22); // Orange Wedge Top-Middle
    createWedge("#b0bec5", 0.5, 0.85, -1.15, -1.05, -0.2, -1.1); // Grey Wedge Bottom-Left

    // 6h. Floating Spheres (Dots)
    const addSphere = (colorStr: string, radius: number, px: number, py: number, pz: number) => {
      const geom = new THREE.SphereGeometry(radius, 32, 32);
      const mesh = new THREE.Mesh(geom, createPhysicalMaterial(colorStr, 0.12, 0.15));
      mesh.position.set(px, py, pz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mainGroup.add(mesh);
      registerFloating(mesh, 0.9);
      return mesh;
    };

    addSphere("#fbbd08", 0.22, 0.0, 0.45, 0.22);     // Yellow sphere (above central pill)
    addSphere("#ff5722", 0.14, -0.1, 1.3, 0.0);      // Orange sphere (next to orange wedge)
    addSphere("#80cbc4", 0.18, -0.75, -1.1, -0.05);  // Light green sphere (next to grey wedge)
    addSphere("#d7ccc8", 0.14, -1.9, -1.15, -0.25);  // Light-brown sphere (bottom-left-most)
    addSphere("#f48fb1", 0.11, -0.22, -1.25, -0.1);  // Small pink sphere (bottom-middle)
    addSphere("#7e57c2", 0.12, 0.2, -1.05, -0.1);    // Small purple sphere (bottom-middle-right)
    addSphere("#2196f3", 0.2, 1.25, -1.2, -0.1);     // Blue sphere (bottom-right-most)
    addSphere("#ff7043", 0.12, 1.25, 0.72, 0.05);    // Small orange sphere (top-right of purple barbell)
    addSphere("#ab47bc", 0.12, 1.75, 1.15, -0.15);   // Small purple sphere (next to curly brace)

    // --- 7. Lighting System ---
    const ambientLight = new THREE.AmbientLight(0x0f172a, 0.85); // Zinc dark fill
    scene.add(ambientLight);

    // High quality soft shadows directional key light
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 7, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -4;
    dirLight.shadow.camera.right = 4;
    dirLight.shadow.camera.top = 4;
    dirLight.shadow.camera.bottom = -4;
    dirLight.shadow.bias = -0.0003;
    scene.add(dirLight);

    // Warm Orange Point Light (Left side rim/diffuse glow)
    const pointLightLeft = new THREE.PointLight(0xff5722, 5.0, 12, 1.5);
    pointLightLeft.position.set(-4, 2.5, 3);
    scene.add(pointLightLeft);

    // Cool Cyan/Blue Point Light (Right side rim/diffuse glow)
    const pointLightRight = new THREE.PointLight(0x00d2ff, 5.0, 12, 1.5);
    pointLightRight.position.set(4, -2.5, 3);
    scene.add(pointLightRight);

    // Soft Purple/Magenta Fill Light (Back side glow)
    const pointLightBack = new THREE.PointLight(0xab47bc, 3.5, 15, 1.2);
    pointLightBack.position.set(0, 0, -3.5);
    scene.add(pointLightBack);

    // --- 8. Background Diagonal Points Grid ---
    const dotsCount = 450;
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsPositions = new Float32Array(dotsCount * 3);

    const gridSpacing = 0.38;
    const gridCols = 22;
    const gridRows = 22;
    let idx = 0;

    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const rx = (c - gridCols / 2) * gridSpacing;
        const ry = (r - gridRows / 2) * gridSpacing;
        
        // 45 degrees rotation for diagonal layout
        const angle = Math.PI / 4;
        const x = rx * Math.cos(angle) - ry * Math.sin(angle);
        const y = rx * Math.sin(angle) + ry * Math.cos(angle);
        const z = -4.2 + (Math.random() * 0.1 - 0.05);

        if (idx < dotsCount) {
          dotsPositions[idx * 3] = x;
          dotsPositions[idx * 3 + 1] = y;
          dotsPositions[idx * 3 + 2] = z;
          idx++;
        }
      }
    }

    dotsGeometry.setAttribute("position", new THREE.BufferAttribute(dotsPositions, 3));

    // Dynamic Dot Texture Canvas to avoid local asset files loading lag
    const createDotTexture = () => {
      const size = 16;
      const tCanvas = document.createElement("canvas");
      tCanvas.width = size;
      tCanvas.height = size;
      const ctx = tCanvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      return new THREE.CanvasTexture(tCanvas);
    };

    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x3f3f46, // Cool zinc-700 color
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      map: createDotTexture(),
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const dotsMesh = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dotsMesh);

    // --- 9. Animation Loop & Mouse Tilt ---
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Independent floating physics for items
      floatingItems.forEach((item) => {
        item.mesh.position.y =
          item.initialY + Math.sin(elapsedTime * item.speed + item.offset) * item.amp;
        
        item.mesh.rotation.x += Math.cos(elapsedTime * item.rotSpeed) * 0.0005;
        item.mesh.rotation.y += Math.sin(elapsedTime * item.rotSpeed) * 0.0005;
      });

      // Lerp mouse coordinates for organic lag-tilting
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Group Tilting
      mainGroup.rotation.y = mouse.x * 0.32;
      mainGroup.rotation.x = -mouse.y * 0.32;

      // Background dot grid slow rotate
      dotsMesh.rotation.z = elapsedTime * 0.003;

      // Render
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // --- 10. Resizing Observer ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // --- 11. Memory Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      // Dispose Geometries, Materials, and Textures recursively
      scene.traverse((object: any) => {
        if (!object.isMesh && !object.isPoints) return;

        if (object.geometry) object.geometry.dispose();

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat: any) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      dotsMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-zinc-600 border-t-zinc-200 rounded-full animate-spin"></div>
            <span className="text-sm font-medium text-zinc-400 font-mono tracking-wider animate-pulse">
              INITIALIZING 3D ENGINE...
            </span>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}

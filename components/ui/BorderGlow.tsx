"use client";

import { useRef, useCallback, useState, useEffect, type ReactNode } from "react";

interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  borderRadius?: number;
  backgroundColor?: string;
}

export default function BorderGlow({
  children,
  className = "",
  borderRadius = 16,
  backgroundColor = "var(--card)",
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  // Detect theme dynamically
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Spotlight gradients matching light/dark mode branding
  const borderBackground = isDark
    ? `radial-gradient(circle 160px at ${coords.x}px ${coords.y}px, #F97316 0%, #E11D48 50%, #10B981 100%)`
    : `radial-gradient(circle 140px at ${coords.x}px ${coords.y}px, #A83E2D 0%, #C2410C 50%, #7CB342 100%)`;

  const glowBackground = isDark
    ? `radial-gradient(circle 240px at ${coords.x}px ${coords.y}px, rgba(249, 115, 22, 0.18) 0%, rgba(225, 29, 72, 0.08) 50%, transparent 100%)`
    : `radial-gradient(circle 200px at ${coords.x}px ${coords.y}px, rgba(168, 62, 45, 0.15) 0%, rgba(194, 65, 12, 0.08) 50%, transparent 100%)`;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`relative grid isolate border border-border-custom/30 ${className}`}
      style={{
        background: backgroundColor,
        borderRadius: `${borderRadius}px`,
        transform: "translate3d(0, 0, 0.01px)",
      }}
    >
      {/* 1px Spotlight Border (using mask-composite exclude to only render on the border edge) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] -z-[1]"
        style={{
          padding: "1px",
          background: borderBackground,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Behind-the-card Ambient Glow Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] -z-[2] blur-2xl"
        style={{
          background: glowBackground,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      <div className="flex flex-col relative overflow-hidden z-[1] rounded-[inherit] h-full">
        {children}
      </div>
    </div>
  );
}

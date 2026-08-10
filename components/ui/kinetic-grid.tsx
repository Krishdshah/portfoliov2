"use client";

import {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";

/* ─── config ─── */
const DOT_SPACING = 28;
const DOT_BASE_RADIUS = 1.2;
const WARP_RADIUS = 140;
const WARP_STRENGTH = 18;
const RIPPLE_SPEED = 6;
const RIPPLE_STRENGTH = 12;
const RIPPLE_WIDTH = 60;
const DAMPING = 0.08;

/* ─── types ─── */
interface Dot {
  bx: number; // base x
  by: number; // base y
  x: number;  // current x
  y: number;  // current y
}

interface Ripple {
  cx: number;
  cy: number;
  radius: number;
  strength: number;
}

/* ─── helpers ─── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function isDarkMode() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

/* ─── component ─── */
export default function KineticGrid({ children }: { children?: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  /* ── build / rebuild the dot grid ── */
  const buildGrid = useCallback(() => {
    const { w, h } = sizeRef.current;
    const cols = Math.ceil(w / DOT_SPACING) + 2;
    const rows = Math.ceil(h / DOT_SPACING) + 2;
    const offsetX = ((w - (cols - 1) * DOT_SPACING) / 2);
    const offsetY = ((h - (rows - 1) * DOT_SPACING) / 2);
    const dots: Dot[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const bx = offsetX + c * DOT_SPACING;
        const by = offsetY + r * DOT_SPACING;
        dots.push({ bx, by, x: bx, y: by });
      }
    }
    dotsRef.current = dots;
  }, []);

  /* ── resize handler ── */
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    sizeRef.current = { w, h };
    buildGrid();
  }, [buildGrid]);

  /* ── animation loop ── */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const { w, h } = sizeRef.current;
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    const mouse = mouseRef.current;
    const dots = dotsRef.current;
    const ripples = ripplesRef.current;
    const dark = isDarkMode();

    // advance ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      ripples[i].radius += RIPPLE_SPEED;
      ripples[i].strength *= 0.985;
      if (ripples[i].strength < 0.05) ripples.splice(i, 1);
    }

    // update & draw dots
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      let tx = d.bx;
      let ty = d.by;

      // cursor warp
      const dxM = d.bx - mouse.x;
      const dyM = d.by - mouse.y;
      const distM = Math.sqrt(dxM * dxM + dyM * dyM);
      if (distM < WARP_RADIUS && distM > 0) {
        const force = (1 - distM / WARP_RADIUS) * WARP_STRENGTH;
        tx += (dxM / distM) * force;
        ty += (dyM / distM) * force;
      }

      // ripple displacement
      for (let j = 0; j < ripples.length; j++) {
        const rp = ripples[j];
        const dxR = d.bx - rp.cx;
        const dyR = d.by - rp.cy;
        const distR = Math.sqrt(dxR * dxR + dyR * dyR);
        const ringDist = Math.abs(distR - rp.radius);
        if (ringDist < RIPPLE_WIDTH && distR > 0) {
          const influence = (1 - ringDist / RIPPLE_WIDTH) * rp.strength;
          tx += (dxR / distR) * influence;
          ty += (dyR / distR) * influence;
        }
      }

      // lerp toward target
      d.x = lerp(d.x, tx, DAMPING);
      d.y = lerp(d.y, ty, DAMPING);

      // proximity-based radius & opacity
      const proximity = Math.min(distM / WARP_RADIUS, 1);
      const radius = DOT_BASE_RADIUS + (1 - proximity) * 1.4;
      const alpha = dark
        ? 0.18 + (1 - proximity) * 0.45
        : 0.12 + (1 - proximity) * 0.35;

      ctx.beginPath();
      ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = dark
        ? `rgba(255,255,255,${alpha})`
        : `rgba(80,70,60,${alpha})`;
      ctx.fill();
    }

    ctx.restore();
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  /* ── mouse tracking ── */
  const handleMouseMove = useCallback((e: ReactMouseEvent | globalThis.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  /* ── click → new ripple ── */
  const handleClick = useCallback((e: ReactMouseEvent | globalThis.MouseEvent) => {
    ripplesRef.current.push({
      cx: e.clientX,
      cy: e.clientY,
      radius: 0,
      strength: RIPPLE_STRENGTH,
    });
  }, []);

  /* ── lifecycle ── */
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize, animate]);

  return (
    <div
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* fixed canvas behind everything */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* page content above */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

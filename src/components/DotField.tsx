import { useEffect, useRef } from "react";

/**
 * Pointer-reactive dot grid on a subtle blueprint lattice.
 * Dots near the pointer brighten and drift slightly toward it —
 * an engineering / manufacturing motif drawn entirely in code.
 * Palette is locked to the page scheme: ink dots on cream.
 */
export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 44;

    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (x: number, y: number) => {
      pointer.tx = x;
      pointer.ty = y;
      pointer.active = true;
    };

    const onPointerMove = (e: PointerEvent) => onMove(e.clientX, e.clientY);
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const RADIUS = 190;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Ease pointer toward target for a fluid feel
      if (pointer.active) {
        if (pointer.x < -999) {
          pointer.x = pointer.tx;
          pointer.y = pointer.ty;
        }
        pointer.x += (pointer.tx - pointer.x) * 0.12;
        pointer.y += (pointer.ty - pointer.y) * 0.12;
      }

      // Blueprint lattice — faint hairlines every 4th gap
      ctx.strokeStyle = "rgba(25, 25, 25, 0.035)";
      ctx.lineWidth = 1;
      const major = GAP * 4;
      ctx.beginPath();
      for (let x = major / 2; x < width; x += major) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = major / 2; y < height; y += major) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Dot grid
      for (let gx = GAP / 2; gx < width + GAP; gx += GAP) {
        for (let gy = GAP / 2; gy < height + GAP; gy += GAP) {
          let dx = 0;
          let dy = 0;
          let t = 0; // 0..1 proximity to pointer

          if (pointer.active) {
            const ddx = pointer.x - gx;
            const ddy = pointer.y - gy;
            const dist = Math.hypot(ddx, ddy);
            if (dist < RADIUS) {
              t = 1 - dist / RADIUS;
              const pull = t * t * 10;
              const inv = dist > 0.001 ? 1 / dist : 0;
              dx = ddx * inv * pull;
              dy = ddy * inv * pull;
            }
          }

          const alpha = 0.14 + t * 0.55;
          const r = 1.1 + t * 1.6;
          ctx.beginPath();
          ctx.arc(gx + dx, gy + dy, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(25, 25, 25, ${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduced) {
      // Single static frame for reduced-motion users
      pointer.active = false;
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

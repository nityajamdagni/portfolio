import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// A starfield that occasionally links nearby points, like a sparse neural net.
export default function ParticleField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let points = [];
    let raf;
    let mouse = { x: -9999, y: -9999 };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 768 ? 9000 : 6500;
      const count = Math.floor((width * height) / density);
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.3 + 0.4,
        tw: Math.random() * Math.PI * 2,
        big: Math.random() < 0.06,
      }));
    }

    function colors() {
      const isLight = document.documentElement.classList.contains("light");
      return {
        dot: isLight ? "99, 102, 241" : "148, 180, 255",
        line: isLight ? "99, 102, 241" : "125, 211, 252",
        pulse: isLight ? "168, 85, 247" : "168, 85, 247",
      };
    }

    function step(t) {
      const { dot, line } = colors();
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < 120) {
          p.x += dxm * 0.0009 * (120 - distMouse);
          p.y += dym * 0.0009 * (120 - distMouse);
        }
      }

      // connections — sparse, only between nearby points ("neural" links)
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        let links = 0;
        for (let j = i + 1; j < points.length && links < 3; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            links++;
            const alpha = (1 - dist / 95) * 0.16;
            ctx.strokeStyle = `rgba(${line}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        const twinkle = prefersReducedMotion
          ? 0.7
          : 0.55 + Math.sin(t / 900 + p.tw) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${dot}, ${Math.max(0.15, twinkle)})`;
        ctx.arc(p.x, p.y, p.big ? p.r * 1.8 : p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.big && !prefersReducedMotion) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${dot}, ${twinkle * 0.15})`;
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(step);
      }
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    step(0);
    if (prefersReducedMotion) step(0);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

"use client";
// Three.js hero atmosphere: golden hillside pollen drifting over
// the hero photo, with gentle mouse parallax. Lightweight points scene —
// no models or textures — capped DPR, cleaned up on unmount, and rendered
// as a single still frame for prefers-reduced-motion.
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";

    // Two particle layers: warm gold fireflies + soft white dust.
    const makeLayer = (count: number, color: number, size: number, spread: [number, number, number]) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const phase = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread[0];
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
        phase[i] = Math.random() * Math.PI * 2;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color, size, transparent: true, opacity: 0.85,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
      });
      const points = new THREE.Points(geo, mat);
      points.userData = { phase, base: pos.slice() };
      scene.add(points);
      return points;
    };
    const fireflies = makeLayer(90, 0xffc873, 0.14, [16, 8, 3]);
    const dust = makeLayer(140, 0xffffff, 0.05, [18, 9, 2]);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const resize = () => {
      const w = mount.clientWidth || 1, h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      for (const layer of [fireflies, dust]) {
        const attr = layer.geometry.getAttribute("position") as THREE.BufferAttribute;
        const { phase, base } = layer.userData as { phase: Float32Array; base: Float32Array };
        for (let i = 0; i < phase.length; i++) {
          attr.array[i * 3] = base[i * 3] + Math.sin(t * 0.35 + phase[i]) * 0.35;
          attr.array[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * 0.28 + phase[i] * 1.7) * 0.3;
        }
        attr.needsUpdate = true;
        layer.material.opacity = layer === fireflies ? 0.65 + Math.sin(t * 1.4) * 0.25 : 0.5;
      }
      camera.position.x += (mx * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-my * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    if (reduced) renderer.render(scene, camera);
    else raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouse);
      scene.traverse((o) => {
        if (o instanceof THREE.Points) { o.geometry.dispose(); (o.material as THREE.Material).dispose(); }
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="pointer-events-none absolute inset-0 z-[5]" />;
}

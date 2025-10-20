// components/About/ParticleBackground.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function AboutParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Transparent for overlay use
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false }, // Disabled click interactions
          onHover: { enable: false }, // Disabled hover interactions
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 180,
          enable: false, // Links disabled - no connecting lines
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 1.5, // Slightly slower than hero for subtle effect
        },
        number: {
          density: { enable: true, area: 1000 }, // Less dense than hero
          value: 50, // Fewer particles than hero section
        },
        opacity: { value: 0.3 }, // More subtle opacity
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }, // Slightly smaller particles
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="about-particles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
    />
  );
}

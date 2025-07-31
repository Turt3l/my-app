// AuroraBackground.jsx
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

const makeBlob = (i) => {
  const size = rand(55, 85); // vmin
  const startX = rand(-10, 80); // vw
  const startY = rand(-10, 80); // vh
  const hue = Math.floor(rand(300, 360)); // pink/purple range
  const sat = Math.floor(rand(60, 85));
  const light = Math.floor(rand(45, 65));
  const alpha = rand(0.35, 0.55);
  const rotate = rand(-15, 15);
  return {
    id: i,
    size: `${size}vmin`,
    startX: `${startX}vw`,
    startY: `${startY}vh`,
    color: `hsla(${hue} ${sat}% ${light}% / ${alpha})`,
    rotate,
    scale: rand(0.9, 1.25),
    driftX: rand(-20, 20),
    driftY: rand(-20, 20),
    duration: rand(18, 30),
    delay: rand(0, 6),
  };
};

export default function AuroraBackground({ count = 5 }) {
  const reduce = useReducedMotion();
  const blobs = useMemo(
    () => Array.from({ length: count }, (_, i) => makeBlob(i)),
    [count]
  );

  return (
    <div className="aurora-root" aria-hidden>
      <div className="aurora-base" />
      {blobs.map((b) => (
        <motion.div
          key={b.id}
          className="aurora-blob"
          style={{
            width: b.size,
            height: b.size,
            left: b.startX,
            top: b.startY,
            background: `radial-gradient(circle at 30% 30%, ${b.color}, transparent 65%)`,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: b.rotate,
            scale: b.scale,
            opacity: 0.85,
          }}
          animate={
            reduce
              ? { opacity: 0.6 }
              : {
                  x: [0, `${b.driftX}vw`, 0],
                  y: [0, `${b.driftY}vh`, 0],
                  rotate: [b.rotate, -b.rotate, b.rotate],
                  scale: [b.scale, b.scale * 1.08, b.scale],
                  opacity: [0.75, 0.9, 0.75],
                }
          }
          transition={
            reduce
              ? { duration: 1 }
              : {
                  duration: b.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: b.delay,
                }
          }
        />
      ))}
      <div className="aurora-stars" />
      <div className="aurora-vignette" />
    </div>
  );
}

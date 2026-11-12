"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import step1 from "@/public/illustrations/steps_section/Group.svg";
import step1dark from "@/public/illustrations/steps_section/Group-dark.svg";
import step2 from "@/public/illustrations/steps_section/scan_qr 1.svg";
import step2dark from "@/public/illustrations/steps_section/scan_qr 1-dark.svg";
import step3 from "@/public/illustrations/steps_section/reward 1.svg";
import step3dark from "@/public/illustrations/steps_section/reward 1-dark.svg";

const CIRCLES = [300, 450, 600, 750];

// Resting position of the circle cluster, as a fraction of the card box.
const REST = { x: 0.82, y: 0.6 };
// 1 = the head ring sits exactly under the pointer. Lower = gentler drift.
const FOLLOW_STRENGTH = 0.7;
// Softer spring = more lag PER LINK = a longer, looser trail.
const SPRING = { stiffness: 150, damping: 18, mass: 0.8 };

const steps = [
  {
    title: "Organiza",
    subtitle: "Mantén tus citas y recordatorios a la vista.",
    src: step1,
    srcDark: step1dark,
  },
  {
    title: "Consulta",
    subtitle: "Accede a la información autorizada desde un solo lugar.",
    src: step2,
    srcDark: step2dark,
  },
  {
    title: "Da seguimiento",
    subtitle: "Recibe recordatorios para acompañar tu atención.",
    src: step3,
    srcDark: step3dark,
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
  hover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } },
  tap: { scale: 0.97 },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: (i + 2) * 0.2,
      duration: 0.6,
      scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
    },
  }),
  hover: {
    scale: 1.15,
    rotate: -8,
    transition: { type: "spring", stiffness: 400, damping: 12 },
  },
  tap: { scale: 0.9 },
};

const mediaVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const StepsSection = () => {
  const cardRef = useRef(null);
  const rectRef = useRef(null); // cached box so we don't reflow on every move
  const reduce = useReducedMotion();

  // Raw target the FIRST ring chases (px, relative to the card's top-left).
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);

  // Trailing chain: ring 0 → cursor, ring 1 → ring 0, ring 2 → ring 1, …
  // NOTE: hand-unrolled to keep hooks at the top level (no hooks in loops).
  // It is coupled to CIRCLES.length === 4 — add a pair to extend the trail.
  const x0 = useSpring(tx, SPRING);
  const y0 = useSpring(ty, SPRING);
  const x1 = useSpring(x0, SPRING);
  const y1 = useSpring(y0, SPRING);
  const x2 = useSpring(x1, SPRING);
  const y2 = useSpring(y1, SPRING);
  const x3 = useSpring(x2, SPRING);
  const y3 = useSpring(y2, SPRING);

  const ringX = [x0, x1, x2, x3];
  const ringY = [y0, y1, y2, y3];

  const restPos = () => {
    const r = rectRef.current;
    return r ? { rx: r.width * REST.x, ry: r.height * REST.y } : null;
  };

  // Measure + snap the whole chain to rest on mount/resize (no slide-in).
  useEffect(() => {
    const snap = () => {
      rectRef.current = cardRef.current?.getBoundingClientRect() ?? null;
      const p = restPos();
      if (!p) return;
      tx.set(p.rx);
      ty.set(p.ry);
      ringX.forEach((s) => s.jump(p.rx)); // jump() sets without animating
      ringY.forEach((s) => s.jump(p.ry));
    };
    snap();
    window.addEventListener("resize", snap);
    return () => window.removeEventListener("resize", snap);
  }, []);

  // Pointer events cover mouse, touch and pen with one handler.
  const handlePointerEnter = () => {
    rectRef.current = cardRef.current?.getBoundingClientRect() ?? null;
  };

  const handlePointerMove = (e) => {
    if (reduce) return;
    const r = rectRef.current;
    if (!r) return;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const restX = r.width * REST.x;
    const restY = r.height * REST.y;
    // Only the head of the chain is told where to go; the rest follow it.
    tx.set(restX + (px - restX) * FOLLOW_STRENGTH);
    ty.set(restY + (py - restY) * FOLLOW_STRENGTH);
  };

  const handlePointerLeave = () => {
    const p = restPos();
    if (!p) return;
    tx.set(p.rx); // chain trails back to rest, same cascade in reverse
    ty.set(p.ry);
  };

  return (
    <section
      id="como-funciona"
      className="w-full h-auto flex flex-row items-center justify-center scroll-mt-28"
    >
      <motion.div
        ref={cardRef}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full max-w-300 h-full border border-border-default rounded-xl py-12 px-5 overflow-clip flex flex-col items-center md:items-stretch gap-8 md:gap-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Each ring gets its OWN spring position (the trail). Outer motion.div
            carries the per-ring follow; inner <svg> carries the centering
            offset + scale entrance. Two transform owners, two elements. */}
        <div className="absolute inset-0 pointer-events-none">
          {CIRCLES.map((size, i) => {
            const center = size / 2;
            return (
              <motion.div
                key={size}
                className="absolute top-0 left-0"
                style={{ x: ringX[i], y: ringY[i] }}
              >
                <motion.svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="absolute top-0 left-0 overflow-visible"
                  style={{ x: -center, y: -center }}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 1, scale: 0 }}
                  whileInView={{ opacity: 1, scale: [0, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 1, ease: "easeInOut" }}
                >
                  <circle
                    cx={center}
                    cy={center}
                    r={center}
                    className="stroke-border-default"
                    strokeWidth="2"
                  />
                </motion.svg>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full md:h-25 flex flex-col gap-6 z-10">
          <h2 className="text-h1 font-bold font-domine text-content-text-brand flex flex-col md:flex-row">
            <span>Tu información importa.&nbsp;</span> <span>Protegerla también</span>
          </h2>
          <span className="md:text-xl">
            Una experiencia clara para organizar tu seguimiento de salud.
          </span>
        </div>

        <div className="w-full h-auto md:h-auto flex flex-col md:flex-row gap-5 z-10">
          {steps.map((elem, i) => {
            return (
              <motion.div
                key={elem.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                className="w-full md:max-w-90 h-auto border border-border-default rounded-xl shadow-md p-2 relative bg-surface-base cursor-pointer"
              >
                <motion.div
                  custom={i}
                  variants={badgeVariants}
                  className="size-10 bg-brand-primary rounded-full flex items-center justify-center text-content-text-inverse font-black text-2xl absolute"
                >
                  {i + 1}
                </motion.div>
                <motion.div
                  variants={mediaVariants}
                  className="flex items-center justify-center w-full h-auto"
                >
                  <Image
                    src={elem.src}
                    alt={`Ilustración del paso ${i + 1}: ${elem.title}`}
                    className="w-auto h-auto dark:hidden"
                    unoptimized={true}
                    loading="lazy"
                  />
                  <Image
                    src={elem.srcDark}
                    alt={`Ilustración del paso ${i + 1}: ${elem.title}`}
                    className="w-auto h-auto hidden dark:block"
                    unoptimized={true}
                    loading="lazy"
                  />
                </motion.div>
                <div className="w-full h-auto flex flex-col gap-2 p-4">
                  <h3 className="font-bold text-2xl text-content-text-brand">
                    {elem.title}
                  </h3>
                  <span className="text-content-text-secondary text-md">
                    {elem.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default StepsSection;

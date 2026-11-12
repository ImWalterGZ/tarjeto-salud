"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

// ── Niveles (cada tier referencia un color del sistema) ──
// Plata/Oro/Rubí usan los tokens de fidelidad; Bronce usa el cocoa de marca
// para igualar el tono café del mockup (ver nota al final del archivo).
const TIERS = [
  { id: "bronce", short: "Br", label: "Bronce", color: "var(--surface-accent)" },
  {
    id: "plata",
    short: "Pl",
    label: "Plata",
    color: "var(--overlay-gradient-fidelity-silver-100)",
  },
  { id: "oro", short: "Or", label: "Oro", color: "var(--overlay-gradient-fidelity-gold-100)" },
  { id: "rubi", short: "Ru", label: "Rubí", color: "var(--overlay-gradient-fidelity-ruby-100)" },
];

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function LoyaltyProgress({
  tiers = TIERS,
  currentIndex = 0, // último nivel alcanzado (Bronce)
  visits = 2,
  required = 4,
}) {
  const reduce = useReducedMotion();

  const last = tiers.length - 1;
  const safeIndex = clamp(currentIndex, 0, last);
  const hasNext = safeIndex < last;
  const nextIndex = Math.min(safeIndex + 1, last);
  const nextTier = tiers[nextIndex];

  const remaining = Math.max(required - visits, 0);
  const pct = required > 0 ? clamp(visits / required, 0, 1) * 100 : 0;
  // la línea activa llega hasta el nodo del siguiente nivel
  const trackFillPct = hasNext ? ((safeIndex + 1) / last) * 100 : 100;

  const currentColor = tiers[safeIndex].color;
  const barColor = nextTier.color; // la barra usa el color del siguiente tier (Plata)

  // ── Contador animado del número de visitas ──
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const numRef = useRef(null);
  const numInView = useInView(numRef, { once: true, margin: "-40px" });
  useEffect(() => {
    if (reduce) {
      count.set(visits);
      return;
    }
    if (numInView) {
      const controls = animate(count, visits, { duration: 0.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [numInView, visits, reduce, count]);

  // ── Helpers de animación (se anulan con prefers-reduced-motion) ──
  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, ease: "easeOut", delay },
        };

  const nodeReveal = (i) =>
    reduce
      ? {}
      : {
          initial: { scale: 0.5, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { type: "spring", stiffness: 320, damping: 18, delay: 0.1 + i * 0.08 },
        };

  const fillReveal = (target, delay) =>
    reduce
      ? {}
      : {
          initial: { width: 0 },
          whileInView: { width: `${target}%` },
          viewport: { once: true },
          transition: { duration: 0.7, ease: "easeOut", delay },
        };

  return (
    <motion.div
      className="w-full max-w-xl rounded-[20px] border border-border-subtle bg-surface-base p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] flex flex-col gap-5"
      {...(reduce
        ? {}
        : {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, ease: "easeOut" },
          })}
    >
      {/* ── Riel de niveles ── */}
      <div>
        {/* fila de nodos + línea detrás */}
        <div className="relative">
          {/* línea base */}
          <div className="absolute top-1/2 left-5 right-5 sm:left-6 sm:right-6 h-0.5 -translate-y-1/2 rounded-full bg-border-subtle">
            {/* línea activa (se dibuja) */}
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${trackFillPct}%`, background: currentColor }}
              {...fillReveal(trackFillPct, 0.35)}
            />
          </div>

          {/* nodos */}
          <div className="relative flex justify-between">
            {tiers.map((tier, i) => {
              const filled = i <= safeIndex;
              return (
                <motion.div
                  key={tier.id}
                  className={
                    "flex items-center justify-center rounded-full size-10 sm:size-12 text-xs sm:text-sm font-semibold border-2 select-none " +
                    (filled
                      ? "border-transparent"
                      : "border-border-default text-content-text-muted bg-surface-base")
                  }
                  style={
                    filled
                      ? {
                          backgroundColor: tier.color,
                          borderColor: tier.color,
                          color: "var(--content-text-inverse)",
                        }
                      : undefined
                  }
                  {...nodeReveal(i)}
                  {...(reduce ? {} : { whileHover: { scale: 1.06 } })}
                >
                  {tier.short}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* etiquetas alineadas bajo cada nodo */}
        <div className="flex justify-between mt-2.5">
          {tiers.map((tier, i) => (
            <span
              key={tier.id}
              className={
                "w-10 sm:w-12 text-center text-xs sm:text-sm " +
                (i === safeIndex
                  ? "font-semibold text-content-text-primary"
                  : "text-content-text-muted")
              }
            >
              {tier.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Encabezado: siguiente nivel + conteo ── */}
      <motion.div className="flex items-end justify-between gap-3" {...fadeUp(0.15)}>
        <p className="text-sm sm:text-base text-content-text-muted">
          {hasNext ? (
            <>
              Siguiente nivel:{" "}
              <span className="font-bold text-content-text-primary">{nextTier.label}</span>
            </>
          ) : (
            <span className="font-bold text-content-text-primary">Nivel máximo</span>
          )}
        </p>
        <p className="text-sm text-content-text-muted whitespace-nowrap">
          <motion.span
            ref={numRef}
            className="text-md font-bold text-content-text-secondary"
          >
            {rounded}
          </motion.span>{" "}
          de {required} visitas
        </p>
      </motion.div>

      {/* ── Barra de progreso ── */}
      <motion.div className="relative h-2.5 w-full rounded-full bg-surface-subtle" {...fadeUp(0.2)}>
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${pct}%`, background: barColor }}
          {...fillReveal(pct, 0.45)}
        >
          {/* perilla al final del relleno */}
          <span
            className="absolute right-0 top-1/2 size-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-surface-base border-2 shadow-sm"
            style={{ borderColor: barColor }}
          />
        </motion.div>
      </motion.div>

      {/* ── Pie ── */}
      <motion.p className="text-sm text-content-text-muted" {...fadeUp(0.25)}>
        {hasNext ? (
          <>
            Te faltan{" "}
            <span className="font-semibold text-content-text-secondary">{remaining} visitas</span>{" "}
            para llegar a {nextTier.label} esta temporada
          </>
        ) : (
          "¡Has alcanzado el nivel máximo!"
        )}
      </motion.p>
    </motion.div>
  );
}

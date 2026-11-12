"use client";

import { motion, useReducedMotion } from "framer-motion";

const Chip = ({
  title = "Title",
  selected = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const reduce = useReducedMotion();

  // base: píldora + transición de color + anillo de foco (token de marca)
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border  p-3 text-sm font-medium select-none " +
    "transition-colors duration-150 " +
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-brand";

  // default → hover → pressed (:active) con los tokens --chip-*
  const interactive =
    "cursor-pointer bg-chip-default-bg text-chip-default-content border-chip-default-border " +
    "hover:bg-chip-hover-bg hover:border-chip-hover-border " +
    "active:bg-chip-active-bg active:text-chip-active-content active:border-chip-active-border";

  // seleccionado = estado "pressed" persistente
  const active =
    "cursor-pointer bg-chip-active-bg text-chip-active-content border-chip-active-border";

  // disabled = grises del sistema
  const off =
    "cursor-not-allowed bg-surface-subtle text-content-text-muted border-border-subtle";

  const state = disabled ? off : selected ? active : interactive;

  // Animaciones con framer-motion: Framer es dueño del transform (escala);
  // el color de cada estado lo siguen manejando los tokens vía CSS.
  // Se anulan si está deshabilitado o con prefers-reduced-motion.
  const motionProps =
    disabled || reduce
      ? {}
      : {
          whileHover: { scale: 1.1 },
          whileFocus: { scale: 1.1 },
          whileTap: { scale: 0.90 },
          transition: { type: "spring", stiffness: 400, damping: 25 },
        };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={`${base} ${state}`}
      {...motionProps}
      {...props}
    >
      <span>{title}</span>
    </motion.button>
  );
};

export default Chip;
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import emptyCup from "@/public/illustrations/Vector.svg";
import stampCup from "@/public/icons/loyalty_card/Stamp.png";
import { FeaturedSeasonalAndGifts } from "@material-symbols-svg/react";

// genera un arreglo [0, 1, ..., n-1]
const cups = (times) => Array.from({ length: times }, (_, index) => index);

// rotación distinta y determinista por sello (estable entre renders)
const STAMP_ANGLES = [-8, 6, -5, 9, -7, 4, -9, 7, -4, 8];
const rotationFor = (i) => STAMP_ANGLES[i % STAMP_ANGLES.length];

const Title = ({ business, promocion }) => (
  <div className="font-domine flex flex-col items-center text-center w-full gap-2">
    <h2 className="text-[14px] sm:text-[16px]">{business}</h2>
    <div className="w-1/3 border-t border-current" />
    <p className="text-[11px] sm:text-[12px]">{promocion}</p>
  </div>
);

export default function LoyaltyCard({
  business = "Negocio",
  promo = "Promoción",
  times = 10,
  stamps = 7,
  onStampsChange,
}) {
  const stampedCups = Math.min(Math.max(stamps, 0), times);

  // El padre es dueño del estado (componente controlado).
  // Tocar la casilla i fija el progreso hasta esa casilla.
  const handleClick = (i) => onStampsChange?.(i + 1);

  // ── Orquestación de la animación de entrada ──
  // El stagger vive en el contenedor: la revelación inicial cae en cascada,
  // pero un sello agregado por clic se monta cuando el padre ya está "visible"
  // y entra al instante (sin delay heredado).
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };
  const cellVariants = { hidden: {}, visible: {} };
  const stampVariants = {
    hidden: { scale: 0, rotate: -60, opacity: 0 },
    visible: (angle) => ({
      opacity: 1,
      scale: 1,
      rotate: angle, // conserva la inclinación propia de cada sello
      transition: { type: "spring", stiffness: 200, damping: 12 },
    }),
  };

  // hover / tap / focus (se desactivan con prefers-reduced-motion)
  const interactions = {
    whileHover: { scale: 1.06, rotate: 10 },
    whileFocus: { scale: 1.06, rotate: 10 },
    whileTap: { scale: 0.92, rotate: -10 },
  };

  return (
    <div className="border rounded-[20px] mx-auto flex flex-col items-center p-2.5 sm:p-3 border-tjid-expressive-yellow-border-sticker-slot bg-tjid-expressive-yellow-surface-tray text-tjid-classic-yellow-accent-base">
      <div className="font-domine flex flex-col items-center text-center w-full border rounded-[10px] p-2.5 sm:p-4 gap-4 border-tjid-expressive-yellow-chip-border">
        <Title business={business} promocion={promo} />

        <motion.div
          className="grid grid-cols-5 gap-2 sm:gap-3 justify-items-center w-full"
          role="group"
          aria-label={`Progreso: ${stampedCups} de ${times} visitas`}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cups(times).map((cup, i) => {
            const isLastCup = i === times - 1;
            const isStamped = i < stampedCups;

            return (
              <motion.button
                type="button"
                key={cup}
                onClick={() => handleClick(i)}
                aria-label="Visitas"
                variants={cellVariants}
                {...interactions}
                className="relative flex items-center justify-center  w-12.5 appearance-none bg-transparent border-0 p-0 cursor-pointer rounded-md outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tjid-classic-yellow-accent-base "
              >
                {/* El vaso vacío define el tamaño de la celda y la hace fluida */}
                <Image
                  src={emptyCup}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto"
                  unoptimized
                />

                {isStamped && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    variants={stampVariants}
                    custom={rotationFor(i)}
                  >
                    <Image
                      src={stampCup}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-auto"
                      unoptimized
                    />
                  </motion.div>
                )}

                {isLastCup && (
                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <FeaturedSeasonalAndGifts className="w-1/2 h-auto text-tjid-expressive-yellow-chip-border" />
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

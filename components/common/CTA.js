"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
// import appleDowload from "@/public/icons/iphone_mockup/Store_download_button_apple.svg";
// import googleDowload from "@/public/icons/iphone_mockup/Store_download_button_google.svg";

// * Download botones
// const donwloadButtons = [
//   {
//     src: appleDowload,
//     alt: "Disponible en la App Store",
//   },
//   {
//     src: googleDowload,
//     alt: "Disponible en Google Play",
//   },
// ];

const CTA = () => {
  return (
    <section id="descarga" className="w-full h-auto mt-22 bg-surface-raised scroll-mt-28">
      <div className="w-full h-auto bg-surface-base flex flex-col items-center justify-center pb-15 md:pb-35 border-b border-border-default rounded-b-2xl">
        <div className="relative w-full max-w-280 h-auto rounded-4xl bg-surface-accent py-16 px-5 md:px-16 flex flex-col items-center justify-center text-center gap-3 overflow-hidden">
          {/* ─── Background: VerifiedFill pattern ─────────────────────────── */}
          <motion.div
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, mass: 1, duration: 2 }}
            className="absolute z-0 inset-0 w-full h-full pointer-events-none"
            aria-hidden
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="vi" viewBox="0 0 26 26">
                  <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.69L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                </symbol>
                <pattern
                  id="verified-bg"
                  x="0"
                  y="0"
                  width="70"
                  height="70"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Fila 1 */}
                  <use href="#vi" x="0" y="0" width="35" height="35" fill="rgba(0,0,0,0.10)" />
                  {/* Fila 2 — offset de media celda en X para patrón de ladrillo */}
                  <use href="#vi" x="35" y="35" width="35" height="35" fill="rgba(0,0,0,0.10)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#verified-bg)" />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-6 z-10">
            <motion.h2
              className="font-domine font-bold text-h1 text-content-text-inverse text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Cuida tu
              <br className="md:hidden" /> información de
              <br className="md:hidden" /> siempre
              <br className="md:hidden" /> contigo
            </motion.h2>
            <motion.p
              className="text-lg text-content-text-inverse"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Conoce Tarjeto Salud. No brinda atención médica ni
              sustituye la consulta con profesionales de la salud.
            </motion.p>
            {/* // * Botones de la AppStore y GooglePlay */}
            {/* <motion.div
              className=" w-full h-auto flex justify-center items-center gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {donwloadButtons.map((elem, i) => (
                <motion.div
                  key={`${i} - ${elem.alt}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={elem.src}
                    alt={elem.alt}
                    width={436}
                    height={176}
                    className="w-40 md:w-60 h-auto cursor-pointer"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

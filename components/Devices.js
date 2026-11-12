"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import phone from "@/public/icons/devices/iPhone 16 - Dashboard Home.png";
import ipad from "@/public/icons/devices/Space Gray 1.png";
import mac from "@/public/icons/devices/Midnight 1.png";

const DEVICES = [
  {
    src: mac,
    alt: "Mac",
    className: "max-w-200 w-full h-auto",
    sizes: "(max-width: 768px) 100vw, 800px",
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  },
  {
    src: phone,
    alt: "iPhone",
    className:
      "max-w-80 w-1/3 md:w-1/4 h-auto absolute -left-5 md:left-[10%] xl:left-[15%] -bottom-20",
    sizes: "(max-width: 768px) 33vw, 320px",
    initial: { opacity: 0, x: -60, rotate: -8 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.7, delay: 0.4 },
  },
  {
    src: ipad,
    alt: "iPad",
    className:
      "max-w-110 w-1/2 md:w-1/3 h-auto absolute -right-5 md:right-[5%] xl:right-[10%] -bottom-20",
    sizes: "(max-width: 768px) 50vw, 440px",
    initial: { opacity: 0, x: 60, rotate: 8 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.7, delay: 0.5 },
  },
];

const Devices = () => {
  return (
    <section className="mt-10 md:mt-20 py-12 px-5">
      <motion.div
        className="text-center flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-h1 font-domine">Se ve bien donde se usa.</h2>
        <span className="text-content-text-secondary md:text-2xl">
          Escritorio, tablet o celular. Tarjeto Negocios se adapta a los dispositivos que tengas
          disponibles.
          <br />
          <br />
          <span className="text-content-text-brand">A la moda, lo que se acomoda.</span>
        </span>
      </motion.div>

      <div className="w-full h-auto relative mt-10 md:mt-20 md:px-32 lg:px-64 flex justify-center items-center overflow-x-clip">
        {DEVICES.map((device) => (
          <motion.div
            key={device.alt}
            className={device.className}
            initial={device.initial}
            whileInView={device.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={device.transition}
          >
            <Image
              src={device.src}
              className="w-full h-auto"
              alt={`${device.alt} con la interfaz de Tarjeto Negocios`}
              loading="lazy"
              sizes={device.sizes}
              placeholder="blur"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Devices;

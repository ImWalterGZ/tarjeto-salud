"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button/Button";
import { CalendarAddOn, ArrowRightAlt } from "@material-symbols-svg/react";
import Image from "next/image";
import dashboardDesktop from "@/public/icons/dashboards/Dashboard - Home - Desktop.png";
import dashboardMobile from "@/public/icons/dashboards/Dashboard - Home - Mobile.png";
import intent1 from "@/public/icons/intents/Default.png";
import intent2 from "@/public/icons/intents/Info Intent.png";
import intent3 from "@/public/icons/intents/Intent.png";

const INTENTS = [
  {
    src: intent1,
    alt: "Más que ayer a esta hora",
    className: "w-75 md:w-100 -right-8 top-40 md:top-5 md:right-5",
  },
  {
    src: intent2,
    alt: "Primera visita",
    className: "w-40 md:w-45 bottom-17 left-5 md:bottom-20 md:left-40",
  },
  {
    src: intent3,
    alt: "Subió de nivel",
    className: "w-40 md:w-45 bottom-7 right-0 md:bottom-40 md:left-10",
  },
];

const DwnldBtns = () => {
  return (
    <div className="w-full flex justify-center-safe items-center gap-2 md:gap-8 px-8">
        <Button title="Agendar una cita" href="mailto:hola@tarjeto.app" icon={CalendarAddOn} />
        <Button
          title="Conocer Tarjeto Negocios"
          href="/negocios/#plataforma"
          icon={ArrowRightAlt}
          variant="ghost"
        />
      
    </div>
  );
};

const PageMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-8 md:gap-16 items-center overflow-x-clip md:overflow-visible"
    >
      <DwnldBtns />
      <div className="w-full h-auto flex flex-col items-center relative">
        <div className="w-3/4  rounded-lg border border-border-default overflow-clip shadow-lg shadow-primary/10">
          <Image
            className="hidden md:block w-full h-auto select-none pointer-events-none"
            src={dashboardDesktop}
            alt="Panel de inicio de computadora"
            sizes="(max-width: 768px) 0px, 75vw"
            preload={true}
            placeholder="blur"
          />
          <Image
            className="block md:hidden w-full h-auto select-none pointer-events-none"
            src={dashboardMobile}
            alt="Panel de inicio de teléfono"
            sizes="(max-width: 768px) 75vw, 0px"
            preload={true}
            placeholder="blur"
          />
        </div>
        {INTENTS.map((intent, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.4 }}
            key={i}
            className={`absolute ${intent.className}`}
          >
            <Image
              src={intent.src}
              alt={intent.alt}
              className="size-full"
              preload={true}
              sizes="(max-width: 768px) 160px, 400px"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PageMockup;

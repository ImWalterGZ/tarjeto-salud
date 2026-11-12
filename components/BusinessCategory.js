"use client";

import { CalendarMonth, Lock, MedicalInformation, NotificationsUnread } from "@material-symbols-svg/react";
import { motion } from "framer-motion";

const AREAS = [
  { icon: CalendarMonth, label: "Citas" },
  { icon: NotificationsUnread, label: "Recordatorios" },
  { icon: MedicalInformation, label: "Seguimiento" },
  { icon: Lock, label: "Acceso protegido" },
];

const BusinessCategory = () => (
  <motion.section
    className="flex flex-col items-center w-full h-auto mt-40 px-6 gap-8 md:gap-12 text-content-text-secondary"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    aria-labelledby="areas-salud"
  >
    <h2 id="areas-salud" className="uppercase font-bold">Una experiencia para</h2>
    <div className="w-full md:w-auto border border-border-default rounded-2xl md:rounded-full flex flex-wrap justify-center gap-8 md:gap-16 p-8 md:px-16">
      {AREAS.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.35 }}
          className="h-15 w-24 flex flex-col justify-center items-center gap-3 text-center"
        >
          <Icon className="size-8" aria-hidden="true" />
          <h3 className="text-sm">{label}</h3>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default BusinessCategory;

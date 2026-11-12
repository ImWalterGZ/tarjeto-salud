"use client";

import { CalendarClock, Lock, NotificationsUnread } from "@material-symbols-svg/react";
import { motion } from "framer-motion";
import Card from "../ui/Card/Card";

const TOOLS = [
  { icon: CalendarClock, title: "Agenda de seguimiento", description: "Visualiza citas y actividades de seguimiento para tenerlas presentes en una experiencia fácil de consultar." },
  { icon: Lock, title: "Acceso con propósito", description: "La propuesta considera perfiles y permisos para que la información solo esté disponible para usuarios autorizados." },
  { icon: NotificationsUnread, title: "Recordatorios útiles", description: "Configura avisos de citas o seguimiento. Las comunicaciones se plantean con preferencias claras para cada persona." },
];

const HowItWorks = () => (
  <section className="py-24 flex items-center justify-center px-5">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }} className="border border-border-default p-6 md:p-10 flex flex-col gap-12 rounded-48 max-w-300">
      <div>
        <h2 className="font-domine text-content-text-brand text-3xl text-center">Acompaña tu seguimiento con claridad</h2>
        <p className="mt-4 text-center text-content-text-secondary">Tarjeto Salud plantea herramientas digitales para organizar información y comunicación, sin reemplazar al personal ni a la atención profesional de salud.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
        {TOOLS.map((tool, index) => (
          <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="w-full">
            <Card title={tool.title} description={tool.description} icon={tool.icon} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HowItWorks;

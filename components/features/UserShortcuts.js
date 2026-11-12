"use client";
import Card from "../ui/Card/Card";
import { motion } from "framer-motion";
import { History, FavoriteFill, BookmarkFill } from "@material-symbols-svg/react";

const CARDS = [
  {
    icon: History,
    title: "Historial de seguimiento",
    description:
      "Consulta tus interacciones y recordatorios registrados cuando lo necesites.",
  },
  {
    icon: FavoriteFill,
    title: "Tus contactos de atención",
    description:
      "Mantén a la mano los centros o profesionales que hayas decidido guardar en la experiencia.",
  },
  {
    icon: BookmarkFill,
    title: "Recordatorios guardados",
    description:
      "Revisa avisos de próximas citas y tareas de seguimiento según tus preferencias.",
  },
];

const UserShortcuts = () => {
  return (
    <section className="flex flex-col md:p-32 gap-12 mt-20">
      {/* // * Titulo */}
      <div className="flex flex-col items-center gap-12 p-10 md:p-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-domine font-bold text-h1 text-content-text-primary"
        >
          Tu seguimiento, en un solo lugar.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-content-text-secondary text-2xl"
        >
          Revisa tus recordatorios, consulta tu seguimiento y decide qué información quieres tener
          disponible.
        </motion.p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-5 w-full">
        {CARDS.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default UserShortcuts;

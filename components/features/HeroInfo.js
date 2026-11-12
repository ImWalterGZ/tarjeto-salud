"use client";
import { motion } from "framer-motion";

const HeroInfo = () => {
  return (
    <motion.section
      id="que-es-tarjeto"
      className="my-30 w-full h-auto md:h-125 flex flex-col md:flex-row md:justify-center items-center align-middle p-10 gap-6 md:gap-12 md:px-30 scroll-mt-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <div className="w-fill md:max-w-170 h-auto text-center flex flex-col gap-6 md:gap-12">
        <h2 className="font-bold font-domine text-h2 md:text-h1">
          <span className="text-content-text-primary">
            Tus citas, tus recordatorios y tu información.{" "}
          </span>
          <br/>
          <span className="text-content-text-brand">Todo con acceso responsable</span>
        </h2>
        <span className="text-content-text-secondary text-md md:text-xl md:leading-[1.6]">
          Con Tarjeto Salud, <b>consulta y organiza tu información</b> para dar seguimiento a tus
          citas y recordatorios. El acceso se plantea por perfil, respetando la confidencialidad
          que requiere la información de salud.
        </span>
      </div>
    </motion.section>
  );
};

export default HeroInfo;

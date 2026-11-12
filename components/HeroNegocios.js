"use client";
import { motion } from "framer-motion";
import PageMockup from "./features/PageMockup";

const HeroNegocios = () => {
  const headline = "Amor con amor se paga. Y la lealtad, también.";
  const subheadline =
    "Tarjeto Negocios toma lo que ya pasa en tu negocio y lo pone a simple vista. Quién vino, quién volvió y cómo se está moviendo todo.";

  return (
    <section
      id="producto"
      className="flex flex-col items-center justify-center py-7 md:mt-10 select-none gap-12 scroll-mt-28"
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Headline */}
        <h1 className="font-black text-6xl text-balance text-content-text-primary md:text-8xl ">
          {headline.substring(0, 23)}
          <br />
          <span className=" text-content-text-brand ">
            {headline.substring(23, headline.length)}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-base leading-[1.2] mt-12 px-6 md:px-20
          md:font-sans md:text-2xl text-content-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {subheadline}
        </motion.p>
      </motion.div>

      {/* Hero Image/Illustration placeholder */}
      <PageMockup />
    </section>
  );
};

export default HeroNegocios;

"use client";
import { motion } from "framer-motion";
import config from "@/config";
import HealthDeviceMockups from "./HealthDeviceMockups";

const Hero = () => {
  const headline = config.marketing.headline;
  const subheadline = config.marketing.subheadline;

  return (
    <section className="flex flex-col items-center justify-center  py-7 md:mt-10 select-none">
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

      <HealthDeviceMockups />
    </section>
  );
};

export default Hero;

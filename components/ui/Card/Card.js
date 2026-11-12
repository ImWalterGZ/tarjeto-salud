"use client";
import Icon from "../Icon/Icon";
import { BrokenImage } from "@material-symbols-svg/react";
import { motion } from "framer-motion";

const Card = ({ title = "Title", description = "Description", icon = BrokenImage }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-90 md:min-h-85 border rounded-4xl py-5 px-6 flex flex-col gap-4 shadow-lg bg-surface-base border-border-default"
      >
      <Icon PrimarySymbol={icon} className="size-10" />
      <h2 className="font-bold text-2xl text-content-text-primary">{title}</h2>
      <p className="text-[16px] text-content-text-secondary">{description}</p>
    </motion.div>
  );
};

export default Card;

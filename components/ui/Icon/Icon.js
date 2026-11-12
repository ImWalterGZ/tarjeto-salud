"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -4,
  },
  tap: {
    scale: 0.89,
    y: 4,
  },
};

const iconVariants = {
  hidden: {
    scale: 0.1,
    y: 30,
  },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.08,
    rotate: 6,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  tap: {
    scale: 0.92,
    rotate: -6,
  },
};

const Icon = ({ PrimarySymbol }) => {
  return (
    <motion.div
      className="size-20 bg-surface-base border border-border-default rounded-full p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
    >
      <motion.div variants={iconVariants}>
        <PrimarySymbol className="w-full h-full text-content-icon-brand" />
      </motion.div>
    </motion.div>
  );
};

export default Icon;

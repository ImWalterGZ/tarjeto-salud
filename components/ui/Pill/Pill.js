"use client";
import { motion } from "framer-motion";

const pillVariants = {
  hidden: {
    width: "20%",
    opacity: 0.8,
  },
  visible: (delay = 0) => ({
    width: "100%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      delay,
    },
  }),
  hover: {
    y: -3,
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 18,
    },
  },
  tap: {
    y: 0,
    scale: 0.97,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 20,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 18,
      delay,
    },
  }),
  hover: {
    x: -2,
    scale: 1.25,
    rotate: -8,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 16,
    },
  },
  tap: {
    scale: 0.92,
    rotate: 8,
  },
};

const labelVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.95,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
      delay,
    },
  }),
  hover: {
    x: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    x: 0,
  },
};

const Pill = ({ icon, label, delay }) => (
  <div className="w-fit">
    <motion.div
      variants={pillVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      className="flex items-center bg-surface-base border rounded-full border-border-default py-2 px-5 gap-2 overflow-hidden"
    >
      <motion.div variants={iconVariants} custom={delay}>
        {icon}
      </motion.div>
      <motion.span
        className="text-content-text-secondary text-sm whitespace-nowrap"
        variants={labelVariants}
        custom={delay}
      >
        {label}
      </motion.span>
    </motion.div>
  </div>
);

export default Pill;

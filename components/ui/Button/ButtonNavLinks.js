"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const box = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: [50, 0], // deslizamiento lateral
    opacity: [0, 1],
    transition: {
      ease: "easeInOut",
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ButtonNavLinks = ({ NAV_LINKS }) => {
  return (
    <motion.div
      className="hidden justify-between space-x-2.5 overflow-visible md:inline-flex text-content-text-primary"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {NAV_LINKS.map((elem) => (
        <NavLinkButton key={elem.href} label={elem.label} href={elem.href} />
      ))}
    </motion.div>
  );
};

const NavLinkButton = ({ label, href }) => {
  return (
    <motion.div variants={box}>
      <Link
        href={href}
        className="group relative inline-flex items-center cursor-pointer text-content-text-primary duration-150 active:scale-75"
      >
        <span className="transition-transform duration-150 group-hover:-translate-y-0.5">
          {label}
        </span>
        <UnderLineElem />
      </Link>
    </motion.div>
  );
};

export const UnderLineElem = () => {
  return (
    <>
      <span className="absolute bg-current left-1/2 -bottom-0.5 h-1 w-0 rounded-r-full transition-all duration-200 group-hover:w-1/2" />
      <span className="absolute bg-current right-1/2 -bottom-0.5 h-1 w-0 rounded-l-full transition-all duration-200 group-hover:w-1/2" />
    </>
  );
};

export default ButtonNavLinks;

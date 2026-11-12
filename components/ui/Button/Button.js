"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  initial: { width: "20%", height: "100%", opacity: 0 },
  visible: {
    width: "100%",
    height: "100%",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeIn" },
  },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const getTextVariants = (iconPosition) => {
  const direction = iconPosition === "left" ? 1 : -1;

  return {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeIn" } },
    hover: { x: direction * 4 },
    tap: { x: direction * -1 },
  };
};

const getIconVariants = (iconPosition) => {
  const direction = iconPosition === "left" ? -1 : 1;

  return {
    initial: { scale: 0.1, opacity: 0, rotate: direction * -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
    hover: {
      x: direction * 3,
      rotate: direction * 10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 500, damping: 14 },
    },
    tap: { x: 0, rotate: direction * -8, scale: 0.9 },
  };
};

const buttonBaseClasses =
  "size-full rounded-full p-3 inline-flex justify-center items-center relative border overflow-clip cursor-pointer gap-1 whitespace-nowrap touch-manipulation select-none disabled:cursor-not-allowed disabled:opacity-disabled focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-brand/30";

const buttonVariantClasses = {
  primary:
    "bg-btn-primary-bg text-btn-primary-fg border-btn-primary-border hover:bg-btn-primary-bg-hover active:bg-btn-primary-bg-active disabled:bg-btn-primary-bg-disabled disabled:text-btn-primary-fg-disabled disabled:border-btn-primary-bg-disabled",
  secondary:
    "bg-btn-secondary-bg text-btn-secondary-fg border-btn-secondary-border hover:bg-btn-secondary-bg-hover active:bg-btn-secondary-bg-active disabled:bg-btn-secondary-bg-disabled disabled:text-btn-secondary-fg-disabled disabled:border-btn-secondary-bg-disabled",
  outline:
    "bg-btn-outline-bg text-btn-outline-fg border-btn-outline-border hover:bg-btn-outline-bg-hover active:bg-btn-outline-bg-active disabled:bg-btn-outline-bg-disabled disabled:text-btn-outline-fg-disabled disabled:border-btn-outline-border-disabled",
  ghost:
    "bg-btn-ghost-bg text-brand-on-ghost border-btn-ghost-border hover:bg-btn-ghost-bg-hover active:bg-btn-ghost-bg-active disabled:bg-btn-ghost-bg-disabled disabled:text-btn-ghost-fg-disabled",
};

const Button = ({
  title = "Title",
  icon,
  variant = "primary",
  disabled = false,
  target = "_self",
  href = "",
  iconPosition = "right",
}) => {
  const Icon = icon;
  const isIconLeft = iconPosition === "left";
  const textVariants = getTextVariants(iconPosition);
  const iconVariants = getIconVariants(iconPosition);

  return (
    <Link target={target} href={href}>
      <div className="h-11 flex justify-center items-center">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileInView="visible"
          whileHover="hover"
          whileFocus="hover"
          whileTap="tap"
          viewport={{ once: true }}
          disabled={disabled}
          className={`${buttonBaseClasses} ${buttonVariantClasses[variant] ?? buttonVariantClasses.primary}`}
        >
          {Icon && isIconLeft && (
            <motion.div variants={iconVariants} className="size-5 overflow-visible shrink-0">
              <Icon className="size-full" />
            </motion.div>
          )}

          <motion.span variants={textVariants} className="font-semibold text-sm whitespace-nowrap">
            {title}
          </motion.span>

          {Icon && !isIconLeft && (
            <motion.div variants={iconVariants} className="size-5 overflow-visible shrink-0">
              <Icon className="size-full" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </Link>
  );
};

export default Button;

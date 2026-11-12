"use client";
import { motion } from "framer-motion";
import {
  CardsStack,
  LocationOn,
  FeaturedSeasonalAndGifts,
  Face,
} from "@material-symbols-svg/react";
import AnimatedLogo from "../Logo/AnimatedLogo";

const DEFAULT_DETAILS = [
  { icon: CardsStack, title: "5", description: "Tarjetas" },
  { icon: LocationOn, title: "Bruma Café", description: "Última visita" },
  { icon: FeaturedSeasonalAndGifts, title: "16", description: "Beneficios" },
];

const PATTERN_ICONS = Array.from({ length: 80 });

const patternGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const patternIconVariants = {
  hidden: { opacity: 0, scale: 0.25, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 420, damping: 15 },
  },
};

const cardVariants = {
  rest: { y: 30, scale: 1, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  tap: { scale: 0.985 },
};

const profileVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: -3,
    scale: 1.04,
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
  tap: { scale: 0.94, rotate: 3 },
};

const detailVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.04,
    transition: { type: "spring", stiffness: 360, damping: 16 },
  },
  tap: { scale: 0.96 },
};

const detailIconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -8, 8, 0],
    scale: 1.12,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const footerVariants = {
  rest: { backgroundPosition: "0% 50%" },
  hover: {
    backgroundPosition: "100% 50%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const TypewriterText = ({ as: Component = "span", text, className = "", delay = 0 }) => {
  const content = String(text ?? "");

  return (
    <Component className={className} aria-label={content}>
      <span aria-hidden="true">
        {content.split("").map((char, index) => (
          <motion.span
            key={`${content}-${index}`}
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              delay: delay + index * 0.025,
              duration: 0.22,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </Component>
  );
};

const Detail = ({ icon: Icon, title, description, color, index = 0 }) => (
  <motion.button
    type="button"
    variants={detailVariants}
    whileHover="hover"
    whileTap="tap"
    whileFocus="hover"
    initial="rest"
    className={`group flex min-w-30 flex-col items-center justify-between gap-1.25 rounded-2xl p-2.5 text-center outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${color.userId.details}`}
    aria-label={`${title} ${description}`}
  >
    {Icon && (
      <motion.span variants={detailIconVariants} className="size-6">
        <Icon className="size-full" />
      </motion.span>
    )}
    <TypewriterText
      as="h4"
      text={title}
      delay={0.18 + index * 0.08}
      className="text-xl font-bold"
    />
    <TypewriterText
      as="p"
      text={description}
      delay={0.28 + index * 0.08}
      className={`text-sm ${color.userId.tag}`}
    />
  </motion.button>
);

const UserId = ({
  color,
  pattern,
  patternKey,
  username = "Angélica Ruíz",
  userId = "@angelica_ruiz953",
  image = Face,
  since,
  details = DEFAULT_DETAILS,
  tarjetoId = "202626050407",
}) => {
  const year = since ?? new Date().getFullYear();
  const ProfilePic = image;
  const PatternIcon = pattern?.icon;
  const patternColor = `var(--color-${color.userId.bg.replace(/^bg-/, "")})`;

  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      whileFocus="hover"
      tabIndex={0}
      className={`group relative flex w-125 max-w-full cursor-pointer touch-manipulation flex-col overflow-hidden rounded-3xl border shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${color.userId.border}`}
    >
      {pattern?.icon && (
        <motion.div
          initial={{ scale: 3 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 18, mass: 1, duration: 2 }}
          whileHover={{ scale: 1.04, rotate: 1 }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          aria-hidden
        >
          <motion.div
            key={patternKey ?? pattern.title}
            initial="hidden"
            animate="visible"
            variants={patternGridVariants}
            className="grid size-full grid-cols-10 gap-5 p-2"
          >
            {PATTERN_ICONS.map((_, index) => (
              <motion.span key={index} variants={patternIconVariants} className="size-7">
                <PatternIcon className="size-full" style={{ color: patternColor }} />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
      <div className="relative flex flex-col p-5 gap-5">
        <header className="flex items-start justify-between gap-2.5">
          <div className="flex items-start gap-3 min-w-0">
            <motion.div
              variants={profileVariants}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              viewport={{ once: true }}
              className={`size-20 shrink-0 overflow-hidden rounded-full border bg-surface-base flex items-center justify-center ${color.userId.border} ${color.userId.icon}`}
            >
              <ProfilePic className="size-full transition-transform duration-300 group-hover:scale-105" />
            </motion.div>
            <div>
              <TypewriterText
                as="h3"
                text={username}
                className={`text-2xl font-bold leading-tight ${color.userId.title}`}
              />
              <TypewriterText
                as="p"
                text={userId}
                delay={0.2}
                className={`text-xs ${color.userId.tag}`}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            viewport={{ once: true }}
            className={`shrink-0 rounded-full px-2.5 py-2 text-xs text-content-text-inverse border ${color.userId.est.bg} ${color.userId.est.border}`}
          >
            <TypewriterText text={`Desde ${year}`} delay={0.35} />
          </motion.div>
        </header>

        {/* detalles */}
        <div className="flex justify-between items-center">
          {details.map((d, i) => (
            <Detail
              key={d.description ?? i}
              icon={d.icon}
              title={d.title}
              description={d.description}
              color={color}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* footer: tarjeto ID */}
      <motion.footer
        variants={footerVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.99 }}
        className={`relative flex items-center gap-2 border-t bg-[length:200%_200%] px-5 py-3 text-sm font-medium ${color.userId.border} ${color.userId.accent} ${color.userId.footer}`}
      >
        <span>
          <AnimatedLogo className="size-4 inline-block align-middle overflow-visible" />
        </span>
        <TypewriterText text="tarjeto ID" delay={0.45} className="font-bold" />
        <TypewriterText text={`• ${tarjetoId}`} delay={0.6} />
      </motion.footer>
    </motion.article>
  );
};

export default UserId;

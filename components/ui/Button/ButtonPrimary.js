"use client";
import { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import Link from "next/link";

const EXPAND = {
  initial: { width: 44 },
  animate: { width: 150, transition: { duration: 0.2, ease: "easeIn" } },
};

const CLS = {
  base: "inline-flex items-center justify-center relative overflow-clip rounded-full cursor-pointer bg-btn-primary-bg active:bg-btn-primary-bg-active",
  desktop: "hover:bg-btn-primary-bg-hover hover:ring-2 ring-btn-primary-bg-hover ring-offset-2",
};

const useButtonAnimation = () => {
  const [iconRef, animateIcon] = useAnimate();
  const [labelRef, animateLabel] = useAnimate();
  const labelCtrl = useAnimation();
  const iconCtrl = useAnimation();

  useEffect(() => {
    (async () => {
      await animateIcon(
        iconRef.current,
        { opacity: 1, scale: 1 },
        { type: "spring", bounce: 0.5, visualDuration: 0.3 }
      );
      await animateIcon(
        iconRef.current,
        { y: 20, opacity: 0 },
        { duration: 0.3, ease: "easeInOut" }
      );
      await animateLabel(
        labelRef.current,
        { y: 0, opacity: 1 },
        { duration: 0.5, ease: "easeInOut" }
      );
    })();
  }, []);
  const onHoverStart = () => {
    labelCtrl.start({
      y: [0, -30],
      opacity: [1, 0],
      transition: { duration: 0.3, ease: "easeInOut" },
    });
    iconCtrl.start({
      y: [20, 0],
      opacity: [0, 1],
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  const onHoverEnd = () => {
    labelCtrl.start({
      y: [-30, 0],
      opacity: [0, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    iconCtrl.start({
      y: [0, 20],
      opacity: [1, 0],
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  return { iconRef, labelRef, labelCtrl, iconCtrl, onHoverStart, onHoverEnd };
};

const ButtonPrimary = ({ title, Icon, href, target = "_self", isAdaptative = true }) => {
  const { iconRef, labelRef, labelCtrl, iconCtrl, onHoverStart, onHoverEnd } = useButtonAnimation();

  // botón desktop entre las dos ramas
  const desktopButton = (
    <motion.button
      variants={EXPAND}
      initial="initial"
      animate="animate"
      whileTap={{ scale: 0.95 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`${CLS.base} ${CLS.desktop}`}
    >
      <motion.div
        ref={labelRef}
        animate={labelCtrl}
        initial={{ y: -30, opacity: 0 }}
        className="font-semibold text-brand-on-primary text-sm"
      >
        {title}
      </motion.div>
      <motion.div
        ref={iconRef}
        animate={iconCtrl}
        initial={{ opacity: 0, scale: 0 }}
        className="size-5 h-auto absolute overflow-visible text-brand-on-primary"
      >
        <Icon className="w-full h-full" />
      </motion.div>
    </motion.button>
  );

  return (
    <Link href={href} target={target}>
      {isAdaptative ? (
        <>
          {/* Mobile: solo ícono */}
          <div className="w-11 h-11 flex items-center justify-center md:hidden">
            <motion.button
              aria-label={title}
              initial={{ width: "0%", height: "0%" }}
              animate={{ width: "100%", height: "100%" }}
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className={CLS.base}
            >
              <div className="size-6 absolute overflow-visible text-brand-on-primary">
                <Icon className="w-full h-full" />
              </div>
            </motion.button>
          </div>

          {/* Desktop: label + ícono */}
          <div className="w-36 h-11 hidden md:flex justify-center">{desktopButton}</div>
        </>
      ) : (
        <div className="w-36 h-11 flex justify-center">{desktopButton}</div>
      )}
    </Link>
  );
};

export default ButtonPrimary;

"use client";
import Link from "next/link";
import AnimatedLogo from "@/components/ui/Logo/AnimatedLogo";
import ButtonNavLinks from "@/components/ui/Button/ButtonNavLinks";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BaseHeader = ({ logoHref, LogoText, navLinks, CtaButton, LogoTextSize ="w-21" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center select-none px-4 md:px-16 py-4 bg-base-100/80 backdrop-blur-sm">
      <Link href={logoHref} aria-label="Inicio" className="flex items-center space-x-2">
        <AnimatedLogo className="w-7 h-7 overflow-visible text-brand-primary" />
        <LogoText className={`${LogoTextSize} overflow-visible text-brand-primary`} />
      </Link>
      {navLinks && <ButtonNavLinks NAV_LINKS={navLinks} />}
      <div className="inline-flex items-center justify-center gap-3">
        <CtaButton />
        {/* Menu de navegacion para movil */}
        {navLinks && (
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col justify-center gap-1.25 size-9 rounded-full items-center"
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-content-text-primary rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="w-3 h-[1.5px] bg-content-text-primary rounded-full self-start ml-2.5"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-content-text-primary rounded-full"
            />
          </motion.button>
        )}
      </div>

      {/* Linea divisora */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 border-b border-border-default pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Mobile dropdown */}
      {navLinks && (
        <div
          className="md:hidden absolute inset-x-0 top-full grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="h-dvh bg-base-100/80 backdrop-blur-sm flex flex-col px-8 pt-4 pb-10">
              <nav className="flex flex-col flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-border-default group"
                  >
                    <span className="text-xl font-semibold text-content-text-primary group-hover:text-content-text-brand transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default BaseHeader;

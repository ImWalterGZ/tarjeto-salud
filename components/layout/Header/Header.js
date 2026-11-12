"use client";
import { ArrowCircleDown } from "@material-symbols-svg/react";
import AnimatedTarjeto from "@/components/ui/Logo/AnimatedTarjeto";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import BaseHeader from "./BaseHeader";

const NAV_LINKS = [
  { label: "¿Cómo funciona?", href: "/#como-funciona" },
  { label: "Herramientas", href: "/#beneficios" },
  { label: "Protección de datos", href: "/#proteccion" },
];

const Header = () => (
  <BaseHeader
    logoHref="/"
    LogoText={AnimatedTarjeto}
    navLinks={NAV_LINKS}
    CtaButton={() => (
      <ButtonPrimary title="Conocer Tarjeto" Icon={ArrowCircleDown} href="/#descarga" />
    )}
  />
);

export default Header;

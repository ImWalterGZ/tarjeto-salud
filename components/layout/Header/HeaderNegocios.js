"use client";
import { CalendarAddOn } from "@material-symbols-svg/react";
import AnimatedNegocios from "@/components/ui/Logo/AnimatedNegocios";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import BaseHeader from "./BaseHeader";

const NAV_LINKS = [
  { label: "Producto", href: "/negocios/#producto" },
  { label: "Plataforma", href: "/negocios/#plataforma" },
  { label: "Para clientes", href: "/" },
];

const HeaderNegocios = () => (
  <BaseHeader
    logoHref="/negocios"
    LogoText={AnimatedNegocios}
    LogoTextSize="w-28"
    navLinks={NAV_LINKS}
    CtaButton={() => (
      <ButtonPrimary title="Agendar una cita" Icon={CalendarAddOn} href="mailto:hola@tarjeto.app" />
    )}
  />
);

export default HeaderNegocios;

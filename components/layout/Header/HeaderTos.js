"use client";
import { ArrowBack } from "@material-symbols-svg/react";
import AnimatedTarjeto from "@/components/ui/Logo/AnimatedTarjeto";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import BaseHeader from "./BaseHeader";

const HeaderTos = () => (
  <BaseHeader
    logoHref="/"
    LogoText={AnimatedTarjeto}
    CtaButton={() => <ButtonPrimary title="Volver al inicio" Icon={ArrowBack} href="/" />}
  />
);

export default HeaderTos;

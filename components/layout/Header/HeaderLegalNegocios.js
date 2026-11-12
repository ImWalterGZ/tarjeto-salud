"use client";
import { ArrowBack } from "@material-symbols-svg/react";
import AnimatedNegocios from "@/components/ui/Logo/AnimatedNegocios";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import BaseHeader from "./BaseHeader";

const HeaderLegalNegocios = () => (
  <BaseHeader
    logoHref="/negocios"
    LogoText={AnimatedNegocios}
    CtaButton={() => <ButtonPrimary title="Volver a negocios" Icon={ArrowBack} href="/negocios" />}
  />
);

export default HeaderLegalNegocios;

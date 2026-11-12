"use client";

import Link from "next/link";
import Button from "@/components/ui/Button/Button";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import config from "@/config";
// import logo from "@/app/icon.png";
import AnimatedLogo from "@/components/ui/Logo/AnimatedLogo";
// import facebok from "@/public/icons/social_media/Facebook.svg";
// import facebokDark from "@/public/icons/social_media/Facebook-dark.svg";
// import instagram from "@/public/icons/social_media/Instagram (1) 1.svg";
// import instagramDark from "@/public/icons/social_media/Instagram (1) 1-dark.svg";
// import tiktok from "@/public/icons/social_media/TikTok 1.svg";
// import tiktokDark from "@/public/icons/social_media/TikTok 1-dark.svg";
// import x from "@/public/icons/social_media/X 1.svg";
// import xDark from "@/public/icons/social_media/X 1-dark.svg";

const footerInfo = [
  {
    title: "Tarjeto Salud",
    // content: ["¿Qué es?", "¿Cómo funciona?", "Noticias y novedades", "Historias de éxito"],
    content: ["La propuesta", "¿Cómo funciona?", "Protección de datos"],
    links: ["/#que-es-tarjeto", "/#como-funciona", "/#proteccion"],
    // todo: Agregar el '/blog' cuando ya tengamos esa sección realizada
  },
  {
    title: "Personas usuarias",
    content: [
      "Conocer Tarjeto Salud",
      "Herramientas de seguimiento",
      "Preguntas frecuentes",
      "Protección de información",
    ],
    links: ["/#descarga", "/#beneficios", "/#faq", "/#proteccion"],
  },
  {
    title: "Información legal",
    content: ["Aviso de privacidad", "Confidencialidad", "Deslinde de responsabilidad", "Uso de la plataforma"],
    links: ["/privacy-policy", "/confidencialidad", "/terms", "/terms"],
  },
  {
    title: "Contáctanos",
    content: [
      "Información y soporte",
      "Protección de datos",
      "Aviso de privacidad",
      "Confidencialidad y deslinde",
    ],
    links: ["/terms", "/terms", "/privacy-policy", "/confidencialidad"],
  },
];

// todo: Descomentar cuando ya tengamos las redes sociales creadas
// const images = [
//   { src: facebok, srcDark: facebokDark, alt: "Facebook" },
//   { src: instagram, srcDark: instagramDark, alt: "Instagram" },
//   { src: tiktok, srcDark: tiktokDark, alt: "TikTok" },
//   { src: x, srcDark: xDark, alt: "X" },
// ];

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-surface-raised w-full h-auto py-8 md:py-16 px-8 md:px-32 select-none">
      <div className="w-full h-auto flex flex-col md:flex-row place-content-between gap-8">
        {footerInfo.map((elem, i) => (
          <div
            key={`${elem.title} - ${i}`}
            className="w-full h-auto text-center md:text-left flex flex-col gap-2"
          >
            <h3 className="font-domine font-bold text-xl">{elem.title}</h3>
            {elem.content.map((content, i) => (
              <Link
                key={`${content} - ${i}`}
                href={elem.links[i]}
                className="text-md text-content-text-secondary hover:text-content-text-primary transition-colors duration-300 cursor-pointer"
              >
                {content}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row items-end gap-8 justify-between">
        {/* Newsletter */}
        <div className="w-full h-auto flex flex-col text-center md:text-left items-center md:items-start gap-2 mt-8">
          <h3 className="font-domine font-bold text-xl">Mantente informado</h3>
          <p className="text-md text-content-text-secondary">
            Recibe novedades de Tarjeto Salud.
          </p>
          <div className="w-full max-w-md h-12.5 flex flex-row items-center border border-border-default rounded-full p-0.5 dark:bg-surface-base">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="flex-1 min-w-0 pl-3 bg-transparent outline-none text-content-text-primary placeholder:text-content-text-muted text-sm"
            />
            <Button title="Suscribirse" />
          </div>
        </div>

        {/* Redes sociales */}
        {/* // todo: descomentar cuando ya tengamos las redes sociales creadas */}
        {/* <div className="w-full md:w-1/2 h-auto flex flex-col items-center gap-4">
          <h4 className="hidden md:block">¡Síguenos en nuestras redes!</h4>
          <div className="flex gap-4">
            {images.map((elem, i) => (
              <div key={`${elem.alt} - ${i}`}>
                <Image
                  src={elem.src}
                  alt={elem.alt}
                  draggable={false}
                  unoptimized
                  className="w-8 md:w-12 h-auto cursor-pointer dark:hidden"
                />
                <Image
                  src={elem.srcDark}
                  alt={elem.alt}
                  draggable={false}
                  unoptimized
                  className="w-8 md:w-12 h-auto cursor-pointer hidden dark:block"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className="flex flex-col mt-8 px-5 gap-4">
        <p className="text-center text-sm text-content-text-muted ">
          Copyright © {new Date().getFullYear()} Tarjeto. Todos los derechos reservados.
        </p>
        <p className="text-center text-sm text-content-text-muted">
          Tarjeto Salud no ofrece diagnósticos, tratamientos, prescripciones ni atención de
          urgencias. Ante una emergencia, llama al 911 o acude al servicio de urgencias más cercano.
        </p>

        <p className="text-center text-sm text-content-text-brand flex items-center justify-center gap-1">
          Hecho con&nbsp;
          <AnimatedLogo className="size-4 text-content-icon-brand inline-block align-middle overflow-visible" />
          &nbsp;en Chihuahua, México.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

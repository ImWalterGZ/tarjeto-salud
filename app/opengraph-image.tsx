import { createOgImage, OG_IMAGE_SIZE } from "@/libs/og";

export const alt = "Tarjeto para clientes: tarjetas de lealtad digitales y recompensas";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    badge: "Para clientes",
    title: "Tu lealtad vale. Hazla valer.",
    subtitle:
      "Guarda tarjetas de lealtad, registra visitas y recibe recompensas en tus lugares favoritos.",
    palette: {
      background: "linear-gradient(135deg, #fff7f8 0%, #ffe4ea 48%, #ffd0db 100%)",
      foreground: "#3a0a16",
      overlay: "radial-gradient(circle at top left, rgba(254,0,56,0.12), transparent 42%)",
      orbOne: "rgba(254, 0, 56, 0.18)",
      orbTwo: "rgba(87, 66, 63, 0.12)",
      frame: "rgba(58, 10, 22, 0.12)",
      badgeBackground: "rgba(255,255,255,0.72)",
      badgeForeground: "#7c0827",
      badgeBorder: "rgba(124, 8, 39, 0.12)",
      badgeDot: "#fe0038",
      logoBackground: "#fe0038",
      logoForeground: "#ffffff",
      domainLabel: "tarjeto.mx",
    },
  });
}

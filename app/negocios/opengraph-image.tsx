import { createOgImage, OG_IMAGE_SIZE } from "@/libs/og";

export const alt = "Tarjeto para negocios: programa de lealtad digital y promociones inteligentes";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    badge: "Para negocios",
    title: "Lealtad digital para crecer ventas y retencion.",
    subtitle:
      "Activa promociones inteligentes, mide visitas y convierte clientes frecuentes en ingresos repetidos.",
    palette: {
      background: "linear-gradient(135deg, #14080a 0%, #231214 52%, #3b121a 100%)",
      foreground: "#fff5f6",
      overlay: "radial-gradient(circle at top left, rgba(254,0,56,0.10), transparent 40%)",
      orbOne: "rgba(254, 0, 56, 0.22)",
      orbTwo: "rgba(87, 66, 63, 0.28)",
      frame: "rgba(255, 245, 246, 0.14)",
      badgeBackground: "rgba(255,255,255,0.08)",
      badgeForeground: "#fff5f6",
      badgeBorder: "rgba(255,255,255,0.12)",
      badgeDot: "#ff8ca7",
      logoBackground: "#fff5f6",
      logoForeground: "#cb002d",
      domainLabel: "tarjeto.app",
    },
  });
}

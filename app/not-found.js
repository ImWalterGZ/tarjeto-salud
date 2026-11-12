import Link from "next/link";
import ButtonSupport from "@/components/ui/Button/ButtonSupport";
import tarjeto from "@/public/icons/tarjeto.svg";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";

// Simple 404 page with a button to go home and a button to contact support
// Show a cute SVG with your primary color
export default function Custom404() {
  return (
    <section className="relative bg-base-100 text-base-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
      <div className="flex items-center space-x-2">
        <Image alt="logo" src={logo} unoptimized={true} className="w-15 h-auto" />
        <Image alt="tarjeto" src={tarjeto} unoptimized={true} className="w-15 h-auto" />
      </div>
      <p className="text-lg md:text-xl font-semibold">
        Ups! Parece que lo que estabas buscando no está aquí...
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn btn-sm">
          Inicio
        </Link>

        <ButtonSupport />
      </div>
    </section>
  );
}

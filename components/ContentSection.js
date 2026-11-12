"use client";
import Feature from "./common/Feature";
import dashboard from "@/public/icons/dashboards/Dashboard - Home - Desktop.png";
import dashboard1 from "@/public/icons/dashboards/Dashboard - Clients - Desktop 1.png";
import phoneCard from "@/public/icons/features/iPhone 16 - Card View.png";
import phoneFeed from "@/public/icons/iphone_mockup/iPhone 16 - Feed.png";
import phoneFeedDark from "@/public/icons/iphone_mockup/iPhone 16 - Feed - Dark.png";
import dashboard5 from "@/public/icons/dashboards/Dashboard - Team - Desktop 1-2.png";
import dashboard6 from "@/public/icons/dashboards/Dashboard - Stores - Desktop.png";

const className = "md:w-220 h-auto";
const FEATURES = [
  {
    title: "Todo claro desde el inicio.",
    description: (
      <>
        Cuántas personas vinieron hoy, cuántas ya habían venido antes, a qué hora llegan más y qué
        tan activo está el día. <br />
        <br />
        <span className="text-content-text-brand">Tu negocio resumido en una sola pantalla.</span>
      </>
    ),
    phone: { src: dashboard, srcDark: dashboard, alt: "Resumen", className: className },
  },
  {
    title: "Clientes con nombre y ritmo.",
    description: (
      <>
        Quién viene seguido, quién dejó de venir, en qué nivel anda cada uno. <br /> <br />
        Aquí no hay cifras sueltas: hay personas que puedes entender y a las que{" "}
        <span className="text-content-text-brand"> puedes responder mejor.</span>
      </>
    ),
    phone: { src: dashboard1, srcDark: dashboard1, alt: "Clientes", className: className },
  },
  {
    title: (
      <>
        Porque una promo bien hecha{" "}
        <span className="text-content-text-brand">vale más que mil palabras.</span>
      </>
    ),
    description: (
      <>
        Elige el tipo de beneficio, define reglas, ponle vigencia y déjala lista. Después revisa
        canjes, resultados y cómo se está moviendo.
      </>
    ),
    phone: { src: phoneFeed, srcDark: phoneFeedDark, alt: "Phone Feed" }, // todo: cambiar imagen
  },
  {
    title: "La lealtad, bien definida.",
    description: (
      <>
        Cuatro niveles que tú configuras: <span className="text-[#CA3500] font-bold">Bronce</span>,{" "}
        <span className="text-[#90A1B9] font-bold">Plata</span>,{" "}
        <span className="text-[#F0B100] font-bold">Oro</span> y{" "}
        <span className="text-[#EC003F] font-bold">Rubí</span>. Cada uno con sus visitas requeridas
        y sus beneficios. <br /> <br /> Tu cliente ve su avance en tiempo real.{" "}
        <span className="text-content-text-brand">Tú defines las reglas.</span>
      </>
    ),
    phone: { src: phoneCard, srcDark: phoneCard, alt: "Card View" }, // todo: cambiar imagen
  },
  {
    title: "Tu equipo, en sintonía.",
    description: (
      <>
        Agrega a tu equipo, asigna roles y mantén el control de quién opera qué.
        <br />
        <br /> Porque un negocio bien puesto{" "}
        <span className="text-content-text-brand">no depende de una sola persona.</span>
      </>
    ),
    phone: { src: dashboard5, srcDark: dashboard5, alt: "Equipo", className: className },
  },
  {
    title: "Cuando crezcas, Tarjeto crece contigo.",
    description: (
      <>
        Si operas en más de un punto, cada sucursal tiene su propia configuración, su propio equipo
        y sus propios datos. <br />
        <br /> <span className="text-content-text-brand">Todo conectado, todo ordenado.</span>
      </>
    ),
    phone: { src: dashboard6, srcDark: dashboard6, alt: "Tiendas", className: className },
  },
];

const ContentSection = () => {
  return (
    <section
      id="plataforma"
      className="w-full h-auto bg-surface-raised flex flex-col mt-21 px-5 py-8 md:px-15 md:py-16 gap-32 md:gap-16 scroll-mt-28"
    >
      <h2 className="sr-only">Funciones de la plataforma Tarjeto Negocios</h2>
      {[...FEATURES].map((feat, i) => (
        <Feature
          key={feat.title}
          reverse={i % 2 === 0}
          Title={feat.title}
          Description={feat.description}
          Img={feat.phone}
        />
      ))}
    </section>
  );
};

export default ContentSection;

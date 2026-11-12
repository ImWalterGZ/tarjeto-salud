"use client";
import Feature from "../common/Feature";
import HealthFeatureVisual from "./HealthFeatureVisual";
import {
  MapPinHeartFill,
  Search,
  KidStar,
  AccountBalanceWalletFill,
  WorkspacePremium,
  NotificationsUnread,
  LocalFireDepartmentFill,
  LocalActivity,
  FeaturedSeasonalAndGifts,
} from "@material-symbols-svg/react";

const FEATURES = [
  {
    // * Mapa
    icon: MapPinHeartFill,
    title: "Tus citas, claras y a la vista",
    description: (
      <>
        Consulta las citas registradas en la experiencia y{" "}
        <span className="text-content-text-brand">ubica tu próximo seguimiento</span> sin perder
        detalles importantes.
      </>
    ),
    pills: [
      { icon: Search, label: "Consulta por fecha o especialidad" },
      { icon: KidStar, label: "Seguimiento a la vista" },
    ],
    visual: "appointments",
  },
  {
    // * Cartera
    icon: AccountBalanceWalletFill,
    title: "Información organizada, acceso controlado",
    description: (
      <>
        Reúne datos administrativos y de seguimiento{" "}
        <span className="text-content-text-brand">en un solo lugar.</span> La propuesta separa
        perfiles y limita el acceso a quien esté autorizado.
      </>
    ),
    pills: [
      {
        icon: WorkspacePremium,
        label: "Acceso definido por rol",
      },
      { icon: NotificationsUnread, label: "Recordatorios configurables" },
    ],
    reverse: false,
    visual: "access",
  },
  {
    // * Promo
    icon: LocalFireDepartmentFill,
    title: "Recordatorios que acompañan tu cuidado",
    description: (
      <>
        <span className="text-content-text-brand">Sin saturar tu atención.</span> Recibe avisos
        sobre próximas citas y tareas de seguimiento que tú autorices.
      </>
    ),
    pills: [
      { icon: LocalActivity, label: "Avisos de citas y seguimiento" },
      { icon: FeaturedSeasonalAndGifts, label: "Preferencias de comunicación" },
    ],
    visual: "reminders",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="beneficios"
      className="w-full h-auto bg-surface-raised flex flex-col mt-21 px-5 py-8 md:px-15 md:py-16 gap-32 md:gap-16 scroll-mt-28 rounded-48"
    >
      <h2 className="sr-only">Herramientas de Tarjeto Salud</h2>
      {[...FEATURES].map((feat) => (
        <Feature
          key={feat.title}
          reverse={feat.reverse}
          PrimarySymbol={feat.icon}
          Title={feat.title}
          Description={feat.description}
          Pills={feat.pills}
          Visual={<HealthFeatureVisual type={feat.visual} />}
        />
      ))}
    </section>
  );
};

export default FeaturesSection;

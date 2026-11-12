import HeaderLegalNegocios from "@/components/layout/Header/HeaderLegalNegocios";
import Footer from "@/components/layout/Footer/Footer"
import { LEGAL_LAST_UPDATED, customerPrivacyPolicy } from "@/libs/legal";
import { getSEOTags } from "@/libs/seo";
import LegalDoc from "@/components/legal/LegalDoc";

const PAGE_DESCRIPTION =
  "Consulta el aviso de privacidad de Tarjeto para negocios y conoce como tratamos la informacion de cuentas comerciales, equipos y operaciones de la plataforma.";

export async function generateMetadata() {
  return getSEOTags({
    title: "Aviso de Privacidad | Tarjeto Negocios",
    description: PAGE_DESCRIPTION,
    canonicalUrlRelative: "/negocios/privacy-policy",
    openGraph: {
      title: "Aviso de Privacidad | Tarjeto Negocios",
      description: PAGE_DESCRIPTION,
      url: "/negocios/privacy-policy",
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  });
}

export default function BusinessPrivacyPolicyPage() {
  return (
    <main className="w-full">
      <HeaderLegalNegocios />
      <LegalDoc
        title={customerPrivacyPolicy.title}
        description={customerPrivacyPolicy.description}
        lastUpdated={LEGAL_LAST_UPDATED}
        sections={customerPrivacyPolicy.sections}
      />
      <Footer />
    </main>
  );
}

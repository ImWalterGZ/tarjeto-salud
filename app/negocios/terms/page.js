import HeaderLegalNegocios from "@/components/layout/Header/HeaderLegalNegocios";
import Footer from "@/components/layout/Footer/Footer"
import LegalDoc from "@/components/legal/LegalDoc";
import { LEGAL_LAST_UPDATED, customerTerms } from "@/libs/legal";
import { getSEOTags } from "@/libs/seo";

const PAGE_DESCRIPTION =
  "Consulta los terminos y condiciones de Tarjeto para negocios, incluyendo el uso de la plataforma, cuentas comerciales, promociones y equipos internos.";

export async function generateMetadata() {
  return getSEOTags({
    title: "Terminos y Condiciones | Tarjeto Negocios",
    description: PAGE_DESCRIPTION,
    canonicalUrlRelative: "/negocios/terms",
    openGraph: {
      title: "Terminos y Condiciones | Tarjeto Negocios",
      description: PAGE_DESCRIPTION,
      url: "/negocios/terms",
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

export default function BusinessTermsPage() {
  return (
    <main className="w-full">
      <HeaderLegalNegocios />
      <LegalDoc
        title={customerTerms.title}
        description={customerTerms.description}
        lastUpdated={LEGAL_LAST_UPDATED}
        sections={customerTerms.sections}
      />
      <Footer />
    </main>
  );
}

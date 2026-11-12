import HeaderTos from "@/components/layout/Header/HeaderTos";
import Footer from "@/components/layout/Footer/Footer"
import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED, customerTerms } from "@/libs/legal";
import { getSEOTags } from "@/libs/seo";
import LegalDoc from "@/components/legal/LegalDoc";

const PAGE_DESCRIPTION =
  "Deslinde de responsabilidad y condiciones de uso de Tarjeto Salud.";

export async function generateMetadata() {
  return getSEOTags({
    title: "Deslinde de responsabilidad | Tarjeto Salud",
    description: PAGE_DESCRIPTION,
    canonicalUrlRelative: "/terms",
    openGraph: {
      title: "Deslinde de responsabilidad | Tarjeto Salud",
      description: PAGE_DESCRIPTION,
      url: "/terms",
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

export default function TermsPage() {
  return (
    <main className="w-full">
      <HeaderTos />
      <LegalDoc
        title={customerTerms.title}
        description={customerTerms.description}
        lastUpdated={LEGAL_LAST_UPDATED}
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        sections={customerTerms.sections}
      />
      <Footer />
    </main>
  );
}

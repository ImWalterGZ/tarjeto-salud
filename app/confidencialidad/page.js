import HeaderTos from "@/components/layout/Header/HeaderTos";
import Footer from "@/components/layout/Footer/Footer";
import LegalDoc from "@/components/legal/LegalDoc";
import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED, confidentialityNotice } from "@/libs/legal";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata() {
  return getSEOTags({
    title: "Aviso de confidencialidad | Tarjeto Salud",
    description: "Aviso de confidencialidad de Tarjeto Salud.",
    canonicalUrlRelative: "/confidencialidad",
    robots: { index: false, follow: true },
  });
}

export default function ConfidentialityPage() {
  return (
    <main className="w-full">
      <HeaderTos />
      <LegalDoc
        title={confidentialityNotice.title}
        description={confidentialityNotice.description}
        lastUpdated={LEGAL_LAST_UPDATED}
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        sections={confidentialityNotice.sections}
      />
      <Footer />
    </main>
  );
}

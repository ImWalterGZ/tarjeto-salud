import HeaderTos from "@/components/layout/Header/HeaderTos";
import Footer from "@/components/layout/Footer/Footer"
import LegalDoc from "@/components/legal/LegalDoc";
import { LEGAL_LAST_UPDATED, LEGAL_EFFECTIVE_DATE, customerPrivacyPolicy } from "@/libs/legal";
import { getSEOTags } from "@/libs/seo";

const PAGE_DESCRIPTION =
  "Aviso de privacidad integral de Tarjeto Salud.";

export async function generateMetadata() {
  return getSEOTags({
    title: "Aviso de privacidad | Tarjeto Salud",
    description: PAGE_DESCRIPTION,
    canonicalUrlRelative: "/privacy-policy",
    openGraph: {
      title: "Aviso de privacidad | Tarjeto Salud",
      description: PAGE_DESCRIPTION,
      url: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full">
      <HeaderTos />
      <LegalDoc
        title={customerPrivacyPolicy.title}
        description={customerPrivacyPolicy.description}
        lastUpdated={LEGAL_LAST_UPDATED}
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        sections={customerPrivacyPolicy.sections}
      />

      <Footer />
    </main>
  );
}

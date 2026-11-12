import { Suspense } from "react";
import Script from "next/script";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/features/Hero";
import BusinessCategory from "@/components/BusinessCategory";
import HeroInfo from "@/components/features/HeroInfo";
import StepsSection from "@/components/features/StepsSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import UserSection from "@/components/features/UserSection";
import UserShortcuts from "@/components/features/UserShortcuts";
import FAQ from "@/components/common/FAQ";
import { faqList } from "@/libs/faqList";
import CTA from "@/components/common/CTA";
import HowItWorks from "@/components/features/HowItWorks";
import Footer from "@/components/layout/Footer/Footer";
import ProtectionSection from "@/components/features/ProtectionSection";
import {
  getPublicAbsoluteUrl,
  getRequestSiteContext,
  getSchemaGraph,
  getSEOTags,
  getSoftwareApplicationSchema,
  getWebsiteSchema,
} from "@/libs/seo";

const HOME_DESCRIPTION =
  "Tarjeto Salud organiza información de salud, citas y recordatorios con privacidad y acceso controlado.";

export async function generateMetadata() {
  const siteContext = await getRequestSiteContext();

  return getSEOTags({
    title: "Tarjeto Salud | Información de salud clara y protegida",
    description: HOME_DESCRIPTION,
    keywords: [
      "salud digital",
      "privacidad de datos de salud",
      "citas médicas",
      "recordatorios de salud",
      "confidencialidad de la información",
      "Tarjeto",
    ],
    canonicalUrlRelative: "/",
    openGraph: {
      title: "Tarjeto Salud | Información de salud clara y protegida",
      description: HOME_DESCRIPTION,
      url: "/",
      images: [getPublicAbsoluteUrl("/opengraph-image", siteContext)],
    },
  });
}

export default async function Home() {
  const siteContext = await getRequestSiteContext();

  return (
    <>
      {/* Customer landing schema: WebSite + app for end users */}
      <Script
        id="json-ld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSchemaGraph(
              getWebsiteSchema({
                url: getPublicAbsoluteUrl("/", siteContext),
                description: HOME_DESCRIPTION,
                siteUrl: siteContext.siteUrl,
              }),
              getSoftwareApplicationSchema({
                name: "Tarjeto Salud",
                url: getPublicAbsoluteUrl("/", siteContext),
                description: HOME_DESCRIPTION,
                applicationCategory: "HealthApplication",
                audienceType: "PeopleAudience",
                siteUrl: siteContext.siteUrl,
              })
            )
          ),
        }}
      />
      <Suspense>
        <Header />
      </Suspense>

      <main className="select-none">
        <Hero />
        <BusinessCategory />
        <HeroInfo />
        <StepsSection />
        <FeaturesSection />
        <HowItWorks />
        <ProtectionSection />
        <UserSection />
        <UserShortcuts />
        <FAQ faqList={faqList} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

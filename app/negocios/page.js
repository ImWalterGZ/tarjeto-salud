import { Suspense } from "react";
import HeaderNegocios from "@/components/layout/Header/HeaderNegocios";
import HeroNegocios from "@/components/HeroNegocios";
import ContentSection from "@/components/ContentSection";
import Devices from "@/components/Devices";
import FAQ from "@/components/common/FAQ";
import { faqListNegocios } from "@/libs/faqList";
import CTANegocios from "@/components/common/CTANegocios";
import Footer from "@/components/layout/Footer/Footer"
import {
  getPublicAbsoluteUrl,
  getRequestSiteContext,
  getSchemaGraph,
  getSEOTags,
  getServiceSchema,
  getSoftwareApplicationSchema,
} from "@/libs/seo";
import Script from "next/script";

const BUSINESS_DESCRIPTION =
  "Tarjeto ayuda a negocios locales a lanzar programas de lealtad digitales, promociones inteligentes y estrategias de retención sin tarjetas físicas.";

export async function generateMetadata() {
  const siteContext = await getRequestSiteContext();

  return getSEOTags({
    title: "Tarjeto para Negocios | Programa de lealtad digital",
    description: BUSINESS_DESCRIPTION,
    keywords: [
      "software de lealtad",
      "programas de lealtad",
      "plataforma de lealtad para negocios",
      "fidelización de clientes",
      "promociones para negocios",
      "negocios locales",
      "retención de clientes",
      "tarjeta de sellos digital",
      "Tarjeto",
    ],
    canonicalUrlRelative: "/negocios",
    openGraph: {
      title: "Tarjeto para Negocios | Fidelización y promociones inteligentes",
      description: BUSINESS_DESCRIPTION,
      url: "/negocios",
      images: [getPublicAbsoluteUrl("/negocios/opengraph-image", siteContext)],
    },
  });
}

export default async function NegociosPage() {
  const siteContext = await getRequestSiteContext();

  return (
    <>
      {/* Business landing schema: service + business application */}
      <Script
        id="json-ld-negocios"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSchemaGraph(
              getServiceSchema({
                name: "Tarjeto para Negocios",
                url: getPublicAbsoluteUrl("/negocios", siteContext),
                description: BUSINESS_DESCRIPTION,
                siteUrl: siteContext.siteUrl,
              }),
              getSoftwareApplicationSchema({
                name: "Tarjeto para Negocios",
                url: getPublicAbsoluteUrl("/negocios", siteContext),
                description: BUSINESS_DESCRIPTION,
                applicationCategory: "BusinessApplication",
                audienceType: "BusinessAudience",
                siteUrl: siteContext.siteUrl,
              })
            )
          ),
        }}
      />
      <Suspense>
        <HeaderNegocios />
      </Suspense>
      <main>
        <HeroNegocios />
        <ContentSection />
        <Devices />
        <FAQ faqList={faqListNegocios} />
        <CTANegocios />
      </main>
      <Footer />
    </>
  );
}

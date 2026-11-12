import config from "@/config";
import { headers } from "next/headers";

const DEFAULT_OG_IMAGE = "/opengraph-image";
const DEFAULT_LOCALE = "es_MX";
const DEFAULT_LANGUAGE = "es-MX";
const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const ensureAbsoluteUrl = (value) => {
  if (!value) return value;

  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
};

export const getSiteUrl = () => {
  const resolvedUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    config.domainName;

  return ensureAbsoluteUrl(resolvedUrl).replace(/\/$/, "");
};

export const getRequestSiteContext = async () => {
  try {
    const requestHeaders = await headers();
    const host =
      requestHeaders.get("x-forwarded-host") ||
      requestHeaders.get("host") ||
      new URL(getSiteUrl()).host;
    const proto =
      requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
    const siteUrl = `${proto}://${host}`.replace(/\/$/, "");

    return {
      host: host.toLowerCase(),
      siteUrl,
      isBusinessLanding: host.toLowerCase().includes("tarjeto.app"),
    };
  } catch {
    const fallbackSiteUrl = getSiteUrl();

    return {
      host: new URL(fallbackSiteUrl).host.toLowerCase(),
      siteUrl: fallbackSiteUrl,
      isBusinessLanding: fallbackSiteUrl.includes("tarjeto.app"),
    };
  }
};

export const getPublicPath = (path = "/", siteContext) => {
  if (!siteContext?.isBusinessLanding) {
    return path;
  }

  if (!path.startsWith("/negocios")) {
    return path;
  }

  const publicPath = path.replace(/^\/negocios(?=\/|$)/, "");

  return publicPath || "/";
};

export const getAbsoluteUrl = (path = "/", siteUrl = getSiteUrl()) => {
  return new URL(path, `${siteUrl}/`).toString();
};

export const getPublicAbsoluteUrl = (path = "/", siteContext) => {
  const siteUrl = siteContext?.siteUrl || getSiteUrl();
  return getAbsoluteUrl(getPublicPath(path, siteContext), siteUrl);
};

export const getSchemaDomainDescription = (siteContext) => {
  if (siteContext?.isBusinessLanding) {
    return "Tarjeto ayuda a negocios locales a lanzar programas de lealtad digitales, promociones inteligentes y estrategias de retencion.";
  }

  return "Tarjeto permite guardar tarjetas de lealtad digitales, registrar visitas y recibir recompensas en negocios locales.";
};

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can customize it for each page.
// It's already added in the root layout.js so you don't have to add it to every page
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = async ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  robots,
  extraTags,
} = {}) => {
  const siteContext = await getRequestSiteContext();
  const resolvedTitle = title || config.appName;
  const resolvedDescription = description || config.appDescription;
  const metadataBase = new URL(`${siteContext.siteUrl}/`);
  const canonicalPath = canonicalUrlRelative ? getPublicPath(canonicalUrlRelative, siteContext) : "/";
  const canonicalUrl = canonicalUrlRelative
    ? getPublicAbsoluteUrl(canonicalUrlRelative, siteContext)
    : siteContext.siteUrl;
  const openGraphUrl = openGraph?.url
    ? getPublicAbsoluteUrl(openGraph.url, siteContext)
    : canonicalUrl;
  const openGraphImages =
    openGraph?.images || [getAbsoluteUrl(DEFAULT_OG_IMAGE, siteContext.siteUrl)];

  return {
    // up to 50 characters (what does your app do for the user?)
    title: resolvedTitle,
    // up to 160 characters (how does your app help the user?)
    description: resolvedDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName, "lealtad digital", "fidelizacion de clientes"],
    applicationName: config.appName,
    category: "technology",
    referrer: "origin-when-cross-origin",
    robots: robots || DEFAULT_ROBOTS,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase,

    openGraph: {
      title: openGraph?.title || resolvedTitle,
      description: openGraph?.description || resolvedDescription,
      url: openGraphUrl,
      siteName: config.appName,
      images: openGraphImages,
      locale: DEFAULT_LOCALE,
      type: openGraph?.type || "website",
    },

    twitter: {
      title: openGraph?.title || resolvedTitle,
      description: openGraph?.description || resolvedDescription,
      images: openGraphImages,
      card: "summary_large_image",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalPath },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// todo: Agregar los perfiles de redes sociales en cuanto se pongan. 
// * Se utiliza para enriquecer el knowledge panel de Google
export const getOrganizationSchema = ({
  url = getAbsoluteUrl("/"),
  description = config.appDescription,
  siteUrl,
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${getAbsoluteUrl("/", siteUrl)}#organization`,
  name: config.appName,
  description,
  url,
  logo: getAbsoluteUrl("/icon.png", siteUrl),
  image: getAbsoluteUrl("/icon.png", siteUrl),
  email: config.resend.supportEmail,
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  areaServed: "MX",
});

export const getWebsiteSchema = ({
  url = getAbsoluteUrl("/"),
  description = config.appDescription,
  siteUrl,
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}#website`,
  name: config.appName,
  url,
  description,
  inLanguage: DEFAULT_LANGUAGE,
  publisher: {
    "@id": `${getAbsoluteUrl("/", siteUrl)}#organization`,
  },
});

export const getSoftwareApplicationSchema = ({
  name = config.appName,
  url = getAbsoluteUrl("/"),
  description = config.appDescription,
  applicationCategory = "BusinessApplication",
  audienceType,
  siteUrl,
} = {}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software-application`,
    name,
    description,
    url,
    image: getAbsoluteUrl("/icon.png", siteUrl),
    operatingSystem: "iOS, Android, Web",
    applicationCategory,
    inLanguage: DEFAULT_LANGUAGE,
    areaServed: "MX",
    provider: {
      "@id": `${getAbsoluteUrl("/", siteUrl)}#organization`,
    },
  };

  if (audienceType) {
    schema.audience = {
      "@type": audienceType,
    };
  }

  return schema;
};

export const getServiceSchema = ({
  name,
  url,
  description,
  serviceType,
  siteUrl,
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  name: name || config.appName,
  url: url || getAbsoluteUrl("/"),
  description: description || config.appDescription,
  serviceType: serviceType || "Programa de lealtad digital para negocios locales",
  areaServed: "MX",
  inLanguage: DEFAULT_LANGUAGE,
  provider: {
    "@id": `${getAbsoluteUrl("/", siteUrl)}#organization`,
  },
  audience: {
    "@type": "BusinessAudience",
  },
});

export const getSchemaGraph = (...schemas) => ({
  "@context": "https://schema.org",
  "@graph": schemas.map((schema) => {
    const graphNode = { ...schema };
    delete graphNode["@context"];
    return graphNode;
  }),
});

// Structured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (Organization, SoftwareApplication...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structured: https://search.google.com/test/rich-results
// This schema defines Tarjeto as a SaaS/Software Application
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = ({ description, url } = {}) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSoftwareApplicationSchema({ description, url })),
      }}
    ></script>
  );
};

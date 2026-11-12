import { getRequestSiteContext } from "@/libs/seo";

export default async function robots() {
  const siteContext = await getRequestSiteContext();
  const siteUrl = siteContext.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: ["/api/", "/admin/", "/dashboard/"], // * rutas que no se usan debido a que es landing
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

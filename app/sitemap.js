import { getPublicAbsoluteUrl, getRequestSiteContext } from "@/libs/seo";

const customerRoutes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  // {
  //   path: "/tos",
  //   changeFrequency: "yearly",
  //   priority: 0.3,
  // },
];

const businessRoutes = [
  {
    path: "/negocios",
    changeFrequency: "weekly",
    priority: 1,
  },
];

const developmentRoutes = [
  ...customerRoutes,
  {
    path: "/negocios",
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

export default async function sitemap() {
  const siteContext = await getRequestSiteContext();
  const lastModified = new Date(); // * Considerar cambiar a la fecha de build u otra
  const routes = siteContext.host.includes("localhost")
    ? developmentRoutes
    : siteContext.isBusinessLanding
      ? businessRoutes
      : customerRoutes;

  return routes.map((route) => ({
    url: getPublicAbsoluteUrl(route.path, siteContext),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

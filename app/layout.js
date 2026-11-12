import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import {
  getPublicAbsoluteUrl,
  getRequestSiteContext,
  getSchemaDomainDescription,
  getSEOTags,
  getOrganizationSchema,
} from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});
const lightTheme = config.colors.defaultTheme;
const darkTheme =
  config.colors.availableThemes.find((themeName) => themeName !== lightTheme) || `${lightTheme}-dark`;
const themeInitScript = `
  (() => {
    const root = document.documentElement;
    const mode = ${JSON.stringify(config.colors.mode)};
    const lightTheme = ${JSON.stringify(lightTheme)};
    const darkTheme = ${JSON.stringify(darkTheme)};
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveTheme = (prefersDark) => {
      if (mode === "light") return lightTheme;
      if (mode === "dark") return darkTheme;
      return prefersDark ? darkTheme : lightTheme;
    };

    const applyTheme = (prefersDark) => {
      const theme = resolveTheme(prefersDark);
      const isDark = theme === darkTheme;

      root.dataset.theme = theme;
      root.classList.toggle("dark", isDark);
      root.style.colorScheme = isDark ? "dark" : "light";
    };

    applyTheme(mediaQuery.matches);

    if (mode === "auto") {
      const handleChange = (event) => applyTheme(event.matches);

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", handleChange);
      } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(handleChange);
      }
    }
  })();
`;

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: config.colors.brand.primary },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export async function generateMetadata() {
  return getSEOTags();
}

export default async function RootLayout({ children }) {
  const siteContext = await getRequestSiteContext();
  const organizationSchema = getOrganizationSchema({
    url: getPublicAbsoluteUrl("/", siteContext),
    description: getSchemaDomainDescription(siteContext),
    siteUrl: siteContext.siteUrl,
  });

  return (
    <html
      lang="es-MX"
      data-theme={lightTheme}
      className={`${inter.className} ${inter.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

const config = {
  // REQUIRED
  appName: "Tarjeto",
  apiBaseUrl:
    process.env.NEXT_PUBLIC_TARJETO_API_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://api.tarjeto.app"),
  // REQUIRED: short description for SEO tags
  // Bilateral tone (customers + businesses) as you requested
  appDescription:
    "Una experiencia de salud digital para organizar información, citas y recordatorios con privacidad y acceso controlado.",

  // REQUIRED: no https://, no trailing slash
  domainName: "tarjeto.app",

  // Landing tagline / hero copy (so you can reuse across pages/components)
  marketing: {
    tagline: "Información de salud clara y protegida.",
    headline: "Tu salud, siempre a la mano.",
    subheadline:
      "Tarjeto Salud reúne tus citas, recordatorios e información de salud en un espacio diseñado para la confidencialidad y el acceso responsable.",
    primaryCta: "Conocer Tarjeto Salud",
    secondaryCta: "Ver protección de datos",
  },

  // Customer support
  // If you don't use Crisp, keep crisp removed/empty AND set resend.supportEmail
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },

  aws: {
    // Leave ready for later integration
    bucket: "",
    bucketUrl: "",
    cdn: "",
  },

  mailAddress: "soporte@tarjeto.app",

  resend: {
    // Use tarjeto.app for now as you requested
    fromNoReply: `Tarjeto <noreply@tarjeto.app>`,
    fromAdmin: `Tarjeto <admin@tarjeto.app>`,
    supportEmail: "soporte@tarjeto.app",
  },

  address: "Avenida Salud Digital 1200, Oficina 402, Colonia Centro, Chihuahua, Chihuahua, C.P. 31000, México",

  colors: {
    /**
     * Logical theme name.
     * This maps to a DaisyUI theme via data-theme,
     * but config.js should not know implementation details.
     */
    defaultTheme: "tarjeto",

    /**
     * Supported themes in the product.
     * Used by the theme switcher UI and persisted in user preferences.
     */
    availableThemes: ["tarjeto", "tarjeto-dark"],

    /**
     * Default color mode behavior.
     * - "auto": follows system preference
     * - "light": forces tarjeto
     * - "dark": forces tarjeto-dark
     */
    mode: "auto",

    /**
     * Brand color reference.
     * Used for meta tags, loading bar, mobile browser UI, etc.
     * NOT for component styling.
     */
    brand: {
      primary: "#2563EB",
    },
  },

  auth: {
    // Auth routes for the web app (merchants/admin)
    loginUrl: "/login",
    // After login, send users into onboarding first (since you need role selection & business creation)
    callbackUrl: "/onboarding",
    merchantDashboardUrl: "/dashboard",
    adminDashboardUrl: "/admin/dashboard",
  },

  onboarding: {
    // Your described flow
    steps: [
      "create_account",
      "choose_role", // customer or business
      "customer_app_download",
      "business_create_profile",
    ],
    customerDownload: {
      // Placeholder links until you publish
      iosUrl: "",
      androidUrl: "",
      message:
        "Tarjeto para clientes vive en la app móvil. Descárgala para guardar tarjetas y recibir recompensas.",
    },
  },

  admin: {
    // Multiple admin emails allowed
    emails: ["walter.glez.03@gmail.com", "gzzz@tarjeto.app", "admin@tarjeto.app"],
  },

  landing: {
    sections: [
      "hero",
      "how_it_works",
      "benefits_business",
      "benefits_customers",
      "pricing",
      "testimonials",
      "faq",
      "cta_waitlist",
    ],

    // Replace portfolio with use cases + future “logos of affiliated businesses”
    useCases: [
      {
        id: "cafeterias",
        title: "Cafeterías",
        subtitle: "Rachas, recompensas y promociones por horario",
        description:
          "Convierte visitas frecuentes en hábitos. Ofrece recompensas por racha y promociones que no regalen margen.",
      },
      {
        id: "barberias",
        title: "Barberías",
        subtitle: "Fidelización simple y repetible",
        description:
          "Una tarjeta perforada digital que impulsa el regreso. Promos fáciles de canjear y medir.",
      },
      {
        id: "restaurantes",
        title: "Restaurantes",
        subtitle: "Promos inteligentes, no descuentos ciegos",
        description:
          "Activa promociones por horario o frecuencia para llenar horas muertas sin quemar tu marca.",
      },
      {
        id: "gimnasios",
        title: "Gimnasios y estudios",
        subtitle: "Membresías y recompensas (post-MVP)",
        description:
          "Ideal para retención y hábitos. Roadmap: membresías, niveles y automatización.",
        isRoadmap: true,
      },
    ],

    affiliatedLogos: {
      // Start with placeholder logos; swap later
      enabled: true,
      title: "Negocios afiliados",
      logos: [
        // { name: "Café Ejemplo", image: "/logos/cafe-ejemplo.svg", href: "#" }
      ],
    },
  },
};

export default config;

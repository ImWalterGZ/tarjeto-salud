/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permite abrir el servidor de desarrollo desde dispositivos de la red Tailscale.
  // Sin esta lista, Next puede bloquear recursos/HMR por origen cruzado y dejar la
  // interfaz con sus estados iniciales de animación.
  allowedDevOrigins: ["100.67.113.32"],
  
  // Turbopack configuration (empty config silences the warning)
  turbopack: {},
  
  images: {
    remotePatterns: [
      // NextJS <Image> component needs to whitelist domains for src={}
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https", 
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "vumbnail.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "http",
        hostname: "m.media-amazon.com",
      },
    ],
  },
  
  // Webpack config kept for production builds or when explicitly using --webpack
  webpack: (config, { webpack, isServer }) => {
    // Ignore MongoDB's optional dependencies to prevent build warnings
    if (isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(kerberos|@mongodb-js\/zstd|@aws-sdk\/credential-providers|gcp-metadata|snappy|socks|aws4|mongodb-client-encryption)$/,
        })
      );
    }
    
    return config;
  },
};

module.exports = nextConfig;

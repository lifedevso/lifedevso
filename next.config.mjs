import createNextIntlPlugin from "next-intl/plugin";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/mp/:path*",
        destination: `https://notion-nice.com/api/mp/:path*`,
      },
      {
        source: "/api/pay/:path*",
        // destination: `http://localhost:8000/pay/:path*`,
        destination: `https://notion-nice.com/api/pay/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

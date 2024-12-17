import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/join-member",
        destination: "/",
        permanent: true,
      },
    ];
  },
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

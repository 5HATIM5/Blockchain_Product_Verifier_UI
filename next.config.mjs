/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/login",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        statusCode: 301,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;

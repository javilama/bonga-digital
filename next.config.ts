import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["https://www.mazdavardi.com.co/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nissan-cdn.net",
        pathname: "/**",
      },
       {
         protocol: "https",
         hostname: "images.unsplash.com",
         pathname: "/**",
       },
    ],
  },
};

export default nextConfig;

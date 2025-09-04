import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ['images.unsplash.com'], // Adicione outros domínios de imagens se necessário
    formats: ['image/avif', 'image/webp'],
  },
  // Otimizações adicionais
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vobile-apps.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'], // 启用现代图片格式
  },
  // 启用实验性功能提升性能
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog'],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  // 启用压缩
  compress: true,
};

export default nextConfig;

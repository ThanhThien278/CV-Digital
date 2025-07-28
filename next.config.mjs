const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // ✅ Cái này sẽ thay thế `next export`
  basePath: isProd ? '/CV-Digital' : '',
  assetPrefix: isProd ? '/CV-Digital/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
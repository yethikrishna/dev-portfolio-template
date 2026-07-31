/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Skip ESLint during production builds — run `npm run lint` separately
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 60,
  },

  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Robots-Tag',
          value: 'index, follow'
        },
      ]
    }
  ],

  // Compress outputs
  compress: true,

  // Enable experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Configure webpack if needed
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },

  // Add redirect handling
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gadgets',
        destination: '/uses',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

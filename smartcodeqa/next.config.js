/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co'
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ],
    domains: ['localhost', 'smartcodeqa.com'],
    // Optimize image formats and quality
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600, 2048],
    imageSizes: [16, 32, 48, 64, 96],
    // Enable lazy loading by default
    minimumCacheTTL: 60,
    // Optimize for performance
    loader: 'default',
    path: '/_next/image'
  },
  
  // React 18 concurrent features
  reactStrictMode: true,
  
  // Optimize swc minification
  swcMinify: true,
  
  // Enable compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false
  },
  
  // Performance optimizations
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Optimize server components
    serverComponentsExternalPackages: ['resend']
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Cache control for static assets
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Cache HTML for 1 hour
      {
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' }
        ]
      },
      // Cache API responses
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0, must-revalidate' }
        ]
      }
    ];
  },
  
  // Compress pages
  compress: true,
  
  // Optimize production builds
  poweredByHeader: false
};

module.exports = nextConfig;

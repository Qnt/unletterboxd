/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.themoviedb.org',
      },
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
      },
    ],
  },
};

export default nextConfig;

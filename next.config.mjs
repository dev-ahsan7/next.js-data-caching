/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://picsum.photos/seed/headphones/600/600
  // https://picsum.photos/seed/atomichabits/400/600
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

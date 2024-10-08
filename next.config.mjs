/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'images.rawpixel.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },

      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;

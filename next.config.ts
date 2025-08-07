import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
      'randomuser.me',
      'ui-avatars.com',
      'gravatar.com',
      'github.com',
      'githubusercontent.com',
      'googleusercontent.com',
      'facebook.com',
      'fbcdn.net',
      'cdninstagram.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'secure.gravatar.com'
    ],
  },
};

export default nextConfig;

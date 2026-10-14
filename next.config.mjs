/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images:{
    qualities:[75,85,90],
    formats:['image/webp'],
    remotePatterns:[
      {
      protocol:'https',
      hostname:'cdn.sanity.io',
        },
    ],
  },
};


export default nextConfig;

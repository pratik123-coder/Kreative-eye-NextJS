/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co","i.imgur.com", "s3-alpha-sig.figma.com", "imgur.com","lh3.googleusercontent.com","youtube.com"],
  },
}


module.exports = nextConfig

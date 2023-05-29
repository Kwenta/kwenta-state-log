/** @type {import('next').NextConfig} */

module.exports = ({
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true
  },
});

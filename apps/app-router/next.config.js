/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@company/components', '@company/widgets'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

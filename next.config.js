const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    swcMinify: true,
    trailingSlash: true,
    reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)

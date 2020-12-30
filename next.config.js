const path = require('path')
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig

/**
 * build analyze setting
 * @type {(function(*=): *)|*}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})

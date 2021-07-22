module.exports = {
  reactStrictMode: true,
}

const path = require('path')
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  //distDir: "build"
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(nextConfig)

import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: 'export'
})

export default withNextra({
  basePath: '/info3d',  // Add this line to specify the base path for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: false }
})
